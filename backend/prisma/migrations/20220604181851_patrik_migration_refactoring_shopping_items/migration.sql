/*
  Warnings:

  - You are about to drop the column `shoppingListId` on the `ShoppingItem` table. All the data in the column will be lost.
  - You are about to drop the `ShoppingList` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `orderId` to the `ShoppingItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ShoppingItem" DROP CONSTRAINT "ShoppingItem_shoppingListId_fkey";

-- DropForeignKey
ALTER TABLE "ShoppingList" DROP CONSTRAINT "ShoppingList_orderId_fkey";

-- AlterTable
ALTER TABLE "ShoppingItem" DROP COLUMN "shoppingListId",
ADD COLUMN     "orderId" TEXT NOT NULL;

-- DropTable
DROP TABLE "ShoppingList";

-- AddForeignKey
ALTER TABLE "ShoppingItem" ADD CONSTRAINT "ShoppingItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
