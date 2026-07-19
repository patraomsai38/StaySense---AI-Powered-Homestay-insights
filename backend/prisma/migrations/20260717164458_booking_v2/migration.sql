/*
  Warnings:

  - Added the required column `address` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimatedPrice` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homestayName` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_homestayId_fkey";

-- AlterTable
ALTER TABLE "public"."Booking" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "category" TEXT,
ADD COLUMN     "estimatedPrice" INTEGER NOT NULL,
ADD COLUMN     "homestayName" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Confirmed',
ALTER COLUMN "homestayId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_homestayId_fkey" FOREIGN KEY ("homestayId") REFERENCES "public"."Homestay"("id") ON DELETE SET NULL ON UPDATE CASCADE;
