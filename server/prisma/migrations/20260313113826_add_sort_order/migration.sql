-- AlterTable
ALTER TABLE "product_additional_info" ADD COLUMN     "sort_order" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "product_images" ADD COLUMN     "sort_order" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "product_specifications" ADD COLUMN     "sort_order" INTEGER NOT NULL DEFAULT 0;
