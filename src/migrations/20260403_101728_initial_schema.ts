import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
	await db.execute(sql`
   CREATE TYPE "public"."enum_services_cta_buttons_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum_services_cta_buttons_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum_services_cta_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_services_homepage_proof_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum_services_homepage_proof_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum_services_homepage_proof_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_services_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__services_v_version_cta_buttons_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum__services_v_version_cta_buttons_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum__services_v_version_cta_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__services_v_version_homepage_proof_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum__services_v_version_homepage_proof_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum__services_v_version_homepage_proof_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__services_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_blogs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__blogs_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_case_studies_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__case_studies_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_research_papers_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__research_papers_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_ai_maturity_submissions_level" AS ENUM('Foundation', 'Developing', 'Progressive', 'Advanced');
  CREATE TYPE "public"."enum_legal_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__legal_pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_careers_work_mode" AS ENUM('on-site', 'hybrid', 'remote');
  CREATE TYPE "public"."enum_careers_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__careers_v_version_work_mode" AS ENUM('on-site', 'hybrid', 'remote');
  CREATE TYPE "public"."enum__careers_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_employee_testimonials_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__employee_testimonials_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_users_role" AS ENUM('user', 'editor', 'admin');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_homepage_services_cta_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum_homepage_services_cta_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum_homepage_why_us_axis_card_learn_more_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum_homepage_why_us_axis_card_learn_more_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum_homepage_why_us_tech_stack_card_cta_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum_homepage_why_us_tech_stack_card_cta_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum_homepage_cta_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum_homepage_cta_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum_services_page_why_matters_cta_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum_services_page_why_matters_cta_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum_services_page_why_matters_cta_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_about_page_hiring_cta_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum_about_page_hiring_cta_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum_about_page_cta_button_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum_about_page_cta_button_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum_faqs_page_cta_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum_faqs_page_cta_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum_insights_page_cta_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum_insights_page_cta_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum_methodology_page_phases_items_icon" AS ENUM('bullseye', 'search', 'rocket', 'shield');
  CREATE TYPE "public"."enum_methodology_page_hero_cta_link_type" AS ENUM('page', 'reference', 'custom');
  CREATE TYPE "public"."enum_methodology_page_hero_cta_link_page" AS ENUM('/', '/services', '/about', '/resources/blogs', '/resources/case-studies', '/resources/research-papers', '/resources/faqs', '/careers', '/contact', '/methodology', '/resources/ai-maturity');
  CREATE TYPE "public"."enum_footer_socials_platform" AS ENUM('facebook', 'instagram', 'linkedin', 'youtube', 'x');
  CREATE TABLE "services_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_services_cta_buttons_link_type" DEFAULT 'page',
  	"link_new_tab" boolean,
  	"link_page" "enum_services_cta_buttons_link_page",
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_services_cta_buttons_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "services_homepage_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar
  );
  
  CREATE TABLE "services_homepage_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"service" varchar,
  	"subtitle" varchar,
  	"hero_image_id" integer,
  	"title" varchar,
  	"description" jsonb,
  	"content" jsonb,
  	"homepage_title" varchar,
  	"homepage_description" varchar,
  	"homepage_proof_link_type" "enum_services_homepage_proof_link_type" DEFAULT 'page',
  	"homepage_proof_link_new_tab" boolean,
  	"homepage_proof_link_page" "enum_services_homepage_proof_link_page",
  	"homepage_proof_link_url" varchar,
  	"homepage_proof_link_label" varchar,
  	"homepage_proof_link_appearance" "enum_services_homepage_proof_link_appearance" DEFAULT 'default',
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"deleted_at" timestamp(3) with time zone,
  	"_status" "enum_services_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "services_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"blogs_id" integer,
  	"case_studies_id" integer,
  	"research_papers_id" integer,
  	"partners_id" integer
  );
  
  CREATE TABLE "_services_v_version_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__services_v_version_cta_buttons_link_type" DEFAULT 'page',
  	"link_new_tab" boolean,
  	"link_page" "enum__services_v_version_cta_buttons_link_page",
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__services_v_version_cta_buttons_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_version_homepage_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_version_homepage_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_service" varchar,
  	"version_subtitle" varchar,
  	"version_hero_image_id" integer,
  	"version_title" varchar,
  	"version_description" jsonb,
  	"version_content" jsonb,
  	"version_homepage_title" varchar,
  	"version_homepage_description" varchar,
  	"version_homepage_proof_link_type" "enum__services_v_version_homepage_proof_link_type" DEFAULT 'page',
  	"version_homepage_proof_link_new_tab" boolean,
  	"version_homepage_proof_link_page" "enum__services_v_version_homepage_proof_link_page",
  	"version_homepage_proof_link_url" varchar,
  	"version_homepage_proof_link_label" varchar,
  	"version_homepage_proof_link_appearance" "enum__services_v_version_homepage_proof_link_appearance" DEFAULT 'default',
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version_deleted_at" timestamp(3) with time zone,
  	"version__status" "enum__services_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_services_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"blogs_id" integer,
  	"case_studies_id" integer,
  	"research_papers_id" integer,
  	"partners_id" integer
  );
  
  CREATE TABLE "blogs_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "blogs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"is_featured" boolean DEFAULT 'false',
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"deleted_at" timestamp(3) with time zone,
  	"_status" "enum_blogs_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "blogs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blogs_id" integer,
  	"blog_categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_blogs_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_blogs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_description" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_is_featured" boolean DEFAULT 'false',
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version_deleted_at" timestamp(3) with time zone,
  	"version__status" "enum__blogs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_blogs_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blogs_id" integer,
  	"blog_categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "blog_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "case_studies_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "case_studies_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "case_studies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_case_studies_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "case_studies_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"case_studies_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_case_studies_v_version_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_studies_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_case_studies_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__case_studies_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_case_studies_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"case_studies_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "research_papers_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "research_papers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_research_papers_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "research_papers_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"research_papers_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_research_papers_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_research_papers_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__research_papers_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_research_papers_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"research_papers_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "faqs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"content" varchar NOT NULL,
  	"category_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "faq_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "ai_maturity_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"company" varchar NOT NULL,
  	"phone" varchar,
  	"q1" numeric NOT NULL,
  	"q2" numeric NOT NULL,
  	"q3" numeric NOT NULL,
  	"q4" numeric NOT NULL,
  	"q5" numeric NOT NULL,
  	"q6" numeric NOT NULL,
  	"q7" numeric NOT NULL,
  	"q8" numeric NOT NULL,
  	"q9" numeric NOT NULL,
  	"q10" numeric NOT NULL,
  	"q11" numeric NOT NULL,
  	"q12" numeric NOT NULL,
  	"q13" numeric NOT NULL,
  	"q14" numeric NOT NULL,
  	"q15" numeric NOT NULL,
  	"total_score" numeric NOT NULL,
  	"percentage" numeric NOT NULL,
  	"level" "enum_ai_maturity_submissions_level" NOT NULL,
  	"description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "enquiries" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"subject" varchar,
  	"message" varchar NOT NULL,
  	"source" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "legal_pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_legal_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_legal_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__legal_pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "careers_work_mode" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_careers_work_mode",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "careers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"department_id" integer,
  	"location" varchar DEFAULT 'Dubai, UAE',
  	"time" varchar DEFAULT 'Full Time',
  	"valid_until" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_careers_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_careers_v_version_work_mode" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__careers_v_version_work_mode",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_careers_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_description" varchar,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_department_id" integer,
  	"version_location" varchar DEFAULT 'Dubai, UAE',
  	"version_time" varchar DEFAULT 'Full Time',
  	"version_valid_until" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__careers_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "departments" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"department" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "employee_testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"job_role" varchar,
  	"content" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_employee_testimonials_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_employee_testimonials_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_job_role" varchar,
  	"version_content" jsonb,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__employee_testimonials_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "industries" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"icon" varchar,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "partners" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"name" varchar NOT NULL,
  	"logo_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "clients" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"name" varchar NOT NULL,
  	"logo_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL,
  	"email_verified" boolean DEFAULT false,
  	"name" varchar,
  	"image" varchar,
  	"password" varchar,
  	"role" "enum_users_role" DEFAULT 'user',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "sessions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"expires_at" timestamp(3) with time zone NOT NULL,
  	"token" varchar NOT NULL,
  	"ip_address" varchar,
  	"user_agent" varchar,
  	"user_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "accounts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"account_id" varchar NOT NULL,
  	"provider_id" varchar NOT NULL,
  	"user_id" integer NOT NULL,
  	"access_token" varchar,
  	"refresh_token" varchar,
  	"id_token" varchar,
  	"access_token_expires_at" timestamp(3) with time zone,
  	"refresh_token_expires_at" timestamp(3) with time zone,
  	"scope" varchar,
  	"password" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "verifications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"identifier" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"expires_at" timestamp(3) with time zone NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "passkeys" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"public_key" varchar NOT NULL,
  	"user_id" integer NOT NULL,
  	"credential_i_d" varchar NOT NULL,
  	"counter" numeric NOT NULL,
  	"device_type" varchar NOT NULL,
  	"backed_up" boolean DEFAULT false NOT NULL,
  	"transports" varchar,
  	"aaguid" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"blogs_id" integer,
  	"blog_categories_id" integer,
  	"case_studies_id" integer,
  	"research_papers_id" integer,
  	"faqs_id" integer,
  	"faq_categories_id" integer,
  	"ai_maturity_submissions_id" integer,
  	"enquiries_id" integer,
  	"media_id" integer,
  	"legal_pages_id" integer,
  	"careers_id" integer,
  	"departments_id" integer,
  	"employee_testimonials_id" integer,
  	"industries_id" integer,
  	"partners_id" integer,
  	"clients_id" integer,
  	"users_id" integer,
  	"sessions_id" integer,
  	"accounts_id" integer,
  	"verifications_id" integer,
  	"passkeys_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "homepage_why_us_axis_card_phases" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"letter" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" jsonb NOT NULL,
  	"hero_description" varchar NOT NULL,
  	"services_title" jsonb NOT NULL,
  	"services_cta_enable" boolean DEFAULT false NOT NULL,
  	"services_cta_title" varchar,
  	"services_cta_link_type" "enum_homepage_services_cta_link_type" DEFAULT 'page',
  	"services_cta_link_new_tab" boolean,
  	"services_cta_link_page" "enum_homepage_services_cta_link_page",
  	"services_cta_link_url" varchar,
  	"services_cta_link_label" varchar,
  	"industries_title" jsonb NOT NULL,
  	"industries_description" varchar,
  	"why_us_title" jsonb NOT NULL,
  	"why_us_description" varchar NOT NULL,
  	"why_us_guided_by_card_badge" varchar DEFAULT 'Guided by',
  	"why_us_guided_by_card_title" varchar NOT NULL,
  	"why_us_guided_by_card_description" varchar NOT NULL,
  	"why_us_axis_card_title" varchar NOT NULL,
  	"why_us_axis_card_learn_more_link_type" "enum_homepage_why_us_axis_card_learn_more_link_type" DEFAULT 'page',
  	"why_us_axis_card_learn_more_link_new_tab" boolean,
  	"why_us_axis_card_learn_more_link_page" "enum_homepage_why_us_axis_card_learn_more_link_page",
  	"why_us_axis_card_learn_more_link_url" varchar,
  	"why_us_axis_card_learn_more_link_label" varchar NOT NULL,
  	"why_us_tech_stack_card_badge" varchar DEFAULT 'Results-Driven Delivery',
  	"why_us_tech_stack_card_title" varchar NOT NULL,
  	"why_us_tech_stack_card_cta_link_type" "enum_homepage_why_us_tech_stack_card_cta_link_type" DEFAULT 'page',
  	"why_us_tech_stack_card_cta_link_new_tab" boolean,
  	"why_us_tech_stack_card_cta_link_page" "enum_homepage_why_us_tech_stack_card_cta_link_page",
  	"why_us_tech_stack_card_cta_link_url" varchar,
  	"why_us_tech_stack_card_cta_link_label" varchar NOT NULL,
  	"why_us_reliability_card_title" varchar NOT NULL,
  	"why_us_mini_cta_title" varchar NOT NULL,
  	"why_us_mini_cta_description" varchar NOT NULL,
  	"cta_badge" varchar,
  	"cta_show_form" boolean,
  	"cta_title" varchar NOT NULL,
  	"cta_description" varchar,
  	"cta_link_type" "enum_homepage_cta_link_type" DEFAULT 'page',
  	"cta_link_new_tab" boolean,
  	"cta_link_page" "enum_homepage_cta_link_page",
  	"cta_link_url" varchar,
  	"cta_link_label" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "homepage_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"blogs_id" integer,
  	"case_studies_id" integer,
  	"research_papers_id" integer,
  	"industries_id" integer
  );
  
  CREATE TABLE "services_page_why_matters_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "services_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Services' NOT NULL,
  	"hero_title" jsonb NOT NULL,
  	"hero_subtitle" varchar DEFAULT 'We deliver solutions that are precise, pragmatic, and outcome-driven.' NOT NULL,
  	"hero_description" varchar DEFAULT 'Technology should deliver clarity, reliability, and measurable value. At Sphere IT, our services are designed to simplify complexity and accelerate outcomes. Guided by precision and pragmatism, we help organizations adopt AI, automate processes, harness data, secure platforms, and scale talent - without over-engineering.' NOT NULL,
  	"why_matters_badge" varchar DEFAULT 'Why It Matters' NOT NULL,
  	"why_matters_title" varchar DEFAULT 'Why Our Approach Works' NOT NULL,
  	"why_matters_description" varchar DEFAULT 'Because we blend precision with pragmatism, our services deliver results that are accurate, reliable, and practical - helping organizations achieve value faster and grow with confidence.' NOT NULL,
  	"why_matters_cta_link_type" "enum_services_page_why_matters_cta_link_type" DEFAULT 'page',
  	"why_matters_cta_link_new_tab" boolean,
  	"why_matters_cta_link_page" "enum_services_page_why_matters_cta_link_page",
  	"why_matters_cta_link_url" varchar,
  	"why_matters_cta_link_label" varchar,
  	"why_matters_cta_link_appearance" "enum_services_page_why_matters_cta_link_appearance" DEFAULT 'default',
  	"seo_meta_title" varchar DEFAULT 'IT Services - AI, Automation & Digital Transformation | Sphere IT' NOT NULL,
  	"seo_meta_description" varchar DEFAULT 'Transform your business with Sphere IT''s comprehensive IT services including AI solutions, process automation, data analytics, managed platforms, and talent augmentation. Certified professionals delivering measurable outcomes.' NOT NULL,
  	"seo_og_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "services_page_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"blogs_id" integer,
  	"case_studies_id" integer,
  	"research_papers_id" integer
  );
  
  CREATE TABLE "about_page_values_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "about_page_hiring_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "about_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'About' NOT NULL,
  	"hero_title" jsonb NOT NULL,
  	"hero_description" jsonb NOT NULL,
  	"story_badge" varchar DEFAULT 'Our Story' NOT NULL,
  	"story_content" jsonb NOT NULL,
  	"values_badge" varchar DEFAULT 'Our Values' NOT NULL,
  	"values_title" jsonb NOT NULL,
  	"values_description" varchar NOT NULL,
  	"team_badge" varchar DEFAULT 'Our People, Our Precision' NOT NULL,
  	"team_title" jsonb NOT NULL,
  	"team_description" varchar NOT NULL,
  	"team_leadership_label" varchar DEFAULT 'Leadership at Sphere IT' NOT NULL,
  	"team_team_label" varchar DEFAULT 'People Who Power Sphere IT' NOT NULL,
  	"hiring_badge" varchar DEFAULT 'We''re Hiring' NOT NULL,
  	"hiring_title" jsonb NOT NULL,
  	"hiring_description" varchar NOT NULL,
  	"hiring_cta_link_type" "enum_about_page_hiring_cta_link_type" DEFAULT 'page',
  	"hiring_cta_link_new_tab" boolean,
  	"hiring_cta_link_page" "enum_about_page_hiring_cta_link_page",
  	"hiring_cta_link_url" varchar,
  	"hiring_cta_link_label" varchar NOT NULL,
  	"cta_badge" varchar DEFAULT 'Your IT success story starts here' NOT NULL,
  	"cta_title" varchar DEFAULT 'Let''s build your next IT success story together.' NOT NULL,
  	"cta_description" varchar DEFAULT 'Get the accuracy, scalability, and impact your business needs - delivered with precision and pragmatism.' NOT NULL,
  	"cta_button_type" "enum_about_page_cta_button_type" DEFAULT 'page',
  	"cta_button_new_tab" boolean,
  	"cta_button_page" "enum_about_page_cta_button_page",
  	"cta_button_url" varchar,
  	"cta_button_label" varchar NOT NULL,
  	"cta_show_form" boolean DEFAULT true,
  	"seo_meta_title" varchar DEFAULT 'About Sphere IT Global - Digital Transformation & IT Innovation Partner' NOT NULL,
  	"seo_meta_description" varchar DEFAULT 'Learn how Sphere IT drives enterprise transformation through AI, automation, and cloud engineering. Discover our mission, leadership, and global team powering innovation across industries.' NOT NULL,
  	"seo_og_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "about_page_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"blogs_id" integer,
  	"case_studies_id" integer,
  	"research_papers_id" integer
  );
  
  CREATE TABLE "faqs_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_badge" varchar DEFAULT 'FAQs' NOT NULL,
  	"header_title_highlight" varchar DEFAULT 'Have Questions?' NOT NULL,
  	"header_title_suffix" varchar DEFAULT 'Here''s what we hear often' NOT NULL,
  	"cta_badge" varchar DEFAULT 'Contact Us',
  	"cta_title" varchar DEFAULT 'Couldn''t find the answer you''re looking for?' NOT NULL,
  	"cta_description" varchar DEFAULT 'Our team is here to help. Get in touch with us and we''ll respond as soon as possible.',
  	"cta_show_form" boolean DEFAULT true,
  	"cta_button_text" varchar DEFAULT 'Ask Question',
  	"cta_link_type" "enum_faqs_page_cta_link_type" DEFAULT 'page',
  	"cta_link_new_tab" boolean,
  	"cta_link_page" "enum_faqs_page_cta_link_page",
  	"cta_link_url" varchar,
  	"cta_link_label" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "faqs_page_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"blogs_id" integer,
  	"case_studies_id" integer,
  	"research_papers_id" integer
  );
  
  CREATE TABLE "insights_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_title_prefix" varchar DEFAULT 'Explore the Latest From' NOT NULL,
  	"header_title_highlight" varchar DEFAULT 'Sphere IT Global' NOT NULL,
  	"header_subtitle" varchar DEFAULT 'Stay ahead with fresh perspectives, expert insights, and stories that inspire.' NOT NULL,
  	"cta_badge" varchar DEFAULT 'Your IT success story starts here',
  	"cta_title" varchar DEFAULT 'Let''s build your next IT success story together.' NOT NULL,
  	"cta_description" varchar DEFAULT 'Get the accuracy, scalability, and impact your business needs - delivered with precision and pragmatism.',
  	"cta_show_form" boolean DEFAULT false,
  	"cta_button_text" varchar DEFAULT 'Start the Conversation',
  	"cta_link_type" "enum_insights_page_cta_link_type" DEFAULT 'page',
  	"cta_link_new_tab" boolean,
  	"cta_link_page" "enum_insights_page_cta_link_page",
  	"cta_link_url" varchar,
  	"cta_link_label" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "insights_page_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"blogs_id" integer,
  	"case_studies_id" integer,
  	"research_papers_id" integer
  );
  
  CREATE TABLE "methodology_page_phases_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_methodology_page_phases_items_icon" DEFAULT 'bullseye' NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "methodology_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_title" varchar DEFAULT 'A.X.I.S Methodology' NOT NULL,
  	"hero_subtitle" varchar DEFAULT 'Tested and proven Sphere methodology for excellence' NOT NULL,
  	"hero_cta_link_type" "enum_methodology_page_hero_cta_link_type" DEFAULT 'page',
  	"hero_cta_link_new_tab" boolean,
  	"hero_cta_link_page" "enum_methodology_page_hero_cta_link_page",
  	"hero_cta_link_url" varchar,
  	"hero_cta_link_label" varchar,
  	"hero_image_id" integer,
  	"value_proposition_badge" varchar DEFAULT 'Value Proposition' NOT NULL,
  	"value_proposition_heading" varchar DEFAULT 'Precision, Predictability, and Outcomes' NOT NULL,
  	"value_proposition_description" varchar DEFAULT 'AXIS Methodology is a proven, structured, and data-driven framework designed to deliver clarity, predictability, and measurable outcomes for the clients. With precision and pragmatism at its core, AXIS enables faster decisions, predictable delivery, and strong business value.' NOT NULL,
  	"seo_meta_title" varchar DEFAULT 'AXIS Methodology - IT Strategy & Predictable Delivery Framework' NOT NULL,
  	"seo_meta_description" varchar DEFAULT 'Explore Sphere IT''s AXIS methodology, a structured, data-driven IT consulting framework that delivers clarity, cost predictability, and scalable outcomes.' NOT NULL,
  	"seo_og_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "methodology_page_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"blogs_id" integer,
  	"case_studies_id" integer,
  	"research_papers_id" integer
  );
  
  CREATE TABLE "teams_leaderships" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"picture_id" integer NOT NULL,
  	"name" varchar NOT NULL,
  	"position" varchar NOT NULL,
  	"linkedin_url" varchar
  );
  
  CREATE TABLE "teams_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"picture_id" integer NOT NULL,
  	"name" varchar NOT NULL,
  	"position" varchar NOT NULL,
  	"linkedin_url" varchar
  );
  
  CREATE TABLE "teams" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_socials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_footer_socials_platform",
  	"link" varchar NOT NULL
  );
  
  CREATE TABLE "footer_locations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"location" varchar NOT NULL,
  	"link" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "services_cta_buttons" ADD CONSTRAINT "services_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_homepage_features" ADD CONSTRAINT "services_homepage_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_homepage_tags" ADD CONSTRAINT "services_homepage_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_research_papers_fk" FOREIGN KEY ("research_papers_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_cta_buttons" ADD CONSTRAINT "_services_v_version_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_homepage_features" ADD CONSTRAINT "_services_v_version_homepage_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_homepage_tags" ADD CONSTRAINT "_services_v_version_homepage_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_parent_id_services_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_research_papers_fk" FOREIGN KEY ("research_papers_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_populated_authors" ADD CONSTRAINT "blogs_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs" ADD CONSTRAINT "blogs_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs" ADD CONSTRAINT "blogs_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_blog_categories_fk" FOREIGN KEY ("blog_categories_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_version_populated_authors" ADD CONSTRAINT "_blogs_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v" ADD CONSTRAINT "_blogs_v_parent_id_blogs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blogs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v" ADD CONSTRAINT "_blogs_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v" ADD CONSTRAINT "_blogs_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_rels" ADD CONSTRAINT "_blogs_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_rels" ADD CONSTRAINT "_blogs_v_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_rels" ADD CONSTRAINT "_blogs_v_rels_blog_categories_fk" FOREIGN KEY ("blog_categories_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_rels" ADD CONSTRAINT "_blogs_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_highlights" ADD CONSTRAINT "case_studies_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_populated_authors" ADD CONSTRAINT "case_studies_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_version_highlights" ADD CONSTRAINT "_case_studies_v_version_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_version_populated_authors" ADD CONSTRAINT "_case_studies_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_parent_id_case_studies_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "research_papers_populated_authors" ADD CONSTRAINT "research_papers_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "research_papers" ADD CONSTRAINT "research_papers_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "research_papers" ADD CONSTRAINT "research_papers_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "research_papers_rels" ADD CONSTRAINT "research_papers_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "research_papers_rels" ADD CONSTRAINT "research_papers_rels_research_papers_fk" FOREIGN KEY ("research_papers_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "research_papers_rels" ADD CONSTRAINT "research_papers_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_research_papers_v_version_populated_authors" ADD CONSTRAINT "_research_papers_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_research_papers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_research_papers_v" ADD CONSTRAINT "_research_papers_v_parent_id_research_papers_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."research_papers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_research_papers_v" ADD CONSTRAINT "_research_papers_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_research_papers_v" ADD CONSTRAINT "_research_papers_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_research_papers_v_rels" ADD CONSTRAINT "_research_papers_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_research_papers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_research_papers_v_rels" ADD CONSTRAINT "_research_papers_v_rels_research_papers_fk" FOREIGN KEY ("research_papers_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_research_papers_v_rels" ADD CONSTRAINT "_research_papers_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs" ADD CONSTRAINT "faqs_category_id_faq_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."faq_categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "legal_pages" ADD CONSTRAINT "legal_pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_legal_pages_v" ADD CONSTRAINT "_legal_pages_v_parent_id_legal_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."legal_pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_legal_pages_v" ADD CONSTRAINT "_legal_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "careers_work_mode" ADD CONSTRAINT "careers_work_mode_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "careers" ADD CONSTRAINT "careers_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "careers" ADD CONSTRAINT "careers_department_id_departments_id_fk" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_careers_v_version_work_mode" ADD CONSTRAINT "_careers_v_version_work_mode_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_careers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_careers_v" ADD CONSTRAINT "_careers_v_parent_id_careers_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."careers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_careers_v" ADD CONSTRAINT "_careers_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_careers_v" ADD CONSTRAINT "_careers_v_version_department_id_departments_id_fk" FOREIGN KEY ("version_department_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_employee_testimonials_v" ADD CONSTRAINT "_employee_testimonials_v_parent_id_employee_testimonials_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."employee_testimonials"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "partners" ADD CONSTRAINT "partners_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "clients" ADD CONSTRAINT "clients_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "passkeys" ADD CONSTRAINT "passkeys_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_categories_fk" FOREIGN KEY ("blog_categories_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_research_papers_fk" FOREIGN KEY ("research_papers_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faq_categories_fk" FOREIGN KEY ("faq_categories_id") REFERENCES "public"."faq_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_ai_maturity_submissions_fk" FOREIGN KEY ("ai_maturity_submissions_id") REFERENCES "public"."ai_maturity_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_enquiries_fk" FOREIGN KEY ("enquiries_id") REFERENCES "public"."enquiries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_legal_pages_fk" FOREIGN KEY ("legal_pages_id") REFERENCES "public"."legal_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_careers_fk" FOREIGN KEY ("careers_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_employee_testimonials_fk" FOREIGN KEY ("employee_testimonials_id") REFERENCES "public"."employee_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_clients_fk" FOREIGN KEY ("clients_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_sessions_fk" FOREIGN KEY ("sessions_id") REFERENCES "public"."sessions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_accounts_fk" FOREIGN KEY ("accounts_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_verifications_fk" FOREIGN KEY ("verifications_id") REFERENCES "public"."verifications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_passkeys_fk" FOREIGN KEY ("passkeys_id") REFERENCES "public"."passkeys"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_why_us_axis_card_phases" ADD CONSTRAINT "homepage_why_us_axis_card_phases_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_research_papers_fk" FOREIGN KEY ("research_papers_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_page_why_matters_items" ADD CONSTRAINT "services_page_why_matters_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_page" ADD CONSTRAINT "services_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_page_rels" ADD CONSTRAINT "services_page_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_page_rels" ADD CONSTRAINT "services_page_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_page_rels" ADD CONSTRAINT "services_page_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_page_rels" ADD CONSTRAINT "services_page_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_page_rels" ADD CONSTRAINT "services_page_rels_research_papers_fk" FOREIGN KEY ("research_papers_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_values_items" ADD CONSTRAINT "about_page_values_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page_values_items" ADD CONSTRAINT "about_page_values_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_hiring_benefits" ADD CONSTRAINT "about_page_hiring_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page_rels" ADD CONSTRAINT "about_page_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_rels" ADD CONSTRAINT "about_page_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_rels" ADD CONSTRAINT "about_page_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_rels" ADD CONSTRAINT "about_page_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_rels" ADD CONSTRAINT "about_page_rels_research_papers_fk" FOREIGN KEY ("research_papers_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_page_rels" ADD CONSTRAINT "faqs_page_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."faqs_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_page_rels" ADD CONSTRAINT "faqs_page_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_page_rels" ADD CONSTRAINT "faqs_page_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_page_rels" ADD CONSTRAINT "faqs_page_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_page_rels" ADD CONSTRAINT "faqs_page_rels_research_papers_fk" FOREIGN KEY ("research_papers_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_page_rels" ADD CONSTRAINT "insights_page_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."insights_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_page_rels" ADD CONSTRAINT "insights_page_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_page_rels" ADD CONSTRAINT "insights_page_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_page_rels" ADD CONSTRAINT "insights_page_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_page_rels" ADD CONSTRAINT "insights_page_rels_research_papers_fk" FOREIGN KEY ("research_papers_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "methodology_page_phases_items" ADD CONSTRAINT "methodology_page_phases_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."methodology_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "methodology_page" ADD CONSTRAINT "methodology_page_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "methodology_page" ADD CONSTRAINT "methodology_page_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "methodology_page_rels" ADD CONSTRAINT "methodology_page_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."methodology_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "methodology_page_rels" ADD CONSTRAINT "methodology_page_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "methodology_page_rels" ADD CONSTRAINT "methodology_page_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "methodology_page_rels" ADD CONSTRAINT "methodology_page_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "methodology_page_rels" ADD CONSTRAINT "methodology_page_rels_research_papers_fk" FOREIGN KEY ("research_papers_id") REFERENCES "public"."research_papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "teams_leaderships" ADD CONSTRAINT "teams_leaderships_picture_id_media_id_fk" FOREIGN KEY ("picture_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "teams_leaderships" ADD CONSTRAINT "teams_leaderships_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "teams_members" ADD CONSTRAINT "teams_members_picture_id_media_id_fk" FOREIGN KEY ("picture_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "teams_members" ADD CONSTRAINT "teams_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_socials" ADD CONSTRAINT "footer_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_locations" ADD CONSTRAINT "footer_locations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "services_cta_buttons_order_idx" ON "services_cta_buttons" USING btree ("_order");
  CREATE INDEX "services_cta_buttons_parent_id_idx" ON "services_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "services_homepage_features_order_idx" ON "services_homepage_features" USING btree ("_order");
  CREATE INDEX "services_homepage_features_parent_id_idx" ON "services_homepage_features" USING btree ("_parent_id");
  CREATE INDEX "services_homepage_tags_order_idx" ON "services_homepage_tags" USING btree ("_order");
  CREATE INDEX "services_homepage_tags_parent_id_idx" ON "services_homepage_tags" USING btree ("_parent_id");
  CREATE INDEX "services__order_idx" ON "services" USING btree ("_order");
  CREATE INDEX "services_hero_image_idx" ON "services" USING btree ("hero_image_id");
  CREATE INDEX "services_meta_meta_image_idx" ON "services" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "services_slug_idx" ON "services" USING btree ("slug");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX "services_deleted_at_idx" ON "services" USING btree ("deleted_at");
  CREATE INDEX "services__status_idx" ON "services" USING btree ("_status");
  CREATE INDEX "services_rels_order_idx" ON "services_rels" USING btree ("order");
  CREATE INDEX "services_rels_parent_idx" ON "services_rels" USING btree ("parent_id");
  CREATE INDEX "services_rels_path_idx" ON "services_rels" USING btree ("path");
  CREATE INDEX "services_rels_services_id_idx" ON "services_rels" USING btree ("services_id");
  CREATE INDEX "services_rels_blogs_id_idx" ON "services_rels" USING btree ("blogs_id");
  CREATE INDEX "services_rels_case_studies_id_idx" ON "services_rels" USING btree ("case_studies_id");
  CREATE INDEX "services_rels_research_papers_id_idx" ON "services_rels" USING btree ("research_papers_id");
  CREATE INDEX "services_rels_partners_id_idx" ON "services_rels" USING btree ("partners_id");
  CREATE INDEX "_services_v_version_cta_buttons_order_idx" ON "_services_v_version_cta_buttons" USING btree ("_order");
  CREATE INDEX "_services_v_version_cta_buttons_parent_id_idx" ON "_services_v_version_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "_services_v_version_homepage_features_order_idx" ON "_services_v_version_homepage_features" USING btree ("_order");
  CREATE INDEX "_services_v_version_homepage_features_parent_id_idx" ON "_services_v_version_homepage_features" USING btree ("_parent_id");
  CREATE INDEX "_services_v_version_homepage_tags_order_idx" ON "_services_v_version_homepage_tags" USING btree ("_order");
  CREATE INDEX "_services_v_version_homepage_tags_parent_id_idx" ON "_services_v_version_homepage_tags" USING btree ("_parent_id");
  CREATE INDEX "_services_v_parent_idx" ON "_services_v" USING btree ("parent_id");
  CREATE INDEX "_services_v_version_version__order_idx" ON "_services_v" USING btree ("version__order");
  CREATE INDEX "_services_v_version_version_hero_image_idx" ON "_services_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_services_v_version_meta_version_meta_image_idx" ON "_services_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_services_v_version_version_slug_idx" ON "_services_v" USING btree ("version_slug");
  CREATE INDEX "_services_v_version_version_updated_at_idx" ON "_services_v" USING btree ("version_updated_at");
  CREATE INDEX "_services_v_version_version_created_at_idx" ON "_services_v" USING btree ("version_created_at");
  CREATE INDEX "_services_v_version_version_deleted_at_idx" ON "_services_v" USING btree ("version_deleted_at");
  CREATE INDEX "_services_v_version_version__status_idx" ON "_services_v" USING btree ("version__status");
  CREATE INDEX "_services_v_created_at_idx" ON "_services_v" USING btree ("created_at");
  CREATE INDEX "_services_v_updated_at_idx" ON "_services_v" USING btree ("updated_at");
  CREATE INDEX "_services_v_latest_idx" ON "_services_v" USING btree ("latest");
  CREATE INDEX "_services_v_autosave_idx" ON "_services_v" USING btree ("autosave");
  CREATE INDEX "_services_v_rels_order_idx" ON "_services_v_rels" USING btree ("order");
  CREATE INDEX "_services_v_rels_parent_idx" ON "_services_v_rels" USING btree ("parent_id");
  CREATE INDEX "_services_v_rels_path_idx" ON "_services_v_rels" USING btree ("path");
  CREATE INDEX "_services_v_rels_services_id_idx" ON "_services_v_rels" USING btree ("services_id");
  CREATE INDEX "_services_v_rels_blogs_id_idx" ON "_services_v_rels" USING btree ("blogs_id");
  CREATE INDEX "_services_v_rels_case_studies_id_idx" ON "_services_v_rels" USING btree ("case_studies_id");
  CREATE INDEX "_services_v_rels_research_papers_id_idx" ON "_services_v_rels" USING btree ("research_papers_id");
  CREATE INDEX "_services_v_rels_partners_id_idx" ON "_services_v_rels" USING btree ("partners_id");
  CREATE INDEX "blogs_populated_authors_order_idx" ON "blogs_populated_authors" USING btree ("_order");
  CREATE INDEX "blogs_populated_authors_parent_id_idx" ON "blogs_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "blogs_hero_image_idx" ON "blogs" USING btree ("hero_image_id");
  CREATE INDEX "blogs_meta_meta_image_idx" ON "blogs" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "blogs_slug_idx" ON "blogs" USING btree ("slug");
  CREATE INDEX "blogs_updated_at_idx" ON "blogs" USING btree ("updated_at");
  CREATE INDEX "blogs_created_at_idx" ON "blogs" USING btree ("created_at");
  CREATE INDEX "blogs_deleted_at_idx" ON "blogs" USING btree ("deleted_at");
  CREATE INDEX "blogs__status_idx" ON "blogs" USING btree ("_status");
  CREATE INDEX "blogs_rels_order_idx" ON "blogs_rels" USING btree ("order");
  CREATE INDEX "blogs_rels_parent_idx" ON "blogs_rels" USING btree ("parent_id");
  CREATE INDEX "blogs_rels_path_idx" ON "blogs_rels" USING btree ("path");
  CREATE INDEX "blogs_rels_blogs_id_idx" ON "blogs_rels" USING btree ("blogs_id");
  CREATE INDEX "blogs_rels_blog_categories_id_idx" ON "blogs_rels" USING btree ("blog_categories_id");
  CREATE INDEX "blogs_rels_users_id_idx" ON "blogs_rels" USING btree ("users_id");
  CREATE INDEX "_blogs_v_version_populated_authors_order_idx" ON "_blogs_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_blogs_v_version_populated_authors_parent_id_idx" ON "_blogs_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_parent_idx" ON "_blogs_v" USING btree ("parent_id");
  CREATE INDEX "_blogs_v_version_version_hero_image_idx" ON "_blogs_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_blogs_v_version_meta_version_meta_image_idx" ON "_blogs_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_blogs_v_version_version_slug_idx" ON "_blogs_v" USING btree ("version_slug");
  CREATE INDEX "_blogs_v_version_version_updated_at_idx" ON "_blogs_v" USING btree ("version_updated_at");
  CREATE INDEX "_blogs_v_version_version_created_at_idx" ON "_blogs_v" USING btree ("version_created_at");
  CREATE INDEX "_blogs_v_version_version_deleted_at_idx" ON "_blogs_v" USING btree ("version_deleted_at");
  CREATE INDEX "_blogs_v_version_version__status_idx" ON "_blogs_v" USING btree ("version__status");
  CREATE INDEX "_blogs_v_created_at_idx" ON "_blogs_v" USING btree ("created_at");
  CREATE INDEX "_blogs_v_updated_at_idx" ON "_blogs_v" USING btree ("updated_at");
  CREATE INDEX "_blogs_v_latest_idx" ON "_blogs_v" USING btree ("latest");
  CREATE INDEX "_blogs_v_autosave_idx" ON "_blogs_v" USING btree ("autosave");
  CREATE INDEX "_blogs_v_rels_order_idx" ON "_blogs_v_rels" USING btree ("order");
  CREATE INDEX "_blogs_v_rels_parent_idx" ON "_blogs_v_rels" USING btree ("parent_id");
  CREATE INDEX "_blogs_v_rels_path_idx" ON "_blogs_v_rels" USING btree ("path");
  CREATE INDEX "_blogs_v_rels_blogs_id_idx" ON "_blogs_v_rels" USING btree ("blogs_id");
  CREATE INDEX "_blogs_v_rels_blog_categories_id_idx" ON "_blogs_v_rels" USING btree ("blog_categories_id");
  CREATE INDEX "_blogs_v_rels_users_id_idx" ON "_blogs_v_rels" USING btree ("users_id");
  CREATE INDEX "blog_categories_category_idx" ON "blog_categories" USING btree ("category");
  CREATE UNIQUE INDEX "blog_categories_slug_idx" ON "blog_categories" USING btree ("slug");
  CREATE INDEX "blog_categories_updated_at_idx" ON "blog_categories" USING btree ("updated_at");
  CREATE INDEX "blog_categories_created_at_idx" ON "blog_categories" USING btree ("created_at");
  CREATE INDEX "case_studies_highlights_order_idx" ON "case_studies_highlights" USING btree ("_order");
  CREATE INDEX "case_studies_highlights_parent_id_idx" ON "case_studies_highlights" USING btree ("_parent_id");
  CREATE INDEX "case_studies_populated_authors_order_idx" ON "case_studies_populated_authors" USING btree ("_order");
  CREATE INDEX "case_studies_populated_authors_parent_id_idx" ON "case_studies_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "case_studies_hero_image_idx" ON "case_studies" USING btree ("hero_image_id");
  CREATE INDEX "case_studies_meta_meta_image_idx" ON "case_studies" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "case_studies_slug_idx" ON "case_studies" USING btree ("slug");
  CREATE INDEX "case_studies_updated_at_idx" ON "case_studies" USING btree ("updated_at");
  CREATE INDEX "case_studies_created_at_idx" ON "case_studies" USING btree ("created_at");
  CREATE INDEX "case_studies__status_idx" ON "case_studies" USING btree ("_status");
  CREATE INDEX "case_studies_rels_order_idx" ON "case_studies_rels" USING btree ("order");
  CREATE INDEX "case_studies_rels_parent_idx" ON "case_studies_rels" USING btree ("parent_id");
  CREATE INDEX "case_studies_rels_path_idx" ON "case_studies_rels" USING btree ("path");
  CREATE INDEX "case_studies_rels_case_studies_id_idx" ON "case_studies_rels" USING btree ("case_studies_id");
  CREATE INDEX "case_studies_rels_users_id_idx" ON "case_studies_rels" USING btree ("users_id");
  CREATE INDEX "_case_studies_v_version_highlights_order_idx" ON "_case_studies_v_version_highlights" USING btree ("_order");
  CREATE INDEX "_case_studies_v_version_highlights_parent_id_idx" ON "_case_studies_v_version_highlights" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_version_populated_authors_order_idx" ON "_case_studies_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_case_studies_v_version_populated_authors_parent_id_idx" ON "_case_studies_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_case_studies_v_parent_idx" ON "_case_studies_v" USING btree ("parent_id");
  CREATE INDEX "_case_studies_v_version_version_hero_image_idx" ON "_case_studies_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_case_studies_v_version_meta_version_meta_image_idx" ON "_case_studies_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_case_studies_v_version_version_slug_idx" ON "_case_studies_v" USING btree ("version_slug");
  CREATE INDEX "_case_studies_v_version_version_updated_at_idx" ON "_case_studies_v" USING btree ("version_updated_at");
  CREATE INDEX "_case_studies_v_version_version_created_at_idx" ON "_case_studies_v" USING btree ("version_created_at");
  CREATE INDEX "_case_studies_v_version_version__status_idx" ON "_case_studies_v" USING btree ("version__status");
  CREATE INDEX "_case_studies_v_created_at_idx" ON "_case_studies_v" USING btree ("created_at");
  CREATE INDEX "_case_studies_v_updated_at_idx" ON "_case_studies_v" USING btree ("updated_at");
  CREATE INDEX "_case_studies_v_latest_idx" ON "_case_studies_v" USING btree ("latest");
  CREATE INDEX "_case_studies_v_autosave_idx" ON "_case_studies_v" USING btree ("autosave");
  CREATE INDEX "_case_studies_v_rels_order_idx" ON "_case_studies_v_rels" USING btree ("order");
  CREATE INDEX "_case_studies_v_rels_parent_idx" ON "_case_studies_v_rels" USING btree ("parent_id");
  CREATE INDEX "_case_studies_v_rels_path_idx" ON "_case_studies_v_rels" USING btree ("path");
  CREATE INDEX "_case_studies_v_rels_case_studies_id_idx" ON "_case_studies_v_rels" USING btree ("case_studies_id");
  CREATE INDEX "_case_studies_v_rels_users_id_idx" ON "_case_studies_v_rels" USING btree ("users_id");
  CREATE INDEX "research_papers_populated_authors_order_idx" ON "research_papers_populated_authors" USING btree ("_order");
  CREATE INDEX "research_papers_populated_authors_parent_id_idx" ON "research_papers_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "research_papers_hero_image_idx" ON "research_papers" USING btree ("hero_image_id");
  CREATE INDEX "research_papers_meta_meta_image_idx" ON "research_papers" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "research_papers_slug_idx" ON "research_papers" USING btree ("slug");
  CREATE INDEX "research_papers_updated_at_idx" ON "research_papers" USING btree ("updated_at");
  CREATE INDEX "research_papers_created_at_idx" ON "research_papers" USING btree ("created_at");
  CREATE INDEX "research_papers__status_idx" ON "research_papers" USING btree ("_status");
  CREATE INDEX "research_papers_rels_order_idx" ON "research_papers_rels" USING btree ("order");
  CREATE INDEX "research_papers_rels_parent_idx" ON "research_papers_rels" USING btree ("parent_id");
  CREATE INDEX "research_papers_rels_path_idx" ON "research_papers_rels" USING btree ("path");
  CREATE INDEX "research_papers_rels_research_papers_id_idx" ON "research_papers_rels" USING btree ("research_papers_id");
  CREATE INDEX "research_papers_rels_users_id_idx" ON "research_papers_rels" USING btree ("users_id");
  CREATE INDEX "_research_papers_v_version_populated_authors_order_idx" ON "_research_papers_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_research_papers_v_version_populated_authors_parent_id_idx" ON "_research_papers_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_research_papers_v_parent_idx" ON "_research_papers_v" USING btree ("parent_id");
  CREATE INDEX "_research_papers_v_version_version_hero_image_idx" ON "_research_papers_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_research_papers_v_version_meta_version_meta_image_idx" ON "_research_papers_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_research_papers_v_version_version_slug_idx" ON "_research_papers_v" USING btree ("version_slug");
  CREATE INDEX "_research_papers_v_version_version_updated_at_idx" ON "_research_papers_v" USING btree ("version_updated_at");
  CREATE INDEX "_research_papers_v_version_version_created_at_idx" ON "_research_papers_v" USING btree ("version_created_at");
  CREATE INDEX "_research_papers_v_version_version__status_idx" ON "_research_papers_v" USING btree ("version__status");
  CREATE INDEX "_research_papers_v_created_at_idx" ON "_research_papers_v" USING btree ("created_at");
  CREATE INDEX "_research_papers_v_updated_at_idx" ON "_research_papers_v" USING btree ("updated_at");
  CREATE INDEX "_research_papers_v_latest_idx" ON "_research_papers_v" USING btree ("latest");
  CREATE INDEX "_research_papers_v_autosave_idx" ON "_research_papers_v" USING btree ("autosave");
  CREATE INDEX "_research_papers_v_rels_order_idx" ON "_research_papers_v_rels" USING btree ("order");
  CREATE INDEX "_research_papers_v_rels_parent_idx" ON "_research_papers_v_rels" USING btree ("parent_id");
  CREATE INDEX "_research_papers_v_rels_path_idx" ON "_research_papers_v_rels" USING btree ("path");
  CREATE INDEX "_research_papers_v_rels_research_papers_id_idx" ON "_research_papers_v_rels" USING btree ("research_papers_id");
  CREATE INDEX "_research_papers_v_rels_users_id_idx" ON "_research_papers_v_rels" USING btree ("users_id");
  CREATE INDEX "faqs_category_idx" ON "faqs" USING btree ("category_id");
  CREATE INDEX "faqs_updated_at_idx" ON "faqs" USING btree ("updated_at");
  CREATE INDEX "faqs_created_at_idx" ON "faqs" USING btree ("created_at");
  CREATE INDEX "faq_categories_category_idx" ON "faq_categories" USING btree ("category");
  CREATE UNIQUE INDEX "faq_categories_slug_idx" ON "faq_categories" USING btree ("slug");
  CREATE INDEX "faq_categories_updated_at_idx" ON "faq_categories" USING btree ("updated_at");
  CREATE INDEX "faq_categories_created_at_idx" ON "faq_categories" USING btree ("created_at");
  CREATE INDEX "ai_maturity_submissions_updated_at_idx" ON "ai_maturity_submissions" USING btree ("updated_at");
  CREATE INDEX "ai_maturity_submissions_created_at_idx" ON "ai_maturity_submissions" USING btree ("created_at");
  CREATE INDEX "enquiries_updated_at_idx" ON "enquiries" USING btree ("updated_at");
  CREATE INDEX "enquiries_created_at_idx" ON "enquiries" USING btree ("created_at");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "legal_pages_meta_meta_image_idx" ON "legal_pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "legal_pages_slug_idx" ON "legal_pages" USING btree ("slug");
  CREATE INDEX "legal_pages_updated_at_idx" ON "legal_pages" USING btree ("updated_at");
  CREATE INDEX "legal_pages_created_at_idx" ON "legal_pages" USING btree ("created_at");
  CREATE INDEX "legal_pages__status_idx" ON "legal_pages" USING btree ("_status");
  CREATE INDEX "_legal_pages_v_parent_idx" ON "_legal_pages_v" USING btree ("parent_id");
  CREATE INDEX "_legal_pages_v_version_meta_version_meta_image_idx" ON "_legal_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_legal_pages_v_version_version_slug_idx" ON "_legal_pages_v" USING btree ("version_slug");
  CREATE INDEX "_legal_pages_v_version_version_updated_at_idx" ON "_legal_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_legal_pages_v_version_version_created_at_idx" ON "_legal_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_legal_pages_v_version_version__status_idx" ON "_legal_pages_v" USING btree ("version__status");
  CREATE INDEX "_legal_pages_v_created_at_idx" ON "_legal_pages_v" USING btree ("created_at");
  CREATE INDEX "_legal_pages_v_updated_at_idx" ON "_legal_pages_v" USING btree ("updated_at");
  CREATE INDEX "_legal_pages_v_latest_idx" ON "_legal_pages_v" USING btree ("latest");
  CREATE INDEX "_legal_pages_v_autosave_idx" ON "_legal_pages_v" USING btree ("autosave");
  CREATE INDEX "careers_work_mode_order_idx" ON "careers_work_mode" USING btree ("order");
  CREATE INDEX "careers_work_mode_parent_idx" ON "careers_work_mode" USING btree ("parent_id");
  CREATE INDEX "careers_meta_meta_image_idx" ON "careers" USING btree ("meta_image_id");
  CREATE INDEX "careers_department_idx" ON "careers" USING btree ("department_id");
  CREATE UNIQUE INDEX "careers_slug_idx" ON "careers" USING btree ("slug");
  CREATE INDEX "careers_updated_at_idx" ON "careers" USING btree ("updated_at");
  CREATE INDEX "careers_created_at_idx" ON "careers" USING btree ("created_at");
  CREATE INDEX "careers__status_idx" ON "careers" USING btree ("_status");
  CREATE INDEX "_careers_v_version_work_mode_order_idx" ON "_careers_v_version_work_mode" USING btree ("order");
  CREATE INDEX "_careers_v_version_work_mode_parent_idx" ON "_careers_v_version_work_mode" USING btree ("parent_id");
  CREATE INDEX "_careers_v_parent_idx" ON "_careers_v" USING btree ("parent_id");
  CREATE INDEX "_careers_v_version_meta_version_meta_image_idx" ON "_careers_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_careers_v_version_version_department_idx" ON "_careers_v" USING btree ("version_department_id");
  CREATE INDEX "_careers_v_version_version_slug_idx" ON "_careers_v" USING btree ("version_slug");
  CREATE INDEX "_careers_v_version_version_updated_at_idx" ON "_careers_v" USING btree ("version_updated_at");
  CREATE INDEX "_careers_v_version_version_created_at_idx" ON "_careers_v" USING btree ("version_created_at");
  CREATE INDEX "_careers_v_version_version__status_idx" ON "_careers_v" USING btree ("version__status");
  CREATE INDEX "_careers_v_created_at_idx" ON "_careers_v" USING btree ("created_at");
  CREATE INDEX "_careers_v_updated_at_idx" ON "_careers_v" USING btree ("updated_at");
  CREATE INDEX "_careers_v_latest_idx" ON "_careers_v" USING btree ("latest");
  CREATE INDEX "_careers_v_autosave_idx" ON "_careers_v" USING btree ("autosave");
  CREATE INDEX "departments_department_idx" ON "departments" USING btree ("department");
  CREATE UNIQUE INDEX "departments_slug_idx" ON "departments" USING btree ("slug");
  CREATE INDEX "departments_updated_at_idx" ON "departments" USING btree ("updated_at");
  CREATE INDEX "departments_created_at_idx" ON "departments" USING btree ("created_at");
  CREATE INDEX "employee_testimonials_updated_at_idx" ON "employee_testimonials" USING btree ("updated_at");
  CREATE INDEX "employee_testimonials_created_at_idx" ON "employee_testimonials" USING btree ("created_at");
  CREATE INDEX "employee_testimonials__status_idx" ON "employee_testimonials" USING btree ("_status");
  CREATE INDEX "_employee_testimonials_v_parent_idx" ON "_employee_testimonials_v" USING btree ("parent_id");
  CREATE INDEX "_employee_testimonials_v_version_version_updated_at_idx" ON "_employee_testimonials_v" USING btree ("version_updated_at");
  CREATE INDEX "_employee_testimonials_v_version_version_created_at_idx" ON "_employee_testimonials_v" USING btree ("version_created_at");
  CREATE INDEX "_employee_testimonials_v_version_version__status_idx" ON "_employee_testimonials_v" USING btree ("version__status");
  CREATE INDEX "_employee_testimonials_v_created_at_idx" ON "_employee_testimonials_v" USING btree ("created_at");
  CREATE INDEX "_employee_testimonials_v_updated_at_idx" ON "_employee_testimonials_v" USING btree ("updated_at");
  CREATE INDEX "_employee_testimonials_v_latest_idx" ON "_employee_testimonials_v" USING btree ("latest");
  CREATE INDEX "_employee_testimonials_v_autosave_idx" ON "_employee_testimonials_v" USING btree ("autosave");
  CREATE INDEX "industries__order_idx" ON "industries" USING btree ("_order");
  CREATE INDEX "industries_updated_at_idx" ON "industries" USING btree ("updated_at");
  CREATE INDEX "industries_created_at_idx" ON "industries" USING btree ("created_at");
  CREATE INDEX "partners__order_idx" ON "partners" USING btree ("_order");
  CREATE INDEX "partners_logo_idx" ON "partners" USING btree ("logo_id");
  CREATE INDEX "partners_updated_at_idx" ON "partners" USING btree ("updated_at");
  CREATE INDEX "partners_created_at_idx" ON "partners" USING btree ("created_at");
  CREATE INDEX "clients__order_idx" ON "clients" USING btree ("_order");
  CREATE INDEX "clients_logo_idx" ON "clients" USING btree ("logo_id");
  CREATE INDEX "clients_updated_at_idx" ON "clients" USING btree ("updated_at");
  CREATE INDEX "clients_created_at_idx" ON "clients" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "sessions_token_idx" ON "sessions" USING btree ("token");
  CREATE INDEX "sessions_user_idx" ON "sessions" USING btree ("user_id");
  CREATE INDEX "sessions_updated_at_idx" ON "sessions" USING btree ("updated_at");
  CREATE INDEX "sessions_created_at_idx" ON "sessions" USING btree ("created_at");
  CREATE INDEX "accounts_user_idx" ON "accounts" USING btree ("user_id");
  CREATE INDEX "accounts_updated_at_idx" ON "accounts" USING btree ("updated_at");
  CREATE INDEX "accounts_created_at_idx" ON "accounts" USING btree ("created_at");
  CREATE INDEX "verifications_updated_at_idx" ON "verifications" USING btree ("updated_at");
  CREATE INDEX "verifications_created_at_idx" ON "verifications" USING btree ("created_at");
  CREATE INDEX "passkeys_user_idx" ON "passkeys" USING btree ("user_id");
  CREATE INDEX "passkeys_updated_at_idx" ON "passkeys" USING btree ("updated_at");
  CREATE INDEX "passkeys_created_at_idx" ON "passkeys" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_blogs_id_idx" ON "payload_locked_documents_rels" USING btree ("blogs_id");
  CREATE INDEX "payload_locked_documents_rels_blog_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_categories_id");
  CREATE INDEX "payload_locked_documents_rels_case_studies_id_idx" ON "payload_locked_documents_rels" USING btree ("case_studies_id");
  CREATE INDEX "payload_locked_documents_rels_research_papers_id_idx" ON "payload_locked_documents_rels" USING btree ("research_papers_id");
  CREATE INDEX "payload_locked_documents_rels_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("faqs_id");
  CREATE INDEX "payload_locked_documents_rels_faq_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("faq_categories_id");
  CREATE INDEX "payload_locked_documents_rels_ai_maturity_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("ai_maturity_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_enquiries_id_idx" ON "payload_locked_documents_rels" USING btree ("enquiries_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_legal_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("legal_pages_id");
  CREATE INDEX "payload_locked_documents_rels_careers_id_idx" ON "payload_locked_documents_rels" USING btree ("careers_id");
  CREATE INDEX "payload_locked_documents_rels_departments_id_idx" ON "payload_locked_documents_rels" USING btree ("departments_id");
  CREATE INDEX "payload_locked_documents_rels_employee_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("employee_testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_industries_id_idx" ON "payload_locked_documents_rels" USING btree ("industries_id");
  CREATE INDEX "payload_locked_documents_rels_partners_id_idx" ON "payload_locked_documents_rels" USING btree ("partners_id");
  CREATE INDEX "payload_locked_documents_rels_clients_id_idx" ON "payload_locked_documents_rels" USING btree ("clients_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_sessions_id_idx" ON "payload_locked_documents_rels" USING btree ("sessions_id");
  CREATE INDEX "payload_locked_documents_rels_accounts_id_idx" ON "payload_locked_documents_rels" USING btree ("accounts_id");
  CREATE INDEX "payload_locked_documents_rels_verifications_id_idx" ON "payload_locked_documents_rels" USING btree ("verifications_id");
  CREATE INDEX "payload_locked_documents_rels_passkeys_id_idx" ON "payload_locked_documents_rels" USING btree ("passkeys_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "homepage_why_us_axis_card_phases_order_idx" ON "homepage_why_us_axis_card_phases" USING btree ("_order");
  CREATE INDEX "homepage_why_us_axis_card_phases_parent_id_idx" ON "homepage_why_us_axis_card_phases" USING btree ("_parent_id");
  CREATE INDEX "homepage_rels_order_idx" ON "homepage_rels" USING btree ("order");
  CREATE INDEX "homepage_rels_parent_idx" ON "homepage_rels" USING btree ("parent_id");
  CREATE INDEX "homepage_rels_path_idx" ON "homepage_rels" USING btree ("path");
  CREATE INDEX "homepage_rels_services_id_idx" ON "homepage_rels" USING btree ("services_id");
  CREATE INDEX "homepage_rels_blogs_id_idx" ON "homepage_rels" USING btree ("blogs_id");
  CREATE INDEX "homepage_rels_case_studies_id_idx" ON "homepage_rels" USING btree ("case_studies_id");
  CREATE INDEX "homepage_rels_research_papers_id_idx" ON "homepage_rels" USING btree ("research_papers_id");
  CREATE INDEX "homepage_rels_industries_id_idx" ON "homepage_rels" USING btree ("industries_id");
  CREATE INDEX "services_page_why_matters_items_order_idx" ON "services_page_why_matters_items" USING btree ("_order");
  CREATE INDEX "services_page_why_matters_items_parent_id_idx" ON "services_page_why_matters_items" USING btree ("_parent_id");
  CREATE INDEX "services_page_seo_seo_og_image_idx" ON "services_page" USING btree ("seo_og_image_id");
  CREATE INDEX "services_page_rels_order_idx" ON "services_page_rels" USING btree ("order");
  CREATE INDEX "services_page_rels_parent_idx" ON "services_page_rels" USING btree ("parent_id");
  CREATE INDEX "services_page_rels_path_idx" ON "services_page_rels" USING btree ("path");
  CREATE INDEX "services_page_rels_services_id_idx" ON "services_page_rels" USING btree ("services_id");
  CREATE INDEX "services_page_rels_blogs_id_idx" ON "services_page_rels" USING btree ("blogs_id");
  CREATE INDEX "services_page_rels_case_studies_id_idx" ON "services_page_rels" USING btree ("case_studies_id");
  CREATE INDEX "services_page_rels_research_papers_id_idx" ON "services_page_rels" USING btree ("research_papers_id");
  CREATE INDEX "about_page_values_items_order_idx" ON "about_page_values_items" USING btree ("_order");
  CREATE INDEX "about_page_values_items_parent_id_idx" ON "about_page_values_items" USING btree ("_parent_id");
  CREATE INDEX "about_page_values_items_image_idx" ON "about_page_values_items" USING btree ("image_id");
  CREATE INDEX "about_page_hiring_benefits_order_idx" ON "about_page_hiring_benefits" USING btree ("_order");
  CREATE INDEX "about_page_hiring_benefits_parent_id_idx" ON "about_page_hiring_benefits" USING btree ("_parent_id");
  CREATE INDEX "about_page_seo_seo_og_image_idx" ON "about_page" USING btree ("seo_og_image_id");
  CREATE INDEX "about_page_rels_order_idx" ON "about_page_rels" USING btree ("order");
  CREATE INDEX "about_page_rels_parent_idx" ON "about_page_rels" USING btree ("parent_id");
  CREATE INDEX "about_page_rels_path_idx" ON "about_page_rels" USING btree ("path");
  CREATE INDEX "about_page_rels_services_id_idx" ON "about_page_rels" USING btree ("services_id");
  CREATE INDEX "about_page_rels_blogs_id_idx" ON "about_page_rels" USING btree ("blogs_id");
  CREATE INDEX "about_page_rels_case_studies_id_idx" ON "about_page_rels" USING btree ("case_studies_id");
  CREATE INDEX "about_page_rels_research_papers_id_idx" ON "about_page_rels" USING btree ("research_papers_id");
  CREATE INDEX "faqs_page_rels_order_idx" ON "faqs_page_rels" USING btree ("order");
  CREATE INDEX "faqs_page_rels_parent_idx" ON "faqs_page_rels" USING btree ("parent_id");
  CREATE INDEX "faqs_page_rels_path_idx" ON "faqs_page_rels" USING btree ("path");
  CREATE INDEX "faqs_page_rels_services_id_idx" ON "faqs_page_rels" USING btree ("services_id");
  CREATE INDEX "faqs_page_rels_blogs_id_idx" ON "faqs_page_rels" USING btree ("blogs_id");
  CREATE INDEX "faqs_page_rels_case_studies_id_idx" ON "faqs_page_rels" USING btree ("case_studies_id");
  CREATE INDEX "faqs_page_rels_research_papers_id_idx" ON "faqs_page_rels" USING btree ("research_papers_id");
  CREATE INDEX "insights_page_rels_order_idx" ON "insights_page_rels" USING btree ("order");
  CREATE INDEX "insights_page_rels_parent_idx" ON "insights_page_rels" USING btree ("parent_id");
  CREATE INDEX "insights_page_rels_path_idx" ON "insights_page_rels" USING btree ("path");
  CREATE INDEX "insights_page_rels_services_id_idx" ON "insights_page_rels" USING btree ("services_id");
  CREATE INDEX "insights_page_rels_blogs_id_idx" ON "insights_page_rels" USING btree ("blogs_id");
  CREATE INDEX "insights_page_rels_case_studies_id_idx" ON "insights_page_rels" USING btree ("case_studies_id");
  CREATE INDEX "insights_page_rels_research_papers_id_idx" ON "insights_page_rels" USING btree ("research_papers_id");
  CREATE INDEX "methodology_page_phases_items_order_idx" ON "methodology_page_phases_items" USING btree ("_order");
  CREATE INDEX "methodology_page_phases_items_parent_id_idx" ON "methodology_page_phases_items" USING btree ("_parent_id");
  CREATE INDEX "methodology_page_hero_hero_image_idx" ON "methodology_page" USING btree ("hero_image_id");
  CREATE INDEX "methodology_page_seo_seo_og_image_idx" ON "methodology_page" USING btree ("seo_og_image_id");
  CREATE INDEX "methodology_page_rels_order_idx" ON "methodology_page_rels" USING btree ("order");
  CREATE INDEX "methodology_page_rels_parent_idx" ON "methodology_page_rels" USING btree ("parent_id");
  CREATE INDEX "methodology_page_rels_path_idx" ON "methodology_page_rels" USING btree ("path");
  CREATE INDEX "methodology_page_rels_services_id_idx" ON "methodology_page_rels" USING btree ("services_id");
  CREATE INDEX "methodology_page_rels_blogs_id_idx" ON "methodology_page_rels" USING btree ("blogs_id");
  CREATE INDEX "methodology_page_rels_case_studies_id_idx" ON "methodology_page_rels" USING btree ("case_studies_id");
  CREATE INDEX "methodology_page_rels_research_papers_id_idx" ON "methodology_page_rels" USING btree ("research_papers_id");
  CREATE INDEX "teams_leaderships_order_idx" ON "teams_leaderships" USING btree ("_order");
  CREATE INDEX "teams_leaderships_parent_id_idx" ON "teams_leaderships" USING btree ("_parent_id");
  CREATE INDEX "teams_leaderships_picture_idx" ON "teams_leaderships" USING btree ("picture_id");
  CREATE INDEX "teams_members_order_idx" ON "teams_members" USING btree ("_order");
  CREATE INDEX "teams_members_parent_id_idx" ON "teams_members" USING btree ("_parent_id");
  CREATE INDEX "teams_members_picture_idx" ON "teams_members" USING btree ("picture_id");
  CREATE INDEX "footer_socials_order_idx" ON "footer_socials" USING btree ("_order");
  CREATE INDEX "footer_socials_parent_id_idx" ON "footer_socials" USING btree ("_parent_id");
  CREATE INDEX "footer_locations_order_idx" ON "footer_locations" USING btree ("_order");
  CREATE INDEX "footer_locations_parent_id_idx" ON "footer_locations" USING btree ("_parent_id");`);
}

