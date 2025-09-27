/*
  Warnings:

  - You are about to alter the column `visitType` on the `SurveyEntry` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `SurveyEntry` MODIFY `visitType` INTEGER NOT NULL;
