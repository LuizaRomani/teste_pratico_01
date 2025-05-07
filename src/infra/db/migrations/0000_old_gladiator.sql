CREATE TABLE "links" (
	"id" text PRIMARY KEY NOT NULL,
	"original_url" text NOT NULL,
	"shorter_url" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "links_original_url_unique" UNIQUE("original_url"),
	CONSTRAINT "links_shorter_url_unique" UNIQUE("shorter_url")
);
