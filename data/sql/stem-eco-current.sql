CREATE DATABASE  IF NOT EXISTS `eco` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `eco`;
-- MySQL dump 10.13  Distrib 5.6.19, for osx10.7 (i386)
--
-- Host: 172.20.0.22    Database: eco
-- ------------------------------------------------------
-- Server version	5.6.19-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `access_codes`
--

DROP TABLE IF EXISTS `access_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `access_codes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `access_code` varchar(255) NOT NULL,
  `date_used` datetime DEFAULT CURRENT_TIMESTAMP,
  `business_unit` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `access_code_UNIQUE` (`access_code`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access_codes`
--

LOCK TABLES `access_codes` WRITE;
/*!40000 ALTER TABLE `access_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `access_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(256) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `braintree_transactions`
--

DROP TABLE IF EXISTS `braintree_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `braintree_transactions` (
  `bt_transaction_id` varchar(255) NOT NULL,
  `business_unit` int(11) DEFAULT NULL,
  `product_type` enum('course') DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `cost` double DEFAULT NULL,
  `tax` decimal(6,5) DEFAULT NULL,
  `total` double DEFAULT NULL,
  `zipcode` varchar(45) DEFAULT NULL,
  `bt_status` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`bt_transaction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `braintree_transactions`
--

LOCK TABLES `braintree_transactions` WRITE;
/*!40000 ALTER TABLE `braintree_transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `braintree_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bu_tax_xref`
--

DROP TABLE IF EXISTS `bu_tax_xref`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bu_tax_xref` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `business_unit_id` int(11) unsigned NOT NULL,
  `zipcode_taxrate_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bu_tax_xref`
--

LOCK TABLES `bu_tax_xref` WRITE;
/*!40000 ALTER TABLE `bu_tax_xref` DISABLE KEYS */;
INSERT INTO `bu_tax_xref` VALUES (31,1,1),(32,1,2),(33,1,3),(34,1,4),(35,1,5),(36,1,6),(37,1,7),(38,1,8),(39,1,9),(40,1,10),(41,1,11),(42,1,12),(43,1,13),(44,1,14),(45,1,15),(46,1,16);
/*!40000 ALTER TABLE `bu_tax_xref` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_units`
--

DROP TABLE IF EXISTS `business_units`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `business_units` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `business_unit` varchar(255) DEFAULT NULL,
  `public_key` varchar(255) DEFAULT NULL,
  `private_key` varchar(255) DEFAULT NULL,
  `merchant_id` varchar(255) DEFAULT NULL,
  `bt_descriptor` varchar(7) DEFAULT NULL,
  `bt_phone` varchar(45) DEFAULT NULL,
  `bt_url` varchar(45) DEFAULT NULL,
  `support_url` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_units`
--

LOCK TABLES `business_units` WRITE;
/*!40000 ALTER TABLE `business_units` DISABLE KEYS */;
INSERT INTO `business_units` VALUES (1,'dynamicBooks','zffxhfy96wz9jxdp','bfc80a1ad67a14cb21b5ebab9706aab4','s3qtgt97z454fmr9',NULL,NULL,NULL,'support@dynamicbooks.com');
INSERT INTO `business_units` VALUES (2,'barebones','zffxhfy96wz9jxdp','bfc80a1ad67a14cb21b5ebab9706aab4','s3qtgt97z454fmr9',NULL,NULL,NULL,'support@BAREBONES-LMS.com');
/*!40000 ALTER TABLE `business_units` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `business_unit` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `course_cost` double NOT NULL,
  `accept_access_code` tinyint(1) DEFAULT '1',
  `accept_braintree` tinyint(1) DEFAULT '1',
  `timezone` varchar(255) DEFAULT '99',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `courses_by_institution`
--

DROP TABLE IF EXISTS `courses_by_institution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses_by_institution` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `institution_id` int(11) NOT NULL,
  `eco_course_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses_by_institution`
--

LOCK TABLES `courses_by_institution` WRITE;
/*!40000 ALTER TABLE `courses_by_institution` DISABLE KEYS */;
INSERT INTO `courses_by_institution` VALUES (4,1,2),(5,1,3),(6,2,4),(7,2,5);
/*!40000 ALTER TABLE `courses_by_institution` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `institutions`
--

DROP TABLE IF EXISTS `institutions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `institutions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `institutions`
--

LOCK TABLES `institutions` WRITE;
/*!40000 ALTER TABLE `institutions` DISABLE KEYS */;
INSERT INTO `institutions` VALUES (3,'U Borf'),(4,'UniBoop');
/*!40000 ALTER TABLE `institutions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zipcode_taxrate`
--

DROP TABLE IF EXISTS `zipcode_taxrate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zipcode_taxrate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `zip_start` varchar(255) DEFAULT NULL,
  `zip_end` varchar(255) DEFAULT NULL,
  `tax_rate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zipcode_taxrate`
--

LOCK TABLES `zipcode_taxrate` WRITE;
/*!40000 ALTER TABLE `zipcode_taxrate` DISABLE KEYS */;
INSERT INTO `zipcode_taxrate` VALUES (1,'05000','05099','0.25'),(2,'4000','4999','0.26'),(3,'20000','20999','0'),(4,'21000','21999','3.254'),(5,'22000','22999','117.76'),(6,'23000','23999','-40.00'),(7,'24000','24999','0.0725'),(8,'30000',NULL,'0'),(9,'30001',NULL,'3.354'),(10,'30002',NULL,'119.76'),(11,'30003',NULL,'-45.00'),(12,'30004',NULL,'0.0625'),(13,'5000','5049','frog'),(14,'5050',NULL,'duck'),(15,'5051',NULL,NULL);
/*!40000 ALTER TABLE `zipcode_taxrate` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-08-18 14:29:06
