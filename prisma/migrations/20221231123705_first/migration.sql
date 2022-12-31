-- CreateTable
CREATE TABLE `gymwebsite_data` (
    `d` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255) NOT NULL,
    `Age` INTEGER NOT NULL,
    `Gender` VARCHAR(255) NOT NULL,
    `Address` VARCHAR(255) NOT NULL,
    `About_more` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `gymwebsite_data_Name_key`(`Name`),
    PRIMARY KEY (`d`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
