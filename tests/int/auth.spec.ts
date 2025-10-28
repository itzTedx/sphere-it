import { beforeEach, describe, expect, it, vi } from "vitest";

let capturedConfig: unknown;

vi.mock("better-auth", () => {
  return {
    betterAuth: (config: unknown) => {
      capturedConfig = config;
      return {};
    },
  };
});

vi.mock("better-auth/adapters/drizzle", () => ({
  drizzleAdapter: vi.fn(() => ({})),
}));

vi.mock("@/server", () => ({
  db: {},
}));

const MOCK_ENV = {
  BASE_URL: "http://localhost:3000",
  DATABASE_URL: "postgres://user:pass@localhost:5432/db",
  LINKEDIN_CLIENT_ID: "test-client-id",
  LINKEDIN_CLIENT_SECRET: "test-client-secret",
  SMTP_HOST: "smtp.local",
  SMTP_PORT: "2525",
  SMTP_USER: "user",
  SMTP_PASS: "pass",
  SMTP_FROM: "no-reply@sphereitglobal.com",
  RECEIVER_EMAIL: "sales@sphereitglobal.com",
};

vi.mock("@/lib/env/server", () => ({
  env: MOCK_ENV,
}));

const sendEmail = vi.fn();
vi.mock("@/lib/emails", () => ({
  sendEmail,
}));

const InquiryReact = vi.fn(() => "<InquiryReact />");
const InquiryPlainText = vi.fn((data: { name: string; email?: string; phone?: string; message: string }) => {
  return `TEXT:${data.name}|${data.email}|${data.message}`;
});

vi.mock("@/lib/emails/templates/quick-enquiry", () => ({
  default: InquiryReact,
  InquiryPlainText,
}));

describe("Auth LinkedIn lead capture", () => {
  beforeEach(() => {
    capturedConfig = undefined;
    sendEmail.mockReset();
    InquiryReact.mockClear();
    InquiryPlainText.mockClear();
    vi.resetModules();
  });

  it("triggers email with quick enquiry template on linkedin user creation", async () => {
    await import("@/lib/auth/server");

    expect(capturedConfig).toBeDefined();
    const cfg = capturedConfig as {
      socialProviders: { linkedin: { clientId: string; clientSecret: string } };
      databaseHooks: {
        user: { create: { after: (user: { id: string; name: string; email: string }) => Promise<void> } };
      };
    };
    expect(cfg.socialProviders.linkedin.clientId).toBe(MOCK_ENV.LINKEDIN_CLIENT_ID);
    expect(cfg.socialProviders.linkedin.clientSecret).toBe(MOCK_ENV.LINKEDIN_CLIENT_SECRET);

    const fakeUser: { id: string; name: string; email: string } = {
      id: "user_1",
      name: "Alice Johnson",
      email: "alice@example.com",
    };

    await cfg.databaseHooks.user.create.after(fakeUser);

    expect(InquiryReact).toHaveBeenCalledTimes(1);
    expect(InquiryPlainText).toHaveBeenCalledTimes(1);

    const expectedMessage = `New Inquiry via LinkedIn - ${fakeUser.name} Just Reached Out`;

    expect(InquiryReact).toHaveBeenCalledWith({
      name: fakeUser.name,
      email: fakeUser.email,
      message: expectedMessage,
    });

    expect(InquiryPlainText).toHaveBeenCalledWith({
      name: fakeUser.name,
      email: fakeUser.email,
      message: expectedMessage,
    });

    expect(sendEmail).toHaveBeenCalledTimes(1);
    expect(sendEmail).toHaveBeenCalledWith({
      email: fakeUser.email,
      subject: "New Enquiry Received - sphereitglobal.com",
      react: "<InquiryReact />",
      text: `TEXT:${fakeUser.name}|${fakeUser.email}|${expectedMessage}`,
    });
  });
});
