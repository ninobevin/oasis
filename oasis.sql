-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: dental_clinic
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('0375e3c8-c89c-4961-a751-cfa703aff937','4a1e6688c41441fc5af1bd4bfba2c7a1f6dee0618fb1223aec3e1e68681b5fea','2025-09-24 13:52:08.065','20250924135207_mod_user_id',NULL,NULL,'2025-09-24 13:52:07.922',1),('0ba1ab85-27a6-438e-bebe-7385b2cdda14','a4a1d9767c6d034276c6202f5810e65c92e2367d109ca6846a8e278185a419e9','2025-09-24 14:05:38.865','20250924140538_mod_user_email',NULL,NULL,'2025-09-24 14:05:38.719',1),('0d7f2fab-b514-4ff3-b555-b2b6c4b97177','014e17e2bb4dac3823559860d9cfa1c31774dc7b63a9dfc17d6e716df3a10ddd','2025-09-27 10:52:59.439','20250927105259_added_pic_column_in_provider4',NULL,NULL,'2025-09-27 10:52:59.412',1),('213dac32-eec1-479a-b767-5f75bbf937e2','fa43f16de7cfe6f618f3ce94b33d3762549a6b8175331b5e34e0d54d6792fc18','2025-09-23 12:41:00.119','20250923124100_added_usergroup',NULL,NULL,'2025-09-23 12:41:00.024',1),('2bde4763-847e-4940-8ceb-bc2b130f8a20','a83abe1cb0946b0f81f79092495844f3975efda01965b8e01515752c4334195c','2025-09-27 14:58:31.010','20250927145830_added_survey_entry5',NULL,NULL,'2025-09-27 14:58:30.932',1),('2fbd0df1-881c-4f93-8111-2f663cbfbc20','56df243d01c3a39debee75757d2dc21063a6df91fcb174a2648a7fa5e54b1a8e','2025-09-27 10:34:40.418','20250927103440_added_pic_column_in_provider',NULL,NULL,'2025-09-27 10:34:40.391',1),('33484c3a-8711-4e31-aa69-d11f1515450f','cc5dfadbc9b23bd9edc780ab8fc67a66c60f9356b97ac42daa5c9e7ff95864be','2025-09-27 10:08:03.297','20250927100803_added_question_survey',NULL,NULL,'2025-09-27 10:08:03.190',1),('42a8fd4d-4347-47bf-bdc5-ef60951d3b37','23e8a2a02941b10e4233e2cfbd4ea8070f604ee06100903d4fd112ed16c2d02d','2025-09-23 12:50:53.685','20250923125053_added_employee_and_group',NULL,NULL,'2025-09-23 12:50:53.513',1),('544eb1f5-b852-4ed6-bff2-0aba41ea1c73','f5ff79f0b0d8c9f2037a38056038e487323065b86598ea5dec33faeafb1f3665','2025-09-22 10:58:35.811','20250922105835_modified_email_username',NULL,NULL,'2025-09-22 10:58:35.677',1),('5a29891d-637f-495a-9ae8-c7967112218a','0a23a5678a0c31d9cfba0dce4770fcca53d7f72e87f854421fe91ffde78f69fd','2025-09-22 10:56:22.426','20250922105622_init',NULL,NULL,'2025-09-22 10:56:22.356',1),('6b385812-18c4-48a9-8862-3998abc5dbe6','cbd7f6b99cb66371abdce238c93cbaaa3372b6dad31b90abf014f28546f4e3a6','2025-09-27 10:12:56.923','20250927101256_added_question_lang2',NULL,NULL,'2025-09-27 10:12:56.896',1),('71546b24-e34d-4b7e-885f-88822e4fe7a0','c16241a5fea46bbadcb7c6d4eb3f2b08fadfffb791fbc82910b78e835a84cbd8','2025-09-27 13:50:47.895','20250927135047_added_survey_entry',NULL,NULL,'2025-09-27 13:50:47.820',1),('9407d143-266f-46a0-abae-7efa73f0bc19','0913ea0e5ee083ee4ee870f2bc8fc10a844baac5aa62c5966d2a7c78a96cab1d','2025-09-27 14:45:16.893','20250927144516_added_survey_entry2',NULL,NULL,'2025-09-27 14:45:16.861',1),('c9069453-2d70-4071-862a-aa901f3c854d','6c2be2bccf5ad35af894043480a5ca0d9d1c3cbb2e46b4960133e0ad6dfcaa42','2025-09-27 09:05:26.154','20250927090525_added_provider_doctor',NULL,NULL,'2025-09-27 09:05:26.013',1),('ca074901-0933-4ab1-a7bc-0f5c7a149c33','288578a555886f3e8851fce77a201a83285ae155a45f72cb7675345f74b16638','2025-09-27 14:44:31.681','20250927144431_added_survey_entry',NULL,NULL,'2025-09-27 14:44:31.596',1),('d7bbfcef-2a63-43e2-b746-d49b34724c3e','adc614595f791fc04f97b6013affa3318370bf799f91e9c7437892ebf3e38b37','2025-09-27 10:19:05.041','20250927101904_change_id_datetype',NULL,NULL,'2025-09-27 10:19:04.530',1),('d82eafbf-2b87-4a21-ba89-f59324cc6c91','db0705dfa0febba418149d1b30e06a298fdee900ade334154f1e6a9f4341abf6','2025-09-27 10:20:24.566','20250927102024_change_id_datetype2',NULL,NULL,'2025-09-27 10:20:24.548',1),('fef7cf1a-629e-43ed-9a6d-5b4edab0329d','a03546dd920165f0ab9a874816a21235a1dbdc81ff656fbbaceee7651aa319bf','2025-09-27 14:50:50.875','20250927145050_added_survey_entry5',NULL,NULL,'2025-09-27 14:50:50.832',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DoctorProvider`
--

DROP TABLE IF EXISTS `DoctorProvider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DoctorProvider` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `specialty` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DoctorProvider`
--

LOCK TABLES `DoctorProvider` WRITE;
/*!40000 ALTER TABLE `DoctorProvider` DISABLE KEYS */;
INSERT INTO `DoctorProvider` VALUES (1,'Dr. Ahmad Sami Oueis','',1,'/images/doctors/Dr. Ahmad Sami Oueis.jpg'),(2,'Dr. Dinesh Tulasi','',1,'/images/doctors/Dr. Dinesh Tulasi.jpg'),(3,'Dr. Ghada Khamis Haggag','',1,'/images/doctors/Dr. Ghada Khamis Haggag.jpg'),(4,'Dr. Hana Fayez Elgabour','',1,'/images/doctors/Dr. Hana Fayez Elgabour.jpg'),(5,'Dr. Karam Fares','',1,'/images/doctors/Dr. Karam Fares.jpg'),(6,'Dr. Rawan Ahmad Oueis','',1,'/images/doctors/Dr. Rawan Ahmad Oueis.jpg'),(7,'Dr. Maxim Baini','',1,'/images/doctors/Dr.Maxim Baini.jpg');
/*!40000 ALTER TABLE `DoctorProvider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Group`
--

DROP TABLE IF EXISTS `Group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `Group_name_key` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Group`
--

LOCK TABLES `Group` WRITE;
/*!40000 ALTER TABLE `Group` DISABLE KEYS */;
/*!40000 ALTER TABLE `Group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SurveyAnswer`
--

DROP TABLE IF EXISTS `SurveyAnswer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SurveyAnswer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `questionId` int NOT NULL,
  `answer` int NOT NULL,
  `surveyEntryId` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SurveyAnswer`
--

LOCK TABLES `SurveyAnswer` WRITE;
/*!40000 ALTER TABLE `SurveyAnswer` DISABLE KEYS */;
INSERT INTO `SurveyAnswer` VALUES (1,2,3,1),(2,3,3,1),(3,4,3,1),(4,5,3,1),(5,6,3,1),(6,7,3,1),(7,8,3,1),(8,9,3,1),(9,10,3,1),(10,11,3,1),(11,12,3,1),(12,13,3,1),(13,14,3,1),(14,15,2,1),(15,16,3,1),(16,17,2,1),(17,21,2,1);
/*!40000 ALTER TABLE `SurveyAnswer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SurveyEntry`
--

DROP TABLE IF EXISTS `SurveyEntry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SurveyEntry` (
  `id` int NOT NULL AUTO_INCREMENT,
  `providerId` int NOT NULL,
  `visitType` int NOT NULL,
  `patientName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SurveyEntry`
--

LOCK TABLES `SurveyEntry` WRITE;
/*!40000 ALTER TABLE `SurveyEntry` DISABLE KEYS */;
INSERT INTO `SurveyEntry` VALUES (1,2,1,'sdsdf','2025-09-27 15:03:00.187','ano');
/*!40000 ALTER TABLE `SurveyEntry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SurveyQuestion`
--

DROP TABLE IF EXISTS `SurveyQuestion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SurveyQuestion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lang` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SurveyQuestion`
--

LOCK TABLES `SurveyQuestion` WRITE;
/*!40000 ALTER TABLE `SurveyQuestion` DISABLE KEYS */;
INSERT INTO `SurveyQuestion` VALUES (2,'Scheduling appointments','en'),(3,'Staff timeliness','en'),(4,'Receiving appropriate dental treatment','en'),(5,'Receiving treatment options','en'),(6,'Dentist (courteous and professional)','en'),(7,'Dental hygienist (courteous and professional)','en'),(8,'Dental Assistant (courteous and professional)','en'),(9,'Receptionist (courteous and professional)','en'),(10,'Quality of dental care provided','en'),(11,'Ability to ask questions','en'),(12,'Receiving a follow up appointment','en'),(13,'Confidentiality','en'),(14,'Pain control','en'),(15,'Receiving Parking Assistance','en'),(16,'Facility Cleanliness','en'),(17,'Overall experience with OBC','en'),(21,'Booking of your appointment with call center','en');
/*!40000 ALTER TABLE `SurveyQuestion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SurveyQuestionConfig`
--

DROP TABLE IF EXISTS `SurveyQuestionConfig`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SurveyQuestionConfig` (
  `questionId` int NOT NULL AUTO_INCREMENT,
  `orderNumber` int NOT NULL,
  PRIMARY KEY (`questionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SurveyQuestionConfig`
--

LOCK TABLES `SurveyQuestionConfig` WRITE;
/*!40000 ALTER TABLE `SurveyQuestionConfig` DISABLE KEYS */;
/*!40000 ALTER TABLE `SurveyQuestionConfig` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `employee_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_username_key` (`username`),
  UNIQUE KEY `User_employee_id_key` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'bevin','$2b$10$nnQLV52kjAxkhh4O4jsjj..0tHJWLhBE5wANAxjwjrtI7p45Au3KW','Bevin Nino','2025-09-22 11:36:17.678',NULL);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserGroup`
--

DROP TABLE IF EXISTS `UserGroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserGroup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `UserGroup_name_key` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserGroup`
--

LOCK TABLES `UserGroup` WRITE;
/*!40000 ALTER TABLE `UserGroup` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserGroup` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-28  0:32:59
