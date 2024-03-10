ALTER TABLE "federated_credentials" RENAME COLUMN "user_id" TO "userId";--> statement-breakpoint
ALTER TABLE "federated_credentials" DROP CONSTRAINT "federated_credentials_user_id_users_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "federated_credentials" ADD CONSTRAINT "federated_credentials_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
