-- MySQL dump 10.13  Distrib 5.6.19, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: mnv_gateway
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

DROP TABLE IF EXISTS `audit_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `audit_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `table_name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `table_entry_id` int(11) NOT NULL,
  `user` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `previous_data` longtext COLLATE utf8_unicode_ci NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `callback_url`
--

LOCK TABLES `callback_url` WRITE;
/*!40000 ALTER TABLE `callback_url` DISABLE KEYS */;
INSERT INTO `callback_url` VALUES (1,6,9,'http://www.google.com','2015-07-07 20:29:26',NULL),(2,6,9,'http://www.nhl.com','2015-07-07 20:29:26',NULL),(3,7,9,'https://bfw.desire2learn.com/d2l/le/lti/Outcome','2015-07-07 20:29:26',NULL),(4,7,9,'https://iclicker.blackboard.com/webapps/gradebook/lti11grade','2015-07-07 20:29:26',NULL),(5,9,9,'https://macmillan.instructure.com/api/lti/v1/tools/106278/grade_passback','2015-07-07 20:29:26',NULL),(6,8,9,'https://iclicker.blackboard.com/webapps/gradebook/lti11grade','2015-07-07 20:29:26',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gateway_url`
--

LOCK TABLES `gateway_url` WRITE;
/*!40000 ALTER TABLE `gateway_url` DISABLE KEYS */;
INSERT INTO `gateway_url` VALUES (1,1,24,'http://mnv-gateway.com/v1/launch/LTI11/dynamicBooks/Launch?id=2&type=course','2015-07-07 21:08:13',NULL);
/*!40000 ALTER TABLE `gateway_url` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grade_return`
--

DROP TABLE IF EXISTS `grade_return`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grade_return` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `callback_url_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `tool_consumer_token` varchar(1024) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tool_consumer_token_hash` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gateway_token` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_grade_return_callback_info` (`callback_url_id`,`tool_consumer_token_hash`),
  UNIQUE KEY `idx_grade_return_gateway_token` (`gateway_token`),
  KEY `IDX_E531BE111731A32F` (`callback_url_id`),
  KEY `IDX_E531BE11A76ED395` (`user_id`),
  CONSTRAINT `FK_E531BE11A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_E531BE111731A32F` FOREIGN KEY (`callback_url_id`) REFERENCES `callback_url` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grade_return`
--

LOCK TABLES `grade_return` WRITE;
/*!40000 ALTER TABLE `grade_return` DISABLE KEYS */;
INSERT INTO `grade_return` VALUES (1,1,NULL,'DummyTCToken_ABC123','bdf50b74f5057d032fd941079870ce05','494C7299-4415-1563-B4A7-D330448A7E05','2015-07-07 20:29:26',NULL),(2,2,NULL,'DummyTCToken_XYZ890','15090d96586dd488abe3e58ea4ea9c07','6B62D3D7-4E1C-ADBB-0210-6B30062057E2','2015-07-07 20:29:26',NULL),(3,3,NULL,'dd3e99c8-3a1c-4d9d-a4b0-98007a36a45f','ca96b4ce854460133f7d712b2a9a642f','CF5DF0DA-42B2-AA7F-AADC-10790F4270FB','2015-07-07 20:29:26',NULL),(4,4,NULL,'bbgc8747gi3173','f565cbaf35a6949ec6c547da407733e3','62369CA0-1A21-F5EC-F494-95F2BFC47811','2015-07-07 20:29:26',NULL),(5,6,NULL,'bbgc8682gi3173','9aa001348949da63f62c3e038f4a0109','9482D231-040B-AA0E-D8F1-5B5CDA2E6952','2015-07-07 20:29:26',NULL);
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
  `gateway_url_id` int(11) DEFAULT NULL,
  `oauth_nonce` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `oauth_timestamp` int(11) DEFAULT NULL,
  `action` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `oauth_nonce` (`oauth_nonce`),
  KEY `IDX_8568B43D6DA37A2E` (`tool_provider_service_id`),
  KEY `IDX_8568B43D9061B6F4` (`tool_provider_id`),
  KEY `IDX_8568B43DADCFA333` (`tool_consumer_id`),
  KEY `IDX_8568B43DA76ED395` (`user_id`),
  KEY `IDX_8568B43DE403BCA3` (`gateway_url_id`),
  CONSTRAINT `FK_8568B43DE403BCA3` FOREIGN KEY (`gateway_url_id`) REFERENCES `gateway_url` (`id`),
  CONSTRAINT `FK_8568B43D6DA37A2E` FOREIGN KEY (`tool_provider_service_id`) REFERENCES `tool_provider_service` (`id`),
  CONSTRAINT `FK_8568B43D9061B6F4` FOREIGN KEY (`tool_provider_id`) REFERENCES `tool_provider` (`id`),
  CONSTRAINT `FK_8568B43DA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_8568B43DADCFA333` FOREIGN KEY (`tool_consumer_id`) REFERENCES `tool_consumer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `launch_datum`
--

LOCK TABLES `launch_datum` WRITE;
/*!40000 ALTER TABLE `launch_datum` DISABLE KEYS */;
INSERT INTO `launch_datum` VALUES (1,24,29,1,51,1,NULL,NULL,NULL,'2015-07-07 21:08:13','2015-07-07 21:08:13');
/*!40000 ALTER TABLE `launch_datum` ENABLE KEYS */;
UNLOCK TABLES;

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
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_EC16FAD9893231A0` (`launch_datum_id`),
  CONSTRAINT `FK_EC16FAD9893231A0` FOREIGN KEY (`launch_datum_id`) REFERENCES `launch_datum` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `launch_request_history`