export async function down({
	db,
	payload,
	req,
}: MigrateDownArgs): Promise<void> {
	await db.execute(sql`
   DROP TABLE "services_cta_buttons" CASCADE;
  DROP TABLE "services_homepage_features" CASCADE;
  DROP TABLE "services_homepage_tags" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "services_rels" CASCADE;
  DROP TABLE "_services_v_version_cta_buttons" CASCADE;
  DROP TABLE "_services_v_version_homepage_features" CASCADE;
  DROP TABLE "_services_v_version_homepage_tags" CASCADE;
  DROP TABLE "_services_v" CASCADE;
  DROP TABLE "_services_v_rels" CASCADE;
  DROP TABLE "blogs_populated_authors" CASCADE;
  DROP TABLE "blogs" CASCADE;
  DROP TABLE "blogs_rels" CASCADE;
  DROP TABLE "_blogs_v_version_populated_authors" CASCADE;
  DROP TABLE "_blogs_v" CASCADE;
  DROP TABLE "_blogs_v_rels" CASCADE;
  DROP TABLE "blog_categories" CASCADE;
  DROP TABLE "case_studies_highlights" CASCADE;
  DROP TABLE "case_studies_populated_authors" CASCADE;
  DROP TABLE "case_studies" CASCADE;
  DROP TABLE "case_studies_rels" CASCADE;
  DROP TABLE "_case_studies_v_version_highlights" CASCADE;
  DROP TABLE "_case_studies_v_version_populated_authors" CASCADE;
  DROP TABLE "_case_studies_v" CASCADE;
  DROP TABLE "_case_studies_v_rels" CASCADE;
  DROP TABLE "research_papers_populated_authors" CASCADE;
  DROP TABLE "research_papers" CASCADE;
  DROP TABLE "research_papers_rels" CASCADE;
  DROP TABLE "_research_papers_v_version_populated_authors" CASCADE;
  DROP TABLE "_research_papers_v" CASCADE;
  DROP TABLE "_research_papers_v_rels" CASCADE;
  DROP TABLE "faqs" CASCADE;
  DROP TABLE "faq_categories" CASCADE;
  DROP TABLE "ai_maturity_submissions" CASCADE;
  DROP TABLE "enquiries" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "legal_pages" CASCADE;
  DROP TABLE "_legal_pages_v" CASCADE;
  DROP TABLE "careers_work_mode" CASCADE;
  DROP TABLE "careers" CASCADE;
  DROP TABLE "_careers_v_version_work_mode" CASCADE;
  DROP TABLE "_careers_v" CASCADE;
  DROP TABLE "departments" CASCADE;
  DROP TABLE "employee_testimonials" CASCADE;
  DROP TABLE "_employee_testimonials_v" CASCADE;
  DROP TABLE "industries" CASCADE;
  DROP TABLE "partners" CASCADE;
  DROP TABLE "clients" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "sessions" CASCADE;
  DROP TABLE "accounts" CASCADE;
  DROP TABLE "verifications" CASCADE;
  DROP TABLE "passkeys" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "homepage_why_us_axis_card_phases" CASCADE;
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "homepage_rels" CASCADE;
  DROP TABLE "services_page_why_matters_items" CASCADE;
  DROP TABLE "services_page" CASCADE;
  DROP TABLE "services_page_rels" CASCADE;
  DROP TABLE "about_page_values_items" CASCADE;
  DROP TABLE "about_page_hiring_benefits" CASCADE;
  DROP TABLE "about_page" CASCADE;
  DROP TABLE "about_page_rels" CASCADE;
  DROP TABLE "faqs_page" CASCADE;
  DROP TABLE "faqs_page_rels" CASCADE;
  DROP TABLE "insights_page" CASCADE;
  DROP TABLE "insights_page_rels" CASCADE;
  DROP TABLE "methodology_page_phases_items" CASCADE;
  DROP TABLE "methodology_page" CASCADE;
  DROP TABLE "methodology_page_rels" CASCADE;
  DROP TABLE "teams_leaderships" CASCADE;
  DROP TABLE "teams_members" CASCADE;
  DROP TABLE "teams" CASCADE;
  DROP TABLE "footer_socials" CASCADE;
  DROP TABLE "footer_locations" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TYPE "public"."enum_services_cta_buttons_link_type";
  DROP TYPE "public"."enum_services_cta_buttons_link_page";
  DROP TYPE "public"."enum_services_cta_buttons_link_appearance";
  DROP TYPE "public"."enum_services_homepage_proof_link_type";
  DROP TYPE "public"."enum_services_homepage_proof_link_page";
  DROP TYPE "public"."enum_services_homepage_proof_link_appearance";
  DROP TYPE "public"."enum_services_status";
  DROP TYPE "public"."enum__services_v_version_cta_buttons_link_type";
  DROP TYPE "public"."enum__services_v_version_cta_buttons_link_page";
  DROP TYPE "public"."enum__services_v_version_cta_buttons_link_appearance";
  DROP TYPE "public"."enum__services_v_version_homepage_proof_link_type";
  DROP TYPE "public"."enum__services_v_version_homepage_proof_link_page";
  DROP TYPE "public"."enum__services_v_version_homepage_proof_link_appearance";
  DROP TYPE "public"."enum__services_v_version_status";
  DROP TYPE "public"."enum_blogs_status";
  DROP TYPE "public"."enum__blogs_v_version_status";
  DROP TYPE "public"."enum_case_studies_status";
  DROP TYPE "public"."enum__case_studies_v_version_status";
  DROP TYPE "public"."enum_research_papers_status";
  DROP TYPE "public"."enum__research_papers_v_version_status";
  DROP TYPE "public"."enum_ai_maturity_submissions_level";
  DROP TYPE "public"."enum_legal_pages_status";
  DROP TYPE "public"."enum__legal_pages_v_version_status";
  DROP TYPE "public"."enum_careers_work_mode";
  DROP TYPE "public"."enum_careers_status";
  DROP TYPE "public"."enum__careers_v_version_work_mode";
  DROP TYPE "public"."enum__careers_v_version_status";
  DROP TYPE "public"."enum_employee_testimonials_status";
  DROP TYPE "public"."enum__employee_testimonials_v_version_status";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_homepage_services_cta_link_type";
  DROP TYPE "public"."enum_homepage_services_cta_link_page";
  DROP TYPE "public"."enum_homepage_why_us_axis_card_learn_more_link_type";
  DROP TYPE "public"."enum_homepage_why_us_axis_card_learn_more_link_page";
  DROP TYPE "public"."enum_homepage_why_us_tech_stack_card_cta_link_type";
  DROP TYPE "public"."enum_homepage_why_us_tech_stack_card_cta_link_page";
  DROP TYPE "public"."enum_homepage_cta_link_type";
  DROP TYPE "public"."enum_homepage_cta_link_page";
  DROP TYPE "public"."enum_services_page_why_matters_cta_link_type";
  DROP TYPE "public"."enum_services_page_why_matters_cta_link_page";
  DROP TYPE "public"."enum_services_page_why_matters_cta_link_appearance";
  DROP TYPE "public"."enum_about_page_hiring_cta_link_type";
  DROP TYPE "public"."enum_about_page_hiring_cta_link_page";
  DROP TYPE "public"."enum_about_page_cta_button_type";
  DROP TYPE "public"."enum_about_page_cta_button_page";
  DROP TYPE "public"."enum_faqs_page_cta_link_type";
  DROP TYPE "public"."enum_faqs_page_cta_link_page";
  DROP TYPE "public"."enum_insights_page_cta_link_type";
  DROP TYPE "public"."enum_insights_page_cta_link_page";
  DROP TYPE "public"."enum_methodology_page_phases_items_icon";
  DROP TYPE "public"."enum_methodology_page_hero_cta_link_type";
  DROP TYPE "public"."enum_methodology_page_hero_cta_link_page";
  DROP TYPE "public"."enum_footer_socials_platform";`);
}
