ALTER TABLE "history" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "input_methods" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "prompt_templates" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "users" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "history" CASCADE;--> statement-breakpoint
DROP TABLE "input_methods" CASCADE;--> statement-breakpoint
DROP TABLE "prompt_templates" CASCADE;--> statement-breakpoint
DROP TABLE "users" CASCADE;--> statement-breakpoint
ALTER TABLE "applications" DROP CONSTRAINT "applications_user_id_users_id_fk";
