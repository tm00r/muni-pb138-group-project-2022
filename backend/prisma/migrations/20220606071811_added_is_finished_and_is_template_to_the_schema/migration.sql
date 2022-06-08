/*
  Warnings:

  - Added the required column `isFinished` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isTemplate` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "isFinished" BOOLEAN NOT NULL,
ADD COLUMN     "isTemplate" BOOLEAN NOT NULL;
