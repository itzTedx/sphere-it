import { postgresAdapter } from "@payloadcms/db-postgres";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Blogs } from "./collections/blogs";
import { BlogCategories } from "./collections/blogs/category";
import { Careers } from "./collections/careers";
import { Departments } from "./collections/careers/department";
import { EmployeeTestimonials } from "./collections/careers/employee-testimonials";
import { CaseStudies } from "./collections/case-studies";
import { FaqCategories } from "./collections/faqs/category";
import { Faqs } from "./collections/faqs/Faqs";
import { Footer } from "./collections/globals/footer";
import { Media } from "./collections/Media";
import { ResearchPapers } from "./collections/research-papers";
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
	},
	collections: [
		Blogs,
		BlogCategories,
		CaseStudies,
		ResearchPapers,
		Faqs,
		FaqCategories,
		Media,
		Users,
		Careers,
		Departments,
		EmployeeTestimonials,
	],
	globals: [Footer],
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
		},
	}),
	upload: {
		limits: {
			fileSize: 5000000,
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
