/*
  Warnings:

  - The primary key for the `gymwebsite_data` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `d` on the `gymwebsite_data` table. All the data in the column will be lost.
  - Added the required column `id` to the `gymwebsite_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gymwebsite_data` DROP PRIMARY KEY,
    DROP COLUMN `d`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `Age` INTEGER NULL,
    ADD PRIMARY KEY (`id`);
