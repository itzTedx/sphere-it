import { NextRequest, NextResponse } from "next/server";

import { enquirySchema } from "@/modules/form/validators/enquiry-schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body using our Zod schema
    const validatedData = enquirySchema.parse(body);

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM system
    // 4. Send confirmation email to user

    // For now, we'll just log the data and return success
    console.log("Contact form submission:", validatedData);

    // Simulate some processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Handle validation errors
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your form data and try again.",
          errors: error.message,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
