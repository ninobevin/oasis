/*
  Warnings:

  - You are about to drop the column `answerType` on the `SurveyAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `SurveyAnswer` table. All the data in the column will be lost.
  - Added the required column `surveyEntryId` to the `SurveyAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SurveyAnswer` DROP COLUMN `answerType`,
    DROP COLUMN `comment`,
    ADD COLUMN `surveyEntryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `SurveyEntry` ADD COLUMN `comment` VARCHAR(191) NULL;
