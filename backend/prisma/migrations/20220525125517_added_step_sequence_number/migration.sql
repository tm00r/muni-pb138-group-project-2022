/*
  Warnings:

  - Added the required column `orderSequenceNumber` to the `Step` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Step" ADD COLUMN     "orderSequenceNumber" INTEGER NOT NULL;
