-- CreateTable
CREATE TABLE "ShopingItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "shopingListId" TEXT NOT NULL,

    CONSTRAINT "ShopingItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopingList" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "ShopingList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Step" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,
    "isFinished" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShopingList_orderId_key" ON "ShopingList"("orderId");

-- AddForeignKey
ALTER TABLE "ShopingItem" ADD CONSTRAINT "ShopingItem_shopingListId_fkey" FOREIGN KEY ("shopingListId") REFERENCES "ShopingList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopingList" ADD CONSTRAINT "ShopingList_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
