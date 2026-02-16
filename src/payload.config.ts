import { postgresAdapter } from "@payloadcms/db-postgres";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { AiMaturitySubmissions } from "./collections/ai-maturity-submissions";
import { Blogs } from "./collections/blogs";
import { BlogCategories } from "./collections/blogs/category";
import { Careers } from "./collections/careers";
import { Departments } from "./collections/careers/department";
import { EmployeeTestimonials } from "./collections/careers/employee-testimonials";
import { CaseStudies } from "./collections/case-studies";
import { Enquiries } from "./collections/enquiries";
import { FaqCategories } from "./collections/faqs/category";
import { Faqs } from "./collections/faqs/Faqs";
import { Clients } from "./collections/globals/clients";
import { Footer } from "./collections/globals/footer";
import { Partners } from "./collections/globals/partners";
import { Teams } from "./collections/globals/teams";
import { Industries } from "./collections/industries";
import { Media } from "./collections/Media";
import { AboutPage } from "./collections/pages/about";
import { FaqsPage } from "./collections/pages/faqs";
import { Homepage } from "./collections/pages/homepage";
import { InsightsPage } from "./collections/pages/insights";
import { MethodologyPage } from "./collections/pages/methodology";
import { ServicesPage } from "./collections/pages/services";
import { ResearchPapers } from "./collections/research-papers";
import { Services } from "./collections/services";
import { Users } from "./collections/users";
import { env } from "./lib/env/server";
import { defaultLexical } from "./modules/cms/fields/defaultLexical";
import { plugins } from "./modules/cms/plugins";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
		meta: {
			icons: [
				{
					rel: "icon",
					type: "image/png",
					url: "/icon1.png",
				},
			],
			robots: "noindex, nofollow",
		},
	},
	collections: [
		// Services
		Services,

		// Resources
		Blogs,
		BlogCategories,
		CaseStudies,
		ResearchPapers,
		Faqs,
		FaqCategories,
		AiMaturitySubmissions,
		Enquiries,
		Media,

		// Employment
		Careers,
		Departments,
		EmployeeTestimonials,

		// Globals
		Industries,
		Partners,
		Clients,

		// Auth
		Users,
	],
	globals: [
		// Pages
		Homepage,
		ServicesPage,
		AboutPage,
		FaqsPage,
		InsightsPage,
		MethodologyPage,

		// Globals
		Teams,
		Footer,
	],
	email: nodemailerAdapter({
		defaultFromAddress: env.SMTP_FROM,
		defaultFromName: "Sphere It",

		transportOptions: {
			host: env.SMTP_HOST,
			port: Number(env.SMTP_PORT),
			auth: {
				user: env.SMTP_USER,
				pass: env.SMTP_PASS,
			},
			// debug: process.env.NODE_ENV === "development",
		},
	}),
	upload: {
		limits: {
			// Set maximum upload file size to 15 MB
			fileSize: 15 * 1024 * 1024,
		},
	},

	editor: defaultLexical,
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URL || "",
		},
	}),
	sharp,
	plugins,
});
