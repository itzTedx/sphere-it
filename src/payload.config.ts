import { postgresAdapter } from "@payloadcms/db-postgres";
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
import { Users } from "./collections/Users";
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
		Users,
		Media,
		Careers,
		Departments,
		EmployeeTestimonials,
	],
	globals: [Footer],

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
