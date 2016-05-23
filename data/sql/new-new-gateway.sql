-- MySQL dump 10.13  Distrib 5.6.24, for osx10.8 (x86_64)
--
-- Host: 172.20.0.20    Database: mnv_gateway
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
-- Table structure for table `audit_log`
--
USE `mnv_gateway`;

DROP TABLE IF EXISTS `audit_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `audit_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `table_name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `table_entry_id` int(11) NOT NULL,
  `user` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  `previous_data` longtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audit_log`
--

LOCK TABLES `audit_log` WRITE;
/*!40000 ALTER TABLE `audit_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `audit_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `callback_url`
--

DROP TABLE IF EXISTS `callback_url`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `callback_url` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tool_consumer_id` int(11) DEFAULT NULL,
  `tool_provider_id` int(11) DEFAULT NULL,
  `url` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_callback_url_lookup` (`tool_consumer_id`,`tool_provider_id`,`url`),
  KEY `IDX_831BFF56ADCFA333` (`tool_consumer_id`),
  KEY `IDX_831BFF569061B6F4` (`tool_provider_id`),
  CONSTRAINT `FK_831BFF569061B6F4` FOREIGN KEY (`tool_provider_id`) REFERENCES `tool_provider` (`id`),
  CONSTRAINT `FK_831BFF56ADCFA333` FOREIGN KEY (`tool_consumer_id`) REFERENCES `tool_consumer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `callback_url`
--

LOCK TABLES `callback_url` WRITE;
/*!40000 ALTER TABLE `callback_url` DISABLE KEYS */;
-- INSERT INTO `callback_url` VALUES (4,7,9,'https://iclicker.blackboard.com/webapps/gradebook/lti11grade','2014-12-09 22:16:28',NULL),(5,1,9,'http://www.google.com','2015-01-29 20:46:39',NULL),(6,1,9,'https://iclicker.blackboard.com/webapps/gradebook/lti11grade','2015-01-29 20:54:01',NULL),(7,8,9,'https://macmillan.instructure.com/api/lti/v1/tools/113579/grade_passback','2015-02-09 20:57:41',NULL),(8,10,9,'https://iclicker.desire2learndemo.com/d2l/le/lti/Outcome','2015-02-25 21:28:20',NULL),(9,9,9,'http://localhost:8888/moodle28/mod/lti/service.php','2015-03-27 16:09:41',NULL),(10,1,29,'https://iclicker.blackboard.com/webapps/gradebook/lti11grade','2015-06-19 19:50:22',NULL);
/*!40000 ALTER TABLE `callback_url` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gateway_url`
--

DROP TABLE IF EXISTS `gateway_url`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gateway_url` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tool_consumer_id` int(11) NOT NULL,
  `tool_provider_service_id` int(11) NOT NULL,
  `link` varchar(2048) COLLATE utf8_unicode_ci NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_9FF552B3ADCFA333` (`tool_consumer_id`),
  KEY `IDX_9FF552B36DA37A2E` (`tool_provider_service_id`),
  CONSTRAINT `FK_9FF552B36DA37A2E` FOREIGN KEY (`tool_provider_service_id`) REFERENCES `tool_provider_service` (`id`),
  CONSTRAINT `FK_9FF552B3ADCFA333` FOREIGN KEY (`tool_consumer_id`) REFERENCES `tool_consumer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `grade_return`
--

DROP TABLE IF EXISTS `grade_return`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grade_return` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `callback_url_id` int(11) DEFAULT NULL,
  `tool_consumer_token` varchar(1024) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tool_consumer_token_hash` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gateway_token` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_grade_return_callback_info` (`callback_url_id`,`tool_consumer_token_hash`),
  UNIQUE KEY `idx_grade_return_gateway_token` (`gateway_token`),
  KEY `IDX_E531BE111731A32F` (`callback_url_id`),
  KEY `IDX_E531BE11A76ED395` (`user_id`),
  CONSTRAINT `FK_E531BE111731A32F` FOREIGN KEY (`callback_url_id`) REFERENCES `callback_url` (`id`),
  CONSTRAINT `FK_E531BE11A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grade_return`
--

LOCK TABLES `grade_return` WRITE;
/*!40000 ALTER TABLE `grade_return` DISABLE KEYS */;
/*!40000 ALTER TABLE `grade_return` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `launch_datum`
--

DROP TABLE IF EXISTS `launch_datum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `launch_datum` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tool_provider_service_id` int(11) DEFAULT NULL,
  `tool_provider_id` int(11) DEFAULT NULL,
  `tool_consumer_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  `oauth_nonce` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `oauth_timestamp` int(11) DEFAULT NULL,
  `action` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `gateway_url_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `oauth_nonce` (`oauth_nonce`),
  KEY `IDX_8568B43D6DA37A2E` (`tool_provider_service_id`),
  KEY `IDX_8568B43D9061B6F4` (`tool_provider_id`),
  KEY `IDX_8568B43DADCFA333` (`tool_consumer_id`),
  KEY `IDX_8568B43DA76ED395` (`user_id`),
  KEY `IDX_8568B43DE403BCA3` (`gateway_url_id`),
  CONSTRAINT `FK_8568B43D6DA37A2E` FOREIGN KEY (`tool_provider_service_id`) REFERENCES `tool_provider_service` (`id`),
  CONSTRAINT `FK_8568B43D9061B6F4` FOREIGN KEY (`tool_provider_id`) REFERENCES `tool_provider` (`id`),
  CONSTRAINT `FK_8568B43DA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_8568B43DADCFA333` FOREIGN KEY (`tool_consumer_id`) REFERENCES `tool_consumer` (`id`),
  CONSTRAINT `FK_8568B43DE403BCA3` FOREIGN KEY (`gateway_url_id`) REFERENCES `gateway_url` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7039 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `launch_request_history`
--

DROP TABLE IF EXISTS `launch_request_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `launch_request_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `launch_datum_id` int(11) DEFAULT NULL,
  `origin` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_request` longtext COLLATE utf8_unicode_ci,
  `did_fail` int(11) DEFAULT NULL,
  `failure_description` longtext COLLATE utf8_unicode_ci,
  `date_updated` datetime DEFAULT NULL,
  `date_created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_EC16FAD9893231A0` (`launch_datum_id`),
  CONSTRAINT `FK_EC16FAD9893231A0` FOREIGN KEY (`launch_datum_id`) REFERENCES `launch_datum` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `launch_request_history`
--

LOCK TABLES `launch_request_history` WRITE;
/*!40000 ALTER TABLE `launch_request_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `launch_request_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metric`
--

DROP TABLE IF EXISTS `metric`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `metric` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tool_consumer_id` int(11) DEFAULT NULL,
  `tool_provider_id` int(11) DEFAULT NULL,
  `metric_type_id` int(11) DEFAULT NULL,
  `metric_datetime` datetime NOT NULL,
  `metric_data_point` int(11) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_data_point_by_tc_tp` (`tool_consumer_id`,`tool_provider_id`,`metric_type_id`,`metric_datetime`),
  KEY `IDX_87D62EE3ADCFA333` (`tool_consumer_id`),
  KEY `IDX_87D62EE39061B6F4` (`tool_provider_id`),
  KEY `IDX_87D62EE3E4789E1D` (`metric_type_id`),
  CONSTRAINT `FK_87D62EE39061B6F4` FOREIGN KEY (`tool_provider_id`) REFERENCES `tool_provider` (`id`),
  CONSTRAINT `FK_87D62EE3ADCFA333` FOREIGN KEY (`tool_consumer_id`) REFERENCES `tool_consumer` (`id`),
  CONSTRAINT `FK_87D62EE3E4789E1D` FOREIGN KEY (`metric_type_id`) REFERENCES `metric_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metric`
--

LOCK TABLES `metric` WRITE;
/*!40000 ALTER TABLE `metric` DISABLE KEYS */;
/*!40000 ALTER TABLE `metric` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metric_type`
--

DROP TABLE IF EXISTS `metric_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `metric_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `metric_type_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `display_type` int(11) DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pk_metric_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metric_type`
--

LOCK TABLES `metric_type` WRITE;
/*!40000 ALTER TABLE `metric_type` DISABLE KEYS */;
INSERT INTO `metric_type` VALUES (1,'Launches',1,'2015-04-02 21:01:58',NULL),(2,'Associations',1,'2015-04-02 21:01:58',NULL),(3,'Total Associations',0,'2015-04-02 21:01:58',NULL);
/*!40000 ALTER TABLE `metric_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `launch_datum_id` int(11) DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `used` tinyint(1) NOT NULL DEFAULT '0',
  `date_used` datetime DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNQ_TOKEN` (`token`),
  KEY `IDX_5F37A13B893231A0` (`launch_datum_id`),
  CONSTRAINT `FK_5F37A13B893231A0` FOREIGN KEY (`launch_datum_id`) REFERENCES `launch_datum` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8054 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tool_consumer`
--

DROP TABLE IF EXISTS `tool_consumer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tool_consumer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `auth_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `oauth_consumer_key` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shared_secret` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lms_type` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lms_version` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contact_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contact_phone` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contact_email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `credentials_json` longtext COLLATE utf8_unicode_ci COMMENT '(DC2Type:json_array)',
  `date_updated` datetime DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `has_domain_level_auth` tinyint(1) NOT NULL DEFAULT '0',
  `notes` longtext COLLATE utf8_unicode_ci,
  `related_tool_provider_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`),
  KEY `oauth_consumer_key` (`oauth_consumer_key`),
  KEY `IDX_9F9A4300D25E46CD` (`related_tool_provider_id`),
  CONSTRAINT `FK_9F9A4300D25E46CD` FOREIGN KEY (`related_tool_provider_id`) REFERENCES `tool_provider` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tool_consumer`
--

LOCK TABLES `tool_consumer` WRITE;
/*!40000 ALTER TABLE `tool_consumer` DISABLE KEYS */;
INSERT INTO `tool_consumer` VALUES (1,'Test Account','Do not delete this. Used in a unit test','OAuth1','MNV_GATEWAY','macmillan','Blackboard','1.6','Samir Patel','512-745-7846','samir.patel@saplinglearning.com',NULL,NULL,'2014-07-10 16:40:05','0000-00-00 00:00:00',0,NULL,NULL),(2,'iClicker',NULL,'OAuth1','ICLICKR','iclicker','Blackboard','1.6','Jared',NULL,NULL,NULL,NULL,'2014-07-09 10:13:20','0000-00-00 00:00:00',0,NULL,NULL),(3,'Test Save','Testing','OAuth1','MockStaging','MockStaging','Blackboard','1.6',NULL,NULL,NULL,NULL,NULL,'2015-04-08 14:54:55','0000-00-00 00:00:00',0,NULL,NULL),(4,'QAMockConsumer','mock consumer for testing','HTTPBasic','QAMockConsumer','MockingBird','blackboard-building-block','1.6','xivTester','512-555-1212','bubba@bubbaxiv.com','https://iclicker.blackboard.com','{\"ssoKey\": \"D92E9816-F029-490C-A801-95DDC258A155\", \"buildingBlockPath\":\"/webapps/MNV-MNVPlugin-BBLEARN/\"}',NULL,'0000-00-00 00:00:00',0,NULL,NULL),(5,'CodeceptionOauth','Tool Consumer for Codeception Oauth Testing','OAuth1','CodeceptOAuth','OAuth','Blackboard','1.6','xivTester','512-555-1212','bubba@bubbaxiv.com',NULL,NULL,NULL,'0000-00-00 00:00:00',0,NULL,NULL),(6,'CodeceptionHTTPBasic','Tool Consumer for Codeception HTTPBasic Testing','HTTPBasic','CodeceptHTTPBasic','HTTPBasic','Blackboard','1.6','xivTester','512-555-1212','bubba@bubbaxiv.com','test.com',NULL,'2015-04-14 21:22:14','0000-00-00 00:00:00',0,'CodeceptionHTTPBasic',NULL),(7,'CodeceptionOauth','Tool Consumer for Codeception Oauth Testing','OAuth1','QA-API-Tests','QA-API-Tests','Blackboard','1.6','xivTester','512-555-1212','bubba@bubbaxiv.com',NULL,NULL,NULL,'0000-00-00 00:00:00',0,NULL,NULL),(8,'CanvasTest','','HTTPBasic','Canvas','Canvas','Canvas','123','','','','https://macmillan.instructure.com',NULL,'2015-04-09 19:02:00','0000-00-00 00:00:00',0,'CanvasTest',NULL),(9,'Jwellman Moodle','JWellman Moodle','OAuth1','JWMoodle','JWMoodle','moodle-2.0','2.0',NULL,NULL,NULL,'https://jwellman.gnomio.com',NULL,NULL,'0000-00-00 00:00:00',0,NULL,NULL),(10,'D2L','D2L','OAuth1','D2L','D2L','D2L',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0000-00-00 00:00:00',0,NULL,NULL),(11,'TestingLmsBlackboard','Mock Blackboard for Tests','OAuth1','TestingLmsBlackboard','TestingLmsBlackboard',NULL,NULL,NULL,NULL,NULL,'http://fakeBlackboard.com','{\"ext_lms\":\"bb-9.1.201404.160205\",\"oauth_nonce\":\"19328807200587394\",\"context_label\":\"8675309\",\"resource_link_id\":\"_1303_1\",\"lis_person_name_family\":\"Cory\",\"oauth_callback\":\"about:blank\",\"launch_presentation_return_url\":\"https:\\/\\/iclicker.blackboard.com\\/webapps\\/blackboard\\/execute\\/blti\\/launchReturn?course_id=_798_1&content_id=_1303_1&toGC=false\",\"lti_version\":\"LTI-1p0\",\"tool_consumer_info_version\":\"9.1.201404.160205\",\"oauth_signature_method\":\"HMAC-SHA1\",\"tool_consumer_instance_contact_email\":\"email@null.com\",\"lti_message_type\":\"basic-lti-launch-request\",\"user_id\":\"f94cd1b709d141f1955c610e34135d47\",\"tool_consumer_info_product_family_code\":\"Blackboard Learn\",\"tool_consumer_instance_guid\":\"375fd6b5351f43a69d06efa6952583f5\",\"launch_presentation_document_target\":\"window\",\"context_title\":\"Bulk Grade Push Test\",\"oauth_version\":\"1.0\",\"tool_consumer_instance_name\":\"Macmillan New Ventures\",\"lis_person_name_full\":\" Phil  Cory\",\"lis_outcome_service_url\":\"https:\\/\\/iclicker.blackboard.com\\/webapps\\/gradebook\\/lti11grade\",\"resource_link_title\":\"Grades\",\"context_id\":\"86e2d50d6115499aa3e4080ee2d31659\",\"roles\":\"urn:lti:role:ims\\/lis\\/Instructor\",\"lis_person_contact_email_primary\":\"phil.cory@saplinglearning.com\",\"lis_person_name_given\":\"Phil\",\"launch_presentation_locale\":\"en-US\",\"oauth_timestamp\":\"1425915066\",\"ext_launch_presentation_css_url\":\"https:\\/\\/iclicker.blackboard.com\\/common\\/shared.css,https:\\/\\/iclicker.blackboard.com\\/themes\\/as_2012\\/theme.css\"}',NULL,'0000-00-00 00:00:00',0,NULL,NULL),(12,'TestingLmsCanvas','Mock Canvas for Tests','OAuth1','TestingLmsCanvas','TestingLmsCanvas',NULL,NULL,NULL,NULL,NULL,'http://fakeCanvas.com',NULL,NULL,'0000-00-00 00:00:00',0,NULL,NULL),(13,'TestingLmsMoodle','Mock Moodle for Tests','OAuth1','TestingLmsMoodle','TestingLmsMoodle',NULL,NULL,NULL,NULL,NULL,'http://fakeMoodle.com',NULL,NULL,'0000-00-00 00:00:00',0,NULL,NULL),(14,'TestingLmsD2L','Mock D2L for Tests','OAuth1','TestingLmsD2L','TestingLmsD2L',NULL,NULL,NULL,NULL,NULL,'http://fakeD2L.com',NULL,NULL,'0000-00-00 00:00:00',0,NULL,NULL),(15,'TestingLmsSakai','Mock Sakai for Tests','OAuth1','TestingLmsSakai','TestingLmsSakai',NULL,NULL,NULL,NULL,NULL,'http://fakeSakai.com',NULL,NULL,'0000-00-00 00:00:00',0,NULL,NULL),(16,'HttpCanvas','HttpCanvas','HTTPBasic','HttpCanvas','HttpCanvas','Canvas','',NULL,NULL,NULL,NULL,NULL,NULL,'2015-04-06 15:55:04',0,NULL,NULL),(17,'HttpBlackboard','HttpBlackboard','HTTPBasic','HttpBlackboard','HttpBlackboard',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2015-04-06 15:55:47','2015-04-06 15:55:47',0,NULL,NULL),(18,'MoodleLocal','MoodleLocal','OAuth1','localMoodle','localMoodlePass','Moodle','2.8',NULL,NULL,NULL,NULL,NULL,NULL,'2015-06-09 18:45:40',0,NULL,29);
/*!40000 ALTER TABLE `tool_consumer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tool_provider`
--

DROP TABLE IF EXISTS `tool_provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tool_provider` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `auth_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `shared_secret` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contact_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contact_phone` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contact_email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `incoming_username` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `incoming_shared_secret` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  `date_created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `incoming_username` (`incoming_username`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tool_provider`
--

LOCK TABLES `tool_provider` WRITE;
/*!40000 ALTER TABLE `tool_provider` DISABLE KEYS */;
INSERT INTO `tool_provider` VALUES (2,'LateNiteLabs','Late Nite Labs','HTTPBasic','LateNiteLabs','J980J92PKMALSD',NULL,NULL,NULL,NULL,NULL,'2014-06-18 22:06:17','0000-00-00 00:00:00'),(3,'Sapling','Sapling Learning','HTTPBasic','Sapling','MPOMKJLK2A2LK',NULL,NULL,NULL,NULL,NULL,'2014-07-02 16:48:45','0000-00-00 00:00:00'),(4,'PrepU','Prep U','OAuth2','PrepU','LE92IW0LASEP9C',NULL,NULL,NULL,NULL,NULL,'2014-06-18 22:06:17','0000-00-00 00:00:00'),(5,'IClicker','I Clicker','HTTPBasic','IClicker','WP240S2D2DPLL',NULL,NULL,NULL,NULL,NULL,'2014-06-18 22:06:21','0000-00-00 00:00:00'),(6,'EBIMapWorks','EBI Map Works','HTTPBasic','EBIMapWorks','ALK209LO9LASA',NULL,NULL,NULL,NULL,NULL,'2014-06-18 22:06:21','0000-00-00 00:00:00'),(7,'JWTest','JWTest','HTTPBasic','JWTest','MPOMKJLK2A2LA',NULL,NULL,NULL,NULL,NULL,'2014-06-29 18:11:44','0000-00-00 00:00:00'),(9,'QAMockProvider','mock provider for testing','HTTPBasic','QAMockProvider','MPOMKJLK2A2L4','','','','QAMockProvider','MPOMKJLK2A2L4','2015-06-23 16:53:37','0000-00-00 00:00:00'),(16,'SaplingTest','This is a test for Bill and Cristiano for the first real integration','HTTPBasic','MockStaging','MockStaging',NULL,NULL,NULL,NULL,NULL,'2014-07-15 16:05:37','0000-00-00 00:00:00'),(17,'MockStaging',NULL,'HTTPBasic','MockStaging1','MockStaging1',NULL,NULL,NULL,NULL,NULL,'2014-07-15 16:05:35','0000-00-00 00:00:00'),(19,'JordanProvider','JordanProvider','HTTPBasic','JordanProvider','JordanProvider',NULL,NULL,NULL,NULL,NULL,'2014-07-16 14:29:29','0000-00-00 00:00:00'),(20,'D2L','D2L','OAuth 1','D2LUser','D2LUserAgain',NULL,NULL,NULL,NULL,NULL,'2014-07-16 14:29:29','0000-00-00 00:00:00'),(21,'Canvas','Canvas','OAuth 1','CanvasUser','CanvasUser',NULL,NULL,NULL,NULL,NULL,'2014-07-16 14:29:29','0000-00-00 00:00:00'),(22,'Sakai','Sakai','OAuth 1','SakaiUser','SakaiUser',NULL,NULL,NULL,NULL,NULL,'2014-07-16 14:29:29','0000-00-00 00:00:00'),(23,'Moodle','Moodle','OAuth 1','MoodleUser','MoodleUserAgain',NULL,NULL,NULL,NULL,NULL,'2014-07-16 14:29:29','0000-00-00 00:00:00'),(27,'saplingme','saplingme','HTTPBasic','3ed01b5d-d815-4a2b-90dc-83fa505c4b9d','191692e3-c27f-40f5-9d62-e370a92ed710',NULL,NULL,NULL,'ca7141fc-7cc4-4645-8e5a-42fe07978c77','0ba3620f-6a78-44c0-ac60-9fe715503b3a',NULL,'0000-00-00 00:00:00'),(29,'dynamicBooks','dynamicBooks','HTTPBasic','3ed01b5d-d815-4a2b-90dc-83fa505c4b9d','191692e3-c27f-40f5-9d62-e370a92ed710','','','','46f51e76-df0c-4bc9-8204-889a0a81152a','e2d18131-ed2f-4df7-884c-87bb285ec632','2015-06-05 19:34:21','2015-06-05 19:30:59'),(30,'haydenMcNeil','haydenMcNeil','HTTPBasic','3ed01b5d-d815-4a2b-90dc-83fa505c4b9d','191692e3-c27f-40f5-9d62-e370a92ed710',NULL,NULL,NULL,'9979462c-bb27-4829-8134-1686eac7024f','2697bc77-f535-4e79-ba65-13315307e344','2015-07-08 15:28:53','2015-07-08 15:28:53');
/*!40000 ALTER TABLE `tool_provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tool_provider_service`
--

DROP TABLE IF EXISTS `tool_provider_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tool_provider_service` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tool_provider_id` int(11) DEFAULT NULL,
  `service_type` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `endpoint_uri` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `parameters_json` longtext COLLATE utf8_unicode_ci COMMENT '(DC2Type:json_array)',
  `ext_attributes_json` longtext COLLATE utf8_unicode_ci COMMENT '(DC2Type:json_array)',
  PRIMARY KEY (`id`),
  KEY `IDX_8A613A1D9061B6F4` (`tool_provider_id`),
  CONSTRAINT `FK_8A613A1D9061B6F4` FOREIGN KEY (`tool_provider_id`) REFERENCES `tool_provider` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tool_provider_service`
--

LOCK TABLES `tool_provider_service` WRITE;
/*!40000 ALTER TABLE `tool_provider_service` DISABLE KEYS */;
INSERT INTO `tool_provider_service` VALUES (1,3,'Launch','Sign On to the Tool Provider using Basic HTTP Auth. http://tool-provider.com/mock_tp/signon','http://gateway.mnv-tech.com/mock_tp/signon','2014-07-22 08:56:19','0000-00-00 00:00:00',NULL,NULL),(2,7,'Launch',NULL,'http://tool-provider.com:8081/signon.php','2014-06-30 16:26:20','0000-00-00 00:00:00',NULL,NULL),(5,9,'Launch','QA Mock SignOn','http://tool-provider.com/mock_tp/signon','2014-07-23 11:34:31','0000-00-00 00:00:00',NULL,NULL),(6,9,'Redirect','QA Mock Redirect','http://tool-provider.com/mock_tp/validate_token_and_launch_tool','2014-07-09 15:33:44','0000-00-00 00:00:00',NULL,NULL),(7,16,'Launch','Sapling first integration signOn','http://gwslapica.saplinglearning.me/launch','2014-07-16 11:17:49','0000-00-00 00:00:00',NULL,NULL),(9,17,'Launch','Staging','http://gwslapica.saplinglearning.me/launch','2014-07-16 11:17:52','0000-00-00 00:00:00',NULL,NULL),(10,19,'Launch',NULL,'http://gwslapica.saplinglearning.me/launch','2014-07-16 14:29:53','0000-00-00 00:00:00',NULL,NULL),(11,3,'Associate','','http://mnv-gateway.com/mock_tp/user_association',NULL,'0000-00-00 00:00:00',NULL,NULL),(12,9,'Associate',NULL,'http://mnv-gateway.com/mock_tp/user_association',NULL,'0000-00-00 00:00:00',NULL,NULL),(17,27,'Associate','Sapling .me Associate','https://lms.saplinglearning.me/ibiscms/gateway/associate',NULL,'0000-00-00 00:00:00',NULL,NULL),(18,27,'Launch','Sapling .me Launch','https://njs-lms.saplinglearning.me/v1/gateway/tool',NULL,'0000-00-00 00:00:00',NULL,NULL),(22,27,'Ebook','Sapling .me Ebook Authorization','https://njs-lms.saplinglearning.me/v1/gateway/ebook',NULL,'2015-04-21 20:08:44',NULL,NULL),(23,29,'Associate','Dynamic Books Associate','http://172.20.0.21/local/stemlms/associate.php','2015-06-05 19:34:30','2015-06-05 19:31:35',NULL,NULL),(24,29,'Launch','Dynamic Books Launch','http://172.20.0.23:3080/v1/launch','2015-06-05 19:35:03','2015-06-05 19:35:03',NULL,NULL),(25,29,'Ebook','Dynamic Books Ebook Launch','http://172.20.0.23:3080/v1/launch',NULL,'2015-06-09 16:39:52',NULL,NULL),(26,29,'Account','Dynamic Books Resource Lookup','http://172.20.0.23:3080/v1/gw/resources/user',NULL,'2015-07-06 20:02:48',NULL,NULL);
/*!40000 ALTER TABLE `tool_provider_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tool_consumer_id` int(11) DEFAULT NULL,
  `tool_provider_id` int(11) DEFAULT NULL,
  `tool_consumer_user_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tool_provider_user_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  `account_hash` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `account_timestamp` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_user_lookup` (`tool_consumer_id`,`tool_provider_id`,`tool_consumer_user_id`),
  KEY `IDX_8D93D649ADCFA333` (`tool_consumer_id`),
  KEY `IDX_8D93D6499061B6F4` (`tool_provider_id`),
  CONSTRAINT `FK_8D93D6499061B6F4` FOREIGN KEY (`tool_provider_id`) REFERENCES `tool_provider` (`id`),
  CONSTRAINT `FK_8D93D649ADCFA333` FOREIGN KEY (`tool_consumer_id`) REFERENCES `tool_consumer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1586 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO `tool_provider`
(`name`, `description`, `auth_type`, `username`, `shared_secret`, `incoming_username`, `incoming_shared_secret`, `date_updated`, `date_created`)
VALUES
('barebones-dev','bare Moodle in DEV ENV','HTTPBasic','e6c9fe23-bb9c-5f85-9c8e-1463c8a28618','189b0404-f9fb-5c8a-8f81-4c3f98217274','7e0a7415-9fdd-5797-8145-e3e35a3501ac','a4b0d4ee-3d0e-5dde-b939-b0628ed38355','2015-10-31 07:07:06','2015-10-31 07:07:06'),
('haydenmcneil-dev','Hayden-McNeil LMS in DEV ENV','HTTPBasic','b2e71614-63eb-5c56-a539-7c3e40090eb3','cd50d76c-4494-5bcf-adb4-c31745b8e41a','486758c2-469c-5d40-86d1-14d8d37b8247','d2ae108d-35fe-5fb6-ab1e-5a68935a1c59','2015-10-31 07:07:06','2015-10-31 07:07:06'),
('dynamicbooks-dev','DynamicBooks LMS in DEV ENV','HTTPBasic','1c79b442-ca2e-52b6-a774-4dc480220980','83e173ed-8b23-5178-9f1d-cf6bf82ba972','8bb88ffc-d7f1-594e-9046-b63f6091f4a5','3212a5dd-9641-577e-846f-e39100bef0e6','2015-10-31 07:07:06','2015-10-31 07:07:06');

INSERT INTO `mnv_gateway`.`tool_provider_service`
(`tool_provider_id`, `service_type`, `name`, `endpoint_uri`, `date_created`)
VALUES
((SELECT `id` FROM `mnv_gateway`.`tool_provider` where `name` = 'barebones-dev'),
'Associate',
'barebones-dev associate',
'http://172.20.0.21/local/stemlms/associate.php', '2015-10-31 07:07:06');

INSERT INTO `mnv_gateway`.`tool_provider_service`
(`tool_provider_id`, `service_type`, `name`, `endpoint_uri`, `date_updated`, `date_created`)
VALUES
((SELECT `id` FROM `mnv_gateway`.`tool_provider` where `name` = 'barebones-dev'),
'Launch',
'barebones-dev launch',
'http://172.20.0.23:3080/v1/launch', '2015-10-31 07:07:06', '2015-10-31 07:07:06');

INSERT INTO `mnv_gateway`.`tool_provider_service`
(`tool_provider_id`, `service_type`, `name`, `endpoint_uri`, `date_updated`, `date_created`)
VALUES
((SELECT `id` FROM `mnv_gateway`.`tool_provider` where `name` = 'barebones-dev'),
'Ebook',
'barebones-dev ebook',
'http://172.20.0.23:3080/v1/launch', '2015-10-31 07:07:06', '2015-10-31 07:07:06');

INSERT INTO `mnv_gateway`.`tool_provider_service`
(`tool_provider_id`, `service_type`, `name`, `endpoint_uri`, `date_updated`, `date_created`)
VALUES
((SELECT `id` FROM `mnv_gateway`.`tool_provider` where `name` = 'barebones-dev'),
'Account',
'barebones-dev account',
'http://172.20.0.23:3080/v1/gw/resources/user', '2015-10-31 07:07:06', '2015-10-31 07:07:06');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-10-28 14:08:28
