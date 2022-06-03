/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Step` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderBy` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "orderBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Step" DROP COLUMN "createdAt";
