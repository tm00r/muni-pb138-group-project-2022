/*
  Warnings:

  - Added the required column `name` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Step` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Step" ADD COLUMN     "name" TEXT NOT NULL;
