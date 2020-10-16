CREATE TABLE "foods"(
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(80),
"eatenToday" BOOLEAN DEFAULT FALSE
);

insert into "foods" ("name")
VALUES ('flautas');

insert into "foods" ("name")
VALUES ('donuts');