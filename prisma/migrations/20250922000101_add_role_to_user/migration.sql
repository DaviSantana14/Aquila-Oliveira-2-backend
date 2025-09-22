-- CreateEnum
CREATE TYPE "public"."userRole" AS ENUM ('ADMIN', 'MAINTAINER');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "role" "public"."userRole" NOT NULL DEFAULT 'MAINTAINER';