--

LOCK TABLES `launch_request_history` WRITE;
/*!40000 ALTER TABLE `launch_request_history` DISABLE KEYS */;
INSERT INTO `launch_request_history` VALUES (1,1,NULL,'{\"post\":{\"ext_lms\":\"bb-9.1.201404.160205\",\"oauth_nonce\":\"29716750934773336\",\"context_label\":\"qa-stem-eco\",\"oauth_consumer_key\":\"MNV_GATEWAY\",\"resource_link_id\":\"_1768_1\",\"lis_person_name_family\":\"QA\",\"oauth_callback\":\"about:blank\",\"oauth_signature\":\"pEZqI5httnjnqKsPMWjq1aPdLyc=\",\"launch_presentation_return_url\":\"https:\\/\\/iclicker.blackboard.com\\/webapps\\/blackboard\\/execute\\/blti\\/launchReturn?course_id=_851_1&content_id=_1768_1&toGC=false\",\"lti_version\":\"LTI-1p0\",\"tool_consumer_info_version\":\"9.1.201404.160205\",\"oauth_signature_method\":\"HMAC-SHA1\",\"tool_consumer_instance_contact_email\":\"email@null.com\",\"lti_message_type\":\"basic-lti-launch-request\",\"user_id\":\"3dfc051c11a44c5ebf74f6bd5783d98f\",\"tool_consumer_info_product_family_code\":\"Blackboard Learn\",\"tool_consumer_instance_guid\":\"375fd6b5351f43a69d06efa6952583f5\",\"launch_presentation_document_target\":\"window\",\"context_title\":\"qa stemeco\",\"oauth_version\":\"1.0\",\"tool_consumer_instance_name\":\"Macmillan New Ventures\",\"lis_person_name_full\":\" StemEco  QA\",\"resource_link_title\":\"dynamicBooks\\/course\\/2\",\"context_id\":\"3fd1ce173e81472a94f63119eadea05d\",\"roles\":\"urn:lti:role:ims\\/lis\\/Learner\",\"lis_person_name_given\":\"StemEco\",\"launch_presentation_locale\":\"en-US\",\"oauth_timestamp\":\"1436303009\",\"ext_launch_presentation_css_url\":\"https:\\/\\/iclicker.blackboard.com\\/common\\/shared.css,https:\\/\\/iclicker.blackboard.com\\/themes\\/as_2012\\/theme.css\"},\"launch_ext_params\":\"type=course&id=2\",\"launch_ext_params_list\":{\"type\":\"course\",\"id\":\"2\"},\"origin\":null,\"uri\":\"http:\\/\\/mnv-gateway.com\\/v1\\/launch\\/LTI11\\/dynamicBooks\\/Launch?id=2&type=course\",\"launch_version\":\"v1\",\"launch_type\":\"launch\",\"launch_adapter\":\"LTI11\",\"launch_provider\":\"dynamicBooks\",\"launch_service\":\"Launch\",\"user_association\":\"{\\\"toolConsumerUserId\\\":\\\"3dfc051c11a44c5ebf74f6bd5783d98f\\\",\\\"toolProviderUserId\\\":null,\\\"toolProviderId\\\":29,\\\"toolConsumerId\\\":1}\"}',0,'','2015-07-07 21:08:13',NULL);
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
  CONSTRAINT `FK_87D62EE3E4789E1D` FOREIGN KEY (`metric_type_id`) REFERENCES `metric_type` (`id`),
  CONSTRAINT `FK_87D62EE39061B6F4` FOREIGN KEY (`tool_provider_id`) REFERENCES `tool_provider` (`id`),
  CONSTRAINT `FK_87D62EE3ADCFA333` FOREIGN KEY (`tool_consumer_id`) REFERENCES `tool_consumer` (`id`)
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
INSERT INTO `metric_type` VALUES (1,'Launches',1,'2015-07-07 20:29:26',NULL),(2,'Associations',1,'2015-07-07 20:29:26',NULL),(3,'Total Associations',0,'2015-07-07 20:29:26',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (1,1,'5F7305B7-4CAB-E923-7C5E-E61E8CC90103','Association',0,NULL,'2015-07-07 21:08:13',NULL);
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tool_consumer`
--

DROP TABLE IF EXISTS `tool_consumer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tool_consumer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `related_tool_provider_id` int(11) DEFAULT NULL,
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
  `has_domain_level_auth` tinyint(1) NOT NULL DEFAULT '0',
  `notes` longtext COLLATE utf8_unicode_ci,
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`),
  KEY `IDX_9F9A4300D25E46CD` (`related_tool_provider_id`),
  KEY `oauth_consumer_key` (`oauth_consumer_key`),
  CONSTRAINT `FK_9F9A4300D25E46CD` FOREIGN KEY (`related_tool_provider_id`) REFERENCES `tool_provider` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tool_consumer`
--

LOCK TABLES `tool_consumer` WRITE;
/*!40000 ALTER TABLE `tool_consumer` DISABLE KEYS */;
INSERT INTO `tool_consumer` VALUES (1,NULL,'Test Account','Do not delete this. Used in a unit test','OAuth1','MNV_GATEWAY','macmillan','Blackboard','1.6','Samir Patel','512-745-7846','samir.patel@saplinglearning.com',NULL,NULL,0,NULL,'2015-07-07 20:29:26',NULL),(2,NULL,'iClicker',NULL,'OAuth1','ICLICKR','iclicker','Blackboard','1.6','Jared',NULL,NULL,NULL,NULL,0,NULL,'2015-07-07 20:29:26',NULL),(3,NULL,'Cristiano','Testing','OAuth1','MockStaging','MockStaging','Blackboard','1.6',NULL,NULL,NULL,NULL,NULL,0,NULL,'2015-07-07 20:29:26',NULL),(4,NULL,'QAMockConsumer','mock consumer for testing','HTTPBasic','QAMockConsumer','MockingBird','blackboard-building-block','1.6','xivTester','512-555-1212','bubba@bubbaxiv.com','https://iclicker.blackboard.com','\n{\n    \"ssoKey\": \"D92E9816-F029-490C-A801-95DDC258A155\",\n    \"buildingBlockPath\":\"/webapps/MNV-MNVPlugin-BBLEARN/\"\n}',0,NULL,'2015-07-07 20:29:26',NULL),(5,NULL,'CodeceptionOauth','Tool Consumer for Codeception Oauth Testing','OAuth1','CodeceptOAuth','OAuth','Blackboard','1.6','xivTester','512-555-1212','bubba@bubbaxiv.com',NULL,NULL,0,NULL,'2015-07-07 20:29:26',NULL),(6,NULL,'CodeceptionHTTPBasic','Tool Consumer for Codeception HTTPBasic Testing','HTTPBasic','CodeceptHTTPBasic','HTTPBasic','Blackboard','1.6','xivTester','512-555-1212','bubba@bubbaxiv.com',NULL,NULL,0,NULL,'2015-07-07 20:29:26',NULL),(7,NULL,'CodeceptionOauth','Tool Consumer for Codeception Oauth Testing','OAuth1','QA-API-Tests','QA-API-Tests','Blackboard','1.6','xivTester','512-555-1212','bubba@bubbaxiv.com',NULL,NULL,0,NULL,'2015-07-07 20:29:26',NULL),(8,NULL,'TestingLmsBlackboard','Mock Blackboard for Tests','OAuth1','TestingLmsBlackboard','TestingLmsBlackboard',NULL,NULL,NULL,NULL,NULL,NULL,'\n{\n    \"context_id\": \"86e2d50d6115499aa3e4080ee2d31659\",\n    \"context_label\": \"8675309\",\n    \"context_title\": \"Bulk Grade Push Test\",\n    \"ext_launch_presentation_css_url\": \"https://iclicker.blackboard.com/common/shared.css,https://iclicker.blackboard.com/themes/as_2012/theme.css\",\n    \"ext_lms\": \"bb-9.1.201404.160205\",\n    \"launch_presentation_document_target\": \"window\",\n    \"launch_presentation_locale\": \"en-US\",\n    \"launch_presentation_return_url\": \"https://iclicker.blackboard.com/webapps/blackboard/execute/blti/launchReturn?course_id=_798_1&content_id=_1303_1&toGC=false\",\n    \"lis_outcome_service_url\": \"https://iclicker.blackboard.com/webapps/gradebook/lti11grade\",\n    \"lis_person_contact_email_primary\": \"phil.cory@saplinglearning.com\",\n    \"lis_person_name_family\": \"Cory\",\n    \"lis_person_name_full\": \" Phil Cory\",\n    \"lis_person_name_given\": \"Phil\",\n    \"lti_message_type\": \"basic-lti-launch-request\",\n    \"lti_version\": \"LTI-1p0\",\n    \"oauth_callback\": \"about:blank\",\n    \"oauth_consumer_key\": \"QA-API-Tests\",\n    \"oauth_nonce\": \"19328807200587394\",\n    \"oauth_signature_method\": \"HMAC-SHA1\",\n    \"oauth_timestamp\": \"1425915066\",\n    \"oauth_version\": \"1.0\",\n    \"resource_link_id\": \"_1303_1\",\n    \"resource_link_title\": \"Grades\",\n    \"roles\": \"urn:lti:role:ims/lis/Instructor\",\n    \"tool_consumer_info_product_family_code\": \"Blackboard Learn\",\n    \"tool_consumer_info_version\": \"9.1.201404.160205\",\n    \"tool_consumer_instance_contact_email\": \"email@null.com\",\n    \"tool_consumer_instance_guid\": \"375fd6b5351f43a69d06efa6952583f5\",\n    \"tool_consumer_instance_name\": \"Macmillan New Ventures\",\n    \"user_id\": \"f94cd1b709d141f1955c610e34135d47\"\n}',0,NULL,'2015-07-07 20:29:26',NULL),(9,NULL,'TestingLmsCanvas','Mock Canvas for Tests','OAuth1','TestingLmsCanvas','TestingLmsCanvas',NULL,NULL,NULL,NULL,NULL,NULL,'\n{\n    \"authType\": \"basic\",\n    \"context_id\": \"778813567c8705e779c0c53c095f02ca1ff33594\",\n    \"context_label\": \"GTWY-TEST\",\n    \"context_title\": \"GTWY-TEST\",\n    \"courseId\": \"123\",\n    \"custom_canvas_api_domain\": \"macmillan.instructure.com\",\n    \"custom_canvas_assignment_id\": \"6411554\",\n    \"custom_canvas_assignment_points_possible\": \"100\",\n    \"custom_canvas_assignment_title\": \"Gateway QA Grade Test\",\n    \"custom_canvas_course_id\": \"1400844\",\n    \"custom_canvas_enrollment_state\": \"active\",\n    \"custom_canvas_user_id\": \"6137021\",\n    \"custom_canvas_user_login_id\": \"phil.cory@saplinglearning.com\",\n    \"ext_ims_lis_basic_outcome_url\": \"https://macmillan.instructure.com/api/lti/v1/tools/106278/ext_grade_passback\",\n    \"ext_outcome_data_values_accepted\": \"url,text\",\n    \"ext_outcome_result_total_score_accepted\": \"true\",\n    \"ext_roles\": \"urn:lti:instrole:ims/lis/Student,urn:lti:role:ims/lis/Learner,urn:lti:sysrole:ims/lis/User\",\n    \"gw-d\": \"1\",\n    \"launch_presentation_document_target\": \"iframe\",\n    \"launch_presentation_locale\": \"en\",\n    \"launch_presentation_return_url\": \"https://macmillan.instructure.com/courses/1400844/assignments\",\n    \"lis_course_offering_sourcedid\": \"1q2w3e4r\",\n    \"lis_outcome_service_url\": \"https://macmillan.instructure.com/api/lti/v1/tools/106278/grade_passback\",\n    \"lis_person_contact_email_primary\": \"phil.cory@saplinglearning.com\",\n    \"lis_person_name_family\": \"\",\n    \"lis_person_name_full\": \"phil.cory@saplinglearning.com\",\n    \"lis_person_name_given\": \"phil.cory@saplinglearning.com\",\n    \"lis_result_sourcedid\": \"106278-1400844-6411554-6137021-91fc7c87d95594cdc4f29d59998dcff050722f04\",\n    \"lti_message_type\": \"basic-lti-launch-request\",\n    \"lti_version\": \"LTI-1p0\",\n    \"oauth_callback\": \"about:blank\",\n    \"oauth_consumer_key\": \"canvas\",\n    \"oauth_nonce\": \"qLmOTykPHN3fIKVmrMLOPsEtz5j4suczNlcHIUpTTE\",\n    \"oauth_signature_method\": \"HMAC-SHA1\",\n    \"oauth_timestamp\": \"1425915380\",\n    \"oauth_version\": \"1.0\",\n    \"resource_link_id\": \"09c2ca4b1e48907cc354213bfebeeaefdc3a51d9\",\n    \"resource_link_title\": \"Gateway QA Grade Test\",\n    \"roles\": \"Learner\",\n    \"tool_consumer_info_product_family_code\": \"canvas\",\n    \"tool_consumer_info_version\": \"cloud\",\n    \"tool_consumer_instance_contact_email\": \"notifications@instructure.com\",\n    \"tool_consumer_instance_guid\": \"1b9a26a3619013e3f115d58a611c378043a55aa1.macmillan.instructure.com\",\n    \"tool_consumer_instance_name\": \"Macmillan\",\n    \"user_id\": \"3b51f5d83628e14d88fdf9bff8874ce7d48f3c31\",\n    \"user_image\": \"https://secure.gravatar.com/avatar/21a0a98ea136be928c3a55be435a295b?s=50&d=https%3A%2F%2Fcanvas.instructure.com%2Fimages%2Fmessages%2Favatar-50.png\"\n}',0,NULL,'2015-07-07 20:29:26',NULL),(10,NULL,'TestingLmsMoodle','Mock Moodle for Tests','OAuth1','TestingLmsMoodle','TestingLmsMoodle',NULL,NULL,NULL,NULL,NULL,NULL,'\n{\n    \"context_id\": \"9\",\n    \"context_label\": \"MNVGateway\",\n    \"context_title\": \"MNVGateway\",\n    \"ext_lms\": \"moodle-2\",\n    \"ext_submit\": \"Press to launch this activity\",\n    \"launch_presentation_locale\": \"en\",\n    \"launch_presentation_return_url\": \"http://ec2-54-227-2-70.compute-1.amazonaws.com/moodle26/mod/lti/return.php?course=9&launch_container=3&instanceid=3\",\n    \"lis_outcome_service_url\": \"http://ec2-54-227-2-70.compute-1.amazonaws.com/moodle26/mod/lti/service.php\",\n    \"lis_person_contact_email_primary\": \"az@vt.edu\",\n    \"lis_person_name_family\": \"User\",\n    \"lis_person_name_full\": \"Admin User\",\n    \"lis_person_name_given\": \"Admin\",\n    \"lis_result_sourcedid\": \"{\"data\":{\"instanceid\":\"3\",\"userid\":\"2\",\"launchid\":381261633},\"hash\":\"c44343a461a78ffb8eb50576eb3d755fea4f4cc098cd6af2ae89da332ef87f28\"}\",\n    \"lti_message_type\": \"basic-lti-launch-request\",\n    \"lti_version\": \"LTI-1p0\",\n    \"oauth_callback\": \"about:blank\",\n    \"oauth_consumer_key\": \"moodle\",\n    \"oauth_nonce\": \"c45fb68a4fb9c44e17dd23b51609f271\",\n    \"oauth_signature_method\": \"HMAC-SHA1\",\n    \"oauth_timestamp\": \"1425915665\",\n    \"oauth_version\": \"1.0\",\n    \"resource_link_description\": \"\",\n    \"resource_link_id\": \"3\",\n    \"resource_link_title\": \"Gateway QA Grade Enabled\",\n    \"roles\": \"Instructor,urn:lti:sysrole:ims/lis/Administrator\",\n    \"tool_consumer_info_product_family_code\": \"moodle\",\n    \"tool_consumer_info_version\": \"2013111801.01\",\n    \"tool_consumer_instance_guid\": \"ec2-54-227-2-70.compute-1.amazonaws.com\",\n    \"user_id\": \"2\"\n}',0,NULL,'2015-07-07 20:29:26',NULL),(11,NULL,'TestingLmsD2L','Mock D2L for Tests','OAuth1','TestingLmsD2L','TestingLmsD2L',NULL,NULL,NULL,NULL,NULL,NULL,'\n{\n    \"basiclti_submit\": \"Launch Endpoint with BasicLTI Data\",\n    \"context_id\": \"9025\",\n    \"context_label\": \"GatewayTest01\",\n    \"context_title\": \"GatewayTest\",\n    \"context_type\": \"\",\n    \"ext_d2l_link_id\": \"632\",\n    \"ext_d2l_role\": \"Administrator\",\n    \"ext_d2l_token_digest\": \"zdoUKMGeLGZNw85d0WKGUB2vebw=\",\n    \"ext_d2l_token_id\": \"3222025\",\n    \"ext_tc_profile_url\": \"https://bfw.desire2learn.com/d2l/api/ext/1.0/lti/tcservices\",\n    \"launch_presentation_locale\": \"EN-US__\",\n    \"lis_outcome_service_url\": \"https://bfw.desire2learn.com/d2l/le/lti/Outcome\",\n    \"lis_result_sourcedid\": \"3bf33287-84e1-4f1d-96b9-7cb2aaffdc28\",\n    \"lti_message_type\": \"basic-lti-launch-request\",\n    \"lti_version\": \"LTI-1p0\",\n    \"oauth_callback\": \"about:blank\",\n    \"oauth_consumer_key\": \"MNV_GATEWAY\",\n    \"oauth_nonce\": \"955949917\",\n    \"oauth_signature_method\": \"HMAC-SHA1\",\n    \"oauth_timestamp\": \"1425915599\",\n    \"oauth_version\": \"1.0\",\n    \"resource_link_description\": \"\",\n    \"resource_link_id\": \"PNDevServer_1340302943\",\n    \"resource_link_title\": \"GatewayTest\",\n    \"roles\": \"Student,Instructor,Administrator\",\n    \"tool_consumer_info_product_family_code\": \"desire2learn\",\n    \"tool_consumer_info_version\": \"10.1.0 SP14\",\n    \"tool_consumer_instance_contact_email\": \"dcole@bedfordstmartins.com\",\n    \"tool_consumer_instance_description\": \"Macmillan LMSlink\",\n    \"tool_consumer_instance_guid\": \"key\",\n    \"tool_consumer_instance_name\": \"Macmillan LMSlink\",\n    \"user_id\": \"5a5f418b-802f-4403-97a3-c3fc46a7d212_4420\"\n}',0,NULL,'2015-07-07 20:29:26',NULL),(12,NULL,'TestingLmsSakai','Mock Sakai for Tests','OAuth1','TestingLmsSakai','TestingLmsSakai',NULL,NULL,NULL,NULL,NULL,NULL,'\n{\n    \"context_id\": \"mercury\",\n    \"context_label\": \"mercury site\",\n    \"context_title\": \"mercury site\",\n    \"ext_basiclti_submit\": \"Press to continue to external tool.\",\n    \"ext_ims_lis_basic_outcome_url\": \"http://54.224.171.101/imsblis/service/\",\n    \"ext_ims_lis_memberships_id\": \"f6d4d47e24848911620fb4d324bd0880917acdba3c3d546ff9713fecd24b2b98:::admin:::content:3\",\n    \"ext_ims_lis_memberships_url\": \"http://54.224.171.101/imsblis/service/\",\n    \"ext_lms\": \"sakai-10-SNAPSHOT\",\n    \"ext_sakai_launch_presentation_css_url_list\": \"http://54.224.171.101/library/skin/tool_base.css,http://54.224.171.101/library/skin/neo-default/tool.css\",\n    \"ext_sakai_role\": \"maintain\",\n    \"ext_sakai_server\": \"http://54.224.171.101\",\n    \"ext_sakai_serverid\": \"iclickerSakai10\",\n    \"launch_presentation_css_url\": \"http://54.224.171.101/library/skin/tool_base.css\",\n    \"launch_presentation_locale\": \"en_US\",\n    \"launch_presentation_return_url\": \"http://54.224.171.101/imsblis/service/return-url/site/mercury\",\n    \"lis_outcome_service_url\": \"http://54.224.171.101/imsblis/service/\",\n    \"lis_person_name_family\": \"Administrator\",\n    \"lis_person_name_full\": \"Sakai Administrator\",\n    \"lis_person_name_given\": \"Sakai\",\n    \"lis_person_sourcedid\": \"admin\",\n    \"lis_result_sourcedid\": \"f6d4d47e24848911620fb4d324bd0880917acdba3c3d546ff9713fecd24b2b98:::admin:::content:3\",\n    \"lti_message_type\": \"basic-lti-launch-request\",\n    \"lti_version\": \"LTI-1p0\",\n    \"oauth_callback\": \"about:blank\",\n    \"oauth_consumer_key\": \"MNV_GATEWAY\",\n    \"oauth_nonce\": \"14669447008175825\",\n    \"oauth_signature_method\": \"HMAC-SHA1\",\n    \"oauth_timestamp\": \"1425915449\",\n    \"oauth_version\": \"1.0\",\n    \"resource_link_id\": \"content:3\",\n    \"resource_link_title\": \"Gateway Grade Return\",\n    \"roles\": \"Instructor,Administrator,urn:lti:instrole:ims/lis/Administrator,urn:lti:sysrole:ims/lis/Administrator\",\n    \"tool_consumer_info_product_family_code\": \"sakai\",\n    \"tool_consumer_info_version\": \"10-SNAPSHOT\",\n    \"user_id\": \"admin\"\n}',0,NULL,'2015-07-07 20:29:26',NULL),(13,25,'TestingLmsSTEMLMS','Mock MNV LMS product','OAuth1','STEMLMS','BaldEagle',NULL,NULL,NULL,NULL,NULL,NULL,'\n{\n    \"context_id\": \"86e2d50d6115499aa3e4080ee2d31659\",\n    \"context_label\": \"8675309\",\n    \"context_title\": \"Bulk Grade Push Test\",\n    \"ext_launch_presentation_css_url\": \"https://iclicker.blackboard.com/common/shared.css,https://iclicker.blackboard.com/themes/as_2012/theme.css\",\n    \"ext_lms\": \"bb-9.1.201404.160205\",\n    \"launch_presentation_document_target\": \"window\",\n    \"launch_presentation_locale\": \"en-US\",\n    \"launch_presentation_return_url\": \"https://iclicker.blackboard.com/webapps/blackboard/execute/blti/launchReturn?course_id=_798_1&content_id=_1303_1&toGC=false\",\n    \"lis_outcome_service_url\": \"https://iclicker.blackboard.com/webapps/gradebook/lti11grade\",\n    \"lis_person_contact_email_primary\": \"phil.cory@saplinglearning.com\",\n    \"lis_person_name_family\": \"Cory\",\n    \"lis_person_name_full\": \" Phil Cory\",\n    \"lis_person_name_given\": \"Phil\",\n    \"lti_message_type\": \"basic-lti-launch-request\",\n    \"lti_version\": \"LTI-1p0\",\n    \"oauth_callback\": \"about:blank\",\n    \"oauth_consumer_key\": \"QA-API-Tests\",\n    \"oauth_nonce\": \"19328807200587394\",\n    \"oauth_signature_method\": \"HMAC-SHA1\",\n    \"oauth_timestamp\": \"1425915066\",\n    \"oauth_version\": \"1.0\",\n    \"resource_link_id\": \"_1303_1\",\n    \"resource_link_title\": \"Grades\",\n    \"roles\": \"urn:lti:role:ims/lis/Instructor\",\n    \"tool_consumer_info_product_family_code\": \"Blackboard Learn\",\n    \"tool_consumer_info_version\": \"9.1.201404.160205\",\n    \"tool_consumer_instance_contact_email\": \"email@null.com\",\n    \"tool_consumer_instance_guid\": \"375fd6b5351f43a69d06efa6952583f5\",\n    \"tool_consumer_instance_name\": \"Macmillan New Ventures\",\n    \"user_id\": \"f94cd1b709d141f1955c610e34135d47\"\n }',0,NULL,'2015-07-07 20:29:26',NULL);
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
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `incoming_username` (`incoming_username`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tool_provider`
--

LOCK TABLES `tool_provider` WRITE;
/*!40000 ALTER TABLE `tool_provider` DISABLE KEYS */;
INSERT INTO `tool_provider` VALUES (2,'LateNiteLabs','Late Nite Labs','HTTPBasic','LateNiteLabs','J980J92PKMALSD',NULL,NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(3,'Sapling','Sapling Learning','HTTPBasic','Sapling','MPOMKJLK2A2LK',NULL,NULL,NULL,'1022d0b6-28bd-40a0-87df-dbba96861a25','66f0fc6d-2305-4f60-bcf3-d33245eac706','2015-07-07 20:29:26',NULL),(4,'PrepU','Prep U','OAuth2','PrepU','LE92IW0LASEP9C',NULL,NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(5,'IClicker','I Clicker','HTTPBasic','IClicker','WP240S2D2DPLL',NULL,NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(6,'EBIMapWorks','EBI Map Works','HTTPBasic','EBIMapWorks','ALK209LO9LASA',NULL,NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(7,'JWTest','JWTest','HTTPBasic','JWTest','MPOMKJLK2A2LA',NULL,NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(9,'QAMockProvider','mock provider for testing','HTTPBasic','QAMockProvider','MPOMKJLK2A2L4',NULL,NULL,NULL,'QAMockProvider','MPOMKJLK2A2L4','2015-07-07 20:29:26',NULL),(16,'SaplingTest','This is a test for Bill and Cristiano for the first real integration','HTTPBasic','MockStaging','MockStaging',NULL,NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(17,'MockStaging',NULL,'HTTPBasic','MockStaging1','MockStaging1',NULL,NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(19,'JordanProvider','JordanProvider','HTTPBasic','JordanProvider','JordanProvider',NULL,NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(20,'D2L','D2L','OAuth 1','D2LUser','D2LUserAgain',NULL,NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(21,'Canvas','Canvas','OAuth 1','CanvasUser','CanvasUser',NULL,NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(22,'Sakai','Sakai','OAuth 1','SakaiUser','SakaiUser',NULL,NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(23,'Moodle','Moodle','OAuth 1','MoodleUser','MoodleUserAgain',NULL,NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(24,'TestMoo','Moooooooooo','HTTPBasic','hey','yoyoyowow','Test Dude',NULL,NULL,NULL,NULL,'2015-07-07 20:29:26',NULL),(25,'Kitaboo','Kitaboo tool provider','HTTPBasic','447617c9-8b0a-4e0b-b427-7effb5164781','5364d5b1-b5ee-4922-87af-847b4d44707e',NULL,NULL,NULL,'447617c9-8b0a-4e0b-b427-7effb5164781','5364d5b1-b5ee-4922-87af-847b4d44707e','2015-07-07 20:29:26',NULL),(27,'Hayden-McNeil','Hayden-McNeil','HTTPBasic','bf3438aa-c6fe-428a-8509-ba4dacfad052','7dd5a066-9df2-4e8f-b9ed-3a4cecb62168',NULL,NULL,NULL,'bf3438aa-c6fe-428a-8509-ba4dacfad052','7dd5a066-9df2-4e8f-b9ed-3a4cecb62168','2015-07-07 20:29:26',NULL),(29,'dynamicBooks','dynamicBooks','HTTPBasic','3ed01b5d-d815-4a2b-90dc-83fa505c4b9d','191692e3-c27f-40f5-9d62-e370a92ed710','','','','gwDynamicBooks','gwPassword','2015-06-05 19:30:59','2015-06-05 19:34:21');
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
  `parameters_json` longtext COLLATE utf8_unicode_ci COMMENT '(DC2Type:json_array)',
  `date_created` datetime NOT NULL,
  `date_updated` datetime DEFAULT NULL,
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
INSERT INTO `tool_provider_service` VALUES (1,3,'Launch','Sign On to the Tool Provider using Basic HTTP Auth. http://tool-provider.com/mock_tp/signon','http://gateway.mnv-tech.com/mock_tp/signon',NULL,'2015-07-07 20:29:26',NULL),(2,7,'Launch',NULL,'http://tool-provider.com:8081/signon.php',NULL,'2015-07-07 20:29:26',NULL),(5,9,'Launch','QA Mock SignOn','http://tool-provider.com/mock_tp/signon','[{\"parameter\":\"courseid\",\"required\":true,\"default\":null},{\"parameter\":\"tooltype\",\"required\":true,\"default\":\"course\"},{\"parameter\":\"unnecessaryfield\",\"required\":false,\"default\":null}]','2015-07-07 20:29:26',NULL),(6,9,'Redirect','QA Mock Redirect','http://tool-provider.com/mock_tp/validate_token_and_launch_tool',NULL,'2015-07-07 20:29:26',NULL),(7,16,'Launch','Sapling first integration signOn','http://gwslapica.saplinglearning.me/launch',NULL,'2015-07-07 20:29:26',NULL),(9,17,'Launch','Staging','http://gwslapica.saplinglearning.me/launch',NULL,'2015-07-07 20:29:26',NULL),(10,19,'Launch',NULL,'http://gwslapica.saplinglearning.me/launch',NULL,'2015-07-07 20:29:26',NULL),(11,3,'Associate','','http://mnv-gateway.com/mock_tp/user_association',NULL,'2015-07-07 20:29:26',NULL),(12,9,'Associate',NULL,'http://gateway-qa-1.internal.mnv-tech.com/mock_tp/user_association',NULL,'2015-07-07 20:29:26',NULL),(14,25,'Launch','Kitty Boo Boo Mock SignOn','http://tool-provider.com/mock_tp/signon','[{\"parameter\":\"courseid\",\"required\":true,\"default\":null},{\"parameter\":\"tooltype\",\"required\":true,\"default\":\"course\"},{\"parameter\":\"unnecessaryfield\",\"required\":false,\"default\":null}]','2015-07-07 20:29:26',NULL),(15,25,'Associate','Kitty Boo Boo Mock Association','http://mnv-gateway.com/mock_tp/user_association',NULL,'2015-07-07 20:29:26',NULL),(23,29,'Associate','Dynamic Books Associate','http://172.20.0.21/local/stemlms/associate.php',NULL,'2015-06-05 19:31:35','2015-06-05 19:34:30'),(24,29,'Launch','Dynamic Books Launch','http://172.20.0.23:3080/v1/launch',NULL,'2015-06-05 19:35:03','2015-06-05 19:35:03'),(25,29,'Ebook','Dynamic Books Ebook Launch','http://172.20.0.23:3080/v1/launch',NULL,'2015-06-09 16:39:52',NULL),(26,29,'Account','Dynamic Books Resource Lookup','http://172.20.0.23:3080/v1/gw/resources/user',NULL,'2015-07-06 20:02:48',NULL);
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_user_lookup` (`tool_consumer_id`,`tool_provider_id`,`tool_consumer_user_id`),
  KEY `IDX_8D93D649ADCFA333` (`tool_consumer_id`),
  KEY `IDX_8D93D6499061B6F4` (`tool_provider_id`),
  CONSTRAINT `FK_8D93D6499061B6F4` FOREIGN KEY (`tool_provider_id`) REFERENCES `tool_provider` (`id`),
  CONSTRAINT `FK_8D93D649ADCFA333` FOREIGN KEY (`tool_consumer_id`) REFERENCES `tool_consumer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,6,9,'CodeceptHttpBasicUser',NULL,'2015-07-07 20:29:26',NULL),(2,5,9,'CodeceptOAuthUser',NULL,'2015-07-07 20:29:26',NULL),(3,7,9,'ca4c05332efd441bb221d0339f84f2c2',NULL,'2015-07-07 20:29:26',NULL),(4,8,9,'APITest_TCUserID_Blackboard',NULL,'2015-07-07 20:29:26',NULL),(5,13,9,'APITest_TCUserID_STEMLMS',NULL,'2015-07-07 20:29:26',NULL),(6,13,25,'APITest_TCUserID_STEMLMS',NULL,'2015-07-07 20:29:26',NULL),(7,13,9,'APITest_TCUserID_Blackboard',NULL,'2015-07-07 20:29:26',NULL),(51,1,29,'3dfc051c11a44c5ebf74f6bd5783d98f',NULL,'2015-07-07 21:03:33',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-07-08 18:14:45
