CREATE TABLE IF NOT EXISTS "federated_credentials" (
	"user_id" uuid NOT NULL,
	"provider" varchar(50) NOT NULL,
	"subject" varchar(50) NOT NULL
);
