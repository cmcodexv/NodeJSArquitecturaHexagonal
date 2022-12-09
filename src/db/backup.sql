-- Adminer 4.8.1 PostgreSQL 15.1 (Debian 15.1-1.pgdg110+1) dump

DROP TABLE IF EXISTS "employee";
DROP SEQUENCE IF EXISTS employee_id_seq;
CREATE SEQUENCE employee_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 7 CACHE 1;

CREATE TABLE "employee" (
    "id" integer DEFAULT nextval('employee_id_seq') NOT NULL,
    "name" text NOT NULL,
    "age" integer NOT NULL,
    "address" character(50),
    "salary" real,
    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "employee" ("id", "name", "age", "address", "salary") VALUES
(1,	'Paul',	32,	'California',	20000),
(2,	'Allen',	25,	'Texas',	15000),
(3,	'Teddy',	23,	'Norway',	20000),
(4,	'Mark',	25,	'Rich-Mond',	65000),
(5,	'David',	27,	'Texas',	85000),
(6,	'Kim',	22,	'South-Hall',	45000),
(7,	'James',	24,	'Houston',	10000);


