/*
  Warnings:

  - Added the required column `lang` to the `SurveyQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SurveyQuestion` ADD COLUMN `lang` VARCHAR(191) NOT NULL;
