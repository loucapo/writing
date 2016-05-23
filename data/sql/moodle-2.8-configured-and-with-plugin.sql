CREATE DATABASE  IF NOT EXISTS `moodle` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `moodle`;
-- MySQL dump 10.13  Distrib 5.6.24, for osx10.8 (x86_64)
--
-- Host: 172.20.0.21    Database: moodle
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
-- Table structure for table `mdl_assign`
--

DROP TABLE IF EXISTS `mdl_assign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assign` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext NOT NULL,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `alwaysshowdescription` tinyint(2) NOT NULL DEFAULT '0',
  `nosubmissions` tinyint(2) NOT NULL DEFAULT '0',
  `submissiondrafts` tinyint(2) NOT NULL DEFAULT '0',
  `sendnotifications` tinyint(2) NOT NULL DEFAULT '0',
  `sendlatenotifications` tinyint(2) NOT NULL DEFAULT '0',
  `duedate` bigint(10) NOT NULL DEFAULT '0',
  `allowsubmissionsfromdate` bigint(10) NOT NULL DEFAULT '0',
  `grade` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `requiresubmissionstatement` tinyint(2) NOT NULL DEFAULT '0',
  `completionsubmit` tinyint(2) NOT NULL DEFAULT '0',
  `cutoffdate` bigint(10) NOT NULL DEFAULT '0',
  `teamsubmission` tinyint(2) NOT NULL DEFAULT '0',
  `requireallteammemberssubmit` tinyint(2) NOT NULL DEFAULT '0',
  `teamsubmissiongroupingid` bigint(10) NOT NULL DEFAULT '0',
  `blindmarking` tinyint(2) NOT NULL DEFAULT '0',
  `revealidentities` tinyint(2) NOT NULL DEFAULT '0',
  `attemptreopenmethod` varchar(10) NOT NULL DEFAULT 'none',
  `maxattempts` mediumint(6) NOT NULL DEFAULT '-1',
  `markingworkflow` tinyint(2) NOT NULL DEFAULT '0',
  `markingallocation` tinyint(2) NOT NULL DEFAULT '0',
  `sendstudentnotifications` tinyint(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `mdl_assi_cou_ix` (`course`),
  KEY `mdl_assi_tea_ix` (`teamsubmissiongroupingid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table saves information about an instance of mod_assign';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assign`
--

LOCK TABLES `mdl_assign` WRITE;
/*!40000 ALTER TABLE `mdl_assign` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assign_grades`
--

DROP TABLE IF EXISTS `mdl_assign_grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assign_grades` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `assignment` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `grader` bigint(10) NOT NULL DEFAULT '0',
  `grade` decimal(10,5) DEFAULT '0.00000',
  `attemptnumber` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_assigrad_assuseatt_uix` (`assignment`,`userid`,`attemptnumber`),
  KEY `mdl_assigrad_use_ix` (`userid`),
  KEY `mdl_assigrad_att_ix` (`attemptnumber`),
  KEY `mdl_assigrad_ass_ix` (`assignment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Grading information about a single assignment submission.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assign_grades`
--

LOCK TABLES `mdl_assign_grades` WRITE;
/*!40000 ALTER TABLE `mdl_assign_grades` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assign_grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assign_plugin_config`
--

DROP TABLE IF EXISTS `mdl_assign_plugin_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assign_plugin_config` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `assignment` bigint(10) NOT NULL DEFAULT '0',
  `plugin` varchar(28) NOT NULL DEFAULT '',
  `subtype` varchar(28) NOT NULL DEFAULT '',
  `name` varchar(28) NOT NULL DEFAULT '',
  `value` longtext,
  PRIMARY KEY (`id`),
  KEY `mdl_assiplugconf_plu_ix` (`plugin`),
  KEY `mdl_assiplugconf_sub_ix` (`subtype`),
  KEY `mdl_assiplugconf_nam_ix` (`name`),
  KEY `mdl_assiplugconf_ass_ix` (`assignment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Config data for an instance of a plugin in an assignment.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assign_plugin_config`
--

LOCK TABLES `mdl_assign_plugin_config` WRITE;
/*!40000 ALTER TABLE `mdl_assign_plugin_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assign_plugin_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assign_submission`
--

DROP TABLE IF EXISTS `mdl_assign_submission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assign_submission` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `assignment` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `status` varchar(10) DEFAULT NULL,
  `groupid` bigint(10) NOT NULL DEFAULT '0',
  `attemptnumber` bigint(10) NOT NULL DEFAULT '0',
  `latest` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_assisubm_assusegroatt_uix` (`assignment`,`userid`,`groupid`,`attemptnumber`),
  KEY `mdl_assisubm_use_ix` (`userid`),
  KEY `mdl_assisubm_att_ix` (`attemptnumber`),
  KEY `mdl_assisubm_assusegrolat_ix` (`assignment`,`userid`,`groupid`,`latest`),
  KEY `mdl_assisubm_ass_ix` (`assignment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table keeps information about student interactions with';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assign_submission`
--

LOCK TABLES `mdl_assign_submission` WRITE;
/*!40000 ALTER TABLE `mdl_assign_submission` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assign_submission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assign_user_flags`
--

DROP TABLE IF EXISTS `mdl_assign_user_flags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assign_user_flags` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `assignment` bigint(10) NOT NULL DEFAULT '0',
  `locked` bigint(10) NOT NULL DEFAULT '0',
  `mailed` smallint(4) NOT NULL DEFAULT '0',
  `extensionduedate` bigint(10) NOT NULL DEFAULT '0',
  `workflowstate` varchar(20) DEFAULT NULL,
  `allocatedmarker` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_assiuserflag_mai_ix` (`mailed`),
  KEY `mdl_assiuserflag_use_ix` (`userid`),
  KEY `mdl_assiuserflag_ass_ix` (`assignment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='List of flags that can be set for a single user in a single ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assign_user_flags`
--

LOCK TABLES `mdl_assign_user_flags` WRITE;
/*!40000 ALTER TABLE `mdl_assign_user_flags` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assign_user_flags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assign_user_mapping`
--

DROP TABLE IF EXISTS `mdl_assign_user_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assign_user_mapping` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `assignment` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_assiusermapp_ass_ix` (`assignment`),
  KEY `mdl_assiusermapp_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Map an assignment specific id number to a user';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assign_user_mapping`
--

LOCK TABLES `mdl_assign_user_mapping` WRITE;
/*!40000 ALTER TABLE `mdl_assign_user_mapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assign_user_mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assignfeedback_comments`
--

DROP TABLE IF EXISTS `mdl_assignfeedback_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assignfeedback_comments` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `assignment` bigint(10) NOT NULL DEFAULT '0',
  `grade` bigint(10) NOT NULL DEFAULT '0',
  `commenttext` longtext,
  `commentformat` smallint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_assicomm_ass_ix` (`assignment`),
  KEY `mdl_assicomm_gra_ix` (`grade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Text feedback for submitted assignments';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assignfeedback_comments`
--

LOCK TABLES `mdl_assignfeedback_comments` WRITE;
/*!40000 ALTER TABLE `mdl_assignfeedback_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assignfeedback_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assignfeedback_editpdf_annot`
--

DROP TABLE IF EXISTS `mdl_assignfeedback_editpdf_annot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assignfeedback_editpdf_annot` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `gradeid` bigint(10) NOT NULL DEFAULT '0',
  `pageno` bigint(10) NOT NULL DEFAULT '0',
  `x` bigint(10) DEFAULT '0',
  `y` bigint(10) DEFAULT '0',
  `endx` bigint(10) DEFAULT '0',
  `endy` bigint(10) DEFAULT '0',
  `path` longtext,
  `type` varchar(10) DEFAULT 'line',
  `colour` varchar(10) DEFAULT 'black',
  `draft` tinyint(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `mdl_assieditanno_grapag_ix` (`gradeid`,`pageno`),
  KEY `mdl_assieditanno_gra_ix` (`gradeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='stores annotations added to pdfs submitted by students';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assignfeedback_editpdf_annot`
--

LOCK TABLES `mdl_assignfeedback_editpdf_annot` WRITE;
/*!40000 ALTER TABLE `mdl_assignfeedback_editpdf_annot` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assignfeedback_editpdf_annot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assignfeedback_editpdf_cmnt`
--

DROP TABLE IF EXISTS `mdl_assignfeedback_editpdf_cmnt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assignfeedback_editpdf_cmnt` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `gradeid` bigint(10) NOT NULL DEFAULT '0',
  `x` bigint(10) DEFAULT '0',
  `y` bigint(10) DEFAULT '0',
  `width` bigint(10) DEFAULT '120',
  `rawtext` longtext,
  `pageno` bigint(10) NOT NULL DEFAULT '0',
  `colour` varchar(10) DEFAULT 'black',
  `draft` tinyint(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `mdl_assieditcmnt_grapag_ix` (`gradeid`,`pageno`),
  KEY `mdl_assieditcmnt_gra_ix` (`gradeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores comments added to pdfs';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assignfeedback_editpdf_cmnt`
--

LOCK TABLES `mdl_assignfeedback_editpdf_cmnt` WRITE;
/*!40000 ALTER TABLE `mdl_assignfeedback_editpdf_cmnt` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assignfeedback_editpdf_cmnt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assignfeedback_editpdf_quick`
--

DROP TABLE IF EXISTS `mdl_assignfeedback_editpdf_quick`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assignfeedback_editpdf_quick` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `rawtext` longtext NOT NULL,
  `width` bigint(10) NOT NULL DEFAULT '120',
  `colour` varchar(10) DEFAULT 'yellow',
  PRIMARY KEY (`id`),
  KEY `mdl_assieditquic_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores teacher specified quicklist comments';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assignfeedback_editpdf_quick`
--

LOCK TABLES `mdl_assignfeedback_editpdf_quick` WRITE;
/*!40000 ALTER TABLE `mdl_assignfeedback_editpdf_quick` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assignfeedback_editpdf_quick` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assignfeedback_file`
--

DROP TABLE IF EXISTS `mdl_assignfeedback_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assignfeedback_file` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `assignment` bigint(10) NOT NULL DEFAULT '0',
  `grade` bigint(10) NOT NULL DEFAULT '0',
  `numfiles` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_assifile_ass2_ix` (`assignment`),
  KEY `mdl_assifile_gra_ix` (`grade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores info about the number of files submitted by a student';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assignfeedback_file`
--

LOCK TABLES `mdl_assignfeedback_file` WRITE;
/*!40000 ALTER TABLE `mdl_assignfeedback_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assignfeedback_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assignment`
--

DROP TABLE IF EXISTS `mdl_assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assignment` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext NOT NULL,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `assignmenttype` varchar(50) NOT NULL DEFAULT '',
  `resubmit` tinyint(2) NOT NULL DEFAULT '0',
  `preventlate` tinyint(2) NOT NULL DEFAULT '0',
  `emailteachers` tinyint(2) NOT NULL DEFAULT '0',
  `var1` bigint(10) DEFAULT '0',
  `var2` bigint(10) DEFAULT '0',
  `var3` bigint(10) DEFAULT '0',
  `var4` bigint(10) DEFAULT '0',
  `var5` bigint(10) DEFAULT '0',
  `maxbytes` bigint(10) NOT NULL DEFAULT '100000',
  `timedue` bigint(10) NOT NULL DEFAULT '0',
  `timeavailable` bigint(10) NOT NULL DEFAULT '0',
  `grade` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_assi_cou2_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines assignments';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assignment`
--

LOCK TABLES `mdl_assignment` WRITE;
/*!40000 ALTER TABLE `mdl_assignment` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assignment_submissions`
--

DROP TABLE IF EXISTS `mdl_assignment_submissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assignment_submissions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `assignment` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `numfiles` bigint(10) NOT NULL DEFAULT '0',
  `data1` longtext,
  `data2` longtext,
  `grade` bigint(11) NOT NULL DEFAULT '0',
  `submissioncomment` longtext NOT NULL,
  `format` smallint(4) NOT NULL DEFAULT '0',
  `teacher` bigint(10) NOT NULL DEFAULT '0',
  `timemarked` bigint(10) NOT NULL DEFAULT '0',
  `mailed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_assisubm_use2_ix` (`userid`),
  KEY `mdl_assisubm_mai_ix` (`mailed`),
  KEY `mdl_assisubm_tim_ix` (`timemarked`),
  KEY `mdl_assisubm_ass2_ix` (`assignment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Info about submitted assignments';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assignment_submissions`
--

LOCK TABLES `mdl_assignment_submissions` WRITE;
/*!40000 ALTER TABLE `mdl_assignment_submissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assignment_submissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assignment_upgrade`
--

DROP TABLE IF EXISTS `mdl_assignment_upgrade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assignment_upgrade` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `oldcmid` bigint(10) NOT NULL DEFAULT '0',
  `oldinstance` bigint(10) NOT NULL DEFAULT '0',
  `newcmid` bigint(10) NOT NULL DEFAULT '0',
  `newinstance` bigint(10) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_assiupgr_old_ix` (`oldcmid`),
  KEY `mdl_assiupgr_old2_ix` (`oldinstance`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Info about upgraded assignments';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assignment_upgrade`
--

LOCK TABLES `mdl_assignment_upgrade` WRITE;
/*!40000 ALTER TABLE `mdl_assignment_upgrade` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assignment_upgrade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assignsubmission_file`
--

DROP TABLE IF EXISTS `mdl_assignsubmission_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assignsubmission_file` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `assignment` bigint(10) NOT NULL DEFAULT '0',
  `submission` bigint(10) NOT NULL DEFAULT '0',
  `numfiles` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_assifile_ass_ix` (`assignment`),
  KEY `mdl_assifile_sub_ix` (`submission`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Info about file submissions for assignments';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assignsubmission_file`
--

LOCK TABLES `mdl_assignsubmission_file` WRITE;
/*!40000 ALTER TABLE `mdl_assignsubmission_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assignsubmission_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_assignsubmission_onlinetext`
--

DROP TABLE IF EXISTS `mdl_assignsubmission_onlinetext`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_assignsubmission_onlinetext` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `assignment` bigint(10) NOT NULL DEFAULT '0',
  `submission` bigint(10) NOT NULL DEFAULT '0',
  `onlinetext` longtext,
  `onlineformat` smallint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_assionli_ass_ix` (`assignment`),
  KEY `mdl_assionli_sub_ix` (`submission`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Info about onlinetext submission';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_assignsubmission_onlinetext`
--

LOCK TABLES `mdl_assignsubmission_onlinetext` WRITE;
/*!40000 ALTER TABLE `mdl_assignsubmission_onlinetext` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_assignsubmission_onlinetext` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_backup_controllers`
--

DROP TABLE IF EXISTS `mdl_backup_controllers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_backup_controllers` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `backupid` varchar(32) NOT NULL DEFAULT '',
  `operation` varchar(20) NOT NULL DEFAULT 'backup',
  `type` varchar(10) NOT NULL DEFAULT '',
  `itemid` bigint(10) NOT NULL,
  `format` varchar(20) NOT NULL DEFAULT '',
  `interactive` smallint(4) NOT NULL,
  `purpose` smallint(4) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `status` smallint(4) NOT NULL,
  `execution` smallint(4) NOT NULL,
  `executiontime` bigint(10) NOT NULL,
  `checksum` varchar(32) NOT NULL DEFAULT '',
  `timecreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  `controller` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_backcont_bac_uix` (`backupid`),
  KEY `mdl_backcont_typite_ix` (`type`,`itemid`),
  KEY `mdl_backcont_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='To store the backup_controllers as they are used';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_backup_controllers`
--

LOCK TABLES `mdl_backup_controllers` WRITE;
/*!40000 ALTER TABLE `mdl_backup_controllers` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_backup_controllers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_backup_courses`
--

DROP TABLE IF EXISTS `mdl_backup_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_backup_courses` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `laststarttime` bigint(10) NOT NULL DEFAULT '0',
  `lastendtime` bigint(10) NOT NULL DEFAULT '0',
  `laststatus` varchar(1) NOT NULL DEFAULT '5',
  `nextstarttime` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_backcour_cou_uix` (`courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='To store every course backup status';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_backup_courses`
--

LOCK TABLES `mdl_backup_courses` WRITE;
/*!40000 ALTER TABLE `mdl_backup_courses` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_backup_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_backup_logs`
--

DROP TABLE IF EXISTS `mdl_backup_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_backup_logs` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `backupid` varchar(32) NOT NULL DEFAULT '',
  `loglevel` smallint(4) NOT NULL,
  `message` longtext NOT NULL,
  `timecreated` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_backlogs_bacid_uix` (`backupid`,`id`),
  KEY `mdl_backlogs_bac_ix` (`backupid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='To store all the logs from backup and restore operations (by';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_backup_logs`
--

LOCK TABLES `mdl_backup_logs` WRITE;
/*!40000 ALTER TABLE `mdl_backup_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_backup_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_badge`
--

DROP TABLE IF EXISTS `mdl_badge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_badge` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `description` longtext,
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `usercreated` bigint(10) NOT NULL,
  `usermodified` bigint(10) NOT NULL,
  `issuername` varchar(255) NOT NULL DEFAULT '',
  `issuerurl` varchar(255) NOT NULL DEFAULT '',
  `issuercontact` varchar(255) DEFAULT NULL,
  `expiredate` bigint(10) DEFAULT NULL,
  `expireperiod` bigint(10) DEFAULT NULL,
  `type` tinyint(1) NOT NULL DEFAULT '1',
  `courseid` bigint(10) DEFAULT NULL,
  `message` longtext NOT NULL,
  `messagesubject` longtext NOT NULL,
  `attachment` tinyint(1) NOT NULL DEFAULT '1',
  `notification` tinyint(1) NOT NULL DEFAULT '1',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `nextcron` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_badg_typ_ix` (`type`),
  KEY `mdl_badg_cou_ix` (`courseid`),
  KEY `mdl_badg_use_ix` (`usermodified`),
  KEY `mdl_badg_use2_ix` (`usercreated`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines badge';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_badge`
--

LOCK TABLES `mdl_badge` WRITE;
/*!40000 ALTER TABLE `mdl_badge` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_badge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_badge_backpack`
--

DROP TABLE IF EXISTS `mdl_badge_backpack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_badge_backpack` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `email` varchar(100) NOT NULL DEFAULT '',
  `backpackurl` varchar(255) NOT NULL DEFAULT '',
  `backpackuid` bigint(10) NOT NULL,
  `autosync` tinyint(1) NOT NULL DEFAULT '0',
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_badgback_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines settings for connecting external backpack';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_badge_backpack`
--

LOCK TABLES `mdl_badge_backpack` WRITE;
/*!40000 ALTER TABLE `mdl_badge_backpack` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_badge_backpack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_badge_criteria`
--

DROP TABLE IF EXISTS `mdl_badge_criteria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_badge_criteria` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `badgeid` bigint(10) NOT NULL DEFAULT '0',
  `criteriatype` bigint(10) DEFAULT NULL,
  `method` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_badgcrit_badcri_uix` (`badgeid`,`criteriatype`),
  KEY `mdl_badgcrit_cri_ix` (`criteriatype`),
  KEY `mdl_badgcrit_bad_ix` (`badgeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines criteria for issuing badges';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_badge_criteria`
--

LOCK TABLES `mdl_badge_criteria` WRITE;
/*!40000 ALTER TABLE `mdl_badge_criteria` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_badge_criteria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_badge_criteria_met`
--

DROP TABLE IF EXISTS `mdl_badge_criteria_met`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_badge_criteria_met` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `issuedid` bigint(10) DEFAULT NULL,
  `critid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `datemet` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_badgcritmet_cri_ix` (`critid`),
  KEY `mdl_badgcritmet_use_ix` (`userid`),
  KEY `mdl_badgcritmet_iss_ix` (`issuedid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines criteria that were met for an issued badge';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_badge_criteria_met`
--

LOCK TABLES `mdl_badge_criteria_met` WRITE;
/*!40000 ALTER TABLE `mdl_badge_criteria_met` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_badge_criteria_met` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_badge_criteria_param`
--

DROP TABLE IF EXISTS `mdl_badge_criteria_param`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_badge_criteria_param` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `critid` bigint(10) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_badgcritpara_cri_ix` (`critid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines parameters for badges criteria';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_badge_criteria_param`
--

LOCK TABLES `mdl_badge_criteria_param` WRITE;
/*!40000 ALTER TABLE `mdl_badge_criteria_param` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_badge_criteria_param` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_badge_external`
--

DROP TABLE IF EXISTS `mdl_badge_external`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_badge_external` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `backpackid` bigint(10) NOT NULL,
  `collectionid` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_badgexte_bac_ix` (`backpackid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Setting for external badges display';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_badge_external`
--

LOCK TABLES `mdl_badge_external` WRITE;
/*!40000 ALTER TABLE `mdl_badge_external` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_badge_external` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_badge_issued`
--

DROP TABLE IF EXISTS `mdl_badge_issued`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_badge_issued` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `badgeid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `uniquehash` longtext NOT NULL,
  `dateissued` bigint(10) NOT NULL DEFAULT '0',
  `dateexpire` bigint(10) DEFAULT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT '0',
  `issuernotified` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_badgissu_baduse_uix` (`badgeid`,`userid`),
  KEY `mdl_badgissu_bad_ix` (`badgeid`),
  KEY `mdl_badgissu_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines issued badges';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_badge_issued`
--

LOCK TABLES `mdl_badge_issued` WRITE;
/*!40000 ALTER TABLE `mdl_badge_issued` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_badge_issued` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_badge_manual_award`
--

DROP TABLE IF EXISTS `mdl_badge_manual_award`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_badge_manual_award` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `badgeid` bigint(10) NOT NULL,
  `recipientid` bigint(10) NOT NULL,
  `issuerid` bigint(10) NOT NULL,
  `issuerrole` bigint(10) NOT NULL,
  `datemet` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_badgmanuawar_bad_ix` (`badgeid`),
  KEY `mdl_badgmanuawar_rec_ix` (`recipientid`),
  KEY `mdl_badgmanuawar_iss_ix` (`issuerid`),
  KEY `mdl_badgmanuawar_iss2_ix` (`issuerrole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Track manual award criteria for badges';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_badge_manual_award`
--

LOCK TABLES `mdl_badge_manual_award` WRITE;
/*!40000 ALTER TABLE `mdl_badge_manual_award` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_badge_manual_award` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_block`
--

DROP TABLE IF EXISTS `mdl_block`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_block` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL DEFAULT '',
  `cron` bigint(10) NOT NULL DEFAULT '0',
  `lastcron` bigint(10) NOT NULL DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_bloc_nam_uix` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 COMMENT='contains all installed blocks';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_block`
--

LOCK TABLES `mdl_block` WRITE;
/*!40000 ALTER TABLE `mdl_block` DISABLE KEYS */;
INSERT INTO `mdl_block` VALUES (1,'activity_modules',0,0,1),(2,'admin_bookmarks',0,0,1),(3,'badges',0,0,1),(4,'blog_menu',0,0,1),(5,'blog_recent',0,0,1),(6,'blog_tags',0,0,1),(7,'calendar_month',0,0,1),(8,'calendar_upcoming',0,0,1),(9,'comments',0,0,1),(10,'community',0,0,1),(11,'completionstatus',0,0,1),(12,'course_list',0,0,1),(13,'course_overview',0,0,1),(14,'course_summary',0,0,1),(15,'feedback',0,0,0),(16,'glossary_random',0,0,1),(17,'html',0,0,1),(18,'login',0,0,1),(19,'mentees',0,0,1),(20,'messages',0,0,1),(21,'mnet_hosts',0,0,1),(22,'myprofile',0,0,1),(23,'navigation',0,0,1),(24,'news_items',0,0,1),(25,'online_users',0,0,1),(26,'participants',0,0,1),(27,'private_files',0,0,1),(28,'quiz_results',0,0,1),(29,'recent_activity',86400,0,1),(30,'rss_client',300,0,1),(31,'search_forums',0,0,1),(32,'section_links',0,0,1),(33,'selfcompletion',0,0,1),(34,'settings',0,0,1),(35,'site_main_menu',0,0,1),(36,'social_activities',0,0,1),(37,'tag_flickr',0,0,1),(38,'tag_youtube',0,0,1),(39,'tags',0,0,1),(40,'mnv_courseenrollment',0,0,1),(41,'mnv_gradereturn',0,0,1);
/*!40000 ALTER TABLE `mdl_block` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_block_community`
--

DROP TABLE IF EXISTS `mdl_block_community`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_block_community` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL,
  `coursename` varchar(255) NOT NULL DEFAULT '',
  `coursedescription` longtext,
  `courseurl` varchar(255) NOT NULL DEFAULT '',
  `imageurl` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Community block';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_block_community`
--

LOCK TABLES `mdl_block_community` WRITE;
/*!40000 ALTER TABLE `mdl_block_community` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_block_community` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_block_instances`
--

DROP TABLE IF EXISTS `mdl_block_instances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_block_instances` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `blockname` varchar(40) NOT NULL DEFAULT '',
  `parentcontextid` bigint(10) NOT NULL,
  `showinsubcontexts` smallint(4) NOT NULL,
  `pagetypepattern` varchar(64) NOT NULL DEFAULT '',
  `subpagepattern` varchar(16) DEFAULT NULL,
  `defaultregion` varchar(16) NOT NULL DEFAULT '',
  `defaultweight` bigint(10) NOT NULL,
  `configdata` longtext,
  PRIMARY KEY (`id`),
  KEY `mdl_blocinst_parshopagsub_ix` (`parentcontextid`,`showinsubcontexts`,`pagetypepattern`,`subpagepattern`),
  KEY `mdl_blocinst_par_ix` (`parentcontextid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COMMENT='This table stores block instances. The type of block this is';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_block_instances`
--

LOCK TABLES `mdl_block_instances` WRITE;
/*!40000 ALTER TABLE `mdl_block_instances` DISABLE KEYS */;
INSERT INTO `mdl_block_instances` VALUES (1,'site_main_menu',2,0,'site-index',NULL,'side-pre',0,''),(2,'course_summary',2,0,'site-index',NULL,'side-post',0,''),(3,'calendar_month',2,0,'site-index',NULL,'side-post',1,''),(4,'navigation',1,1,'*',NULL,'side-pre',0,''),(5,'settings',1,1,'*',NULL,'side-pre',1,''),(6,'admin_bookmarks',1,0,'admin-*',NULL,'side-pre',2,''),(7,'private_files',1,0,'my-index','2','side-post',0,''),(8,'online_users',1,0,'my-index','2','side-post',1,''),(9,'badges',1,0,'my-index','2','side-post',2,''),(10,'calendar_month',1,0,'my-index','2','side-post',3,''),(11,'calendar_upcoming',1,0,'my-index','2','side-post',4,''),(12,'course_overview',1,0,'my-index','2','content',0,''),(13,'mnv_courseenrollment',2,0,'site-index',NULL,'side-post',0,'Tzo4OiJzdGRDbGFzcyI6MDp7fQ==');
/*!40000 ALTER TABLE `mdl_block_instances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_block_positions`
--

DROP TABLE IF EXISTS `mdl_block_positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_block_positions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `blockinstanceid` bigint(10) NOT NULL,
  `contextid` bigint(10) NOT NULL,
  `pagetype` varchar(64) NOT NULL DEFAULT '',
  `subpage` varchar(16) NOT NULL DEFAULT '',
  `visible` smallint(4) NOT NULL,
  `region` varchar(16) NOT NULL DEFAULT '',
  `weight` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_blocposi_bloconpagsub_uix` (`blockinstanceid`,`contextid`,`pagetype`,`subpage`),
  KEY `mdl_blocposi_blo_ix` (`blockinstanceid`),
  KEY `mdl_blocposi_con_ix` (`contextid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Stores the position of a sticky block_instance on a another ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_block_positions`
--

LOCK TABLES `mdl_block_positions` WRITE;
/*!40000 ALTER TABLE `mdl_block_positions` DISABLE KEYS */;
INSERT INTO `mdl_block_positions` VALUES (1,13,2,'site-index','',1,'side-post',2);
/*!40000 ALTER TABLE `mdl_block_positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_block_recent_activity`
--

DROP TABLE IF EXISTS `mdl_block_recent_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_block_recent_activity` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL,
  `cmid` bigint(10) NOT NULL,
  `timecreated` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `action` tinyint(1) NOT NULL,
  `modname` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_blocreceacti_coutim_ix` (`courseid`,`timecreated`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Recent activity block';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_block_recent_activity`
--

LOCK TABLES `mdl_block_recent_activity` WRITE;
/*!40000 ALTER TABLE `mdl_block_recent_activity` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_block_recent_activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_block_rss_client`
--

DROP TABLE IF EXISTS `mdl_block_rss_client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_block_rss_client` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `title` longtext NOT NULL,
  `preferredtitle` varchar(64) NOT NULL DEFAULT '',
  `description` longtext NOT NULL,
  `shared` tinyint(2) NOT NULL DEFAULT '0',
  `url` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Remote news feed information. Contains the news feed id, the';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_block_rss_client`
--

LOCK TABLES `mdl_block_rss_client` WRITE;
/*!40000 ALTER TABLE `mdl_block_rss_client` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_block_rss_client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_blog_association`
--

DROP TABLE IF EXISTS `mdl_blog_association`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_blog_association` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `contextid` bigint(10) NOT NULL,
  `blogid` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_blogasso_con_ix` (`contextid`),
  KEY `mdl_blogasso_blo_ix` (`blogid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Associations of blog entries with courses and module instanc';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_blog_association`
--

LOCK TABLES `mdl_blog_association` WRITE;
/*!40000 ALTER TABLE `mdl_blog_association` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_blog_association` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_blog_external`
--

DROP TABLE IF EXISTS `mdl_blog_external`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_blog_external` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `description` longtext,
  `url` longtext NOT NULL,
  `filtertags` varchar(255) DEFAULT NULL,
  `failedlastsync` tinyint(1) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) DEFAULT NULL,
  `timefetched` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_blogexte_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='External blog links used for RSS copying of blog entries to ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_blog_external`
--

LOCK TABLES `mdl_blog_external` WRITE;
/*!40000 ALTER TABLE `mdl_blog_external` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_blog_external` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_book`
--

DROP TABLE IF EXISTS `mdl_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_book` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `numbering` smallint(4) NOT NULL DEFAULT '0',
  `customtitles` tinyint(2) NOT NULL DEFAULT '0',
  `revision` bigint(10) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines book';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_book`
--

LOCK TABLES `mdl_book` WRITE;
/*!40000 ALTER TABLE `mdl_book` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_book_chapters`
--

DROP TABLE IF EXISTS `mdl_book_chapters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_book_chapters` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `bookid` bigint(10) NOT NULL DEFAULT '0',
  `pagenum` bigint(10) NOT NULL DEFAULT '0',
  `subchapter` bigint(10) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `content` longtext NOT NULL,
  `contentformat` smallint(4) NOT NULL DEFAULT '0',
  `hidden` tinyint(2) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `importsrc` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines book_chapters';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_book_chapters`
--

LOCK TABLES `mdl_book_chapters` WRITE;
/*!40000 ALTER TABLE `mdl_book_chapters` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_book_chapters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_cache_filters`
--

DROP TABLE IF EXISTS `mdl_cache_filters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_cache_filters` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `filter` varchar(32) NOT NULL DEFAULT '',
  `version` bigint(10) NOT NULL DEFAULT '0',
  `md5key` varchar(32) NOT NULL DEFAULT '',
  `rawtext` longtext NOT NULL,
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_cachfilt_filmd5_ix` (`filter`,`md5key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='For keeping information about cached data';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_cache_filters`
--

LOCK TABLES `mdl_cache_filters` WRITE;
/*!40000 ALTER TABLE `mdl_cache_filters` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_cache_filters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_cache_flags`
--

DROP TABLE IF EXISTS `mdl_cache_flags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_cache_flags` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `flagtype` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `value` longtext NOT NULL,
  `expiry` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_cachflag_fla_ix` (`flagtype`),
  KEY `mdl_cachflag_nam_ix` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Cache of time-sensitive flags';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_cache_flags`
--

LOCK TABLES `mdl_cache_flags` WRITE;
/*!40000 ALTER TABLE `mdl_cache_flags` DISABLE KEYS */;
INSERT INTO `mdl_cache_flags` VALUES (1,'userpreferenceschanged','2',1443029450,'1',1443036650);
/*!40000 ALTER TABLE `mdl_cache_flags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_capabilities`
--

DROP TABLE IF EXISTS `mdl_capabilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_capabilities` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `captype` varchar(50) NOT NULL DEFAULT '',
  `contextlevel` bigint(10) NOT NULL DEFAULT '0',
  `component` varchar(100) NOT NULL DEFAULT '',
  `riskbitmask` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_capa_nam_uix` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=525 DEFAULT CHARSET=utf8 COMMENT='this defines all capabilities';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_capabilities`
--

LOCK TABLES `mdl_capabilities` WRITE;
/*!40000 ALTER TABLE `mdl_capabilities` DISABLE KEYS */;
INSERT INTO `mdl_capabilities` VALUES (1,'moodle/site:config','write',10,'moodle',62),(2,'moodle/site:readallmessages','read',10,'moodle',8),(3,'moodle/site:sendmessage','write',10,'moodle',16),(4,'moodle/site:approvecourse','write',10,'moodle',4),(5,'moodle/backup:backupcourse','write',50,'moodle',28),(6,'moodle/backup:backupsection','write',50,'moodle',28),(7,'moodle/backup:backupactivity','write',70,'moodle',28),(8,'moodle/backup:backuptargethub','write',50,'moodle',28),(9,'moodle/backup:backuptargetimport','write',50,'moodle',28),(10,'moodle/backup:downloadfile','write',50,'moodle',28),(11,'moodle/backup:configure','write',50,'moodle',28),(12,'moodle/backup:userinfo','read',50,'moodle',8),(13,'moodle/backup:anonymise','read',50,'moodle',8),(14,'moodle/restore:restorecourse','write',50,'moodle',28),(15,'moodle/restore:restoresection','write',50,'moodle',28),(16,'moodle/restore:restoreactivity','write',50,'moodle',28),(17,'moodle/restore:viewautomatedfilearea','write',50,'moodle',28),(18,'moodle/restore:restoretargethub','write',50,'moodle',28),(19,'moodle/restore:restoretargetimport','write',50,'moodle',28),(20,'moodle/restore:uploadfile','write',50,'moodle',28),(21,'moodle/restore:configure','write',50,'moodle',28),(22,'moodle/restore:rolldates','write',50,'moodle',0),(23,'moodle/restore:userinfo','write',50,'moodle',30),(24,'moodle/restore:createuser','write',10,'moodle',24),(25,'moodle/site:manageblocks','write',80,'moodle',20),(26,'moodle/site:accessallgroups','read',50,'moodle',0),(27,'moodle/site:viewfullnames','read',50,'moodle',0),(28,'moodle/site:viewuseridentity','read',50,'moodle',0),(29,'moodle/site:viewreports','read',50,'moodle',8),(30,'moodle/site:trustcontent','write',50,'moodle',4),(31,'moodle/site:uploadusers','write',10,'moodle',24),(32,'moodle/filter:manage','write',50,'moodle',0),(33,'moodle/user:create','write',10,'moodle',24),(34,'moodle/user:delete','write',10,'moodle',8),(35,'moodle/user:update','write',10,'moodle',24),(36,'moodle/user:viewdetails','read',50,'moodle',0),(37,'moodle/user:viewalldetails','read',30,'moodle',8),(38,'moodle/user:viewlastip','read',30,'moodle',8),(39,'moodle/user:viewhiddendetails','read',50,'moodle',8),(40,'moodle/user:loginas','write',50,'moodle',30),(41,'moodle/user:managesyspages','write',10,'moodle',0),(42,'moodle/user:manageblocks','write',30,'moodle',0),(43,'moodle/user:manageownblocks','write',10,'moodle',0),(44,'moodle/user:manageownfiles','write',10,'moodle',0),(45,'moodle/user:ignoreuserquota','write',10,'moodle',0),(46,'moodle/my:configsyspages','write',10,'moodle',0),(47,'moodle/role:assign','write',50,'moodle',28),(48,'moodle/role:review','read',50,'moodle',8),(49,'moodle/role:override','write',50,'moodle',28),(50,'moodle/role:safeoverride','write',50,'moodle',16),(51,'moodle/role:manage','write',10,'moodle',28),(52,'moodle/role:switchroles','read',50,'moodle',12),(53,'moodle/category:manage','write',40,'moodle',4),(54,'moodle/category:viewhiddencategories','read',40,'moodle',0),(55,'moodle/cohort:manage','write',40,'moodle',0),(56,'moodle/cohort:assign','write',40,'moodle',0),(57,'moodle/cohort:view','read',50,'moodle',0),(58,'moodle/course:create','write',40,'moodle',4),(59,'moodle/course:request','write',10,'moodle',0),(60,'moodle/course:delete','write',50,'moodle',32),(61,'moodle/course:update','write',50,'moodle',4),(62,'moodle/course:view','read',50,'moodle',0),(63,'moodle/course:enrolreview','read',50,'moodle',8),(64,'moodle/course:enrolconfig','write',50,'moodle',8),(65,'moodle/course:reviewotherusers','read',50,'moodle',0),(66,'moodle/course:bulkmessaging','write',50,'moodle',16),(67,'moodle/course:viewhiddenuserfields','read',50,'moodle',8),(68,'moodle/course:viewhiddencourses','read',50,'moodle',0),(69,'moodle/course:visibility','write',50,'moodle',0),(70,'moodle/course:managefiles','write',50,'moodle',4),(71,'moodle/course:ignorefilesizelimits','write',50,'moodle',0),(72,'moodle/course:manageactivities','write',70,'moodle',4),(73,'moodle/course:activityvisibility','write',70,'moodle',0),(74,'moodle/course:viewhiddenactivities','write',70,'moodle',0),(75,'moodle/course:viewparticipants','read',50,'moodle',0),(76,'moodle/course:changefullname','write',50,'moodle',4),(77,'moodle/course:changeshortname','write',50,'moodle',4),(78,'moodle/course:changeidnumber','write',50,'moodle',4),(79,'moodle/course:changecategory','write',50,'moodle',4),(80,'moodle/course:changesummary','write',50,'moodle',4),(81,'moodle/site:viewparticipants','read',10,'moodle',0),(82,'moodle/course:isincompletionreports','read',50,'moodle',0),(83,'moodle/course:viewscales','read',50,'moodle',0),(84,'moodle/course:managescales','write',50,'moodle',0),(85,'moodle/course:managegroups','write',50,'moodle',0),(86,'moodle/course:reset','write',50,'moodle',32),(87,'moodle/course:viewsuspendedusers','read',10,'moodle',0),(88,'moodle/blog:view','read',10,'moodle',0),(89,'moodle/blog:search','read',10,'moodle',0),(90,'moodle/blog:viewdrafts','read',10,'moodle',8),(91,'moodle/blog:create','write',10,'moodle',16),(92,'moodle/blog:manageentries','write',10,'moodle',16),(93,'moodle/blog:manageexternal','write',10,'moodle',16),(94,'moodle/blog:associatecourse','write',50,'moodle',0),(95,'moodle/blog:associatemodule','write',70,'moodle',0),(96,'moodle/calendar:manageownentries','write',50,'moodle',16),(97,'moodle/calendar:managegroupentries','write',50,'moodle',16),(98,'moodle/calendar:manageentries','write',50,'moodle',16),(99,'moodle/user:editprofile','write',30,'moodle',24),(100,'moodle/user:editownprofile','write',10,'moodle',16),(101,'moodle/user:changeownpassword','write',10,'moodle',0),(102,'moodle/user:readuserposts','read',30,'moodle',0),(103,'moodle/user:readuserblogs','read',30,'moodle',0),(104,'moodle/user:viewuseractivitiesreport','read',30,'moodle',8),(105,'moodle/user:editmessageprofile','write',30,'moodle',16),(106,'moodle/user:editownmessageprofile','write',10,'moodle',0),(107,'moodle/question:managecategory','write',50,'moodle',20),(108,'moodle/question:add','write',50,'moodle',20),(109,'moodle/question:editmine','write',50,'moodle',20),(110,'moodle/question:editall','write',50,'moodle',20),(111,'moodle/question:viewmine','read',50,'moodle',0),(112,'moodle/question:viewall','read',50,'moodle',0),(113,'moodle/question:usemine','read',50,'moodle',0),(114,'moodle/question:useall','read',50,'moodle',0),(115,'moodle/question:movemine','write',50,'moodle',0),(116,'moodle/question:moveall','write',50,'moodle',0),(117,'moodle/question:config','write',10,'moodle',2),(118,'moodle/question:flag','write',50,'moodle',0),(119,'moodle/site:doclinks','read',10,'moodle',0),(120,'moodle/course:sectionvisibility','write',50,'moodle',0),(121,'moodle/course:useremail','write',50,'moodle',0),(122,'moodle/course:viewhiddensections','write',50,'moodle',0),(123,'moodle/course:setcurrentsection','write',50,'moodle',0),(124,'moodle/course:movesections','write',50,'moodle',0),(125,'moodle/site:mnetlogintoremote','read',10,'moodle',0),(126,'moodle/grade:viewall','read',50,'moodle',8),(127,'moodle/grade:view','read',50,'moodle',0),(128,'moodle/grade:viewhidden','read',50,'moodle',8),(129,'moodle/grade:import','write',50,'moodle',12),(130,'moodle/grade:export','read',50,'moodle',8),(131,'moodle/grade:manage','write',50,'moodle',12),(132,'moodle/grade:edit','write',50,'moodle',12),(133,'moodle/grade:managegradingforms','write',50,'moodle',12),(134,'moodle/grade:sharegradingforms','write',10,'moodle',4),(135,'moodle/grade:managesharedforms','write',10,'moodle',4),(136,'moodle/grade:manageoutcomes','write',50,'moodle',0),(137,'moodle/grade:manageletters','write',50,'moodle',0),(138,'moodle/grade:hide','write',50,'moodle',0),(139,'moodle/grade:lock','write',50,'moodle',0),(140,'moodle/grade:unlock','write',50,'moodle',0),(141,'moodle/my:manageblocks','write',10,'moodle',0),(142,'moodle/notes:view','read',50,'moodle',0),(143,'moodle/notes:manage','write',50,'moodle',16),(144,'moodle/tag:manage','write',10,'moodle',16),(145,'moodle/tag:create','write',10,'moodle',16),(146,'moodle/tag:edit','write',10,'moodle',16),(147,'moodle/tag:flag','write',10,'moodle',16),(148,'moodle/tag:editblocks','write',10,'moodle',0),(149,'moodle/block:view','read',80,'moodle',0),(150,'moodle/block:edit','write',80,'moodle',20),(151,'moodle/portfolio:export','read',10,'moodle',0),(152,'moodle/comment:view','read',50,'moodle',0),(153,'moodle/comment:post','write',50,'moodle',24),(154,'moodle/comment:delete','write',50,'moodle',32),(155,'moodle/webservice:createtoken','write',10,'moodle',62),(156,'moodle/webservice:createmobiletoken','write',10,'moodle',24),(157,'moodle/rating:view','read',50,'moodle',0),(158,'moodle/rating:viewany','read',50,'moodle',8),(159,'moodle/rating:viewall','read',50,'moodle',8),(160,'moodle/rating:rate','write',50,'moodle',0),(161,'moodle/course:publish','write',10,'moodle',24),(162,'moodle/course:markcomplete','write',50,'moodle',0),(163,'moodle/community:add','write',10,'moodle',0),(164,'moodle/community:download','write',10,'moodle',0),(165,'moodle/badges:manageglobalsettings','write',10,'moodle',34),(166,'moodle/badges:viewbadges','read',50,'moodle',0),(167,'moodle/badges:manageownbadges','write',30,'moodle',0),(168,'moodle/badges:viewotherbadges','read',30,'moodle',0),(169,'moodle/badges:earnbadge','write',50,'moodle',0),(170,'moodle/badges:createbadge','write',50,'moodle',16),(171,'moodle/badges:deletebadge','write',50,'moodle',32),(172,'moodle/badges:configuredetails','write',50,'moodle',16),(173,'moodle/badges:configurecriteria','write',50,'moodle',0),(174,'moodle/badges:configuremessages','write',50,'moodle',16),(175,'moodle/badges:awardbadge','write',50,'moodle',16),(176,'moodle/badges:viewawarded','read',50,'moodle',8),(177,'moodle/site:forcelanguage','read',10,'moodle',0),(178,'mod/assign:view','read',70,'mod_assign',0),(179,'mod/assign:submit','write',70,'mod_assign',0),(180,'mod/assign:grade','write',70,'mod_assign',4),(181,'mod/assign:exportownsubmission','read',70,'mod_assign',0),(182,'mod/assign:addinstance','write',50,'mod_assign',4),(183,'mod/assign:editothersubmission','write',70,'mod_assign',41),(184,'mod/assign:grantextension','write',70,'mod_assign',0),(185,'mod/assign:revealidentities','write',70,'mod_assign',0),(186,'mod/assign:reviewgrades','write',70,'mod_assign',0),(187,'mod/assign:releasegrades','write',70,'mod_assign',0),(188,'mod/assign:managegrades','write',70,'mod_assign',0),(189,'mod/assign:manageallocations','write',70,'mod_assign',0),(190,'mod/assign:viewgrades','read',70,'mod_assign',0),(191,'mod/assign:viewblinddetails','write',70,'mod_assign',8),(192,'mod/assign:receivegradernotifications','read',70,'mod_assign',0),(193,'mod/assignment:view','read',70,'mod_assignment',0),(194,'mod/assignment:addinstance','write',50,'mod_assignment',4),(195,'mod/assignment:submit','write',70,'mod_assignment',0),(196,'mod/assignment:grade','write',70,'mod_assignment',4),(197,'mod/assignment:exportownsubmission','read',70,'mod_assignment',0),(198,'mod/book:addinstance','write',50,'mod_book',4),(199,'mod/book:read','read',70,'mod_book',0),(200,'mod/book:viewhiddenchapters','read',70,'mod_book',0),(201,'mod/book:edit','write',70,'mod_book',4),(202,'mod/chat:addinstance','write',50,'mod_chat',4),(203,'mod/chat:chat','write',70,'mod_chat',16),(204,'mod/chat:readlog','read',70,'mod_chat',0),(205,'mod/chat:deletelog','write',70,'mod_chat',0),(206,'mod/chat:exportparticipatedsession','read',70,'mod_chat',8),(207,'mod/chat:exportsession','read',70,'mod_chat',8),(208,'mod/choice:addinstance','write',50,'mod_choice',4),(209,'mod/choice:choose','write',70,'mod_choice',0),(210,'mod/choice:readresponses','read',70,'mod_choice',0),(211,'mod/choice:deleteresponses','write',70,'mod_choice',0),(212,'mod/choice:downloadresponses','read',70,'mod_choice',0),(213,'mod/data:addinstance','write',50,'mod_data',4),(214,'mod/data:viewentry','read',70,'mod_data',0),(215,'mod/data:writeentry','write',70,'mod_data',16),(216,'mod/data:comment','write',70,'mod_data',16),(217,'mod/data:rate','write',70,'mod_data',0),(218,'mod/data:viewrating','read',70,'mod_data',0),(219,'mod/data:viewanyrating','read',70,'mod_data',8),(220,'mod/data:viewallratings','read',70,'mod_data',8),(221,'mod/data:approve','write',70,'mod_data',16),(222,'mod/data:manageentries','write',70,'mod_data',16),(223,'mod/data:managecomments','write',70,'mod_data',16),(224,'mod/data:managetemplates','write',70,'mod_data',20),(225,'mod/data:viewalluserpresets','read',70,'mod_data',0),(226,'mod/data:manageuserpresets','write',70,'mod_data',20),(227,'mod/data:exportentry','read',70,'mod_data',8),(228,'mod/data:exportownentry','read',70,'mod_data',0),(229,'mod/data:exportallentries','read',70,'mod_data',8),(230,'mod/data:exportuserinfo','read',70,'mod_data',8),(231,'mod/feedback:addinstance','write',50,'mod_feedback',4),(232,'mod/feedback:view','read',70,'mod_feedback',0),(233,'mod/feedback:complete','write',70,'mod_feedback',16),(234,'mod/feedback:viewanalysepage','read',70,'mod_feedback',8),(235,'mod/feedback:deletesubmissions','write',70,'mod_feedback',0),(236,'mod/feedback:mapcourse','write',70,'mod_feedback',0),(237,'mod/feedback:edititems','write',70,'mod_feedback',20),(238,'mod/feedback:createprivatetemplate','write',70,'mod_feedback',16),(239,'mod/feedback:createpublictemplate','write',70,'mod_feedback',16),(240,'mod/feedback:deletetemplate','write',70,'mod_feedback',0),(241,'mod/feedback:viewreports','read',70,'mod_feedback',8),(242,'mod/feedback:receivemail','read',70,'mod_feedback',8),(243,'mod/folder:addinstance','write',50,'mod_folder',4),(244,'mod/folder:view','read',70,'mod_folder',0),(245,'mod/folder:managefiles','write',70,'mod_folder',16),(246,'mod/forum:addinstance','write',50,'mod_forum',4),(247,'mod/forum:viewdiscussion','read',70,'mod_forum',0),(248,'mod/forum:viewhiddentimedposts','read',70,'mod_forum',0),(249,'mod/forum:startdiscussion','write',70,'mod_forum',16),(250,'mod/forum:replypost','write',70,'mod_forum',16),(251,'mod/forum:addnews','write',70,'mod_forum',16),(252,'mod/forum:replynews','write',70,'mod_forum',16),(253,'mod/forum:viewrating','read',70,'mod_forum',0),(254,'mod/forum:viewanyrating','read',70,'mod_forum',8),(255,'mod/forum:viewallratings','read',70,'mod_forum',8),(256,'mod/forum:rate','write',70,'mod_forum',0),(257,'mod/forum:createattachment','write',70,'mod_forum',16),(258,'mod/forum:deleteownpost','read',70,'mod_forum',0),(259,'mod/forum:deleteanypost','read',70,'mod_forum',0),(260,'mod/forum:splitdiscussions','read',70,'mod_forum',0),(261,'mod/forum:movediscussions','read',70,'mod_forum',0),(262,'mod/forum:editanypost','write',70,'mod_forum',16),(263,'mod/forum:viewqandawithoutposting','read',70,'mod_forum',0),(264,'mod/forum:viewsubscribers','read',70,'mod_forum',0),(265,'mod/forum:managesubscriptions','read',70,'mod_forum',16),(266,'mod/forum:postwithoutthrottling','write',70,'mod_forum',16),(267,'mod/forum:exportdiscussion','read',70,'mod_forum',8),(268,'mod/forum:exportpost','read',70,'mod_forum',8),(269,'mod/forum:exportownpost','read',70,'mod_forum',8),(270,'mod/forum:addquestion','write',70,'mod_forum',16),(271,'mod/forum:allowforcesubscribe','read',70,'mod_forum',0),(272,'mod/glossary:addinstance','write',50,'mod_glossary',4),(273,'mod/glossary:view','read',70,'mod_glossary',0),(274,'mod/glossary:write','write',70,'mod_glossary',16),(275,'mod/glossary:manageentries','write',70,'mod_glossary',16),(276,'mod/glossary:managecategories','write',70,'mod_glossary',16),(277,'mod/glossary:comment','write',70,'mod_glossary',16),(278,'mod/glossary:managecomments','write',70,'mod_glossary',16),(279,'mod/glossary:import','write',70,'mod_glossary',16),(280,'mod/glossary:export','read',70,'mod_glossary',0),(281,'mod/glossary:approve','write',70,'mod_glossary',16),(282,'mod/glossary:rate','write',70,'mod_glossary',0),(283,'mod/glossary:viewrating','read',70,'mod_glossary',0),(284,'mod/glossary:viewanyrating','read',70,'mod_glossary',8),(285,'mod/glossary:viewallratings','read',70,'mod_glossary',8),(286,'mod/glossary:exportentry','read',70,'mod_glossary',8),(287,'mod/glossary:exportownentry','read',70,'mod_glossary',0),(288,'mod/imscp:view','read',70,'mod_imscp',0),(289,'mod/imscp:addinstance','write',50,'mod_imscp',4),(290,'mod/label:addinstance','write',50,'mod_label',4),(291,'mod/lesson:addinstance','write',50,'mod_lesson',4),(292,'mod/lesson:edit','write',70,'mod_lesson',4),(293,'mod/lesson:grade','write',70,'mod_lesson',20),(294,'mod/lesson:manage','write',70,'mod_lesson',0),(295,'mod/lti:view','read',70,'mod_lti',0),(296,'mod/lti:addinstance','write',50,'mod_lti',4),(297,'mod/lti:manage','write',70,'mod_lti',8),(298,'mod/lti:addcoursetool','write',50,'mod_lti',0),(299,'mod/lti:requesttooladd','write',50,'mod_lti',0),(300,'mod/page:view','read',70,'mod_page',0),(301,'mod/page:addinstance','write',50,'mod_page',4),(302,'mod/quiz:view','read',70,'mod_quiz',0),(303,'mod/quiz:addinstance','write',50,'mod_quiz',4),(304,'mod/quiz:attempt','write',70,'mod_quiz',16),(305,'mod/quiz:reviewmyattempts','read',70,'mod_quiz',0),(306,'mod/quiz:manage','write',70,'mod_quiz',16),(307,'mod/quiz:manageoverrides','write',70,'mod_quiz',0),(308,'mod/quiz:preview','write',70,'mod_quiz',0),(309,'mod/quiz:grade','write',70,'mod_quiz',20),(310,'mod/quiz:regrade','write',70,'mod_quiz',16),(311,'mod/quiz:viewreports','read',70,'mod_quiz',8),(312,'mod/quiz:deleteattempts','write',70,'mod_quiz',32),(313,'mod/quiz:ignoretimelimits','read',70,'mod_quiz',0),(314,'mod/quiz:emailconfirmsubmission','read',70,'mod_quiz',0),(315,'mod/quiz:emailnotifysubmission','read',70,'mod_quiz',0),(316,'mod/quiz:emailwarnoverdue','read',70,'mod_quiz',0),(317,'mod/resource:view','read',70,'mod_resource',0),(318,'mod/resource:addinstance','write',50,'mod_resource',4),(319,'mod/scorm:addinstance','write',50,'mod_scorm',4),(320,'mod/scorm:viewreport','read',70,'mod_scorm',0),(321,'mod/scorm:skipview','read',70,'mod_scorm',0),(322,'mod/scorm:savetrack','write',70,'mod_scorm',0),(323,'mod/scorm:viewscores','read',70,'mod_scorm',0),(324,'mod/scorm:deleteresponses','write',70,'mod_scorm',0),(325,'mod/scorm:deleteownresponses','write',70,'mod_scorm',0),(326,'mod/survey:addinstance','write',50,'mod_survey',4),(327,'mod/survey:participate','read',70,'mod_survey',0),(328,'mod/survey:readresponses','read',70,'mod_survey',0),(329,'mod/survey:download','read',70,'mod_survey',0),(330,'mod/url:view','read',70,'mod_url',0),(331,'mod/url:addinstance','write',50,'mod_url',4),(332,'mod/wiki:addinstance','write',50,'mod_wiki',4),(333,'mod/wiki:viewpage','read',70,'mod_wiki',0),(334,'mod/wiki:editpage','write',70,'mod_wiki',16),(335,'mod/wiki:createpage','write',70,'mod_wiki',16),(336,'mod/wiki:viewcomment','read',70,'mod_wiki',0),(337,'mod/wiki:editcomment','write',70,'mod_wiki',16),(338,'mod/wiki:managecomment','write',70,'mod_wiki',0),(339,'mod/wiki:managefiles','write',70,'mod_wiki',0),(340,'mod/wiki:overridelock','write',70,'mod_wiki',0),(341,'mod/wiki:managewiki','write',70,'mod_wiki',0),(342,'mod/workshop:view','read',70,'mod_workshop',0),(343,'mod/workshop:addinstance','write',50,'mod_workshop',4),(344,'mod/workshop:switchphase','write',70,'mod_workshop',0),(345,'mod/workshop:editdimensions','write',70,'mod_workshop',4),(346,'mod/workshop:submit','write',70,'mod_workshop',0),(347,'mod/workshop:peerassess','write',70,'mod_workshop',0),(348,'mod/workshop:manageexamples','write',70,'mod_workshop',0),(349,'mod/workshop:allocate','write',70,'mod_workshop',0),(350,'mod/workshop:publishsubmissions','write',70,'mod_workshop',0),(351,'mod/workshop:viewauthornames','read',70,'mod_workshop',0),(352,'mod/workshop:viewreviewernames','read',70,'mod_workshop',0),(353,'mod/workshop:viewallsubmissions','read',70,'mod_workshop',0),(354,'mod/workshop:viewpublishedsubmissions','read',70,'mod_workshop',0),(355,'mod/workshop:viewauthorpublished','read',70,'mod_workshop',0),(356,'mod/workshop:viewallassessments','read',70,'mod_workshop',0),(357,'mod/workshop:overridegrades','write',70,'mod_workshop',0),(358,'mod/workshop:ignoredeadlines','write',70,'mod_workshop',0),(359,'enrol/category:synchronised','write',10,'enrol_category',0),(360,'enrol/category:config','write',50,'enrol_category',0),(361,'enrol/cohort:config','write',50,'enrol_cohort',0),(362,'enrol/cohort:unenrol','write',50,'enrol_cohort',0),(363,'enrol/database:unenrol','write',50,'enrol_database',0),(364,'enrol/database:config','write',50,'enrol_database',0),(365,'enrol/flatfile:manage','write',50,'enrol_flatfile',0),(366,'enrol/flatfile:unenrol','write',50,'enrol_flatfile',0),(367,'enrol/guest:config','write',50,'enrol_guest',0),(368,'enrol/imsenterprise:config','write',50,'enrol_imsenterprise',0),(369,'enrol/ldap:manage','write',50,'enrol_ldap',0),(370,'enrol/manual:config','write',50,'enrol_manual',0),(371,'enrol/manual:enrol','write',50,'enrol_manual',0),(372,'enrol/manual:manage','write',50,'enrol_manual',0),(373,'enrol/manual:unenrol','write',50,'enrol_manual',0),(374,'enrol/manual:unenrolself','write',50,'enrol_manual',0),(375,'enrol/meta:config','write',50,'enrol_meta',0),(376,'enrol/meta:selectaslinked','read',50,'enrol_meta',0),(377,'enrol/meta:unenrol','write',50,'enrol_meta',0),(378,'enrol/mnet:config','write',50,'enrol_mnet',0),(379,'enrol/paypal:config','write',50,'enrol_paypal',0),(380,'enrol/paypal:manage','write',50,'enrol_paypal',0),(381,'enrol/paypal:unenrol','write',50,'enrol_paypal',0),(382,'enrol/paypal:unenrolself','write',50,'enrol_paypal',0),(383,'enrol/self:config','write',50,'enrol_self',0),(384,'enrol/self:manage','write',50,'enrol_self',0),(385,'enrol/self:unenrolself','write',50,'enrol_self',0),(386,'enrol/self:unenrol','write',50,'enrol_self',0),(387,'message/airnotifier:managedevice','write',10,'message_airnotifier',0),(388,'block/activity_modules:addinstance','write',80,'block_activity_modules',20),(389,'block/admin_bookmarks:myaddinstance','write',10,'block_admin_bookmarks',0),(390,'block/admin_bookmarks:addinstance','write',80,'block_admin_bookmarks',20),(391,'block/badges:addinstance','read',80,'block_badges',0),(392,'block/badges:myaddinstance','read',10,'block_badges',8),(393,'block/blog_menu:addinstance','write',80,'block_blog_menu',20),(394,'block/blog_recent:addinstance','write',80,'block_blog_recent',20),(395,'block/blog_tags:addinstance','write',80,'block_blog_tags',20),(396,'block/calendar_month:myaddinstance','write',10,'block_calendar_month',0),(397,'block/calendar_month:addinstance','write',80,'block_calendar_month',20),(398,'block/calendar_upcoming:myaddinstance','write',10,'block_calendar_upcoming',0),(399,'block/calendar_upcoming:addinstance','write',80,'block_calendar_upcoming',20),(400,'block/comments:myaddinstance','write',10,'block_comments',0),(401,'block/comments:addinstance','write',80,'block_comments',20),(402,'block/community:myaddinstance','write',10,'block_community',0),(403,'block/community:addinstance','write',80,'block_community',20),(404,'block/completionstatus:addinstance','write',80,'block_completionstatus',20),(405,'block/course_list:myaddinstance','write',10,'block_course_list',0),(406,'block/course_list:addinstance','write',80,'block_course_list',20),(407,'block/course_overview:myaddinstance','write',10,'block_course_overview',0),(408,'block/course_overview:addinstance','write',80,'block_course_overview',20),(409,'block/course_summary:addinstance','write',80,'block_course_summary',20),(410,'block/feedback:addinstance','write',80,'block_feedback',20),(411,'block/glossary_random:myaddinstance','write',10,'block_glossary_random',0),(412,'block/glossary_random:addinstance','write',80,'block_glossary_random',20),(413,'block/html:myaddinstance','write',10,'block_html',0),(414,'block/html:addinstance','write',80,'block_html',20),(415,'block/login:addinstance','write',80,'block_login',20),(416,'block/mentees:myaddinstance','write',10,'block_mentees',0),(417,'block/mentees:addinstance','write',80,'block_mentees',20),(418,'block/messages:myaddinstance','write',10,'block_messages',0),(419,'block/messages:addinstance','write',80,'block_messages',20),(420,'block/mnet_hosts:myaddinstance','write',10,'block_mnet_hosts',0),(421,'block/mnet_hosts:addinstance','write',80,'block_mnet_hosts',20),(422,'block/myprofile:myaddinstance','write',10,'block_myprofile',0),(423,'block/myprofile:addinstance','write',80,'block_myprofile',20),(424,'block/navigation:myaddinstance','write',10,'block_navigation',0),(425,'block/navigation:addinstance','write',80,'block_navigation',20),(426,'block/news_items:myaddinstance','write',10,'block_news_items',0),(427,'block/news_items:addinstance','write',80,'block_news_items',20),(428,'block/online_users:myaddinstance','write',10,'block_online_users',0),(429,'block/online_users:addinstance','write',80,'block_online_users',20),(430,'block/online_users:viewlist','read',80,'block_online_users',0),(431,'block/participants:addinstance','write',80,'block_participants',20),(432,'block/private_files:myaddinstance','write',10,'block_private_files',0),(433,'block/private_files:addinstance','write',80,'block_private_files',20),(434,'block/quiz_results:addinstance','write',80,'block_quiz_results',20),(435,'block/recent_activity:addinstance','write',80,'block_recent_activity',20),(436,'block/recent_activity:viewaddupdatemodule','read',50,'block_recent_activity',0),(437,'block/recent_activity:viewdeletemodule','read',50,'block_recent_activity',0),(438,'block/rss_client:myaddinstance','write',10,'block_rss_client',0),(439,'block/rss_client:addinstance','write',80,'block_rss_client',20),(440,'block/rss_client:manageownfeeds','write',80,'block_rss_client',0),(441,'block/rss_client:manageanyfeeds','write',80,'block_rss_client',16),(442,'block/search_forums:addinstance','write',80,'block_search_forums',20),(443,'block/section_links:addinstance','write',80,'block_section_links',20),(444,'block/selfcompletion:addinstance','write',80,'block_selfcompletion',20),(445,'block/settings:myaddinstance','write',10,'block_settings',0),(446,'block/settings:addinstance','write',80,'block_settings',20),(447,'block/site_main_menu:addinstance','write',80,'block_site_main_menu',20),(448,'block/social_activities:addinstance','write',80,'block_social_activities',20),(449,'block/tag_flickr:addinstance','write',80,'block_tag_flickr',20),(450,'block/tag_youtube:addinstance','write',80,'block_tag_youtube',20),(451,'block/tags:myaddinstance','write',10,'block_tags',0),(452,'block/tags:addinstance','write',80,'block_tags',20),(453,'report/completion:view','read',50,'report_completion',8),(454,'report/courseoverview:view','read',10,'report_courseoverview',8),(455,'report/log:view','read',50,'report_log',8),(456,'report/log:viewtoday','read',50,'report_log',8),(457,'report/loglive:view','read',50,'report_loglive',8),(458,'report/outline:view','read',50,'report_outline',8),(459,'report/participation:view','read',50,'report_participation',8),(460,'report/performance:view','read',10,'report_performance',2),(461,'report/progress:view','read',50,'report_progress',8),(462,'report/questioninstances:view','read',10,'report_questioninstances',0),(463,'report/security:view','read',10,'report_security',2),(464,'report/stats:view','read',50,'report_stats',8),(465,'gradeexport/ods:view','read',50,'gradeexport_ods',8),(466,'gradeexport/ods:publish','read',50,'gradeexport_ods',8),(467,'gradeexport/txt:view','read',50,'gradeexport_txt',8),(468,'gradeexport/txt:publish','read',50,'gradeexport_txt',8),(469,'gradeexport/xls:view','read',50,'gradeexport_xls',8),(470,'gradeexport/xls:publish','read',50,'gradeexport_xls',8),(471,'gradeexport/xml:view','read',50,'gradeexport_xml',8),(472,'gradeexport/xml:publish','read',50,'gradeexport_xml',8),(473,'gradeimport/csv:view','write',50,'gradeimport_csv',0),(474,'gradeimport/direct:view','write',50,'gradeimport_direct',0),(475,'gradeimport/xml:view','write',50,'gradeimport_xml',0),(476,'gradeimport/xml:publish','write',50,'gradeimport_xml',0),(477,'gradereport/grader:view','read',50,'gradereport_grader',8),(478,'gradereport/history:view','read',50,'gradereport_history',8),(479,'gradereport/outcomes:view','read',50,'gradereport_outcomes',8),(480,'gradereport/overview:view','read',50,'gradereport_overview',8),(481,'gradereport/singleview:view','read',50,'gradereport_singleview',8),(482,'gradereport/user:view','read',50,'gradereport_user',8),(483,'webservice/amf:use','read',50,'webservice_amf',62),(484,'webservice/rest:use','read',50,'webservice_rest',62),(485,'webservice/soap:use','read',50,'webservice_soap',62),(486,'webservice/xmlrpc:use','read',50,'webservice_xmlrpc',62),(487,'repository/alfresco:view','read',70,'repository_alfresco',0),(488,'repository/areafiles:view','read',70,'repository_areafiles',0),(489,'repository/boxnet:view','read',70,'repository_boxnet',0),(490,'repository/coursefiles:view','read',70,'repository_coursefiles',0),(491,'repository/dropbox:view','read',70,'repository_dropbox',0),(492,'repository/equella:view','read',70,'repository_equella',0),(493,'repository/filesystem:view','read',70,'repository_filesystem',0),(494,'repository/flickr:view','read',70,'repository_flickr',0),(495,'repository/flickr_public:view','read',70,'repository_flickr_public',0),(496,'repository/googledocs:view','read',70,'repository_googledocs',0),(497,'repository/local:view','read',70,'repository_local',0),(498,'repository/merlot:view','read',70,'repository_merlot',0),(499,'repository/picasa:view','read',70,'repository_picasa',0),(500,'repository/recent:view','read',70,'repository_recent',0),(501,'repository/s3:view','read',70,'repository_s3',0),(502,'repository/skydrive:view','read',70,'repository_skydrive',0),(503,'repository/upload:view','read',70,'repository_upload',0),(504,'repository/url:view','read',70,'repository_url',0),(505,'repository/user:view','read',70,'repository_user',0),(506,'repository/webdav:view','read',70,'repository_webdav',0),(507,'repository/wikimedia:view','read',70,'repository_wikimedia',0),(508,'repository/youtube:view','read',70,'repository_youtube',0),(509,'tool/customlang:view','read',10,'tool_customlang',2),(510,'tool/customlang:edit','write',10,'tool_customlang',6),(511,'tool/monitor:subscribe','read',50,'tool_monitor',8),(512,'tool/monitor:managerules','write',50,'tool_monitor',4),(513,'tool/monitor:managetool','write',10,'tool_monitor',4),(514,'tool/uploaduser:uploaduserpictures','write',10,'tool_uploaduser',16),(515,'booktool/exportimscp:export','read',70,'booktool_exportimscp',0),(516,'booktool/importhtml:import','write',70,'booktool_importhtml',4),(517,'booktool/print:print','read',70,'booktool_print',0),(518,'quiz/grading:viewstudentnames','read',70,'quiz_grading',0),(519,'quiz/grading:viewidnumber','read',70,'quiz_grading',0),(520,'quiz/statistics:view','read',70,'quiz_statistics',0),(521,'block/mnv_courseenrollment:myaddinstance','write',10,'block_mnv_courseenrollment',0),(522,'block/mnv_courseenrollment:addinstance','write',80,'block_mnv_courseenrollment',20),(523,'block/mnv_gradereturn:myaddinstance','write',10,'block_mnv_gradereturn',0),(524,'block/mnv_gradereturn:addinstance','write',80,'block_mnv_gradereturn',20);
/*!40000 ALTER TABLE `mdl_capabilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_chat`
--

DROP TABLE IF EXISTS `mdl_chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_chat` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext NOT NULL,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `keepdays` bigint(11) NOT NULL DEFAULT '0',
  `studentlogs` smallint(4) NOT NULL DEFAULT '0',
  `chattime` bigint(10) NOT NULL DEFAULT '0',
  `schedule` smallint(4) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_chat_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Each of these is a chat room';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_chat`
--

LOCK TABLES `mdl_chat` WRITE;
/*!40000 ALTER TABLE `mdl_chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_chat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_chat_messages`
--

DROP TABLE IF EXISTS `mdl_chat_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_chat_messages` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `chatid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `groupid` bigint(10) NOT NULL DEFAULT '0',
  `system` tinyint(1) NOT NULL DEFAULT '0',
  `message` longtext NOT NULL,
  `timestamp` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_chatmess_use_ix` (`userid`),
  KEY `mdl_chatmess_gro_ix` (`groupid`),
  KEY `mdl_chatmess_timcha_ix` (`timestamp`,`chatid`),
  KEY `mdl_chatmess_cha_ix` (`chatid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores all the actual chat messages';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_chat_messages`
--

LOCK TABLES `mdl_chat_messages` WRITE;
/*!40000 ALTER TABLE `mdl_chat_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_chat_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_chat_messages_current`
--

DROP TABLE IF EXISTS `mdl_chat_messages_current`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_chat_messages_current` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `chatid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `groupid` bigint(10) NOT NULL DEFAULT '0',
  `system` tinyint(1) NOT NULL DEFAULT '0',
  `message` longtext NOT NULL,
  `timestamp` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_chatmesscurr_use_ix` (`userid`),
  KEY `mdl_chatmesscurr_gro_ix` (`groupid`),
  KEY `mdl_chatmesscurr_timcha_ix` (`timestamp`,`chatid`),
  KEY `mdl_chatmesscurr_cha_ix` (`chatid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores current session';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_chat_messages_current`
--

LOCK TABLES `mdl_chat_messages_current` WRITE;
/*!40000 ALTER TABLE `mdl_chat_messages_current` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_chat_messages_current` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_chat_users`
--

DROP TABLE IF EXISTS `mdl_chat_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_chat_users` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `chatid` bigint(11) NOT NULL DEFAULT '0',
  `userid` bigint(11) NOT NULL DEFAULT '0',
  `groupid` bigint(11) NOT NULL DEFAULT '0',
  `version` varchar(16) NOT NULL DEFAULT '',
  `ip` varchar(45) NOT NULL DEFAULT '',
  `firstping` bigint(10) NOT NULL DEFAULT '0',
  `lastping` bigint(10) NOT NULL DEFAULT '0',
  `lastmessageping` bigint(10) NOT NULL DEFAULT '0',
  `sid` varchar(32) NOT NULL DEFAULT '',
  `course` bigint(10) NOT NULL DEFAULT '0',
  `lang` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_chatuser_use_ix` (`userid`),
  KEY `mdl_chatuser_las_ix` (`lastping`),
  KEY `mdl_chatuser_gro_ix` (`groupid`),
  KEY `mdl_chatuser_cha_ix` (`chatid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Keeps track of which users are in which chat rooms';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_chat_users`
--

LOCK TABLES `mdl_chat_users` WRITE;
/*!40000 ALTER TABLE `mdl_chat_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_chat_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_choice`
--

DROP TABLE IF EXISTS `mdl_choice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_choice` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext NOT NULL,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `publish` tinyint(2) NOT NULL DEFAULT '0',
  `showresults` tinyint(2) NOT NULL DEFAULT '0',
  `display` smallint(4) NOT NULL DEFAULT '0',
  `allowupdate` tinyint(2) NOT NULL DEFAULT '0',
  `allowmultiple` tinyint(2) NOT NULL DEFAULT '0',
  `showunanswered` tinyint(2) NOT NULL DEFAULT '0',
  `limitanswers` tinyint(2) NOT NULL DEFAULT '0',
  `timeopen` bigint(10) NOT NULL DEFAULT '0',
  `timeclose` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `completionsubmit` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_choi_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Available choices are stored here';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_choice`
--

LOCK TABLES `mdl_choice` WRITE;
/*!40000 ALTER TABLE `mdl_choice` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_choice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_choice_answers`
--

DROP TABLE IF EXISTS `mdl_choice_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_choice_answers` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `choiceid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `optionid` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_choiansw_use_ix` (`userid`),
  KEY `mdl_choiansw_cho_ix` (`choiceid`),
  KEY `mdl_choiansw_opt_ix` (`optionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='choices performed by users';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_choice_answers`
--

LOCK TABLES `mdl_choice_answers` WRITE;
/*!40000 ALTER TABLE `mdl_choice_answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_choice_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_choice_options`
--

DROP TABLE IF EXISTS `mdl_choice_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_choice_options` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `choiceid` bigint(10) NOT NULL DEFAULT '0',
  `text` longtext,
  `maxanswers` bigint(10) DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_choiopti_cho_ix` (`choiceid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='available options to choice';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_choice_options`
--

LOCK TABLES `mdl_choice_options` WRITE;
/*!40000 ALTER TABLE `mdl_choice_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_choice_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_cohort`
--

DROP TABLE IF EXISTS `mdl_cohort`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_cohort` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `contextid` bigint(10) NOT NULL,
  `name` varchar(254) NOT NULL DEFAULT '',
  `idnumber` varchar(100) DEFAULT NULL,
  `description` longtext,
  `descriptionformat` tinyint(2) NOT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `component` varchar(100) NOT NULL DEFAULT '',
  `timecreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_coho_con_ix` (`contextid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Each record represents one cohort (aka site-wide group).';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_cohort`
--

LOCK TABLES `mdl_cohort` WRITE;
/*!40000 ALTER TABLE `mdl_cohort` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_cohort` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_cohort_members`
--

DROP TABLE IF EXISTS `mdl_cohort_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_cohort_members` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `cohortid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `timeadded` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_cohomemb_cohuse_uix` (`cohortid`,`userid`),
  KEY `mdl_cohomemb_coh_ix` (`cohortid`),
  KEY `mdl_cohomemb_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Link a user to a cohort.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_cohort_members`
--

LOCK TABLES `mdl_cohort_members` WRITE;
/*!40000 ALTER TABLE `mdl_cohort_members` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_cohort_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_comments`
--

DROP TABLE IF EXISTS `mdl_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_comments` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `contextid` bigint(10) NOT NULL,
  `commentarea` varchar(255) NOT NULL DEFAULT '',
  `itemid` bigint(10) NOT NULL,
  `content` longtext NOT NULL,
  `format` tinyint(2) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL,
  `timecreated` bigint(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='moodle comments module';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_comments`
--

LOCK TABLES `mdl_comments` WRITE;
/*!40000 ALTER TABLE `mdl_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_config`
--

DROP TABLE IF EXISTS `mdl_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_config` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `value` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_conf_nam_uix` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=468 DEFAULT CHARSET=utf8 COMMENT='Moodle configuration variables';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_config`
--

LOCK TABLES `mdl_config` WRITE;
/*!40000 ALTER TABLE `mdl_config` DISABLE KEYS */;
INSERT INTO `mdl_config` VALUES (2,'rolesactive','1'),(3,'auth','email'),(4,'auth_pop3mailbox','INBOX'),(5,'enrol_plugins_enabled','manual,guest,self,cohort'),(6,'theme','clean'),(7,'filter_multilang_converted','1'),(8,'siteidentifier','vGe34TkrEazivOCYp2Yqv0xSFSYqDu5M172.20.0.21'),(9,'backup_version','2008111700'),(10,'backup_release','2.0 dev'),(11,'mnet_dispatcher_mode','off'),(12,'sessiontimeout','7200'),(13,'stringfilters',''),(14,'filterall','0'),(15,'texteditors','atto,tinymce,textarea'),(16,'upgrade_minmaxgradestepignored','1'),(17,'upgrade_extracreditweightsstepignored','1'),(18,'mnet_localhost_id','1'),(19,'mnet_all_hosts_id','2'),(20,'siteguest','1'),(21,'siteadmins','2'),(22,'themerev','1443029459'),(23,'jsrev','1443029459'),(24,'gdversion','2'),(25,'licenses','unknown,allrightsreserved,public,cc,cc-nd,cc-nc-nd,cc-nc,cc-nc-sa,cc-sa'),(26,'version','2014111006.09'),(27,'enableoutcomes','0'),(28,'usecomments','1'),(29,'usetags','1'),(30,'enablenotes','1'),(31,'enableportfolios','0'),(32,'enablewebservices','0'),(33,'messaging','1'),(34,'messaginghidereadnotifications','0'),(35,'messagingdeletereadnotificationsdelay','604800'),(36,'messagingallowemailoverride','0'),(37,'enablestats','0'),(38,'enablerssfeeds','0'),(39,'enableblogs','1'),(40,'enablecompletion','0'),(41,'completiondefault','1'),(42,'enableavailability','0'),(43,'enableplagiarism','0'),(44,'enablebadges','1'),(45,'defaultpreference_maildisplay','2'),(46,'defaultpreference_mailformat','1'),(47,'defaultpreference_maildigest','0'),(48,'defaultpreference_autosubscribe','1'),(49,'defaultpreference_trackforums','0'),(50,'autologinguests','0'),(51,'hiddenuserfields',''),(52,'showuseridentity','email'),(53,'fullnamedisplay','language'),(54,'alternativefullnameformat','language'),(55,'maxusersperpage','100'),(56,'enablegravatar','0'),(57,'gravatardefaulturl','mm'),(58,'enablecourserequests','0'),(59,'defaultrequestcategory','1'),(60,'requestcategoryselection','0'),(61,'courserequestnotify',''),(62,'grade_profilereport','user'),(63,'grade_aggregationposition','1'),(64,'grade_includescalesinaggregation','1'),(65,'grade_hiddenasdate','0'),(66,'gradepublishing','0'),(67,'grade_export_displaytype','1'),(68,'grade_export_decimalpoints','2'),(69,'grade_navmethod','0'),(70,'grade_export_userprofilefields','firstname,lastname,idnumber,institution,department,email'),(71,'grade_export_customprofilefields',''),(72,'recovergradesdefault','0'),(73,'gradeexport',''),(74,'unlimitedgrades','0'),(75,'grade_report_showmin','1'),(76,'gradepointmax','100'),(77,'gradepointdefault','100'),(78,'grade_minmaxtouse','1'),(79,'grade_hideforcedsettings','1'),(80,'grade_aggregation','13'),(81,'grade_aggregation_flag','0'),(82,'grade_aggregations_visible','13'),(83,'grade_aggregateonlygraded','1'),(84,'grade_aggregateonlygraded_flag','2'),(85,'grade_aggregateoutcomes','0'),(86,'grade_aggregateoutcomes_flag','2'),(87,'grade_keephigh','0'),(88,'grade_keephigh_flag','3'),(89,'grade_droplow','0'),(90,'grade_droplow_flag','2'),(91,'grade_overridecat','1'),(92,'grade_displaytype','1'),(93,'grade_decimalpoints','2'),(94,'grade_item_advanced','iteminfo,idnumber,gradepass,plusfactor,multfactor,display,decimals,hiddenuntil,locktime'),(95,'grade_report_studentsperpage','100'),(96,'grade_report_showonlyactiveenrol','1'),(97,'grade_report_quickgrading','1'),(98,'grade_report_showquickfeedback','0'),(99,'grade_report_meanselection','1'),(100,'grade_report_enableajax','0'),(101,'grade_report_showcalculations','1'),(102,'grade_report_showeyecons','0'),(103,'grade_report_showaverages','1'),(104,'grade_report_showlocks','0'),(105,'grade_report_showranges','0'),(106,'grade_report_showanalysisicon','1'),(107,'grade_report_showuserimage','1'),(108,'grade_report_showactivityicons','1'),(109,'grade_report_shownumberofgrades','0'),(110,'grade_report_averagesdisplaytype','inherit'),(111,'grade_report_rangesdisplaytype','inherit'),(112,'grade_report_averagesdecimalpoints','inherit'),(113,'grade_report_rangesdecimalpoints','inherit'),(114,'grade_report_historyperpage','50'),(115,'grade_report_overview_showrank','0'),(116,'grade_report_overview_showtotalsifcontainhidden','0'),(117,'grade_report_user_showrank','0'),(118,'grade_report_user_showpercentage','1'),(119,'grade_report_user_showgrade','1'),(120,'grade_report_user_showfeedback','1'),(121,'grade_report_user_showrange','1'),(122,'grade_report_user_showweight','1'),(123,'grade_report_user_showaverage','0'),(124,'grade_report_user_showlettergrade','0'),(125,'grade_report_user_rangedecimals','0'),(126,'grade_report_user_showhiddenitems','1'),(127,'grade_report_user_showtotalsifcontainhidden','0'),(128,'grade_report_user_showcontributiontocoursetotal','1'),(129,'badges_defaultissuername',''),(130,'badges_defaultissuercontact',''),(131,'badges_badgesalt','badges1435339751'),(132,'badges_allowexternalbackpack','1'),(133,'badges_allowcoursebadges','1'),(134,'timezone','99'),(135,'forcetimezone','99'),(136,'country','0'),(137,'defaultcity',''),(138,'geoipfile','/var/moodledata/geoip/GeoLiteCity.dat'),(139,'googlemapkey3',''),(140,'allcountrycodes',''),(141,'autolang','1'),(142,'lang','en'),(143,'langmenu','1'),(144,'langlist',''),(145,'langrev','1443029459'),(146,'langcache','1'),(147,'langstringcache','1'),(148,'locale',''),(149,'latinexcelexport','0'),(151,'authloginviaemail','0'),(152,'authpreventaccountcreation','0'),(153,'loginpageautofocus','0'),(154,'guestloginbutton','1'),(155,'alternateloginurl',''),(156,'forgottenpasswordurl',''),(157,'auth_instructions',''),(158,'allowemailaddresses',''),(159,'denyemailaddresses',''),(160,'verifychangedemail','1'),(161,'recaptchapublickey',''),(162,'recaptchaprivatekey',''),(163,'filteruploadedfiles','0'),(164,'filtermatchoneperpage','0'),(165,'filtermatchonepertext','0'),(166,'sitedefaultlicense','allrightsreserved'),(167,'portfolio_moderate_filesize_threshold','1048576'),(168,'portfolio_high_filesize_threshold','5242880'),(169,'portfolio_moderate_db_threshold','20'),(170,'portfolio_high_db_threshold','50'),(171,'repositorycacheexpire','120'),(172,'repositorygetfiletimeout','30'),(173,'repositorysyncfiletimeout','1'),(174,'repositorysyncimagetimeout','3'),(175,'repositoryallowexternallinks','1'),(176,'legacyfilesinnewcourses','0'),(177,'legacyfilesaddallowed','1'),(178,'mobilecssurl',''),(179,'enablewsdocumentation','0'),(180,'allowbeforeblock','0'),(181,'allowedip',''),(182,'blockedip',''),(183,'protectusernames','1'),(184,'forcelogin','0'),(185,'forceloginforprofiles','1'),(186,'forceloginforprofileimage','0'),(187,'opentogoogle','0'),(188,'maxbytes','0'),(189,'userquota','104857600'),(190,'allowobjectembed','0'),(191,'enabletrusttext','0'),(192,'maxeditingtime','1800'),(193,'extendedusernamechars','0'),(194,'sitepolicy',''),(195,'sitepolicyguest',''),(196,'keeptagnamecase','1'),(197,'profilesforenrolledusersonly','1'),(198,'cronclionly','0'),(199,'cronremotepassword',''),(200,'lockoutthreshold','0'),(201,'lockoutwindow','1800'),(202,'lockoutduration','1800'),(203,'passwordpolicy','1'),(204,'minpasswordlength','8'),(205,'minpassworddigits','1'),(206,'minpasswordlower','1'),(207,'minpasswordupper','1'),(208,'minpasswordnonalphanum','1'),(209,'maxconsecutiveidentchars','0'),(210,'pwresettime','1800'),(211,'groupenrolmentkeypolicy','1'),(212,'disableuserimages','0'),(213,'emailchangeconfirmation','1'),(214,'rememberusername','2'),(215,'strictformsrequired','0'),(216,'loginhttps','0'),(217,'cookiesecure','0'),(218,'cookiehttponly','0'),(219,'allowframembedding','0'),(220,'loginpasswordautocomplete','0'),(221,'displayloginfailures','0'),(222,'notifyloginfailures',''),(223,'notifyloginthreshold','10'),(224,'runclamonupload','0'),(225,'pathtoclam',''),(226,'quarantinedir',''),(227,'clamfailureonupload','donothing'),(228,'themelist',''),(229,'themedesignermode','0'),(230,'allowuserthemes','0'),(231,'allowcoursethemes','0'),(232,'allowcategorythemes','0'),(233,'allowthemechangeonurl','0'),(234,'allowuserblockhiding','1'),(235,'allowblockstodock','1'),(236,'custommenuitems',''),(237,'customusermenuitems','messages,message|/message/index.php|message\nmyfiles,moodle|/user/files.php|download\nmybadges,badges|/badges/mybadges.php|award'),(238,'enabledevicedetection','1'),(239,'devicedetectregex','[]'),(240,'calendartype','gregorian'),(241,'calendar_adminseesall','0'),(242,'calendar_site_timeformat','0'),(243,'calendar_startwday','0'),(244,'calendar_weekend','65'),(245,'calendar_lookahead','21'),(246,'calendar_maxevents','10'),(247,'enablecalendarexport','1'),(248,'calendar_customexport','1'),(249,'calendar_exportlookahead','365'),(250,'calendar_exportlookback','5'),(251,'calendar_exportsalt','rdGA8CZoHuNAuzM0jf0fWK1vtnDOQaqSCQ1hyyYyx4DYZP65xaelqJdInZB7'),(252,'calendar_showicalsource','1'),(253,'useblogassociations','1'),(254,'bloglevel','4'),(255,'useexternalblogs','1'),(256,'externalblogcrontime','86400'),(257,'maxexternalblogsperuser','1'),(258,'blogusecomments','1'),(259,'blogshowcommentscount','1'),(260,'defaulthomepage','0'),(261,'allowguestmymoodle','1'),(262,'navshowfullcoursenames','0'),(263,'navshowcategories','1'),(264,'navshowmycoursecategories','0'),(265,'navshowallcourses','0'),(266,'navexpandmycourses','1'),(267,'navsortmycoursessort','sortorder'),(268,'navcourselimit','20'),(269,'usesitenameforsitepages','0'),(270,'linkadmincategories','0'),(271,'navshowfrontpagemods','1'),(272,'navadduserpostslinks','1'),(273,'formatstringstriptags','1'),(274,'emoticons','[{\"text\":\":-)\",\"imagename\":\"s\\/smiley\",\"imagecomponent\":\"core\",\"altidentifier\":\"smiley\",\"altcomponent\":\"core_pix\"},{\"text\":\":)\",\"imagename\":\"s\\/smiley\",\"imagecomponent\":\"core\",\"altidentifier\":\"smiley\",\"altcomponent\":\"core_pix\"},{\"text\":\":-D\",\"imagename\":\"s\\/biggrin\",\"imagecomponent\":\"core\",\"altidentifier\":\"biggrin\",\"altcomponent\":\"core_pix\"},{\"text\":\";-)\",\"imagename\":\"s\\/wink\",\"imagecomponent\":\"core\",\"altidentifier\":\"wink\",\"altcomponent\":\"core_pix\"},{\"text\":\":-\\/\",\"imagename\":\"s\\/mixed\",\"imagecomponent\":\"core\",\"altidentifier\":\"mixed\",\"altcomponent\":\"core_pix\"},{\"text\":\"V-.\",\"imagename\":\"s\\/thoughtful\",\"imagecomponent\":\"core\",\"altidentifier\":\"thoughtful\",\"altcomponent\":\"core_pix\"},{\"text\":\":-P\",\"imagename\":\"s\\/tongueout\",\"imagecomponent\":\"core\",\"altidentifier\":\"tongueout\",\"altcomponent\":\"core_pix\"},{\"text\":\":-p\",\"imagename\":\"s\\/tongueout\",\"imagecomponent\":\"core\",\"altidentifier\":\"tongueout\",\"altcomponent\":\"core_pix\"},{\"text\":\"B-)\",\"imagename\":\"s\\/cool\",\"imagecomponent\":\"core\",\"altidentifier\":\"cool\",\"altcomponent\":\"core_pix\"},{\"text\":\"^-)\",\"imagename\":\"s\\/approve\",\"imagecomponent\":\"core\",\"altidentifier\":\"approve\",\"altcomponent\":\"core_pix\"},{\"text\":\"8-)\",\"imagename\":\"s\\/wideeyes\",\"imagecomponent\":\"core\",\"altidentifier\":\"wideeyes\",\"altcomponent\":\"core_pix\"},{\"text\":\":o)\",\"imagename\":\"s\\/clown\",\"imagecomponent\":\"core\",\"altidentifier\":\"clown\",\"altcomponent\":\"core_pix\"},{\"text\":\":-(\",\"imagename\":\"s\\/sad\",\"imagecomponent\":\"core\",\"altidentifier\":\"sad\",\"altcomponent\":\"core_pix\"},{\"text\":\":(\",\"imagename\":\"s\\/sad\",\"imagecomponent\":\"core\",\"altidentifier\":\"sad\",\"altcomponent\":\"core_pix\"},{\"text\":\"8-.\",\"imagename\":\"s\\/shy\",\"imagecomponent\":\"core\",\"altidentifier\":\"shy\",\"altcomponent\":\"core_pix\"},{\"text\":\":-I\",\"imagename\":\"s\\/blush\",\"imagecomponent\":\"core\",\"altidentifier\":\"blush\",\"altcomponent\":\"core_pix\"},{\"text\":\":-X\",\"imagename\":\"s\\/kiss\",\"imagecomponent\":\"core\",\"altidentifier\":\"kiss\",\"altcomponent\":\"core_pix\"},{\"text\":\"8-o\",\"imagename\":\"s\\/surprise\",\"imagecomponent\":\"core\",\"altidentifier\":\"surprise\",\"altcomponent\":\"core_pix\"},{\"text\":\"P-|\",\"imagename\":\"s\\/blackeye\",\"imagecomponent\":\"core\",\"altidentifier\":\"blackeye\",\"altcomponent\":\"core_pix\"},{\"text\":\"8-[\",\"imagename\":\"s\\/angry\",\"imagecomponent\":\"core\",\"altidentifier\":\"angry\",\"altcomponent\":\"core_pix\"},{\"text\":\"(grr)\",\"imagename\":\"s\\/angry\",\"imagecomponent\":\"core\",\"altidentifier\":\"angry\",\"altcomponent\":\"core_pix\"},{\"text\":\"xx-P\",\"imagename\":\"s\\/dead\",\"imagecomponent\":\"core\",\"altidentifier\":\"dead\",\"altcomponent\":\"core_pix\"},{\"text\":\"|-.\",\"imagename\":\"s\\/sleepy\",\"imagecomponent\":\"core\",\"altidentifier\":\"sleepy\",\"altcomponent\":\"core_pix\"},{\"text\":\"}-]\",\"imagename\":\"s\\/evil\",\"imagecomponent\":\"core\",\"altidentifier\":\"evil\",\"altcomponent\":\"core_pix\"},{\"text\":\"(h)\",\"imagename\":\"s\\/heart\",\"imagecomponent\":\"core\",\"altidentifier\":\"heart\",\"altcomponent\":\"core_pix\"},{\"text\":\"(heart)\",\"imagename\":\"s\\/heart\",\"imagecomponent\":\"core\",\"altidentifier\":\"heart\",\"altcomponent\":\"core_pix\"},{\"text\":\"(y)\",\"imagename\":\"s\\/yes\",\"imagecomponent\":\"core\",\"altidentifier\":\"yes\",\"altcomponent\":\"core\"},{\"text\":\"(n)\",\"imagename\":\"s\\/no\",\"imagecomponent\":\"core\",\"altidentifier\":\"no\",\"altcomponent\":\"core\"},{\"text\":\"(martin)\",\"imagename\":\"s\\/martin\",\"imagecomponent\":\"core\",\"altidentifier\":\"martin\",\"altcomponent\":\"core_pix\"},{\"text\":\"( )\",\"imagename\":\"s\\/egg\",\"imagecomponent\":\"core\",\"altidentifier\":\"egg\",\"altcomponent\":\"core_pix\"}]'),(275,'core_media_enable_youtube','1'),(276,'core_media_enable_vimeo','0'),(277,'core_media_enable_mp3','1'),(278,'core_media_enable_flv','1'),(279,'core_media_enable_swf','1'),(280,'core_media_enable_html5audio','1'),(281,'core_media_enable_html5video','1'),(282,'core_media_enable_qt','1'),(283,'core_media_enable_wmp','1'),(284,'core_media_enable_rm','1'),(285,'docroot','http://docs.moodle.org'),(286,'doclang',''),(287,'doctonewwindow','0'),(288,'courselistshortnames','0'),(289,'coursesperpage','20'),(290,'courseswithsummarieslimit','10'),(291,'courseoverviewfileslimit','1'),(292,'courseoverviewfilesext','.jpg,.gif,.png'),(293,'useexternalyui','0'),(294,'yuicomboloading','1'),(295,'cachejs','1'),(296,'modchooserdefault','1'),(297,'modeditingmenu','1'),(298,'blockeditingmenu','1'),(299,'additionalhtmlhead',''),(300,'additionalhtmltopofbody',''),(301,'additionalhtmlfooter',''),(302,'pathtodu',''),(303,'aspellpath',''),(304,'pathtodot',''),(305,'pathtogs','/usr/bin/gs'),(306,'supportpage',''),(307,'dbsessions','0'),(308,'sessioncookie',''),(309,'sessioncookiepath',''),(310,'sessioncookiedomain',''),(311,'statsfirstrun','none'),(312,'statsmaxruntime','0'),(313,'statsruntimedays','31'),(314,'statsruntimestarthour','0'),(315,'statsruntimestartminute','0'),(316,'statsuserthreshold','0'),(317,'slasharguments','1'),(318,'getremoteaddrconf','0'),(319,'proxyhost',''),(320,'proxyport','0'),(321,'proxytype','HTTP'),(322,'proxyuser',''),(323,'proxypassword',''),(324,'proxybypass','localhost, 127.0.0.1'),(325,'maintenance_enabled','0'),(326,'maintenance_message',''),(327,'deleteunconfirmed','168'),(328,'deleteincompleteusers','0'),(329,'disablegradehistory','0'),(330,'gradehistorylifetime','0'),(331,'extramemorylimit','512M'),(332,'maxtimelimit','0'),(333,'curlcache','120'),(334,'curltimeoutkbitrate','56'),(335,'updateautocheck','1'),(336,'updateautodeploy','0'),(337,'updateminmaturity','200'),(338,'updatenotifybuilds','0'),(339,'enablesafebrowserintegration','0'),(340,'dndallowtextandlinks','0'),(341,'enablecssoptimiser','0'),(342,'enabletgzbackups','0'),(343,'debug','0'),(344,'debugdisplay','0'),(345,'debugsmtp','0'),(346,'perfdebug','7'),(347,'debugstringids','0'),(348,'debugvalidators','0'),(349,'debugpageinfo','0'),(350,'profilingenabled','0'),(351,'profilingincluded',''),(352,'profilingexcluded',''),(353,'profilingautofrec','0'),(354,'profilingallowme','0'),(355,'profilingallowall','0'),(356,'profilinglifetime','1440'),(357,'profilingimportprefix','(I)'),(358,'release','2.8.6+ (Build: 20150625)'),(359,'branch','28'),(360,'localcachedirpurged','1443029459'),(361,'scheduledtaskreset','1443029459'),(362,'allversionshash','4ff43335525df4d3b94965f46eebadf0d5a28bc6'),(364,'notloggedinroleid','6'),(365,'guestroleid','6'),(366,'defaultuserroleid','7'),(367,'creatornewroleid','3'),(368,'restorernewroleid','3'),(369,'gradebookroles','5'),(370,'chat_method','ajax'),(371,'chat_refresh_userlist','10'),(372,'chat_old_ping','35'),(373,'chat_refresh_room','5'),(374,'chat_normal_updatemode','jsupdate'),(375,'chat_serverhost','172.20.0.21'),(376,'chat_serverip','127.0.0.1'),(377,'chat_serverport','9111'),(378,'chat_servermax','100'),(379,'data_enablerssfeeds','0'),(380,'feedback_allowfullanonymous','0'),(381,'forum_displaymode','3'),(382,'forum_replytouser','1'),(383,'forum_shortpost','300'),(384,'forum_longpost','600'),(385,'forum_manydiscussions','100'),(386,'forum_maxbytes','512000'),(387,'forum_maxattachments','9'),(388,'forum_trackingtype','1'),(389,'forum_trackreadposts','1'),(390,'forum_allowforcedreadtracking','0'),(391,'forum_oldpostdays','14'),(392,'forum_usermarksread','0'),(393,'forum_cleanreadtime','2'),(394,'digestmailtime','17'),(395,'forum_enablerssfeeds','0'),(396,'forum_enabletimedposts','0'),(397,'glossary_entbypage','10'),(398,'glossary_dupentries','0'),(399,'glossary_allowcomments','0'),(400,'glossary_linkbydefault','1'),(401,'glossary_defaultapproval','1'),(402,'glossary_enablerssfeeds','0'),(403,'glossary_linkentries','0'),(404,'glossary_casesensitive','0'),(405,'glossary_fullmatch','0'),(406,'lesson_slideshowwidth','640'),(407,'lesson_slideshowheight','480'),(408,'lesson_slideshowbgcolor','#FFFFFF'),(409,'lesson_mediawidth','640'),(410,'lesson_mediaheight','480'),(411,'lesson_mediaclose','0'),(412,'lesson_maxhighscores','10'),(413,'lesson_maxanswers','4'),(414,'lesson_defaultnextpage','0'),(415,'block_course_list_adminview','all'),(416,'block_course_list_hideallcourseslink','0'),(417,'block_html_allowcssclasses','0'),(418,'block_online_users_timetosee','5'),(419,'block_rss_client_num_entries','5'),(420,'block_rss_client_timeout','30'),(421,'block_tags_showcoursetags','0'),(422,'filter_censor_badwords',''),(423,'filter_multilang_force_old','0'),(424,'logguests','1'),(425,'loglifetime','0'),(426,'airnotifierurl','https://messages.moodle.net'),(427,'airnotifierport','443'),(428,'airnotifiermobileappname','com.moodle.moodlemobile'),(429,'airnotifierappname','commoodlemoodlemobile'),(430,'airnotifieraccesskey',''),(431,'smtphosts',''),(432,'smtpsecure',''),(433,'smtpuser',''),(434,'smtppass',''),(435,'smtpmaxbulk','1'),(436,'noreplyaddress','noreply@172.20.0.21'),(437,'emailonlyfromnoreplyaddress','0'),(438,'sitemailcharset','0'),(439,'allowusermailcharset','0'),(440,'allowattachments','1'),(441,'mailnewline','LF'),(442,'jabberhost',''),(443,'jabberserver',''),(444,'jabberusername',''),(445,'jabberpassword',''),(446,'jabberport','5222'),(447,'profileroles','5,4,3'),(448,'coursecontact','3'),(449,'frontpage','6'),(450,'frontpageloggedin','6'),(451,'maxcategorydepth','2'),(452,'frontpagecourselimit','200'),(453,'commentsperpage','15'),(454,'defaultfrontpageroleid','8'),(455,'supportname','Admin User'),(456,'supportemail','dude@example.com'),(457,'messageinbound_enabled','0'),(458,'messageinbound_mailbox',''),(459,'messageinbound_domain',''),(460,'messageinbound_host',''),(461,'messageinbound_hostssl','ssl'),(462,'messageinbound_hostuser',''),(463,'messageinbound_hostpass',''),(464,'registerauth','email');
/*!40000 ALTER TABLE `mdl_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_config_log`
--

DROP TABLE IF EXISTS `mdl_config_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_config_log` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  `plugin` varchar(100) DEFAULT NULL,
  `name` varchar(100) NOT NULL DEFAULT '',
  `value` longtext,
  `oldvalue` longtext,
  PRIMARY KEY (`id`),
  KEY `mdl_conflog_tim_ix` (`timemodified`),
  KEY `mdl_conflog_use_ix` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=905 DEFAULT CHARSET=utf8 COMMENT='Changes done in server configuration through admin UI';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_config_log`
--

LOCK TABLES `mdl_config_log` WRITE;
/*!40000 ALTER TABLE `mdl_config_log` DISABLE KEYS */;
INSERT INTO `mdl_config_log` VALUES (1,0,1435339755,NULL,'enableoutcomes','0',NULL),(2,0,1435339755,NULL,'usecomments','1',NULL),(3,0,1435339755,NULL,'usetags','1',NULL),(4,0,1435339755,NULL,'enablenotes','1',NULL),(5,0,1435339755,NULL,'enableportfolios','0',NULL),(6,0,1435339755,NULL,'enablewebservices','0',NULL),(7,0,1435339755,NULL,'messaging','1',NULL),(8,0,1435339755,NULL,'messaginghidereadnotifications','0',NULL),(9,0,1435339755,NULL,'messagingdeletereadnotificationsdelay','604800',NULL),(10,0,1435339755,NULL,'messagingallowemailoverride','0',NULL),(11,0,1435339755,NULL,'enablestats','0',NULL),(12,0,1435339755,NULL,'enablerssfeeds','0',NULL),(13,0,1435339755,NULL,'enableblogs','1',NULL),(14,0,1435339755,NULL,'enablecompletion','0',NULL),(15,0,1435339755,NULL,'completiondefault','1',NULL),(16,0,1435339755,NULL,'enableavailability','0',NULL),(17,0,1435339755,NULL,'enableplagiarism','0',NULL),(18,0,1435339755,NULL,'enablebadges','1',NULL),(19,0,1435339755,NULL,'defaultpreference_maildisplay','2',NULL),(20,0,1435339755,NULL,'defaultpreference_mailformat','1',NULL),(21,0,1435339755,NULL,'defaultpreference_maildigest','0',NULL),(22,0,1435339755,NULL,'defaultpreference_autosubscribe','1',NULL),(23,0,1435339755,NULL,'defaultpreference_trackforums','0',NULL),(24,0,1435339755,NULL,'autologinguests','0',NULL),(25,0,1435339755,NULL,'hiddenuserfields','',NULL),(26,0,1435339755,NULL,'showuseridentity','email',NULL),(27,0,1435339755,NULL,'fullnamedisplay','language',NULL),(28,0,1435339755,NULL,'alternativefullnameformat','language',NULL),(29,0,1435339755,NULL,'maxusersperpage','100',NULL),(30,0,1435339755,NULL,'enablegravatar','0',NULL),(31,0,1435339755,NULL,'gravatardefaulturl','mm',NULL),(32,0,1435339755,'moodlecourse','visible','1',NULL),(33,0,1435339755,'moodlecourse','format','weeks',NULL),(34,0,1435339755,'moodlecourse','maxsections','52',NULL),(35,0,1435339755,'moodlecourse','numsections','10',NULL),(36,0,1435339755,'moodlecourse','hiddensections','0',NULL),(37,0,1435339755,'moodlecourse','coursedisplay','0',NULL),(38,0,1435339755,'moodlecourse','lang','',NULL),(39,0,1435339755,'moodlecourse','newsitems','5',NULL),(40,0,1435339755,'moodlecourse','showgrades','1',NULL),(41,0,1435339755,'moodlecourse','showreports','0',NULL),(42,0,1435339755,'moodlecourse','maxbytes','0',NULL),(43,0,1435339755,'moodlecourse','enablecompletion','0',NULL),(44,0,1435339755,'moodlecourse','groupmode','0',NULL),(45,0,1435339755,'moodlecourse','groupmodeforce','0',NULL),(46,0,1435339755,NULL,'enablecourserequests','0',NULL),(47,0,1435339755,NULL,'defaultrequestcategory','1',NULL),(48,0,1435339755,NULL,'requestcategoryselection','0',NULL),(49,0,1435339755,NULL,'courserequestnotify','',NULL),(50,0,1435339755,'backup','loglifetime','30',NULL),(51,0,1435339755,'backup','backup_general_users','1',NULL),(52,0,1435339755,'backup','backup_general_users_locked','',NULL),(53,0,1435339755,'backup','backup_general_anonymize','0',NULL),(54,0,1435339755,'backup','backup_general_anonymize_locked','',NULL),(55,0,1435339755,'backup','backup_general_role_assignments','1',NULL),(56,0,1435339755,'backup','backup_general_role_assignments_locked','',NULL),(57,0,1435339755,'backup','backup_general_activities','1',NULL),(58,0,1435339755,'backup','backup_general_activities_locked','',NULL),(59,0,1435339755,'backup','backup_general_blocks','1',NULL),(60,0,1435339755,'backup','backup_general_blocks_locked','',NULL),(61,0,1435339755,'backup','backup_general_filters','1',NULL),(62,0,1435339755,'backup','backup_general_filters_locked','',NULL),(63,0,1435339755,'backup','backup_general_comments','1',NULL),(64,0,1435339755,'backup','backup_general_comments_locked','',NULL),(65,0,1435339755,'backup','backup_general_badges','1',NULL),(66,0,1435339755,'backup','backup_general_badges_locked','',NULL),(67,0,1435339755,'backup','backup_general_userscompletion','1',NULL),(68,0,1435339755,'backup','backup_general_userscompletion_locked','',NULL),(69,0,1435339755,'backup','backup_general_logs','0',NULL),(70,0,1435339755,'backup','backup_general_logs_locked','',NULL),(71,0,1435339755,'backup','backup_general_histories','0',NULL),(72,0,1435339755,'backup','backup_general_histories_locked','',NULL),(73,0,1435339755,'backup','backup_general_questionbank','1',NULL),(74,0,1435339755,'backup','backup_general_questionbank_locked','',NULL),(75,0,1435339755,'backup','import_general_maxresults','10',NULL),(76,0,1435339755,'backup','backup_auto_active','0',NULL),(77,0,1435339755,'backup','backup_auto_weekdays','0000000',NULL),(78,0,1435339755,'backup','backup_auto_hour','0',NULL),(79,0,1435339755,'backup','backup_auto_minute','0',NULL),(80,0,1435339755,'backup','backup_auto_storage','0',NULL),(81,0,1435339755,'backup','backup_auto_destination','',NULL),(82,0,1435339755,'backup','backup_auto_keep','1',NULL),(83,0,1435339755,'backup','backup_shortname','0',NULL),(84,0,1435339755,'backup','backup_auto_skip_hidden','1',NULL),(85,0,1435339755,'backup','backup_auto_skip_modif_days','30',NULL),(86,0,1435339755,'backup','backup_auto_skip_modif_prev','0',NULL),(87,0,1435339755,'backup','backup_auto_users','1',NULL),(88,0,1435339755,'backup','backup_auto_role_assignments','1',NULL),(89,0,1435339755,'backup','backup_auto_activities','1',NULL),(90,0,1435339755,'backup','backup_auto_blocks','1',NULL),(91,0,1435339755,'backup','backup_auto_filters','1',NULL),(92,0,1435339755,'backup','backup_auto_comments','1',NULL),(93,0,1435339755,'backup','backup_auto_badges','1',NULL),(94,0,1435339755,'backup','backup_auto_userscompletion','1',NULL),(95,0,1435339755,'backup','backup_auto_logs','0',NULL),(96,0,1435339755,'backup','backup_auto_histories','0',NULL),(97,0,1435339755,'backup','backup_auto_questionbank','1',NULL),(98,0,1435339755,NULL,'grade_profilereport','user',NULL),(99,0,1435339755,NULL,'grade_aggregationposition','1',NULL),(100,0,1435339755,NULL,'grade_includescalesinaggregation','1',NULL),(101,0,1435339755,NULL,'grade_hiddenasdate','0',NULL),(102,0,1435339755,NULL,'gradepublishing','0',NULL),(103,0,1435339755,NULL,'grade_export_displaytype','1',NULL),(104,0,1435339755,NULL,'grade_export_decimalpoints','2',NULL),(105,0,1435339755,NULL,'grade_navmethod','0',NULL),(106,0,1435339755,NULL,'grade_export_userprofilefields','firstname,lastname,idnumber,institution,department,email',NULL),(107,0,1435339755,NULL,'grade_export_customprofilefields','',NULL),(108,0,1435339755,NULL,'recovergradesdefault','0',NULL),(109,0,1435339755,NULL,'gradeexport','',NULL),(110,0,1435339755,NULL,'unlimitedgrades','0',NULL),(111,0,1435339755,NULL,'grade_report_showmin','1',NULL),(112,0,1435339755,NULL,'gradepointmax','100',NULL),(113,0,1435339755,NULL,'gradepointdefault','100',NULL),(114,0,1435339755,NULL,'grade_minmaxtouse','1',NULL),(115,0,1435339755,NULL,'grade_hideforcedsettings','1',NULL),(116,0,1435339755,NULL,'grade_aggregation','13',NULL),(117,0,1435339755,NULL,'grade_aggregation_flag','0',NULL),(118,0,1435339755,NULL,'grade_aggregations_visible','13',NULL),(119,0,1435339755,NULL,'grade_aggregateonlygraded','1',NULL),(120,0,1435339755,NULL,'grade_aggregateonlygraded_flag','2',NULL),(121,0,1435339755,NULL,'grade_aggregateoutcomes','0',NULL),(122,0,1435339755,NULL,'grade_aggregateoutcomes_flag','2',NULL),(123,0,1435339755,NULL,'grade_keephigh','0',NULL),(124,0,1435339755,NULL,'grade_keephigh_flag','3',NULL),(125,0,1435339755,NULL,'grade_droplow','0',NULL),(126,0,1435339755,NULL,'grade_droplow_flag','2',NULL),(127,0,1435339756,NULL,'grade_overridecat','1',NULL),(128,0,1435339756,NULL,'grade_displaytype','1',NULL),(129,0,1435339756,NULL,'grade_decimalpoints','2',NULL),(130,0,1435339756,NULL,'grade_item_advanced','iteminfo,idnumber,gradepass,plusfactor,multfactor,display,decimals,hiddenuntil,locktime',NULL),(131,0,1435339756,NULL,'grade_report_studentsperpage','100',NULL),(132,0,1435339756,NULL,'grade_report_showonlyactiveenrol','1',NULL),(133,0,1435339756,NULL,'grade_report_quickgrading','1',NULL),(134,0,1435339756,NULL,'grade_report_showquickfeedback','0',NULL),(135,0,1435339756,NULL,'grade_report_meanselection','1',NULL),(136,0,1435339756,NULL,'grade_report_enableajax','0',NULL),(137,0,1435339756,NULL,'grade_report_showcalculations','1',NULL),(138,0,1435339756,NULL,'grade_report_showeyecons','0',NULL),(139,0,1435339756,NULL,'grade_report_showaverages','1',NULL),(140,0,1435339756,NULL,'grade_report_showlocks','0',NULL),(141,0,1435339756,NULL,'grade_report_showranges','0',NULL),(142,0,1435339756,NULL,'grade_report_showanalysisicon','1',NULL),(143,0,1435339756,NULL,'grade_report_showuserimage','1',NULL),(144,0,1435339756,NULL,'grade_report_showactivityicons','1',NULL),(145,0,1435339756,NULL,'grade_report_shownumberofgrades','0',NULL),(146,0,1435339756,NULL,'grade_report_averagesdisplaytype','inherit',NULL),(147,0,1435339756,NULL,'grade_report_rangesdisplaytype','inherit',NULL),(148,0,1435339756,NULL,'grade_report_averagesdecimalpoints','inherit',NULL),(149,0,1435339756,NULL,'grade_report_rangesdecimalpoints','inherit',NULL),(150,0,1435339756,NULL,'grade_report_historyperpage','50',NULL),(151,0,1435339756,NULL,'grade_report_overview_showrank','0',NULL),(152,0,1435339756,NULL,'grade_report_overview_showtotalsifcontainhidden','0',NULL),(153,0,1435339756,NULL,'grade_report_user_showrank','0',NULL),(154,0,1435339756,NULL,'grade_report_user_showpercentage','1',NULL),(155,0,1435339756,NULL,'grade_report_user_showgrade','1',NULL),(156,0,1435339756,NULL,'grade_report_user_showfeedback','1',NULL),(157,0,1435339756,NULL,'grade_report_user_showrange','1',NULL),(158,0,1435339756,NULL,'grade_report_user_showweight','1',NULL),(159,0,1435339756,NULL,'grade_report_user_showaverage','0',NULL),(160,0,1435339756,NULL,'grade_report_user_showlettergrade','0',NULL),(161,0,1435339756,NULL,'grade_report_user_rangedecimals','0',NULL),(162,0,1435339756,NULL,'grade_report_user_showhiddenitems','1',NULL),(163,0,1435339756,NULL,'grade_report_user_showtotalsifcontainhidden','0',NULL),(164,0,1435339756,NULL,'grade_report_user_showcontributiontocoursetotal','1',NULL),(165,0,1435339756,NULL,'badges_defaultissuername','',NULL),(166,0,1435339756,NULL,'badges_defaultissuercontact','',NULL),(167,0,1435339756,NULL,'badges_badgesalt','badges1435339751',NULL),(168,0,1435339756,NULL,'badges_allowexternalbackpack','1',NULL),(169,0,1435339756,NULL,'badges_allowcoursebadges','1',NULL),(170,0,1435339756,NULL,'timezone','99',NULL),(171,0,1435339756,NULL,'forcetimezone','99',NULL),(172,0,1435339756,NULL,'country','0',NULL),(173,0,1435339756,NULL,'defaultcity','',NULL),(174,0,1435339756,NULL,'geoipfile','/var/moodledata/geoip/GeoLiteCity.dat',NULL),(175,0,1435339756,NULL,'googlemapkey3','',NULL),(176,0,1435339756,NULL,'allcountrycodes','',NULL),(177,0,1435339756,NULL,'autolang','1',NULL),(178,0,1435339756,NULL,'lang','en',NULL),(179,0,1435339756,NULL,'langmenu','1',NULL),(180,0,1435339756,NULL,'langlist','',NULL),(181,0,1435339756,NULL,'langcache','1',NULL),(182,0,1435339756,NULL,'langstringcache','1',NULL),(183,0,1435339756,NULL,'locale','',NULL),(184,0,1435339756,NULL,'latinexcelexport','0',NULL),(185,0,1435339756,NULL,'registerauth','',NULL),(186,0,1435339756,NULL,'authloginviaemail','0',NULL),(187,0,1435339756,NULL,'authpreventaccountcreation','0',NULL),(188,0,1435339756,NULL,'loginpageautofocus','0',NULL),(189,0,1435339756,NULL,'guestloginbutton','1',NULL),(190,0,1435339756,NULL,'alternateloginurl','',NULL),(191,0,1435339756,NULL,'forgottenpasswordurl','',NULL),(192,0,1435339756,NULL,'auth_instructions','',NULL),(193,0,1435339756,NULL,'allowemailaddresses','',NULL),(194,0,1435339756,NULL,'denyemailaddresses','',NULL),(195,0,1435339756,NULL,'verifychangedemail','1',NULL),(196,0,1435339756,NULL,'recaptchapublickey','',NULL),(197,0,1435339756,NULL,'recaptchaprivatekey','',NULL),(198,0,1435339756,'cachestore_memcache','testservers','',NULL),(199,0,1435339756,'cachestore_memcached','testservers','',NULL),(200,0,1435339756,'cachestore_mongodb','testserver','',NULL),(201,0,1435339756,NULL,'filteruploadedfiles','0',NULL),(202,0,1435339756,NULL,'filtermatchoneperpage','0',NULL),(203,0,1435339756,NULL,'filtermatchonepertext','0',NULL),(204,0,1435339756,NULL,'sitedefaultlicense','allrightsreserved',NULL),(205,0,1435339756,NULL,'portfolio_moderate_filesize_threshold','1048576',NULL),(206,0,1435339756,NULL,'portfolio_high_filesize_threshold','5242880',NULL),(207,0,1435339756,NULL,'portfolio_moderate_db_threshold','20',NULL),(208,0,1435339756,NULL,'portfolio_high_db_threshold','50',NULL),(209,0,1435339756,'question_preview','behaviour','deferredfeedback',NULL),(210,0,1435339756,'question_preview','correctness','1',NULL),(211,0,1435339756,'question_preview','marks','2',NULL),(212,0,1435339756,'question_preview','markdp','2',NULL),(213,0,1435339756,'question_preview','feedback','1',NULL),(214,0,1435339756,'question_preview','generalfeedback','1',NULL),(215,0,1435339756,'question_preview','rightanswer','1',NULL),(216,0,1435339756,'question_preview','history','0',NULL),(217,0,1435339756,NULL,'repositorycacheexpire','120',NULL),(218,0,1435339756,NULL,'repositorygetfiletimeout','30',NULL),(219,0,1435339756,NULL,'repositorysyncfiletimeout','1',NULL),(220,0,1435339756,NULL,'repositorysyncimagetimeout','3',NULL),(221,0,1435339756,NULL,'repositoryallowexternallinks','1',NULL),(222,0,1435339756,NULL,'legacyfilesinnewcourses','0',NULL),(223,0,1435339756,NULL,'legacyfilesaddallowed','1',NULL),(224,0,1435339756,NULL,'mobilecssurl','',NULL),(225,0,1435339756,NULL,'enablewsdocumentation','0',NULL),(226,0,1435339756,NULL,'allowbeforeblock','0',NULL),(227,0,1435339756,NULL,'allowedip','',NULL),(228,0,1435339756,NULL,'blockedip','',NULL),(229,0,1435339756,NULL,'protectusernames','1',NULL),(230,0,1435339756,NULL,'forcelogin','0',NULL),(231,0,1435339756,NULL,'forceloginforprofiles','1',NULL),(232,0,1435339756,NULL,'forceloginforprofileimage','0',NULL),(233,0,1435339756,NULL,'opentogoogle','0',NULL),(234,0,1435339756,NULL,'maxbytes','0',NULL),(235,0,1435339756,NULL,'userquota','104857600',NULL),(236,0,1435339756,NULL,'allowobjectembed','0',NULL),(237,0,1435339756,NULL,'enabletrusttext','0',NULL),(238,0,1435339756,NULL,'maxeditingtime','1800',NULL),(239,0,1435339756,NULL,'extendedusernamechars','0',NULL),(240,0,1435339756,NULL,'sitepolicy','',NULL),(241,0,1435339756,NULL,'sitepolicyguest','',NULL),(242,0,1435339756,NULL,'keeptagnamecase','1',NULL),(243,0,1435339756,NULL,'profilesforenrolledusersonly','1',NULL),(244,0,1435339756,NULL,'cronclionly','0',NULL),(245,0,1435339756,NULL,'cronremotepassword','',NULL),(246,0,1435339756,NULL,'lockoutthreshold','0',NULL),(247,0,1435339756,NULL,'lockoutwindow','1800',NULL),(248,0,1435339756,NULL,'lockoutduration','1800',NULL),(249,0,1435339756,NULL,'passwordpolicy','1',NULL),(250,0,1435339756,NULL,'minpasswordlength','8',NULL),(251,0,1435339756,NULL,'minpassworddigits','1',NULL),(252,0,1435339756,NULL,'minpasswordlower','1',NULL),(253,0,1435339756,NULL,'minpasswordupper','1',NULL),(254,0,1435339756,NULL,'minpasswordnonalphanum','1',NULL),(255,0,1435339756,NULL,'maxconsecutiveidentchars','0',NULL),(256,0,1435339756,NULL,'pwresettime','1800',NULL),(257,0,1435339756,NULL,'groupenrolmentkeypolicy','1',NULL),(258,0,1435339756,NULL,'disableuserimages','0',NULL),(259,0,1435339756,NULL,'emailchangeconfirmation','1',NULL),(260,0,1435339756,NULL,'rememberusername','2',NULL),(261,0,1435339756,NULL,'strictformsrequired','0',NULL),(262,0,1435339756,NULL,'loginhttps','0',NULL),(263,0,1435339756,NULL,'cookiesecure','0',NULL),(264,0,1435339756,NULL,'cookiehttponly','0',NULL),(265,0,1435339756,NULL,'allowframembedding','0',NULL),(266,0,1435339756,NULL,'loginpasswordautocomplete','0',NULL),(267,0,1435339756,NULL,'displayloginfailures','0',NULL),(268,0,1435339756,NULL,'notifyloginfailures','',NULL),(269,0,1435339756,NULL,'notifyloginthreshold','10',NULL),(270,0,1435339756,NULL,'runclamonupload','0',NULL),(271,0,1435339756,NULL,'pathtoclam','',NULL),(272,0,1435339756,NULL,'quarantinedir','',NULL),(273,0,1435339756,NULL,'clamfailureonupload','donothing',NULL),(274,0,1435339757,NULL,'themelist','',NULL),(275,0,1435339757,NULL,'themedesignermode','0',NULL),(276,0,1435339757,NULL,'allowuserthemes','0',NULL),(277,0,1435339757,NULL,'allowcoursethemes','0',NULL),(278,0,1435339757,NULL,'allowcategorythemes','0',NULL),(279,0,1435339757,NULL,'allowthemechangeonurl','0',NULL),(280,0,1435339757,NULL,'allowuserblockhiding','1',NULL),(281,0,1435339757,NULL,'allowblockstodock','1',NULL),(282,0,1435339757,NULL,'custommenuitems','',NULL),(283,0,1435339757,NULL,'customusermenuitems','messages,message|/message/index.php|message\nmyfiles,moodle|/user/files.php|download\nmybadges,badges|/badges/mybadges.php|award',NULL),(284,0,1435339757,NULL,'enabledevicedetection','1',NULL),(285,0,1435339757,NULL,'devicedetectregex','[]',NULL),(286,0,1435339757,'theme_clean','invert','0',NULL),(287,0,1435339757,'theme_clean','logo','',NULL),(288,0,1435339757,'theme_clean','customcss','',NULL),(289,0,1435339757,'theme_clean','footnote','',NULL),(290,0,1435339757,'theme_more','textcolor','#333366',NULL),(291,0,1435339757,'theme_more','linkcolor','#FF6500',NULL),(292,0,1435339757,'theme_more','bodybackground','',NULL),(293,0,1435339757,'theme_more','backgroundimage','',NULL),(294,0,1435339757,'theme_more','backgroundrepeat','repeat',NULL),(295,0,1435339757,'theme_more','backgroundposition','0',NULL),(296,0,1435339757,'theme_more','backgroundfixed','0',NULL),(297,0,1435339757,'theme_more','contentbackground','#FFFFFF',NULL),(298,0,1435339757,'theme_more','secondarybackground','#FFFFFF',NULL),(299,0,1435339757,'theme_more','invert','1',NULL),(300,0,1435339757,'theme_more','logo','',NULL),(301,0,1435339757,'theme_more','customcss','',NULL),(302,0,1435339757,'theme_more','footnote','',NULL),(303,0,1435339757,NULL,'calendartype','gregorian',NULL),(304,0,1435339757,NULL,'calendar_adminseesall','0',NULL),(305,0,1435339757,NULL,'calendar_site_timeformat','0',NULL),(306,0,1435339757,NULL,'calendar_startwday','0',NULL),(307,0,1435339757,NULL,'calendar_weekend','65',NULL),(308,0,1435339757,NULL,'calendar_lookahead','21',NULL),(309,0,1435339757,NULL,'calendar_maxevents','10',NULL),(310,0,1435339757,NULL,'enablecalendarexport','1',NULL),(311,0,1435339757,NULL,'calendar_customexport','1',NULL),(312,0,1435339757,NULL,'calendar_exportlookahead','365',NULL),(313,0,1435339757,NULL,'calendar_exportlookback','5',NULL),(314,0,1435339757,NULL,'calendar_exportsalt','rdGA8CZoHuNAuzM0jf0fWK1vtnDOQaqSCQ1hyyYyx4DYZP65xaelqJdInZB7',NULL),(315,0,1435339757,NULL,'calendar_showicalsource','1',NULL),(316,0,1435339757,NULL,'useblogassociations','1',NULL),(317,0,1435339757,NULL,'bloglevel','4',NULL),(318,0,1435339757,NULL,'useexternalblogs','1',NULL),(319,0,1435339757,NULL,'externalblogcrontime','86400',NULL),(320,0,1435339757,NULL,'maxexternalblogsperuser','1',NULL),(321,0,1435339757,NULL,'blogusecomments','1',NULL),(322,0,1435339757,NULL,'blogshowcommentscount','1',NULL),(323,0,1435339757,NULL,'defaulthomepage','0',NULL),(324,0,1435339757,NULL,'allowguestmymoodle','1',NULL),(325,0,1435339757,NULL,'navshowfullcoursenames','0',NULL),(326,0,1435339757,NULL,'navshowcategories','1',NULL),(327,0,1435339757,NULL,'navshowmycoursecategories','0',NULL),(328,0,1435339757,NULL,'navshowallcourses','0',NULL),(329,0,1435339757,NULL,'navexpandmycourses','1',NULL),(330,0,1435339757,NULL,'navsortmycoursessort','sortorder',NULL),(331,0,1435339757,NULL,'navcourselimit','20',NULL),(332,0,1435339757,NULL,'usesitenameforsitepages','0',NULL),(333,0,1435339757,NULL,'linkadmincategories','0',NULL),(334,0,1435339757,NULL,'navshowfrontpagemods','1',NULL),(335,0,1435339757,NULL,'navadduserpostslinks','1',NULL),(336,0,1435339757,NULL,'formatstringstriptags','1',NULL),(337,0,1435339757,NULL,'emoticons','[{\"text\":\":-)\",\"imagename\":\"s\\/smiley\",\"imagecomponent\":\"core\",\"altidentifier\":\"smiley\",\"altcomponent\":\"core_pix\"},{\"text\":\":)\",\"imagename\":\"s\\/smiley\",\"imagecomponent\":\"core\",\"altidentifier\":\"smiley\",\"altcomponent\":\"core_pix\"},{\"text\":\":-D\",\"imagename\":\"s\\/biggrin\",\"imagecomponent\":\"core\",\"altidentifier\":\"biggrin\",\"altcomponent\":\"core_pix\"},{\"text\":\";-)\",\"imagename\":\"s\\/wink\",\"imagecomponent\":\"core\",\"altidentifier\":\"wink\",\"altcomponent\":\"core_pix\"},{\"text\":\":-\\/\",\"imagename\":\"s\\/mixed\",\"imagecomponent\":\"core\",\"altidentifier\":\"mixed\",\"altcomponent\":\"core_pix\"},{\"text\":\"V-.\",\"imagename\":\"s\\/thoughtful\",\"imagecomponent\":\"core\",\"altidentifier\":\"thoughtful\",\"altcomponent\":\"core_pix\"},{\"text\":\":-P\",\"imagename\":\"s\\/tongueout\",\"imagecomponent\":\"core\",\"altidentifier\":\"tongueout\",\"altcomponent\":\"core_pix\"},{\"text\":\":-p\",\"imagename\":\"s\\/tongueout\",\"imagecomponent\":\"core\",\"altidentifier\":\"tongueout\",\"altcomponent\":\"core_pix\"},{\"text\":\"B-)\",\"imagename\":\"s\\/cool\",\"imagecomponent\":\"core\",\"altidentifier\":\"cool\",\"altcomponent\":\"core_pix\"},{\"text\":\"^-)\",\"imagename\":\"s\\/approve\",\"imagecomponent\":\"core\",\"altidentifier\":\"approve\",\"altcomponent\":\"core_pix\"},{\"text\":\"8-)\",\"imagename\":\"s\\/wideeyes\",\"imagecomponent\":\"core\",\"altidentifier\":\"wideeyes\",\"altcomponent\":\"core_pix\"},{\"text\":\":o)\",\"imagename\":\"s\\/clown\",\"imagecomponent\":\"core\",\"altidentifier\":\"clown\",\"altcomponent\":\"core_pix\"},{\"text\":\":-(\",\"imagename\":\"s\\/sad\",\"imagecomponent\":\"core\",\"altidentifier\":\"sad\",\"altcomponent\":\"core_pix\"},{\"text\":\":(\",\"imagename\":\"s\\/sad\",\"imagecomponent\":\"core\",\"altidentifier\":\"sad\",\"altcomponent\":\"core_pix\"},{\"text\":\"8-.\",\"imagename\":\"s\\/shy\",\"imagecomponent\":\"core\",\"altidentifier\":\"shy\",\"altcomponent\":\"core_pix\"},{\"text\":\":-I\",\"imagename\":\"s\\/blush\",\"imagecomponent\":\"core\",\"altidentifier\":\"blush\",\"altcomponent\":\"core_pix\"},{\"text\":\":-X\",\"imagename\":\"s\\/kiss\",\"imagecomponent\":\"core\",\"altidentifier\":\"kiss\",\"altcomponent\":\"core_pix\"},{\"text\":\"8-o\",\"imagename\":\"s\\/surprise\",\"imagecomponent\":\"core\",\"altidentifier\":\"surprise\",\"altcomponent\":\"core_pix\"},{\"text\":\"P-|\",\"imagename\":\"s\\/blackeye\",\"imagecomponent\":\"core\",\"altidentifier\":\"blackeye\",\"altcomponent\":\"core_pix\"},{\"text\":\"8-[\",\"imagename\":\"s\\/angry\",\"imagecomponent\":\"core\",\"altidentifier\":\"angry\",\"altcomponent\":\"core_pix\"},{\"text\":\"(grr)\",\"imagename\":\"s\\/angry\",\"imagecomponent\":\"core\",\"altidentifier\":\"angry\",\"altcomponent\":\"core_pix\"},{\"text\":\"xx-P\",\"imagename\":\"s\\/dead\",\"imagecomponent\":\"core\",\"altidentifier\":\"dead\",\"altcomponent\":\"core_pix\"},{\"text\":\"|-.\",\"imagename\":\"s\\/sleepy\",\"imagecomponent\":\"core\",\"altidentifier\":\"sleepy\",\"altcomponent\":\"core_pix\"},{\"text\":\"}-]\",\"imagename\":\"s\\/evil\",\"imagecomponent\":\"core\",\"altidentifier\":\"evil\",\"altcomponent\":\"core_pix\"},{\"text\":\"(h)\",\"imagename\":\"s\\/heart\",\"imagecomponent\":\"core\",\"altidentifier\":\"heart\",\"altcomponent\":\"core_pix\"},{\"text\":\"(heart)\",\"imagename\":\"s\\/heart\",\"imagecomponent\":\"core\",\"altidentifier\":\"heart\",\"altcomponent\":\"core_pix\"},{\"text\":\"(y)\",\"imagename\":\"s\\/yes\",\"imagecomponent\":\"core\",\"altidentifier\":\"yes\",\"altcomponent\":\"core\"},{\"text\":\"(n)\",\"imagename\":\"s\\/no\",\"imagecomponent\":\"core\",\"altidentifier\":\"no\",\"altcomponent\":\"core\"},{\"text\":\"(martin)\",\"imagename\":\"s\\/martin\",\"imagecomponent\":\"core\",\"altidentifier\":\"martin\",\"altcomponent\":\"core_pix\"},{\"text\":\"( )\",\"imagename\":\"s\\/egg\",\"imagecomponent\":\"core\",\"altidentifier\":\"egg\",\"altcomponent\":\"core_pix\"}]',NULL),(338,0,1435339757,NULL,'core_media_enable_youtube','1',NULL),(339,0,1435339757,NULL,'core_media_enable_vimeo','0',NULL),(340,0,1435339757,NULL,'core_media_enable_mp3','1',NULL),(341,0,1435339757,NULL,'core_media_enable_flv','1',NULL),(342,0,1435339757,NULL,'core_media_enable_swf','1',NULL),(343,0,1435339757,NULL,'core_media_enable_html5audio','1',NULL),(344,0,1435339757,NULL,'core_media_enable_html5video','1',NULL),(345,0,1435339757,NULL,'core_media_enable_qt','1',NULL),(346,0,1435339757,NULL,'core_media_enable_wmp','1',NULL),(347,0,1435339757,NULL,'core_media_enable_rm','1',NULL),(348,0,1435339757,NULL,'docroot','http://docs.moodle.org',NULL),(349,0,1435339757,NULL,'doclang','',NULL),(350,0,1435339757,NULL,'doctonewwindow','0',NULL),(351,0,1435339757,NULL,'courselistshortnames','0',NULL),(352,0,1435339757,NULL,'coursesperpage','20',NULL),(353,0,1435339757,NULL,'courseswithsummarieslimit','10',NULL),(354,0,1435339757,NULL,'courseoverviewfileslimit','1',NULL),(355,0,1435339757,NULL,'courseoverviewfilesext','.jpg,.gif,.png',NULL),(356,0,1435339757,NULL,'useexternalyui','0',NULL),(357,0,1435339757,NULL,'yuicomboloading','1',NULL),(358,0,1435339757,NULL,'cachejs','1',NULL),(359,0,1435339757,NULL,'modchooserdefault','1',NULL),(360,0,1435339757,NULL,'modeditingmenu','1',NULL),(361,0,1435339757,NULL,'blockeditingmenu','1',NULL),(362,0,1435339757,NULL,'additionalhtmlhead','',NULL),(363,0,1435339757,NULL,'additionalhtmltopofbody','',NULL),(364,0,1435339757,NULL,'additionalhtmlfooter','',NULL),(365,0,1435339757,NULL,'pathtodu','',NULL),(366,0,1435339757,NULL,'aspellpath','',NULL),(367,0,1435339757,NULL,'pathtodot','',NULL),(368,0,1435339757,NULL,'pathtogs','/usr/bin/gs',NULL),(369,0,1435339757,NULL,'supportpage','',NULL),(370,0,1435339757,NULL,'dbsessions','0',NULL),(371,0,1435339757,NULL,'sessioncookie','',NULL),(372,0,1435339757,NULL,'sessioncookiepath','',NULL),(373,0,1435339757,NULL,'sessioncookiedomain','',NULL),(374,0,1435339757,NULL,'statsfirstrun','none',NULL),(375,0,1435339757,NULL,'statsmaxruntime','0',NULL),(376,0,1435339757,NULL,'statsruntimedays','31',NULL),(377,0,1435339757,NULL,'statsruntimestarthour','0',NULL),(378,0,1435339757,NULL,'statsruntimestartminute','0',NULL),(379,0,1435339757,NULL,'statsuserthreshold','0',NULL),(380,0,1435339757,NULL,'slasharguments','1',NULL),(381,0,1435339757,NULL,'getremoteaddrconf','0',NULL),(382,0,1435339757,NULL,'proxyhost','',NULL),(383,0,1435339757,NULL,'proxyport','0',NULL),(384,0,1435339757,NULL,'proxytype','HTTP',NULL),(385,0,1435339757,NULL,'proxyuser','',NULL),(386,0,1435339757,NULL,'proxypassword','',NULL),(387,0,1435339757,NULL,'proxybypass','localhost, 127.0.0.1',NULL),(388,0,1435339757,NULL,'maintenance_enabled','0',NULL),(389,0,1435339757,NULL,'maintenance_message','',NULL),(390,0,1435339757,NULL,'deleteunconfirmed','168',NULL),(391,0,1435339757,NULL,'deleteincompleteusers','0',NULL),(392,0,1435339757,NULL,'disablegradehistory','0',NULL),(393,0,1435339757,NULL,'gradehistorylifetime','0',NULL),(394,0,1435339757,NULL,'extramemorylimit','512M',NULL),(395,0,1435339757,NULL,'maxtimelimit','0',NULL),(396,0,1435339757,NULL,'curlcache','120',NULL),(397,0,1435339757,NULL,'curltimeoutkbitrate','56',NULL),(398,0,1435339757,NULL,'updateautocheck','1',NULL),(399,0,1435339757,NULL,'updateautodeploy','0',NULL),(400,0,1435339757,NULL,'updateminmaturity','200',NULL),(401,0,1435339757,NULL,'updatenotifybuilds','0',NULL),(402,0,1435339757,NULL,'enablesafebrowserintegration','0',NULL),(403,0,1435339757,NULL,'dndallowtextandlinks','0',NULL),(404,0,1435339757,NULL,'enablecssoptimiser','0',NULL),(405,0,1435339757,NULL,'enabletgzbackups','0',NULL),(406,0,1435339758,NULL,'debug','0',NULL),(407,0,1435339758,NULL,'debugdisplay','0',NULL),(408,0,1435339758,NULL,'debugsmtp','0',NULL),(409,0,1435339758,NULL,'perfdebug','7',NULL),(410,0,1435339758,NULL,'debugstringids','0',NULL),(411,0,1435339758,NULL,'debugvalidators','0',NULL),(412,0,1435339758,NULL,'debugpageinfo','0',NULL),(413,0,1435339758,NULL,'profilingenabled','0',NULL),(414,0,1435339758,NULL,'profilingincluded','',NULL),(415,0,1435339758,NULL,'profilingexcluded','',NULL),(416,0,1435339758,NULL,'profilingautofrec','0',NULL),(417,0,1435339758,NULL,'profilingallowme','0',NULL),(418,0,1435339758,NULL,'profilingallowall','0',NULL),(419,0,1435339758,NULL,'profilinglifetime','1440',NULL),(420,0,1435339758,NULL,'profilingimportprefix','(I)',NULL),(421,0,1435339769,'activitynames','filter_active','1',''),(422,0,1435339769,'mathjaxloader','filter_active','1',''),(423,0,1435339769,'mediaplugin','filter_active','1',''),(424,2,1435340430,NULL,'notloggedinroleid','6',NULL),(425,2,1435340430,NULL,'guestroleid','6',NULL),(426,2,1435340430,NULL,'defaultuserroleid','7',NULL),(427,2,1435340430,NULL,'creatornewroleid','3',NULL),(428,2,1435340430,NULL,'restorernewroleid','3',NULL),(429,2,1435340430,NULL,'gradebookroles','5',NULL),(430,2,1435340430,'assign','feedback_plugin_for_gradebook','assignfeedback_comments',NULL),(431,2,1435340430,'assign','showrecentsubmissions','0',NULL),(432,2,1435340430,'assign','submissionreceipts','1',NULL),(433,2,1435340430,'assign','submissionstatement','This assignment is my own work, except where I have acknowledged the use of the works of other people.',NULL),(434,2,1435340430,'assign','alwaysshowdescription','1',NULL),(435,2,1435340430,'assign','alwaysshowdescription_adv','',NULL),(436,2,1435340430,'assign','alwaysshowdescription_locked','',NULL),(437,2,1435340430,'assign','allowsubmissionsfromdate','0',NULL),(438,2,1435340430,'assign','allowsubmissionsfromdate_enabled','1',NULL),(439,2,1435340430,'assign','allowsubmissionsfromdate_adv','',NULL),(440,2,1435340430,'assign','duedate','604800',NULL),(441,2,1435340430,'assign','duedate_enabled','1',NULL),(442,2,1435340430,'assign','duedate_adv','',NULL),(443,2,1435340430,'assign','cutoffdate','1209600',NULL),(444,2,1435340430,'assign','cutoffdate_enabled','',NULL),(445,2,1435340430,'assign','cutoffdate_adv','',NULL),(446,2,1435340430,'assign','submissiondrafts','0',NULL),(447,2,1435340430,'assign','submissiondrafts_adv','',NULL),(448,2,1435340430,'assign','submissiondrafts_locked','',NULL),(449,2,1435340430,'assign','requiresubmissionstatement','0',NULL),(450,2,1435340430,'assign','requiresubmissionstatement_adv','',NULL),(451,2,1435340430,'assign','requiresubmissionstatement_locked','',NULL),(452,2,1435340430,'assign','attemptreopenmethod','none',NULL),(453,2,1435340430,'assign','attemptreopenmethod_adv','',NULL),(454,2,1435340430,'assign','attemptreopenmethod_locked','',NULL),(455,2,1435340430,'assign','maxattempts','-1',NULL),(456,2,1435340430,'assign','maxattempts_adv','',NULL),(457,2,1435340430,'assign','maxattempts_locked','',NULL),(458,2,1435340430,'assign','teamsubmission','0',NULL),(459,2,1435340430,'assign','teamsubmission_adv','',NULL),(460,2,1435340430,'assign','teamsubmission_locked','',NULL),(461,2,1435340430,'assign','requireallteammemberssubmit','0',NULL),(462,2,1435340430,'assign','requireallteammemberssubmit_adv','',NULL),(463,2,1435340430,'assign','requireallteammemberssubmit_locked','',NULL),(464,2,1435340430,'assign','teamsubmissiongroupingid','',NULL),(465,2,1435340430,'assign','teamsubmissiongroupingid_adv','',NULL),(466,2,1435340430,'assign','sendnotifications','0',NULL),(467,2,1435340430,'assign','sendnotifications_adv','',NULL),(468,2,1435340430,'assign','sendnotifications_locked','',NULL),(469,2,1435340430,'assign','sendlatenotifications','0',NULL),(470,2,1435340430,'assign','sendlatenotifications_adv','',NULL),(471,2,1435340430,'assign','sendlatenotifications_locked','',NULL),(472,2,1435340430,'assign','sendstudentnotifications','1',NULL),(473,2,1435340430,'assign','sendstudentnotifications_adv','',NULL),(474,2,1435340430,'assign','sendstudentnotifications_locked','',NULL),(475,2,1435340430,'assign','blindmarking','0',NULL),(476,2,1435340430,'assign','blindmarking_adv','',NULL),(477,2,1435340430,'assign','blindmarking_locked','',NULL),(478,2,1435340430,'assign','markingworkflow','0',NULL),(479,2,1435340430,'assign','markingworkflow_adv','',NULL),(480,2,1435340430,'assign','markingworkflow_locked','',NULL),(481,2,1435340430,'assign','markingallocation','0',NULL),(482,2,1435340430,'assign','markingallocation_adv','',NULL),(483,2,1435340430,'assign','markingallocation_locked','',NULL),(484,2,1435340430,'assignsubmission_file','default','1',NULL),(485,2,1435340430,'assignsubmission_file','maxbytes','1048576',NULL),(486,2,1435340430,'assignsubmission_onlinetext','default','0',NULL),(487,2,1435340430,'assignfeedback_comments','default','1',NULL),(488,2,1435340430,'assignfeedback_comments','inline','0',NULL),(489,2,1435340430,'assignfeedback_comments','inline_adv','',NULL),(490,2,1435340430,'assignfeedback_comments','inline_locked','',NULL),(491,2,1435340430,'assignfeedback_editpdf','stamps','',NULL),(492,2,1435340430,'assignfeedback_file','default','0',NULL),(493,2,1435340430,'assignfeedback_offline','default','0',NULL),(494,2,1435340430,'book','requiremodintro','1',NULL),(495,2,1435340430,'book','numberingoptions','0,1,2,3',NULL),(496,2,1435340430,'book','numbering','1',NULL),(497,2,1435340430,NULL,'chat_method','ajax',NULL),(498,2,1435340430,NULL,'chat_refresh_userlist','10',NULL),(499,2,1435340430,NULL,'chat_old_ping','35',NULL),(500,2,1435340430,NULL,'chat_refresh_room','5',NULL),(501,2,1435340430,NULL,'chat_normal_updatemode','jsupdate',NULL),(502,2,1435340430,NULL,'chat_serverhost','172.20.0.21',NULL),(503,2,1435340430,NULL,'chat_serverip','127.0.0.1',NULL),(504,2,1435340430,NULL,'chat_serverport','9111',NULL),(505,2,1435340430,NULL,'chat_servermax','100',NULL),(506,2,1435340430,NULL,'data_enablerssfeeds','0',NULL),(507,2,1435340430,NULL,'feedback_allowfullanonymous','0',NULL),(508,2,1435340430,'folder','requiremodintro','1',NULL),(509,2,1435340430,'folder','showexpanded','1',NULL),(510,2,1435340430,NULL,'forum_displaymode','3',NULL),(511,2,1435340430,NULL,'forum_replytouser','1',NULL),(512,2,1435340430,NULL,'forum_shortpost','300',NULL),(513,2,1435340430,NULL,'forum_longpost','600',NULL),(514,2,1435340430,NULL,'forum_manydiscussions','100',NULL),(515,2,1435340430,NULL,'forum_maxbytes','512000',NULL),(516,2,1435340430,NULL,'forum_maxattachments','9',NULL),(517,2,1435340430,NULL,'forum_trackingtype','1',NULL),(518,2,1435340430,NULL,'forum_trackreadposts','1',NULL),(519,2,1435340430,NULL,'forum_allowforcedreadtracking','0',NULL),(520,2,1435340430,NULL,'forum_oldpostdays','14',NULL),(521,2,1435340430,NULL,'forum_usermarksread','0',NULL),(522,2,1435340430,NULL,'forum_cleanreadtime','2',NULL),(523,2,1435340430,NULL,'digestmailtime','17',NULL),(524,2,1435340430,NULL,'forum_enablerssfeeds','0',NULL),(525,2,1435340430,NULL,'forum_enabletimedposts','0',NULL),(526,2,1435340430,NULL,'glossary_entbypage','10',NULL),(527,2,1435340430,NULL,'glossary_dupentries','0',NULL),(528,2,1435340430,NULL,'glossary_allowcomments','0',NULL),(529,2,1435340430,NULL,'glossary_linkbydefault','1',NULL),(530,2,1435340430,NULL,'glossary_defaultapproval','1',NULL),(531,2,1435340430,NULL,'glossary_enablerssfeeds','0',NULL),(532,2,1435340430,NULL,'glossary_linkentries','0',NULL),(533,2,1435340430,NULL,'glossary_casesensitive','0',NULL),(534,2,1435340430,NULL,'glossary_fullmatch','0',NULL),(535,2,1435340430,'imscp','requiremodintro','1',NULL),(536,2,1435340430,'imscp','keepold','1',NULL),(537,2,1435340430,'imscp','keepold_adv','',NULL),(538,2,1435340430,'label','dndmedia','1',NULL),(539,2,1435340430,'label','dndresizewidth','400',NULL),(540,2,1435340430,'label','dndresizeheight','400',NULL),(541,2,1435340430,NULL,'lesson_slideshowwidth','640',NULL),(542,2,1435340430,NULL,'lesson_slideshowheight','480',NULL),(543,2,1435340430,NULL,'lesson_slideshowbgcolor','#FFFFFF',NULL),(544,2,1435340430,NULL,'lesson_mediawidth','640',NULL),(545,2,1435340430,NULL,'lesson_mediaheight','480',NULL),(546,2,1435340430,NULL,'lesson_mediaclose','0',NULL),(547,2,1435340430,NULL,'lesson_maxhighscores','10',NULL),(548,2,1435340430,NULL,'lesson_maxanswers','4',NULL),(549,2,1435340430,NULL,'lesson_defaultnextpage','0',NULL),(550,2,1435340430,'lesson','requiremodintro','1',NULL),(551,2,1435340430,'page','requiremodintro','1',NULL),(552,2,1435340430,'page','displayoptions','5',NULL),(553,2,1435340430,'page','printheading','1',NULL),(554,2,1435340430,'page','printintro','0',NULL),(555,2,1435340430,'page','display','5',NULL),(556,2,1435340430,'page','popupwidth','620',NULL),(557,2,1435340430,'page','popupheight','450',NULL),(558,2,1435340430,'quiz','timelimit','0',NULL),(559,2,1435340430,'quiz','timelimit_adv','',NULL),(560,2,1435340430,'quiz','overduehandling','autosubmit',NULL),(561,2,1435340430,'quiz','overduehandling_adv','',NULL),(562,2,1435340430,'quiz','graceperiod','86400',NULL),(563,2,1435340430,'quiz','graceperiod_adv','',NULL),(564,2,1435340430,'quiz','graceperiodmin','60',NULL),(565,2,1435340430,'quiz','attempts','0',NULL),(566,2,1435340430,'quiz','attempts_adv','',NULL),(567,2,1435340430,'quiz','grademethod','1',NULL),(568,2,1435340430,'quiz','grademethod_adv','',NULL),(569,2,1435340430,'quiz','maximumgrade','10',NULL),(570,2,1435340430,'quiz','shufflequestions','0',NULL),(571,2,1435340430,'quiz','shufflequestions_adv','',NULL),(572,2,1435340430,'quiz','questionsperpage','1',NULL),(573,2,1435340430,'quiz','questionsperpage_adv','',NULL),(574,2,1435340430,'quiz','navmethod','free',NULL),(575,2,1435340430,'quiz','navmethod_adv','1',NULL),(576,2,1435340430,'quiz','shuffleanswers','1',NULL),(577,2,1435340430,'quiz','shuffleanswers_adv','',NULL),(578,2,1435340430,'quiz','preferredbehaviour','deferredfeedback',NULL),(579,2,1435340430,'quiz','attemptonlast','0',NULL),(580,2,1435340430,'quiz','attemptonlast_adv','1',NULL),(581,2,1435340430,'quiz','reviewattempt','69904',NULL),(582,2,1435340430,'quiz','reviewcorrectness','69904',NULL),(583,2,1435340430,'quiz','reviewmarks','69904',NULL),(584,2,1435340430,'quiz','reviewspecificfeedback','69904',NULL),(585,2,1435340430,'quiz','reviewgeneralfeedback','69904',NULL),(586,2,1435340430,'quiz','reviewrightanswer','69904',NULL),(587,2,1435340430,'quiz','reviewoverallfeedback','4368',NULL),(588,2,1435340430,'quiz','showuserpicture','0',NULL),(589,2,1435340430,'quiz','showuserpicture_adv','',NULL),(590,2,1435340430,'quiz','decimalpoints','2',NULL),(591,2,1435340430,'quiz','decimalpoints_adv','',NULL),(592,2,1435340430,'quiz','questiondecimalpoints','-1',NULL),(593,2,1435340430,'quiz','questiondecimalpoints_adv','1',NULL),(594,2,1435340430,'quiz','showblocks','0',NULL),(595,2,1435340430,'quiz','showblocks_adv','1',NULL),(596,2,1435340430,'quiz','password','',NULL),(597,2,1435340430,'quiz','password_adv','1',NULL),(598,2,1435340430,'quiz','subnet','',NULL),(599,2,1435340430,'quiz','subnet_adv','1',NULL),(600,2,1435340430,'quiz','delay1','0',NULL),(601,2,1435340430,'quiz','delay1_adv','1',NULL),(602,2,1435340430,'quiz','delay2','0',NULL),(603,2,1435340430,'quiz','delay2_adv','1',NULL),(604,2,1435340430,'quiz','browsersecurity','-',NULL),(605,2,1435340430,'quiz','browsersecurity_adv','1',NULL),(606,2,1435340430,'quiz','autosaveperiod','120',NULL),(607,2,1435340431,'resource','framesize','130',NULL),(608,2,1435340431,'resource','requiremodintro','1',NULL),(609,2,1435340431,'resource','displayoptions','0,1,4,5,6',NULL),(610,2,1435340431,'resource','printintro','1',NULL),(611,2,1435340431,'resource','display','0',NULL),(612,2,1435340431,'resource','showsize','0',NULL),(613,2,1435340431,'resource','showtype','0',NULL),(614,2,1435340431,'resource','popupwidth','620',NULL),(615,2,1435340431,'resource','popupheight','450',NULL),(616,2,1435340431,'resource','filterfiles','0',NULL),(617,2,1435340431,'scorm','displaycoursestructure','0',NULL),(618,2,1435340431,'scorm','displaycoursestructure_adv','',NULL),(619,2,1435340431,'scorm','popup','0',NULL),(620,2,1435340431,'scorm','popup_adv','',NULL),(621,2,1435340431,'scorm','displayactivityname','1',NULL),(622,2,1435340431,'scorm','framewidth','100',NULL),(623,2,1435340431,'scorm','framewidth_adv','1',NULL),(624,2,1435340431,'scorm','frameheight','500',NULL),(625,2,1435340431,'scorm','frameheight_adv','1',NULL),(626,2,1435340431,'scorm','winoptgrp_adv','1',NULL),(627,2,1435340431,'scorm','scrollbars','0',NULL),(628,2,1435340431,'scorm','directories','0',NULL),(629,2,1435340431,'scorm','location','0',NULL),(630,2,1435340431,'scorm','menubar','0',NULL),(631,2,1435340431,'scorm','toolbar','0',NULL),(632,2,1435340431,'scorm','status','0',NULL),(633,2,1435340431,'scorm','skipview','0',NULL),(634,2,1435340431,'scorm','skipview_adv','1',NULL),(635,2,1435340431,'scorm','hidebrowse','0',NULL),(636,2,1435340431,'scorm','hidebrowse_adv','1',NULL),(637,2,1435340431,'scorm','hidetoc','0',NULL),(638,2,1435340431,'scorm','hidetoc_adv','1',NULL),(639,2,1435340431,'scorm','nav','1',NULL),(640,2,1435340431,'scorm','nav_adv','1',NULL),(641,2,1435340431,'scorm','navpositionleft','-100',NULL),(642,2,1435340431,'scorm','navpositionleft_adv','1',NULL),(643,2,1435340431,'scorm','navpositiontop','-100',NULL),(644,2,1435340431,'scorm','navpositiontop_adv','1',NULL),(645,2,1435340431,'scorm','collapsetocwinsize','767',NULL),(646,2,1435340431,'scorm','collapsetocwinsize_adv','1',NULL),(647,2,1435340431,'scorm','displayattemptstatus','1',NULL),(648,2,1435340431,'scorm','displayattemptstatus_adv','',NULL),(649,2,1435340431,'scorm','grademethod','1',NULL),(650,2,1435340431,'scorm','maxgrade','100',NULL),(651,2,1435340431,'scorm','maxattempt','0',NULL),(652,2,1435340431,'scorm','whatgrade','0',NULL),(653,2,1435340431,'scorm','forcecompleted','0',NULL),(654,2,1435340431,'scorm','forcenewattempt','0',NULL),(655,2,1435340431,'scorm','autocommit','0',NULL),(656,2,1435340431,'scorm','lastattemptlock','0',NULL),(657,2,1435340431,'scorm','auto','0',NULL),(658,2,1435340431,'scorm','updatefreq','0',NULL),(659,2,1435340431,'scorm','scorm12standard','1',NULL),(660,2,1435340431,'scorm','allowtypeexternal','0',NULL),(661,2,1435340431,'scorm','allowtypelocalsync','0',NULL),(662,2,1435340431,'scorm','allowtypeexternalaicc','0',NULL),(663,2,1435340431,'scorm','allowaicchacp','0',NULL),(664,2,1435340431,'scorm','aicchacptimeout','30',NULL),(665,2,1435340431,'scorm','aicchacpkeepsessiondata','1',NULL),(666,2,1435340431,'scorm','aiccuserid','1',NULL),(667,2,1435340431,'scorm','forcejavascript','1',NULL),(668,2,1435340431,'scorm','allowapidebug','0',NULL),(669,2,1435340431,'scorm','apidebugmask','.*',NULL),(670,2,1435340431,'url','framesize','130',NULL),(671,2,1435340431,'url','requiremodintro','1',NULL),(672,2,1435340431,'url','secretphrase','',NULL),(673,2,1435340431,'url','rolesinparams','0',NULL),(674,2,1435340431,'url','displayoptions','0,1,5,6',NULL),(675,2,1435340431,'url','printintro','1',NULL),(676,2,1435340431,'url','display','0',NULL),(677,2,1435340431,'url','popupwidth','620',NULL),(678,2,1435340431,'url','popupheight','450',NULL),(679,2,1435340431,'workshop','grade','80',NULL),(680,2,1435340431,'workshop','gradinggrade','20',NULL),(681,2,1435340431,'workshop','gradedecimals','0',NULL),(682,2,1435340431,'workshop','maxbytes','0',NULL),(683,2,1435340431,'workshop','strategy','accumulative',NULL),(684,2,1435340431,'workshop','examplesmode','0',NULL),(685,2,1435340431,'workshopallocation_random','numofreviews','5',NULL),(686,2,1435340431,'workshopform_numerrors','grade0','No',NULL),(687,2,1435340431,'workshopform_numerrors','grade1','Yes',NULL),(688,2,1435340431,'workshopeval_best','comparison','5',NULL),(689,2,1435340431,NULL,'block_course_list_adminview','all',NULL),(690,2,1435340431,NULL,'block_course_list_hideallcourseslink','0',NULL),(691,2,1435340431,'block_course_overview','defaultmaxcourses','10',NULL),(692,2,1435340431,'block_course_overview','forcedefaultmaxcourses','0',NULL),(693,2,1435340431,'block_course_overview','showchildren','0',NULL),(694,2,1435340431,'block_course_overview','showwelcomearea','0',NULL),(695,2,1435340431,'block_course_overview','showcategories','0',NULL),(696,2,1435340431,NULL,'block_html_allowcssclasses','0',NULL),(697,2,1435340431,NULL,'block_online_users_timetosee','5',NULL),(698,2,1435340431,NULL,'block_rss_client_num_entries','5',NULL),(699,2,1435340431,NULL,'block_rss_client_timeout','30',NULL),(700,2,1435340431,'block_section_links','numsections1','22',NULL),(701,2,1435340431,'block_section_links','incby1','2',NULL),(702,2,1435340431,'block_section_links','numsections2','40',NULL),(703,2,1435340431,'block_section_links','incby2','5',NULL),(704,2,1435340431,NULL,'block_tags_showcoursetags','0',NULL),(705,2,1435340431,'format_singleactivity','activitytype','forum',NULL),(706,2,1435340431,'enrol_cohort','roleid','5',NULL),(707,2,1435340431,'enrol_cohort','unenrolaction','0',NULL),(708,2,1435340431,'enrol_database','dbtype','',NULL),(709,2,1435340431,'enrol_database','dbhost','localhost',NULL),(710,2,1435340431,'enrol_database','dbuser','',NULL),(711,2,1435340431,'enrol_database','dbpass','',NULL),(712,2,1435340431,'enrol_database','dbname','',NULL),(713,2,1435340431,'enrol_database','dbencoding','utf-8',NULL),(714,2,1435340431,'enrol_database','dbsetupsql','',NULL),(715,2,1435340431,'enrol_database','dbsybasequoting','0',NULL),(716,2,1435340431,'enrol_database','debugdb','0',NULL),(717,2,1435340431,'enrol_database','localcoursefield','idnumber',NULL),(718,2,1435340431,'enrol_database','localuserfield','idnumber',NULL),(719,2,1435340431,'enrol_database','localrolefield','shortname',NULL),(720,2,1435340431,'enrol_database','localcategoryfield','id',NULL),(721,2,1435340431,'enrol_database','remoteenroltable','',NULL),(722,2,1435340431,'enrol_database','remotecoursefield','',NULL),(723,2,1435340431,'enrol_database','remoteuserfield','',NULL),(724,2,1435340431,'enrol_database','remoterolefield','',NULL),(725,2,1435340431,'enrol_database','remoteotheruserfield','',NULL),(726,2,1435340431,'enrol_database','defaultrole','5',NULL),(727,2,1435340431,'enrol_database','ignorehiddencourses','0',NULL),(728,2,1435340431,'enrol_database','unenrolaction','0',NULL),(729,2,1435340431,'enrol_database','newcoursetable','',NULL),(730,2,1435340431,'enrol_database','newcoursefullname','fullname',NULL),(731,2,1435340431,'enrol_database','newcourseshortname','shortname',NULL),(732,2,1435340431,'enrol_database','newcourseidnumber','idnumber',NULL),(733,2,1435340431,'enrol_database','newcoursecategory','',NULL),(734,2,1435340431,'enrol_database','defaultcategory','1',NULL),(735,2,1435340431,'enrol_database','templatecourse','',NULL),(736,2,1435340431,'enrol_flatfile','location','',NULL),(737,2,1435340431,'enrol_flatfile','encoding','UTF-8',NULL),(738,2,1435340431,'enrol_flatfile','mailstudents','0',NULL),(739,2,1435340431,'enrol_flatfile','mailteachers','0',NULL),(740,2,1435340431,'enrol_flatfile','mailadmins','0',NULL),(741,2,1435340431,'enrol_flatfile','unenrolaction','3',NULL),(742,2,1435340431,'enrol_flatfile','expiredaction','3',NULL),(743,2,1435340431,'enrol_guest','requirepassword','0',NULL),(744,2,1435340431,'enrol_guest','usepasswordpolicy','0',NULL),(745,2,1435340431,'enrol_guest','showhint','0',NULL),(746,2,1435340431,'enrol_guest','defaultenrol','1',NULL),(747,2,1435340431,'enrol_guest','status','1',NULL),(748,2,1435340431,'enrol_guest','status_adv','',NULL),(749,2,1435340431,'enrol_imsenterprise','imsfilelocation','',NULL),(750,2,1435340431,'enrol_imsenterprise','logtolocation','',NULL),(751,2,1435340431,'enrol_imsenterprise','mailadmins','0',NULL),(752,2,1435340431,'enrol_imsenterprise','createnewusers','0',NULL),(753,2,1435340431,'enrol_imsenterprise','imsdeleteusers','0',NULL),(754,2,1435340431,'enrol_imsenterprise','fixcaseusernames','0',NULL),(755,2,1435340431,'enrol_imsenterprise','fixcasepersonalnames','0',NULL),(756,2,1435340431,'enrol_imsenterprise','imssourcedidfallback','0',NULL),(757,2,1435340431,'enrol_imsenterprise','imsrolemap01','5',NULL),(758,2,1435340431,'enrol_imsenterprise','imsrolemap02','3',NULL),(759,2,1435340431,'enrol_imsenterprise','imsrolemap03','3',NULL),(760,2,1435340431,'enrol_imsenterprise','imsrolemap04','5',NULL),(761,2,1435340431,'enrol_imsenterprise','imsrolemap05','0',NULL),(762,2,1435340431,'enrol_imsenterprise','imsrolemap06','4',NULL),(763,2,1435340431,'enrol_imsenterprise','imsrolemap07','0',NULL),(764,2,1435340431,'enrol_imsenterprise','imsrolemap08','4',NULL),(765,2,1435340431,'enrol_imsenterprise','truncatecoursecodes','0',NULL),(766,2,1435340431,'enrol_imsenterprise','createnewcourses','0',NULL),(767,2,1435340431,'enrol_imsenterprise','createnewcategories','0',NULL),(768,2,1435340431,'enrol_imsenterprise','imsunenrol','0',NULL),(769,2,1435340431,'enrol_imsenterprise','imscoursemapshortname','coursecode',NULL),(770,2,1435340431,'enrol_imsenterprise','imscoursemapfullname','short',NULL),(771,2,1435340431,'enrol_imsenterprise','imscoursemapsummary','ignore',NULL),(772,2,1435340431,'enrol_imsenterprise','imsrestricttarget','',NULL),(773,2,1435340431,'enrol_imsenterprise','imscapitafix','0',NULL),(774,2,1435340431,'enrol_manual','expiredaction','1',NULL),(775,2,1435340431,'enrol_manual','expirynotifyhour','6',NULL),(776,2,1435340431,'enrol_manual','defaultenrol','1',NULL),(777,2,1435340431,'enrol_manual','status','0',NULL),(778,2,1435340431,'enrol_manual','roleid','5',NULL),(779,2,1435340431,'enrol_manual','enrolperiod','0',NULL),(780,2,1435340431,'enrol_manual','expirynotify','0',NULL),(781,2,1435340431,'enrol_manual','expirythreshold','86400',NULL),(782,2,1435340431,'enrol_meta','nosyncroleids','',NULL),(783,2,1435340431,'enrol_meta','syncall','1',NULL),(784,2,1435340431,'enrol_meta','unenrolaction','3',NULL),(785,2,1435340431,'enrol_mnet','roleid','5',NULL),(786,2,1435340431,'enrol_mnet','roleid_adv','1',NULL),(787,2,1435340431,'enrol_paypal','paypalbusiness','',NULL),(788,2,1435340431,'enrol_paypal','mailstudents','0',NULL),(789,2,1435340431,'enrol_paypal','mailteachers','0',NULL),(790,2,1435340431,'enrol_paypal','mailadmins','0',NULL),(791,2,1435340431,'enrol_paypal','expiredaction','3',NULL),(792,2,1435340431,'enrol_paypal','status','1',NULL),(793,2,1435340431,'enrol_paypal','cost','0',NULL),(794,2,1435340431,'enrol_paypal','currency','USD',NULL),(795,2,1435340431,'enrol_paypal','roleid','5',NULL),(796,2,1435340431,'enrol_paypal','enrolperiod','0',NULL),(797,2,1435340431,'enrol_self','requirepassword','0',NULL),(798,2,1435340431,'enrol_self','usepasswordpolicy','0',NULL),(799,2,1435340431,'enrol_self','showhint','0',NULL),(800,2,1435340431,'enrol_self','expiredaction','1',NULL),(801,2,1435340431,'enrol_self','expirynotifyhour','6',NULL),(802,2,1435340431,'enrol_self','defaultenrol','1',NULL),(803,2,1435340431,'enrol_self','status','1',NULL),(804,2,1435340431,'enrol_self','newenrols','1',NULL),(805,2,1435340431,'enrol_self','groupkey','0',NULL),(806,2,1435340431,'enrol_self','roleid','5',NULL),(807,2,1435340431,'enrol_self','enrolperiod','0',NULL),(808,2,1435340431,'enrol_self','expirynotify','0',NULL),(809,2,1435340431,'enrol_self','expirythreshold','86400',NULL),(810,2,1435340431,'enrol_self','longtimenosee','0',NULL),(811,2,1435340431,'enrol_self','maxenrolled','0',NULL),(812,2,1435340431,'enrol_self','sendcoursewelcomemessage','1',NULL),(813,2,1435340431,NULL,'filter_censor_badwords','',NULL),(814,2,1435340431,'filter_emoticon','formats','1,4,0',NULL),(815,2,1435340431,'filter_mathjaxloader','httpurl','http://cdn.mathjax.org/mathjax/2.3-latest/MathJax.js',NULL),(816,2,1435340431,'filter_mathjaxloader','httpsurl','https://cdn.mathjax.org/mathjax/2.3-latest/MathJax.js',NULL),(817,2,1435340431,'filter_mathjaxloader','texfiltercompatibility','0',NULL),(818,2,1435340431,'filter_mathjaxloader','mathjaxconfig','\nMathJax.Hub.Config({\n    config: [\"Accessible.js\", \"Safe.js\"],\n    errorSettings: { message: [\"!\"] },\n    skipStartupTypeset: true,\n    messageStyle: \"none\"\n});\n',NULL),(819,2,1435340431,'filter_mathjaxloader','additionaldelimiters','',NULL),(820,2,1435340431,NULL,'filter_multilang_force_old','0',NULL),(821,2,1435340431,'filter_tex','latexpreamble','\\usepackage[latin1]{inputenc}\n\\usepackage{amsmath}\n\\usepackage{amsfonts}\n\\RequirePackage{amsmath,amssymb,latexsym}\n',NULL),(822,2,1435340431,'filter_tex','latexbackground','#FFFFFF',NULL),(823,2,1435340431,'filter_tex','density','120',NULL),(824,2,1435340431,'filter_tex','pathlatex','/usr/bin/latex',NULL),(825,2,1435340431,'filter_tex','pathdvips','/usr/bin/dvips',NULL),(826,2,1435340431,'filter_tex','pathconvert','/usr/bin/convert',NULL),(827,2,1435340431,'filter_tex','pathdvisvgm','/usr/bin/dvisvgm',NULL),(828,2,1435340431,'filter_tex','pathmimetex','',NULL),(829,2,1435340431,'filter_tex','convertformat','gif',NULL),(830,2,1435340431,'filter_urltolink','formats','0',NULL),(831,2,1435340431,'filter_urltolink','embedimages','1',NULL),(832,2,1435340431,'logstore_database','dbdriver','',NULL),(833,2,1435340431,'logstore_database','dbhost','',NULL),(834,2,1435340431,'logstore_database','dbuser','',NULL),(835,2,1435340431,'logstore_database','dbpass','',NULL),(836,2,1435340431,'logstore_database','dbname','',NULL),(837,2,1435340431,'logstore_database','dbtable','',NULL),(838,2,1435340431,'logstore_database','dbpersist','0',NULL),(839,2,1435340431,'logstore_database','dbsocket','',NULL),(840,2,1435340431,'logstore_database','dbport','',NULL),(841,2,1435340431,'logstore_database','dbschema','',NULL),(842,2,1435340431,'logstore_database','dbcollation','',NULL),(843,2,1435340431,'logstore_database','buffersize','50',NULL),(844,2,1435340431,'logstore_database','logguests','0',NULL),(845,2,1435340431,'logstore_database','includelevels','1,2,0',NULL),(846,2,1435340431,'logstore_database','includeactions','c,r,u,d',NULL),(847,2,1435340431,'logstore_legacy','loglegacy','0',NULL),(848,2,1435340431,NULL,'logguests','1',NULL),(849,2,1435340431,NULL,'loglifetime','0',NULL),(850,2,1435340431,'logstore_standard','logguests','1',NULL),(851,2,1435340431,'logstore_standard','loglifetime','0',NULL),(852,2,1435340431,'logstore_standard','buffersize','50',NULL),(853,2,1435340431,NULL,'airnotifierurl','https://messages.moodle.net',NULL),(854,2,1435340431,NULL,'airnotifierport','443',NULL),(855,2,1435340431,NULL,'airnotifiermobileappname','com.moodle.moodlemobile',NULL),(856,2,1435340432,NULL,'airnotifierappname','commoodlemoodlemobile',NULL),(857,2,1435340432,NULL,'airnotifieraccesskey','',NULL),(858,2,1435340432,NULL,'smtphosts','',NULL),(859,2,1435340432,NULL,'smtpsecure','',NULL),(860,2,1435340432,NULL,'smtpuser','',NULL),(861,2,1435340432,NULL,'smtppass','',NULL),(862,2,1435340432,NULL,'smtpmaxbulk','1',NULL),(863,2,1435340432,NULL,'noreplyaddress','noreply@172.20.0.21',NULL),(864,2,1435340432,NULL,'emailonlyfromnoreplyaddress','0',NULL),(865,2,1435340432,NULL,'sitemailcharset','0',NULL),(866,2,1435340432,NULL,'allowusermailcharset','0',NULL),(867,2,1435340432,NULL,'allowattachments','1',NULL),(868,2,1435340432,NULL,'mailnewline','LF',NULL),(869,2,1435340432,NULL,'jabberhost','',NULL),(870,2,1435340432,NULL,'jabberserver','',NULL),(871,2,1435340432,NULL,'jabberusername','',NULL),(872,2,1435340432,NULL,'jabberpassword','',NULL),(873,2,1435340432,NULL,'jabberport','5222',NULL),(874,2,1435340432,'editor_atto','toolbar','collapse = collapse\nstyle1 = title, bold, italic\nlist = unorderedlist, orderedlist\nlinks = link\nfiles = image, media, managefiles\nstyle2 = underline, strike, subscript, superscript\nalign = align\nindent = indent\ninsert = equation, charmap, table, clear\nundo = undo\naccessibility = accessibilitychecker, accessibilityhelper\nother = html',NULL),(875,2,1435340432,'editor_atto','autosavefrequency','60',NULL),(876,2,1435340432,'atto_collapse','showgroups','5',NULL),(877,2,1435340432,'atto_equation','librarygroup1','\n\\cdot\n\\times\n\\ast\n\\div\n\\diamond\n\\pm\n\\mp\n\\oplus\n\\ominus\n\\otimes\n\\oslash\n\\odot\n\\circ\n\\bullet\n\\asymp\n\\equiv\n\\subseteq\n\\supseteq\n\\leq\n\\geq\n\\preceq\n\\succeq\n\\sim\n\\simeq\n\\approx\n\\subset\n\\supset\n\\ll\n\\gg\n\\prec\n\\succ\n\\infty\n\\in\n\\ni\n\\forall\n\\exists\n\\neq\n',NULL),(878,2,1435340432,'atto_equation','librarygroup2','\n\\leftarrow\n\\rightarrow\n\\uparrow\n\\downarrow\n\\leftrightarrow\n\\nearrow\n\\searrow\n\\swarrow\n\\nwarrow\n\\Leftarrow\n\\Rightarrow\n\\Uparrow\n\\Downarrow\n\\Leftrightarrow\n',NULL),(879,2,1435340432,'atto_equation','librarygroup3','\n\\alpha\n\\beta\n\\gamma\n\\delta\n\\epsilon\n\\zeta\n\\eta\n\\theta\n\\iota\n\\kappa\n\\lambda\n\\mu\n\\nu\n\\xi\n\\pi\n\\rho\n\\sigma\n\\tau\n\\upsilon\n\\phi\n\\chi\n\\psi\n\\omega\n\\Gamma\n\\Delta\n\\Theta\n\\Lambda\n\\Xi\n\\Pi\n\\Sigma\n\\Upsilon\n\\Phi\n\\Psi\n\\Omega\n',NULL),(880,2,1435340432,'atto_equation','librarygroup4','\n\\sum{a,b}\n\\int_{a}^{b}{c}\n\\iint_{a}^{b}{c}\n\\iiint_{a}^{b}{c}\n\\oint{a}\n(a)\n[a]\n\\lbrace{a}\\rbrace\n\\left| \\begin{matrix} a_1 & a_2 \\ a_3 & a_4 \\end{matrix} \\right|\n',NULL),(881,2,1435340432,'editor_tinymce','customtoolbar','wrap,formatselect,wrap,bold,italic,wrap,bullist,numlist,wrap,link,unlink,wrap,image\n\nundo,redo,wrap,underline,strikethrough,sub,sup,wrap,justifyleft,justifycenter,justifyright,wrap,outdent,indent,wrap,forecolor,backcolor,wrap,ltr,rtl\n\nfontselect,fontsizeselect,wrap,code,search,replace,wrap,nonbreaking,charmap,table,wrap,cleanup,removeformat,pastetext,pasteword,wrap,fullscreen',NULL),(882,2,1435340432,'editor_tinymce','fontselectlist','Trebuchet=Trebuchet MS,Verdana,Arial,Helvetica,sans-serif;Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,times new roman,times,serif;Tahoma=tahoma,arial,helvetica,sans-serif;Times New Roman=times new roman,times,serif;Verdana=verdana,arial,helvetica,sans-serif;Impact=impact;Wingdings=wingdings',NULL),(883,2,1435340432,'editor_tinymce','customconfig','',NULL),(884,2,1435340432,'tinymce_moodleemoticon','requireemoticon','1',NULL),(885,2,1435340432,'tinymce_spellchecker','spellengine','',NULL),(886,2,1435340432,'tinymce_spellchecker','spelllanguagelist','+English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr,German=de,Italian=it,Polish=pl,Portuguese=pt,Spanish=es,Swedish=sv',NULL),(887,2,1435340432,NULL,'profileroles','5,4,3',NULL),(888,2,1435340432,NULL,'coursecontact','3',NULL),(889,2,1435340432,NULL,'frontpage','6',NULL),(890,2,1435340432,NULL,'frontpageloggedin','6',NULL),(891,2,1435340432,NULL,'maxcategorydepth','2',NULL),(892,2,1435340432,NULL,'frontpagecourselimit','200',NULL),(893,2,1435340432,NULL,'commentsperpage','15',NULL),(894,2,1435340432,NULL,'defaultfrontpageroleid','8',NULL),(895,2,1435340432,NULL,'supportname','Admin User',NULL),(896,2,1435340432,NULL,'supportemail','dude@example.com',NULL),(897,2,1435340432,NULL,'messageinbound_enabled','0',NULL),(898,2,1435340432,NULL,'messageinbound_mailbox','',NULL),(899,2,1435340432,NULL,'messageinbound_domain','',NULL),(900,2,1435340432,NULL,'messageinbound_host','',NULL),(901,2,1435340432,NULL,'messageinbound_hostssl','ssl',NULL),(902,2,1435340432,NULL,'messageinbound_hostuser','',NULL),(903,2,1435340432,NULL,'messageinbound_hostpass','',NULL),(904,2,1435340451,NULL,'registerauth','email',NULL);
/*!40000 ALTER TABLE `mdl_config_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_config_plugins`
--

DROP TABLE IF EXISTS `mdl_config_plugins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_config_plugins` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `plugin` varchar(100) NOT NULL DEFAULT 'core',
  `name` varchar(100) NOT NULL DEFAULT '',
  `value` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_confplug_plunam_uix` (`plugin`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=1100 DEFAULT CHARSET=utf8 COMMENT='Moodle modules and plugins configuration variables';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_config_plugins`
--

LOCK TABLES `mdl_config_plugins` WRITE;
/*!40000 ALTER TABLE `mdl_config_plugins` DISABLE KEYS */;
INSERT INTO `mdl_config_plugins` VALUES (1,'moodlecourse','visible','1'),(2,'moodlecourse','format','weeks'),(3,'moodlecourse','maxsections','52'),(4,'moodlecourse','numsections','10'),(5,'moodlecourse','hiddensections','0'),(6,'moodlecourse','coursedisplay','0'),(7,'moodlecourse','lang',''),(8,'moodlecourse','newsitems','5'),(9,'moodlecourse','showgrades','1'),(10,'moodlecourse','showreports','0'),(11,'moodlecourse','maxbytes','0'),(12,'moodlecourse','enablecompletion','0'),(13,'moodlecourse','groupmode','0'),(14,'moodlecourse','groupmodeforce','0'),(15,'backup','loglifetime','30'),(16,'backup','backup_general_users','1'),(17,'backup','backup_general_users_locked',''),(18,'backup','backup_general_anonymize','0'),(19,'backup','backup_general_anonymize_locked',''),(20,'backup','backup_general_role_assignments','1'),(21,'backup','backup_general_role_assignments_locked',''),(22,'backup','backup_general_activities','1'),(23,'backup','backup_general_activities_locked',''),(24,'backup','backup_general_blocks','1'),(25,'backup','backup_general_blocks_locked',''),(26,'backup','backup_general_filters','1'),(27,'backup','backup_general_filters_locked',''),(28,'backup','backup_general_comments','1'),(29,'backup','backup_general_comments_locked',''),(30,'backup','backup_general_badges','1'),(31,'backup','backup_general_badges_locked',''),(32,'backup','backup_general_userscompletion','1'),(33,'backup','backup_general_userscompletion_locked',''),(34,'backup','backup_general_logs','0'),(35,'backup','backup_general_logs_locked',''),(36,'backup','backup_general_histories','0'),(37,'backup','backup_general_histories_locked',''),(38,'backup','backup_general_questionbank','1'),(39,'backup','backup_general_questionbank_locked',''),(40,'backup','import_general_maxresults','10'),(41,'backup','backup_auto_active','0'),(42,'backup','backup_auto_weekdays','0000000'),(43,'backup','backup_auto_hour','0'),(44,'backup','backup_auto_minute','0'),(45,'backup','backup_auto_storage','0'),(46,'backup','backup_auto_destination',''),(47,'backup','backup_auto_keep','1'),(48,'backup','backup_shortname','0'),(49,'backup','backup_auto_skip_hidden','1'),(50,'backup','backup_auto_skip_modif_days','30'),(51,'backup','backup_auto_skip_modif_prev','0'),(52,'backup','backup_auto_users','1'),(53,'backup','backup_auto_role_assignments','1'),(54,'backup','backup_auto_activities','1'),(55,'backup','backup_auto_blocks','1'),(56,'backup','backup_auto_filters','1'),(57,'backup','backup_auto_comments','1'),(58,'backup','backup_auto_badges','1'),(59,'backup','backup_auto_userscompletion','1'),(60,'backup','backup_auto_logs','0'),(61,'backup','backup_auto_histories','0'),(62,'backup','backup_auto_questionbank','1'),(63,'cachestore_memcache','testservers',''),(64,'cachestore_memcached','testservers',''),(65,'cachestore_mongodb','testserver',''),(66,'question_preview','behaviour','deferredfeedback'),(67,'question_preview','correctness','1'),(68,'question_preview','marks','2'),(69,'question_preview','markdp','2'),(70,'question_preview','feedback','1'),(71,'question_preview','generalfeedback','1'),(72,'question_preview','rightanswer','1'),(73,'question_preview','history','0'),(74,'theme_clean','invert','0'),(75,'theme_clean','logo',''),(76,'theme_clean','customcss',''),(77,'theme_clean','footnote',''),(78,'theme_more','textcolor','#333366'),(79,'theme_more','linkcolor','#FF6500'),(80,'theme_more','bodybackground',''),(81,'theme_more','backgroundimage',''),(82,'theme_more','backgroundrepeat','repeat'),(83,'theme_more','backgroundposition','0'),(84,'theme_more','backgroundfixed','0'),(85,'theme_more','contentbackground','#FFFFFF'),(86,'theme_more','secondarybackground','#FFFFFF'),(87,'theme_more','invert','1'),(88,'theme_more','logo',''),(89,'theme_more','customcss',''),(90,'theme_more','footnote',''),(91,'availability_completion','version','2014111000'),(92,'availability_date','version','2014111000'),(93,'availability_grade','version','2014111000'),(94,'availability_group','version','2014111000'),(95,'availability_grouping','version','2014111000'),(96,'availability_profile','version','2014111000'),(97,'qtype_calculated','version','2014111000'),(98,'qtype_calculatedmulti','version','2014111000'),(99,'qtype_calculatedsimple','version','2014111000'),(100,'qtype_description','version','2014111000'),(101,'qtype_essay','version','2014111000'),(102,'qtype_match','version','2014111000'),(103,'qtype_missingtype','version','2014111000'),(104,'qtype_multianswer','version','2014111000'),(105,'qtype_multichoice','version','2014111000'),(106,'qtype_numerical','version','2014111000'),(107,'qtype_random','version','2014111000'),(108,'qtype_randomsamatch','version','2014111000'),(109,'qtype_shortanswer','version','2014111000'),(110,'qtype_truefalse','version','2014111000'),(111,'mod_assign','version','2014111001'),(112,'mod_assignment','version','2014111000'),(114,'mod_book','version','2014111000'),(115,'mod_chat','version','2014111000'),(116,'mod_choice','version','2014111000'),(117,'mod_data','version','2014111000'),(118,'mod_feedback','version','2014111000'),(120,'mod_folder','version','2014111000'),(122,'mod_forum','version','2014111001'),(123,'mod_glossary','version','2014111000'),(124,'mod_imscp','version','2014111000'),(126,'mod_label','version','2014111000'),(127,'mod_lesson','version','2014111003'),(128,'mod_lti','version','2014111000'),(129,'mod_page','version','2014111000'),(131,'mod_quiz','version','2014111001'),(132,'mod_resource','version','2014111000'),(133,'mod_scorm','version','2014111002'),(134,'mod_survey','version','2014111000'),(136,'mod_url','version','2014111000'),(138,'mod_wiki','version','2014111000'),(140,'mod_workshop','version','2014111000'),(141,'auth_cas','version','2014111000'),(143,'auth_db','version','2014111000'),(145,'auth_email','version','2014111000'),(146,'auth_fc','version','2014111000'),(148,'auth_imap','version','2014111000'),(150,'auth_ldap','version','2014111000'),(152,'auth_manual','version','2014111000'),(153,'auth_mnet','version','2014111000'),(155,'auth_nntp','version','2014111000'),(157,'auth_nologin','version','2014111000'),(158,'auth_none','version','2014111000'),(159,'auth_pam','version','2014111000'),(161,'auth_pop3','version','2014111000'),(163,'auth_radius','version','2014111000'),(165,'auth_shibboleth','version','2014111000'),(167,'auth_webservice','version','2014111000'),(168,'calendartype_gregorian','version','2014111000'),(169,'enrol_category','version','2014111000'),(171,'enrol_cohort','version','2014111000'),(172,'enrol_database','version','2014111000'),(174,'enrol_flatfile','version','2014111000'),(176,'enrol_flatfile','map_1','manager'),(177,'enrol_flatfile','map_2','coursecreator'),(178,'enrol_flatfile','map_3','editingteacher'),(179,'enrol_flatfile','map_4','teacher'),(180,'enrol_flatfile','map_5','student'),(181,'enrol_flatfile','map_6','guest'),(182,'enrol_flatfile','map_7','user'),(183,'enrol_flatfile','map_8','frontpage'),(184,'enrol_guest','version','2014111000'),(185,'enrol_imsenterprise','version','2014111000'),(187,'enrol_ldap','version','2014111000'),(189,'enrol_manual','version','2014111000'),(191,'enrol_meta','version','2014111000'),(193,'enrol_mnet','version','2014111000'),(194,'enrol_paypal','version','2014111000'),(195,'enrol_self','version','2014111000'),(197,'message_airnotifier','version','2014111000'),(199,'message','airnotifier_provider_enrol_flatfile_flatfile_enrolment_permitted','permitted'),(200,'message','airnotifier_provider_enrol_imsenterprise_imsenterprise_enrolment_permitted','permitted'),(201,'message','airnotifier_provider_enrol_manual_expiry_notification_permitted','permitted'),(202,'message','airnotifier_provider_enrol_paypal_paypal_enrolment_permitted','permitted'),(203,'message','airnotifier_provider_enrol_self_expiry_notification_permitted','permitted'),(204,'message','airnotifier_provider_mod_assign_assign_notification_permitted','permitted'),(205,'message','airnotifier_provider_mod_assignment_assignment_updates_permitted','permitted'),(206,'message','airnotifier_provider_mod_feedback_submission_permitted','permitted'),(207,'message','airnotifier_provider_mod_feedback_message_permitted','permitted'),(208,'message','airnotifier_provider_mod_forum_posts_permitted','permitted'),(209,'message','airnotifier_provider_mod_lesson_graded_essay_permitted','permitted'),(210,'message','airnotifier_provider_mod_quiz_submission_permitted','permitted'),(211,'message','airnotifier_provider_mod_quiz_confirmation_permitted','permitted'),(212,'message','airnotifier_provider_mod_quiz_attempt_overdue_permitted','permitted'),(213,'message','airnotifier_provider_moodle_notices_permitted','permitted'),(214,'message','airnotifier_provider_moodle_errors_permitted','permitted'),(215,'message','airnotifier_provider_moodle_availableupdate_permitted','permitted'),(216,'message','airnotifier_provider_moodle_instantmessage_permitted','permitted'),(217,'message','airnotifier_provider_moodle_backup_permitted','permitted'),(218,'message','airnotifier_provider_moodle_courserequested_permitted','permitted'),(219,'message','airnotifier_provider_moodle_courserequestapproved_permitted','permitted'),(220,'message','airnotifier_provider_moodle_courserequestrejected_permitted','permitted'),(221,'message','airnotifier_provider_moodle_badgerecipientnotice_permitted','permitted'),(222,'message','airnotifier_provider_moodle_badgecreatornotice_permitted','permitted'),(223,'message_email','version','2014111000'),(225,'message','email_provider_enrol_flatfile_flatfile_enrolment_permitted','permitted'),(226,'message','message_provider_enrol_flatfile_flatfile_enrolment_loggedin','email'),(227,'message','message_provider_enrol_flatfile_flatfile_enrolment_loggedoff','email'),(228,'message','email_provider_enrol_imsenterprise_imsenterprise_enrolment_permitted','permitted'),(229,'message','message_provider_enrol_imsenterprise_imsenterprise_enrolment_loggedin','email'),(230,'message','message_provider_enrol_imsenterprise_imsenterprise_enrolment_loggedoff','email'),(231,'message','email_provider_enrol_manual_expiry_notification_permitted','permitted'),(232,'message','message_provider_enrol_manual_expiry_notification_loggedin','email'),(233,'message','message_provider_enrol_manual_expiry_notification_loggedoff','email'),(234,'message','email_provider_enrol_paypal_paypal_enrolment_permitted','permitted'),(235,'message','message_provider_enrol_paypal_paypal_enrolment_loggedin','email'),(236,'message','message_provider_enrol_paypal_paypal_enrolment_loggedoff','email'),(237,'message','email_provider_enrol_self_expiry_notification_permitted','permitted'),(238,'message','message_provider_enrol_self_expiry_notification_loggedin','email'),(239,'message','message_provider_enrol_self_expiry_notification_loggedoff','email'),(240,'message','email_provider_mod_assign_assign_notification_permitted','permitted'),(241,'message','message_provider_mod_assign_assign_notification_loggedin','email'),(242,'message','message_provider_mod_assign_assign_notification_loggedoff','email'),(243,'message','email_provider_mod_assignment_assignment_updates_permitted','permitted'),(244,'message','message_provider_mod_assignment_assignment_updates_loggedin','email'),(245,'message','message_provider_mod_assignment_assignment_updates_loggedoff','email'),(246,'message','email_provider_mod_feedback_submission_permitted','permitted'),(247,'message','message_provider_mod_feedback_submission_loggedin','email'),(248,'message','message_provider_mod_feedback_submission_loggedoff','email'),(249,'message','email_provider_mod_feedback_message_permitted','permitted'),(250,'message','message_provider_mod_feedback_message_loggedin','email'),(251,'message','message_provider_mod_feedback_message_loggedoff','email'),(252,'message','email_provider_mod_forum_posts_permitted','permitted'),(253,'message','message_provider_mod_forum_posts_loggedin','email'),(254,'message','message_provider_mod_forum_posts_loggedoff','email'),(255,'message','email_provider_mod_lesson_graded_essay_permitted','permitted'),(256,'message','message_provider_mod_lesson_graded_essay_loggedin','email'),(257,'message','message_provider_mod_lesson_graded_essay_loggedoff','email'),(258,'message','email_provider_mod_quiz_submission_permitted','permitted'),(259,'message','message_provider_mod_quiz_submission_loggedin','email'),(260,'message','message_provider_mod_quiz_submission_loggedoff','email'),(261,'message','email_provider_mod_quiz_confirmation_permitted','permitted'),(262,'message','message_provider_mod_quiz_confirmation_loggedin','email'),(263,'message','message_provider_mod_quiz_confirmation_loggedoff','email'),(264,'message','email_provider_mod_quiz_attempt_overdue_permitted','permitted'),(265,'message','message_provider_mod_quiz_attempt_overdue_loggedin','email'),(266,'message','message_provider_mod_quiz_attempt_overdue_loggedoff','email'),(267,'message','email_provider_moodle_notices_permitted','permitted'),(268,'message','message_provider_moodle_notices_loggedin','email'),(269,'message','message_provider_moodle_notices_loggedoff','email'),(270,'message','email_provider_moodle_errors_permitted','permitted'),(271,'message','message_provider_moodle_errors_loggedin','email'),(272,'message','message_provider_moodle_errors_loggedoff','email'),(273,'message','email_provider_moodle_availableupdate_permitted','permitted'),(274,'message','message_provider_moodle_availableupdate_loggedin','email'),(275,'message','message_provider_moodle_availableupdate_loggedoff','email'),(276,'message','email_provider_moodle_instantmessage_permitted','permitted'),(277,'message','message_provider_moodle_instantmessage_loggedoff','popup,email'),(278,'message','email_provider_moodle_backup_permitted','permitted'),(279,'message','message_provider_moodle_backup_loggedin','email'),(280,'message','message_provider_moodle_backup_loggedoff','email'),(281,'message','email_provider_moodle_courserequested_permitted','permitted'),(282,'message','message_provider_moodle_courserequested_loggedin','email'),(283,'message','message_provider_moodle_courserequested_loggedoff','email'),(284,'message','email_provider_moodle_courserequestapproved_permitted','permitted'),(285,'message','message_provider_moodle_courserequestapproved_loggedin','email'),(286,'message','message_provider_moodle_courserequestapproved_loggedoff','email'),(287,'message','email_provider_moodle_courserequestrejected_permitted','permitted'),(288,'message','message_provider_moodle_courserequestrejected_loggedin','email'),(289,'message','message_provider_moodle_courserequestrejected_loggedoff','email'),(290,'message','email_provider_moodle_badgerecipientnotice_permitted','permitted'),(291,'message','message_provider_moodle_badgerecipientnotice_loggedoff','popup,email'),(292,'message','email_provider_moodle_badgecreatornotice_permitted','permitted'),(293,'message','message_provider_moodle_badgecreatornotice_loggedoff','email'),(294,'message_jabber','version','2014111000'),(296,'message','jabber_provider_enrol_flatfile_flatfile_enrolment_permitted','permitted'),(297,'message','jabber_provider_enrol_imsenterprise_imsenterprise_enrolment_permitted','permitted'),(298,'message','jabber_provider_enrol_manual_expiry_notification_permitted','permitted'),(299,'message','jabber_provider_enrol_paypal_paypal_enrolment_permitted','permitted'),(300,'message','jabber_provider_enrol_self_expiry_notification_permitted','permitted'),(301,'message','jabber_provider_mod_assign_assign_notification_permitted','permitted'),(302,'message','jabber_provider_mod_assignment_assignment_updates_permitted','permitted'),(303,'message','jabber_provider_mod_feedback_submission_permitted','permitted'),(304,'message','jabber_provider_mod_feedback_message_permitted','permitted'),(305,'message','jabber_provider_mod_forum_posts_permitted','permitted'),(306,'message','jabber_provider_mod_lesson_graded_essay_permitted','permitted'),(307,'message','jabber_provider_mod_quiz_submission_permitted','permitted'),(308,'message','jabber_provider_mod_quiz_confirmation_permitted','permitted'),(309,'message','jabber_provider_mod_quiz_attempt_overdue_permitted','permitted'),(310,'message','jabber_provider_moodle_notices_permitted','permitted'),(311,'message','jabber_provider_moodle_errors_permitted','permitted'),(312,'message','jabber_provider_moodle_availableupdate_permitted','permitted'),(313,'message','jabber_provider_moodle_instantmessage_permitted','permitted'),(314,'message','jabber_provider_moodle_backup_permitted','permitted'),(315,'message','jabber_provider_moodle_courserequested_permitted','permitted'),(316,'message','jabber_provider_moodle_courserequestapproved_permitted','permitted'),(317,'message','jabber_provider_moodle_courserequestrejected_permitted','permitted'),(318,'message','jabber_provider_moodle_badgerecipientnotice_permitted','permitted'),(319,'message','jabber_provider_moodle_badgecreatornotice_permitted','permitted'),(320,'message_popup','version','2014111000'),(322,'message','popup_provider_enrol_flatfile_flatfile_enrolment_permitted','permitted'),(323,'message','popup_provider_enrol_imsenterprise_imsenterprise_enrolment_permitted','permitted'),(324,'message','popup_provider_enrol_manual_expiry_notification_permitted','permitted'),(325,'message','popup_provider_enrol_paypal_paypal_enrolment_permitted','permitted'),(326,'message','popup_provider_enrol_self_expiry_notification_permitted','permitted'),(327,'message','popup_provider_mod_assign_assign_notification_permitted','permitted'),(328,'message','popup_provider_mod_assignment_assignment_updates_permitted','permitted'),(329,'message','popup_provider_mod_feedback_submission_permitted','permitted'),(330,'message','popup_provider_mod_feedback_message_permitted','permitted'),(331,'message','popup_provider_mod_forum_posts_permitted','permitted'),(332,'message','popup_provider_mod_lesson_graded_essay_permitted','permitted'),(333,'message','popup_provider_mod_quiz_submission_permitted','permitted'),(334,'message','popup_provider_mod_quiz_confirmation_permitted','permitted'),(335,'message','popup_provider_mod_quiz_attempt_overdue_permitted','permitted'),(336,'message','popup_provider_moodle_notices_permitted','permitted'),(337,'message','popup_provider_moodle_errors_permitted','permitted'),(338,'message','popup_provider_moodle_availableupdate_permitted','permitted'),(339,'message','popup_provider_moodle_instantmessage_permitted','permitted'),(340,'message','message_provider_moodle_instantmessage_loggedin','popup'),(341,'message','popup_provider_moodle_backup_permitted','permitted'),(342,'message','popup_provider_moodle_courserequested_permitted','permitted'),(343,'message','popup_provider_moodle_courserequestapproved_permitted','permitted'),(344,'message','popup_provider_moodle_courserequestrejected_permitted','permitted'),(345,'message','popup_provider_moodle_badgerecipientnotice_permitted','permitted'),(346,'message','message_provider_moodle_badgerecipientnotice_loggedin','popup'),(347,'message','popup_provider_moodle_badgecreatornotice_permitted','permitted'),(348,'block_activity_modules','version','2014111000'),(349,'block_admin_bookmarks','version','2014111000'),(350,'block_badges','version','2014111000'),(351,'block_blog_menu','version','2014111000'),(352,'block_blog_recent','version','2014111000'),(353,'block_blog_tags','version','2014111000'),(354,'block_calendar_month','version','2014111000'),(355,'block_calendar_upcoming','version','2014111000'),(356,'block_comments','version','2014111000'),(357,'block_community','version','2014111000'),(358,'block_completionstatus','version','2014111000'),(359,'block_course_list','version','2014111000'),(360,'block_course_overview','version','2014111000'),(361,'block_course_summary','version','2014111000'),(362,'block_feedback','version','2014111000'),(364,'block_glossary_random','version','2014111000'),(365,'block_html','version','2014111000'),(366,'block_login','version','2014111000'),(367,'block_mentees','version','2014111000'),(368,'block_messages','version','2014111000'),(369,'block_mnet_hosts','version','2014111000'),(370,'block_myprofile','version','2014111000'),(371,'block_navigation','version','2014111000'),(372,'block_news_items','version','2014111000'),(373,'block_online_users','version','2014111000'),(374,'block_participants','version','2014111000'),(375,'block_private_files','version','2014111000'),(376,'block_quiz_results','version','2014111000'),(377,'block_recent_activity','version','2014111000'),(378,'block_rss_client','version','2014111000'),(379,'block_search_forums','version','2014111000'),(380,'block_section_links','version','2014111000'),(381,'block_selfcompletion','version','2014111000'),(382,'block_settings','version','2014111000'),(383,'block_site_main_menu','version','2014111000'),(384,'block_social_activities','version','2014111000'),(385,'block_tag_flickr','version','2014111000'),(386,'block_tag_youtube','version','2014111000'),(387,'block_tags','version','2014111000'),(388,'filter_activitynames','version','2014111000'),(390,'filter_algebra','version','2014111000'),(391,'filter_censor','version','2014111000'),(392,'filter_data','version','2014111000'),(394,'filter_emailprotect','version','2014111000'),(395,'filter_emoticon','version','2014111000'),(396,'filter_glossary','version','2014111000'),(398,'filter_mathjaxloader','version','2014111001'),(400,'filter_mediaplugin','version','2014111000'),(402,'filter_multilang','version','2014111000'),(403,'filter_tex','version','2014111000'),(405,'filter_tidy','version','2014111000'),(406,'filter_urltolink','version','2014111000'),(407,'editor_atto','version','2014111000'),(409,'editor_textarea','version','2014111000'),(410,'editor_tinymce','version','2014111000'),(411,'format_singleactivity','version','2014111000'),(412,'format_social','version','2014111000'),(413,'format_topics','version','2014111000'),(414,'format_weeks','version','2014111000'),(415,'profilefield_checkbox','version','2014111000'),(416,'profilefield_datetime','version','2014111000'),(417,'profilefield_menu','version','2014111000'),(418,'profilefield_text','version','2014111000'),(419,'profilefield_textarea','version','2014111000'),(420,'report_backups','version','2014111000'),(421,'report_completion','version','2014111000'),(423,'report_configlog','version','2014111000'),(424,'report_courseoverview','version','2014111000'),(425,'report_eventlist','version','2014111000'),(426,'report_log','version','2014111000'),(428,'report_loglive','version','2014111000'),(429,'report_outline','version','2014111000'),(431,'report_participation','version','2014111000'),(433,'report_performance','version','2014111000'),(434,'report_progress','version','2014111000'),(436,'report_questioninstances','version','2014111000'),(437,'report_security','version','2014111000'),(438,'report_stats','version','2014111000'),(440,'gradeexport_ods','version','2014111000'),(441,'gradeexport_txt','version','2014111000'),(442,'gradeexport_xls','version','2014111000'),(443,'gradeexport_xml','version','2014111000'),(444,'gradeimport_csv','version','2014111000'),(445,'gradeimport_direct','version','2014111000'),(446,'gradeimport_xml','version','2014111000'),(447,'gradereport_grader','version','2014111000'),(448,'gradereport_history','version','2014111000'),(449,'gradereport_outcomes','version','2014111000'),(450,'gradereport_overview','version','2014111000'),(451,'gradereport_singleview','version','2014111000'),(452,'gradereport_user','version','2014111000'),(453,'gradingform_guide','version','2014111000'),(454,'gradingform_rubric','version','2014111000'),(455,'mnetservice_enrol','version','2014111000'),(456,'webservice_amf','version','2014111000'),(457,'webservice_rest','version','2014111000'),(458,'webservice_soap','version','2014111000'),(459,'webservice_xmlrpc','version','2014111000'),(460,'repository_alfresco','version','2014111000'),(461,'repository_areafiles','version','2014111000'),(463,'areafiles','enablecourseinstances','0'),(464,'areafiles','enableuserinstances','0'),(465,'repository_boxnet','version','2014111000'),(466,'repository_coursefiles','version','2014111000'),(467,'repository_dropbox','version','2014111000'),(468,'repository_equella','version','2014111000'),(469,'repository_filesystem','version','2014111000'),(470,'repository_flickr','version','2014111000'),(471,'repository_flickr_public','version','2014111000'),(472,'repository_googledocs','version','2014111000'),(473,'repository_local','version','2014111000'),(475,'local','enablecourseinstances','0'),(476,'local','enableuserinstances','0'),(477,'repository_merlot','version','2014111000'),(478,'repository_picasa','version','2014111000'),(479,'repository_recent','version','2014111000'),(481,'recent','enablecourseinstances','0'),(482,'recent','enableuserinstances','0'),(483,'repository_s3','version','2014111000'),(484,'repository_skydrive','version','2014111000'),(485,'repository_upload','version','2014111000'),(487,'upload','enablecourseinstances','0'),(488,'upload','enableuserinstances','0'),(489,'repository_url','version','2014111000'),(491,'url','enablecourseinstances','0'),(492,'url','enableuserinstances','0'),(493,'repository_user','version','2014111000'),(495,'user','enablecourseinstances','0'),(496,'user','enableuserinstances','0'),(497,'repository_webdav','version','2014111000'),(498,'repository_wikimedia','version','2014111000'),(500,'wikimedia','enablecourseinstances','0'),(501,'wikimedia','enableuserinstances','0'),(502,'repository_youtube','version','2014111001'),(504,'youtube','enablecourseinstances','0'),(505,'youtube','enableuserinstances','0'),(506,'portfolio_boxnet','version','2014111000'),(507,'portfolio_download','version','2014111000'),(508,'portfolio_flickr','version','2014111000'),(509,'portfolio_googledocs','version','2014111000'),(510,'portfolio_mahara','version','2014111000'),(511,'portfolio_picasa','version','2014111000'),(512,'qbehaviour_adaptive','version','2014111000'),(513,'qbehaviour_adaptivenopenalty','version','2014111000'),(514,'qbehaviour_deferredcbm','version','2014111000'),(515,'qbehaviour_deferredfeedback','version','2014111000'),(516,'qbehaviour_immediatecbm','version','2014111000'),(517,'qbehaviour_immediatefeedback','version','2014111000'),(518,'qbehaviour_informationitem','version','2014111000'),(519,'qbehaviour_interactive','version','2014111000'),(520,'qbehaviour_interactivecountback','version','2014111000'),(521,'qbehaviour_manualgraded','version','2014111000'),(523,'question','disabledbehaviours','manualgraded'),(524,'qbehaviour_missing','version','2014111000'),(525,'qformat_aiken','version','2014111000'),(526,'qformat_blackboard_six','version','2014111000'),(527,'qformat_examview','version','2014111000'),(528,'qformat_gift','version','2014111000'),(529,'qformat_missingword','version','2014111000'),(530,'qformat_multianswer','version','2014111000'),(531,'qformat_webct','version','2014111000'),(532,'qformat_xhtml','version','2014111000'),(533,'qformat_xml','version','2014111000'),(534,'tool_assignmentupgrade','version','2014111000'),(535,'tool_availabilityconditions','version','2014111000'),(536,'tool_behat','version','2014111000'),(537,'tool_capability','version','2014111000'),(538,'tool_customlang','version','2014111000'),(540,'tool_dbtransfer','version','2014111000'),(541,'tool_generator','version','2014111000'),(542,'tool_health','version','2014111000'),(543,'tool_innodb','version','2014111000'),(544,'tool_installaddon','version','2014111000'),(545,'tool_langimport','version','2014111000'),(546,'tool_log','version','2014111000'),(548,'tool_log','enabled_stores','logstore_standard'),(549,'tool_messageinbound','version','2014111000'),(550,'message','airnotifier_provider_tool_messageinbound_invalidrecipienthandler_permitted','permitted'),(551,'message','email_provider_tool_messageinbound_invalidrecipienthandler_permitted','permitted'),(552,'message','jabber_provider_tool_messageinbound_invalidrecipienthandler_permitted','permitted'),(553,'message','popup_provider_tool_messageinbound_invalidrecipienthandler_permitted','permitted'),(554,'message','message_provider_tool_messageinbound_invalidrecipienthandler_loggedin','email'),(555,'message','message_provider_tool_messageinbound_invalidrecipienthandler_loggedoff','email'),(556,'message','airnotifier_provider_tool_messageinbound_messageprocessingerror_permitted','permitted'),(557,'message','email_provider_tool_messageinbound_messageprocessingerror_permitted','permitted'),(558,'message','jabber_provider_tool_messageinbound_messageprocessingerror_permitted','permitted'),(559,'message','popup_provider_tool_messageinbound_messageprocessingerror_permitted','permitted'),(560,'message','message_provider_tool_messageinbound_messageprocessingerror_loggedin','email'),(561,'message','message_provider_tool_messageinbound_messageprocessingerror_loggedoff','email'),(562,'message','airnotifier_provider_tool_messageinbound_messageprocessingsuccess_permitted','permitted'),(563,'message','email_provider_tool_messageinbound_messageprocessingsuccess_permitted','permitted'),(564,'message','jabber_provider_tool_messageinbound_messageprocessingsuccess_permitted','permitted'),(565,'message','popup_provider_tool_messageinbound_messageprocessingsuccess_permitted','permitted'),(566,'message','message_provider_tool_messageinbound_messageprocessingsuccess_loggedin','email'),(567,'message','message_provider_tool_messageinbound_messageprocessingsuccess_loggedoff','email'),(568,'tool_monitor','version','2014111001'),(569,'message','airnotifier_provider_tool_monitor_notification_permitted','permitted'),(570,'message','email_provider_tool_monitor_notification_permitted','permitted'),(571,'message','jabber_provider_tool_monitor_notification_permitted','permitted'),(572,'message','popup_provider_tool_monitor_notification_permitted','permitted'),(573,'message','message_provider_tool_monitor_notification_loggedin','email'),(574,'message','message_provider_tool_monitor_notification_loggedoff','email'),(575,'tool_multilangupgrade','version','2014111000'),(576,'tool_phpunit','version','2014111000'),(577,'tool_profiling','version','2014111000'),(578,'tool_replace','version','2014111000'),(579,'tool_spamcleaner','version','2014111000'),(580,'tool_task','version','2014111000'),(581,'tool_timezoneimport','version','2014111000'),(582,'tool_unsuproles','version','2014111000'),(584,'tool_uploadcourse','version','2014111000'),(585,'tool_uploaduser','version','2014111000'),(586,'tool_xmldb','version','2014111000'),(587,'cachestore_file','version','2014111000'),(588,'cachestore_memcache','version','2014111000'),(589,'cachestore_memcached','version','2014111000'),(590,'cachestore_mongodb','version','2014111000'),(591,'cachestore_session','version','2014111000'),(592,'cachestore_static','version','2014111000'),(593,'cachelock_file','version','2014111000'),(594,'theme_base','version','2014111000'),(595,'theme_bootstrapbase','version','2014111000'),(596,'theme_canvas','version','2014111000'),(597,'theme_clean','version','2014111000'),(598,'theme_more','version','2014111000'),(600,'assignsubmission_comments','version','2014111000'),(602,'assignsubmission_file','sortorder','1'),(603,'assignsubmission_comments','sortorder','2'),(604,'assignsubmission_onlinetext','sortorder','0'),(605,'assignsubmission_file','version','2014111000'),(606,'assignsubmission_onlinetext','version','2014111000'),(608,'assignfeedback_comments','version','2014111000'),(610,'assignfeedback_comments','sortorder','0'),(611,'assignfeedback_editpdf','sortorder','1'),(612,'assignfeedback_file','sortorder','3'),(613,'assignfeedback_offline','sortorder','2'),(614,'assignfeedback_editpdf','version','2014111000'),(616,'assignfeedback_file','version','2014111000'),(618,'assignfeedback_offline','version','2014111000'),(619,'assignment_offline','version','2014111000'),(620,'assignment_online','version','2014111000'),(621,'assignment_upload','version','2014111000'),(622,'assignment_uploadsingle','version','2014111000'),(623,'booktool_exportimscp','version','2014111000'),(624,'booktool_importhtml','version','2014111000'),(625,'booktool_print','version','2014111000'),(626,'datafield_checkbox','version','2014111000'),(627,'datafield_date','version','2014111000'),(628,'datafield_file','version','2014111000'),(629,'datafield_latlong','version','2014111000'),(630,'datafield_menu','version','2014111000'),(631,'datafield_multimenu','version','2014111000'),(632,'datafield_number','version','2014111000'),(633,'datafield_picture','version','2014111000'),(634,'datafield_radiobutton','version','2014111000'),(635,'datafield_text','version','2014111000'),(636,'datafield_textarea','version','2014111000'),(637,'datafield_url','version','2014111000'),(638,'datapreset_imagegallery','version','2014111000'),(639,'ltiservice_profile','version','2014111000'),(640,'ltiservice_toolproxy','version','2014111000'),(641,'ltiservice_toolsettings','version','2014111000'),(642,'quiz_grading','version','2014111000'),(644,'quiz_overview','version','2014111000'),(646,'quiz_responses','version','2014111000'),(648,'quiz_statistics','version','2014111000'),(650,'quizaccess_delaybetweenattempts','version','2014111000'),(651,'quizaccess_ipaddress','version','2014111000'),(652,'quizaccess_numattempts','version','2014111000'),(653,'quizaccess_openclosedate','version','2014111000'),(654,'quizaccess_password','version','2014111000'),(655,'quizaccess_safebrowser','version','2014111000'),(656,'quizaccess_securewindow','version','2014111000'),(657,'quizaccess_timelimit','version','2014111000'),(658,'scormreport_basic','version','2014111000'),(659,'scormreport_graphs','version','2014111000'),(660,'scormreport_interactions','version','2014111000'),(661,'scormreport_objectives','version','2014111000'),(662,'workshopform_accumulative','version','2014111000'),(664,'workshopform_comments','version','2014111000'),(666,'workshopform_numerrors','version','2014111000'),(668,'workshopform_rubric','version','2014111000'),(670,'workshopallocation_manual','version','2014111000'),(671,'workshopallocation_random','version','2014111000'),(672,'workshopallocation_scheduled','version','2014111000'),(673,'workshopeval_best','version','2014111000'),(674,'atto_accessibilitychecker','version','2014111000'),(675,'atto_accessibilityhelper','version','2014111000'),(676,'atto_align','version','2014111000'),(677,'atto_backcolor','version','2014111000'),(678,'atto_bold','version','2014111000'),(679,'atto_charmap','version','2014111000'),(680,'atto_clear','version','2014111000'),(681,'atto_collapse','version','2014111000'),(682,'atto_emoticon','version','2014111000'),(683,'atto_equation','version','2014111000'),(684,'atto_fontcolor','version','2014111000'),(685,'atto_html','version','2014111000'),(686,'atto_image','version','2014111000'),(687,'atto_indent','version','2014111000'),(688,'atto_italic','version','2014111000'),(689,'atto_link','version','2014111000'),(690,'atto_managefiles','version','2014111000'),(691,'atto_media','version','2014111000'),(692,'atto_noautolink','version','2014111000'),(693,'atto_orderedlist','version','2014111000'),(694,'atto_rtl','version','2014111000'),(695,'atto_strike','version','2014111000'),(696,'atto_subscript','version','2014111000'),(697,'atto_superscript','version','2014111000'),(698,'atto_table','version','2014111000'),(699,'atto_title','version','2014111000'),(700,'atto_underline','version','2014111000'),(701,'atto_undo','version','2014111000'),(702,'atto_unorderedlist','version','2014111000'),(703,'tinymce_ctrlhelp','version','2014111000'),(704,'tinymce_managefiles','version','2014111000'),(705,'tinymce_moodleemoticon','version','2014111000'),(706,'tinymce_moodleimage','version','2014111000'),(707,'tinymce_moodlemedia','version','2014111000'),(708,'tinymce_moodlenolink','version','2014111000'),(709,'tinymce_pdw','version','2014111000'),(710,'tinymce_spellchecker','version','2014111000'),(712,'tinymce_wrap','version','2014111000'),(713,'logstore_database','version','2014111000'),(714,'logstore_legacy','version','2014111000'),(715,'logstore_standard','version','2014111000'),(716,'assign','feedback_plugin_for_gradebook','assignfeedback_comments'),(717,'assign','showrecentsubmissions','0'),(718,'assign','submissionreceipts','1'),(719,'assign','submissionstatement','This assignment is my own work, except where I have acknowledged the use of the works of other people.'),(720,'assign','alwaysshowdescription','1'),(721,'assign','alwaysshowdescription_adv',''),(722,'assign','alwaysshowdescription_locked',''),(723,'assign','allowsubmissionsfromdate','0'),(724,'assign','allowsubmissionsfromdate_enabled','1'),(725,'assign','allowsubmissionsfromdate_adv',''),(726,'assign','duedate','604800'),(727,'assign','duedate_enabled','1'),(728,'assign','duedate_adv',''),(729,'assign','cutoffdate','1209600'),(730,'assign','cutoffdate_enabled',''),(731,'assign','cutoffdate_adv',''),(732,'assign','submissiondrafts','0'),(733,'assign','submissiondrafts_adv',''),(734,'assign','submissiondrafts_locked',''),(735,'assign','requiresubmissionstatement','0'),(736,'assign','requiresubmissionstatement_adv',''),(737,'assign','requiresubmissionstatement_locked',''),(738,'assign','attemptreopenmethod','none'),(739,'assign','attemptreopenmethod_adv',''),(740,'assign','attemptreopenmethod_locked',''),(741,'assign','maxattempts','-1'),(742,'assign','maxattempts_adv',''),(743,'assign','maxattempts_locked',''),(744,'assign','teamsubmission','0'),(745,'assign','teamsubmission_adv',''),(746,'assign','teamsubmission_locked',''),(747,'assign','requireallteammemberssubmit','0'),(748,'assign','requireallteammemberssubmit_adv',''),(749,'assign','requireallteammemberssubmit_locked',''),(750,'assign','teamsubmissiongroupingid',''),(751,'assign','teamsubmissiongroupingid_adv',''),(752,'assign','sendnotifications','0'),(753,'assign','sendnotifications_adv',''),(754,'assign','sendnotifications_locked',''),(755,'assign','sendlatenotifications','0'),(756,'assign','sendlatenotifications_adv',''),(757,'assign','sendlatenotifications_locked',''),(758,'assign','sendstudentnotifications','1'),(759,'assign','sendstudentnotifications_adv',''),(760,'assign','sendstudentnotifications_locked',''),(761,'assign','blindmarking','0'),(762,'assign','blindmarking_adv',''),(763,'assign','blindmarking_locked',''),(764,'assign','markingworkflow','0'),(765,'assign','markingworkflow_adv',''),(766,'assign','markingworkflow_locked',''),(767,'assign','markingallocation','0'),(768,'assign','markingallocation_adv',''),(769,'assign','markingallocation_locked',''),(770,'assignsubmission_file','default','1'),(771,'assignsubmission_file','maxbytes','1048576'),(772,'assignsubmission_onlinetext','default','0'),(773,'assignfeedback_comments','default','1'),(774,'assignfeedback_comments','inline','0'),(775,'assignfeedback_comments','inline_adv',''),(776,'assignfeedback_comments','inline_locked',''),(777,'assignfeedback_editpdf','stamps',''),(778,'assignfeedback_file','default','0'),(779,'assignfeedback_offline','default','0'),(780,'book','requiremodintro','1'),(781,'book','numberingoptions','0,1,2,3'),(782,'book','numbering','1'),(783,'folder','requiremodintro','1'),(784,'folder','showexpanded','1'),(785,'imscp','requiremodintro','1'),(786,'imscp','keepold','1'),(787,'imscp','keepold_adv',''),(788,'label','dndmedia','1'),(789,'label','dndresizewidth','400'),(790,'label','dndresizeheight','400'),(791,'lesson','requiremodintro','1'),(792,'page','requiremodintro','1'),(793,'page','displayoptions','5'),(794,'page','printheading','1'),(795,'page','printintro','0'),(796,'page','display','5'),(797,'page','popupwidth','620'),(798,'page','popupheight','450'),(799,'quiz','timelimit','0'),(800,'quiz','timelimit_adv',''),(801,'quiz','overduehandling','autosubmit'),(802,'quiz','overduehandling_adv',''),(803,'quiz','graceperiod','86400'),(804,'quiz','graceperiod_adv',''),(805,'quiz','graceperiodmin','60'),(806,'quiz','attempts','0'),(807,'quiz','attempts_adv',''),(808,'quiz','grademethod','1'),(809,'quiz','grademethod_adv',''),(810,'quiz','maximumgrade','10'),(811,'quiz','shufflequestions','0'),(812,'quiz','shufflequestions_adv',''),(813,'quiz','questionsperpage','1'),(814,'quiz','questionsperpage_adv',''),(815,'quiz','navmethod','free'),(816,'quiz','navmethod_adv','1'),(817,'quiz','shuffleanswers','1'),(818,'quiz','shuffleanswers_adv',''),(819,'quiz','preferredbehaviour','deferredfeedback'),(820,'quiz','attemptonlast','0'),(821,'quiz','attemptonlast_adv','1'),(822,'quiz','reviewattempt','69904'),(823,'quiz','reviewcorrectness','69904'),(824,'quiz','reviewmarks','69904'),(825,'quiz','reviewspecificfeedback','69904'),(826,'quiz','reviewgeneralfeedback','69904'),(827,'quiz','reviewrightanswer','69904'),(828,'quiz','reviewoverallfeedback','4368'),(829,'quiz','showuserpicture','0'),(830,'quiz','showuserpicture_adv',''),(831,'quiz','decimalpoints','2'),(832,'quiz','decimalpoints_adv',''),(833,'quiz','questiondecimalpoints','-1'),(834,'quiz','questiondecimalpoints_adv','1'),(835,'quiz','showblocks','0'),(836,'quiz','showblocks_adv','1'),(837,'quiz','password',''),(838,'quiz','password_adv','1'),(839,'quiz','subnet',''),(840,'quiz','subnet_adv','1'),(841,'quiz','delay1','0'),(842,'quiz','delay1_adv','1'),(843,'quiz','delay2','0'),(844,'quiz','delay2_adv','1'),(845,'quiz','browsersecurity','-'),(846,'quiz','browsersecurity_adv','1'),(847,'quiz','autosaveperiod','120'),(848,'resource','framesize','130'),(849,'resource','requiremodintro','1'),(850,'resource','displayoptions','0,1,4,5,6'),(851,'resource','printintro','1'),(852,'resource','display','0'),(853,'resource','showsize','0'),(854,'resource','showtype','0'),(855,'resource','popupwidth','620'),(856,'resource','popupheight','450'),(857,'resource','filterfiles','0'),(858,'scorm','displaycoursestructure','0'),(859,'scorm','displaycoursestructure_adv',''),(860,'scorm','popup','0'),(861,'scorm','popup_adv',''),(862,'scorm','displayactivityname','1'),(863,'scorm','framewidth','100'),(864,'scorm','framewidth_adv','1'),(865,'scorm','frameheight','500'),(866,'scorm','frameheight_adv','1'),(867,'scorm','winoptgrp_adv','1'),(868,'scorm','scrollbars','0'),(869,'scorm','directories','0'),(870,'scorm','location','0'),(871,'scorm','menubar','0'),(872,'scorm','toolbar','0'),(873,'scorm','status','0'),(874,'scorm','skipview','0'),(875,'scorm','skipview_adv','1'),(876,'scorm','hidebrowse','0'),(877,'scorm','hidebrowse_adv','1'),(878,'scorm','hidetoc','0'),(879,'scorm','hidetoc_adv','1'),(880,'scorm','nav','1'),(881,'scorm','nav_adv','1'),(882,'scorm','navpositionleft','-100'),(883,'scorm','navpositionleft_adv','1'),(884,'scorm','navpositiontop','-100'),(885,'scorm','navpositiontop_adv','1'),(886,'scorm','collapsetocwinsize','767'),(887,'scorm','collapsetocwinsize_adv','1'),(888,'scorm','displayattemptstatus','1'),(889,'scorm','displayattemptstatus_adv',''),(890,'scorm','grademethod','1'),(891,'scorm','maxgrade','100'),(892,'scorm','maxattempt','0'),(893,'scorm','whatgrade','0'),(894,'scorm','forcecompleted','0'),(895,'scorm','forcenewattempt','0'),(896,'scorm','autocommit','0'),(897,'scorm','lastattemptlock','0'),(898,'scorm','auto','0'),(899,'scorm','updatefreq','0'),(900,'scorm','scorm12standard','1'),(901,'scorm','allowtypeexternal','0'),(902,'scorm','allowtypelocalsync','0'),(903,'scorm','allowtypeexternalaicc','0'),(904,'scorm','allowaicchacp','0'),(905,'scorm','aicchacptimeout','30'),(906,'scorm','aicchacpkeepsessiondata','1'),(907,'scorm','aiccuserid','1'),(908,'scorm','forcejavascript','1'),(909,'scorm','allowapidebug','0'),(910,'scorm','apidebugmask','.*'),(911,'url','framesize','130'),(912,'url','requiremodintro','1'),(913,'url','secretphrase',''),(914,'url','rolesinparams','0'),(915,'url','displayoptions','0,1,5,6'),(916,'url','printintro','1'),(917,'url','display','0'),(918,'url','popupwidth','620'),(919,'url','popupheight','450'),(920,'workshop','grade','80'),(921,'workshop','gradinggrade','20'),(922,'workshop','gradedecimals','0'),(923,'workshop','maxbytes','0'),(924,'workshop','strategy','accumulative'),(925,'workshop','examplesmode','0'),(926,'workshopallocation_random','numofreviews','5'),(927,'workshopform_numerrors','grade0','No'),(928,'workshopform_numerrors','grade1','Yes'),(929,'workshopeval_best','comparison','5'),(930,'block_course_overview','defaultmaxcourses','10'),(931,'block_course_overview','forcedefaultmaxcourses','0'),(932,'block_course_overview','showchildren','0'),(933,'block_course_overview','showwelcomearea','0'),(934,'block_course_overview','showcategories','0'),(935,'block_section_links','numsections1','22'),(936,'block_section_links','incby1','2'),(937,'block_section_links','numsections2','40'),(938,'block_section_links','incby2','5'),(939,'format_singleactivity','activitytype','forum'),(940,'enrol_cohort','roleid','5'),(941,'enrol_cohort','unenrolaction','0'),(942,'enrol_database','dbtype',''),(943,'enrol_database','dbhost','localhost'),(944,'enrol_database','dbuser',''),(945,'enrol_database','dbpass',''),(946,'enrol_database','dbname',''),(947,'enrol_database','dbencoding','utf-8'),(948,'enrol_database','dbsetupsql',''),(949,'enrol_database','dbsybasequoting','0'),(950,'enrol_database','debugdb','0'),(951,'enrol_database','localcoursefield','idnumber'),(952,'enrol_database','localuserfield','idnumber'),(953,'enrol_database','localrolefield','shortname'),(954,'enrol_database','localcategoryfield','id'),(955,'enrol_database','remoteenroltable',''),(956,'enrol_database','remotecoursefield',''),(957,'enrol_database','remoteuserfield',''),(958,'enrol_database','remoterolefield',''),(959,'enrol_database','remoteotheruserfield',''),(960,'enrol_database','defaultrole','5'),(961,'enrol_database','ignorehiddencourses','0'),(962,'enrol_database','unenrolaction','0'),(963,'enrol_database','newcoursetable',''),(964,'enrol_database','newcoursefullname','fullname'),(965,'enrol_database','newcourseshortname','shortname'),(966,'enrol_database','newcourseidnumber','idnumber'),(967,'enrol_database','newcoursecategory',''),(968,'enrol_database','defaultcategory','1'),(969,'enrol_database','templatecourse',''),(970,'enrol_flatfile','location',''),(971,'enrol_flatfile','encoding','UTF-8'),(972,'enrol_flatfile','mailstudents','0'),(973,'enrol_flatfile','mailteachers','0'),(974,'enrol_flatfile','mailadmins','0'),(975,'enrol_flatfile','unenrolaction','3'),(976,'enrol_flatfile','expiredaction','3'),(977,'enrol_guest','requirepassword','0'),(978,'enrol_guest','usepasswordpolicy','0'),(979,'enrol_guest','showhint','0'),(980,'enrol_guest','defaultenrol','1'),(981,'enrol_guest','status','1'),(982,'enrol_guest','status_adv',''),(983,'enrol_imsenterprise','imsfilelocation',''),(984,'enrol_imsenterprise','logtolocation',''),(985,'enrol_imsenterprise','mailadmins','0'),(986,'enrol_imsenterprise','createnewusers','0'),(987,'enrol_imsenterprise','imsdeleteusers','0'),(988,'enrol_imsenterprise','fixcaseusernames','0'),(989,'enrol_imsenterprise','fixcasepersonalnames','0'),(990,'enrol_imsenterprise','imssourcedidfallback','0'),(991,'enrol_imsenterprise','imsrolemap01','5'),(992,'enrol_imsenterprise','imsrolemap02','3'),(993,'enrol_imsenterprise','imsrolemap03','3'),(994,'enrol_imsenterprise','imsrolemap04','5'),(995,'enrol_imsenterprise','imsrolemap05','0'),(996,'enrol_imsenterprise','imsrolemap06','4'),(997,'enrol_imsenterprise','imsrolemap07','0'),(998,'enrol_imsenterprise','imsrolemap08','4'),(999,'enrol_imsenterprise','truncatecoursecodes','0'),(1000,'enrol_imsenterprise','createnewcourses','0'),(1001,'enrol_imsenterprise','createnewcategories','0'),(1002,'enrol_imsenterprise','imsunenrol','0'),(1003,'enrol_imsenterprise','imscoursemapshortname','coursecode'),(1004,'enrol_imsenterprise','imscoursemapfullname','short'),(1005,'enrol_imsenterprise','imscoursemapsummary','ignore'),(1006,'enrol_imsenterprise','imsrestricttarget',''),(1007,'enrol_imsenterprise','imscapitafix','0'),(1008,'enrol_manual','expiredaction','1'),(1009,'enrol_manual','expirynotifyhour','6'),(1010,'enrol_manual','defaultenrol','1'),(1011,'enrol_manual','status','0'),(1012,'enrol_manual','roleid','5'),(1013,'enrol_manual','enrolperiod','0'),(1014,'enrol_manual','expirynotify','0'),(1015,'enrol_manual','expirythreshold','86400'),(1016,'enrol_meta','nosyncroleids',''),(1017,'enrol_meta','syncall','1'),(1018,'enrol_meta','unenrolaction','3'),(1019,'enrol_mnet','roleid','5'),(1020,'enrol_mnet','roleid_adv','1'),(1021,'enrol_paypal','paypalbusiness',''),(1022,'enrol_paypal','mailstudents','0'),(1023,'enrol_paypal','mailteachers','0'),(1024,'enrol_paypal','mailadmins','0'),(1025,'enrol_paypal','expiredaction','3'),(1026,'enrol_paypal','status','1'),(1027,'enrol_paypal','cost','0'),(1028,'enrol_paypal','currency','USD'),(1029,'enrol_paypal','roleid','5'),(1030,'enrol_paypal','enrolperiod','0'),(1031,'enrol_self','requirepassword','0'),(1032,'enrol_self','usepasswordpolicy','0'),(1033,'enrol_self','showhint','0'),(1034,'enrol_self','expiredaction','1'),(1035,'enrol_self','expirynotifyhour','6'),(1036,'enrol_self','defaultenrol','1'),(1037,'enrol_self','status','1'),(1038,'enrol_self','newenrols','1'),(1039,'enrol_self','groupkey','0'),(1040,'enrol_self','roleid','5'),(1041,'enrol_self','enrolperiod','0'),(1042,'enrol_self','expirynotify','0'),(1043,'enrol_self','expirythreshold','86400'),(1044,'enrol_self','longtimenosee','0'),(1045,'enrol_self','maxenrolled','0'),(1046,'enrol_self','sendcoursewelcomemessage','1'),(1047,'filter_emoticon','formats','1,4,0'),(1048,'filter_mathjaxloader','httpurl','http://cdn.mathjax.org/mathjax/2.3-latest/MathJax.js'),(1049,'filter_mathjaxloader','httpsurl','https://cdn.mathjax.org/mathjax/2.3-latest/MathJax.js'),(1050,'filter_mathjaxloader','texfiltercompatibility','0'),(1051,'filter_mathjaxloader','mathjaxconfig','\nMathJax.Hub.Config({\n    config: [\"Accessible.js\", \"Safe.js\"],\n    errorSettings: { message: [\"!\"] },\n    skipStartupTypeset: true,\n    messageStyle: \"none\"\n});\n'),(1052,'filter_mathjaxloader','additionaldelimiters',''),(1053,'filter_tex','latexpreamble','\\usepackage[latin1]{inputenc}\n\\usepackage{amsmath}\n\\usepackage{amsfonts}\n\\RequirePackage{amsmath,amssymb,latexsym}\n'),(1054,'filter_tex','latexbackground','#FFFFFF'),(1055,'filter_tex','density','120'),(1056,'filter_tex','pathlatex','/usr/bin/latex'),(1057,'filter_tex','pathdvips','/usr/bin/dvips'),(1058,'filter_tex','pathconvert','/usr/bin/convert'),(1059,'filter_tex','pathdvisvgm','/usr/bin/dvisvgm'),(1060,'filter_tex','pathmimetex',''),(1061,'filter_tex','convertformat','gif'),(1062,'filter_urltolink','formats','0'),(1063,'filter_urltolink','embedimages','1'),(1064,'logstore_database','dbdriver',''),(1065,'logstore_database','dbhost',''),(1066,'logstore_database','dbuser',''),(1067,'logstore_database','dbpass',''),(1068,'logstore_database','dbname',''),(1069,'logstore_database','dbtable',''),(1070,'logstore_database','dbpersist','0'),(1071,'logstore_database','dbsocket',''),(1072,'logstore_database','dbport',''),(1073,'logstore_database','dbschema',''),(1074,'logstore_database','dbcollation',''),(1075,'logstore_database','buffersize','50'),(1076,'logstore_database','logguests','0'),(1077,'logstore_database','includelevels','1,2,0'),(1078,'logstore_database','includeactions','c,r,u,d'),(1079,'logstore_legacy','loglegacy','0'),(1080,'logstore_standard','logguests','1'),(1081,'logstore_standard','loglifetime','0'),(1082,'logstore_standard','buffersize','50'),(1083,'editor_atto','toolbar','collapse = collapse\nstyle1 = title, bold, italic\nlist = unorderedlist, orderedlist\nlinks = link\nfiles = image, media, managefiles\nstyle2 = underline, strike, subscript, superscript\nalign = align\nindent = indent\ninsert = equation, charmap, table, clear\nundo = undo\naccessibility = accessibilitychecker, accessibilityhelper\nother = html'),(1084,'editor_atto','autosavefrequency','60'),(1085,'atto_collapse','showgroups','5'),(1086,'atto_equation','librarygroup1','\n\\cdot\n\\times\n\\ast\n\\div\n\\diamond\n\\pm\n\\mp\n\\oplus\n\\ominus\n\\otimes\n\\oslash\n\\odot\n\\circ\n\\bullet\n\\asymp\n\\equiv\n\\subseteq\n\\supseteq\n\\leq\n\\geq\n\\preceq\n\\succeq\n\\sim\n\\simeq\n\\approx\n\\subset\n\\supset\n\\ll\n\\gg\n\\prec\n\\succ\n\\infty\n\\in\n\\ni\n\\forall\n\\exists\n\\neq\n'),(1087,'atto_equation','librarygroup2','\n\\leftarrow\n\\rightarrow\n\\uparrow\n\\downarrow\n\\leftrightarrow\n\\nearrow\n\\searrow\n\\swarrow\n\\nwarrow\n\\Leftarrow\n\\Rightarrow\n\\Uparrow\n\\Downarrow\n\\Leftrightarrow\n'),(1088,'atto_equation','librarygroup3','\n\\alpha\n\\beta\n\\gamma\n\\delta\n\\epsilon\n\\zeta\n\\eta\n\\theta\n\\iota\n\\kappa\n\\lambda\n\\mu\n\\nu\n\\xi\n\\pi\n\\rho\n\\sigma\n\\tau\n\\upsilon\n\\phi\n\\chi\n\\psi\n\\omega\n\\Gamma\n\\Delta\n\\Theta\n\\Lambda\n\\Xi\n\\Pi\n\\Sigma\n\\Upsilon\n\\Phi\n\\Psi\n\\Omega\n'),(1089,'atto_equation','librarygroup4','\n\\sum{a,b}\n\\int_{a}^{b}{c}\n\\iint_{a}^{b}{c}\n\\iiint_{a}^{b}{c}\n\\oint{a}\n(a)\n[a]\n\\lbrace{a}\\rbrace\n\\left| \\begin{matrix} a_1 & a_2 \\ a_3 & a_4 \\end{matrix} \\right|\n'),(1090,'editor_tinymce','customtoolbar','wrap,formatselect,wrap,bold,italic,wrap,bullist,numlist,wrap,link,unlink,wrap,image\n\nundo,redo,wrap,underline,strikethrough,sub,sup,wrap,justifyleft,justifycenter,justifyright,wrap,outdent,indent,wrap,forecolor,backcolor,wrap,ltr,rtl\n\nfontselect,fontsizeselect,wrap,code,search,replace,wrap,nonbreaking,charmap,table,wrap,cleanup,removeformat,pastetext,pasteword,wrap,fullscreen'),(1091,'editor_tinymce','fontselectlist','Trebuchet=Trebuchet MS,Verdana,Arial,Helvetica,sans-serif;Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,times new roman,times,serif;Tahoma=tahoma,arial,helvetica,sans-serif;Times New Roman=times new roman,times,serif;Verdana=verdana,arial,helvetica,sans-serif;Impact=impact;Wingdings=wingdings'),(1092,'editor_tinymce','customconfig',''),(1093,'tinymce_moodleemoticon','requireemoticon','1'),(1094,'tinymce_spellchecker','spellengine',''),(1095,'tinymce_spellchecker','spelllanguagelist','+English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr,German=de,Italian=it,Polish=pl,Portuguese=pt,Spanish=es,Swedish=sv'),(1096,'local_stemlms','version','2010022400'),(1097,'local_stemlms','installrunning','1'),(1098,'block_mnv_courseenrollment','version','2011062800'),(1099,'block_mnv_gradereturn','version','2011062800');
/*!40000 ALTER TABLE `mdl_config_plugins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_context`
--

DROP TABLE IF EXISTS `mdl_context`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_context` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `contextlevel` bigint(10) NOT NULL DEFAULT '0',
  `instanceid` bigint(10) NOT NULL DEFAULT '0',
  `path` varchar(255) DEFAULT NULL,
  `depth` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_cont_conins_uix` (`contextlevel`,`instanceid`),
  KEY `mdl_cont_ins_ix` (`instanceid`),
  KEY `mdl_cont_pat_ix` (`path`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COMMENT='one of these must be set';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_context`
--

LOCK TABLES `mdl_context` WRITE;
/*!40000 ALTER TABLE `mdl_context` DISABLE KEYS */;
INSERT INTO `mdl_context` VALUES (1,10,0,'/1',1),(2,50,1,'/1/2',2),(3,40,1,'/1/3',2),(4,30,1,'/1/4',2),(5,30,2,'/1/5',2),(6,80,1,'/1/2/6',3),(7,80,2,'/1/2/7',3),(8,80,3,'/1/2/8',3),(9,80,4,'/1/9',2),(10,80,5,'/1/10',2),(11,80,6,'/1/11',2),(12,80,7,'/1/12',2),(13,80,8,'/1/13',2),(14,80,9,'/1/14',2),(15,80,10,'/1/15',2),(16,80,11,'/1/16',2),(17,80,12,'/1/17',2),(18,80,13,'/1/2/18',3);
/*!40000 ALTER TABLE `mdl_context` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_context_temp`
--

DROP TABLE IF EXISTS `mdl_context_temp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_context_temp` (
  `id` bigint(10) NOT NULL,
  `path` varchar(255) NOT NULL DEFAULT '',
  `depth` tinyint(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Used by build_context_path() in upgrade and cron to keep con';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_context_temp`
--

LOCK TABLES `mdl_context_temp` WRITE;
/*!40000 ALTER TABLE `mdl_context_temp` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_context_temp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_course`
--

DROP TABLE IF EXISTS `mdl_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_course` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `category` bigint(10) NOT NULL DEFAULT '0',
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  `fullname` varchar(254) NOT NULL DEFAULT '',
  `shortname` varchar(255) NOT NULL DEFAULT '',
  `idnumber` varchar(100) NOT NULL DEFAULT '',
  `summary` longtext,
  `summaryformat` tinyint(2) NOT NULL DEFAULT '0',
  `format` varchar(21) NOT NULL DEFAULT 'topics',
  `showgrades` tinyint(2) NOT NULL DEFAULT '1',
  `newsitems` mediumint(5) NOT NULL DEFAULT '1',
  `startdate` bigint(10) NOT NULL DEFAULT '0',
  `marker` bigint(10) NOT NULL DEFAULT '0',
  `maxbytes` bigint(10) NOT NULL DEFAULT '0',
  `legacyfiles` smallint(4) NOT NULL DEFAULT '0',
  `showreports` smallint(4) NOT NULL DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `visibleold` tinyint(1) NOT NULL DEFAULT '1',
  `groupmode` smallint(4) NOT NULL DEFAULT '0',
  `groupmodeforce` smallint(4) NOT NULL DEFAULT '0',
  `defaultgroupingid` bigint(10) NOT NULL DEFAULT '0',
  `lang` varchar(30) NOT NULL DEFAULT '',
  `calendartype` varchar(30) NOT NULL DEFAULT '',
  `theme` varchar(50) NOT NULL DEFAULT '',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `requested` tinyint(1) NOT NULL DEFAULT '0',
  `enablecompletion` tinyint(1) NOT NULL DEFAULT '0',
  `completionnotify` tinyint(1) NOT NULL DEFAULT '0',
  `cacherev` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_cour_cat_ix` (`category`),
  KEY `mdl_cour_idn_ix` (`idnumber`),
  KEY `mdl_cour_sho_ix` (`shortname`),
  KEY `mdl_cour_sor_ix` (`sortorder`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Central course table';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_course`
--

LOCK TABLES `mdl_course` WRITE;
/*!40000 ALTER TABLE `mdl_course` DISABLE KEYS */;
INSERT INTO `mdl_course` VALUES (1,0,0,'STEM Ecosystem LMS - anon','stemlms','','',0,'site',1,3,0,0,0,0,0,1,1,0,0,0,'','','',1435339751,1435340451,0,0,0,1443029459);
/*!40000 ALTER TABLE `mdl_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_course_categories`
--

DROP TABLE IF EXISTS `mdl_course_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_course_categories` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `idnumber` varchar(100) DEFAULT NULL,
  `description` longtext,
  `descriptionformat` tinyint(2) NOT NULL DEFAULT '0',
  `parent` bigint(10) NOT NULL DEFAULT '0',
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  `coursecount` bigint(10) NOT NULL DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `visibleold` tinyint(1) NOT NULL DEFAULT '1',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `depth` bigint(10) NOT NULL DEFAULT '0',
  `path` varchar(255) NOT NULL DEFAULT '',
  `theme` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_courcate_par_ix` (`parent`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Course categories';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_course_categories`
--

LOCK TABLES `mdl_course_categories` WRITE;
/*!40000 ALTER TABLE `mdl_course_categories` DISABLE KEYS */;
INSERT INTO `mdl_course_categories` VALUES (1,'Miscellaneous',NULL,NULL,0,0,10000,0,1,1,1435339751,1,'/1',NULL);
/*!40000 ALTER TABLE `mdl_course_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_course_completion_aggr_methd`
--

DROP TABLE IF EXISTS `mdl_course_completion_aggr_methd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_course_completion_aggr_methd` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `criteriatype` bigint(10) DEFAULT NULL,
  `method` tinyint(1) NOT NULL DEFAULT '0',
  `value` decimal(10,5) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_courcompaggrmeth_coucr_uix` (`course`,`criteriatype`),
  KEY `mdl_courcompaggrmeth_cou_ix` (`course`),
  KEY `mdl_courcompaggrmeth_cri_ix` (`criteriatype`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Course completion aggregation methods for criteria';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_course_completion_aggr_methd`
--

LOCK TABLES `mdl_course_completion_aggr_methd` WRITE;
/*!40000 ALTER TABLE `mdl_course_completion_aggr_methd` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_course_completion_aggr_methd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_course_completion_crit_compl`
--

DROP TABLE IF EXISTS `mdl_course_completion_crit_compl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_course_completion_crit_compl` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `course` bigint(10) NOT NULL DEFAULT '0',
  `criteriaid` bigint(10) NOT NULL DEFAULT '0',
  `gradefinal` decimal(10,5) DEFAULT NULL,
  `unenroled` bigint(10) DEFAULT NULL,
  `timecompleted` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_courcompcritcomp_useco_uix` (`userid`,`course`,`criteriaid`),
  KEY `mdl_courcompcritcomp_use_ix` (`userid`),
  KEY `mdl_courcompcritcomp_cou_ix` (`course`),
  KEY `mdl_courcompcritcomp_cri_ix` (`criteriaid`),
  KEY `mdl_courcompcritcomp_tim_ix` (`timecompleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Course completion user records';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_course_completion_crit_compl`
--

LOCK TABLES `mdl_course_completion_crit_compl` WRITE;
/*!40000 ALTER TABLE `mdl_course_completion_crit_compl` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_course_completion_crit_compl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_course_completion_criteria`
--

DROP TABLE IF EXISTS `mdl_course_completion_criteria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_course_completion_criteria` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `criteriatype` bigint(10) NOT NULL DEFAULT '0',
  `module` varchar(100) DEFAULT NULL,
  `moduleinstance` bigint(10) DEFAULT NULL,
  `courseinstance` bigint(10) DEFAULT NULL,
  `enrolperiod` bigint(10) DEFAULT NULL,
  `timeend` bigint(10) DEFAULT NULL,
  `gradepass` decimal(10,5) DEFAULT NULL,
  `role` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_courcompcrit_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Course completion criteria';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_course_completion_criteria`
--

LOCK TABLES `mdl_course_completion_criteria` WRITE;
/*!40000 ALTER TABLE `mdl_course_completion_criteria` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_course_completion_criteria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_course_completions`
--

DROP TABLE IF EXISTS `mdl_course_completions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_course_completions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `course` bigint(10) NOT NULL DEFAULT '0',
  `timeenrolled` bigint(10) NOT NULL DEFAULT '0',
  `timestarted` bigint(10) NOT NULL DEFAULT '0',
  `timecompleted` bigint(10) DEFAULT NULL,
  `reaggregate` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_courcomp_usecou_uix` (`userid`,`course`),
  KEY `mdl_courcomp_use_ix` (`userid`),
  KEY `mdl_courcomp_cou_ix` (`course`),
  KEY `mdl_courcomp_tim_ix` (`timecompleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Course completion records';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_course_completions`
--

LOCK TABLES `mdl_course_completions` WRITE;
/*!40000 ALTER TABLE `mdl_course_completions` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_course_completions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_course_format_options`
--

DROP TABLE IF EXISTS `mdl_course_format_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_course_format_options` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL,
  `format` varchar(21) NOT NULL DEFAULT '',
  `sectionid` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(100) NOT NULL DEFAULT '',
  `value` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_courformopti_couforsec_uix` (`courseid`,`format`,`sectionid`,`name`),
  KEY `mdl_courformopti_cou_ix` (`courseid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Stores format-specific options for the course or course sect';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_course_format_options`
--

LOCK TABLES `mdl_course_format_options` WRITE;
/*!40000 ALTER TABLE `mdl_course_format_options` DISABLE KEYS */;
INSERT INTO `mdl_course_format_options` VALUES (1,1,'site',0,'numsections','1');
/*!40000 ALTER TABLE `mdl_course_format_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_course_modules`
--

DROP TABLE IF EXISTS `mdl_course_modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_course_modules` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `module` bigint(10) NOT NULL DEFAULT '0',
  `instance` bigint(10) NOT NULL DEFAULT '0',
  `section` bigint(10) NOT NULL DEFAULT '0',
  `idnumber` varchar(100) DEFAULT NULL,
  `added` bigint(10) NOT NULL DEFAULT '0',
  `score` smallint(4) NOT NULL DEFAULT '0',
  `indent` mediumint(5) NOT NULL DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `visibleold` tinyint(1) NOT NULL DEFAULT '1',
  `groupmode` smallint(4) NOT NULL DEFAULT '0',
  `groupingid` bigint(10) NOT NULL DEFAULT '0',
  `completion` tinyint(1) NOT NULL DEFAULT '0',
  `completiongradeitemnumber` bigint(10) DEFAULT NULL,
  `completionview` tinyint(1) NOT NULL DEFAULT '0',
  `completionexpected` bigint(10) NOT NULL DEFAULT '0',
  `showdescription` tinyint(1) NOT NULL DEFAULT '0',
  `availability` longtext,
  PRIMARY KEY (`id`),
  KEY `mdl_courmodu_vis_ix` (`visible`),
  KEY `mdl_courmodu_cou_ix` (`course`),
  KEY `mdl_courmodu_mod_ix` (`module`),
  KEY `mdl_courmodu_ins_ix` (`instance`),
  KEY `mdl_courmodu_idncou_ix` (`idnumber`,`course`),
  KEY `mdl_courmodu_gro_ix` (`groupingid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='course_modules table retrofitted from MySQL';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_course_modules`
--

LOCK TABLES `mdl_course_modules` WRITE;
/*!40000 ALTER TABLE `mdl_course_modules` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_course_modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_course_modules_completion`
--

DROP TABLE IF EXISTS `mdl_course_modules_completion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_course_modules_completion` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `coursemoduleid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `completionstate` tinyint(1) NOT NULL,
  `viewed` tinyint(1) DEFAULT NULL,
  `timemodified` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_courmoducomp_usecou_uix` (`userid`,`coursemoduleid`),
  KEY `mdl_courmoducomp_cou_ix` (`coursemoduleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores the completion state (completed or not completed, etc';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_course_modules_completion`
--

LOCK TABLES `mdl_course_modules_completion` WRITE;
/*!40000 ALTER TABLE `mdl_course_modules_completion` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_course_modules_completion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_course_published`
--

DROP TABLE IF EXISTS `mdl_course_published`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_course_published` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `huburl` varchar(255) DEFAULT NULL,
  `courseid` bigint(10) NOT NULL,
  `timepublished` bigint(10) NOT NULL,
  `enrollable` tinyint(1) NOT NULL DEFAULT '1',
  `hubcourseid` bigint(10) NOT NULL,
  `status` tinyint(1) DEFAULT '0',
  `timechecked` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Information about how and when an local courses were publish';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_course_published`
--

LOCK TABLES `mdl_course_published` WRITE;
/*!40000 ALTER TABLE `mdl_course_published` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_course_published` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_course_request`
--

DROP TABLE IF EXISTS `mdl_course_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_course_request` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(254) NOT NULL DEFAULT '',
  `shortname` varchar(100) NOT NULL DEFAULT '',
  `summary` longtext NOT NULL,
  `summaryformat` tinyint(2) NOT NULL DEFAULT '0',
  `category` bigint(10) NOT NULL DEFAULT '0',
  `reason` longtext NOT NULL,
  `requester` bigint(10) NOT NULL DEFAULT '0',
  `password` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_courrequ_sho_ix` (`shortname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='course requests';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_course_request`
--

LOCK TABLES `mdl_course_request` WRITE;
/*!40000 ALTER TABLE `mdl_course_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_course_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_course_sections`
--

DROP TABLE IF EXISTS `mdl_course_sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_course_sections` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `section` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `summary` longtext,
  `summaryformat` tinyint(2) NOT NULL DEFAULT '0',
  `sequence` longtext,
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `availability` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_coursect_cousec_uix` (`course`,`section`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='to define the sections for each course';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_course_sections`
--

LOCK TABLES `mdl_course_sections` WRITE;
/*!40000 ALTER TABLE `mdl_course_sections` DISABLE KEYS */;
INSERT INTO `mdl_course_sections` VALUES (1,1,0,NULL,'',1,'',1,NULL),(2,1,1,NULL,'',1,'',1,NULL);
/*!40000 ALTER TABLE `mdl_course_sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_data`
--

DROP TABLE IF EXISTS `mdl_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_data` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext NOT NULL,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `comments` smallint(4) NOT NULL DEFAULT '0',
  `timeavailablefrom` bigint(10) NOT NULL DEFAULT '0',
  `timeavailableto` bigint(10) NOT NULL DEFAULT '0',
  `timeviewfrom` bigint(10) NOT NULL DEFAULT '0',
  `timeviewto` bigint(10) NOT NULL DEFAULT '0',
  `requiredentries` int(8) NOT NULL DEFAULT '0',
  `requiredentriestoview` int(8) NOT NULL DEFAULT '0',
  `maxentries` int(8) NOT NULL DEFAULT '0',
  `rssarticles` smallint(4) NOT NULL DEFAULT '0',
  `singletemplate` longtext,
  `listtemplate` longtext,
  `listtemplateheader` longtext,
  `listtemplatefooter` longtext,
  `addtemplate` longtext,
  `rsstemplate` longtext,
  `rsstitletemplate` longtext,
  `csstemplate` longtext,
  `jstemplate` longtext,
  `asearchtemplate` longtext,
  `approval` smallint(4) NOT NULL DEFAULT '0',
  `scale` bigint(10) NOT NULL DEFAULT '0',
  `assessed` bigint(10) NOT NULL DEFAULT '0',
  `assesstimestart` bigint(10) NOT NULL DEFAULT '0',
  `assesstimefinish` bigint(10) NOT NULL DEFAULT '0',
  `defaultsort` bigint(10) NOT NULL DEFAULT '0',
  `defaultsortdir` smallint(4) NOT NULL DEFAULT '0',
  `editany` smallint(4) NOT NULL DEFAULT '0',
  `notification` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_data_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='all database activities';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_data`
--

LOCK TABLES `mdl_data` WRITE;
/*!40000 ALTER TABLE `mdl_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_data_content`
--

DROP TABLE IF EXISTS `mdl_data_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_data_content` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `fieldid` bigint(10) NOT NULL DEFAULT '0',
  `recordid` bigint(10) NOT NULL DEFAULT '0',
  `content` longtext,
  `content1` longtext,
  `content2` longtext,
  `content3` longtext,
  `content4` longtext,
  PRIMARY KEY (`id`),
  KEY `mdl_datacont_rec_ix` (`recordid`),
  KEY `mdl_datacont_fie_ix` (`fieldid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='the content introduced in each record/fields';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_data_content`
--

LOCK TABLES `mdl_data_content` WRITE;
/*!40000 ALTER TABLE `mdl_data_content` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_data_content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_data_fields`
--

DROP TABLE IF EXISTS `mdl_data_fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_data_fields` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `dataid` bigint(10) NOT NULL DEFAULT '0',
  `type` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `description` longtext NOT NULL,
  `param1` longtext,
  `param2` longtext,
  `param3` longtext,
  `param4` longtext,
  `param5` longtext,
  `param6` longtext,
  `param7` longtext,
  `param8` longtext,
  `param9` longtext,
  `param10` longtext,
  PRIMARY KEY (`id`),
  KEY `mdl_datafiel_typdat_ix` (`type`,`dataid`),
  KEY `mdl_datafiel_dat_ix` (`dataid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='every field available';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_data_fields`
--

LOCK TABLES `mdl_data_fields` WRITE;
/*!40000 ALTER TABLE `mdl_data_fields` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_data_fields` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_data_records`
--

DROP TABLE IF EXISTS `mdl_data_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_data_records` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `groupid` bigint(10) NOT NULL DEFAULT '0',
  `dataid` bigint(10) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `approved` smallint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_datareco_dat_ix` (`dataid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='every record introduced';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_data_records`
--

LOCK TABLES `mdl_data_records` WRITE;
/*!40000 ALTER TABLE `mdl_data_records` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_data_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_editor_atto_autosave`
--

DROP TABLE IF EXISTS `mdl_editor_atto_autosave`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_editor_atto_autosave` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `elementid` varchar(255) NOT NULL DEFAULT '',
  `contextid` bigint(10) NOT NULL,
  `pagehash` varchar(64) NOT NULL DEFAULT '',
  `userid` bigint(10) NOT NULL,
  `drafttext` longtext NOT NULL,
  `draftid` bigint(10) DEFAULT NULL,
  `pageinstance` varchar(64) NOT NULL DEFAULT '',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_editattoauto_eleconuse_uix` (`elementid`,`contextid`,`userid`,`pagehash`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Draft text that is auto-saved every 5 seconds while an edito';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_editor_atto_autosave`
--

LOCK TABLES `mdl_editor_atto_autosave` WRITE;
/*!40000 ALTER TABLE `mdl_editor_atto_autosave` DISABLE KEYS */;
INSERT INTO `mdl_editor_atto_autosave` VALUES (2,'summary',1,'408047d35e4e4c22cf8bb636f047481eb9d4fad3',2,'',-1,'yui_3_17_2_3_1439409852368_162',1439408658);
/*!40000 ALTER TABLE `mdl_editor_atto_autosave` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_enrol`
--

DROP TABLE IF EXISTS `mdl_enrol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_enrol` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `enrol` varchar(20) NOT NULL DEFAULT '',
  `status` bigint(10) NOT NULL DEFAULT '0',
  `courseid` bigint(10) NOT NULL,
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `enrolperiod` bigint(10) DEFAULT '0',
  `enrolstartdate` bigint(10) DEFAULT '0',
  `enrolenddate` bigint(10) DEFAULT '0',
  `expirynotify` tinyint(1) DEFAULT '0',
  `expirythreshold` bigint(10) DEFAULT '0',
  `notifyall` tinyint(1) DEFAULT '0',
  `password` varchar(50) DEFAULT NULL,
  `cost` varchar(20) DEFAULT NULL,
  `currency` varchar(3) DEFAULT NULL,
  `roleid` bigint(10) DEFAULT '0',
  `customint1` bigint(10) DEFAULT NULL,
  `customint2` bigint(10) DEFAULT NULL,
  `customint3` bigint(10) DEFAULT NULL,
  `customint4` bigint(10) DEFAULT NULL,
  `customint5` bigint(10) DEFAULT NULL,
  `customint6` bigint(10) DEFAULT NULL,
  `customint7` bigint(10) DEFAULT NULL,
  `customint8` bigint(10) DEFAULT NULL,
  `customchar1` varchar(255) DEFAULT NULL,
  `customchar2` varchar(255) DEFAULT NULL,
  `customchar3` varchar(1333) DEFAULT NULL,
  `customdec1` decimal(12,7) DEFAULT NULL,
  `customdec2` decimal(12,7) DEFAULT NULL,
  `customtext1` longtext,
  `customtext2` longtext,
  `customtext3` longtext,
  `customtext4` longtext,
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_enro_enr_ix` (`enrol`),
  KEY `mdl_enro_cou_ix` (`courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Instances of enrolment plugins used in courses, fields marke';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_enrol`
--

LOCK TABLES `mdl_enrol` WRITE;
/*!40000 ALTER TABLE `mdl_enrol` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_enrol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_enrol_flatfile`
--

DROP TABLE IF EXISTS `mdl_enrol_flatfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_enrol_flatfile` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `action` varchar(30) NOT NULL DEFAULT '',
  `roleid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `courseid` bigint(10) NOT NULL,
  `timestart` bigint(10) NOT NULL DEFAULT '0',
  `timeend` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_enroflat_cou_ix` (`courseid`),
  KEY `mdl_enroflat_use_ix` (`userid`),
  KEY `mdl_enroflat_rol_ix` (`roleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='enrol_flatfile table retrofitted from MySQL';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_enrol_flatfile`
--

LOCK TABLES `mdl_enrol_flatfile` WRITE;
/*!40000 ALTER TABLE `mdl_enrol_flatfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_enrol_flatfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_enrol_paypal`
--

DROP TABLE IF EXISTS `mdl_enrol_paypal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_enrol_paypal` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `business` varchar(255) NOT NULL DEFAULT '',
  `receiver_email` varchar(255) NOT NULL DEFAULT '',
  `receiver_id` varchar(255) NOT NULL DEFAULT '',
  `item_name` varchar(255) NOT NULL DEFAULT '',
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `instanceid` bigint(10) NOT NULL DEFAULT '0',
  `memo` varchar(255) NOT NULL DEFAULT '',
  `tax` varchar(255) NOT NULL DEFAULT '',
  `option_name1` varchar(255) NOT NULL DEFAULT '',
  `option_selection1_x` varchar(255) NOT NULL DEFAULT '',
  `option_name2` varchar(255) NOT NULL DEFAULT '',
  `option_selection2_x` varchar(255) NOT NULL DEFAULT '',
  `payment_status` varchar(255) NOT NULL DEFAULT '',
  `pending_reason` varchar(255) NOT NULL DEFAULT '',
  `reason_code` varchar(30) NOT NULL DEFAULT '',
  `txn_id` varchar(255) NOT NULL DEFAULT '',
  `parent_txn_id` varchar(255) NOT NULL DEFAULT '',
  `payment_type` varchar(30) NOT NULL DEFAULT '',
  `timeupdated` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Holds all known information about PayPal transactions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_enrol_paypal`
--

LOCK TABLES `mdl_enrol_paypal` WRITE;
/*!40000 ALTER TABLE `mdl_enrol_paypal` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_enrol_paypal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_event`
--

DROP TABLE IF EXISTS `mdl_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_event` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` longtext NOT NULL,
  `description` longtext NOT NULL,
  `format` smallint(4) NOT NULL DEFAULT '0',
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `groupid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `repeatid` bigint(10) NOT NULL DEFAULT '0',
  `modulename` varchar(20) NOT NULL DEFAULT '',
  `instance` bigint(10) NOT NULL DEFAULT '0',
  `eventtype` varchar(20) NOT NULL DEFAULT '',
  `timestart` bigint(10) NOT NULL DEFAULT '0',
  `timeduration` bigint(10) NOT NULL DEFAULT '0',
  `visible` smallint(4) NOT NULL DEFAULT '1',
  `uuid` varchar(255) NOT NULL DEFAULT '',
  `sequence` bigint(10) NOT NULL DEFAULT '1',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `subscriptionid` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_even_cou_ix` (`courseid`),
  KEY `mdl_even_use_ix` (`userid`),
  KEY `mdl_even_tim_ix` (`timestart`),
  KEY `mdl_even_tim2_ix` (`timeduration`),
  KEY `mdl_even_grocouvisuse_ix` (`groupid`,`courseid`,`visible`,`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='For everything with a time associated to it';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_event`
--

LOCK TABLES `mdl_event` WRITE;
/*!40000 ALTER TABLE `mdl_event` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_event_subscriptions`
--

DROP TABLE IF EXISTS `mdl_event_subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_event_subscriptions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL DEFAULT '',
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `groupid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `eventtype` varchar(20) NOT NULL DEFAULT '',
  `pollinterval` bigint(10) NOT NULL DEFAULT '0',
  `lastupdated` bigint(10) DEFAULT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tracks subscriptions to remote calendars.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_event_subscriptions`
--

LOCK TABLES `mdl_event_subscriptions` WRITE;
/*!40000 ALTER TABLE `mdl_event_subscriptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_event_subscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_events_handlers`
--

DROP TABLE IF EXISTS `mdl_events_handlers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_events_handlers` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `eventname` varchar(166) NOT NULL DEFAULT '',
  `component` varchar(166) NOT NULL DEFAULT '',
  `handlerfile` varchar(255) NOT NULL DEFAULT '',
  `handlerfunction` longtext,
  `schedule` varchar(255) DEFAULT NULL,
  `status` bigint(10) NOT NULL DEFAULT '0',
  `internal` tinyint(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_evenhand_evecom_uix` (`eventname`,`component`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table is for storing which components requests what typ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_events_handlers`
--

LOCK TABLES `mdl_events_handlers` WRITE;
/*!40000 ALTER TABLE `mdl_events_handlers` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_events_handlers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_events_queue`
--

DROP TABLE IF EXISTS `mdl_events_queue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_events_queue` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `eventdata` longtext NOT NULL,
  `stackdump` longtext,
  `userid` bigint(10) DEFAULT NULL,
  `timecreated` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_evenqueu_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table is for storing queued events. It stores only one ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_events_queue`
--

LOCK TABLES `mdl_events_queue` WRITE;
/*!40000 ALTER TABLE `mdl_events_queue` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_events_queue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_events_queue_handlers`
--

DROP TABLE IF EXISTS `mdl_events_queue_handlers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_events_queue_handlers` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `queuedeventid` bigint(10) NOT NULL,
  `handlerid` bigint(10) NOT NULL,
  `status` bigint(10) DEFAULT NULL,
  `errormessage` longtext,
  `timemodified` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_evenqueuhand_que_ix` (`queuedeventid`),
  KEY `mdl_evenqueuhand_han_ix` (`handlerid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This is the list of queued handlers for processing. The even';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_events_queue_handlers`
--

LOCK TABLES `mdl_events_queue_handlers` WRITE;
/*!40000 ALTER TABLE `mdl_events_queue_handlers` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_events_queue_handlers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_external_functions`
--

DROP TABLE IF EXISTS `mdl_external_functions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_external_functions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL DEFAULT '',
  `classname` varchar(100) NOT NULL DEFAULT '',
  `methodname` varchar(100) NOT NULL DEFAULT '',
  `classpath` varchar(255) DEFAULT NULL,
  `component` varchar(100) NOT NULL DEFAULT '',
  `capabilities` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_extefunc_nam_uix` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8 COMMENT='list of all external functions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_external_functions`
--

LOCK TABLES `mdl_external_functions` WRITE;
/*!40000 ALTER TABLE `mdl_external_functions` DISABLE KEYS */;
INSERT INTO `mdl_external_functions` VALUES (1,'core_cohort_create_cohorts','core_cohort_external','create_cohorts','cohort/externallib.php','moodle','moodle/cohort:manage'),(2,'core_cohort_delete_cohorts','core_cohort_external','delete_cohorts','cohort/externallib.php','moodle','moodle/cohort:manage'),(3,'core_cohort_get_cohorts','core_cohort_external','get_cohorts','cohort/externallib.php','moodle','moodle/cohort:view'),(4,'core_cohort_update_cohorts','core_cohort_external','update_cohorts','cohort/externallib.php','moodle','moodle/cohort:manage'),(5,'core_cohort_add_cohort_members','core_cohort_external','add_cohort_members','cohort/externallib.php','moodle','moodle/cohort:assign'),(6,'core_cohort_delete_cohort_members','core_cohort_external','delete_cohort_members','cohort/externallib.php','moodle','moodle/cohort:assign'),(7,'core_cohort_get_cohort_members','core_cohort_external','get_cohort_members','cohort/externallib.php','moodle','moodle/cohort:view'),(8,'core_grades_get_grades','core_grades_external','get_grades',NULL,'moodle','moodle/grade:view, moodle/grade:viewall, moodle/grade:viewhidden'),(9,'core_grades_update_grades','core_grades_external','update_grades',NULL,'moodle',''),(10,'moodle_group_create_groups','core_group_external','create_groups','group/externallib.php','moodle','moodle/course:managegroups'),(11,'core_group_create_groups','core_group_external','create_groups','group/externallib.php','moodle','moodle/course:managegroups'),(12,'moodle_group_get_groups','core_group_external','get_groups','group/externallib.php','moodle','moodle/course:managegroups'),(13,'core_group_get_groups','core_group_external','get_groups','group/externallib.php','moodle','moodle/course:managegroups'),(14,'moodle_group_get_course_groups','core_group_external','get_course_groups','group/externallib.php','moodle','moodle/course:managegroups'),(15,'core_group_get_course_groups','core_group_external','get_course_groups','group/externallib.php','moodle','moodle/course:managegroups'),(16,'moodle_group_delete_groups','core_group_external','delete_groups','group/externallib.php','moodle','moodle/course:managegroups'),(17,'core_group_delete_groups','core_group_external','delete_groups','group/externallib.php','moodle','moodle/course:managegroups'),(18,'moodle_group_get_groupmembers','core_group_external','get_group_members','group/externallib.php','moodle','moodle/course:managegroups'),(19,'core_group_get_group_members','core_group_external','get_group_members','group/externallib.php','moodle','moodle/course:managegroups'),(20,'moodle_group_add_groupmembers','core_group_external','add_group_members','group/externallib.php','moodle','moodle/course:managegroups'),(21,'core_group_add_group_members','core_group_external','add_group_members','group/externallib.php','moodle','moodle/course:managegroups'),(22,'moodle_group_delete_groupmembers','core_group_external','delete_group_members','group/externallib.php','moodle','moodle/course:managegroups'),(23,'core_group_delete_group_members','core_group_external','delete_group_members','group/externallib.php','moodle','moodle/course:managegroups'),(24,'core_group_create_groupings','core_group_external','create_groupings','group/externallib.php','moodle',''),(25,'core_group_update_groupings','core_group_external','update_groupings','group/externallib.php','moodle',''),(26,'core_group_get_groupings','core_group_external','get_groupings','group/externallib.php','moodle',''),(27,'core_group_get_course_groupings','core_group_external','get_course_groupings','group/externallib.php','moodle',''),(28,'core_group_delete_groupings','core_group_external','delete_groupings','group/externallib.php','moodle',''),(29,'core_group_assign_grouping','core_group_external','assign_grouping','group/externallib.php','moodle',''),(30,'core_group_unassign_grouping','core_group_external','unassign_grouping','group/externallib.php','moodle',''),(31,'moodle_file_get_files','core_files_external','get_files','files/externallib.php','moodle',''),(32,'core_files_get_files','core_files_external','get_files','files/externallib.php','moodle',''),(33,'moodle_file_upload','core_files_external','upload','files/externallib.php','moodle',''),(34,'core_files_upload','core_files_external','upload','files/externallib.php','moodle',''),(35,'moodle_user_create_users','core_user_external','create_users','user/externallib.php','moodle','moodle/user:create'),(36,'core_user_create_users','core_user_external','create_users','user/externallib.php','moodle','moodle/user:create'),(37,'core_user_get_users','core_user_external','get_users','user/externallib.php','moodle','moodle/user:viewdetails, moodle/user:viewhiddendetails, moodle/course:useremail, moodle/user:update'),(38,'moodle_user_get_users_by_id','core_user_external','get_users_by_id','user/externallib.php','moodle','moodle/user:viewdetails, moodle/user:viewhiddendetails, moodle/course:useremail, moodle/user:update'),(39,'core_user_get_users_by_field','core_user_external','get_users_by_field','user/externallib.php','moodle','moodle/user:viewdetails, moodle/user:viewhiddendetails, moodle/course:useremail, moodle/user:update'),(40,'core_user_get_users_by_id','core_user_external','get_users_by_id','user/externallib.php','moodle','moodle/user:viewdetails, moodle/user:viewhiddendetails, moodle/course:useremail, moodle/user:update'),(41,'moodle_user_get_users_by_courseid','core_enrol_external','get_enrolled_users','enrol/externallib.php','moodle','moodle/user:viewdetails, moodle/user:viewhiddendetails, moodle/course:useremail, moodle/user:update, moodle/site:accessallgroups'),(42,'moodle_user_get_course_participants_by_id','core_user_external','get_course_user_profiles','user/externallib.php','moodle','moodle/user:viewdetails, moodle/user:viewhiddendetails, moodle/course:useremail, moodle/user:update, moodle/site:accessallgroups'),(43,'core_user_get_course_user_profiles','core_user_external','get_course_user_profiles','user/externallib.php','moodle','moodle/user:viewdetails, moodle/user:viewhiddendetails, moodle/course:useremail, moodle/user:update, moodle/site:accessallgroups'),(44,'moodle_user_delete_users','core_user_external','delete_users','user/externallib.php','moodle','moodle/user:delete'),(45,'core_user_delete_users','core_user_external','delete_users','user/externallib.php','moodle','moodle/user:delete'),(46,'moodle_user_update_users','core_user_external','update_users','user/externallib.php','moodle','moodle/user:update'),(47,'core_user_update_users','core_user_external','update_users','user/externallib.php','moodle','moodle/user:update'),(48,'core_user_add_user_device','core_user_external','add_user_device','user/externallib.php','moodle',''),(49,'core_enrol_get_enrolled_users_with_capability','core_enrol_external','get_enrolled_users_with_capability','enrol/externallib.php','moodle',''),(50,'moodle_enrol_get_enrolled_users','moodle_enrol_external','get_enrolled_users','enrol/externallib.php','moodle','moodle/site:viewparticipants, moodle/course:viewparticipants,\n            moodle/role:review, moodle/site:accessallgroups, moodle/course:enrolreview'),(51,'core_enrol_get_enrolled_users','core_enrol_external','get_enrolled_users','enrol/externallib.php','moodle','moodle/user:viewdetails, moodle/user:viewhiddendetails, moodle/course:useremail, moodle/user:update, moodle/site:accessallgroups'),(52,'moodle_enrol_get_users_courses','core_enrol_external','get_users_courses','enrol/externallib.php','moodle','moodle/course:viewparticipants'),(53,'core_enrol_get_users_courses','core_enrol_external','get_users_courses','enrol/externallib.php','moodle','moodle/course:viewparticipants'),(54,'core_enrol_get_course_enrolment_methods','core_enrol_external','get_course_enrolment_methods','enrol/externallib.php','moodle',''),(55,'moodle_role_assign','core_role_external','assign_roles','enrol/externallib.php','moodle','moodle/role:assign'),(56,'core_role_assign_roles','core_role_external','assign_roles','enrol/externallib.php','moodle','moodle/role:assign'),(57,'moodle_role_unassign','core_role_external','unassign_roles','enrol/externallib.php','moodle','moodle/role:assign'),(58,'core_role_unassign_roles','core_role_external','unassign_roles','enrol/externallib.php','moodle','moodle/role:assign'),(59,'core_course_get_contents','core_course_external','get_course_contents','course/externallib.php','moodle','moodle/course:update,moodle/course:viewhiddencourses'),(60,'moodle_course_get_courses','core_course_external','get_courses','course/externallib.php','moodle','moodle/course:view,moodle/course:update,moodle/course:viewhiddencourses'),(61,'core_course_get_courses','core_course_external','get_courses','course/externallib.php','moodle','moodle/course:view,moodle/course:update,moodle/course:viewhiddencourses'),(62,'moodle_course_create_courses','core_course_external','create_courses','course/externallib.php','moodle','moodle/course:create,moodle/course:visibility'),(63,'core_course_create_courses','core_course_external','create_courses','course/externallib.php','moodle','moodle/course:create,moodle/course:visibility'),(64,'core_course_delete_courses','core_course_external','delete_courses','course/externallib.php','moodle','moodle/course:delete'),(65,'core_course_delete_modules','core_course_external','delete_modules','course/externallib.php','moodle','moodle/course:manageactivities'),(66,'core_course_duplicate_course','core_course_external','duplicate_course','course/externallib.php','moodle','moodle/backup:backupcourse,moodle/restore:restorecourse,moodle/course:create'),(67,'core_course_update_courses','core_course_external','update_courses','course/externallib.php','moodle','moodle/course:update,moodle/course:changecategory,moodle/course:changefullname,moodle/course:changeshortname,moodle/course:changeidnumber,moodle/course:changesummary,moodle/course:visibility'),(68,'core_course_get_categories','core_course_external','get_categories','course/externallib.php','moodle','moodle/category:viewhiddencategories'),(69,'core_course_create_categories','core_course_external','create_categories','course/externallib.php','moodle','moodle/category:manage'),(70,'core_course_update_categories','core_course_external','update_categories','course/externallib.php','moodle','moodle/category:manage'),(71,'core_course_delete_categories','core_course_external','delete_categories','course/externallib.php','moodle','moodle/category:manage'),(72,'core_course_import_course','core_course_external','import_course','course/externallib.php','moodle','moodle/backup:backuptargetimport, moodle/restore:restoretargetimport'),(73,'moodle_message_send_instantmessages','core_message_external','send_instant_messages','message/externallib.php','moodle','moodle/site:sendmessage'),(74,'core_message_send_instant_messages','core_message_external','send_instant_messages','message/externallib.php','moodle','moodle/site:sendmessage'),(75,'core_message_create_contacts','core_message_external','create_contacts','message/externallib.php','moodle',''),(76,'core_message_delete_contacts','core_message_external','delete_contacts','message/externallib.php','moodle',''),(77,'core_message_block_contacts','core_message_external','block_contacts','message/externallib.php','moodle',''),(78,'core_message_unblock_contacts','core_message_external','unblock_contacts','message/externallib.php','moodle',''),(79,'core_message_get_contacts','core_message_external','get_contacts','message/externallib.php','moodle',''),(80,'core_message_search_contacts','core_message_external','search_contacts','message/externallib.php','moodle',''),(81,'core_message_get_messages','core_message_external','get_messages','message/externallib.php','moodle',''),(82,'moodle_notes_create_notes','core_notes_external','create_notes','notes/externallib.php','moodle','moodle/notes:manage'),(83,'core_notes_create_notes','core_notes_external','create_notes','notes/externallib.php','moodle','moodle/notes:manage'),(84,'core_notes_delete_notes','core_notes_external','delete_notes','notes/externallib.php','moodle','moodle/notes:manage'),(85,'core_notes_get_notes','core_notes_external','get_notes','notes/externallib.php','moodle','moodle/notes:view'),(86,'core_notes_update_notes','core_notes_external','update_notes','notes/externallib.php','moodle','moodle/notes:manage'),(87,'core_grading_get_definitions','core_grading_external','get_definitions',NULL,'moodle',''),(88,'core_grade_get_definitions','core_grade_external','get_definitions','grade/externallib.php','moodle',''),(89,'core_grading_save_definitions','core_grading_external','save_definitions',NULL,'moodle',''),(90,'core_grading_get_gradingform_instances','core_grading_external','get_gradingform_instances',NULL,'moodle',''),(91,'moodle_webservice_get_siteinfo','core_webservice_external','get_site_info','webservice/externallib.php','moodle',''),(92,'core_webservice_get_site_info','core_webservice_external','get_site_info','webservice/externallib.php','moodle',''),(93,'core_get_string','core_external','get_string','lib/external/externallib.php','moodle',''),(94,'core_get_strings','core_external','get_strings','lib/external/externallib.php','moodle',''),(95,'core_get_component_strings','core_external','get_component_strings','lib/external/externallib.php','moodle',''),(96,'core_calendar_delete_calendar_events','core_calendar_external','delete_calendar_events','calendar/externallib.php','moodle','moodle/calendar:manageentries'),(97,'core_calendar_get_calendar_events','core_calendar_external','get_calendar_events','calendar/externallib.php','moodle','moodle/calendar:manageentries'),(98,'core_calendar_create_calendar_events','core_calendar_external','create_calendar_events','calendar/externallib.php','moodle','moodle/calendar:manageentries'),(99,'mod_assign_get_grades','mod_assign_external','get_grades','mod/assign/externallib.php','mod_assign',''),(100,'mod_assign_get_assignments','mod_assign_external','get_assignments','mod/assign/externallib.php','mod_assign',''),(101,'mod_assign_get_submissions','mod_assign_external','get_submissions','mod/assign/externallib.php','mod_assign',''),(102,'mod_assign_get_user_flags','mod_assign_external','get_user_flags','mod/assign/externallib.php','mod_assign',''),(103,'mod_assign_set_user_flags','mod_assign_external','set_user_flags','mod/assign/externallib.php','mod_assign','mod/assign:grade'),(104,'mod_assign_get_user_mappings','mod_assign_external','get_user_mappings','mod/assign/externallib.php','mod_assign',''),(105,'mod_assign_revert_submissions_to_draft','mod_assign_external','revert_submissions_to_draft','mod/assign/externallib.php','mod_assign',''),(106,'mod_assign_lock_submissions','mod_assign_external','lock_submissions','mod/assign/externallib.php','mod_assign',''),(107,'mod_assign_unlock_submissions','mod_assign_external','unlock_submissions','mod/assign/externallib.php','mod_assign',''),(108,'mod_assign_save_submission','mod_assign_external','save_submission','mod/assign/externallib.php','mod_assign',''),(109,'mod_assign_submit_for_grading','mod_assign_external','submit_for_grading','mod/assign/externallib.php','mod_assign',''),(110,'mod_assign_save_grade','mod_assign_external','save_grade','mod/assign/externallib.php','mod_assign',''),(111,'mod_assign_save_grades','mod_assign_external','save_grades','mod/assign/externallib.php','mod_assign',''),(112,'mod_assign_save_user_extensions','mod_assign_external','save_user_extensions','mod/assign/externallib.php','mod_assign',''),(113,'mod_assign_reveal_identities','mod_assign_external','reveal_identities','mod/assign/externallib.php','mod_assign',''),(114,'mod_forum_get_forums_by_courses','mod_forum_external','get_forums_by_courses','mod/forum/externallib.php','mod_forum','mod/forum:viewdiscussion'),(115,'mod_forum_get_forum_discussions','mod_forum_external','get_forum_discussions','mod/forum/externallib.php','mod_forum','mod/forum:viewdiscussion, mod/forum:viewqandawithoutposting'),(116,'mod_forum_get_forum_discussion_posts','mod_forum_external','get_forum_discussion_posts','mod/forum/externallib.php','mod_forum','mod/forum:viewdiscussion, mod/forum:viewqandawithoutposting'),(117,'mod_forum_get_forum_discussions_paginated','mod_forum_external','get_forum_discussions_paginated','mod/forum/externallib.php','mod_forum','mod/forum:viewdiscussion, mod/forum:viewqandawithoutposting'),(118,'moodle_enrol_manual_enrol_users','enrol_manual_external','enrol_users','enrol/manual/externallib.php','enrol_manual','enrol/manual:enrol'),(119,'enrol_manual_enrol_users','enrol_manual_external','enrol_users','enrol/manual/externallib.php','enrol_manual','enrol/manual:enrol'),(120,'enrol_self_get_instance_info','enrol_self_external','get_instance_info','enrol/self/externallib.php','enrol_self',''),(121,'message_airnotifier_is_system_configured','message_airnotifier_external','is_system_configured','message/output/airnotifier/externallib.php','message_airnotifier',''),(122,'message_airnotifier_are_notification_preferences_configured','message_airnotifier_external','are_notification_preferences_configured','message/output/airnotifier/externallib.php','message_airnotifier','');
/*!40000 ALTER TABLE `mdl_external_functions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_external_services`
--

DROP TABLE IF EXISTS `mdl_external_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_external_services` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL DEFAULT '',
  `enabled` tinyint(1) NOT NULL,
  `requiredcapability` varchar(150) DEFAULT NULL,
  `restrictedusers` tinyint(1) NOT NULL,
  `component` varchar(100) DEFAULT NULL,
  `timecreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) DEFAULT NULL,
  `shortname` varchar(255) DEFAULT NULL,
  `downloadfiles` tinyint(1) NOT NULL DEFAULT '0',
  `uploadfiles` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_exteserv_nam_uix` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='built in and custom external services';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_external_services`
--

LOCK TABLES `mdl_external_services` WRITE;
/*!40000 ALTER TABLE `mdl_external_services` DISABLE KEYS */;
INSERT INTO `mdl_external_services` VALUES (1,'Moodle mobile web service',0,NULL,0,'moodle',1435339754,NULL,'moodle_mobile_app',1,1);
/*!40000 ALTER TABLE `mdl_external_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_external_services_functions`
--

DROP TABLE IF EXISTS `mdl_external_services_functions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_external_services_functions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `externalserviceid` bigint(10) NOT NULL,
  `functionname` varchar(200) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_exteservfunc_ext_ix` (`externalserviceid`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8 COMMENT='lists functions available in each service group';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_external_services_functions`
--

LOCK TABLES `mdl_external_services_functions` WRITE;
/*!40000 ALTER TABLE `mdl_external_services_functions` DISABLE KEYS */;
INSERT INTO `mdl_external_services_functions` VALUES (1,1,'moodle_enrol_get_users_courses'),(2,1,'moodle_enrol_get_enrolled_users'),(3,1,'moodle_user_get_users_by_id'),(4,1,'moodle_webservice_get_siteinfo'),(5,1,'moodle_notes_create_notes'),(6,1,'moodle_user_get_course_participants_by_id'),(7,1,'moodle_user_get_users_by_courseid'),(8,1,'moodle_message_send_instantmessages'),(9,1,'core_course_get_contents'),(10,1,'core_get_component_strings'),(11,1,'core_user_add_user_device'),(12,1,'core_calendar_get_calendar_events'),(13,1,'core_enrol_get_users_courses'),(14,1,'core_enrol_get_enrolled_users'),(15,1,'core_user_get_users_by_id'),(16,1,'core_webservice_get_site_info'),(17,1,'core_notes_create_notes'),(18,1,'core_user_get_course_user_profiles'),(19,1,'core_enrol_get_enrolled_users'),(20,1,'core_message_send_instant_messages'),(21,1,'mod_assign_get_grades'),(22,1,'mod_assign_get_assignments'),(23,1,'mod_assign_get_submissions'),(24,1,'mod_assign_get_user_flags'),(25,1,'mod_assign_set_user_flags'),(26,1,'mod_assign_get_user_mappings'),(27,1,'mod_assign_revert_submissions_to_draft'),(28,1,'mod_assign_lock_submissions'),(29,1,'mod_assign_unlock_submissions'),(30,1,'mod_assign_save_submission'),(31,1,'mod_assign_submit_for_grading'),(32,1,'mod_assign_save_grade'),(33,1,'mod_assign_save_user_extensions'),(34,1,'mod_assign_reveal_identities'),(35,1,'message_airnotifier_is_system_configured'),(36,1,'message_airnotifier_are_notification_preferences_configured'),(37,1,'core_grades_update_grades'),(38,1,'mod_forum_get_forums_by_courses'),(39,1,'mod_forum_get_forum_discussions_paginated'),(40,1,'mod_forum_get_forum_discussion_posts'),(41,1,'core_files_get_files'),(42,1,'core_message_get_messages'),(43,1,'core_message_create_contacts'),(44,1,'core_message_delete_contacts'),(45,1,'core_message_block_contacts'),(46,1,'core_message_unblock_contacts'),(47,1,'core_message_get_contacts'),(48,1,'core_message_search_contacts');
/*!40000 ALTER TABLE `mdl_external_services_functions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_external_services_users`
--

DROP TABLE IF EXISTS `mdl_external_services_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_external_services_users` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `externalserviceid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `iprestriction` varchar(255) DEFAULT NULL,
  `validuntil` bigint(10) DEFAULT NULL,
  `timecreated` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_exteservuser_ext_ix` (`externalserviceid`),
  KEY `mdl_exteservuser_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='users allowed to use services with restricted users flag';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_external_services_users`
--

LOCK TABLES `mdl_external_services_users` WRITE;
/*!40000 ALTER TABLE `mdl_external_services_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_external_services_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_external_tokens`
--

DROP TABLE IF EXISTS `mdl_external_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_external_tokens` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `token` varchar(128) NOT NULL DEFAULT '',
  `tokentype` smallint(4) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `externalserviceid` bigint(10) NOT NULL,
  `sid` varchar(128) DEFAULT NULL,
  `contextid` bigint(10) NOT NULL,
  `creatorid` bigint(10) NOT NULL DEFAULT '1',
  `iprestriction` varchar(255) DEFAULT NULL,
  `validuntil` bigint(10) DEFAULT NULL,
  `timecreated` bigint(10) NOT NULL,
  `lastaccess` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_extetoke_use_ix` (`userid`),
  KEY `mdl_extetoke_ext_ix` (`externalserviceid`),
  KEY `mdl_extetoke_con_ix` (`contextid`),
  KEY `mdl_extetoke_cre_ix` (`creatorid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Security tokens for accessing of external services';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_external_tokens`
--

LOCK TABLES `mdl_external_tokens` WRITE;
/*!40000 ALTER TABLE `mdl_external_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_external_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_feedback`
--

DROP TABLE IF EXISTS `mdl_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_feedback` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext NOT NULL,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `anonymous` tinyint(1) NOT NULL DEFAULT '1',
  `email_notification` tinyint(1) NOT NULL DEFAULT '1',
  `multiple_submit` tinyint(1) NOT NULL DEFAULT '1',
  `autonumbering` tinyint(1) NOT NULL DEFAULT '1',
  `site_after_submit` varchar(255) NOT NULL DEFAULT '',
  `page_after_submit` longtext NOT NULL,
  `page_after_submitformat` tinyint(2) NOT NULL DEFAULT '0',
  `publish_stats` tinyint(1) NOT NULL DEFAULT '0',
  `timeopen` bigint(10) NOT NULL DEFAULT '0',
  `timeclose` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `completionsubmit` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_feed_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='all feedbacks';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_feedback`
--

LOCK TABLES `mdl_feedback` WRITE;
/*!40000 ALTER TABLE `mdl_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_feedback_completed`
--

DROP TABLE IF EXISTS `mdl_feedback_completed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_feedback_completed` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `feedback` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `random_response` bigint(10) NOT NULL DEFAULT '0',
  `anonymous_response` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_feedcomp_use_ix` (`userid`),
  KEY `mdl_feedcomp_fee_ix` (`feedback`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='filled out feedback';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_feedback_completed`
--

LOCK TABLES `mdl_feedback_completed` WRITE;
/*!40000 ALTER TABLE `mdl_feedback_completed` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_feedback_completed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_feedback_completedtmp`
--

DROP TABLE IF EXISTS `mdl_feedback_completedtmp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_feedback_completedtmp` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `feedback` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `guestid` varchar(255) NOT NULL DEFAULT '',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `random_response` bigint(10) NOT NULL DEFAULT '0',
  `anonymous_response` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_feedcomp_use2_ix` (`userid`),
  KEY `mdl_feedcomp_fee2_ix` (`feedback`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='filled out feedback';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_feedback_completedtmp`
--

LOCK TABLES `mdl_feedback_completedtmp` WRITE;
/*!40000 ALTER TABLE `mdl_feedback_completedtmp` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_feedback_completedtmp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_feedback_item`
--

DROP TABLE IF EXISTS `mdl_feedback_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_feedback_item` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `feedback` bigint(10) NOT NULL DEFAULT '0',
  `template` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `label` varchar(255) NOT NULL DEFAULT '',
  `presentation` longtext NOT NULL,
  `typ` varchar(255) NOT NULL DEFAULT '',
  `hasvalue` tinyint(1) NOT NULL DEFAULT '0',
  `position` smallint(3) NOT NULL DEFAULT '0',
  `required` tinyint(1) NOT NULL DEFAULT '0',
  `dependitem` bigint(10) NOT NULL DEFAULT '0',
  `dependvalue` varchar(255) NOT NULL DEFAULT '',
  `options` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_feeditem_fee_ix` (`feedback`),
  KEY `mdl_feeditem_tem_ix` (`template`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='feedback_items';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_feedback_item`
--

LOCK TABLES `mdl_feedback_item` WRITE;
/*!40000 ALTER TABLE `mdl_feedback_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_feedback_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_feedback_sitecourse_map`
--

DROP TABLE IF EXISTS `mdl_feedback_sitecourse_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_feedback_sitecourse_map` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `feedbackid` bigint(10) NOT NULL DEFAULT '0',
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_feedsitemap_cou_ix` (`courseid`),
  KEY `mdl_feedsitemap_fee_ix` (`feedbackid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='feedback sitecourse map';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_feedback_sitecourse_map`
--

LOCK TABLES `mdl_feedback_sitecourse_map` WRITE;
/*!40000 ALTER TABLE `mdl_feedback_sitecourse_map` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_feedback_sitecourse_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_feedback_template`
--

DROP TABLE IF EXISTS `mdl_feedback_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_feedback_template` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `ispublic` tinyint(1) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_feedtemp_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='templates of feedbackstructures';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_feedback_template`
--

LOCK TABLES `mdl_feedback_template` WRITE;
/*!40000 ALTER TABLE `mdl_feedback_template` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_feedback_template` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_feedback_tracking`
--

DROP TABLE IF EXISTS `mdl_feedback_tracking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_feedback_tracking` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `feedback` bigint(10) NOT NULL DEFAULT '0',
  `completed` bigint(10) NOT NULL DEFAULT '0',
  `tmp_completed` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_feedtrac_use_ix` (`userid`),
  KEY `mdl_feedtrac_fee_ix` (`feedback`),
  KEY `mdl_feedtrac_com_ix` (`completed`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='feedback trackingdata';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_feedback_tracking`
--

LOCK TABLES `mdl_feedback_tracking` WRITE;
/*!40000 ALTER TABLE `mdl_feedback_tracking` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_feedback_tracking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_feedback_value`
--

DROP TABLE IF EXISTS `mdl_feedback_value`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_feedback_value` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course_id` bigint(10) NOT NULL DEFAULT '0',
  `item` bigint(10) NOT NULL DEFAULT '0',
  `completed` bigint(10) NOT NULL DEFAULT '0',
  `tmp_completed` bigint(10) NOT NULL DEFAULT '0',
  `value` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_feedvalu_cou_ix` (`course_id`),
  KEY `mdl_feedvalu_ite_ix` (`item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='values of the completeds';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_feedback_value`
--

LOCK TABLES `mdl_feedback_value` WRITE;
/*!40000 ALTER TABLE `mdl_feedback_value` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_feedback_value` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_feedback_valuetmp`
--

DROP TABLE IF EXISTS `mdl_feedback_valuetmp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_feedback_valuetmp` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course_id` bigint(10) NOT NULL DEFAULT '0',
  `item` bigint(10) NOT NULL DEFAULT '0',
  `completed` bigint(10) NOT NULL DEFAULT '0',
  `tmp_completed` bigint(10) NOT NULL DEFAULT '0',
  `value` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_feedvalu_cou2_ix` (`course_id`),
  KEY `mdl_feedvalu_ite2_ix` (`item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='values of the completedstmp';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_feedback_valuetmp`
--

LOCK TABLES `mdl_feedback_valuetmp` WRITE;
/*!40000 ALTER TABLE `mdl_feedback_valuetmp` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_feedback_valuetmp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_files`
--

DROP TABLE IF EXISTS `mdl_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_files` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `contenthash` varchar(40) NOT NULL DEFAULT '',
  `pathnamehash` varchar(40) NOT NULL DEFAULT '',
  `contextid` bigint(10) NOT NULL,
  `component` varchar(100) NOT NULL DEFAULT '',
  `filearea` varchar(50) NOT NULL DEFAULT '',
  `itemid` bigint(10) NOT NULL,
  `filepath` varchar(255) NOT NULL DEFAULT '',
  `filename` varchar(255) NOT NULL DEFAULT '',
  `userid` bigint(10) DEFAULT NULL,
  `filesize` bigint(10) NOT NULL,
  `mimetype` varchar(100) DEFAULT NULL,
  `status` bigint(10) NOT NULL DEFAULT '0',
  `source` longtext,
  `author` varchar(255) DEFAULT NULL,
  `license` varchar(255) DEFAULT NULL,
  `timecreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  `referencefileid` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_file_pat_uix` (`pathnamehash`),
  KEY `mdl_file_comfilconite_ix` (`component`,`filearea`,`contextid`,`itemid`),
  KEY `mdl_file_con_ix` (`contenthash`),
  KEY `mdl_file_con2_ix` (`contextid`),
  KEY `mdl_file_use_ix` (`userid`),
  KEY `mdl_file_ref_ix` (`referencefileid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='description of files, content is stored in sha1 file pool';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_files`
--

LOCK TABLES `mdl_files` WRITE;
/*!40000 ALTER TABLE `mdl_files` DISABLE KEYS */;
INSERT INTO `mdl_files` VALUES (1,'41cfeee5884a43a4650a851f4f85e7b28316fcc9','a48e186a2cc853a9e94e9305f4e9bc086391212d',1,'theme_more','backgroundimage',0,'/','background.jpg',2,4451,'image/jpeg',0,NULL,NULL,NULL,1435339776,1435339776,0,NULL),(2,'da39a3ee5e6b4b0d3255bfef95601890afd80709','d1da7ab1bb9c08a926037367bf8ce9a838034ead',1,'theme_more','backgroundimage',0,'/','.',2,0,NULL,0,NULL,NULL,NULL,1435339776,1435339776,0,NULL),(3,'fb262df98d67c4e2a5c9802403821e00cf2992af','508e674d49c30d4fde325fe6c7f6fd3d56b247e1',1,'assignfeedback_editpdf','stamps',0,'/','smile.png',2,1600,'image/png',0,NULL,NULL,NULL,1435339776,1435339776,0,NULL),(4,'da39a3ee5e6b4b0d3255bfef95601890afd80709','70b7cdade7b4e27d4e83f0cdaad10d6a3c0cccb5',1,'assignfeedback_editpdf','stamps',0,'/','.',2,0,NULL,0,NULL,NULL,NULL,1435339776,1435339776,0,NULL),(5,'a4f146f120e7e00d21291b924e26aaabe9f4297a','68317eab56c67d32aeaee5acf509a0c4aa828b6b',1,'assignfeedback_editpdf','stamps',0,'/','sad.png',2,1702,'image/png',0,NULL,NULL,NULL,1435339776,1435339776,0,NULL),(6,'33957e31ba9c763a74638b825f0a9154acf475e1','695a55ff780e61c9e59428aa425430b0d6bde53b',1,'assignfeedback_editpdf','stamps',0,'/','tick.png',2,1187,'image/png',0,NULL,NULL,NULL,1435339776,1435339776,0,NULL),(7,'d613d55f37bb76d38d4ffb4b7b83e6c694778c30','373e63af262a9b8466ba8632551520be793c37ff',1,'assignfeedback_editpdf','stamps',0,'/','cross.png',2,1230,'image/png',0,NULL,NULL,NULL,1435339776,1435339776,0,NULL),(8,'f58e1a856e3e43bf842c043a1f21916ef8c12229','915f4d63b354743f84dd6795dc465db482da06ca',5,'user','draft',455816544,'/','stemlms.zip',2,218861,'application/zip',0,'O:8:\"stdClass\":1:{s:6:\"source\";s:11:\"stemlms.zip\";}','Admin User','allrightsreserved',1435340528,1435340528,0,NULL),(9,'da39a3ee5e6b4b0d3255bfef95601890afd80709','f448cca03f5e0961f7becb4d6cee08ed55d8aaa3',5,'user','draft',455816544,'/','.',2,0,NULL,0,NULL,NULL,NULL,1435340528,1435340528,0,NULL);
/*!40000 ALTER TABLE `mdl_files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_files_reference`
--

DROP TABLE IF EXISTS `mdl_files_reference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_files_reference` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `repositoryid` bigint(10) NOT NULL,
  `lastsync` bigint(10) DEFAULT NULL,
  `reference` longtext,
  `referencehash` varchar(40) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_filerefe_refrep_uix` (`referencehash`,`repositoryid`),
  KEY `mdl_filerefe_rep_ix` (`repositoryid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Store files references';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_files_reference`
--

LOCK TABLES `mdl_files_reference` WRITE;
/*!40000 ALTER TABLE `mdl_files_reference` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_files_reference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_filter_active`
--

DROP TABLE IF EXISTS `mdl_filter_active`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_filter_active` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `filter` varchar(32) NOT NULL DEFAULT '',
  `contextid` bigint(10) NOT NULL,
  `active` smallint(4) NOT NULL,
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_filtacti_confil_uix` (`contextid`,`filter`),
  KEY `mdl_filtacti_con_ix` (`contextid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='Stores information about which filters are active in which c';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_filter_active`
--

LOCK TABLES `mdl_filter_active` WRITE;
/*!40000 ALTER TABLE `mdl_filter_active` DISABLE KEYS */;
INSERT INTO `mdl_filter_active` VALUES (1,'activitynames',1,1,2),(2,'mathjaxloader',1,1,1),(3,'mediaplugin',1,1,3);
/*!40000 ALTER TABLE `mdl_filter_active` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_filter_config`
--

DROP TABLE IF EXISTS `mdl_filter_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_filter_config` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `filter` varchar(32) NOT NULL DEFAULT '',
  `contextid` bigint(10) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `value` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_filtconf_confilnam_uix` (`contextid`,`filter`,`name`),
  KEY `mdl_filtconf_con_ix` (`contextid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores per-context configuration settings for filters which ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_filter_config`
--

LOCK TABLES `mdl_filter_config` WRITE;
/*!40000 ALTER TABLE `mdl_filter_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_filter_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_folder`
--

DROP TABLE IF EXISTS `mdl_folder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_folder` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `revision` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `display` smallint(4) NOT NULL DEFAULT '0',
  `showexpanded` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `mdl_fold_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='each record is one folder resource';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_folder`
--

LOCK TABLES `mdl_folder` WRITE;
/*!40000 ALTER TABLE `mdl_folder` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_folder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_forum`
--

DROP TABLE IF EXISTS `mdl_forum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_forum` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `type` varchar(20) NOT NULL DEFAULT 'general',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext NOT NULL,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `assessed` bigint(10) NOT NULL DEFAULT '0',
  `assesstimestart` bigint(10) NOT NULL DEFAULT '0',
  `assesstimefinish` bigint(10) NOT NULL DEFAULT '0',
  `scale` bigint(10) NOT NULL DEFAULT '0',
  `maxbytes` bigint(10) NOT NULL DEFAULT '0',
  `maxattachments` bigint(10) NOT NULL DEFAULT '1',
  `forcesubscribe` tinyint(1) NOT NULL DEFAULT '0',
  `trackingtype` tinyint(2) NOT NULL DEFAULT '1',
  `rsstype` tinyint(2) NOT NULL DEFAULT '0',
  `rssarticles` tinyint(2) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `warnafter` bigint(10) NOT NULL DEFAULT '0',
  `blockafter` bigint(10) NOT NULL DEFAULT '0',
  `blockperiod` bigint(10) NOT NULL DEFAULT '0',
  `completiondiscussions` int(9) NOT NULL DEFAULT '0',
  `completionreplies` int(9) NOT NULL DEFAULT '0',
  `completionposts` int(9) NOT NULL DEFAULT '0',
  `displaywordcount` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_foru_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Forums contain and structure discussion';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_forum`
--

LOCK TABLES `mdl_forum` WRITE;
/*!40000 ALTER TABLE `mdl_forum` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_forum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_forum_digests`
--

DROP TABLE IF EXISTS `mdl_forum_digests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_forum_digests` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL,
  `forum` bigint(10) NOT NULL,
  `maildigest` tinyint(1) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_forudige_forusemai_uix` (`forum`,`userid`,`maildigest`),
  KEY `mdl_forudige_use_ix` (`userid`),
  KEY `mdl_forudige_for_ix` (`forum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Keeps track of user mail delivery preferences for each forum';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_forum_digests`
--

LOCK TABLES `mdl_forum_digests` WRITE;
/*!40000 ALTER TABLE `mdl_forum_digests` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_forum_digests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_forum_discussion_subs`
--

DROP TABLE IF EXISTS `mdl_forum_discussion_subs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_forum_discussion_subs` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `forum` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `discussion` bigint(10) NOT NULL,
  `preference` bigint(10) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_forudiscsubs_usedis_uix` (`userid`,`discussion`),
  KEY `mdl_forudiscsubs_for_ix` (`forum`),
  KEY `mdl_forudiscsubs_use_ix` (`userid`),
  KEY `mdl_forudiscsubs_dis_ix` (`discussion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Users may choose to subscribe and unsubscribe from specific ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_forum_discussion_subs`
--

LOCK TABLES `mdl_forum_discussion_subs` WRITE;
/*!40000 ALTER TABLE `mdl_forum_discussion_subs` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_forum_discussion_subs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_forum_discussions`
--

DROP TABLE IF EXISTS `mdl_forum_discussions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_forum_discussions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `forum` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `firstpost` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `groupid` bigint(10) NOT NULL DEFAULT '-1',
  `assessed` tinyint(1) NOT NULL DEFAULT '1',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `usermodified` bigint(10) NOT NULL DEFAULT '0',
  `timestart` bigint(10) NOT NULL DEFAULT '0',
  `timeend` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_forudisc_use_ix` (`userid`),
  KEY `mdl_forudisc_cou_ix` (`course`),
  KEY `mdl_forudisc_for_ix` (`forum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Forums are composed of discussions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_forum_discussions`
--

LOCK TABLES `mdl_forum_discussions` WRITE;
/*!40000 ALTER TABLE `mdl_forum_discussions` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_forum_discussions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_forum_posts`
--

DROP TABLE IF EXISTS `mdl_forum_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_forum_posts` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `discussion` bigint(10) NOT NULL DEFAULT '0',
  `parent` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `created` bigint(10) NOT NULL DEFAULT '0',
  `modified` bigint(10) NOT NULL DEFAULT '0',
  `mailed` tinyint(2) NOT NULL DEFAULT '0',
  `subject` varchar(255) NOT NULL DEFAULT '',
  `message` longtext NOT NULL,
  `messageformat` tinyint(2) NOT NULL DEFAULT '0',
  `messagetrust` tinyint(2) NOT NULL DEFAULT '0',
  `attachment` varchar(100) NOT NULL DEFAULT '',
  `totalscore` smallint(4) NOT NULL DEFAULT '0',
  `mailnow` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_forupost_use_ix` (`userid`),
  KEY `mdl_forupost_cre_ix` (`created`),
  KEY `mdl_forupost_mai_ix` (`mailed`),
  KEY `mdl_forupost_dis_ix` (`discussion`),
  KEY `mdl_forupost_par_ix` (`parent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='All posts are stored in this table';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_forum_posts`
--

LOCK TABLES `mdl_forum_posts` WRITE;
/*!40000 ALTER TABLE `mdl_forum_posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_forum_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_forum_queue`
--

DROP TABLE IF EXISTS `mdl_forum_queue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_forum_queue` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `discussionid` bigint(10) NOT NULL DEFAULT '0',
  `postid` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_foruqueu_use_ix` (`userid`),
  KEY `mdl_foruqueu_dis_ix` (`discussionid`),
  KEY `mdl_foruqueu_pos_ix` (`postid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='For keeping track of posts that will be mailed in digest for';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_forum_queue`
--

LOCK TABLES `mdl_forum_queue` WRITE;
/*!40000 ALTER TABLE `mdl_forum_queue` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_forum_queue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_forum_read`
--

DROP TABLE IF EXISTS `mdl_forum_read`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_forum_read` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `forumid` bigint(10) NOT NULL DEFAULT '0',
  `discussionid` bigint(10) NOT NULL DEFAULT '0',
  `postid` bigint(10) NOT NULL DEFAULT '0',
  `firstread` bigint(10) NOT NULL DEFAULT '0',
  `lastread` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_foruread_usefor_ix` (`userid`,`forumid`),
  KEY `mdl_foruread_usedis_ix` (`userid`,`discussionid`),
  KEY `mdl_foruread_posuse_ix` (`postid`,`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tracks each users read posts';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_forum_read`
--

LOCK TABLES `mdl_forum_read` WRITE;
/*!40000 ALTER TABLE `mdl_forum_read` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_forum_read` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_forum_subscriptions`
--

DROP TABLE IF EXISTS `mdl_forum_subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_forum_subscriptions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `forum` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_forusubs_use_ix` (`userid`),
  KEY `mdl_forusubs_for_ix` (`forum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Keeps track of who is subscribed to what forum';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_forum_subscriptions`
--

LOCK TABLES `mdl_forum_subscriptions` WRITE;
/*!40000 ALTER TABLE `mdl_forum_subscriptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_forum_subscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_forum_track_prefs`
--

DROP TABLE IF EXISTS `mdl_forum_track_prefs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_forum_track_prefs` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `forumid` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_forutracpref_usefor_ix` (`userid`,`forumid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tracks each users untracked forums';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_forum_track_prefs`
--

LOCK TABLES `mdl_forum_track_prefs` WRITE;
/*!40000 ALTER TABLE `mdl_forum_track_prefs` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_forum_track_prefs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_glossary`
--

DROP TABLE IF EXISTS `mdl_glossary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_glossary` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext NOT NULL,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `allowduplicatedentries` tinyint(2) NOT NULL DEFAULT '0',
  `displayformat` varchar(50) NOT NULL DEFAULT 'dictionary',
  `mainglossary` tinyint(2) NOT NULL DEFAULT '0',
  `showspecial` tinyint(2) NOT NULL DEFAULT '1',
  `showalphabet` tinyint(2) NOT NULL DEFAULT '1',
  `showall` tinyint(2) NOT NULL DEFAULT '1',
  `allowcomments` tinyint(2) NOT NULL DEFAULT '0',
  `allowprintview` tinyint(2) NOT NULL DEFAULT '1',
  `usedynalink` tinyint(2) NOT NULL DEFAULT '1',
  `defaultapproval` tinyint(2) NOT NULL DEFAULT '1',
  `approvaldisplayformat` varchar(50) NOT NULL DEFAULT 'default',
  `globalglossary` tinyint(2) NOT NULL DEFAULT '0',
  `entbypage` smallint(3) NOT NULL DEFAULT '10',
  `editalways` tinyint(2) NOT NULL DEFAULT '0',
  `rsstype` tinyint(2) NOT NULL DEFAULT '0',
  `rssarticles` tinyint(2) NOT NULL DEFAULT '0',
  `assessed` bigint(10) NOT NULL DEFAULT '0',
  `assesstimestart` bigint(10) NOT NULL DEFAULT '0',
  `assesstimefinish` bigint(10) NOT NULL DEFAULT '0',
  `scale` bigint(10) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `completionentries` int(9) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_glos_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='all glossaries';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_glossary`
--

LOCK TABLES `mdl_glossary` WRITE;
/*!40000 ALTER TABLE `mdl_glossary` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_glossary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_glossary_alias`
--

DROP TABLE IF EXISTS `mdl_glossary_alias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_glossary_alias` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `entryid` bigint(10) NOT NULL DEFAULT '0',
  `alias` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_glosalia_ent_ix` (`entryid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='entries alias';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_glossary_alias`
--

LOCK TABLES `mdl_glossary_alias` WRITE;
/*!40000 ALTER TABLE `mdl_glossary_alias` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_glossary_alias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_glossary_categories`
--

DROP TABLE IF EXISTS `mdl_glossary_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_glossary_categories` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `glossaryid` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `usedynalink` tinyint(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `mdl_gloscate_glo_ix` (`glossaryid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='all categories for glossary entries';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_glossary_categories`
--

LOCK TABLES `mdl_glossary_categories` WRITE;
/*!40000 ALTER TABLE `mdl_glossary_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_glossary_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_glossary_entries`
--

DROP TABLE IF EXISTS `mdl_glossary_entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_glossary_entries` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `glossaryid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `concept` varchar(255) NOT NULL DEFAULT '',
  `definition` longtext NOT NULL,
  `definitionformat` tinyint(2) NOT NULL DEFAULT '0',
  `definitiontrust` tinyint(2) NOT NULL DEFAULT '0',
  `attachment` varchar(100) NOT NULL DEFAULT '',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `teacherentry` tinyint(2) NOT NULL DEFAULT '0',
  `sourceglossaryid` bigint(10) NOT NULL DEFAULT '0',
  `usedynalink` tinyint(2) NOT NULL DEFAULT '1',
  `casesensitive` tinyint(2) NOT NULL DEFAULT '0',
  `fullmatch` tinyint(2) NOT NULL DEFAULT '1',
  `approved` tinyint(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `mdl_glosentr_use_ix` (`userid`),
  KEY `mdl_glosentr_con_ix` (`concept`),
  KEY `mdl_glosentr_glo_ix` (`glossaryid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='all glossary entries';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_glossary_entries`
--

LOCK TABLES `mdl_glossary_entries` WRITE;
/*!40000 ALTER TABLE `mdl_glossary_entries` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_glossary_entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_glossary_entries_categories`
--

DROP TABLE IF EXISTS `mdl_glossary_entries_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_glossary_entries_categories` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `categoryid` bigint(10) NOT NULL DEFAULT '0',
  `entryid` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_glosentrcate_cat_ix` (`categoryid`),
  KEY `mdl_glosentrcate_ent_ix` (`entryid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='categories of each glossary entry';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_glossary_entries_categories`
--

LOCK TABLES `mdl_glossary_entries_categories` WRITE;
/*!40000 ALTER TABLE `mdl_glossary_entries_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_glossary_entries_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_glossary_formats`
--

DROP TABLE IF EXISTS `mdl_glossary_formats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_glossary_formats` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `popupformatname` varchar(50) NOT NULL DEFAULT '',
  `visible` tinyint(2) NOT NULL DEFAULT '1',
  `showgroup` tinyint(2) NOT NULL DEFAULT '1',
  `defaultmode` varchar(50) NOT NULL DEFAULT '',
  `defaulthook` varchar(50) NOT NULL DEFAULT '',
  `sortkey` varchar(50) NOT NULL DEFAULT '',
  `sortorder` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='Setting of the display formats';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_glossary_formats`
--

LOCK TABLES `mdl_glossary_formats` WRITE;
/*!40000 ALTER TABLE `mdl_glossary_formats` DISABLE KEYS */;
INSERT INTO `mdl_glossary_formats` VALUES (1,'continuous','continuous',1,1,'','','',''),(2,'dictionary','dictionary',1,1,'','','',''),(3,'encyclopedia','encyclopedia',1,1,'','','',''),(4,'entrylist','entrylist',1,1,'','','',''),(5,'faq','faq',1,1,'','','',''),(6,'fullwithauthor','fullwithauthor',1,1,'','','',''),(7,'fullwithoutauthor','fullwithoutauthor',1,1,'','','','');
/*!40000 ALTER TABLE `mdl_glossary_formats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_categories`
--

DROP TABLE IF EXISTS `mdl_grade_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_categories` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL,
  `parent` bigint(10) DEFAULT NULL,
  `depth` bigint(10) NOT NULL DEFAULT '0',
  `path` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) NOT NULL DEFAULT '',
  `aggregation` bigint(10) NOT NULL DEFAULT '0',
  `keephigh` bigint(10) NOT NULL DEFAULT '0',
  `droplow` bigint(10) NOT NULL DEFAULT '0',
  `aggregateonlygraded` tinyint(1) NOT NULL DEFAULT '0',
  `aggregateoutcomes` tinyint(1) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  `hidden` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_gradcate_cou_ix` (`courseid`),
  KEY `mdl_gradcate_par_ix` (`parent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table keeps information about categories, used for grou';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_categories`
--

LOCK TABLES `mdl_grade_categories` WRITE;
/*!40000 ALTER TABLE `mdl_grade_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_categories_history`
--

DROP TABLE IF EXISTS `mdl_grade_categories_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_categories_history` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `action` bigint(10) NOT NULL DEFAULT '0',
  `oldid` bigint(10) NOT NULL,
  `source` varchar(255) DEFAULT NULL,
  `timemodified` bigint(10) DEFAULT NULL,
  `loggeduser` bigint(10) DEFAULT NULL,
  `courseid` bigint(10) NOT NULL,
  `parent` bigint(10) DEFAULT NULL,
  `depth` bigint(10) NOT NULL DEFAULT '0',
  `path` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) NOT NULL DEFAULT '',
  `aggregation` bigint(10) NOT NULL DEFAULT '0',
  `keephigh` bigint(10) NOT NULL DEFAULT '0',
  `droplow` bigint(10) NOT NULL DEFAULT '0',
  `aggregateonlygraded` tinyint(1) NOT NULL DEFAULT '0',
  `aggregateoutcomes` tinyint(1) NOT NULL DEFAULT '0',
  `aggregatesubcats` tinyint(1) NOT NULL DEFAULT '0',
  `hidden` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_gradcatehist_act_ix` (`action`),
  KEY `mdl_gradcatehist_old_ix` (`oldid`),
  KEY `mdl_gradcatehist_cou_ix` (`courseid`),
  KEY `mdl_gradcatehist_par_ix` (`parent`),
  KEY `mdl_gradcatehist_log_ix` (`loggeduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='History of grade_categories';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_categories_history`
--

LOCK TABLES `mdl_grade_categories_history` WRITE;
/*!40000 ALTER TABLE `mdl_grade_categories_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_categories_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_grades`
--

DROP TABLE IF EXISTS `mdl_grade_grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_grades` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `itemid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `rawgrade` decimal(10,5) DEFAULT NULL,
  `rawgrademax` decimal(10,5) NOT NULL DEFAULT '100.00000',
  `rawgrademin` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `rawscaleid` bigint(10) DEFAULT NULL,
  `usermodified` bigint(10) DEFAULT NULL,
  `finalgrade` decimal(10,5) DEFAULT NULL,
  `hidden` bigint(10) NOT NULL DEFAULT '0',
  `locked` bigint(10) NOT NULL DEFAULT '0',
  `locktime` bigint(10) NOT NULL DEFAULT '0',
  `exported` bigint(10) NOT NULL DEFAULT '0',
  `overridden` bigint(10) NOT NULL DEFAULT '0',
  `excluded` bigint(10) NOT NULL DEFAULT '0',
  `feedback` longtext,
  `feedbackformat` bigint(10) NOT NULL DEFAULT '0',
  `information` longtext,
  `informationformat` bigint(10) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) DEFAULT NULL,
  `timemodified` bigint(10) DEFAULT NULL,
  `aggregationstatus` varchar(10) NOT NULL DEFAULT 'unknown',
  `aggregationweight` decimal(10,5) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_gradgrad_useite_uix` (`userid`,`itemid`),
  KEY `mdl_gradgrad_locloc_ix` (`locked`,`locktime`),
  KEY `mdl_gradgrad_ite_ix` (`itemid`),
  KEY `mdl_gradgrad_use_ix` (`userid`),
  KEY `mdl_gradgrad_raw_ix` (`rawscaleid`),
  KEY `mdl_gradgrad_use2_ix` (`usermodified`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='grade_grades  This table keeps individual grades for each us';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_grades`
--

LOCK TABLES `mdl_grade_grades` WRITE;
/*!40000 ALTER TABLE `mdl_grade_grades` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_grades_history`
--

DROP TABLE IF EXISTS `mdl_grade_grades_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_grades_history` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `action` bigint(10) NOT NULL DEFAULT '0',
  `oldid` bigint(10) NOT NULL,
  `source` varchar(255) DEFAULT NULL,
  `timemodified` bigint(10) DEFAULT NULL,
  `loggeduser` bigint(10) DEFAULT NULL,
  `itemid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `rawgrade` decimal(10,5) DEFAULT NULL,
  `rawgrademax` decimal(10,5) NOT NULL DEFAULT '100.00000',
  `rawgrademin` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `rawscaleid` bigint(10) DEFAULT NULL,
  `usermodified` bigint(10) DEFAULT NULL,
  `finalgrade` decimal(10,5) DEFAULT NULL,
  `hidden` bigint(10) NOT NULL DEFAULT '0',
  `locked` bigint(10) NOT NULL DEFAULT '0',
  `locktime` bigint(10) NOT NULL DEFAULT '0',
  `exported` bigint(10) NOT NULL DEFAULT '0',
  `overridden` bigint(10) NOT NULL DEFAULT '0',
  `excluded` bigint(10) NOT NULL DEFAULT '0',
  `feedback` longtext,
  `feedbackformat` bigint(10) NOT NULL DEFAULT '0',
  `information` longtext,
  `informationformat` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_gradgradhist_act_ix` (`action`),
  KEY `mdl_gradgradhist_tim_ix` (`timemodified`),
  KEY `mdl_gradgradhist_old_ix` (`oldid`),
  KEY `mdl_gradgradhist_ite_ix` (`itemid`),
  KEY `mdl_gradgradhist_use_ix` (`userid`),
  KEY `mdl_gradgradhist_raw_ix` (`rawscaleid`),
  KEY `mdl_gradgradhist_use2_ix` (`usermodified`),
  KEY `mdl_gradgradhist_log_ix` (`loggeduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='History table';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_grades_history`
--

LOCK TABLES `mdl_grade_grades_history` WRITE;
/*!40000 ALTER TABLE `mdl_grade_grades_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_grades_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_import_newitem`
--

DROP TABLE IF EXISTS `mdl_grade_import_newitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_import_newitem` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `itemname` varchar(255) NOT NULL DEFAULT '',
  `importcode` bigint(10) NOT NULL,
  `importer` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_gradimponewi_imp_ix` (`importer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='temporary table for storing new grade_item names from grade ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_import_newitem`
--

LOCK TABLES `mdl_grade_import_newitem` WRITE;
/*!40000 ALTER TABLE `mdl_grade_import_newitem` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_import_newitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_import_values`
--

DROP TABLE IF EXISTS `mdl_grade_import_values`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_import_values` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `itemid` bigint(10) DEFAULT NULL,
  `newgradeitem` bigint(10) DEFAULT NULL,
  `userid` bigint(10) NOT NULL,
  `finalgrade` decimal(10,5) DEFAULT NULL,
  `feedback` longtext,
  `importcode` bigint(10) NOT NULL,
  `importer` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_gradimpovalu_ite_ix` (`itemid`),
  KEY `mdl_gradimpovalu_new_ix` (`newgradeitem`),
  KEY `mdl_gradimpovalu_imp_ix` (`importer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Temporary table for importing grades';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_import_values`
--

LOCK TABLES `mdl_grade_import_values` WRITE;
/*!40000 ALTER TABLE `mdl_grade_import_values` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_import_values` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_items`
--

DROP TABLE IF EXISTS `mdl_grade_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_items` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) DEFAULT NULL,
  `categoryid` bigint(10) DEFAULT NULL,
  `itemname` varchar(255) DEFAULT NULL,
  `itemtype` varchar(30) NOT NULL DEFAULT '',
  `itemmodule` varchar(30) DEFAULT NULL,
  `iteminstance` bigint(10) DEFAULT NULL,
  `itemnumber` bigint(10) DEFAULT NULL,
  `iteminfo` longtext,
  `idnumber` varchar(255) DEFAULT NULL,
  `calculation` longtext,
  `gradetype` smallint(4) NOT NULL DEFAULT '1',
  `grademax` decimal(10,5) NOT NULL DEFAULT '100.00000',
  `grademin` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `scaleid` bigint(10) DEFAULT NULL,
  `outcomeid` bigint(10) DEFAULT NULL,
  `gradepass` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `multfactor` decimal(10,5) NOT NULL DEFAULT '1.00000',
  `plusfactor` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `aggregationcoef` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `aggregationcoef2` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  `display` bigint(10) NOT NULL DEFAULT '0',
  `decimals` tinyint(1) DEFAULT NULL,
  `hidden` bigint(10) NOT NULL DEFAULT '0',
  `locked` bigint(10) NOT NULL DEFAULT '0',
  `locktime` bigint(10) NOT NULL DEFAULT '0',
  `needsupdate` bigint(10) NOT NULL DEFAULT '0',
  `weightoverride` tinyint(1) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) DEFAULT NULL,
  `timemodified` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_graditem_locloc_ix` (`locked`,`locktime`),
  KEY `mdl_graditem_itenee_ix` (`itemtype`,`needsupdate`),
  KEY `mdl_graditem_gra_ix` (`gradetype`),
  KEY `mdl_graditem_idncou_ix` (`idnumber`,`courseid`),
  KEY `mdl_graditem_cou_ix` (`courseid`),
  KEY `mdl_graditem_cat_ix` (`categoryid`),
  KEY `mdl_graditem_sca_ix` (`scaleid`),
  KEY `mdl_graditem_out_ix` (`outcomeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table keeps information about gradeable items (ie colum';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_items`
--

LOCK TABLES `mdl_grade_items` WRITE;
/*!40000 ALTER TABLE `mdl_grade_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_items_history`
--

DROP TABLE IF EXISTS `mdl_grade_items_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_items_history` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `action` bigint(10) NOT NULL DEFAULT '0',
  `oldid` bigint(10) NOT NULL,
  `source` varchar(255) DEFAULT NULL,
  `timemodified` bigint(10) DEFAULT NULL,
  `loggeduser` bigint(10) DEFAULT NULL,
  `courseid` bigint(10) DEFAULT NULL,
  `categoryid` bigint(10) DEFAULT NULL,
  `itemname` varchar(255) DEFAULT NULL,
  `itemtype` varchar(30) NOT NULL DEFAULT '',
  `itemmodule` varchar(30) DEFAULT NULL,
  `iteminstance` bigint(10) DEFAULT NULL,
  `itemnumber` bigint(10) DEFAULT NULL,
  `iteminfo` longtext,
  `idnumber` varchar(255) DEFAULT NULL,
  `calculation` longtext,
  `gradetype` smallint(4) NOT NULL DEFAULT '1',
  `grademax` decimal(10,5) NOT NULL DEFAULT '100.00000',
  `grademin` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `scaleid` bigint(10) DEFAULT NULL,
  `outcomeid` bigint(10) DEFAULT NULL,
  `gradepass` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `multfactor` decimal(10,5) NOT NULL DEFAULT '1.00000',
  `plusfactor` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `aggregationcoef` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `aggregationcoef2` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  `hidden` bigint(10) NOT NULL DEFAULT '0',
  `locked` bigint(10) NOT NULL DEFAULT '0',
  `locktime` bigint(10) NOT NULL DEFAULT '0',
  `needsupdate` bigint(10) NOT NULL DEFAULT '0',
  `display` bigint(10) NOT NULL DEFAULT '0',
  `decimals` tinyint(1) DEFAULT NULL,
  `weightoverride` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_graditemhist_act_ix` (`action`),
  KEY `mdl_graditemhist_old_ix` (`oldid`),
  KEY `mdl_graditemhist_cou_ix` (`courseid`),
  KEY `mdl_graditemhist_cat_ix` (`categoryid`),
  KEY `mdl_graditemhist_sca_ix` (`scaleid`),
  KEY `mdl_graditemhist_out_ix` (`outcomeid`),
  KEY `mdl_graditemhist_log_ix` (`loggeduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='History of grade_items';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_items_history`
--

LOCK TABLES `mdl_grade_items_history` WRITE;
/*!40000 ALTER TABLE `mdl_grade_items_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_items_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_letters`
--

DROP TABLE IF EXISTS `mdl_grade_letters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_letters` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `contextid` bigint(10) NOT NULL,
  `lowerboundary` decimal(10,5) NOT NULL,
  `letter` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_gradlett_conlowlet_uix` (`contextid`,`lowerboundary`,`letter`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Repository for grade letters, for courses and other moodle e';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_letters`
--

LOCK TABLES `mdl_grade_letters` WRITE;
/*!40000 ALTER TABLE `mdl_grade_letters` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_letters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_outcomes`
--

DROP TABLE IF EXISTS `mdl_grade_outcomes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_outcomes` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) DEFAULT NULL,
  `shortname` varchar(255) NOT NULL DEFAULT '',
  `fullname` longtext NOT NULL,
  `scaleid` bigint(10) DEFAULT NULL,
  `description` longtext,
  `descriptionformat` tinyint(2) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) DEFAULT NULL,
  `timemodified` bigint(10) DEFAULT NULL,
  `usermodified` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_gradoutc_cousho_uix` (`courseid`,`shortname`),
  KEY `mdl_gradoutc_cou_ix` (`courseid`),
  KEY `mdl_gradoutc_sca_ix` (`scaleid`),
  KEY `mdl_gradoutc_use_ix` (`usermodified`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table describes the outcomes used in the system. An out';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_outcomes`
--

LOCK TABLES `mdl_grade_outcomes` WRITE;
/*!40000 ALTER TABLE `mdl_grade_outcomes` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_outcomes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_outcomes_courses`
--

DROP TABLE IF EXISTS `mdl_grade_outcomes_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_outcomes_courses` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL,
  `outcomeid` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_gradoutccour_couout_uix` (`courseid`,`outcomeid`),
  KEY `mdl_gradoutccour_cou_ix` (`courseid`),
  KEY `mdl_gradoutccour_out_ix` (`outcomeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='stores what outcomes are used in what courses.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_outcomes_courses`
--

LOCK TABLES `mdl_grade_outcomes_courses` WRITE;
/*!40000 ALTER TABLE `mdl_grade_outcomes_courses` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_outcomes_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_outcomes_history`
--

DROP TABLE IF EXISTS `mdl_grade_outcomes_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_outcomes_history` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `action` bigint(10) NOT NULL DEFAULT '0',
  `oldid` bigint(10) NOT NULL,
  `source` varchar(255) DEFAULT NULL,
  `timemodified` bigint(10) DEFAULT NULL,
  `loggeduser` bigint(10) DEFAULT NULL,
  `courseid` bigint(10) DEFAULT NULL,
  `shortname` varchar(255) NOT NULL DEFAULT '',
  `fullname` longtext NOT NULL,
  `scaleid` bigint(10) DEFAULT NULL,
  `description` longtext,
  `descriptionformat` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_gradoutchist_act_ix` (`action`),
  KEY `mdl_gradoutchist_old_ix` (`oldid`),
  KEY `mdl_gradoutchist_cou_ix` (`courseid`),
  KEY `mdl_gradoutchist_sca_ix` (`scaleid`),
  KEY `mdl_gradoutchist_log_ix` (`loggeduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='History table';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_outcomes_history`
--

LOCK TABLES `mdl_grade_outcomes_history` WRITE;
/*!40000 ALTER TABLE `mdl_grade_outcomes_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_outcomes_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grade_settings`
--

DROP TABLE IF EXISTS `mdl_grade_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grade_settings` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `value` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_gradsett_counam_uix` (`courseid`,`name`),
  KEY `mdl_gradsett_cou_ix` (`courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='gradebook settings';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grade_settings`
--

LOCK TABLES `mdl_grade_settings` WRITE;
/*!40000 ALTER TABLE `mdl_grade_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grade_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grading_areas`
--

DROP TABLE IF EXISTS `mdl_grading_areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grading_areas` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `contextid` bigint(10) NOT NULL,
  `component` varchar(100) NOT NULL DEFAULT '',
  `areaname` varchar(100) NOT NULL DEFAULT '',
  `activemethod` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_gradarea_concomare_uix` (`contextid`,`component`,`areaname`),
  KEY `mdl_gradarea_con_ix` (`contextid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Identifies gradable areas where advanced grading can happen.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grading_areas`
--

LOCK TABLES `mdl_grading_areas` WRITE;
/*!40000 ALTER TABLE `mdl_grading_areas` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grading_areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grading_definitions`
--

DROP TABLE IF EXISTS `mdl_grading_definitions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grading_definitions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `areaid` bigint(10) NOT NULL,
  `method` varchar(100) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `description` longtext,
  `descriptionformat` tinyint(2) DEFAULT NULL,
  `status` bigint(10) NOT NULL DEFAULT '0',
  `copiedfromid` bigint(10) DEFAULT NULL,
  `timecreated` bigint(10) NOT NULL,
  `usercreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  `usermodified` bigint(10) NOT NULL,
  `timecopied` bigint(10) DEFAULT '0',
  `options` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_graddefi_aremet_uix` (`areaid`,`method`),
  KEY `mdl_graddefi_are_ix` (`areaid`),
  KEY `mdl_graddefi_use_ix` (`usermodified`),
  KEY `mdl_graddefi_use2_ix` (`usercreated`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains the basic information about an advanced grading for';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grading_definitions`
--

LOCK TABLES `mdl_grading_definitions` WRITE;
/*!40000 ALTER TABLE `mdl_grading_definitions` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grading_definitions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_grading_instances`
--

DROP TABLE IF EXISTS `mdl_grading_instances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_grading_instances` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `definitionid` bigint(10) NOT NULL,
  `raterid` bigint(10) NOT NULL,
  `itemid` bigint(10) DEFAULT NULL,
  `rawgrade` decimal(10,5) DEFAULT NULL,
  `status` bigint(10) NOT NULL DEFAULT '0',
  `feedback` longtext,
  `feedbackformat` tinyint(2) DEFAULT NULL,
  `timemodified` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_gradinst_def_ix` (`definitionid`),
  KEY `mdl_gradinst_rat_ix` (`raterid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Grading form instance is an assessment record for one gradab';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_grading_instances`
--

LOCK TABLES `mdl_grading_instances` WRITE;
/*!40000 ALTER TABLE `mdl_grading_instances` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_grading_instances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_gradingform_guide_comments`
--

DROP TABLE IF EXISTS `mdl_gradingform_guide_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_gradingform_guide_comments` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `definitionid` bigint(10) NOT NULL,
  `sortorder` bigint(10) NOT NULL,
  `description` longtext,
  `descriptionformat` tinyint(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_gradguidcomm_def_ix` (`definitionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='frequently used comments used in marking guide';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_gradingform_guide_comments`
--

LOCK TABLES `mdl_gradingform_guide_comments` WRITE;
/*!40000 ALTER TABLE `mdl_gradingform_guide_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_gradingform_guide_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_gradingform_guide_criteria`
--

DROP TABLE IF EXISTS `mdl_gradingform_guide_criteria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_gradingform_guide_criteria` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `definitionid` bigint(10) NOT NULL,
  `sortorder` bigint(10) NOT NULL,
  `shortname` varchar(255) NOT NULL DEFAULT '',
  `description` longtext,
  `descriptionformat` tinyint(2) DEFAULT NULL,
  `descriptionmarkers` longtext,
  `descriptionmarkersformat` tinyint(2) DEFAULT NULL,
  `maxscore` decimal(10,5) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_gradguidcrit_def_ix` (`definitionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores the rows of the criteria grid.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_gradingform_guide_criteria`
--

LOCK TABLES `mdl_gradingform_guide_criteria` WRITE;
/*!40000 ALTER TABLE `mdl_gradingform_guide_criteria` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_gradingform_guide_criteria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_gradingform_guide_fillings`
--

DROP TABLE IF EXISTS `mdl_gradingform_guide_fillings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_gradingform_guide_fillings` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `instanceid` bigint(10) NOT NULL,
  `criterionid` bigint(10) NOT NULL,
  `remark` longtext,
  `remarkformat` tinyint(2) DEFAULT NULL,
  `score` decimal(10,5) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_gradguidfill_inscri_uix` (`instanceid`,`criterionid`),
  KEY `mdl_gradguidfill_ins_ix` (`instanceid`),
  KEY `mdl_gradguidfill_cri_ix` (`criterionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores the data of how the guide is filled by a particular r';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_gradingform_guide_fillings`
--

LOCK TABLES `mdl_gradingform_guide_fillings` WRITE;
/*!40000 ALTER TABLE `mdl_gradingform_guide_fillings` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_gradingform_guide_fillings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_gradingform_rubric_criteria`
--

DROP TABLE IF EXISTS `mdl_gradingform_rubric_criteria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_gradingform_rubric_criteria` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `definitionid` bigint(10) NOT NULL,
  `sortorder` bigint(10) NOT NULL,
  `description` longtext,
  `descriptionformat` tinyint(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_gradrubrcrit_def_ix` (`definitionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores the rows of the rubric grid.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_gradingform_rubric_criteria`
--

LOCK TABLES `mdl_gradingform_rubric_criteria` WRITE;
/*!40000 ALTER TABLE `mdl_gradingform_rubric_criteria` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_gradingform_rubric_criteria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_gradingform_rubric_fillings`
--

DROP TABLE IF EXISTS `mdl_gradingform_rubric_fillings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_gradingform_rubric_fillings` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `instanceid` bigint(10) NOT NULL,
  `criterionid` bigint(10) NOT NULL,
  `levelid` bigint(10) DEFAULT NULL,
  `remark` longtext,
  `remarkformat` tinyint(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_gradrubrfill_inscri_uix` (`instanceid`,`criterionid`),
  KEY `mdl_gradrubrfill_lev_ix` (`levelid`),
  KEY `mdl_gradrubrfill_ins_ix` (`instanceid`),
  KEY `mdl_gradrubrfill_cri_ix` (`criterionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores the data of how the rubric is filled by a particular ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_gradingform_rubric_fillings`
--

LOCK TABLES `mdl_gradingform_rubric_fillings` WRITE;
/*!40000 ALTER TABLE `mdl_gradingform_rubric_fillings` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_gradingform_rubric_fillings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_gradingform_rubric_levels`
--

DROP TABLE IF EXISTS `mdl_gradingform_rubric_levels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_gradingform_rubric_levels` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `criterionid` bigint(10) NOT NULL,
  `score` decimal(10,5) NOT NULL,
  `definition` longtext,
  `definitionformat` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_gradrubrleve_cri_ix` (`criterionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores the columns of the rubric grid.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_gradingform_rubric_levels`
--

LOCK TABLES `mdl_gradingform_rubric_levels` WRITE;
/*!40000 ALTER TABLE `mdl_gradingform_rubric_levels` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_gradingform_rubric_levels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_groupings`
--

DROP TABLE IF EXISTS `mdl_groupings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_groupings` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `idnumber` varchar(100) NOT NULL DEFAULT '',
  `description` longtext,
  `descriptionformat` tinyint(2) NOT NULL DEFAULT '0',
  `configdata` longtext,
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_grou_idn2_ix` (`idnumber`),
  KEY `mdl_grou_cou2_ix` (`courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='A grouping is a collection of groups. WAS: groups_groupings';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_groupings`
--

LOCK TABLES `mdl_groupings` WRITE;
/*!40000 ALTER TABLE `mdl_groupings` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_groupings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_groupings_groups`
--

DROP TABLE IF EXISTS `mdl_groupings_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_groupings_groups` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `groupingid` bigint(10) NOT NULL DEFAULT '0',
  `groupid` bigint(10) NOT NULL DEFAULT '0',
  `timeadded` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_grougrou_gro_ix` (`groupingid`),
  KEY `mdl_grougrou_gro2_ix` (`groupid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Link a grouping to a group (note, groups can be in multiple ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_groupings_groups`
--

LOCK TABLES `mdl_groupings_groups` WRITE;
/*!40000 ALTER TABLE `mdl_groupings_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_groupings_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_groups`
--

DROP TABLE IF EXISTS `mdl_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_groups` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL,
  `idnumber` varchar(100) NOT NULL DEFAULT '',
  `name` varchar(254) NOT NULL DEFAULT '',
  `description` longtext,
  `descriptionformat` tinyint(2) NOT NULL DEFAULT '0',
  `enrolmentkey` varchar(50) DEFAULT NULL,
  `picture` bigint(10) NOT NULL DEFAULT '0',
  `hidepicture` tinyint(1) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_grou_idn_ix` (`idnumber`),
  KEY `mdl_grou_cou_ix` (`courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Each record represents a group.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_groups`
--

LOCK TABLES `mdl_groups` WRITE;
/*!40000 ALTER TABLE `mdl_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_groups_members`
--

DROP TABLE IF EXISTS `mdl_groups_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_groups_members` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `groupid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `timeadded` bigint(10) NOT NULL DEFAULT '0',
  `component` varchar(100) NOT NULL DEFAULT '',
  `itemid` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_groumemb_gro_ix` (`groupid`),
  KEY `mdl_groumemb_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Link a user to a group.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_groups_members`
--

LOCK TABLES `mdl_groups_members` WRITE;
/*!40000 ALTER TABLE `mdl_groups_members` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_groups_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_imscp`
--

DROP TABLE IF EXISTS `mdl_imscp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_imscp` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `revision` bigint(10) NOT NULL DEFAULT '0',
  `keepold` bigint(10) NOT NULL DEFAULT '-1',
  `structure` longtext,
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_imsc_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='each record is one imscp resource';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_imscp`
--

LOCK TABLES `mdl_imscp` WRITE;
/*!40000 ALTER TABLE `mdl_imscp` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_imscp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_label`
--

DROP TABLE IF EXISTS `mdl_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_label` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext NOT NULL,
  `introformat` smallint(4) DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_labe_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines labels';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_label`
--

LOCK TABLES `mdl_label` WRITE;
/*!40000 ALTER TABLE `mdl_label` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lesson`
--

DROP TABLE IF EXISTS `mdl_lesson`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lesson` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `practice` smallint(3) NOT NULL DEFAULT '0',
  `modattempts` smallint(3) NOT NULL DEFAULT '0',
  `usepassword` smallint(3) NOT NULL DEFAULT '0',
  `password` varchar(32) NOT NULL DEFAULT '',
  `dependency` bigint(10) NOT NULL DEFAULT '0',
  `conditions` longtext NOT NULL,
  `grade` bigint(10) NOT NULL DEFAULT '0',
  `custom` smallint(3) NOT NULL DEFAULT '0',
  `ongoing` smallint(3) NOT NULL DEFAULT '0',
  `usemaxgrade` smallint(3) NOT NULL DEFAULT '0',
  `maxanswers` smallint(3) NOT NULL DEFAULT '4',
  `maxattempts` smallint(3) NOT NULL DEFAULT '5',
  `review` smallint(3) NOT NULL DEFAULT '0',
  `nextpagedefault` smallint(3) NOT NULL DEFAULT '0',
  `feedback` smallint(3) NOT NULL DEFAULT '1',
  `minquestions` smallint(3) NOT NULL DEFAULT '0',
  `maxpages` smallint(3) NOT NULL DEFAULT '0',
  `timed` smallint(3) NOT NULL DEFAULT '0',
  `maxtime` bigint(10) NOT NULL DEFAULT '0',
  `retake` smallint(3) NOT NULL DEFAULT '1',
  `activitylink` bigint(10) NOT NULL DEFAULT '0',
  `mediafile` varchar(255) NOT NULL DEFAULT '',
  `mediaheight` bigint(10) NOT NULL DEFAULT '100',
  `mediawidth` bigint(10) NOT NULL DEFAULT '650',
  `mediaclose` smallint(3) NOT NULL DEFAULT '0',
  `slideshow` smallint(3) NOT NULL DEFAULT '0',
  `width` bigint(10) NOT NULL DEFAULT '640',
  `height` bigint(10) NOT NULL DEFAULT '480',
  `bgcolor` varchar(7) NOT NULL DEFAULT '#FFFFFF',
  `displayleft` smallint(3) NOT NULL DEFAULT '0',
  `displayleftif` smallint(3) NOT NULL DEFAULT '0',
  `progressbar` smallint(3) NOT NULL DEFAULT '0',
  `highscores` smallint(3) NOT NULL DEFAULT '0',
  `maxhighscores` bigint(10) NOT NULL DEFAULT '0',
  `available` bigint(10) NOT NULL DEFAULT '0',
  `deadline` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_less_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines lesson';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lesson`
--

LOCK TABLES `mdl_lesson` WRITE;
/*!40000 ALTER TABLE `mdl_lesson` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lesson` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lesson_answers`
--

DROP TABLE IF EXISTS `mdl_lesson_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lesson_answers` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `lessonid` bigint(10) NOT NULL DEFAULT '0',
  `pageid` bigint(10) NOT NULL DEFAULT '0',
  `jumpto` bigint(11) NOT NULL DEFAULT '0',
  `grade` smallint(4) NOT NULL DEFAULT '0',
  `score` bigint(10) NOT NULL DEFAULT '0',
  `flags` smallint(3) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `answer` longtext,
  `answerformat` tinyint(2) NOT NULL DEFAULT '0',
  `response` longtext,
  `responseformat` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_lessansw_les_ix` (`lessonid`),
  KEY `mdl_lessansw_pag_ix` (`pageid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines lesson_answers';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lesson_answers`
--

LOCK TABLES `mdl_lesson_answers` WRITE;
/*!40000 ALTER TABLE `mdl_lesson_answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lesson_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lesson_attempts`
--

DROP TABLE IF EXISTS `mdl_lesson_attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lesson_attempts` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `lessonid` bigint(10) NOT NULL DEFAULT '0',
  `pageid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `answerid` bigint(10) NOT NULL DEFAULT '0',
  `retry` smallint(3) NOT NULL DEFAULT '0',
  `correct` bigint(10) NOT NULL DEFAULT '0',
  `useranswer` longtext,
  `timeseen` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_lessatte_use_ix` (`userid`),
  KEY `mdl_lessatte_les_ix` (`lessonid`),
  KEY `mdl_lessatte_pag_ix` (`pageid`),
  KEY `mdl_lessatte_ans_ix` (`answerid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines lesson_attempts';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lesson_attempts`
--

LOCK TABLES `mdl_lesson_attempts` WRITE;
/*!40000 ALTER TABLE `mdl_lesson_attempts` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lesson_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lesson_branch`
--

DROP TABLE IF EXISTS `mdl_lesson_branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lesson_branch` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `lessonid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `pageid` bigint(10) NOT NULL DEFAULT '0',
  `retry` bigint(10) NOT NULL DEFAULT '0',
  `flag` smallint(3) NOT NULL DEFAULT '0',
  `timeseen` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_lessbran_use_ix` (`userid`),
  KEY `mdl_lessbran_les_ix` (`lessonid`),
  KEY `mdl_lessbran_pag_ix` (`pageid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='branches for each lesson/user';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lesson_branch`
--

LOCK TABLES `mdl_lesson_branch` WRITE;
/*!40000 ALTER TABLE `mdl_lesson_branch` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lesson_branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lesson_grades`
--

DROP TABLE IF EXISTS `mdl_lesson_grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lesson_grades` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `lessonid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `grade` double NOT NULL DEFAULT '0',
  `late` smallint(3) NOT NULL DEFAULT '0',
  `completed` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_lessgrad_use_ix` (`userid`),
  KEY `mdl_lessgrad_les_ix` (`lessonid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines lesson_grades';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lesson_grades`
--

LOCK TABLES `mdl_lesson_grades` WRITE;
/*!40000 ALTER TABLE `mdl_lesson_grades` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lesson_grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lesson_high_scores`
--

DROP TABLE IF EXISTS `mdl_lesson_high_scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lesson_high_scores` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `lessonid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `gradeid` bigint(10) NOT NULL DEFAULT '0',
  `nickname` varchar(5) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_lesshighscor_use_ix` (`userid`),
  KEY `mdl_lesshighscor_les_ix` (`lessonid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='high scores for each lesson';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lesson_high_scores`
--

LOCK TABLES `mdl_lesson_high_scores` WRITE;
/*!40000 ALTER TABLE `mdl_lesson_high_scores` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lesson_high_scores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lesson_pages`
--

DROP TABLE IF EXISTS `mdl_lesson_pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lesson_pages` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `lessonid` bigint(10) NOT NULL DEFAULT '0',
  `prevpageid` bigint(10) NOT NULL DEFAULT '0',
  `nextpageid` bigint(10) NOT NULL DEFAULT '0',
  `qtype` smallint(3) NOT NULL DEFAULT '0',
  `qoption` smallint(3) NOT NULL DEFAULT '0',
  `layout` smallint(3) NOT NULL DEFAULT '1',
  `display` smallint(3) NOT NULL DEFAULT '1',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `contents` longtext NOT NULL,
  `contentsformat` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_lesspage_les_ix` (`lessonid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines lesson_pages';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lesson_pages`
--

LOCK TABLES `mdl_lesson_pages` WRITE;
/*!40000 ALTER TABLE `mdl_lesson_pages` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lesson_pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lesson_timer`
--

DROP TABLE IF EXISTS `mdl_lesson_timer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lesson_timer` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `lessonid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `starttime` bigint(10) NOT NULL DEFAULT '0',
  `lessontime` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_lesstime_use_ix` (`userid`),
  KEY `mdl_lesstime_les_ix` (`lessonid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='lesson timer for each lesson';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lesson_timer`
--

LOCK TABLES `mdl_lesson_timer` WRITE;
/*!40000 ALTER TABLE `mdl_lesson_timer` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lesson_timer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_license`
--

DROP TABLE IF EXISTS `mdl_license`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_license` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `shortname` varchar(255) DEFAULT NULL,
  `fullname` longtext,
  `source` varchar(255) DEFAULT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  `version` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='store licenses used by moodle';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_license`
--

LOCK TABLES `mdl_license` WRITE;
/*!40000 ALTER TABLE `mdl_license` DISABLE KEYS */;
INSERT INTO `mdl_license` VALUES (1,'unknown','Unknown license','',1,2010033100),(2,'allrightsreserved','All rights reserved','http://en.wikipedia.org/wiki/All_rights_reserved',1,2010033100),(3,'public','Public Domain','http://creativecommons.org/licenses/publicdomain/',1,2010033100),(4,'cc','Creative Commons','http://creativecommons.org/licenses/by/3.0/',1,2010033100),(5,'cc-nd','Creative Commons - NoDerivs','http://creativecommons.org/licenses/by-nd/3.0/',1,2010033100),(6,'cc-nc-nd','Creative Commons - No Commercial NoDerivs','http://creativecommons.org/licenses/by-nc-nd/3.0/',1,2010033100),(7,'cc-nc','Creative Commons - No Commercial','http://creativecommons.org/licenses/by-nc/3.0/',1,2013051500),(8,'cc-nc-sa','Creative Commons - No Commercial ShareAlike','http://creativecommons.org/licenses/by-nc-sa/3.0/',1,2010033100),(9,'cc-sa','Creative Commons - ShareAlike','http://creativecommons.org/licenses/by-sa/3.0/',1,2010033100);
/*!40000 ALTER TABLE `mdl_license` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lock_db`
--

DROP TABLE IF EXISTS `mdl_lock_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lock_db` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resourcekey` varchar(255) NOT NULL DEFAULT '',
  `expires` bigint(10) DEFAULT NULL,
  `owner` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_lockdb_res_uix` (`resourcekey`),
  KEY `mdl_lockdb_exp_ix` (`expires`),
  KEY `mdl_lockdb_own_ix` (`owner`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores active and inactive lock types for db locking method.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lock_db`
--

LOCK TABLES `mdl_lock_db` WRITE;
/*!40000 ALTER TABLE `mdl_lock_db` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lock_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_log`
--

DROP TABLE IF EXISTS `mdl_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_log` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `time` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `ip` varchar(45) NOT NULL DEFAULT '',
  `course` bigint(10) NOT NULL DEFAULT '0',
  `module` varchar(20) NOT NULL DEFAULT '',
  `cmid` bigint(10) NOT NULL DEFAULT '0',
  `action` varchar(40) NOT NULL DEFAULT '',
  `url` varchar(100) NOT NULL DEFAULT '',
  `info` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_log_coumodact_ix` (`course`,`module`,`action`),
  KEY `mdl_log_tim_ix` (`time`),
  KEY `mdl_log_act_ix` (`action`),
  KEY `mdl_log_usecou_ix` (`userid`,`course`),
  KEY `mdl_log_cmi_ix` (`cmid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Every action is logged as far as possible';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_log`
--

LOCK TABLES `mdl_log` WRITE;
/*!40000 ALTER TABLE `mdl_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_log_display`
--

DROP TABLE IF EXISTS `mdl_log_display`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_log_display` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `module` varchar(20) NOT NULL DEFAULT '',
  `action` varchar(40) NOT NULL DEFAULT '',
  `mtable` varchar(30) NOT NULL DEFAULT '',
  `field` varchar(200) NOT NULL DEFAULT '',
  `component` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_logdisp_modact_uix` (`module`,`action`)
) ENGINE=InnoDB AUTO_INCREMENT=188 DEFAULT CHARSET=utf8 COMMENT='For a particular module/action, specifies a moodle table/fie';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_log_display`
--

LOCK TABLES `mdl_log_display` WRITE;
/*!40000 ALTER TABLE `mdl_log_display` DISABLE KEYS */;
INSERT INTO `mdl_log_display` VALUES (1,'course','user report','user','CONCAT(firstname, \' \', lastname)','moodle'),(2,'course','view','course','fullname','moodle'),(3,'course','view section','course_sections','name','moodle'),(4,'course','update','course','fullname','moodle'),(5,'course','hide','course','fullname','moodle'),(6,'course','show','course','fullname','moodle'),(7,'course','move','course','fullname','moodle'),(8,'course','enrol','course','fullname','moodle'),(9,'course','unenrol','course','fullname','moodle'),(10,'course','report log','course','fullname','moodle'),(11,'course','report live','course','fullname','moodle'),(12,'course','report outline','course','fullname','moodle'),(13,'course','report participation','course','fullname','moodle'),(14,'course','report stats','course','fullname','moodle'),(15,'category','add','course_categories','name','moodle'),(16,'category','hide','course_categories','name','moodle'),(17,'category','move','course_categories','name','moodle'),(18,'category','show','course_categories','name','moodle'),(19,'category','update','course_categories','name','moodle'),(20,'message','write','user','CONCAT(firstname, \' \', lastname)','moodle'),(21,'message','read','user','CONCAT(firstname, \' \', lastname)','moodle'),(22,'message','add contact','user','CONCAT(firstname, \' \', lastname)','moodle'),(23,'message','remove contact','user','CONCAT(firstname, \' \', lastname)','moodle'),(24,'message','block contact','user','CONCAT(firstname, \' \', lastname)','moodle'),(25,'message','unblock contact','user','CONCAT(firstname, \' \', lastname)','moodle'),(26,'group','view','groups','name','moodle'),(27,'tag','update','tag','name','moodle'),(28,'tag','flag','tag','name','moodle'),(29,'user','view','user','CONCAT(firstname, \' \', lastname)','moodle'),(30,'assign','add','assign','name','mod_assign'),(31,'assign','delete mod','assign','name','mod_assign'),(32,'assign','download all submissions','assign','name','mod_assign'),(33,'assign','grade submission','assign','name','mod_assign'),(34,'assign','lock submission','assign','name','mod_assign'),(35,'assign','reveal identities','assign','name','mod_assign'),(36,'assign','revert submission to draft','assign','name','mod_assign'),(37,'assign','set marking workflow state','assign','name','mod_assign'),(38,'assign','submission statement accepted','assign','name','mod_assign'),(39,'assign','submit','assign','name','mod_assign'),(40,'assign','submit for grading','assign','name','mod_assign'),(41,'assign','unlock submission','assign','name','mod_assign'),(42,'assign','update','assign','name','mod_assign'),(43,'assign','upload','assign','name','mod_assign'),(44,'assign','view','assign','name','mod_assign'),(45,'assign','view all','course','fullname','mod_assign'),(46,'assign','view confirm submit assignment form','assign','name','mod_assign'),(47,'assign','view grading form','assign','name','mod_assign'),(48,'assign','view submission','assign','name','mod_assign'),(49,'assign','view submission grading table','assign','name','mod_assign'),(50,'assign','view submit assignment form','assign','name','mod_assign'),(51,'assign','view feedback','assign','name','mod_assign'),(52,'assign','view batch set marking workflow state','assign','name','mod_assign'),(53,'assignment','view','assignment','name','mod_assignment'),(54,'assignment','add','assignment','name','mod_assignment'),(55,'assignment','update','assignment','name','mod_assignment'),(56,'assignment','view submission','assignment','name','mod_assignment'),(57,'assignment','upload','assignment','name','mod_assignment'),(58,'book','add','book','name','mod_book'),(59,'book','update','book','name','mod_book'),(60,'book','view','book','name','mod_book'),(61,'book','add chapter','book_chapters','title','mod_book'),(62,'book','update chapter','book_chapters','title','mod_book'),(63,'book','view chapter','book_chapters','title','mod_book'),(64,'chat','view','chat','name','mod_chat'),(65,'chat','add','chat','name','mod_chat'),(66,'chat','update','chat','name','mod_chat'),(67,'chat','report','chat','name','mod_chat'),(68,'chat','talk','chat','name','mod_chat'),(69,'choice','view','choice','name','mod_choice'),(70,'choice','update','choice','name','mod_choice'),(71,'choice','add','choice','name','mod_choice'),(72,'choice','report','choice','name','mod_choice'),(73,'choice','choose','choice','name','mod_choice'),(74,'choice','choose again','choice','name','mod_choice'),(75,'data','view','data','name','mod_data'),(76,'data','add','data','name','mod_data'),(77,'data','update','data','name','mod_data'),(78,'data','record delete','data','name','mod_data'),(79,'data','fields add','data_fields','name','mod_data'),(80,'data','fields update','data_fields','name','mod_data'),(81,'data','templates saved','data','name','mod_data'),(82,'data','templates def','data','name','mod_data'),(83,'feedback','startcomplete','feedback','name','mod_feedback'),(84,'feedback','submit','feedback','name','mod_feedback'),(85,'feedback','delete','feedback','name','mod_feedback'),(86,'feedback','view','feedback','name','mod_feedback'),(87,'feedback','view all','course','shortname','mod_feedback'),(88,'folder','view','folder','name','mod_folder'),(89,'folder','view all','folder','name','mod_folder'),(90,'folder','update','folder','name','mod_folder'),(91,'folder','add','folder','name','mod_folder'),(92,'forum','add','forum','name','mod_forum'),(93,'forum','update','forum','name','mod_forum'),(94,'forum','add discussion','forum_discussions','name','mod_forum'),(95,'forum','add post','forum_posts','subject','mod_forum'),(96,'forum','update post','forum_posts','subject','mod_forum'),(97,'forum','user report','user','CONCAT(firstname, \' \', lastname)','mod_forum'),(98,'forum','move discussion','forum_discussions','name','mod_forum'),(99,'forum','view subscribers','forum','name','mod_forum'),(100,'forum','view discussion','forum_discussions','name','mod_forum'),(101,'forum','view forum','forum','name','mod_forum'),(102,'forum','subscribe','forum','name','mod_forum'),(103,'forum','unsubscribe','forum','name','mod_forum'),(104,'glossary','add','glossary','name','mod_glossary'),(105,'glossary','update','glossary','name','mod_glossary'),(106,'glossary','view','glossary','name','mod_glossary'),(107,'glossary','view all','glossary','name','mod_glossary'),(108,'glossary','add entry','glossary','name','mod_glossary'),(109,'glossary','update entry','glossary','name','mod_glossary'),(110,'glossary','add category','glossary','name','mod_glossary'),(111,'glossary','update category','glossary','name','mod_glossary'),(112,'glossary','delete category','glossary','name','mod_glossary'),(113,'glossary','approve entry','glossary','name','mod_glossary'),(114,'glossary','disapprove entry','glossary','name','mod_glossary'),(115,'glossary','view entry','glossary_entries','concept','mod_glossary'),(116,'imscp','view','imscp','name','mod_imscp'),(117,'imscp','view all','imscp','name','mod_imscp'),(118,'imscp','update','imscp','name','mod_imscp'),(119,'imscp','add','imscp','name','mod_imscp'),(120,'label','add','label','name','mod_label'),(121,'label','update','label','name','mod_label'),(122,'lesson','start','lesson','name','mod_lesson'),(123,'lesson','end','lesson','name','mod_lesson'),(124,'lesson','view','lesson_pages','title','mod_lesson'),(125,'lti','view','lti','name','mod_lti'),(126,'lti','launch','lti','name','mod_lti'),(127,'lti','view all','lti','name','mod_lti'),(128,'page','view','page','name','mod_page'),(129,'page','view all','page','name','mod_page'),(130,'page','update','page','name','mod_page'),(131,'page','add','page','name','mod_page'),(132,'quiz','add','quiz','name','mod_quiz'),(133,'quiz','update','quiz','name','mod_quiz'),(134,'quiz','view','quiz','name','mod_quiz'),(135,'quiz','report','quiz','name','mod_quiz'),(136,'quiz','attempt','quiz','name','mod_quiz'),(137,'quiz','submit','quiz','name','mod_quiz'),(138,'quiz','review','quiz','name','mod_quiz'),(139,'quiz','editquestions','quiz','name','mod_quiz'),(140,'quiz','preview','quiz','name','mod_quiz'),(141,'quiz','start attempt','quiz','name','mod_quiz'),(142,'quiz','close attempt','quiz','name','mod_quiz'),(143,'quiz','continue attempt','quiz','name','mod_quiz'),(144,'quiz','edit override','quiz','name','mod_quiz'),(145,'quiz','delete override','quiz','name','mod_quiz'),(146,'quiz','view summary','quiz','name','mod_quiz'),(147,'resource','view','resource','name','mod_resource'),(148,'resource','view all','resource','name','mod_resource'),(149,'resource','update','resource','name','mod_resource'),(150,'resource','add','resource','name','mod_resource'),(151,'scorm','view','scorm','name','mod_scorm'),(152,'scorm','review','scorm','name','mod_scorm'),(153,'scorm','update','scorm','name','mod_scorm'),(154,'scorm','add','scorm','name','mod_scorm'),(155,'survey','add','survey','name','mod_survey'),(156,'survey','update','survey','name','mod_survey'),(157,'survey','download','survey','name','mod_survey'),(158,'survey','view form','survey','name','mod_survey'),(159,'survey','view graph','survey','name','mod_survey'),(160,'survey','view report','survey','name','mod_survey'),(161,'survey','submit','survey','name','mod_survey'),(162,'url','view','url','name','mod_url'),(163,'url','view all','url','name','mod_url'),(164,'url','update','url','name','mod_url'),(165,'url','add','url','name','mod_url'),(166,'workshop','add','workshop','name','mod_workshop'),(167,'workshop','update','workshop','name','mod_workshop'),(168,'workshop','view','workshop','name','mod_workshop'),(169,'workshop','view all','workshop','name','mod_workshop'),(170,'workshop','add submission','workshop_submissions','title','mod_workshop'),(171,'workshop','update submission','workshop_submissions','title','mod_workshop'),(172,'workshop','view submission','workshop_submissions','title','mod_workshop'),(173,'workshop','add assessment','workshop_submissions','title','mod_workshop'),(174,'workshop','update assessment','workshop_submissions','title','mod_workshop'),(175,'workshop','add example','workshop_submissions','title','mod_workshop'),(176,'workshop','update example','workshop_submissions','title','mod_workshop'),(177,'workshop','view example','workshop_submissions','title','mod_workshop'),(178,'workshop','add reference assessment','workshop_submissions','title','mod_workshop'),(179,'workshop','update reference assessment','workshop_submissions','title','mod_workshop'),(180,'workshop','add example assessment','workshop_submissions','title','mod_workshop'),(181,'workshop','update example assessment','workshop_submissions','title','mod_workshop'),(182,'workshop','update aggregate grades','workshop','name','mod_workshop'),(183,'workshop','update clear aggregated grades','workshop','name','mod_workshop'),(184,'workshop','update clear assessments','workshop','name','mod_workshop'),(185,'book','exportimscp','book','name','booktool_exportimscp'),(186,'book','print','book','name','booktool_print'),(187,'book','print chapter','book_chapters','title','booktool_print');
/*!40000 ALTER TABLE `mdl_log_display` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_log_queries`
--

DROP TABLE IF EXISTS `mdl_log_queries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_log_queries` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `qtype` mediumint(5) NOT NULL,
  `sqltext` longtext NOT NULL,
  `sqlparams` longtext,
  `error` mediumint(5) NOT NULL DEFAULT '0',
  `info` longtext,
  `backtrace` longtext,
  `exectime` decimal(10,5) NOT NULL,
  `timelogged` bigint(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Logged database queries.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_log_queries`
--

LOCK TABLES `mdl_log_queries` WRITE;
/*!40000 ALTER TABLE `mdl_log_queries` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_log_queries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_logstore_standard_log`
--

DROP TABLE IF EXISTS `mdl_logstore_standard_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_logstore_standard_log` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `eventname` varchar(255) NOT NULL DEFAULT '',
  `component` varchar(100) NOT NULL DEFAULT '',
  `action` varchar(100) NOT NULL DEFAULT '',
  `target` varchar(100) NOT NULL DEFAULT '',
  `objecttable` varchar(50) DEFAULT NULL,
  `objectid` bigint(10) DEFAULT NULL,
  `crud` varchar(1) NOT NULL DEFAULT '',
  `edulevel` tinyint(1) NOT NULL,
  `contextid` bigint(10) NOT NULL,
  `contextlevel` bigint(10) NOT NULL,
  `contextinstanceid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `courseid` bigint(10) DEFAULT NULL,
  `relateduserid` bigint(10) DEFAULT NULL,
  `anonymous` tinyint(1) NOT NULL DEFAULT '0',
  `other` longtext,
  `timecreated` bigint(10) NOT NULL,
  `origin` varchar(10) DEFAULT NULL,
  `ip` varchar(45) DEFAULT NULL,
  `realuserid` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_logsstanlog_tim_ix` (`timecreated`),
  KEY `mdl_logsstanlog_couanotim_ix` (`courseid`,`anonymous`,`timecreated`),
  KEY `mdl_logsstanlog_useconconcr_ix` (`userid`,`contextlevel`,`contextinstanceid`,`crud`,`edulevel`,`timecreated`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COMMENT='Standard log table';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_logstore_standard_log`
--

LOCK TABLES `mdl_logstore_standard_log` WRITE;
/*!40000 ALTER TABLE `mdl_logstore_standard_log` DISABLE KEYS */;
INSERT INTO `mdl_logstore_standard_log` VALUES (1,'\\core\\event\\user_loggedin','core','loggedin','user','user',2,'r',0,1,10,0,2,0,NULL,0,'a:1:{s:8:\"username\";s:5:\"admin\";}',1435340364,'web','172.20.0.1',NULL),(2,'\\core\\event\\user_password_updated','core','updated','user_password',NULL,NULL,'u',0,5,30,2,2,0,2,0,'a:1:{s:14:\"forgottenreset\";b:0;}',1435340429,'web','172.20.0.1',NULL),(3,'\\core\\event\\user_updated','core','updated','user','user',2,'u',0,5,30,2,2,0,2,0,'N;',1435340429,'web','172.20.0.1',NULL),(4,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,2,1,NULL,0,'N;',1435340451,'web','172.20.0.1',NULL),(5,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,2,1,NULL,0,'N;',1435340634,'web','172.20.0.1',NULL),(6,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,0,1,NULL,0,'N;',1439408643,'web','172.20.0.1',NULL),(7,'\\core\\event\\user_loggedin','core','loggedin','user','user',2,'r',0,1,10,0,2,0,NULL,0,'a:1:{s:8:\"username\";s:5:\"admin\";}',1439408653,'web','172.20.0.1',NULL),(8,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,2,1,NULL,0,'N;',1439408653,'web','172.20.0.1',NULL),(9,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,2,1,NULL,0,'N;',1439408677,'web','172.20.0.1',NULL),(10,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,2,1,NULL,0,'N;',1439408684,'web','172.20.0.1',NULL),(11,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,2,1,NULL,0,'N;',1439408684,'web','172.20.0.1',NULL),(12,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,2,1,NULL,0,'N;',1439408700,'web','172.20.0.1',NULL),(13,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,2,1,NULL,0,'N;',1439408714,'web','172.20.0.1',NULL),(14,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,2,1,NULL,0,'N;',1439408714,'web','172.20.0.1',NULL),(15,'\\core\\event\\user_loggedout','core','loggedout','user','user',2,'r',0,1,10,0,2,0,NULL,0,'a:1:{s:9:\"sessionid\";s:26:\"44m34vf5n6kja785lbcekprro6\";}',1439408739,'web','172.20.0.1',NULL),(16,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,0,1,NULL,0,'N;',1439408739,'web','172.20.0.1',NULL),(17,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,0,1,NULL,0,'N;',1439408746,'web','172.20.0.1',NULL),(18,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,0,1,NULL,0,'N;',1443029442,'web','172.20.0.1',NULL),(19,'\\core\\event\\user_loggedin','core','loggedin','user','user',2,'r',0,1,10,0,2,0,NULL,0,'a:1:{s:8:\"username\";s:5:\"admin\";}',1443029450,'web','172.20.0.1',NULL),(20,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,2,1,NULL,0,'N;',1443029450,'web','172.20.0.1',NULL),(21,'\\core\\event\\user_loggedout','core','loggedout','user','user',2,'r',0,1,10,0,2,0,NULL,0,'a:1:{s:9:\"sessionid\";s:26:\"jt6s563k8n6s54nb921mb1a8r3\";}',1443029476,'web','172.20.0.1',NULL),(22,'\\core\\event\\course_viewed','core','viewed','course',NULL,NULL,'r',2,2,50,1,0,1,NULL,0,'N;',1443029476,'web','172.20.0.1',NULL);
/*!40000 ALTER TABLE `mdl_logstore_standard_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lti`
--

DROP TABLE IF EXISTS `mdl_lti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lti` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext,
  `introformat` smallint(4) DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `typeid` bigint(10) DEFAULT NULL,
  `toolurl` longtext NOT NULL,
  `securetoolurl` longtext,
  `instructorchoicesendname` tinyint(1) DEFAULT NULL,
  `instructorchoicesendemailaddr` tinyint(1) DEFAULT NULL,
  `instructorchoiceallowroster` tinyint(1) DEFAULT NULL,
  `instructorchoiceallowsetting` tinyint(1) DEFAULT NULL,
  `instructorcustomparameters` varchar(255) DEFAULT NULL,
  `instructorchoiceacceptgrades` tinyint(1) DEFAULT NULL,
  `grade` bigint(10) NOT NULL DEFAULT '100',
  `launchcontainer` tinyint(2) NOT NULL DEFAULT '1',
  `resourcekey` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `debuglaunch` tinyint(1) NOT NULL DEFAULT '0',
  `showtitlelaunch` tinyint(1) NOT NULL DEFAULT '0',
  `showdescriptionlaunch` tinyint(1) NOT NULL DEFAULT '0',
  `servicesalt` varchar(40) DEFAULT NULL,
  `icon` longtext,
  `secureicon` longtext,
  PRIMARY KEY (`id`),
  KEY `mdl_lti_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table contains Basic LTI activities instances';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lti`
--

LOCK TABLES `mdl_lti` WRITE;
/*!40000 ALTER TABLE `mdl_lti` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lti_submission`
--

DROP TABLE IF EXISTS `mdl_lti_submission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lti_submission` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `ltiid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `datesubmitted` bigint(10) NOT NULL,
  `dateupdated` bigint(10) NOT NULL,
  `gradepercent` decimal(10,5) NOT NULL,
  `originalgrade` decimal(10,5) NOT NULL,
  `launchid` bigint(10) NOT NULL,
  `state` tinyint(2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_ltisubm_lti_ix` (`ltiid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Keeps track of individual submissions for LTI activities.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lti_submission`
--

LOCK TABLES `mdl_lti_submission` WRITE;
/*!40000 ALTER TABLE `mdl_lti_submission` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lti_submission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lti_tool_proxies`
--

DROP TABLE IF EXISTS `mdl_lti_tool_proxies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lti_tool_proxies` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT 'Tool Provider',
  `regurl` longtext,
  `state` tinyint(2) NOT NULL DEFAULT '1',
  `guid` varchar(255) DEFAULT NULL,
  `secret` varchar(255) DEFAULT NULL,
  `vendorcode` varchar(255) DEFAULT NULL,
  `capabilityoffered` longtext NOT NULL,
  `serviceoffered` longtext NOT NULL,
  `toolproxy` longtext,
  `createdby` bigint(10) NOT NULL,
  `timecreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_ltitoolprox_gui_uix` (`guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='LTI tool proxy registrations';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lti_tool_proxies`
--

LOCK TABLES `mdl_lti_tool_proxies` WRITE;
/*!40000 ALTER TABLE `mdl_lti_tool_proxies` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lti_tool_proxies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lti_tool_settings`
--

DROP TABLE IF EXISTS `mdl_lti_tool_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lti_tool_settings` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `toolproxyid` bigint(10) NOT NULL,
  `course` bigint(10) DEFAULT NULL,
  `coursemoduleid` bigint(10) DEFAULT NULL,
  `settings` longtext NOT NULL,
  `timecreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_ltitoolsett_too_ix` (`toolproxyid`),
  KEY `mdl_ltitoolsett_cou_ix` (`course`),
  KEY `mdl_ltitoolsett_cou2_ix` (`coursemoduleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='LTI tool setting values';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lti_tool_settings`
--

LOCK TABLES `mdl_lti_tool_settings` WRITE;
/*!40000 ALTER TABLE `mdl_lti_tool_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lti_tool_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lti_types`
--

DROP TABLE IF EXISTS `mdl_lti_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lti_types` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT 'basiclti Activity',
  `baseurl` longtext NOT NULL,
  `tooldomain` varchar(255) NOT NULL DEFAULT '',
  `state` tinyint(2) NOT NULL DEFAULT '2',
  `course` bigint(10) NOT NULL,
  `coursevisible` tinyint(1) NOT NULL DEFAULT '0',
  `toolproxyid` bigint(10) DEFAULT NULL,
  `enabledcapability` longtext,
  `parameter` longtext,
  `icon` longtext,
  `secureicon` longtext,
  `createdby` bigint(10) NOT NULL,
  `timecreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_ltitype_cou_ix` (`course`),
  KEY `mdl_ltitype_too_ix` (`tooldomain`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Basic LTI pre-configured activities';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lti_types`
--

LOCK TABLES `mdl_lti_types` WRITE;
/*!40000 ALTER TABLE `mdl_lti_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lti_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_lti_types_config`
--

DROP TABLE IF EXISTS `mdl_lti_types_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_lti_types_config` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `typeid` bigint(10) NOT NULL,
  `name` varchar(100) NOT NULL DEFAULT '',
  `value` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_ltitypeconf_typ_ix` (`typeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Basic LTI types configuration';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_lti_types_config`
--

LOCK TABLES `mdl_lti_types_config` WRITE;
/*!40000 ALTER TABLE `mdl_lti_types_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_lti_types_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_message`
--

DROP TABLE IF EXISTS `mdl_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_message` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `useridfrom` bigint(10) NOT NULL DEFAULT '0',
  `useridto` bigint(10) NOT NULL DEFAULT '0',
  `subject` longtext,
  `fullmessage` longtext,
  `fullmessageformat` smallint(4) DEFAULT '0',
  `fullmessagehtml` longtext,
  `smallmessage` longtext,
  `notification` tinyint(1) DEFAULT '0',
  `contexturl` longtext,
  `contexturlname` longtext,
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_mess_use_ix` (`useridfrom`),
  KEY `mdl_mess_use2_ix` (`useridto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores all unread messages';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_message`
--

LOCK TABLES `mdl_message` WRITE;
/*!40000 ALTER TABLE `mdl_message` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_message_airnotifier_devices`
--

DROP TABLE IF EXISTS `mdl_message_airnotifier_devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_message_airnotifier_devices` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userdeviceid` bigint(10) NOT NULL,
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_messairndevi_use_uix` (`userdeviceid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Store information about the devices registered in Airnotifie';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_message_airnotifier_devices`
--

LOCK TABLES `mdl_message_airnotifier_devices` WRITE;
/*!40000 ALTER TABLE `mdl_message_airnotifier_devices` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_message_airnotifier_devices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_message_contacts`
--

DROP TABLE IF EXISTS `mdl_message_contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_message_contacts` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `contactid` bigint(10) NOT NULL DEFAULT '0',
  `blocked` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_messcont_usecon_uix` (`userid`,`contactid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Maintains lists of relationships between users';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_message_contacts`
--

LOCK TABLES `mdl_message_contacts` WRITE;
/*!40000 ALTER TABLE `mdl_message_contacts` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_message_contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_message_processors`
--

DROP TABLE IF EXISTS `mdl_message_processors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_message_processors` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(166) NOT NULL DEFAULT '',
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='List of message output plugins';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_message_processors`
--

LOCK TABLES `mdl_message_processors` WRITE;
/*!40000 ALTER TABLE `mdl_message_processors` DISABLE KEYS */;
INSERT INTO `mdl_message_processors` VALUES (1,'airnotifier',0),(2,'email',1),(3,'jabber',1),(4,'popup',1);
/*!40000 ALTER TABLE `mdl_message_processors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_message_providers`
--

DROP TABLE IF EXISTS `mdl_message_providers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_message_providers` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '',
  `component` varchar(200) NOT NULL DEFAULT '',
  `capability` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_messprov_comnam_uix` (`component`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COMMENT='This table stores the message providers (modules and core sy';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_message_providers`
--

LOCK TABLES `mdl_message_providers` WRITE;
/*!40000 ALTER TABLE `mdl_message_providers` DISABLE KEYS */;
INSERT INTO `mdl_message_providers` VALUES (1,'notices','moodle','moodle/site:config'),(2,'errors','moodle','moodle/site:config'),(3,'availableupdate','moodle','moodle/site:config'),(4,'instantmessage','moodle',NULL),(5,'backup','moodle','moodle/site:config'),(6,'courserequested','moodle','moodle/site:approvecourse'),(7,'courserequestapproved','moodle','moodle/course:request'),(8,'courserequestrejected','moodle','moodle/course:request'),(9,'badgerecipientnotice','moodle','moodle/badges:earnbadge'),(10,'badgecreatornotice','moodle',NULL),(11,'assign_notification','mod_assign',NULL),(12,'assignment_updates','mod_assignment',NULL),(13,'submission','mod_feedback',NULL),(14,'message','mod_feedback',NULL),(15,'posts','mod_forum',NULL),(16,'graded_essay','mod_lesson',NULL),(17,'submission','mod_quiz','mod/quiz:emailnotifysubmission'),(18,'confirmation','mod_quiz','mod/quiz:emailconfirmsubmission'),(19,'attempt_overdue','mod_quiz','mod/quiz:emailwarnoverdue'),(20,'flatfile_enrolment','enrol_flatfile',NULL),(21,'imsenterprise_enrolment','enrol_imsenterprise',NULL),(22,'expiry_notification','enrol_manual',NULL),(23,'paypal_enrolment','enrol_paypal',NULL),(24,'expiry_notification','enrol_self',NULL),(25,'invalidrecipienthandler','tool_messageinbound',NULL),(26,'messageprocessingerror','tool_messageinbound',NULL),(27,'messageprocessingsuccess','tool_messageinbound',NULL),(28,'notification','tool_monitor','tool/monitor:subscribe');
/*!40000 ALTER TABLE `mdl_message_providers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_message_read`
--

DROP TABLE IF EXISTS `mdl_message_read`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_message_read` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `useridfrom` bigint(10) NOT NULL DEFAULT '0',
  `useridto` bigint(10) NOT NULL DEFAULT '0',
  `subject` longtext,
  `fullmessage` longtext,
  `fullmessageformat` smallint(4) DEFAULT '0',
  `fullmessagehtml` longtext,
  `smallmessage` longtext,
  `notification` tinyint(1) DEFAULT '0',
  `contexturl` longtext,
  `contexturlname` longtext,
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timeread` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_messread_use_ix` (`useridfrom`),
  KEY `mdl_messread_use2_ix` (`useridto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores all messages that have been read';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_message_read`
--

LOCK TABLES `mdl_message_read` WRITE;
/*!40000 ALTER TABLE `mdl_message_read` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_message_read` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_message_working`
--

DROP TABLE IF EXISTS `mdl_message_working`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_message_working` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `unreadmessageid` bigint(10) NOT NULL,
  `processorid` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_messwork_unr_ix` (`unreadmessageid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Lists all the messages and processors that need to be proces';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_message_working`
--

LOCK TABLES `mdl_message_working` WRITE;
/*!40000 ALTER TABLE `mdl_message_working` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_message_working` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_messageinbound_datakeys`
--

DROP TABLE IF EXISTS `mdl_messageinbound_datakeys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_messageinbound_datakeys` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `handler` bigint(10) NOT NULL,
  `datavalue` bigint(10) NOT NULL,
  `datakey` varchar(64) DEFAULT NULL,
  `timecreated` bigint(10) NOT NULL,
  `expires` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_messdata_handat_uix` (`handler`,`datavalue`),
  KEY `mdl_messdata_han_ix` (`handler`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Inbound Message data item secret keys.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_messageinbound_datakeys`
--

LOCK TABLES `mdl_messageinbound_datakeys` WRITE;
/*!40000 ALTER TABLE `mdl_messageinbound_datakeys` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_messageinbound_datakeys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_messageinbound_handlers`
--

DROP TABLE IF EXISTS `mdl_messageinbound_handlers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_messageinbound_handlers` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `component` varchar(100) NOT NULL DEFAULT '',
  `classname` varchar(255) NOT NULL DEFAULT '',
  `defaultexpiration` bigint(10) NOT NULL DEFAULT '86400',
  `validateaddress` tinyint(1) NOT NULL DEFAULT '1',
  `enabled` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_messhand_cla_uix` (`classname`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='Inbound Message Handler definitions.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_messageinbound_handlers`
--

LOCK TABLES `mdl_messageinbound_handlers` WRITE;
/*!40000 ALTER TABLE `mdl_messageinbound_handlers` DISABLE KEYS */;
INSERT INTO `mdl_messageinbound_handlers` VALUES (1,'core','\\core\\message\\inbound\\private_files_handler',0,1,0),(2,'mod_forum','\\mod_forum\\message\\inbound\\reply_handler',604800,1,0),(3,'tool_messageinbound','\\tool_messageinbound\\message\\inbound\\invalid_recipient_handler',604800,0,1);
/*!40000 ALTER TABLE `mdl_messageinbound_handlers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_messageinbound_messagelist`
--

DROP TABLE IF EXISTS `mdl_messageinbound_messagelist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_messageinbound_messagelist` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `messageid` longtext NOT NULL,
  `userid` bigint(10) NOT NULL,
  `address` longtext NOT NULL,
  `timecreated` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_messmess_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='A list of message IDs for existing replies';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_messageinbound_messagelist`
--

LOCK TABLES `mdl_messageinbound_messagelist` WRITE;
/*!40000 ALTER TABLE `mdl_messageinbound_messagelist` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_messageinbound_messagelist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnet_application`
--

DROP TABLE IF EXISTS `mdl_mnet_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnet_application` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `display_name` varchar(50) NOT NULL DEFAULT '',
  `xmlrpc_server_url` varchar(255) NOT NULL DEFAULT '',
  `sso_land_url` varchar(255) NOT NULL DEFAULT '',
  `sso_jump_url` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Information about applications on remote hosts';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnet_application`
--

LOCK TABLES `mdl_mnet_application` WRITE;
/*!40000 ALTER TABLE `mdl_mnet_application` DISABLE KEYS */;
INSERT INTO `mdl_mnet_application` VALUES (1,'moodle','Moodle','/mnet/xmlrpc/server.php','/auth/mnet/land.php','/auth/mnet/jump.php'),(2,'mahara','Mahara','/api/xmlrpc/server.php','/auth/xmlrpc/land.php','/auth/xmlrpc/jump.php');
/*!40000 ALTER TABLE `mdl_mnet_application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnet_host`
--

DROP TABLE IF EXISTS `mdl_mnet_host`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnet_host` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `wwwroot` varchar(255) NOT NULL DEFAULT '',
  `ip_address` varchar(45) NOT NULL DEFAULT '',
  `name` varchar(80) NOT NULL DEFAULT '',
  `public_key` longtext NOT NULL,
  `public_key_expires` bigint(10) NOT NULL DEFAULT '0',
  `transport` tinyint(2) NOT NULL DEFAULT '0',
  `portno` mediumint(5) NOT NULL DEFAULT '0',
  `last_connect_time` bigint(10) NOT NULL DEFAULT '0',
  `last_log_id` bigint(10) NOT NULL DEFAULT '0',
  `force_theme` tinyint(1) NOT NULL DEFAULT '0',
  `theme` varchar(100) DEFAULT NULL,
  `applicationid` bigint(10) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `mdl_mnethost_app_ix` (`applicationid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Information about the local and remote hosts for RPC';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnet_host`
--

LOCK TABLES `mdl_mnet_host` WRITE;
/*!40000 ALTER TABLE `mdl_mnet_host` DISABLE KEYS */;
INSERT INTO `mdl_mnet_host` VALUES (1,0,'http://172.20.0.21','172.20.0.21','','',0,0,0,0,0,0,NULL,1),(2,0,'','','All Hosts','',0,0,0,0,0,0,NULL,1);
/*!40000 ALTER TABLE `mdl_mnet_host` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnet_host2service`
--

DROP TABLE IF EXISTS `mdl_mnet_host2service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnet_host2service` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `hostid` bigint(10) NOT NULL DEFAULT '0',
  `serviceid` bigint(10) NOT NULL DEFAULT '0',
  `publish` tinyint(1) NOT NULL DEFAULT '0',
  `subscribe` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_mnethost_hosser_uix` (`hostid`,`serviceid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Information about the services for a given host';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnet_host2service`
--

LOCK TABLES `mdl_mnet_host2service` WRITE;
/*!40000 ALTER TABLE `mdl_mnet_host2service` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_mnet_host2service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnet_log`
--

DROP TABLE IF EXISTS `mdl_mnet_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnet_log` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `hostid` bigint(10) NOT NULL DEFAULT '0',
  `remoteid` bigint(10) NOT NULL DEFAULT '0',
  `time` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `ip` varchar(45) NOT NULL DEFAULT '',
  `course` bigint(10) NOT NULL DEFAULT '0',
  `coursename` varchar(40) NOT NULL DEFAULT '',
  `module` varchar(20) NOT NULL DEFAULT '',
  `cmid` bigint(10) NOT NULL DEFAULT '0',
  `action` varchar(40) NOT NULL DEFAULT '',
  `url` varchar(100) NOT NULL DEFAULT '',
  `info` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_mnetlog_hosusecou_ix` (`hostid`,`userid`,`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Store session data from users migrating to other sites';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnet_log`
--

LOCK TABLES `mdl_mnet_log` WRITE;
/*!40000 ALTER TABLE `mdl_mnet_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_mnet_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnet_remote_rpc`
--

DROP TABLE IF EXISTS `mdl_mnet_remote_rpc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnet_remote_rpc` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `functionname` varchar(40) NOT NULL DEFAULT '',
  `xmlrpcpath` varchar(80) NOT NULL DEFAULT '',
  `plugintype` varchar(20) NOT NULL DEFAULT '',
  `pluginname` varchar(20) NOT NULL DEFAULT '',
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COMMENT='This table describes functions that might be called remotely';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnet_remote_rpc`
--

LOCK TABLES `mdl_mnet_remote_rpc` WRITE;
/*!40000 ALTER TABLE `mdl_mnet_remote_rpc` DISABLE KEYS */;
INSERT INTO `mdl_mnet_remote_rpc` VALUES (1,'user_authorise','auth/mnet/auth.php/user_authorise','auth','mnet',1),(2,'keepalive_server','auth/mnet/auth.php/keepalive_server','auth','mnet',1),(3,'kill_children','auth/mnet/auth.php/kill_children','auth','mnet',1),(4,'refresh_log','auth/mnet/auth.php/refresh_log','auth','mnet',1),(5,'fetch_user_image','auth/mnet/auth.php/fetch_user_image','auth','mnet',1),(6,'fetch_theme_info','auth/mnet/auth.php/fetch_theme_info','auth','mnet',1),(7,'update_enrolments','auth/mnet/auth.php/update_enrolments','auth','mnet',1),(8,'keepalive_client','auth/mnet/auth.php/keepalive_client','auth','mnet',1),(9,'kill_child','auth/mnet/auth.php/kill_child','auth','mnet',1),(10,'available_courses','enrol/mnet/enrol.php/available_courses','enrol','mnet',1),(11,'user_enrolments','enrol/mnet/enrol.php/user_enrolments','enrol','mnet',1),(12,'enrol_user','enrol/mnet/enrol.php/enrol_user','enrol','mnet',1),(13,'unenrol_user','enrol/mnet/enrol.php/unenrol_user','enrol','mnet',1),(14,'course_enrolments','enrol/mnet/enrol.php/course_enrolments','enrol','mnet',1),(15,'send_content_intent','portfolio/mahara/lib.php/send_content_intent','portfolio','mahara',1),(16,'send_content_ready','portfolio/mahara/lib.php/send_content_ready','portfolio','mahara',1);
/*!40000 ALTER TABLE `mdl_mnet_remote_rpc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnet_remote_service2rpc`
--

DROP TABLE IF EXISTS `mdl_mnet_remote_service2rpc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnet_remote_service2rpc` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `serviceid` bigint(10) NOT NULL DEFAULT '0',
  `rpcid` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_mnetremoserv_rpcser_uix` (`rpcid`,`serviceid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COMMENT='Group functions or methods under a service';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnet_remote_service2rpc`
--

LOCK TABLES `mdl_mnet_remote_service2rpc` WRITE;
/*!40000 ALTER TABLE `mdl_mnet_remote_service2rpc` DISABLE KEYS */;
INSERT INTO `mdl_mnet_remote_service2rpc` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,1,7),(8,2,8),(9,2,9),(10,3,10),(11,3,11),(12,3,12),(13,3,13),(14,3,14),(15,4,15),(16,4,16);
/*!40000 ALTER TABLE `mdl_mnet_remote_service2rpc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnet_rpc`
--

DROP TABLE IF EXISTS `mdl_mnet_rpc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnet_rpc` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `functionname` varchar(40) NOT NULL DEFAULT '',
  `xmlrpcpath` varchar(80) NOT NULL DEFAULT '',
  `plugintype` varchar(20) NOT NULL DEFAULT '',
  `pluginname` varchar(20) NOT NULL DEFAULT '',
  `enabled` tinyint(1) NOT NULL DEFAULT '0',
  `help` longtext NOT NULL,
  `profile` longtext NOT NULL,
  `filename` varchar(100) NOT NULL DEFAULT '',
  `classname` varchar(150) DEFAULT NULL,
  `static` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_mnetrpc_enaxml_ix` (`enabled`,`xmlrpcpath`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COMMENT='Functions or methods that we may publish or subscribe to';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnet_rpc`
--

LOCK TABLES `mdl_mnet_rpc` WRITE;
/*!40000 ALTER TABLE `mdl_mnet_rpc` DISABLE KEYS */;
INSERT INTO `mdl_mnet_rpc` VALUES (1,'user_authorise','auth/mnet/auth.php/user_authorise','auth','mnet',1,'Return user data for the provided token, compare with user_agent string.','a:2:{s:10:\"parameters\";a:2:{i:0;a:3:{s:4:\"name\";s:5:\"token\";s:4:\"type\";s:6:\"string\";s:11:\"description\";s:37:\"The unique ID provided by remotehost.\";}i:1;a:3:{s:4:\"name\";s:9:\"useragent\";s:4:\"type\";s:6:\"string\";s:11:\"description\";s:0:\"\";}}s:6:\"return\";a:2:{s:4:\"type\";s:5:\"array\";s:11:\"description\";s:44:\"$userdata Array of user info for remote host\";}}','auth.php','auth_plugin_mnet',0),(2,'keepalive_server','auth/mnet/auth.php/keepalive_server','auth','mnet',1,'Receives an array of usernames from a remote machine and prods their\nsessions to keep them alive','a:2:{s:10:\"parameters\";a:1:{i:0;a:3:{s:4:\"name\";s:5:\"array\";s:4:\"type\";s:5:\"array\";s:11:\"description\";s:21:\"An array of usernames\";}}s:6:\"return\";a:2:{s:4:\"type\";s:6:\"string\";s:11:\"description\";s:28:\"\"All ok\" or an error message\";}}','auth.php','auth_plugin_mnet',0),(3,'kill_children','auth/mnet/auth.php/kill_children','auth','mnet',1,'The IdP uses this function to kill child sessions on other hosts','a:2:{s:10:\"parameters\";a:2:{i:0;a:3:{s:4:\"name\";s:8:\"username\";s:4:\"type\";s:6:\"string\";s:11:\"description\";s:28:\"Username for session to kill\";}i:1;a:3:{s:4:\"name\";s:9:\"useragent\";s:4:\"type\";s:6:\"string\";s:11:\"description\";s:0:\"\";}}s:6:\"return\";a:2:{s:4:\"type\";s:6:\"string\";s:11:\"description\";s:39:\"A plaintext report of what has happened\";}}','auth.php','auth_plugin_mnet',0),(4,'refresh_log','auth/mnet/auth.php/refresh_log','auth','mnet',1,'Receives an array of log entries from an SP and adds them to the mnet_log\ntable','a:2:{s:10:\"parameters\";a:1:{i:0;a:3:{s:4:\"name\";s:5:\"array\";s:4:\"type\";s:5:\"array\";s:11:\"description\";s:21:\"An array of usernames\";}}s:6:\"return\";a:2:{s:4:\"type\";s:6:\"string\";s:11:\"description\";s:28:\"\"All ok\" or an error message\";}}','auth.php','auth_plugin_mnet',0),(5,'fetch_user_image','auth/mnet/auth.php/fetch_user_image','auth','mnet',1,'Returns the user\'s profile image info\nIf the user exists and has a profile picture, the returned array will contain keys:\n f1          - the content of the default 100x100px image\n f1_mimetype - the mimetype of the f1 file\n f2          - the content of the 35x35px variant of the image\n f2_mimetype - the mimetype of the f2 file\nThe mimetype information was added in Moodle 2.0. In Moodle 1.x, images are always jpegs.','a:2:{s:10:\"parameters\";a:1:{i:0;a:3:{s:4:\"name\";s:8:\"username\";s:4:\"type\";s:3:\"int\";s:11:\"description\";s:18:\"The id of the user\";}}s:6:\"return\";a:2:{s:4:\"type\";s:5:\"array\";s:11:\"description\";s:84:\"false if user not found, empty array if no picture exists, array with data otherwise\";}}','auth.php','auth_plugin_mnet',0),(6,'fetch_theme_info','auth/mnet/auth.php/fetch_theme_info','auth','mnet',1,'Returns the theme information and logo url as strings.','a:2:{s:10:\"parameters\";a:0:{}s:6:\"return\";a:2:{s:4:\"type\";s:6:\"string\";s:11:\"description\";s:14:\"The theme info\";}}','auth.php','auth_plugin_mnet',0),(7,'update_enrolments','auth/mnet/auth.php/update_enrolments','auth','mnet',1,'Invoke this function _on_ the IDP to update it with enrolment info local to\nthe SP right after calling user_authorise()\nNormally called by the SP after calling user_authorise()','a:2:{s:10:\"parameters\";a:2:{i:0;a:3:{s:4:\"name\";s:8:\"username\";s:4:\"type\";s:6:\"string\";s:11:\"description\";s:12:\"The username\";}i:1;a:3:{s:4:\"name\";s:7:\"courses\";s:4:\"type\";s:5:\"array\";s:11:\"description\";s:0:\"\";}}s:6:\"return\";a:2:{s:4:\"type\";s:4:\"bool\";s:11:\"description\";s:0:\"\";}}','auth.php','auth_plugin_mnet',0),(8,'keepalive_client','auth/mnet/auth.php/keepalive_client','auth','mnet',1,'Poll the IdP server to let it know that a user it has authenticated is still\nonline','a:2:{s:10:\"parameters\";a:0:{}s:6:\"return\";a:2:{s:4:\"type\";s:4:\"void\";s:11:\"description\";s:0:\"\";}}','auth.php','auth_plugin_mnet',0),(9,'kill_child','auth/mnet/auth.php/kill_child','auth','mnet',1,'When the IdP requests that child sessions are terminated,\nthis function will be called on each of the child hosts. The machine that\ncalls the function (over xmlrpc) provides us with the mnethostid we need.','a:2:{s:10:\"parameters\";a:2:{i:0;a:3:{s:4:\"name\";s:8:\"username\";s:4:\"type\";s:6:\"string\";s:11:\"description\";s:28:\"Username for session to kill\";}i:1;a:3:{s:4:\"name\";s:9:\"useragent\";s:4:\"type\";s:6:\"string\";s:11:\"description\";s:0:\"\";}}s:6:\"return\";a:2:{s:4:\"type\";s:4:\"bool\";s:11:\"description\";s:15:\"True on success\";}}','auth.php','auth_plugin_mnet',0),(10,'available_courses','enrol/mnet/enrol.php/available_courses','enrol','mnet',1,'Returns list of courses that we offer to the caller for remote enrolment of their users\nSince Moodle 2.0, courses are made available for MNet peers by creating an instance\nof enrol_mnet plugin for the course. Hidden courses are not returned. If there are two\ninstances - one specific for the host and one for \'All hosts\', the setting of the specific\none is used. The id of the peer is kept in customint1, no other custom fields are used.','a:2:{s:10:\"parameters\";a:0:{}s:6:\"return\";a:2:{s:4:\"type\";s:5:\"array\";s:11:\"description\";s:0:\"\";}}','enrol.php','enrol_mnet_mnetservice_enrol',0),(11,'user_enrolments','enrol/mnet/enrol.php/user_enrolments','enrol','mnet',1,'This method has never been implemented in Moodle MNet API','a:2:{s:10:\"parameters\";a:0:{}s:6:\"return\";a:2:{s:4:\"type\";s:5:\"array\";s:11:\"description\";s:11:\"empty array\";}}','enrol.php','enrol_mnet_mnetservice_enrol',0),(12,'enrol_user','enrol/mnet/enrol.php/enrol_user','enrol','mnet',1,'Enrol remote user to our course\nIf we do not have local record for the remote user in our database,\nit gets created here.','a:2:{s:10:\"parameters\";a:2:{i:0;a:3:{s:4:\"name\";s:8:\"userdata\";s:4:\"type\";s:5:\"array\";s:11:\"description\";s:14:\"user details {\";}i:1;a:3:{s:4:\"name\";s:8:\"courseid\";s:4:\"type\";s:3:\"int\";s:11:\"description\";s:19:\"our local course id\";}}s:6:\"return\";a:2:{s:4:\"type\";s:4:\"bool\";s:11:\"description\";s:69:\"true if the enrolment has been successful, throws exception otherwise\";}}','enrol.php','enrol_mnet_mnetservice_enrol',0),(13,'unenrol_user','enrol/mnet/enrol.php/unenrol_user','enrol','mnet',1,'Unenrol remote user from our course\nOnly users enrolled via enrol_mnet plugin can be unenrolled remotely. If the\nremote user is enrolled into the local course via some other enrol plugin\n(enrol_manual for example), the remote host can\'t touch such enrolment. Please\ndo not report this behaviour as bug, it is a feature ;-)','a:2:{s:10:\"parameters\";a:2:{i:0;a:3:{s:4:\"name\";s:8:\"username\";s:4:\"type\";s:6:\"string\";s:11:\"description\";s:18:\"of the remote user\";}i:1;a:3:{s:4:\"name\";s:8:\"courseid\";s:4:\"type\";s:3:\"int\";s:11:\"description\";s:0:\"\";}}s:6:\"return\";a:2:{s:4:\"type\";s:4:\"bool\";s:11:\"description\";s:71:\"true if the unenrolment has been successful, throws exception otherwise\";}}','enrol.php','enrol_mnet_mnetservice_enrol',0),(14,'course_enrolments','enrol/mnet/enrol.php/course_enrolments','enrol','mnet',1,'Returns a list of users from the client server who are enrolled in our course\nSuitable instance of enrol_mnet must be created in the course. This method will not\nreturn any information about the enrolments in courses that are not available for\nremote enrolment, even if their users are enrolled into them via other plugin\n(note the difference from {@link self::user_enrolments()}).\nThis method will return enrolment information for users from hosts regardless\nthe enrolment plugin. It does not matter if the user was enrolled remotely by\ntheir admin or locally. Once the course is available for remote enrolments, we\nwill tell them everything about their users.\nIn Moodle 1.x the returned array used to be indexed by username. The side effect\nof MDL-19219 fix is that we do not need to use such index and therefore we can\nreturn all enrolment records. MNet clients 1.x will only use the last record for\nthe student, if she is enrolled via multiple plugins.','a:2:{s:10:\"parameters\";a:2:{i:0;a:3:{s:4:\"name\";s:8:\"courseid\";s:4:\"type\";s:3:\"int\";s:11:\"description\";s:16:\"ID of our course\";}i:1;a:3:{s:4:\"name\";s:5:\"roles\";s:4:\"type\";s:5:\"array\";s:11:\"description\";s:0:\"\";}}s:6:\"return\";a:2:{s:4:\"type\";s:5:\"array\";s:11:\"description\";s:0:\"\";}}','enrol.php','enrol_mnet_mnetservice_enrol',0),(15,'fetch_file','portfolio/mahara/lib.php/fetch_file','portfolio','mahara',1,'xmlrpc (mnet) function to get the file.\nreads in the file and returns it base_64 encoded\nso that it can be enrypted by mnet.','a:2:{s:10:\"parameters\";a:1:{i:0;a:3:{s:4:\"name\";s:5:\"token\";s:4:\"type\";s:6:\"string\";s:11:\"description\";s:56:\"the token recieved previously during send_content_intent\";}}s:6:\"return\";a:2:{s:4:\"type\";s:4:\"void\";s:11:\"description\";s:0:\"\";}}','lib.php','portfolio_plugin_mahara',1);
/*!40000 ALTER TABLE `mdl_mnet_rpc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnet_service`
--

DROP TABLE IF EXISTS `mdl_mnet_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnet_service` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL DEFAULT '',
  `description` varchar(40) NOT NULL DEFAULT '',
  `apiversion` varchar(10) NOT NULL DEFAULT '',
  `offer` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='A service is a group of functions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnet_service`
--

LOCK TABLES `mdl_mnet_service` WRITE;
/*!40000 ALTER TABLE `mdl_mnet_service` DISABLE KEYS */;
INSERT INTO `mdl_mnet_service` VALUES (1,'sso_idp','','1',1),(2,'sso_sp','','1',1),(3,'mnet_enrol','','1',1),(4,'pf','','1',1);
/*!40000 ALTER TABLE `mdl_mnet_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnet_service2rpc`
--

DROP TABLE IF EXISTS `mdl_mnet_service2rpc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnet_service2rpc` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `serviceid` bigint(10) NOT NULL DEFAULT '0',
  `rpcid` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_mnetserv_rpcser_uix` (`rpcid`,`serviceid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COMMENT='Group functions or methods under a service';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnet_service2rpc`
--

LOCK TABLES `mdl_mnet_service2rpc` WRITE;
/*!40000 ALTER TABLE `mdl_mnet_service2rpc` DISABLE KEYS */;
INSERT INTO `mdl_mnet_service2rpc` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,1,7),(8,2,8),(9,2,9),(10,3,10),(11,3,11),(12,3,12),(13,3,13),(14,3,14),(15,4,15);
/*!40000 ALTER TABLE `mdl_mnet_service2rpc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnet_session`
--

DROP TABLE IF EXISTS `mdl_mnet_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnet_session` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `username` varchar(100) NOT NULL DEFAULT '',
  `token` varchar(40) NOT NULL DEFAULT '',
  `mnethostid` bigint(10) NOT NULL DEFAULT '0',
  `useragent` varchar(40) NOT NULL DEFAULT '',
  `confirm_timeout` bigint(10) NOT NULL DEFAULT '0',
  `session_id` varchar(40) NOT NULL DEFAULT '',
  `expires` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_mnetsess_tok_uix` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Store session data from users migrating to other sites';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnet_session`
--

LOCK TABLES `mdl_mnet_session` WRITE;
/*!40000 ALTER TABLE `mdl_mnet_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_mnet_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnet_sso_access_control`
--

DROP TABLE IF EXISTS `mdl_mnet_sso_access_control`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnet_sso_access_control` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL DEFAULT '',
  `mnet_host_id` bigint(10) NOT NULL DEFAULT '0',
  `accessctrl` varchar(20) NOT NULL DEFAULT 'allow',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_mnetssoaccecont_mneuse_uix` (`mnet_host_id`,`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Users by host permitted (or not) to login from a remote prov';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnet_sso_access_control`
--

LOCK TABLES `mdl_mnet_sso_access_control` WRITE;
/*!40000 ALTER TABLE `mdl_mnet_sso_access_control` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_mnet_sso_access_control` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnetservice_enrol_courses`
--

DROP TABLE IF EXISTS `mdl_mnetservice_enrol_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnetservice_enrol_courses` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `hostid` bigint(10) NOT NULL,
  `remoteid` bigint(10) NOT NULL,
  `categoryid` bigint(10) NOT NULL,
  `categoryname` varchar(255) NOT NULL DEFAULT '',
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  `fullname` varchar(254) NOT NULL DEFAULT '',
  `shortname` varchar(100) NOT NULL DEFAULT '',
  `idnumber` varchar(100) NOT NULL DEFAULT '',
  `summary` longtext NOT NULL,
  `summaryformat` smallint(3) DEFAULT '0',
  `startdate` bigint(10) NOT NULL,
  `roleid` bigint(10) NOT NULL,
  `rolename` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_mnetenrocour_hosrem_uix` (`hostid`,`remoteid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Caches the information fetched via XML-RPC about courses on ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnetservice_enrol_courses`
--

LOCK TABLES `mdl_mnetservice_enrol_courses` WRITE;
/*!40000 ALTER TABLE `mdl_mnetservice_enrol_courses` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_mnetservice_enrol_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_mnetservice_enrol_enrolments`
--

DROP TABLE IF EXISTS `mdl_mnetservice_enrol_enrolments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_mnetservice_enrol_enrolments` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `hostid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `remotecourseid` bigint(10) NOT NULL,
  `rolename` varchar(255) NOT NULL DEFAULT '',
  `enroltime` bigint(10) NOT NULL DEFAULT '0',
  `enroltype` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_mnetenroenro_use_ix` (`userid`),
  KEY `mdl_mnetenroenro_hos_ix` (`hostid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Caches the information about enrolments of our local users i';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_mnetservice_enrol_enrolments`
--

LOCK TABLES `mdl_mnetservice_enrol_enrolments` WRITE;
/*!40000 ALTER TABLE `mdl_mnetservice_enrol_enrolments` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_mnetservice_enrol_enrolments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_modules`
--

DROP TABLE IF EXISTS `mdl_modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_modules` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `cron` bigint(10) NOT NULL DEFAULT '0',
  `lastcron` bigint(10) NOT NULL DEFAULT '0',
  `search` varchar(255) NOT NULL DEFAULT '',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `mdl_modu_nam_ix` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COMMENT='modules available in the site';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_modules`
--

LOCK TABLES `mdl_modules` WRITE;
/*!40000 ALTER TABLE `mdl_modules` DISABLE KEYS */;
INSERT INTO `mdl_modules` VALUES (1,'assign',60,0,'',1),(2,'assignment',60,0,'',0),(3,'book',0,0,'',1),(4,'chat',300,0,'',1),(5,'choice',0,0,'',1),(6,'data',0,0,'',1),(7,'feedback',0,0,'',0),(8,'folder',0,0,'',1),(9,'forum',0,0,'',1),(10,'glossary',0,0,'',1),(11,'imscp',0,0,'',1),(12,'label',0,0,'',1),(13,'lesson',0,0,'',1),(14,'lti',0,0,'',1),(15,'page',0,0,'',1),(16,'quiz',60,0,'',1),(17,'resource',0,0,'',1),(18,'scorm',300,0,'',1),(19,'survey',0,0,'',1),(20,'url',0,0,'',1),(21,'wiki',0,0,'',1),(22,'workshop',60,0,'',1);
/*!40000 ALTER TABLE `mdl_modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_my_pages`
--

DROP TABLE IF EXISTS `mdl_my_pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_my_pages` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) DEFAULT '0',
  `name` varchar(200) NOT NULL DEFAULT '',
  `private` tinyint(1) NOT NULL DEFAULT '1',
  `sortorder` mediumint(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_mypage_usepri_ix` (`userid`,`private`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Extra user pages for the My Moodle system';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_my_pages`
--

LOCK TABLES `mdl_my_pages` WRITE;
/*!40000 ALTER TABLE `mdl_my_pages` DISABLE KEYS */;
INSERT INTO `mdl_my_pages` VALUES (1,NULL,'__default',0,0),(2,NULL,'__default',1,0);
/*!40000 ALTER TABLE `mdl_my_pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_page`
--

DROP TABLE IF EXISTS `mdl_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_page` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `content` longtext,
  `contentformat` smallint(4) NOT NULL DEFAULT '0',
  `legacyfiles` smallint(4) NOT NULL DEFAULT '0',
  `legacyfileslast` bigint(10) DEFAULT NULL,
  `display` smallint(4) NOT NULL DEFAULT '0',
  `displayoptions` longtext,
  `revision` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_page_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Each record is one page and its config data';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_page`
--

LOCK TABLES `mdl_page` WRITE;
/*!40000 ALTER TABLE `mdl_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_portfolio_instance`
--

DROP TABLE IF EXISTS `mdl_portfolio_instance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_portfolio_instance` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `plugin` varchar(50) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='base table (not including config data) for instances of port';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_portfolio_instance`
--

LOCK TABLES `mdl_portfolio_instance` WRITE;
/*!40000 ALTER TABLE `mdl_portfolio_instance` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_portfolio_instance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_portfolio_instance_config`
--

DROP TABLE IF EXISTS `mdl_portfolio_instance_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_portfolio_instance_config` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `instance` bigint(10) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `value` longtext,
  PRIMARY KEY (`id`),
  KEY `mdl_portinstconf_nam_ix` (`name`),
  KEY `mdl_portinstconf_ins_ix` (`instance`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='config for portfolio plugin instances';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_portfolio_instance_config`
--

LOCK TABLES `mdl_portfolio_instance_config` WRITE;
/*!40000 ALTER TABLE `mdl_portfolio_instance_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_portfolio_instance_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_portfolio_instance_user`
--

DROP TABLE IF EXISTS `mdl_portfolio_instance_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_portfolio_instance_user` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `instance` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `value` longtext,
  PRIMARY KEY (`id`),
  KEY `mdl_portinstuser_ins_ix` (`instance`),
  KEY `mdl_portinstuser_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='user data for portfolio instances.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_portfolio_instance_user`
--

LOCK TABLES `mdl_portfolio_instance_user` WRITE;
/*!40000 ALTER TABLE `mdl_portfolio_instance_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_portfolio_instance_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_portfolio_log`
--

DROP TABLE IF EXISTS `mdl_portfolio_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_portfolio_log` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL,
  `time` bigint(10) NOT NULL,
  `portfolio` bigint(10) NOT NULL,
  `caller_class` varchar(150) NOT NULL DEFAULT '',
  `caller_file` varchar(255) NOT NULL DEFAULT '',
  `caller_component` varchar(255) DEFAULT NULL,
  `caller_sha1` varchar(255) NOT NULL DEFAULT '',
  `tempdataid` bigint(10) NOT NULL DEFAULT '0',
  `returnurl` varchar(255) NOT NULL DEFAULT '',
  `continueurl` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_portlog_use_ix` (`userid`),
  KEY `mdl_portlog_por_ix` (`portfolio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='log of portfolio transfers (used to later check for duplicat';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_portfolio_log`
--

LOCK TABLES `mdl_portfolio_log` WRITE;
/*!40000 ALTER TABLE `mdl_portfolio_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_portfolio_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_portfolio_mahara_queue`
--

DROP TABLE IF EXISTS `mdl_portfolio_mahara_queue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_portfolio_mahara_queue` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `transferid` bigint(10) NOT NULL,
  `token` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_portmahaqueu_tok_ix` (`token`),
  KEY `mdl_portmahaqueu_tra_ix` (`transferid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='maps mahara tokens to transfer ids';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_portfolio_mahara_queue`
--

LOCK TABLES `mdl_portfolio_mahara_queue` WRITE;
/*!40000 ALTER TABLE `mdl_portfolio_mahara_queue` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_portfolio_mahara_queue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_portfolio_tempdata`
--

DROP TABLE IF EXISTS `mdl_portfolio_tempdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_portfolio_tempdata` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `data` longtext,
  `expirytime` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `instance` bigint(10) DEFAULT '0',
  `queued` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_porttemp_use_ix` (`userid`),
  KEY `mdl_porttemp_ins_ix` (`instance`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='stores temporary data for portfolio exports. the id of this ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_portfolio_tempdata`
--

LOCK TABLES `mdl_portfolio_tempdata` WRITE;
/*!40000 ALTER TABLE `mdl_portfolio_tempdata` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_portfolio_tempdata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_post`
--

DROP TABLE IF EXISTS `mdl_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_post` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `module` varchar(20) NOT NULL DEFAULT '',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `groupid` bigint(10) NOT NULL DEFAULT '0',
  `moduleid` bigint(10) NOT NULL DEFAULT '0',
  `coursemoduleid` bigint(10) NOT NULL DEFAULT '0',
  `subject` varchar(128) NOT NULL DEFAULT '',
  `summary` longtext,
  `content` longtext,
  `uniquehash` varchar(255) NOT NULL DEFAULT '',
  `rating` bigint(10) NOT NULL DEFAULT '0',
  `format` bigint(10) NOT NULL DEFAULT '0',
  `summaryformat` tinyint(2) NOT NULL DEFAULT '0',
  `attachment` varchar(100) DEFAULT NULL,
  `publishstate` varchar(20) NOT NULL DEFAULT 'draft',
  `lastmodified` bigint(10) NOT NULL DEFAULT '0',
  `created` bigint(10) NOT NULL DEFAULT '0',
  `usermodified` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_post_iduse_uix` (`id`,`userid`),
  KEY `mdl_post_las_ix` (`lastmodified`),
  KEY `mdl_post_mod_ix` (`module`),
  KEY `mdl_post_sub_ix` (`subject`),
  KEY `mdl_post_use_ix` (`usermodified`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Generic post table to hold data blog entries etc in differen';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_post`
--

LOCK TABLES `mdl_post` WRITE;
/*!40000 ALTER TABLE `mdl_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_profiling`
--

DROP TABLE IF EXISTS `mdl_profiling`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_profiling` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `runid` varchar(32) NOT NULL DEFAULT '',
  `url` varchar(255) NOT NULL DEFAULT '',
  `data` longtext NOT NULL,
  `totalexecutiontime` bigint(10) NOT NULL,
  `totalcputime` bigint(10) NOT NULL,
  `totalcalls` bigint(10) NOT NULL,
  `totalmemory` bigint(10) NOT NULL,
  `runreference` tinyint(2) NOT NULL DEFAULT '0',
  `runcomment` varchar(255) NOT NULL DEFAULT '',
  `timecreated` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_prof_run_uix` (`runid`),
  KEY `mdl_prof_urlrun_ix` (`url`,`runreference`),
  KEY `mdl_prof_timrun_ix` (`timecreated`,`runreference`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores the results of all the profiling runs';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_profiling`
--

LOCK TABLES `mdl_profiling` WRITE;
/*!40000 ALTER TABLE `mdl_profiling` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_profiling` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_qtype_essay_options`
--

DROP TABLE IF EXISTS `mdl_qtype_essay_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_qtype_essay_options` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `questionid` bigint(10) NOT NULL,
  `responseformat` varchar(16) NOT NULL DEFAULT 'editor',
  `responserequired` tinyint(2) NOT NULL DEFAULT '1',
  `responsefieldlines` smallint(4) NOT NULL DEFAULT '15',
  `attachments` smallint(4) NOT NULL DEFAULT '0',
  `attachmentsrequired` smallint(4) NOT NULL DEFAULT '0',
  `graderinfo` longtext,
  `graderinfoformat` smallint(4) NOT NULL DEFAULT '0',
  `responsetemplate` longtext,
  `responsetemplateformat` smallint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_qtypessaopti_que_uix` (`questionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Extra options for essay questions.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_qtype_essay_options`
--

LOCK TABLES `mdl_qtype_essay_options` WRITE;
/*!40000 ALTER TABLE `mdl_qtype_essay_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_qtype_essay_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_qtype_match_options`
--

DROP TABLE IF EXISTS `mdl_qtype_match_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_qtype_match_options` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `questionid` bigint(10) NOT NULL DEFAULT '0',
  `shuffleanswers` smallint(4) NOT NULL DEFAULT '1',
  `correctfeedback` longtext NOT NULL,
  `correctfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `partiallycorrectfeedback` longtext NOT NULL,
  `partiallycorrectfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `incorrectfeedback` longtext NOT NULL,
  `incorrectfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `shownumcorrect` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_qtypmatcopti_que_uix` (`questionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines the question-type specific options for matching ques';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_qtype_match_options`
--

LOCK TABLES `mdl_qtype_match_options` WRITE;
/*!40000 ALTER TABLE `mdl_qtype_match_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_qtype_match_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_qtype_match_subquestions`
--

DROP TABLE IF EXISTS `mdl_qtype_match_subquestions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_qtype_match_subquestions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `questionid` bigint(10) NOT NULL DEFAULT '0',
  `questiontext` longtext NOT NULL,
  `questiontextformat` tinyint(2) NOT NULL DEFAULT '0',
  `answertext` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_qtypmatcsubq_que_ix` (`questionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='The subquestions that make up a matching question';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_qtype_match_subquestions`
--

LOCK TABLES `mdl_qtype_match_subquestions` WRITE;
/*!40000 ALTER TABLE `mdl_qtype_match_subquestions` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_qtype_match_subquestions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_qtype_multichoice_options`
--

DROP TABLE IF EXISTS `mdl_qtype_multichoice_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_qtype_multichoice_options` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `questionid` bigint(10) NOT NULL DEFAULT '0',
  `layout` smallint(4) NOT NULL DEFAULT '0',
  `single` smallint(4) NOT NULL DEFAULT '0',
  `shuffleanswers` smallint(4) NOT NULL DEFAULT '1',
  `correctfeedback` longtext NOT NULL,
  `correctfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `partiallycorrectfeedback` longtext NOT NULL,
  `partiallycorrectfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `incorrectfeedback` longtext NOT NULL,
  `incorrectfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `answernumbering` varchar(10) NOT NULL DEFAULT 'abc',
  `shownumcorrect` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_qtypmultopti_que_uix` (`questionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Options for multiple choice questions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_qtype_multichoice_options`
--

LOCK TABLES `mdl_qtype_multichoice_options` WRITE;
/*!40000 ALTER TABLE `mdl_qtype_multichoice_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_qtype_multichoice_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_qtype_randomsamatch_options`
--

DROP TABLE IF EXISTS `mdl_qtype_randomsamatch_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_qtype_randomsamatch_options` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `questionid` bigint(10) NOT NULL DEFAULT '0',
  `choose` bigint(10) NOT NULL DEFAULT '4',
  `subcats` tinyint(2) NOT NULL DEFAULT '1',
  `correctfeedback` longtext NOT NULL,
  `correctfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `partiallycorrectfeedback` longtext NOT NULL,
  `partiallycorrectfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `incorrectfeedback` longtext NOT NULL,
  `incorrectfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `shownumcorrect` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_qtyprandopti_que_uix` (`questionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Info about a random short-answer matching question';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_qtype_randomsamatch_options`
--

LOCK TABLES `mdl_qtype_randomsamatch_options` WRITE;
/*!40000 ALTER TABLE `mdl_qtype_randomsamatch_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_qtype_randomsamatch_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_qtype_shortanswer_options`
--

DROP TABLE IF EXISTS `mdl_qtype_shortanswer_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_qtype_shortanswer_options` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `questionid` bigint(10) NOT NULL DEFAULT '0',
  `usecase` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_qtypshoropti_que_uix` (`questionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Options for short answer questions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_qtype_shortanswer_options`
--

LOCK TABLES `mdl_qtype_shortanswer_options` WRITE;
/*!40000 ALTER TABLE `mdl_qtype_shortanswer_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_qtype_shortanswer_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question`
--

DROP TABLE IF EXISTS `mdl_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `category` bigint(10) NOT NULL DEFAULT '0',
  `parent` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `questiontext` longtext NOT NULL,
  `questiontextformat` tinyint(2) NOT NULL DEFAULT '0',
  `generalfeedback` longtext NOT NULL,
  `generalfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `defaultmark` decimal(12,7) NOT NULL DEFAULT '1.0000000',
  `penalty` decimal(12,7) NOT NULL DEFAULT '0.3333333',
  `qtype` varchar(20) NOT NULL DEFAULT '',
  `length` bigint(10) NOT NULL DEFAULT '1',
  `stamp` varchar(255) NOT NULL DEFAULT '',
  `version` varchar(255) NOT NULL DEFAULT '',
  `hidden` tinyint(1) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `createdby` bigint(10) DEFAULT NULL,
  `modifiedby` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_ques_cat_ix` (`category`),
  KEY `mdl_ques_par_ix` (`parent`),
  KEY `mdl_ques_cre_ix` (`createdby`),
  KEY `mdl_ques_mod_ix` (`modifiedby`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='The questions themselves';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question`
--

LOCK TABLES `mdl_question` WRITE;
/*!40000 ALTER TABLE `mdl_question` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_answers`
--

DROP TABLE IF EXISTS `mdl_question_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_answers` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `question` bigint(10) NOT NULL DEFAULT '0',
  `answer` longtext NOT NULL,
  `answerformat` tinyint(2) NOT NULL DEFAULT '0',
  `fraction` decimal(12,7) NOT NULL DEFAULT '0.0000000',
  `feedback` longtext NOT NULL,
  `feedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_quesansw_que_ix` (`question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Answers, with a fractional grade (0-1) and feedback';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_answers`
--

LOCK TABLES `mdl_question_answers` WRITE;
/*!40000 ALTER TABLE `mdl_question_answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_attempt_step_data`
--

DROP TABLE IF EXISTS `mdl_question_attempt_step_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_attempt_step_data` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `attemptstepid` bigint(10) NOT NULL,
  `name` varchar(32) NOT NULL DEFAULT '',
  `value` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_quesattestepdata_attna_uix` (`attemptstepid`,`name`),
  KEY `mdl_quesattestepdata_att_ix` (`attemptstepid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Each question_attempt_step has an associative array of the d';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_attempt_step_data`
--

LOCK TABLES `mdl_question_attempt_step_data` WRITE;
/*!40000 ALTER TABLE `mdl_question_attempt_step_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_attempt_step_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_attempt_steps`
--

DROP TABLE IF EXISTS `mdl_question_attempt_steps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_attempt_steps` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `questionattemptid` bigint(10) NOT NULL,
  `sequencenumber` bigint(10) NOT NULL,
  `state` varchar(13) NOT NULL DEFAULT '',
  `fraction` decimal(12,7) DEFAULT NULL,
  `timecreated` bigint(10) NOT NULL,
  `userid` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_quesattestep_queseq_uix` (`questionattemptid`,`sequencenumber`),
  KEY `mdl_quesattestep_que_ix` (`questionattemptid`),
  KEY `mdl_quesattestep_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores one step in in a question attempt. As well as the dat';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_attempt_steps`
--

LOCK TABLES `mdl_question_attempt_steps` WRITE;
/*!40000 ALTER TABLE `mdl_question_attempt_steps` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_attempt_steps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_attempts`
--

DROP TABLE IF EXISTS `mdl_question_attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_attempts` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `questionusageid` bigint(10) NOT NULL,
  `slot` bigint(10) NOT NULL,
  `behaviour` varchar(32) NOT NULL DEFAULT '',
  `questionid` bigint(10) NOT NULL,
  `variant` bigint(10) NOT NULL DEFAULT '1',
  `maxmark` decimal(12,7) NOT NULL,
  `minfraction` decimal(12,7) NOT NULL,
  `maxfraction` decimal(12,7) NOT NULL DEFAULT '1.0000000',
  `flagged` tinyint(1) NOT NULL DEFAULT '0',
  `questionsummary` longtext,
  `rightanswer` longtext,
  `responsesummary` longtext,
  `timemodified` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_quesatte_queslo_uix` (`questionusageid`,`slot`),
  KEY `mdl_quesatte_beh_ix` (`behaviour`),
  KEY `mdl_quesatte_que_ix` (`questionid`),
  KEY `mdl_quesatte_que2_ix` (`questionusageid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Each row here corresponds to an attempt at one question, as ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_attempts`
--

LOCK TABLES `mdl_question_attempts` WRITE;
/*!40000 ALTER TABLE `mdl_question_attempts` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_calculated`
--

DROP TABLE IF EXISTS `mdl_question_calculated`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_calculated` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `question` bigint(10) NOT NULL DEFAULT '0',
  `answer` bigint(10) NOT NULL DEFAULT '0',
  `tolerance` varchar(20) NOT NULL DEFAULT '0.0',
  `tolerancetype` bigint(10) NOT NULL DEFAULT '1',
  `correctanswerlength` bigint(10) NOT NULL DEFAULT '2',
  `correctanswerformat` bigint(10) NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`),
  KEY `mdl_quescalc_ans_ix` (`answer`),
  KEY `mdl_quescalc_que_ix` (`question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Options for questions of type calculated';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_calculated`
--

LOCK TABLES `mdl_question_calculated` WRITE;
/*!40000 ALTER TABLE `mdl_question_calculated` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_calculated` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_calculated_options`
--

DROP TABLE IF EXISTS `mdl_question_calculated_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_calculated_options` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `question` bigint(10) NOT NULL DEFAULT '0',
  `synchronize` tinyint(2) NOT NULL DEFAULT '0',
  `single` smallint(4) NOT NULL DEFAULT '0',
  `shuffleanswers` smallint(4) NOT NULL DEFAULT '0',
  `correctfeedback` longtext,
  `correctfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `partiallycorrectfeedback` longtext,
  `partiallycorrectfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `incorrectfeedback` longtext,
  `incorrectfeedbackformat` tinyint(2) NOT NULL DEFAULT '0',
  `answernumbering` varchar(10) NOT NULL DEFAULT 'abc',
  `shownumcorrect` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_quescalcopti_que_ix` (`question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Options for questions of type calculated';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_calculated_options`
--

LOCK TABLES `mdl_question_calculated_options` WRITE;
/*!40000 ALTER TABLE `mdl_question_calculated_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_calculated_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_categories`
--

DROP TABLE IF EXISTS `mdl_question_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_categories` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `contextid` bigint(10) NOT NULL DEFAULT '0',
  `info` longtext NOT NULL,
  `infoformat` tinyint(2) NOT NULL DEFAULT '0',
  `stamp` varchar(255) NOT NULL DEFAULT '',
  `parent` bigint(10) NOT NULL DEFAULT '0',
  `sortorder` bigint(10) NOT NULL DEFAULT '999',
  PRIMARY KEY (`id`),
  KEY `mdl_quescate_con_ix` (`contextid`),
  KEY `mdl_quescate_par_ix` (`parent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Categories are for grouping questions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_categories`
--

LOCK TABLES `mdl_question_categories` WRITE;
/*!40000 ALTER TABLE `mdl_question_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_dataset_definitions`
--

DROP TABLE IF EXISTS `mdl_question_dataset_definitions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_dataset_definitions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `category` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `type` bigint(10) NOT NULL DEFAULT '0',
  `options` varchar(255) NOT NULL DEFAULT '',
  `itemcount` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_quesdatadefi_cat_ix` (`category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Organises and stores properties for dataset items';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_dataset_definitions`
--

LOCK TABLES `mdl_question_dataset_definitions` WRITE;
/*!40000 ALTER TABLE `mdl_question_dataset_definitions` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_dataset_definitions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_dataset_items`
--

DROP TABLE IF EXISTS `mdl_question_dataset_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_dataset_items` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `definition` bigint(10) NOT NULL DEFAULT '0',
  `itemnumber` bigint(10) NOT NULL DEFAULT '0',
  `value` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_quesdataitem_def_ix` (`definition`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Individual dataset items';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_dataset_items`
--

LOCK TABLES `mdl_question_dataset_items` WRITE;
/*!40000 ALTER TABLE `mdl_question_dataset_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_dataset_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_datasets`
--

DROP TABLE IF EXISTS `mdl_question_datasets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_datasets` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `question` bigint(10) NOT NULL DEFAULT '0',
  `datasetdefinition` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_quesdata_quedat_ix` (`question`,`datasetdefinition`),
  KEY `mdl_quesdata_que_ix` (`question`),
  KEY `mdl_quesdata_dat_ix` (`datasetdefinition`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Many-many relation between questions and dataset definitions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_datasets`
--

LOCK TABLES `mdl_question_datasets` WRITE;
/*!40000 ALTER TABLE `mdl_question_datasets` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_datasets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_hints`
--

DROP TABLE IF EXISTS `mdl_question_hints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_hints` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `questionid` bigint(10) NOT NULL,
  `hint` longtext NOT NULL,
  `hintformat` smallint(4) NOT NULL DEFAULT '0',
  `shownumcorrect` tinyint(1) DEFAULT NULL,
  `clearwrong` tinyint(1) DEFAULT NULL,
  `options` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_queshint_que_ix` (`questionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores the the part of the question definition that gives di';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_hints`
--

LOCK TABLES `mdl_question_hints` WRITE;
/*!40000 ALTER TABLE `mdl_question_hints` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_hints` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_multianswer`
--

DROP TABLE IF EXISTS `mdl_question_multianswer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_multianswer` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `question` bigint(10) NOT NULL DEFAULT '0',
  `sequence` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_quesmult_que_ix` (`question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Options for multianswer questions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_multianswer`
--

LOCK TABLES `mdl_question_multianswer` WRITE;
/*!40000 ALTER TABLE `mdl_question_multianswer` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_multianswer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_numerical`
--

DROP TABLE IF EXISTS `mdl_question_numerical`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_numerical` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `question` bigint(10) NOT NULL DEFAULT '0',
  `answer` bigint(10) NOT NULL DEFAULT '0',
  `tolerance` varchar(255) NOT NULL DEFAULT '0.0',
  PRIMARY KEY (`id`),
  KEY `mdl_quesnume_ans_ix` (`answer`),
  KEY `mdl_quesnume_que_ix` (`question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Options for numerical questions.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_numerical`
--

LOCK TABLES `mdl_question_numerical` WRITE;
/*!40000 ALTER TABLE `mdl_question_numerical` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_numerical` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_numerical_options`
--

DROP TABLE IF EXISTS `mdl_question_numerical_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_numerical_options` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `question` bigint(10) NOT NULL DEFAULT '0',
  `showunits` smallint(4) NOT NULL DEFAULT '0',
  `unitsleft` smallint(4) NOT NULL DEFAULT '0',
  `unitgradingtype` smallint(4) NOT NULL DEFAULT '0',
  `unitpenalty` decimal(12,7) NOT NULL DEFAULT '0.1000000',
  PRIMARY KEY (`id`),
  KEY `mdl_quesnumeopti_que_ix` (`question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Options for questions of type numerical This table is also u';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_numerical_options`
--

LOCK TABLES `mdl_question_numerical_options` WRITE;
/*!40000 ALTER TABLE `mdl_question_numerical_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_numerical_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_numerical_units`
--

DROP TABLE IF EXISTS `mdl_question_numerical_units`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_numerical_units` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `question` bigint(10) NOT NULL DEFAULT '0',
  `multiplier` decimal(40,20) NOT NULL DEFAULT '1.00000000000000000000',
  `unit` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_quesnumeunit_queuni_uix` (`question`,`unit`),
  KEY `mdl_quesnumeunit_que_ix` (`question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Optional unit options for numerical questions. This table is';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_numerical_units`
--

LOCK TABLES `mdl_question_numerical_units` WRITE;
/*!40000 ALTER TABLE `mdl_question_numerical_units` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_numerical_units` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_response_analysis`
--

DROP TABLE IF EXISTS `mdl_question_response_analysis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_response_analysis` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `hashcode` varchar(40) NOT NULL DEFAULT '',
  `whichtries` varchar(255) NOT NULL DEFAULT '',
  `timemodified` bigint(10) NOT NULL,
  `questionid` bigint(10) NOT NULL,
  `variant` bigint(10) DEFAULT NULL,
  `subqid` varchar(100) NOT NULL DEFAULT '',
  `aid` varchar(100) DEFAULT NULL,
  `response` longtext,
  `credit` decimal(15,5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Analysis of student responses given to questions.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_response_analysis`
--

LOCK TABLES `mdl_question_response_analysis` WRITE;
/*!40000 ALTER TABLE `mdl_question_response_analysis` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_response_analysis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_response_count`
--

DROP TABLE IF EXISTS `mdl_question_response_count`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_response_count` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `analysisid` bigint(10) NOT NULL,
  `try` bigint(10) NOT NULL,
  `rcount` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_quesrespcoun_ana_ix` (`analysisid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Count for each responses for each try at a question.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_response_count`
--

LOCK TABLES `mdl_question_response_count` WRITE;
/*!40000 ALTER TABLE `mdl_question_response_count` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_response_count` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_statistics`
--

DROP TABLE IF EXISTS `mdl_question_statistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_statistics` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `hashcode` varchar(40) NOT NULL DEFAULT '',
  `timemodified` bigint(10) NOT NULL,
  `questionid` bigint(10) NOT NULL,
  `slot` bigint(10) DEFAULT NULL,
  `subquestion` smallint(4) NOT NULL,
  `variant` bigint(10) DEFAULT NULL,
  `s` bigint(10) NOT NULL DEFAULT '0',
  `effectiveweight` decimal(15,5) DEFAULT NULL,
  `negcovar` tinyint(2) NOT NULL DEFAULT '0',
  `discriminationindex` decimal(15,5) DEFAULT NULL,
  `discriminativeefficiency` decimal(15,5) DEFAULT NULL,
  `sd` decimal(15,10) DEFAULT NULL,
  `facility` decimal(15,10) DEFAULT NULL,
  `subquestions` longtext,
  `maxmark` decimal(12,7) DEFAULT NULL,
  `positions` longtext,
  `randomguessscore` decimal(12,7) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Statistics for individual questions used in an activity.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_statistics`
--

LOCK TABLES `mdl_question_statistics` WRITE;
/*!40000 ALTER TABLE `mdl_question_statistics` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_statistics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_truefalse`
--

DROP TABLE IF EXISTS `mdl_question_truefalse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_truefalse` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `question` bigint(10) NOT NULL DEFAULT '0',
  `trueanswer` bigint(10) NOT NULL DEFAULT '0',
  `falseanswer` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_questrue_que_ix` (`question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Options for True-False questions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_truefalse`
--

LOCK TABLES `mdl_question_truefalse` WRITE;
/*!40000 ALTER TABLE `mdl_question_truefalse` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_truefalse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_question_usages`
--

DROP TABLE IF EXISTS `mdl_question_usages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_question_usages` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `contextid` bigint(10) NOT NULL,
  `component` varchar(255) NOT NULL DEFAULT '',
  `preferredbehaviour` varchar(32) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_quesusag_con_ix` (`contextid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table''s main purpose it to assign a unique id to each a';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_question_usages`
--

LOCK TABLES `mdl_question_usages` WRITE;
/*!40000 ALTER TABLE `mdl_question_usages` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_question_usages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_quiz`
--

DROP TABLE IF EXISTS `mdl_quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_quiz` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext NOT NULL,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `timeopen` bigint(10) NOT NULL DEFAULT '0',
  `timeclose` bigint(10) NOT NULL DEFAULT '0',
  `timelimit` bigint(10) NOT NULL DEFAULT '0',
  `overduehandling` varchar(16) NOT NULL DEFAULT 'autoabandon',
  `graceperiod` bigint(10) NOT NULL DEFAULT '0',
  `preferredbehaviour` varchar(32) NOT NULL DEFAULT '',
  `attempts` mediumint(6) NOT NULL DEFAULT '0',
  `attemptonlast` smallint(4) NOT NULL DEFAULT '0',
  `grademethod` smallint(4) NOT NULL DEFAULT '1',
  `decimalpoints` smallint(4) NOT NULL DEFAULT '2',
  `questiondecimalpoints` smallint(4) NOT NULL DEFAULT '-1',
  `reviewattempt` mediumint(6) NOT NULL DEFAULT '0',
  `reviewcorrectness` mediumint(6) NOT NULL DEFAULT '0',
  `reviewmarks` mediumint(6) NOT NULL DEFAULT '0',
  `reviewspecificfeedback` mediumint(6) NOT NULL DEFAULT '0',
  `reviewgeneralfeedback` mediumint(6) NOT NULL DEFAULT '0',
  `reviewrightanswer` mediumint(6) NOT NULL DEFAULT '0',
  `reviewoverallfeedback` mediumint(6) NOT NULL DEFAULT '0',
  `questionsperpage` bigint(10) NOT NULL DEFAULT '0',
  `navmethod` varchar(16) NOT NULL DEFAULT 'free',
  `shufflequestions` smallint(4) NOT NULL DEFAULT '0',
  `shuffleanswers` smallint(4) NOT NULL DEFAULT '0',
  `sumgrades` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `grade` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `password` varchar(255) NOT NULL DEFAULT '',
  `subnet` varchar(255) NOT NULL DEFAULT '',
  `browsersecurity` varchar(32) NOT NULL DEFAULT '',
  `delay1` bigint(10) NOT NULL DEFAULT '0',
  `delay2` bigint(10) NOT NULL DEFAULT '0',
  `showuserpicture` smallint(4) NOT NULL DEFAULT '0',
  `showblocks` smallint(4) NOT NULL DEFAULT '0',
  `completionattemptsexhausted` tinyint(1) DEFAULT '0',
  `completionpass` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_quiz_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='The settings for each quiz.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_quiz`
--

LOCK TABLES `mdl_quiz` WRITE;
/*!40000 ALTER TABLE `mdl_quiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_quiz_attempts`
--

DROP TABLE IF EXISTS `mdl_quiz_attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_quiz_attempts` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `quiz` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `attempt` mediumint(6) NOT NULL DEFAULT '0',
  `uniqueid` bigint(10) NOT NULL DEFAULT '0',
  `layout` longtext NOT NULL,
  `currentpage` bigint(10) NOT NULL DEFAULT '0',
  `preview` smallint(3) NOT NULL DEFAULT '0',
  `state` varchar(16) NOT NULL DEFAULT 'inprogress',
  `timestart` bigint(10) NOT NULL DEFAULT '0',
  `timefinish` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `timecheckstate` bigint(10) DEFAULT '0',
  `sumgrades` decimal(10,5) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_quizatte_quiuseatt_uix` (`quiz`,`userid`,`attempt`),
  UNIQUE KEY `mdl_quizatte_uni_uix` (`uniqueid`),
  KEY `mdl_quizatte_statim_ix` (`state`,`timecheckstate`),
  KEY `mdl_quizatte_qui_ix` (`quiz`),
  KEY `mdl_quizatte_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores users attempts at quizzes.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_quiz_attempts`
--

LOCK TABLES `mdl_quiz_attempts` WRITE;
/*!40000 ALTER TABLE `mdl_quiz_attempts` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_quiz_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_quiz_feedback`
--

DROP TABLE IF EXISTS `mdl_quiz_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_quiz_feedback` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `quizid` bigint(10) NOT NULL DEFAULT '0',
  `feedbacktext` longtext NOT NULL,
  `feedbacktextformat` tinyint(2) NOT NULL DEFAULT '0',
  `mingrade` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `maxgrade` decimal(10,5) NOT NULL DEFAULT '0.00000',
  PRIMARY KEY (`id`),
  KEY `mdl_quizfeed_qui_ix` (`quizid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Feedback given to students based on which grade band their o';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_quiz_feedback`
--

LOCK TABLES `mdl_quiz_feedback` WRITE;
/*!40000 ALTER TABLE `mdl_quiz_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_quiz_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_quiz_grades`
--

DROP TABLE IF EXISTS `mdl_quiz_grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_quiz_grades` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `quiz` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `grade` decimal(10,5) NOT NULL DEFAULT '0.00000',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_quizgrad_use_ix` (`userid`),
  KEY `mdl_quizgrad_qui_ix` (`quiz`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores the overall grade for each user on the quiz, based on';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_quiz_grades`
--

LOCK TABLES `mdl_quiz_grades` WRITE;
/*!40000 ALTER TABLE `mdl_quiz_grades` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_quiz_grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_quiz_overrides`
--

DROP TABLE IF EXISTS `mdl_quiz_overrides`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_quiz_overrides` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `quiz` bigint(10) NOT NULL DEFAULT '0',
  `groupid` bigint(10) DEFAULT NULL,
  `userid` bigint(10) DEFAULT NULL,
  `timeopen` bigint(10) DEFAULT NULL,
  `timeclose` bigint(10) DEFAULT NULL,
  `timelimit` bigint(10) DEFAULT NULL,
  `attempts` mediumint(6) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_quizover_qui_ix` (`quiz`),
  KEY `mdl_quizover_gro_ix` (`groupid`),
  KEY `mdl_quizover_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='The overrides to quiz settings on a per-user and per-group b';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_quiz_overrides`
--

LOCK TABLES `mdl_quiz_overrides` WRITE;
/*!40000 ALTER TABLE `mdl_quiz_overrides` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_quiz_overrides` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_quiz_overview_regrades`
--

DROP TABLE IF EXISTS `mdl_quiz_overview_regrades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_quiz_overview_regrades` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `questionusageid` bigint(10) NOT NULL,
  `slot` bigint(10) NOT NULL,
  `newfraction` decimal(12,7) DEFAULT NULL,
  `oldfraction` decimal(12,7) DEFAULT NULL,
  `regraded` smallint(4) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table records which question attempts need regrading an';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_quiz_overview_regrades`
--

LOCK TABLES `mdl_quiz_overview_regrades` WRITE;
/*!40000 ALTER TABLE `mdl_quiz_overview_regrades` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_quiz_overview_regrades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_quiz_reports`
--

DROP TABLE IF EXISTS `mdl_quiz_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_quiz_reports` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `displayorder` bigint(10) NOT NULL,
  `capability` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_quizrepo_nam_uix` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='Lists all the installed quiz reports and their display order';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_quiz_reports`
--

LOCK TABLES `mdl_quiz_reports` WRITE;
/*!40000 ALTER TABLE `mdl_quiz_reports` DISABLE KEYS */;
INSERT INTO `mdl_quiz_reports` VALUES (1,'grading',6000,'mod/quiz:grade'),(2,'overview',10000,NULL),(3,'responses',9000,NULL),(4,'statistics',8000,'quiz/statistics:view');
/*!40000 ALTER TABLE `mdl_quiz_reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_quiz_slots`
--

DROP TABLE IF EXISTS `mdl_quiz_slots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_quiz_slots` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `slot` bigint(10) NOT NULL,
  `quizid` bigint(10) NOT NULL DEFAULT '0',
  `page` bigint(10) NOT NULL,
  `questionid` bigint(10) NOT NULL DEFAULT '0',
  `maxmark` decimal(12,7) NOT NULL DEFAULT '0.0000000',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_quizslot_quislo_uix` (`quizid`,`slot`),
  KEY `mdl_quizslot_qui_ix` (`quizid`),
  KEY `mdl_quizslot_que_ix` (`questionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores the question used in a quiz, with the order, and for ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_quiz_slots`
--

LOCK TABLES `mdl_quiz_slots` WRITE;
/*!40000 ALTER TABLE `mdl_quiz_slots` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_quiz_slots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_quiz_statistics`
--

DROP TABLE IF EXISTS `mdl_quiz_statistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_quiz_statistics` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `hashcode` varchar(40) NOT NULL DEFAULT '',
  `whichattempts` smallint(4) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  `firstattemptscount` bigint(10) NOT NULL,
  `highestattemptscount` bigint(10) NOT NULL,
  `lastattemptscount` bigint(10) NOT NULL,
  `allattemptscount` bigint(10) NOT NULL,
  `firstattemptsavg` decimal(15,5) DEFAULT NULL,
  `highestattemptsavg` decimal(15,5) DEFAULT NULL,
  `lastattemptsavg` decimal(15,5) DEFAULT NULL,
  `allattemptsavg` decimal(15,5) DEFAULT NULL,
  `median` decimal(15,5) DEFAULT NULL,
  `standarddeviation` decimal(15,5) DEFAULT NULL,
  `skewness` decimal(15,10) DEFAULT NULL,
  `kurtosis` decimal(15,5) DEFAULT NULL,
  `cic` decimal(15,10) DEFAULT NULL,
  `errorratio` decimal(15,10) DEFAULT NULL,
  `standarderror` decimal(15,10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='table to cache results from analysis done in statistics repo';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_quiz_statistics`
--

LOCK TABLES `mdl_quiz_statistics` WRITE;
/*!40000 ALTER TABLE `mdl_quiz_statistics` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_quiz_statistics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_rating`
--

DROP TABLE IF EXISTS `mdl_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_rating` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `contextid` bigint(10) NOT NULL,
  `component` varchar(100) NOT NULL DEFAULT '',
  `ratingarea` varchar(50) NOT NULL DEFAULT '',
  `itemid` bigint(10) NOT NULL,
  `scaleid` bigint(10) NOT NULL,
  `rating` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `timecreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_rati_comratconite_ix` (`component`,`ratingarea`,`contextid`,`itemid`),
  KEY `mdl_rati_con_ix` (`contextid`),
  KEY `mdl_rati_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='moodle ratings';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_rating`
--

LOCK TABLES `mdl_rating` WRITE;
/*!40000 ALTER TABLE `mdl_rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_registration_hubs`
--

DROP TABLE IF EXISTS `mdl_registration_hubs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_registration_hubs` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL DEFAULT '',
  `hubname` varchar(255) NOT NULL DEFAULT '',
  `huburl` varchar(255) NOT NULL DEFAULT '',
  `confirmed` tinyint(1) NOT NULL DEFAULT '0',
  `secret` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='hub where the site is registered on with their associated to';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_registration_hubs`
--

LOCK TABLES `mdl_registration_hubs` WRITE;
/*!40000 ALTER TABLE `mdl_registration_hubs` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_registration_hubs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_repository`
--

DROP TABLE IF EXISTS `mdl_repository`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_repository` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL DEFAULT '',
  `visible` tinyint(1) DEFAULT '1',
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='This table contains one entry for every configured external ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_repository`
--

LOCK TABLES `mdl_repository` WRITE;
/*!40000 ALTER TABLE `mdl_repository` DISABLE KEYS */;
INSERT INTO `mdl_repository` VALUES (1,'areafiles',1,1),(2,'local',1,2),(3,'recent',1,3),(4,'upload',1,4),(5,'url',1,5),(6,'user',1,6),(7,'wikimedia',1,7),(8,'youtube',1,8);
/*!40000 ALTER TABLE `mdl_repository` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_repository_instance_config`
--

DROP TABLE IF EXISTS `mdl_repository_instance_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_repository_instance_config` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `instanceid` bigint(10) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `value` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='The config for intances';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_repository_instance_config`
--

LOCK TABLES `mdl_repository_instance_config` WRITE;
/*!40000 ALTER TABLE `mdl_repository_instance_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_repository_instance_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_repository_instances`
--

DROP TABLE IF EXISTS `mdl_repository_instances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_repository_instances` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `typeid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `contextid` bigint(10) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `timecreated` bigint(10) DEFAULT NULL,
  `timemodified` bigint(10) DEFAULT NULL,
  `readonly` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='This table contains one entry for every configured external ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_repository_instances`
--

LOCK TABLES `mdl_repository_instances` WRITE;
/*!40000 ALTER TABLE `mdl_repository_instances` DISABLE KEYS */;
INSERT INTO `mdl_repository_instances` VALUES (1,'',1,0,1,NULL,NULL,1435339772,1435339772,0),(2,'',2,0,1,NULL,NULL,1435339773,1435339773,0),(3,'',3,0,1,NULL,NULL,1435339773,1435339773,0),(4,'',4,0,1,NULL,NULL,1435339773,1435339773,0),(5,'',5,0,1,NULL,NULL,1435339773,1435339773,0),(6,'',6,0,1,NULL,NULL,1435339773,1435339773,0),(7,'',7,0,1,NULL,NULL,1435339773,1435339773,0),(8,'',8,0,1,NULL,NULL,1435339773,1435339773,0);
/*!40000 ALTER TABLE `mdl_repository_instances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_resource`
--

DROP TABLE IF EXISTS `mdl_resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_resource` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `tobemigrated` smallint(4) NOT NULL DEFAULT '0',
  `legacyfiles` smallint(4) NOT NULL DEFAULT '0',
  `legacyfileslast` bigint(10) DEFAULT NULL,
  `display` smallint(4) NOT NULL DEFAULT '0',
  `displayoptions` longtext,
  `filterfiles` smallint(4) NOT NULL DEFAULT '0',
  `revision` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_reso_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Each record is one resource and its config data';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_resource`
--

LOCK TABLES `mdl_resource` WRITE;
/*!40000 ALTER TABLE `mdl_resource` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_resource_old`
--

DROP TABLE IF EXISTS `mdl_resource_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_resource_old` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `type` varchar(30) NOT NULL DEFAULT '',
  `reference` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `alltext` longtext NOT NULL,
  `popup` longtext NOT NULL,
  `options` varchar(255) NOT NULL DEFAULT '',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `oldid` bigint(10) NOT NULL,
  `cmid` bigint(10) DEFAULT NULL,
  `newmodule` varchar(50) DEFAULT NULL,
  `newid` bigint(10) DEFAULT NULL,
  `migrated` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_resoold_old_uix` (`oldid`),
  KEY `mdl_resoold_cmi_ix` (`cmid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='backup of all old resource instances from 1.9';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_resource_old`
--

LOCK TABLES `mdl_resource_old` WRITE;
/*!40000 ALTER TABLE `mdl_resource_old` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_resource_old` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_role`
--

DROP TABLE IF EXISTS `mdl_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_role` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `shortname` varchar(100) NOT NULL DEFAULT '',
  `description` longtext NOT NULL,
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  `archetype` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_role_sor_uix` (`sortorder`),
  UNIQUE KEY `mdl_role_sho_uix` (`shortname`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='moodle roles';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_role`
--

LOCK TABLES `mdl_role` WRITE;
/*!40000 ALTER TABLE `mdl_role` DISABLE KEYS */;
INSERT INTO `mdl_role` VALUES (1,'','manager','',1,'manager'),(2,'','coursecreator','',2,'coursecreator'),(3,'','editingteacher','',3,'editingteacher'),(4,'','teacher','',4,'teacher'),(5,'','student','',5,'student'),(6,'','guest','',6,'guest'),(7,'','user','',7,'user'),(8,'','frontpage','',8,'frontpage');
/*!40000 ALTER TABLE `mdl_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_role_allow_assign`
--

DROP TABLE IF EXISTS `mdl_role_allow_assign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_role_allow_assign` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `roleid` bigint(10) NOT NULL DEFAULT '0',
  `allowassign` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_rolealloassi_rolall_uix` (`roleid`,`allowassign`),
  KEY `mdl_rolealloassi_rol_ix` (`roleid`),
  KEY `mdl_rolealloassi_all_ix` (`allowassign`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='this defines what role can assign what role';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_role_allow_assign`
--

LOCK TABLES `mdl_role_allow_assign` WRITE;
/*!40000 ALTER TABLE `mdl_role_allow_assign` DISABLE KEYS */;
INSERT INTO `mdl_role_allow_assign` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,3,4),(7,3,5);
/*!40000 ALTER TABLE `mdl_role_allow_assign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_role_allow_override`
--

DROP TABLE IF EXISTS `mdl_role_allow_override`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_role_allow_override` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `roleid` bigint(10) NOT NULL DEFAULT '0',
  `allowoverride` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_rolealloover_rolall_uix` (`roleid`,`allowoverride`),
  KEY `mdl_rolealloover_rol_ix` (`roleid`),
  KEY `mdl_rolealloover_all_ix` (`allowoverride`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='this defines what role can override what role';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_role_allow_override`
--

LOCK TABLES `mdl_role_allow_override` WRITE;
/*!40000 ALTER TABLE `mdl_role_allow_override` DISABLE KEYS */;
INSERT INTO `mdl_role_allow_override` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,1,7),(8,1,8),(9,3,4),(10,3,5),(11,3,6);
/*!40000 ALTER TABLE `mdl_role_allow_override` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_role_allow_switch`
--

DROP TABLE IF EXISTS `mdl_role_allow_switch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_role_allow_switch` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `roleid` bigint(10) NOT NULL,
  `allowswitch` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_rolealloswit_rolall_uix` (`roleid`,`allowswitch`),
  KEY `mdl_rolealloswit_rol_ix` (`roleid`),
  KEY `mdl_rolealloswit_all_ix` (`allowswitch`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='This table stores which which other roles a user is allowed ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_role_allow_switch`
--

LOCK TABLES `mdl_role_allow_switch` WRITE;
/*!40000 ALTER TABLE `mdl_role_allow_switch` DISABLE KEYS */;
INSERT INTO `mdl_role_allow_switch` VALUES (1,1,3),(2,1,4),(3,1,5),(4,1,6),(5,3,4),(6,3,5),(7,3,6),(8,4,5),(9,4,6);
/*!40000 ALTER TABLE `mdl_role_allow_switch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_role_assignments`
--

DROP TABLE IF EXISTS `mdl_role_assignments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_role_assignments` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `roleid` bigint(10) NOT NULL DEFAULT '0',
  `contextid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `modifierid` bigint(10) NOT NULL DEFAULT '0',
  `component` varchar(100) NOT NULL DEFAULT '',
  `itemid` bigint(10) NOT NULL DEFAULT '0',
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_roleassi_sor_ix` (`sortorder`),
  KEY `mdl_roleassi_rolcon_ix` (`roleid`,`contextid`),
  KEY `mdl_roleassi_useconrol_ix` (`userid`,`contextid`,`roleid`),
  KEY `mdl_roleassi_comiteuse_ix` (`component`,`itemid`,`userid`),
  KEY `mdl_roleassi_rol_ix` (`roleid`),
  KEY `mdl_roleassi_con_ix` (`contextid`),
  KEY `mdl_roleassi_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='assigning roles in different context';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_role_assignments`
--

LOCK TABLES `mdl_role_assignments` WRITE;
/*!40000 ALTER TABLE `mdl_role_assignments` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_role_assignments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_role_capabilities`
--

DROP TABLE IF EXISTS `mdl_role_capabilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_role_capabilities` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `contextid` bigint(10) NOT NULL DEFAULT '0',
  `roleid` bigint(10) NOT NULL DEFAULT '0',
  `capability` varchar(255) NOT NULL DEFAULT '',
  `permission` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `modifierid` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_rolecapa_rolconcap_uix` (`roleid`,`contextid`,`capability`),
  KEY `mdl_rolecapa_rol_ix` (`roleid`),
  KEY `mdl_rolecapa_con_ix` (`contextid`),
  KEY `mdl_rolecapa_mod_ix` (`modifierid`),
  KEY `mdl_rolecapa_cap_ix` (`capability`)
) ENGINE=InnoDB AUTO_INCREMENT=1161 DEFAULT CHARSET=utf8 COMMENT='permission has to be signed, overriding a capability for a p';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_role_capabilities`
--

LOCK TABLES `mdl_role_capabilities` WRITE;
/*!40000 ALTER TABLE `mdl_role_capabilities` DISABLE KEYS */;
INSERT INTO `mdl_role_capabilities` VALUES (1,1,1,'moodle/site:readallmessages',1,1435339752,0),(2,1,3,'moodle/site:readallmessages',1,1435339752,0),(3,1,1,'moodle/site:sendmessage',1,1435339752,0),(4,1,7,'moodle/site:sendmessage',1,1435339752,0),(5,1,1,'moodle/site:approvecourse',1,1435339752,0),(6,1,3,'moodle/backup:backupcourse',1,1435339752,0),(7,1,1,'moodle/backup:backupcourse',1,1435339752,0),(8,1,3,'moodle/backup:backupsection',1,1435339752,0),(9,1,1,'moodle/backup:backupsection',1,1435339752,0),(10,1,3,'moodle/backup:backupactivity',1,1435339752,0),(11,1,1,'moodle/backup:backupactivity',1,1435339752,0),(12,1,3,'moodle/backup:backuptargethub',1,1435339752,0),(13,1,1,'moodle/backup:backuptargethub',1,1435339752,0),(14,1,3,'moodle/backup:backuptargetimport',1,1435339752,0),(15,1,1,'moodle/backup:backuptargetimport',1,1435339752,0),(16,1,3,'moodle/backup:downloadfile',1,1435339752,0),(17,1,1,'moodle/backup:downloadfile',1,1435339752,0),(18,1,3,'moodle/backup:configure',1,1435339752,0),(19,1,1,'moodle/backup:configure',1,1435339752,0),(20,1,1,'moodle/backup:userinfo',1,1435339752,0),(21,1,1,'moodle/backup:anonymise',1,1435339752,0),(22,1,3,'moodle/restore:restorecourse',1,1435339752,0),(23,1,1,'moodle/restore:restorecourse',1,1435339752,0),(24,1,3,'moodle/restore:restoresection',1,1435339752,0),(25,1,1,'moodle/restore:restoresection',1,1435339752,0),(26,1,3,'moodle/restore:restoreactivity',1,1435339752,0),(27,1,1,'moodle/restore:restoreactivity',1,1435339752,0),(28,1,3,'moodle/restore:restoretargethub',1,1435339752,0),(29,1,1,'moodle/restore:restoretargethub',1,1435339752,0),(30,1,3,'moodle/restore:restoretargetimport',1,1435339752,0),(31,1,1,'moodle/restore:restoretargetimport',1,1435339752,0),(32,1,3,'moodle/restore:uploadfile',1,1435339752,0),(33,1,1,'moodle/restore:uploadfile',1,1435339752,0),(34,1,3,'moodle/restore:configure',1,1435339752,0),(35,1,1,'moodle/restore:configure',1,1435339752,0),(36,1,2,'moodle/restore:rolldates',1,1435339752,0),(37,1,1,'moodle/restore:rolldates',1,1435339752,0),(38,1,1,'moodle/restore:userinfo',1,1435339752,0),(39,1,1,'moodle/restore:createuser',1,1435339752,0),(40,1,3,'moodle/site:manageblocks',1,1435339752,0),(41,1,1,'moodle/site:manageblocks',1,1435339752,0),(42,1,4,'moodle/site:accessallgroups',1,1435339752,0),(43,1,3,'moodle/site:accessallgroups',1,1435339752,0),(44,1,1,'moodle/site:accessallgroups',1,1435339752,0),(45,1,4,'moodle/site:viewfullnames',1,1435339752,0),(46,1,3,'moodle/site:viewfullnames',1,1435339752,0),(47,1,1,'moodle/site:viewfullnames',1,1435339752,0),(48,1,4,'moodle/site:viewuseridentity',1,1435339752,0),(49,1,3,'moodle/site:viewuseridentity',1,1435339752,0),(50,1,1,'moodle/site:viewuseridentity',1,1435339752,0),(51,1,4,'moodle/site:viewreports',1,1435339752,0),(52,1,3,'moodle/site:viewreports',1,1435339752,0),(53,1,1,'moodle/site:viewreports',1,1435339752,0),(54,1,3,'moodle/site:trustcontent',1,1435339752,0),(55,1,1,'moodle/site:trustcontent',1,1435339752,0),(56,1,1,'moodle/site:uploadusers',1,1435339752,0),(57,1,3,'moodle/filter:manage',1,1435339752,0),(58,1,1,'moodle/filter:manage',1,1435339752,0),(59,1,1,'moodle/user:create',1,1435339752,0),(60,1,1,'moodle/user:delete',1,1435339752,0),(61,1,1,'moodle/user:update',1,1435339752,0),(62,1,6,'moodle/user:viewdetails',1,1435339752,0),(63,1,5,'moodle/user:viewdetails',1,1435339752,0),(64,1,4,'moodle/user:viewdetails',1,1435339752,0),(65,1,3,'moodle/user:viewdetails',1,1435339752,0),(66,1,1,'moodle/user:viewdetails',1,1435339752,0),(67,1,1,'moodle/user:viewalldetails',1,1435339752,0),(68,1,1,'moodle/user:viewlastip',1,1435339752,0),(69,1,4,'moodle/user:viewhiddendetails',1,1435339752,0),(70,1,3,'moodle/user:viewhiddendetails',1,1435339752,0),(71,1,1,'moodle/user:viewhiddendetails',1,1435339752,0),(72,1,1,'moodle/user:loginas',1,1435339752,0),(73,1,1,'moodle/user:managesyspages',1,1435339752,0),(74,1,7,'moodle/user:manageownblocks',1,1435339752,0),(75,1,7,'moodle/user:manageownfiles',1,1435339752,0),(76,1,1,'moodle/my:configsyspages',1,1435339752,0),(77,1,3,'moodle/role:assign',1,1435339752,0),(78,1,1,'moodle/role:assign',1,1435339752,0),(79,1,4,'moodle/role:review',1,1435339752,0),(80,1,3,'moodle/role:review',1,1435339752,0),(81,1,1,'moodle/role:review',1,1435339752,0),(82,1,1,'moodle/role:override',1,1435339752,0),(83,1,3,'moodle/role:safeoverride',1,1435339752,0),(84,1,1,'moodle/role:manage',1,1435339752,0),(85,1,3,'moodle/role:switchroles',1,1435339752,0),(86,1,1,'moodle/role:switchroles',1,1435339752,0),(87,1,1,'moodle/category:manage',1,1435339752,0),(88,1,2,'moodle/category:viewhiddencategories',1,1435339752,0),(89,1,1,'moodle/category:viewhiddencategories',1,1435339752,0),(90,1,1,'moodle/cohort:manage',1,1435339752,0),(91,1,1,'moodle/cohort:assign',1,1435339752,0),(92,1,3,'moodle/cohort:view',1,1435339752,0),(93,1,1,'moodle/cohort:view',1,1435339752,0),(94,1,2,'moodle/course:create',1,1435339752,0),(95,1,1,'moodle/course:create',1,1435339752,0),(96,1,7,'moodle/course:request',1,1435339752,0),(97,1,1,'moodle/course:delete',1,1435339752,0),(98,1,3,'moodle/course:update',1,1435339752,0),(99,1,1,'moodle/course:update',1,1435339752,0),(100,1,1,'moodle/course:view',1,1435339752,0),(101,1,3,'moodle/course:enrolreview',1,1435339752,0),(102,1,1,'moodle/course:enrolreview',1,1435339752,0),(103,1,3,'moodle/course:enrolconfig',1,1435339752,0),(104,1,1,'moodle/course:enrolconfig',1,1435339752,0),(105,1,3,'moodle/course:reviewotherusers',1,1435339752,0),(106,1,1,'moodle/course:reviewotherusers',1,1435339752,0),(107,1,4,'moodle/course:bulkmessaging',1,1435339752,0),(108,1,3,'moodle/course:bulkmessaging',1,1435339752,0),(109,1,1,'moodle/course:bulkmessaging',1,1435339752,0),(110,1,4,'moodle/course:viewhiddenuserfields',1,1435339752,0),(111,1,3,'moodle/course:viewhiddenuserfields',1,1435339752,0),(112,1,1,'moodle/course:viewhiddenuserfields',1,1435339752,0),(113,1,2,'moodle/course:viewhiddencourses',1,1435339752,0),(114,1,4,'moodle/course:viewhiddencourses',1,1435339752,0),(115,1,3,'moodle/course:viewhiddencourses',1,1435339752,0),(116,1,1,'moodle/course:viewhiddencourses',1,1435339752,0),(117,1,3,'moodle/course:visibility',1,1435339752,0),(118,1,1,'moodle/course:visibility',1,1435339752,0),(119,1,3,'moodle/course:managefiles',1,1435339752,0),(120,1,1,'moodle/course:managefiles',1,1435339752,0),(121,1,3,'moodle/course:manageactivities',1,1435339752,0),(122,1,1,'moodle/course:manageactivities',1,1435339752,0),(123,1,3,'moodle/course:activityvisibility',1,1435339752,0),(124,1,1,'moodle/course:activityvisibility',1,1435339752,0),(125,1,4,'moodle/course:viewhiddenactivities',1,1435339752,0),(126,1,3,'moodle/course:viewhiddenactivities',1,1435339752,0),(127,1,1,'moodle/course:viewhiddenactivities',1,1435339752,0),(128,1,5,'moodle/course:viewparticipants',1,1435339752,0),(129,1,4,'moodle/course:viewparticipants',1,1435339752,0),(130,1,3,'moodle/course:viewparticipants',1,1435339752,0),(131,1,1,'moodle/course:viewparticipants',1,1435339752,0),(132,1,3,'moodle/course:changefullname',1,1435339752,0),(133,1,1,'moodle/course:changefullname',1,1435339752,0),(134,1,3,'moodle/course:changeshortname',1,1435339752,0),(135,1,1,'moodle/course:changeshortname',1,1435339752,0),(136,1,3,'moodle/course:changeidnumber',1,1435339752,0),(137,1,1,'moodle/course:changeidnumber',1,1435339752,0),(138,1,3,'moodle/course:changecategory',1,1435339752,0),(139,1,1,'moodle/course:changecategory',1,1435339752,0),(140,1,3,'moodle/course:changesummary',1,1435339752,0),(141,1,1,'moodle/course:changesummary',1,1435339752,0),(142,1,1,'moodle/site:viewparticipants',1,1435339752,0),(143,1,5,'moodle/course:isincompletionreports',1,1435339752,0),(144,1,5,'moodle/course:viewscales',1,1435339752,0),(145,1,4,'moodle/course:viewscales',1,1435339752,0),(146,1,3,'moodle/course:viewscales',1,1435339752,0),(147,1,1,'moodle/course:viewscales',1,1435339752,0),(148,1,3,'moodle/course:managescales',1,1435339752,0),(149,1,1,'moodle/course:managescales',1,1435339752,0),(150,1,3,'moodle/course:managegroups',1,1435339752,0),(151,1,1,'moodle/course:managegroups',1,1435339752,0),(152,1,3,'moodle/course:reset',1,1435339752,0),(153,1,1,'moodle/course:reset',1,1435339752,0),(154,1,3,'moodle/course:viewsuspendedusers',1,1435339752,0),(155,1,1,'moodle/course:viewsuspendedusers',1,1435339752,0),(156,1,6,'moodle/blog:view',1,1435339752,0),(157,1,7,'moodle/blog:view',1,1435339752,0),(158,1,5,'moodle/blog:view',1,1435339752,0),(159,1,4,'moodle/blog:view',1,1435339752,0),(160,1,3,'moodle/blog:view',1,1435339752,0),(161,1,1,'moodle/blog:view',1,1435339752,0),(162,1,6,'moodle/blog:search',1,1435339752,0),(163,1,7,'moodle/blog:search',1,1435339752,0),(164,1,5,'moodle/blog:search',1,1435339752,0),(165,1,4,'moodle/blog:search',1,1435339752,0),(166,1,3,'moodle/blog:search',1,1435339752,0),(167,1,1,'moodle/blog:search',1,1435339752,0),(168,1,1,'moodle/blog:viewdrafts',1,1435339752,0),(169,1,7,'moodle/blog:create',1,1435339752,0),(170,1,1,'moodle/blog:create',1,1435339752,0),(171,1,4,'moodle/blog:manageentries',1,1435339752,0),(172,1,3,'moodle/blog:manageentries',1,1435339752,0),(173,1,1,'moodle/blog:manageentries',1,1435339752,0),(174,1,5,'moodle/blog:manageexternal',1,1435339752,0),(175,1,7,'moodle/blog:manageexternal',1,1435339752,0),(176,1,4,'moodle/blog:manageexternal',1,1435339752,0),(177,1,3,'moodle/blog:manageexternal',1,1435339752,0),(178,1,1,'moodle/blog:manageexternal',1,1435339752,0),(179,1,7,'moodle/calendar:manageownentries',1,1435339752,0),(180,1,1,'moodle/calendar:manageownentries',1,1435339752,0),(181,1,4,'moodle/calendar:managegroupentries',1,1435339752,0),(182,1,3,'moodle/calendar:managegroupentries',1,1435339752,0),(183,1,1,'moodle/calendar:managegroupentries',1,1435339752,0),(184,1,4,'moodle/calendar:manageentries',1,1435339752,0),(185,1,3,'moodle/calendar:manageentries',1,1435339752,0),(186,1,1,'moodle/calendar:manageentries',1,1435339752,0),(187,1,1,'moodle/user:editprofile',1,1435339752,0),(188,1,6,'moodle/user:editownprofile',-1000,1435339752,0),(189,1,7,'moodle/user:editownprofile',1,1435339752,0),(190,1,1,'moodle/user:editownprofile',1,1435339752,0),(191,1,6,'moodle/user:changeownpassword',-1000,1435339752,0),(192,1,7,'moodle/user:changeownpassword',1,1435339752,0),(193,1,1,'moodle/user:changeownpassword',1,1435339752,0),(194,1,5,'moodle/user:readuserposts',1,1435339752,0),(195,1,4,'moodle/user:readuserposts',1,1435339752,0),(196,1,3,'moodle/user:readuserposts',1,1435339752,0),(197,1,1,'moodle/user:readuserposts',1,1435339752,0),(198,1,5,'moodle/user:readuserblogs',1,1435339752,0),(199,1,4,'moodle/user:readuserblogs',1,1435339752,0),(200,1,3,'moodle/user:readuserblogs',1,1435339752,0),(201,1,1,'moodle/user:readuserblogs',1,1435339752,0),(202,1,1,'moodle/user:editmessageprofile',1,1435339752,0),(203,1,6,'moodle/user:editownmessageprofile',-1000,1435339752,0),(204,1,7,'moodle/user:editownmessageprofile',1,1435339752,0),(205,1,1,'moodle/user:editownmessageprofile',1,1435339752,0),(206,1,3,'moodle/question:managecategory',1,1435339752,0),(207,1,1,'moodle/question:managecategory',1,1435339752,0),(208,1,3,'moodle/question:add',1,1435339752,0),(209,1,1,'moodle/question:add',1,1435339752,0),(210,1,3,'moodle/question:editmine',1,1435339752,0),(211,1,1,'moodle/question:editmine',1,1435339752,0),(212,1,3,'moodle/question:editall',1,1435339752,0),(213,1,1,'moodle/question:editall',1,1435339752,0),(214,1,3,'moodle/question:viewmine',1,1435339752,0),(215,1,1,'moodle/question:viewmine',1,1435339752,0),(216,1,3,'moodle/question:viewall',1,1435339752,0),(217,1,1,'moodle/question:viewall',1,1435339752,0),(218,1,3,'moodle/question:usemine',1,1435339752,0),(219,1,1,'moodle/question:usemine',1,1435339752,0),(220,1,3,'moodle/question:useall',1,1435339752,0),(221,1,1,'moodle/question:useall',1,1435339752,0),(222,1,3,'moodle/question:movemine',1,1435339752,0),(223,1,1,'moodle/question:movemine',1,1435339752,0),(224,1,3,'moodle/question:moveall',1,1435339752,0),(225,1,1,'moodle/question:moveall',1,1435339752,0),(226,1,1,'moodle/question:config',1,1435339752,0),(227,1,5,'moodle/question:flag',1,1435339753,0),(228,1,4,'moodle/question:flag',1,1435339753,0),(229,1,3,'moodle/question:flag',1,1435339753,0),(230,1,1,'moodle/question:flag',1,1435339753,0),(231,1,4,'moodle/site:doclinks',1,1435339753,0),(232,1,3,'moodle/site:doclinks',1,1435339753,0),(233,1,1,'moodle/site:doclinks',1,1435339753,0),(234,1,3,'moodle/course:sectionvisibility',1,1435339753,0),(235,1,1,'moodle/course:sectionvisibility',1,1435339753,0),(236,1,3,'moodle/course:useremail',1,1435339753,0),(237,1,1,'moodle/course:useremail',1,1435339753,0),(238,1,3,'moodle/course:viewhiddensections',1,1435339753,0),(239,1,1,'moodle/course:viewhiddensections',1,1435339753,0),(240,1,3,'moodle/course:setcurrentsection',1,1435339753,0),(241,1,1,'moodle/course:setcurrentsection',1,1435339753,0),(242,1,3,'moodle/course:movesections',1,1435339753,0),(243,1,1,'moodle/course:movesections',1,1435339753,0),(244,1,4,'moodle/grade:viewall',1,1435339753,0),(245,1,3,'moodle/grade:viewall',1,1435339753,0),(246,1,1,'moodle/grade:viewall',1,1435339753,0),(247,1,5,'moodle/grade:view',1,1435339753,0),(248,1,4,'moodle/grade:viewhidden',1,1435339753,0),(249,1,3,'moodle/grade:viewhidden',1,1435339753,0),(250,1,1,'moodle/grade:viewhidden',1,1435339753,0),(251,1,3,'moodle/grade:import',1,1435339753,0),(252,1,1,'moodle/grade:import',1,1435339753,0),(253,1,4,'moodle/grade:export',1,1435339753,0),(254,1,3,'moodle/grade:export',1,1435339753,0),(255,1,1,'moodle/grade:export',1,1435339753,0),(256,1,3,'moodle/grade:manage',1,1435339753,0),(257,1,1,'moodle/grade:manage',1,1435339753,0),(258,1,3,'moodle/grade:edit',1,1435339753,0),(259,1,1,'moodle/grade:edit',1,1435339753,0),(260,1,3,'moodle/grade:managegradingforms',1,1435339753,0),(261,1,1,'moodle/grade:managegradingforms',1,1435339753,0),(262,1,1,'moodle/grade:sharegradingforms',1,1435339753,0),(263,1,1,'moodle/grade:managesharedforms',1,1435339753,0),(264,1,3,'moodle/grade:manageoutcomes',1,1435339753,0),(265,1,1,'moodle/grade:manageoutcomes',1,1435339753,0),(266,1,3,'moodle/grade:manageletters',1,1435339753,0),(267,1,1,'moodle/grade:manageletters',1,1435339753,0),(268,1,3,'moodle/grade:hide',1,1435339753,0),(269,1,1,'moodle/grade:hide',1,1435339753,0),(270,1,3,'moodle/grade:lock',1,1435339753,0),(271,1,1,'moodle/grade:lock',1,1435339753,0),(272,1,3,'moodle/grade:unlock',1,1435339753,0),(273,1,1,'moodle/grade:unlock',1,1435339753,0),(274,1,7,'moodle/my:manageblocks',1,1435339753,0),(275,1,4,'moodle/notes:view',1,1435339753,0),(276,1,3,'moodle/notes:view',1,1435339753,0),(277,1,1,'moodle/notes:view',1,1435339753,0),(278,1,4,'moodle/notes:manage',1,1435339753,0),(279,1,3,'moodle/notes:manage',1,1435339753,0),(280,1,1,'moodle/notes:manage',1,1435339753,0),(281,1,4,'moodle/tag:manage',1,1435339753,0),(282,1,3,'moodle/tag:manage',1,1435339753,0),(283,1,1,'moodle/tag:manage',1,1435339753,0),(284,1,1,'moodle/tag:create',1,1435339753,0),(285,1,7,'moodle/tag:create',1,1435339753,0),(286,1,1,'moodle/tag:edit',1,1435339753,0),(287,1,7,'moodle/tag:edit',1,1435339753,0),(288,1,1,'moodle/tag:flag',1,1435339753,0),(289,1,7,'moodle/tag:flag',1,1435339753,0),(290,1,4,'moodle/tag:editblocks',1,1435339753,0),(291,1,3,'moodle/tag:editblocks',1,1435339753,0),(292,1,1,'moodle/tag:editblocks',1,1435339753,0),(293,1,6,'moodle/block:view',1,1435339753,0),(294,1,7,'moodle/block:view',1,1435339753,0),(295,1,5,'moodle/block:view',1,1435339753,0),(296,1,4,'moodle/block:view',1,1435339753,0),(297,1,3,'moodle/block:view',1,1435339753,0),(298,1,3,'moodle/block:edit',1,1435339753,0),(299,1,1,'moodle/block:edit',1,1435339753,0),(300,1,7,'moodle/portfolio:export',1,1435339753,0),(301,1,5,'moodle/portfolio:export',1,1435339753,0),(302,1,4,'moodle/portfolio:export',1,1435339753,0),(303,1,3,'moodle/portfolio:export',1,1435339753,0),(304,1,8,'moodle/comment:view',1,1435339753,0),(305,1,6,'moodle/comment:view',1,1435339753,0),(306,1,7,'moodle/comment:view',1,1435339753,0),(307,1,5,'moodle/comment:view',1,1435339753,0),(308,1,4,'moodle/comment:view',1,1435339753,0),(309,1,3,'moodle/comment:view',1,1435339753,0),(310,1,1,'moodle/comment:view',1,1435339753,0),(311,1,7,'moodle/comment:post',1,1435339753,0),(312,1,5,'moodle/comment:post',1,1435339753,0),(313,1,4,'moodle/comment:post',1,1435339753,0),(314,1,3,'moodle/comment:post',1,1435339753,0),(315,1,1,'moodle/comment:post',1,1435339753,0),(316,1,3,'moodle/comment:delete',1,1435339753,0),(317,1,1,'moodle/comment:delete',1,1435339753,0),(318,1,1,'moodle/webservice:createtoken',1,1435339753,0),(319,1,7,'moodle/webservice:createmobiletoken',1,1435339753,0),(320,1,7,'moodle/rating:view',1,1435339753,0),(321,1,5,'moodle/rating:view',1,1435339753,0),(322,1,4,'moodle/rating:view',1,1435339753,0),(323,1,3,'moodle/rating:view',1,1435339753,0),(324,1,1,'moodle/rating:view',1,1435339753,0),(325,1,7,'moodle/rating:viewany',1,1435339753,0),(326,1,5,'moodle/rating:viewany',1,1435339753,0),(327,1,4,'moodle/rating:viewany',1,1435339753,0),(328,1,3,'moodle/rating:viewany',1,1435339753,0),(329,1,1,'moodle/rating:viewany',1,1435339753,0),(330,1,7,'moodle/rating:viewall',1,1435339753,0),(331,1,5,'moodle/rating:viewall',1,1435339753,0),(332,1,4,'moodle/rating:viewall',1,1435339753,0),(333,1,3,'moodle/rating:viewall',1,1435339753,0),(334,1,1,'moodle/rating:viewall',1,1435339753,0),(335,1,7,'moodle/rating:rate',1,1435339753,0),(336,1,5,'moodle/rating:rate',1,1435339753,0),(337,1,4,'moodle/rating:rate',1,1435339753,0),(338,1,3,'moodle/rating:rate',1,1435339753,0),(339,1,1,'moodle/rating:rate',1,1435339753,0),(340,1,1,'moodle/course:publish',1,1435339753,0),(341,1,4,'moodle/course:markcomplete',1,1435339753,0),(342,1,3,'moodle/course:markcomplete',1,1435339753,0),(343,1,1,'moodle/course:markcomplete',1,1435339753,0),(344,1,1,'moodle/community:add',1,1435339753,0),(345,1,4,'moodle/community:add',1,1435339753,0),(346,1,3,'moodle/community:add',1,1435339753,0),(347,1,1,'moodle/community:download',1,1435339753,0),(348,1,3,'moodle/community:download',1,1435339753,0),(349,1,1,'moodle/badges:manageglobalsettings',1,1435339753,0),(350,1,7,'moodle/badges:viewbadges',1,1435339753,0),(351,1,7,'moodle/badges:manageownbadges',1,1435339753,0),(352,1,7,'moodle/badges:viewotherbadges',1,1435339753,0),(353,1,7,'moodle/badges:earnbadge',1,1435339753,0),(354,1,1,'moodle/badges:createbadge',1,1435339753,0),(355,1,3,'moodle/badges:createbadge',1,1435339753,0),(356,1,1,'moodle/badges:deletebadge',1,1435339753,0),(357,1,3,'moodle/badges:deletebadge',1,1435339753,0),(358,1,1,'moodle/badges:configuredetails',1,1435339753,0),(359,1,3,'moodle/badges:configuredetails',1,1435339753,0),(360,1,1,'moodle/badges:configurecriteria',1,1435339753,0),(361,1,3,'moodle/badges:configurecriteria',1,1435339753,0),(362,1,1,'moodle/badges:configuremessages',1,1435339753,0),(363,1,3,'moodle/badges:configuremessages',1,1435339753,0),(364,1,1,'moodle/badges:awardbadge',1,1435339753,0),(365,1,4,'moodle/badges:awardbadge',1,1435339753,0),(366,1,3,'moodle/badges:awardbadge',1,1435339753,0),(367,1,1,'moodle/badges:viewawarded',1,1435339753,0),(368,1,4,'moodle/badges:viewawarded',1,1435339753,0),(369,1,3,'moodle/badges:viewawarded',1,1435339753,0),(370,1,6,'mod/assign:view',1,1435339759,0),(371,1,5,'mod/assign:view',1,1435339759,0),(372,1,4,'mod/assign:view',1,1435339759,0),(373,1,3,'mod/assign:view',1,1435339759,0),(374,1,1,'mod/assign:view',1,1435339759,0),(375,1,5,'mod/assign:submit',1,1435339759,0),(376,1,4,'mod/assign:grade',1,1435339759,0),(377,1,3,'mod/assign:grade',1,1435339759,0),(378,1,1,'mod/assign:grade',1,1435339759,0),(379,1,4,'mod/assign:exportownsubmission',1,1435339759,0),(380,1,3,'mod/assign:exportownsubmission',1,1435339759,0),(381,1,1,'mod/assign:exportownsubmission',1,1435339759,0),(382,1,5,'mod/assign:exportownsubmission',1,1435339759,0),(383,1,3,'mod/assign:addinstance',1,1435339759,0),(384,1,1,'mod/assign:addinstance',1,1435339759,0),(385,1,4,'mod/assign:grantextension',1,1435339759,0),(386,1,3,'mod/assign:grantextension',1,1435339759,0),(387,1,1,'mod/assign:grantextension',1,1435339759,0),(388,1,3,'mod/assign:revealidentities',1,1435339759,0),(389,1,1,'mod/assign:revealidentities',1,1435339759,0),(390,1,3,'mod/assign:reviewgrades',1,1435339759,0),(391,1,1,'mod/assign:reviewgrades',1,1435339759,0),(392,1,3,'mod/assign:releasegrades',1,1435339759,0),(393,1,1,'mod/assign:releasegrades',1,1435339759,0),(394,1,3,'mod/assign:managegrades',1,1435339759,0),(395,1,1,'mod/assign:managegrades',1,1435339759,0),(396,1,3,'mod/assign:manageallocations',1,1435339759,0),(397,1,1,'mod/assign:manageallocations',1,1435339759,0),(398,1,3,'mod/assign:viewgrades',1,1435339759,0),(399,1,1,'mod/assign:viewgrades',1,1435339759,0),(400,1,4,'mod/assign:viewgrades',1,1435339759,0),(401,1,1,'mod/assign:viewblinddetails',1,1435339759,0),(402,1,4,'mod/assign:receivegradernotifications',1,1435339759,0),(403,1,3,'mod/assign:receivegradernotifications',1,1435339759,0),(404,1,1,'mod/assign:receivegradernotifications',1,1435339759,0),(405,1,6,'mod/assignment:view',1,1435339759,0),(406,1,5,'mod/assignment:view',1,1435339759,0),(407,1,4,'mod/assignment:view',1,1435339759,0),(408,1,3,'mod/assignment:view',1,1435339759,0),(409,1,1,'mod/assignment:view',1,1435339759,0),(410,1,3,'mod/assignment:addinstance',1,1435339759,0),(411,1,1,'mod/assignment:addinstance',1,1435339759,0),(412,1,5,'mod/assignment:submit',1,1435339759,0),(413,1,4,'mod/assignment:grade',1,1435339759,0),(414,1,3,'mod/assignment:grade',1,1435339759,0),(415,1,1,'mod/assignment:grade',1,1435339759,0),(416,1,4,'mod/assignment:exportownsubmission',1,1435339759,0),(417,1,3,'mod/assignment:exportownsubmission',1,1435339759,0),(418,1,1,'mod/assignment:exportownsubmission',1,1435339759,0),(419,1,5,'mod/assignment:exportownsubmission',1,1435339759,0),(420,1,3,'mod/book:addinstance',1,1435339759,0),(421,1,1,'mod/book:addinstance',1,1435339759,0),(422,1,6,'mod/book:read',1,1435339759,0),(423,1,8,'mod/book:read',1,1435339759,0),(424,1,5,'mod/book:read',1,1435339759,0),(425,1,4,'mod/book:read',1,1435339759,0),(426,1,3,'mod/book:read',1,1435339759,0),(427,1,1,'mod/book:read',1,1435339759,0),(428,1,4,'mod/book:viewhiddenchapters',1,1435339759,0),(429,1,3,'mod/book:viewhiddenchapters',1,1435339759,0),(430,1,1,'mod/book:viewhiddenchapters',1,1435339759,0),(431,1,3,'mod/book:edit',1,1435339759,0),(432,1,1,'mod/book:edit',1,1435339759,0),(433,1,3,'mod/chat:addinstance',1,1435339759,0),(434,1,1,'mod/chat:addinstance',1,1435339759,0),(435,1,5,'mod/chat:chat',1,1435339759,0),(436,1,4,'mod/chat:chat',1,1435339759,0),(437,1,3,'mod/chat:chat',1,1435339759,0),(438,1,1,'mod/chat:chat',1,1435339759,0),(439,1,5,'mod/chat:readlog',1,1435339759,0),(440,1,4,'mod/chat:readlog',1,1435339759,0),(441,1,3,'mod/chat:readlog',1,1435339759,0),(442,1,1,'mod/chat:readlog',1,1435339759,0),(443,1,4,'mod/chat:deletelog',1,1435339759,0),(444,1,3,'mod/chat:deletelog',1,1435339759,0),(445,1,1,'mod/chat:deletelog',1,1435339759,0),(446,1,4,'mod/chat:exportparticipatedsession',1,1435339759,0),(447,1,3,'mod/chat:exportparticipatedsession',1,1435339759,0),(448,1,1,'mod/chat:exportparticipatedsession',1,1435339759,0),(449,1,4,'mod/chat:exportsession',1,1435339759,0),(450,1,3,'mod/chat:exportsession',1,1435339759,0),(451,1,1,'mod/chat:exportsession',1,1435339759,0),(452,1,3,'mod/choice:addinstance',1,1435339760,0),(453,1,1,'mod/choice:addinstance',1,1435339760,0),(454,1,5,'mod/choice:choose',1,1435339760,0),(455,1,4,'mod/choice:choose',1,1435339760,0),(456,1,3,'mod/choice:choose',1,1435339760,0),(457,1,4,'mod/choice:readresponses',1,1435339760,0),(458,1,3,'mod/choice:readresponses',1,1435339760,0),(459,1,1,'mod/choice:readresponses',1,1435339760,0),(460,1,4,'mod/choice:deleteresponses',1,1435339760,0),(461,1,3,'mod/choice:deleteresponses',1,1435339760,0),(462,1,1,'mod/choice:deleteresponses',1,1435339760,0),(463,1,4,'mod/choice:downloadresponses',1,1435339760,0),(464,1,3,'mod/choice:downloadresponses',1,1435339760,0),(465,1,1,'mod/choice:downloadresponses',1,1435339760,0),(466,1,3,'mod/data:addinstance',1,1435339760,0),(467,1,1,'mod/data:addinstance',1,1435339760,0),(468,1,8,'mod/data:viewentry',1,1435339760,0),(469,1,6,'mod/data:viewentry',1,1435339760,0),(470,1,5,'mod/data:viewentry',1,1435339760,0),(471,1,4,'mod/data:viewentry',1,1435339760,0),(472,1,3,'mod/data:viewentry',1,1435339760,0),(473,1,1,'mod/data:viewentry',1,1435339760,0),(474,1,5,'mod/data:writeentry',1,1435339760,0),(475,1,4,'mod/data:writeentry',1,1435339760,0),(476,1,3,'mod/data:writeentry',1,1435339760,0),(477,1,1,'mod/data:writeentry',1,1435339760,0),(478,1,5,'mod/data:comment',1,1435339760,0),(479,1,4,'mod/data:comment',1,1435339760,0),(480,1,3,'mod/data:comment',1,1435339760,0),(481,1,1,'mod/data:comment',1,1435339760,0),(482,1,4,'mod/data:rate',1,1435339760,0),(483,1,3,'mod/data:rate',1,1435339760,0),(484,1,1,'mod/data:rate',1,1435339760,0),(485,1,4,'mod/data:viewrating',1,1435339760,0),(486,1,3,'mod/data:viewrating',1,1435339760,0),(487,1,1,'mod/data:viewrating',1,1435339760,0),(488,1,4,'mod/data:viewanyrating',1,1435339760,0),(489,1,3,'mod/data:viewanyrating',1,1435339760,0),(490,1,1,'mod/data:viewanyrating',1,1435339760,0),(491,1,4,'mod/data:viewallratings',1,1435339760,0),(492,1,3,'mod/data:viewallratings',1,1435339760,0),(493,1,1,'mod/data:viewallratings',1,1435339760,0),(494,1,4,'mod/data:approve',1,1435339760,0),(495,1,3,'mod/data:approve',1,1435339760,0),(496,1,1,'mod/data:approve',1,1435339760,0),(497,1,4,'mod/data:manageentries',1,1435339760,0),(498,1,3,'mod/data:manageentries',1,1435339760,0),(499,1,1,'mod/data:manageentries',1,1435339760,0),(500,1,4,'mod/data:managecomments',1,1435339760,0),(501,1,3,'mod/data:managecomments',1,1435339760,0),(502,1,1,'mod/data:managecomments',1,1435339760,0),(503,1,3,'mod/data:managetemplates',1,1435339760,0),(504,1,1,'mod/data:managetemplates',1,1435339760,0),(505,1,4,'mod/data:viewalluserpresets',1,1435339760,0),(506,1,3,'mod/data:viewalluserpresets',1,1435339760,0),(507,1,1,'mod/data:viewalluserpresets',1,1435339760,0),(508,1,1,'mod/data:manageuserpresets',1,1435339760,0),(509,1,1,'mod/data:exportentry',1,1435339760,0),(510,1,4,'mod/data:exportentry',1,1435339760,0),(511,1,3,'mod/data:exportentry',1,1435339760,0),(512,1,1,'mod/data:exportownentry',1,1435339760,0),(513,1,4,'mod/data:exportownentry',1,1435339760,0),(514,1,3,'mod/data:exportownentry',1,1435339760,0),(515,1,5,'mod/data:exportownentry',1,1435339760,0),(516,1,1,'mod/data:exportallentries',1,1435339760,0),(517,1,4,'mod/data:exportallentries',1,1435339760,0),(518,1,3,'mod/data:exportallentries',1,1435339760,0),(519,1,1,'mod/data:exportuserinfo',1,1435339760,0),(520,1,4,'mod/data:exportuserinfo',1,1435339760,0),(521,1,3,'mod/data:exportuserinfo',1,1435339760,0),(522,1,3,'mod/feedback:addinstance',1,1435339760,0),(523,1,1,'mod/feedback:addinstance',1,1435339760,0),(524,1,6,'mod/feedback:view',1,1435339760,0),(525,1,5,'mod/feedback:view',1,1435339760,0),(526,1,4,'mod/feedback:view',1,1435339760,0),(527,1,3,'mod/feedback:view',1,1435339760,0),(528,1,1,'mod/feedback:view',1,1435339760,0),(529,1,5,'mod/feedback:complete',1,1435339760,0),(530,1,5,'mod/feedback:viewanalysepage',1,1435339760,0),(531,1,3,'mod/feedback:viewanalysepage',1,1435339760,0),(532,1,1,'mod/feedback:viewanalysepage',1,1435339760,0),(533,1,3,'mod/feedback:deletesubmissions',1,1435339760,0),(534,1,1,'mod/feedback:deletesubmissions',1,1435339760,0),(535,1,1,'mod/feedback:mapcourse',1,1435339760,0),(536,1,3,'mod/feedback:edititems',1,1435339760,0),(537,1,1,'mod/feedback:edititems',1,1435339760,0),(538,1,3,'mod/feedback:createprivatetemplate',1,1435339760,0),(539,1,1,'mod/feedback:createprivatetemplate',1,1435339760,0),(540,1,3,'mod/feedback:createpublictemplate',1,1435339760,0),(541,1,1,'mod/feedback:createpublictemplate',1,1435339760,0),(542,1,3,'mod/feedback:deletetemplate',1,1435339760,0),(543,1,1,'mod/feedback:deletetemplate',1,1435339760,0),(544,1,4,'mod/feedback:viewreports',1,1435339760,0),(545,1,3,'mod/feedback:viewreports',1,1435339760,0),(546,1,1,'mod/feedback:viewreports',1,1435339760,0),(547,1,4,'mod/feedback:receivemail',1,1435339760,0),(548,1,3,'mod/feedback:receivemail',1,1435339760,0),(549,1,3,'mod/folder:addinstance',1,1435339760,0),(550,1,1,'mod/folder:addinstance',1,1435339760,0),(551,1,6,'mod/folder:view',1,1435339760,0),(552,1,7,'mod/folder:view',1,1435339760,0),(553,1,3,'mod/folder:managefiles',1,1435339760,0),(554,1,3,'mod/forum:addinstance',1,1435339760,0),(555,1,1,'mod/forum:addinstance',1,1435339760,0),(556,1,8,'mod/forum:viewdiscussion',1,1435339761,0),(557,1,6,'mod/forum:viewdiscussion',1,1435339761,0),(558,1,5,'mod/forum:viewdiscussion',1,1435339761,0),(559,1,4,'mod/forum:viewdiscussion',1,1435339761,0),(560,1,3,'mod/forum:viewdiscussion',1,1435339761,0),(561,1,1,'mod/forum:viewdiscussion',1,1435339761,0),(562,1,4,'mod/forum:viewhiddentimedposts',1,1435339761,0),(563,1,3,'mod/forum:viewhiddentimedposts',1,1435339761,0),(564,1,1,'mod/forum:viewhiddentimedposts',1,1435339761,0),(565,1,5,'mod/forum:startdiscussion',1,1435339761,0),(566,1,4,'mod/forum:startdiscussion',1,1435339761,0),(567,1,3,'mod/forum:startdiscussion',1,1435339761,0),(568,1,1,'mod/forum:startdiscussion',1,1435339761,0),(569,1,5,'mod/forum:replypost',1,1435339761,0),(570,1,4,'mod/forum:replypost',1,1435339761,0),(571,1,3,'mod/forum:replypost',1,1435339761,0),(572,1,1,'mod/forum:replypost',1,1435339761,0),(573,1,4,'mod/forum:addnews',1,1435339761,0),(574,1,3,'mod/forum:addnews',1,1435339761,0),(575,1,1,'mod/forum:addnews',1,1435339761,0),(576,1,4,'mod/forum:replynews',1,1435339761,0),(577,1,3,'mod/forum:replynews',1,1435339761,0),(578,1,1,'mod/forum:replynews',1,1435339761,0),(579,1,5,'mod/forum:viewrating',1,1435339761,0),(580,1,4,'mod/forum:viewrating',1,1435339761,0),(581,1,3,'mod/forum:viewrating',1,1435339761,0),(582,1,1,'mod/forum:viewrating',1,1435339761,0),(583,1,4,'mod/forum:viewanyrating',1,1435339761,0),(584,1,3,'mod/forum:viewanyrating',1,1435339761,0),(585,1,1,'mod/forum:viewanyrating',1,1435339761,0),(586,1,4,'mod/forum:viewallratings',1,1435339761,0),(587,1,3,'mod/forum:viewallratings',1,1435339761,0),(588,1,1,'mod/forum:viewallratings',1,1435339761,0),(589,1,4,'mod/forum:rate',1,1435339761,0),(590,1,3,'mod/forum:rate',1,1435339761,0),(591,1,1,'mod/forum:rate',1,1435339761,0),(592,1,5,'mod/forum:createattachment',1,1435339761,0),(593,1,4,'mod/forum:createattachment',1,1435339761,0),(594,1,3,'mod/forum:createattachment',1,1435339761,0),(595,1,1,'mod/forum:createattachment',1,1435339761,0),(596,1,5,'mod/forum:deleteownpost',1,1435339761,0),(597,1,4,'mod/forum:deleteownpost',1,1435339761,0),(598,1,3,'mod/forum:deleteownpost',1,1435339761,0),(599,1,1,'mod/forum:deleteownpost',1,1435339761,0),(600,1,4,'mod/forum:deleteanypost',1,1435339761,0),(601,1,3,'mod/forum:deleteanypost',1,1435339761,0),(602,1,1,'mod/forum:deleteanypost',1,1435339761,0),(603,1,4,'mod/forum:splitdiscussions',1,1435339761,0),(604,1,3,'mod/forum:splitdiscussions',1,1435339761,0),(605,1,1,'mod/forum:splitdiscussions',1,1435339761,0),(606,1,4,'mod/forum:movediscussions',1,1435339761,0),(607,1,3,'mod/forum:movediscussions',1,1435339761,0),(608,1,1,'mod/forum:movediscussions',1,1435339761,0),(609,1,4,'mod/forum:editanypost',1,1435339761,0),(610,1,3,'mod/forum:editanypost',1,1435339761,0),(611,1,1,'mod/forum:editanypost',1,1435339761,0),(612,1,4,'mod/forum:viewqandawithoutposting',1,1435339761,0),(613,1,3,'mod/forum:viewqandawithoutposting',1,1435339761,0),(614,1,1,'mod/forum:viewqandawithoutposting',1,1435339761,0),(615,1,4,'mod/forum:viewsubscribers',1,1435339761,0),(616,1,3,'mod/forum:viewsubscribers',1,1435339761,0),(617,1,1,'mod/forum:viewsubscribers',1,1435339761,0),(618,1,4,'mod/forum:managesubscriptions',1,1435339761,0),(619,1,3,'mod/forum:managesubscriptions',1,1435339761,0),(620,1,1,'mod/forum:managesubscriptions',1,1435339761,0),(621,1,4,'mod/forum:postwithoutthrottling',1,1435339761,0),(622,1,3,'mod/forum:postwithoutthrottling',1,1435339761,0),(623,1,1,'mod/forum:postwithoutthrottling',1,1435339761,0),(624,1,4,'mod/forum:exportdiscussion',1,1435339761,0),(625,1,3,'mod/forum:exportdiscussion',1,1435339761,0),(626,1,1,'mod/forum:exportdiscussion',1,1435339761,0),(627,1,4,'mod/forum:exportpost',1,1435339761,0),(628,1,3,'mod/forum:exportpost',1,1435339761,0),(629,1,1,'mod/forum:exportpost',1,1435339761,0),(630,1,4,'mod/forum:exportownpost',1,1435339761,0),(631,1,3,'mod/forum:exportownpost',1,1435339761,0),(632,1,1,'mod/forum:exportownpost',1,1435339761,0),(633,1,5,'mod/forum:exportownpost',1,1435339761,0),(634,1,4,'mod/forum:addquestion',1,1435339761,0),(635,1,3,'mod/forum:addquestion',1,1435339761,0),(636,1,1,'mod/forum:addquestion',1,1435339761,0),(637,1,5,'mod/forum:allowforcesubscribe',1,1435339761,0),(638,1,4,'mod/forum:allowforcesubscribe',1,1435339761,0),(639,1,3,'mod/forum:allowforcesubscribe',1,1435339761,0),(640,1,8,'mod/forum:allowforcesubscribe',1,1435339761,0),(641,1,3,'mod/glossary:addinstance',1,1435339761,0),(642,1,1,'mod/glossary:addinstance',1,1435339761,0),(643,1,8,'mod/glossary:view',1,1435339761,0),(644,1,6,'mod/glossary:view',1,1435339761,0),(645,1,5,'mod/glossary:view',1,1435339761,0),(646,1,4,'mod/glossary:view',1,1435339761,0),(647,1,3,'mod/glossary:view',1,1435339761,0),(648,1,1,'mod/glossary:view',1,1435339761,0),(649,1,5,'mod/glossary:write',1,1435339761,0),(650,1,4,'mod/glossary:write',1,1435339761,0),(651,1,3,'mod/glossary:write',1,1435339761,0),(652,1,1,'mod/glossary:write',1,1435339761,0),(653,1,4,'mod/glossary:manageentries',1,1435339761,0),(654,1,3,'mod/glossary:manageentries',1,1435339761,0),(655,1,1,'mod/glossary:manageentries',1,1435339761,0),(656,1,4,'mod/glossary:managecategories',1,1435339761,0),(657,1,3,'mod/glossary:managecategories',1,1435339761,0),(658,1,1,'mod/glossary:managecategories',1,1435339761,0),(659,1,5,'mod/glossary:comment',1,1435339761,0),(660,1,4,'mod/glossary:comment',1,1435339761,0),(661,1,3,'mod/glossary:comment',1,1435339761,0),(662,1,1,'mod/glossary:comment',1,1435339761,0),(663,1,4,'mod/glossary:managecomments',1,1435339761,0),(664,1,3,'mod/glossary:managecomments',1,1435339761,0),(665,1,1,'mod/glossary:managecomments',1,1435339761,0),(666,1,4,'mod/glossary:import',1,1435339761,0),(667,1,3,'mod/glossary:import',1,1435339761,0),(668,1,1,'mod/glossary:import',1,1435339761,0),(669,1,4,'mod/glossary:export',1,1435339761,0),(670,1,3,'mod/glossary:export',1,1435339761,0),(671,1,1,'mod/glossary:export',1,1435339761,0),(672,1,4,'mod/glossary:approve',1,1435339761,0),(673,1,3,'mod/glossary:approve',1,1435339761,0),(674,1,1,'mod/glossary:approve',1,1435339761,0),(675,1,4,'mod/glossary:rate',1,1435339761,0),(676,1,3,'mod/glossary:rate',1,1435339761,0),(677,1,1,'mod/glossary:rate',1,1435339761,0),(678,1,4,'mod/glossary:viewrating',1,1435339761,0),(679,1,3,'mod/glossary:viewrating',1,1435339761,0),(680,1,1,'mod/glossary:viewrating',1,1435339761,0),(681,1,4,'mod/glossary:viewanyrating',1,1435339761,0),(682,1,3,'mod/glossary:viewanyrating',1,1435339761,0),(683,1,1,'mod/glossary:viewanyrating',1,1435339761,0),(684,1,4,'mod/glossary:viewallratings',1,1435339761,0),(685,1,3,'mod/glossary:viewallratings',1,1435339761,0),(686,1,1,'mod/glossary:viewallratings',1,1435339761,0),(687,1,4,'mod/glossary:exportentry',1,1435339761,0),(688,1,3,'mod/glossary:exportentry',1,1435339761,0),(689,1,1,'mod/glossary:exportentry',1,1435339761,0),(690,1,4,'mod/glossary:exportownentry',1,1435339761,0),(691,1,3,'mod/glossary:exportownentry',1,1435339761,0),(692,1,1,'mod/glossary:exportownentry',1,1435339761,0),(693,1,5,'mod/glossary:exportownentry',1,1435339761,0),(694,1,6,'mod/imscp:view',1,1435339761,0),(695,1,7,'mod/imscp:view',1,1435339761,0),(696,1,3,'mod/imscp:addinstance',1,1435339761,0),(697,1,1,'mod/imscp:addinstance',1,1435339761,0),(698,1,3,'mod/label:addinstance',1,1435339761,0),(699,1,1,'mod/label:addinstance',1,1435339761,0),(700,1,3,'mod/lesson:addinstance',1,1435339762,0),(701,1,1,'mod/lesson:addinstance',1,1435339762,0),(702,1,3,'mod/lesson:edit',1,1435339762,0),(703,1,1,'mod/lesson:edit',1,1435339762,0),(704,1,4,'mod/lesson:grade',1,1435339762,0),(705,1,3,'mod/lesson:grade',1,1435339762,0),(706,1,1,'mod/lesson:grade',1,1435339762,0),(707,1,4,'mod/lesson:manage',1,1435339762,0),(708,1,3,'mod/lesson:manage',1,1435339762,0),(709,1,1,'mod/lesson:manage',1,1435339762,0),(710,1,5,'mod/lti:view',1,1435339762,0),(711,1,4,'mod/lti:view',1,1435339762,0),(712,1,3,'mod/lti:view',1,1435339762,0),(713,1,1,'mod/lti:view',1,1435339762,0),(714,1,3,'mod/lti:addinstance',1,1435339762,0),(715,1,1,'mod/lti:addinstance',1,1435339762,0),(716,1,4,'mod/lti:manage',1,1435339762,0),(717,1,3,'mod/lti:manage',1,1435339762,0),(718,1,1,'mod/lti:manage',1,1435339762,0),(719,1,3,'mod/lti:addcoursetool',1,1435339762,0),(720,1,1,'mod/lti:addcoursetool',1,1435339762,0),(721,1,3,'mod/lti:requesttooladd',1,1435339762,0),(722,1,1,'mod/lti:requesttooladd',1,1435339762,0),(723,1,6,'mod/page:view',1,1435339762,0),(724,1,7,'mod/page:view',1,1435339762,0),(725,1,3,'mod/page:addinstance',1,1435339762,0),(726,1,1,'mod/page:addinstance',1,1435339762,0),(727,1,6,'mod/quiz:view',1,1435339762,0),(728,1,5,'mod/quiz:view',1,1435339762,0),(729,1,4,'mod/quiz:view',1,1435339762,0),(730,1,3,'mod/quiz:view',1,1435339762,0),(731,1,1,'mod/quiz:view',1,1435339762,0),(732,1,3,'mod/quiz:addinstance',1,1435339762,0),(733,1,1,'mod/quiz:addinstance',1,1435339762,0),(734,1,5,'mod/quiz:attempt',1,1435339762,0),(735,1,5,'mod/quiz:reviewmyattempts',1,1435339762,0),(736,1,3,'mod/quiz:manage',1,1435339762,0),(737,1,1,'mod/quiz:manage',1,1435339762,0),(738,1,3,'mod/quiz:manageoverrides',1,1435339762,0),(739,1,1,'mod/quiz:manageoverrides',1,1435339762,0),(740,1,4,'mod/quiz:preview',1,1435339762,0),(741,1,3,'mod/quiz:preview',1,1435339762,0),(742,1,1,'mod/quiz:preview',1,1435339762,0),(743,1,4,'mod/quiz:grade',1,1435339762,0),(744,1,3,'mod/quiz:grade',1,1435339762,0),(745,1,1,'mod/quiz:grade',1,1435339762,0),(746,1,4,'mod/quiz:regrade',1,1435339762,0),(747,1,3,'mod/quiz:regrade',1,1435339762,0),(748,1,1,'mod/quiz:regrade',1,1435339762,0),(749,1,4,'mod/quiz:viewreports',1,1435339762,0),(750,1,3,'mod/quiz:viewreports',1,1435339762,0),(751,1,1,'mod/quiz:viewreports',1,1435339762,0),(752,1,3,'mod/quiz:deleteattempts',1,1435339762,0),(753,1,1,'mod/quiz:deleteattempts',1,1435339762,0),(754,1,6,'mod/resource:view',1,1435339762,0),(755,1,7,'mod/resource:view',1,1435339762,0),(756,1,3,'mod/resource:addinstance',1,1435339762,0),(757,1,1,'mod/resource:addinstance',1,1435339762,0),(758,1,3,'mod/scorm:addinstance',1,1435339762,0),(759,1,1,'mod/scorm:addinstance',1,1435339762,0),(760,1,4,'mod/scorm:viewreport',1,1435339762,0),(761,1,3,'mod/scorm:viewreport',1,1435339762,0),(762,1,1,'mod/scorm:viewreport',1,1435339762,0),(763,1,5,'mod/scorm:skipview',1,1435339762,0),(764,1,5,'mod/scorm:savetrack',1,1435339762,0),(765,1,4,'mod/scorm:savetrack',1,1435339762,0),(766,1,3,'mod/scorm:savetrack',1,1435339763,0),(767,1,1,'mod/scorm:savetrack',1,1435339763,0),(768,1,5,'mod/scorm:viewscores',1,1435339763,0),(769,1,4,'mod/scorm:viewscores',1,1435339763,0),(770,1,3,'mod/scorm:viewscores',1,1435339763,0),(771,1,1,'mod/scorm:viewscores',1,1435339763,0),(772,1,4,'mod/scorm:deleteresponses',1,1435339763,0),(773,1,3,'mod/scorm:deleteresponses',1,1435339763,0),(774,1,1,'mod/scorm:deleteresponses',1,1435339763,0),(775,1,3,'mod/survey:addinstance',1,1435339763,0),(776,1,1,'mod/survey:addinstance',1,1435339763,0),(777,1,5,'mod/survey:participate',1,1435339763,0),(778,1,4,'mod/survey:participate',1,1435339763,0),(779,1,3,'mod/survey:participate',1,1435339763,0),(780,1,1,'mod/survey:participate',1,1435339763,0),(781,1,4,'mod/survey:readresponses',1,1435339763,0),(782,1,3,'mod/survey:readresponses',1,1435339763,0),(783,1,1,'mod/survey:readresponses',1,1435339763,0),(784,1,4,'mod/survey:download',1,1435339763,0),(785,1,3,'mod/survey:download',1,1435339763,0),(786,1,1,'mod/survey:download',1,1435339763,0),(787,1,6,'mod/url:view',1,1435339763,0),(788,1,7,'mod/url:view',1,1435339763,0),(789,1,3,'mod/url:addinstance',1,1435339763,0),(790,1,1,'mod/url:addinstance',1,1435339763,0),(791,1,3,'mod/wiki:addinstance',1,1435339763,0),(792,1,1,'mod/wiki:addinstance',1,1435339763,0),(793,1,6,'mod/wiki:viewpage',1,1435339763,0),(794,1,5,'mod/wiki:viewpage',1,1435339763,0),(795,1,4,'mod/wiki:viewpage',1,1435339763,0),(796,1,3,'mod/wiki:viewpage',1,1435339763,0),(797,1,1,'mod/wiki:viewpage',1,1435339763,0),(798,1,5,'mod/wiki:editpage',1,1435339763,0),(799,1,4,'mod/wiki:editpage',1,1435339763,0),(800,1,3,'mod/wiki:editpage',1,1435339763,0),(801,1,1,'mod/wiki:editpage',1,1435339763,0),(802,1,5,'mod/wiki:createpage',1,1435339763,0),(803,1,4,'mod/wiki:createpage',1,1435339763,0),(804,1,3,'mod/wiki:createpage',1,1435339763,0),(805,1,1,'mod/wiki:createpage',1,1435339763,0),(806,1,5,'mod/wiki:viewcomment',1,1435339763,0),(807,1,4,'mod/wiki:viewcomment',1,1435339763,0),(808,1,3,'mod/wiki:viewcomment',1,1435339763,0),(809,1,1,'mod/wiki:viewcomment',1,1435339763,0),(810,1,5,'mod/wiki:editcomment',1,1435339763,0),(811,1,4,'mod/wiki:editcomment',1,1435339763,0),(812,1,3,'mod/wiki:editcomment',1,1435339763,0),(813,1,1,'mod/wiki:editcomment',1,1435339763,0),(814,1,4,'mod/wiki:managecomment',1,1435339763,0),(815,1,3,'mod/wiki:managecomment',1,1435339763,0),(816,1,1,'mod/wiki:managecomment',1,1435339763,0),(817,1,4,'mod/wiki:managefiles',1,1435339763,0),(818,1,3,'mod/wiki:managefiles',1,1435339763,0),(819,1,1,'mod/wiki:managefiles',1,1435339763,0),(820,1,4,'mod/wiki:overridelock',1,1435339763,0),(821,1,3,'mod/wiki:overridelock',1,1435339763,0),(822,1,1,'mod/wiki:overridelock',1,1435339763,0),(823,1,4,'mod/wiki:managewiki',1,1435339763,0),(824,1,3,'mod/wiki:managewiki',1,1435339763,0),(825,1,1,'mod/wiki:managewiki',1,1435339763,0),(826,1,6,'mod/workshop:view',1,1435339764,0),(827,1,5,'mod/workshop:view',1,1435339764,0),(828,1,4,'mod/workshop:view',1,1435339764,0),(829,1,3,'mod/workshop:view',1,1435339764,0),(830,1,1,'mod/workshop:view',1,1435339764,0),(831,1,3,'mod/workshop:addinstance',1,1435339764,0),(832,1,1,'mod/workshop:addinstance',1,1435339764,0),(833,1,4,'mod/workshop:switchphase',1,1435339764,0),(834,1,3,'mod/workshop:switchphase',1,1435339764,0),(835,1,1,'mod/workshop:switchphase',1,1435339764,0),(836,1,3,'mod/workshop:editdimensions',1,1435339764,0),(837,1,1,'mod/workshop:editdimensions',1,1435339764,0),(838,1,5,'mod/workshop:submit',1,1435339764,0),(839,1,5,'mod/workshop:peerassess',1,1435339764,0),(840,1,4,'mod/workshop:manageexamples',1,1435339764,0),(841,1,3,'mod/workshop:manageexamples',1,1435339764,0),(842,1,1,'mod/workshop:manageexamples',1,1435339764,0),(843,1,4,'mod/workshop:allocate',1,1435339764,0),(844,1,3,'mod/workshop:allocate',1,1435339764,0),(845,1,1,'mod/workshop:allocate',1,1435339764,0),(846,1,4,'mod/workshop:publishsubmissions',1,1435339764,0),(847,1,3,'mod/workshop:publishsubmissions',1,1435339764,0),(848,1,1,'mod/workshop:publishsubmissions',1,1435339764,0),(849,1,5,'mod/workshop:viewauthornames',1,1435339764,0),(850,1,4,'mod/workshop:viewauthornames',1,1435339764,0),(851,1,3,'mod/workshop:viewauthornames',1,1435339764,0),(852,1,1,'mod/workshop:viewauthornames',1,1435339764,0),(853,1,4,'mod/workshop:viewreviewernames',1,1435339764,0),(854,1,3,'mod/workshop:viewreviewernames',1,1435339764,0),(855,1,1,'mod/workshop:viewreviewernames',1,1435339764,0),(856,1,4,'mod/workshop:viewallsubmissions',1,1435339764,0),(857,1,3,'mod/workshop:viewallsubmissions',1,1435339764,0),(858,1,1,'mod/workshop:viewallsubmissions',1,1435339764,0),(859,1,5,'mod/workshop:viewpublishedsubmissions',1,1435339764,0),(860,1,4,'mod/workshop:viewpublishedsubmissions',1,1435339764,0),(861,1,3,'mod/workshop:viewpublishedsubmissions',1,1435339764,0),(862,1,1,'mod/workshop:viewpublishedsubmissions',1,1435339764,0),(863,1,5,'mod/workshop:viewauthorpublished',1,1435339764,0),(864,1,4,'mod/workshop:viewauthorpublished',1,1435339764,0),(865,1,3,'mod/workshop:viewauthorpublished',1,1435339764,0),(866,1,1,'mod/workshop:viewauthorpublished',1,1435339764,0),(867,1,4,'mod/workshop:viewallassessments',1,1435339764,0),(868,1,3,'mod/workshop:viewallassessments',1,1435339764,0),(869,1,1,'mod/workshop:viewallassessments',1,1435339764,0),(870,1,4,'mod/workshop:overridegrades',1,1435339764,0),(871,1,3,'mod/workshop:overridegrades',1,1435339764,0),(872,1,1,'mod/workshop:overridegrades',1,1435339764,0),(873,1,4,'mod/workshop:ignoredeadlines',1,1435339764,0),(874,1,3,'mod/workshop:ignoredeadlines',1,1435339764,0),(875,1,1,'mod/workshop:ignoredeadlines',1,1435339764,0),(876,1,1,'enrol/category:config',1,1435339765,0),(877,1,3,'enrol/category:config',1,1435339765,0),(878,1,3,'enrol/cohort:config',1,1435339765,0),(879,1,1,'enrol/cohort:config',1,1435339765,0),(880,1,1,'enrol/cohort:unenrol',1,1435339765,0),(881,1,1,'enrol/database:unenrol',1,1435339765,0),(882,1,1,'enrol/database:config',1,1435339765,0),(883,1,3,'enrol/database:config',1,1435339765,0),(884,1,1,'enrol/guest:config',1,1435339765,0),(885,1,3,'enrol/guest:config',1,1435339765,0),(886,1,1,'enrol/imsenterprise:config',1,1435339765,0),(887,1,3,'enrol/imsenterprise:config',1,1435339765,0),(888,1,1,'enrol/ldap:manage',1,1435339765,0),(889,1,1,'enrol/manual:config',1,1435339765,0),(890,1,1,'enrol/manual:enrol',1,1435339765,0),(891,1,3,'enrol/manual:enrol',1,1435339765,0),(892,1,1,'enrol/manual:manage',1,1435339765,0),(893,1,3,'enrol/manual:manage',1,1435339765,0),(894,1,1,'enrol/manual:unenrol',1,1435339765,0),(895,1,3,'enrol/manual:unenrol',1,1435339765,0),(896,1,1,'enrol/meta:config',1,1435339765,0),(897,1,3,'enrol/meta:config',1,1435339765,0),(898,1,1,'enrol/meta:selectaslinked',1,1435339765,0),(899,1,1,'enrol/meta:unenrol',1,1435339765,0),(900,1,1,'enrol/mnet:config',1,1435339765,0),(901,1,3,'enrol/mnet:config',1,1435339765,0),(902,1,1,'enrol/paypal:config',1,1435339765,0),(903,1,1,'enrol/paypal:manage',1,1435339765,0),(904,1,3,'enrol/paypal:manage',1,1435339765,0),(905,1,1,'enrol/paypal:unenrol',1,1435339765,0),(906,1,3,'enrol/self:config',1,1435339766,0),(907,1,1,'enrol/self:config',1,1435339766,0),(908,1,3,'enrol/self:manage',1,1435339766,0),(909,1,1,'enrol/self:manage',1,1435339766,0),(910,1,5,'enrol/self:unenrolself',1,1435339766,0),(911,1,3,'enrol/self:unenrol',1,1435339766,0),(912,1,1,'enrol/self:unenrol',1,1435339766,0),(913,1,7,'message/airnotifier:managedevice',1,1435339766,0),(914,1,3,'block/activity_modules:addinstance',1,1435339766,0),(915,1,1,'block/activity_modules:addinstance',1,1435339766,0),(916,1,7,'block/admin_bookmarks:myaddinstance',1,1435339766,0),(917,1,3,'block/admin_bookmarks:addinstance',1,1435339766,0),(918,1,1,'block/admin_bookmarks:addinstance',1,1435339766,0),(919,1,3,'block/badges:addinstance',1,1435339766,0),(920,1,1,'block/badges:addinstance',1,1435339766,0),(921,1,7,'block/badges:myaddinstance',1,1435339766,0),(922,1,3,'block/blog_menu:addinstance',1,1435339766,0),(923,1,1,'block/blog_menu:addinstance',1,1435339766,0),(924,1,3,'block/blog_recent:addinstance',1,1435339767,0),(925,1,1,'block/blog_recent:addinstance',1,1435339767,0),(926,1,3,'block/blog_tags:addinstance',1,1435339767,0),(927,1,1,'block/blog_tags:addinstance',1,1435339767,0),(928,1,7,'block/calendar_month:myaddinstance',1,1435339767,0),(929,1,3,'block/calendar_month:addinstance',1,1435339767,0),(930,1,1,'block/calendar_month:addinstance',1,1435339767,0),(931,1,7,'block/calendar_upcoming:myaddinstance',1,1435339767,0),(932,1,3,'block/calendar_upcoming:addinstance',1,1435339767,0),(933,1,1,'block/calendar_upcoming:addinstance',1,1435339767,0),(934,1,7,'block/comments:myaddinstance',1,1435339767,0),(935,1,3,'block/comments:addinstance',1,1435339767,0),(936,1,1,'block/comments:addinstance',1,1435339767,0),(937,1,7,'block/community:myaddinstance',1,1435339767,0),(938,1,3,'block/community:addinstance',1,1435339767,0),(939,1,1,'block/community:addinstance',1,1435339767,0),(940,1,3,'block/completionstatus:addinstance',1,1435339767,0),(941,1,1,'block/completionstatus:addinstance',1,1435339767,0),(942,1,7,'block/course_list:myaddinstance',1,1435339767,0),(943,1,3,'block/course_list:addinstance',1,1435339767,0),(944,1,1,'block/course_list:addinstance',1,1435339767,0),(945,1,7,'block/course_overview:myaddinstance',1,1435339767,0),(946,1,3,'block/course_overview:addinstance',1,1435339767,0),(947,1,1,'block/course_overview:addinstance',1,1435339767,0),(948,1,3,'block/course_summary:addinstance',1,1435339767,0),(949,1,1,'block/course_summary:addinstance',1,1435339767,0),(950,1,3,'block/feedback:addinstance',1,1435339767,0),(951,1,1,'block/feedback:addinstance',1,1435339767,0),(952,1,7,'block/glossary_random:myaddinstance',1,1435339767,0),(953,1,3,'block/glossary_random:addinstance',1,1435339767,0),(954,1,1,'block/glossary_random:addinstance',1,1435339767,0),(955,1,7,'block/html:myaddinstance',1,1435339767,0),(956,1,3,'block/html:addinstance',1,1435339767,0),(957,1,1,'block/html:addinstance',1,1435339767,0),(958,1,3,'block/login:addinstance',1,1435339767,0),(959,1,1,'block/login:addinstance',1,1435339767,0),(960,1,7,'block/mentees:myaddinstance',1,1435339767,0),(961,1,3,'block/mentees:addinstance',1,1435339767,0),(962,1,1,'block/mentees:addinstance',1,1435339767,0),(963,1,7,'block/messages:myaddinstance',1,1435339767,0),(964,1,3,'block/messages:addinstance',1,1435339767,0),(965,1,1,'block/messages:addinstance',1,1435339767,0),(966,1,7,'block/mnet_hosts:myaddinstance',1,1435339767,0),(967,1,3,'block/mnet_hosts:addinstance',1,1435339767,0),(968,1,1,'block/mnet_hosts:addinstance',1,1435339767,0),(969,1,7,'block/myprofile:myaddinstance',1,1435339768,0),(970,1,3,'block/myprofile:addinstance',1,1435339768,0),(971,1,1,'block/myprofile:addinstance',1,1435339768,0),(972,1,7,'block/navigation:myaddinstance',1,1435339768,0),(973,1,3,'block/navigation:addinstance',1,1435339768,0),(974,1,1,'block/navigation:addinstance',1,1435339768,0),(975,1,7,'block/news_items:myaddinstance',1,1435339768,0),(976,1,3,'block/news_items:addinstance',1,1435339768,0),(977,1,1,'block/news_items:addinstance',1,1435339768,0),(978,1,7,'block/online_users:myaddinstance',1,1435339768,0),(979,1,3,'block/online_users:addinstance',1,1435339768,0),(980,1,1,'block/online_users:addinstance',1,1435339768,0),(981,1,7,'block/online_users:viewlist',1,1435339768,0),(982,1,6,'block/online_users:viewlist',1,1435339768,0),(983,1,5,'block/online_users:viewlist',1,1435339768,0),(984,1,4,'block/online_users:viewlist',1,1435339768,0),(985,1,3,'block/online_users:viewlist',1,1435339768,0),(986,1,1,'block/online_users:viewlist',1,1435339768,0),(987,1,3,'block/participants:addinstance',1,1435339768,0),(988,1,1,'block/participants:addinstance',1,1435339768,0),(989,1,7,'block/private_files:myaddinstance',1,1435339768,0),(990,1,3,'block/private_files:addinstance',1,1435339768,0),(991,1,1,'block/private_files:addinstance',1,1435339768,0),(992,1,3,'block/quiz_results:addinstance',1,1435339768,0),(993,1,1,'block/quiz_results:addinstance',1,1435339768,0),(994,1,3,'block/recent_activity:addinstance',1,1435339768,0),(995,1,1,'block/recent_activity:addinstance',1,1435339768,0),(996,1,7,'block/recent_activity:viewaddupdatemodule',1,1435339768,0),(997,1,7,'block/recent_activity:viewdeletemodule',1,1435339768,0),(998,1,7,'block/rss_client:myaddinstance',1,1435339768,0),(999,1,3,'block/rss_client:addinstance',1,1435339768,0),(1000,1,1,'block/rss_client:addinstance',1,1435339768,0),(1001,1,4,'block/rss_client:manageownfeeds',1,1435339768,0),(1002,1,3,'block/rss_client:manageownfeeds',1,1435339768,0),(1003,1,1,'block/rss_client:manageownfeeds',1,1435339768,0),(1004,1,1,'block/rss_client:manageanyfeeds',1,1435339768,0),(1005,1,3,'block/search_forums:addinstance',1,1435339768,0),(1006,1,1,'block/search_forums:addinstance',1,1435339768,0),(1007,1,3,'block/section_links:addinstance',1,1435339768,0),(1008,1,1,'block/section_links:addinstance',1,1435339768,0),(1009,1,3,'block/selfcompletion:addinstance',1,1435339768,0),(1010,1,1,'block/selfcompletion:addinstance',1,1435339768,0),(1011,1,7,'block/settings:myaddinstance',1,1435339768,0),(1012,1,3,'block/settings:addinstance',1,1435339768,0),(1013,1,1,'block/settings:addinstance',1,1435339768,0),(1014,1,3,'block/site_main_menu:addinstance',1,1435339768,0),(1015,1,1,'block/site_main_menu:addinstance',1,1435339768,0),(1016,1,3,'block/social_activities:addinstance',1,1435339768,0),(1017,1,1,'block/social_activities:addinstance',1,1435339768,0),(1018,1,3,'block/tag_flickr:addinstance',1,1435339769,0),(1019,1,1,'block/tag_flickr:addinstance',1,1435339769,0),(1020,1,3,'block/tag_youtube:addinstance',1,1435339769,0),(1021,1,1,'block/tag_youtube:addinstance',1,1435339769,0),(1022,1,7,'block/tags:myaddinstance',1,1435339769,0),(1023,1,3,'block/tags:addinstance',1,1435339769,0),(1024,1,1,'block/tags:addinstance',1,1435339769,0),(1025,1,4,'report/completion:view',1,1435339770,0),(1026,1,3,'report/completion:view',1,1435339770,0),(1027,1,1,'report/completion:view',1,1435339770,0),(1028,1,4,'report/courseoverview:view',1,1435339770,0),(1029,1,3,'report/courseoverview:view',1,1435339770,0),(1030,1,1,'report/courseoverview:view',1,1435339770,0),(1031,1,4,'report/log:view',1,1435339770,0),(1032,1,3,'report/log:view',1,1435339770,0),(1033,1,1,'report/log:view',1,1435339770,0),(1034,1,4,'report/log:viewtoday',1,1435339770,0),(1035,1,3,'report/log:viewtoday',1,1435339770,0),(1036,1,1,'report/log:viewtoday',1,1435339770,0),(1037,1,4,'report/loglive:view',1,1435339770,0),(1038,1,3,'report/loglive:view',1,1435339770,0),(1039,1,1,'report/loglive:view',1,1435339770,0),(1040,1,4,'report/outline:view',1,1435339770,0),(1041,1,3,'report/outline:view',1,1435339770,0),(1042,1,1,'report/outline:view',1,1435339770,0),(1043,1,4,'report/participation:view',1,1435339771,0),(1044,1,3,'report/participation:view',1,1435339771,0),(1045,1,1,'report/participation:view',1,1435339771,0),(1046,1,1,'report/performance:view',1,1435339771,0),(1047,1,4,'report/progress:view',1,1435339771,0),(1048,1,3,'report/progress:view',1,1435339771,0),(1049,1,1,'report/progress:view',1,1435339771,0),(1050,1,1,'report/security:view',1,1435339771,0),(1051,1,4,'report/stats:view',1,1435339771,0),(1052,1,3,'report/stats:view',1,1435339771,0),(1053,1,1,'report/stats:view',1,1435339771,0),(1054,1,4,'gradeexport/ods:view',1,1435339771,0),(1055,1,3,'gradeexport/ods:view',1,1435339771,0),(1056,1,1,'gradeexport/ods:view',1,1435339771,0),(1057,1,1,'gradeexport/ods:publish',1,1435339771,0),(1058,1,4,'gradeexport/txt:view',1,1435339771,0),(1059,1,3,'gradeexport/txt:view',1,1435339771,0),(1060,1,1,'gradeexport/txt:view',1,1435339771,0),(1061,1,1,'gradeexport/txt:publish',1,1435339771,0),(1062,1,4,'gradeexport/xls:view',1,1435339771,0),(1063,1,3,'gradeexport/xls:view',1,1435339771,0),(1064,1,1,'gradeexport/xls:view',1,1435339771,0),(1065,1,1,'gradeexport/xls:publish',1,1435339771,0),(1066,1,4,'gradeexport/xml:view',1,1435339771,0),(1067,1,3,'gradeexport/xml:view',1,1435339771,0),(1068,1,1,'gradeexport/xml:view',1,1435339771,0),(1069,1,1,'gradeexport/xml:publish',1,1435339771,0),(1070,1,3,'gradeimport/csv:view',1,1435339771,0),(1071,1,1,'gradeimport/csv:view',1,1435339771,0),(1072,1,3,'gradeimport/direct:view',1,1435339771,0),(1073,1,1,'gradeimport/direct:view',1,1435339771,0),(1074,1,3,'gradeimport/xml:view',1,1435339771,0),(1075,1,1,'gradeimport/xml:view',1,1435339771,0),(1076,1,1,'gradeimport/xml:publish',1,1435339771,0),(1077,1,4,'gradereport/grader:view',1,1435339771,0),(1078,1,3,'gradereport/grader:view',1,1435339771,0),(1079,1,1,'gradereport/grader:view',1,1435339771,0),(1080,1,4,'gradereport/history:view',1,1435339771,0),(1081,1,3,'gradereport/history:view',1,1435339771,0),(1082,1,1,'gradereport/history:view',1,1435339771,0),(1083,1,4,'gradereport/outcomes:view',1,1435339771,0),(1084,1,3,'gradereport/outcomes:view',1,1435339771,0),(1085,1,1,'gradereport/outcomes:view',1,1435339771,0),(1086,1,5,'gradereport/overview:view',1,1435339771,0),(1087,1,1,'gradereport/overview:view',1,1435339771,0),(1088,1,3,'gradereport/singleview:view',1,1435339771,0),(1089,1,1,'gradereport/singleview:view',1,1435339771,0),(1090,1,5,'gradereport/user:view',1,1435339772,0),(1091,1,4,'gradereport/user:view',1,1435339772,0),(1092,1,3,'gradereport/user:view',1,1435339772,0),(1093,1,1,'gradereport/user:view',1,1435339772,0),(1094,1,7,'repository/alfresco:view',1,1435339772,0),(1095,1,7,'repository/areafiles:view',1,1435339772,0),(1096,1,7,'repository/boxnet:view',1,1435339772,0),(1097,1,2,'repository/coursefiles:view',1,1435339772,0),(1098,1,4,'repository/coursefiles:view',1,1435339772,0),(1099,1,3,'repository/coursefiles:view',1,1435339772,0),(1100,1,1,'repository/coursefiles:view',1,1435339772,0),(1101,1,7,'repository/dropbox:view',1,1435339772,0),(1102,1,7,'repository/equella:view',1,1435339772,0),(1103,1,2,'repository/filesystem:view',1,1435339772,0),(1104,1,4,'repository/filesystem:view',1,1435339772,0),(1105,1,3,'repository/filesystem:view',1,1435339772,0),(1106,1,1,'repository/filesystem:view',1,1435339772,0),(1107,1,7,'repository/flickr:view',1,1435339772,0),(1108,1,7,'repository/flickr_public:view',1,1435339772,0),(1109,1,7,'repository/googledocs:view',1,1435339772,0),(1110,1,2,'repository/local:view',1,1435339773,0),(1111,1,4,'repository/local:view',1,1435339773,0),(1112,1,3,'repository/local:view',1,1435339773,0),(1113,1,1,'repository/local:view',1,1435339773,0),(1114,1,7,'repository/merlot:view',1,1435339773,0),(1115,1,7,'repository/picasa:view',1,1435339773,0),(1116,1,7,'repository/recent:view',1,1435339773,0),(1117,1,7,'repository/s3:view',1,1435339773,0),(1118,1,7,'repository/skydrive:view',1,1435339773,0),(1119,1,7,'repository/upload:view',1,1435339773,0),(1120,1,7,'repository/url:view',1,1435339773,0),(1121,1,7,'repository/user:view',1,1435339773,0),(1122,1,2,'repository/webdav:view',1,1435339773,0),(1123,1,4,'repository/webdav:view',1,1435339773,0),(1124,1,3,'repository/webdav:view',1,1435339773,0),(1125,1,1,'repository/webdav:view',1,1435339773,0),(1126,1,7,'repository/wikimedia:view',1,1435339773,0),(1127,1,7,'repository/youtube:view',1,1435339773,0),(1128,1,1,'tool/customlang:view',1,1435339774,0),(1129,1,1,'tool/customlang:edit',1,1435339774,0),(1130,1,4,'tool/monitor:subscribe',1,1435339775,0),(1131,1,3,'tool/monitor:subscribe',1,1435339775,0),(1132,1,1,'tool/monitor:subscribe',1,1435339775,0),(1133,1,4,'tool/monitor:managerules',1,1435339775,0),(1134,1,3,'tool/monitor:managerules',1,1435339775,0),(1135,1,1,'tool/monitor:managerules',1,1435339775,0),(1136,1,1,'tool/monitor:managetool',1,1435339775,0),(1137,1,1,'tool/uploaduser:uploaduserpictures',1,1435339776,0),(1138,1,3,'booktool/importhtml:import',1,1435339777,0),(1139,1,1,'booktool/importhtml:import',1,1435339777,0),(1140,1,6,'booktool/print:print',1,1435339777,0),(1141,1,8,'booktool/print:print',1,1435339777,0),(1142,1,5,'booktool/print:print',1,1435339777,0),(1143,1,4,'booktool/print:print',1,1435339777,0),(1144,1,3,'booktool/print:print',1,1435339777,0),(1145,1,1,'booktool/print:print',1,1435339777,0),(1146,1,4,'quiz/grading:viewstudentnames',1,1435339777,0),(1147,1,3,'quiz/grading:viewstudentnames',1,1435339777,0),(1148,1,1,'quiz/grading:viewstudentnames',1,1435339777,0),(1149,1,4,'quiz/grading:viewidnumber',1,1435339777,0),(1150,1,3,'quiz/grading:viewidnumber',1,1435339777,0),(1151,1,1,'quiz/grading:viewidnumber',1,1435339777,0),(1152,1,4,'quiz/statistics:view',1,1435339777,0),(1153,1,3,'quiz/statistics:view',1,1435339777,0),(1154,1,1,'quiz/statistics:view',1,1435339777,0),(1155,1,7,'block/mnv_courseenrollment:myaddinstance',1,1439408664,2),(1156,1,3,'block/mnv_courseenrollment:addinstance',1,1439408664,2),(1157,1,1,'block/mnv_courseenrollment:addinstance',1,1439408664,2),(1158,1,7,'block/mnv_gradereturn:myaddinstance',1,1443029459,2),(1159,1,3,'block/mnv_gradereturn:addinstance',1,1443029459,2),(1160,1,1,'block/mnv_gradereturn:addinstance',1,1443029459,2);
/*!40000 ALTER TABLE `mdl_role_capabilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_role_context_levels`
--

DROP TABLE IF EXISTS `mdl_role_context_levels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_role_context_levels` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `roleid` bigint(10) NOT NULL,
  `contextlevel` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_rolecontleve_conrol_uix` (`contextlevel`,`roleid`),
  KEY `mdl_rolecontleve_rol_ix` (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='Lists which roles can be assigned at which context levels. T';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_role_context_levels`
--

LOCK TABLES `mdl_role_context_levels` WRITE;
/*!40000 ALTER TABLE `mdl_role_context_levels` DISABLE KEYS */;
INSERT INTO `mdl_role_context_levels` VALUES (1,1,10),(4,2,10),(2,1,40),(5,2,40),(3,1,50),(6,3,50),(8,4,50),(10,5,50),(7,3,70),(9,4,70),(11,5,70);
/*!40000 ALTER TABLE `mdl_role_context_levels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_role_names`
--

DROP TABLE IF EXISTS `mdl_role_names`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_role_names` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `roleid` bigint(10) NOT NULL DEFAULT '0',
  `contextid` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_rolename_rolcon_uix` (`roleid`,`contextid`),
  KEY `mdl_rolename_rol_ix` (`roleid`),
  KEY `mdl_rolename_con_ix` (`contextid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='role names in native strings';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_role_names`
--

LOCK TABLES `mdl_role_names` WRITE;
/*!40000 ALTER TABLE `mdl_role_names` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_role_names` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_role_sortorder`
--

DROP TABLE IF EXISTS `mdl_role_sortorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_role_sortorder` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL,
  `roleid` bigint(10) NOT NULL,
  `contextid` bigint(10) NOT NULL,
  `sortoder` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_rolesort_userolcon_uix` (`userid`,`roleid`,`contextid`),
  KEY `mdl_rolesort_use_ix` (`userid`),
  KEY `mdl_rolesort_rol_ix` (`roleid`),
  KEY `mdl_rolesort_con_ix` (`contextid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='sort order of course managers in a course';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_role_sortorder`
--

LOCK TABLES `mdl_role_sortorder` WRITE;
/*!40000 ALTER TABLE `mdl_role_sortorder` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_role_sortorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scale`
--

DROP TABLE IF EXISTS `mdl_scale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scale` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `scale` longtext NOT NULL,
  `description` longtext NOT NULL,
  `descriptionformat` tinyint(2) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_scal_cou_ix` (`courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Defines grading scales';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scale`
--

LOCK TABLES `mdl_scale` WRITE;
/*!40000 ALTER TABLE `mdl_scale` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scale_history`
--

DROP TABLE IF EXISTS `mdl_scale_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scale_history` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `action` bigint(10) NOT NULL DEFAULT '0',
  `oldid` bigint(10) NOT NULL,
  `source` varchar(255) DEFAULT NULL,
  `timemodified` bigint(10) DEFAULT NULL,
  `loggeduser` bigint(10) DEFAULT NULL,
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `scale` longtext NOT NULL,
  `description` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_scalhist_act_ix` (`action`),
  KEY `mdl_scalhist_old_ix` (`oldid`),
  KEY `mdl_scalhist_cou_ix` (`courseid`),
  KEY `mdl_scalhist_log_ix` (`loggeduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='History table';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scale_history`
--

LOCK TABLES `mdl_scale_history` WRITE;
/*!40000 ALTER TABLE `mdl_scale_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scale_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scorm`
--

DROP TABLE IF EXISTS `mdl_scorm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scorm` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `scormtype` varchar(50) NOT NULL DEFAULT 'local',
  `reference` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext NOT NULL,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `version` varchar(9) NOT NULL DEFAULT '',
  `maxgrade` double NOT NULL DEFAULT '0',
  `grademethod` tinyint(2) NOT NULL DEFAULT '0',
  `whatgrade` bigint(10) NOT NULL DEFAULT '0',
  `maxattempt` bigint(10) NOT NULL DEFAULT '1',
  `forcecompleted` tinyint(1) NOT NULL DEFAULT '1',
  `forcenewattempt` tinyint(1) NOT NULL DEFAULT '0',
  `lastattemptlock` tinyint(1) NOT NULL DEFAULT '0',
  `displayattemptstatus` tinyint(1) NOT NULL DEFAULT '1',
  `displaycoursestructure` tinyint(1) NOT NULL DEFAULT '1',
  `updatefreq` tinyint(1) NOT NULL DEFAULT '0',
  `sha1hash` varchar(40) DEFAULT NULL,
  `md5hash` varchar(32) NOT NULL DEFAULT '',
  `revision` bigint(10) NOT NULL DEFAULT '0',
  `launch` bigint(10) NOT NULL DEFAULT '0',
  `skipview` tinyint(1) NOT NULL DEFAULT '1',
  `hidebrowse` tinyint(1) NOT NULL DEFAULT '0',
  `hidetoc` tinyint(1) NOT NULL DEFAULT '0',
  `nav` tinyint(1) NOT NULL DEFAULT '1',
  `navpositionleft` bigint(10) DEFAULT '-100',
  `navpositiontop` bigint(10) DEFAULT '-100',
  `auto` tinyint(1) NOT NULL DEFAULT '0',
  `popup` tinyint(1) NOT NULL DEFAULT '0',
  `options` varchar(255) NOT NULL DEFAULT '',
  `width` bigint(10) NOT NULL DEFAULT '100',
  `height` bigint(10) NOT NULL DEFAULT '600',
  `timeopen` bigint(10) NOT NULL DEFAULT '0',
  `timeclose` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `completionstatusrequired` tinyint(1) DEFAULT NULL,
  `completionscorerequired` tinyint(2) DEFAULT NULL,
  `displayactivityname` smallint(4) NOT NULL DEFAULT '1',
  `autocommit` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_scor_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='each table is one SCORM module and its configuration';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scorm`
--

LOCK TABLES `mdl_scorm` WRITE;
/*!40000 ALTER TABLE `mdl_scorm` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scorm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scorm_aicc_session`
--

DROP TABLE IF EXISTS `mdl_scorm_aicc_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scorm_aicc_session` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `scormid` bigint(10) NOT NULL DEFAULT '0',
  `hacpsession` varchar(255) NOT NULL DEFAULT '',
  `scoid` bigint(10) DEFAULT '0',
  `scormmode` varchar(50) DEFAULT NULL,
  `scormstatus` varchar(255) DEFAULT NULL,
  `attempt` bigint(10) DEFAULT NULL,
  `lessonstatus` varchar(255) DEFAULT NULL,
  `sessiontime` varchar(255) DEFAULT NULL,
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_scoraiccsess_sco_ix` (`scormid`),
  KEY `mdl_scoraiccsess_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Used by AICC HACP to store session information';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scorm_aicc_session`
--

LOCK TABLES `mdl_scorm_aicc_session` WRITE;
/*!40000 ALTER TABLE `mdl_scorm_aicc_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scorm_aicc_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scorm_scoes`
--

DROP TABLE IF EXISTS `mdl_scorm_scoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scorm_scoes` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `scorm` bigint(10) NOT NULL DEFAULT '0',
  `manifest` varchar(255) NOT NULL DEFAULT '',
  `organization` varchar(255) NOT NULL DEFAULT '',
  `parent` varchar(255) NOT NULL DEFAULT '',
  `identifier` varchar(255) NOT NULL DEFAULT '',
  `launch` longtext NOT NULL,
  `scormtype` varchar(5) NOT NULL DEFAULT '',
  `title` varchar(255) NOT NULL DEFAULT '',
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_scorscoe_sco_ix` (`scorm`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='each SCO part of the SCORM module';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scorm_scoes`
--

LOCK TABLES `mdl_scorm_scoes` WRITE;
/*!40000 ALTER TABLE `mdl_scorm_scoes` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scorm_scoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scorm_scoes_data`
--

DROP TABLE IF EXISTS `mdl_scorm_scoes_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scorm_scoes_data` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `scoid` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `value` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_scorscoedata_sco_ix` (`scoid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains variable data get from packages';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scorm_scoes_data`
--

LOCK TABLES `mdl_scorm_scoes_data` WRITE;
/*!40000 ALTER TABLE `mdl_scorm_scoes_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scorm_scoes_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scorm_scoes_track`
--

DROP TABLE IF EXISTS `mdl_scorm_scoes_track`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scorm_scoes_track` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `scormid` bigint(10) NOT NULL DEFAULT '0',
  `scoid` bigint(10) NOT NULL DEFAULT '0',
  `attempt` bigint(10) NOT NULL DEFAULT '1',
  `element` varchar(255) NOT NULL DEFAULT '',
  `value` longtext NOT NULL,
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_scorscoetrac_usescosco_uix` (`userid`,`scormid`,`scoid`,`attempt`,`element`),
  KEY `mdl_scorscoetrac_use_ix` (`userid`),
  KEY `mdl_scorscoetrac_ele_ix` (`element`),
  KEY `mdl_scorscoetrac_sco_ix` (`scormid`),
  KEY `mdl_scorscoetrac_sco2_ix` (`scoid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='to track SCOes';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scorm_scoes_track`
--

LOCK TABLES `mdl_scorm_scoes_track` WRITE;
/*!40000 ALTER TABLE `mdl_scorm_scoes_track` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scorm_scoes_track` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scorm_seq_mapinfo`
--

DROP TABLE IF EXISTS `mdl_scorm_seq_mapinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scorm_seq_mapinfo` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `scoid` bigint(10) NOT NULL DEFAULT '0',
  `objectiveid` bigint(10) NOT NULL DEFAULT '0',
  `targetobjectiveid` bigint(10) NOT NULL DEFAULT '0',
  `readsatisfiedstatus` tinyint(1) NOT NULL DEFAULT '1',
  `readnormalizedmeasure` tinyint(1) NOT NULL DEFAULT '1',
  `writesatisfiedstatus` tinyint(1) NOT NULL DEFAULT '0',
  `writenormalizedmeasure` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_scorseqmapi_scoidobj_uix` (`scoid`,`id`,`objectiveid`),
  KEY `mdl_scorseqmapi_sco_ix` (`scoid`),
  KEY `mdl_scorseqmapi_obj_ix` (`objectiveid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='SCORM2004 objective mapinfo description';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scorm_seq_mapinfo`
--

LOCK TABLES `mdl_scorm_seq_mapinfo` WRITE;
/*!40000 ALTER TABLE `mdl_scorm_seq_mapinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scorm_seq_mapinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scorm_seq_objective`
--

DROP TABLE IF EXISTS `mdl_scorm_seq_objective`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scorm_seq_objective` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `scoid` bigint(10) NOT NULL DEFAULT '0',
  `primaryobj` tinyint(1) NOT NULL DEFAULT '0',
  `objectiveid` varchar(255) NOT NULL DEFAULT '',
  `satisfiedbymeasure` tinyint(1) NOT NULL DEFAULT '1',
  `minnormalizedmeasure` float(11,4) NOT NULL DEFAULT '0.0000',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_scorseqobje_scoid_uix` (`scoid`,`id`),
  KEY `mdl_scorseqobje_sco_ix` (`scoid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='SCORM2004 objective description';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scorm_seq_objective`
--

LOCK TABLES `mdl_scorm_seq_objective` WRITE;
/*!40000 ALTER TABLE `mdl_scorm_seq_objective` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scorm_seq_objective` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scorm_seq_rolluprule`
--

DROP TABLE IF EXISTS `mdl_scorm_seq_rolluprule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scorm_seq_rolluprule` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `scoid` bigint(10) NOT NULL DEFAULT '0',
  `childactivityset` varchar(15) NOT NULL DEFAULT '',
  `minimumcount` bigint(10) NOT NULL DEFAULT '0',
  `minimumpercent` float(11,4) NOT NULL DEFAULT '0.0000',
  `conditioncombination` varchar(3) NOT NULL DEFAULT 'all',
  `action` varchar(15) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_scorseqroll_scoid_uix` (`scoid`,`id`),
  KEY `mdl_scorseqroll_sco_ix` (`scoid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='SCORM2004 sequencing rule';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scorm_seq_rolluprule`
--

LOCK TABLES `mdl_scorm_seq_rolluprule` WRITE;
/*!40000 ALTER TABLE `mdl_scorm_seq_rolluprule` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scorm_seq_rolluprule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scorm_seq_rolluprulecond`
--

DROP TABLE IF EXISTS `mdl_scorm_seq_rolluprulecond`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scorm_seq_rolluprulecond` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `scoid` bigint(10) NOT NULL DEFAULT '0',
  `rollupruleid` bigint(10) NOT NULL DEFAULT '0',
  `operator` varchar(5) NOT NULL DEFAULT 'noOp',
  `cond` varchar(25) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_scorseqroll_scorolid_uix` (`scoid`,`rollupruleid`,`id`),
  KEY `mdl_scorseqroll_sco2_ix` (`scoid`),
  KEY `mdl_scorseqroll_rol_ix` (`rollupruleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='SCORM2004 sequencing rule';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scorm_seq_rolluprulecond`
--

LOCK TABLES `mdl_scorm_seq_rolluprulecond` WRITE;
/*!40000 ALTER TABLE `mdl_scorm_seq_rolluprulecond` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scorm_seq_rolluprulecond` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scorm_seq_rulecond`
--

DROP TABLE IF EXISTS `mdl_scorm_seq_rulecond`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scorm_seq_rulecond` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `scoid` bigint(10) NOT NULL DEFAULT '0',
  `ruleconditionsid` bigint(10) NOT NULL DEFAULT '0',
  `refrencedobjective` varchar(255) NOT NULL DEFAULT '',
  `measurethreshold` float(11,4) NOT NULL DEFAULT '0.0000',
  `operator` varchar(5) NOT NULL DEFAULT 'noOp',
  `cond` varchar(30) NOT NULL DEFAULT 'always',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_scorseqrule_idscorul_uix` (`id`,`scoid`,`ruleconditionsid`),
  KEY `mdl_scorseqrule_sco2_ix` (`scoid`),
  KEY `mdl_scorseqrule_rul_ix` (`ruleconditionsid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='SCORM2004 rule condition';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scorm_seq_rulecond`
--

LOCK TABLES `mdl_scorm_seq_rulecond` WRITE;
/*!40000 ALTER TABLE `mdl_scorm_seq_rulecond` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scorm_seq_rulecond` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_scorm_seq_ruleconds`
--

DROP TABLE IF EXISTS `mdl_scorm_seq_ruleconds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_scorm_seq_ruleconds` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `scoid` bigint(10) NOT NULL DEFAULT '0',
  `conditioncombination` varchar(3) NOT NULL DEFAULT 'all',
  `ruletype` tinyint(2) NOT NULL DEFAULT '0',
  `action` varchar(25) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_scorseqrule_scoid_uix` (`scoid`,`id`),
  KEY `mdl_scorseqrule_sco_ix` (`scoid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='SCORM2004 rule conditions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_scorm_seq_ruleconds`
--

LOCK TABLES `mdl_scorm_seq_ruleconds` WRITE;
/*!40000 ALTER TABLE `mdl_scorm_seq_ruleconds` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_scorm_seq_ruleconds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_sessions`
--

DROP TABLE IF EXISTS `mdl_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_sessions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `state` bigint(10) NOT NULL DEFAULT '0',
  `sid` varchar(128) NOT NULL DEFAULT '',
  `userid` bigint(10) NOT NULL,
  `sessdata` longtext,
  `timecreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  `firstip` varchar(45) DEFAULT NULL,
  `lastip` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_sess_sid_uix` (`sid`),
  KEY `mdl_sess_sta_ix` (`state`),
  KEY `mdl_sess_tim_ix` (`timecreated`),
  KEY `mdl_sess_tim2_ix` (`timemodified`),
  KEY `mdl_sess_use_ix` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='Database based session storage - now recommended';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_sessions`
--

LOCK TABLES `mdl_sessions` WRITE;
/*!40000 ALTER TABLE `mdl_sessions` DISABLE KEYS */;
INSERT INTO `mdl_sessions` VALUES (2,0,'jkt4kd9po0ha4032572cjneef0',2,NULL,1435340364,1435340618,'172.20.0.1','172.20.0.1'),(5,0,'81hklbhbcftf3oqvrcndkqvtl1',0,NULL,1439408739,1439408744,'172.20.0.1','172.20.0.1'),(8,0,'mlpar49anspb723uieet7rpjr2',0,NULL,1443029476,1443029476,'172.20.0.1','172.20.0.1');
/*!40000 ALTER TABLE `mdl_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_stats_daily`
--

DROP TABLE IF EXISTS `mdl_stats_daily`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_stats_daily` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `timeend` bigint(10) NOT NULL DEFAULT '0',
  `roleid` bigint(10) NOT NULL DEFAULT '0',
  `stattype` varchar(20) NOT NULL DEFAULT 'activity',
  `stat1` bigint(10) NOT NULL DEFAULT '0',
  `stat2` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_statdail_cou_ix` (`courseid`),
  KEY `mdl_statdail_tim_ix` (`timeend`),
  KEY `mdl_statdail_rol_ix` (`roleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='to accumulate daily stats';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_stats_daily`
--

LOCK TABLES `mdl_stats_daily` WRITE;
/*!40000 ALTER TABLE `mdl_stats_daily` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_stats_daily` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_stats_monthly`
--

DROP TABLE IF EXISTS `mdl_stats_monthly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_stats_monthly` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `timeend` bigint(10) NOT NULL DEFAULT '0',
  `roleid` bigint(10) NOT NULL DEFAULT '0',
  `stattype` varchar(20) NOT NULL DEFAULT 'activity',
  `stat1` bigint(10) NOT NULL DEFAULT '0',
  `stat2` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_statmont_cou_ix` (`courseid`),
  KEY `mdl_statmont_tim_ix` (`timeend`),
  KEY `mdl_statmont_rol_ix` (`roleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='To accumulate monthly stats';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_stats_monthly`
--

LOCK TABLES `mdl_stats_monthly` WRITE;
/*!40000 ALTER TABLE `mdl_stats_monthly` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_stats_monthly` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_stats_user_daily`
--

DROP TABLE IF EXISTS `mdl_stats_user_daily`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_stats_user_daily` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `roleid` bigint(10) NOT NULL DEFAULT '0',
  `timeend` bigint(10) NOT NULL DEFAULT '0',
  `statsreads` bigint(10) NOT NULL DEFAULT '0',
  `statswrites` bigint(10) NOT NULL DEFAULT '0',
  `stattype` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_statuserdail_cou_ix` (`courseid`),
  KEY `mdl_statuserdail_use_ix` (`userid`),
  KEY `mdl_statuserdail_rol_ix` (`roleid`),
  KEY `mdl_statuserdail_tim_ix` (`timeend`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='To accumulate daily stats per course/user';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_stats_user_daily`
--

LOCK TABLES `mdl_stats_user_daily` WRITE;
/*!40000 ALTER TABLE `mdl_stats_user_daily` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_stats_user_daily` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_stats_user_monthly`
--

DROP TABLE IF EXISTS `mdl_stats_user_monthly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_stats_user_monthly` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `roleid` bigint(10) NOT NULL DEFAULT '0',
  `timeend` bigint(10) NOT NULL DEFAULT '0',
  `statsreads` bigint(10) NOT NULL DEFAULT '0',
  `statswrites` bigint(10) NOT NULL DEFAULT '0',
  `stattype` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_statusermont_cou_ix` (`courseid`),
  KEY `mdl_statusermont_use_ix` (`userid`),
  KEY `mdl_statusermont_rol_ix` (`roleid`),
  KEY `mdl_statusermont_tim_ix` (`timeend`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='To accumulate monthly stats per course/user';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_stats_user_monthly`
--

LOCK TABLES `mdl_stats_user_monthly` WRITE;
/*!40000 ALTER TABLE `mdl_stats_user_monthly` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_stats_user_monthly` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_stats_user_weekly`
--

DROP TABLE IF EXISTS `mdl_stats_user_weekly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_stats_user_weekly` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `roleid` bigint(10) NOT NULL DEFAULT '0',
  `timeend` bigint(10) NOT NULL DEFAULT '0',
  `statsreads` bigint(10) NOT NULL DEFAULT '0',
  `statswrites` bigint(10) NOT NULL DEFAULT '0',
  `stattype` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_statuserweek_cou_ix` (`courseid`),
  KEY `mdl_statuserweek_use_ix` (`userid`),
  KEY `mdl_statuserweek_rol_ix` (`roleid`),
  KEY `mdl_statuserweek_tim_ix` (`timeend`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='To accumulate weekly stats per course/user';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_stats_user_weekly`
--

LOCK TABLES `mdl_stats_user_weekly` WRITE;
/*!40000 ALTER TABLE `mdl_stats_user_weekly` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_stats_user_weekly` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_stats_weekly`
--

DROP TABLE IF EXISTS `mdl_stats_weekly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_stats_weekly` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `timeend` bigint(10) NOT NULL DEFAULT '0',
  `roleid` bigint(10) NOT NULL DEFAULT '0',
  `stattype` varchar(20) NOT NULL DEFAULT 'activity',
  `stat1` bigint(10) NOT NULL DEFAULT '0',
  `stat2` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_statweek_cou_ix` (`courseid`),
  KEY `mdl_statweek_tim_ix` (`timeend`),
  KEY `mdl_statweek_rol_ix` (`roleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='To accumulate weekly stats';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_stats_weekly`
--

LOCK TABLES `mdl_stats_weekly` WRITE;
/*!40000 ALTER TABLE `mdl_stats_weekly` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_stats_weekly` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_survey`
--

DROP TABLE IF EXISTS `mdl_survey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_survey` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `template` bigint(10) NOT NULL DEFAULT '0',
  `days` mediumint(6) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext NOT NULL,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `questions` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_surv_cou_ix` (`course`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='Each record is one SURVEY module with its configuration';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_survey`
--

LOCK TABLES `mdl_survey` WRITE;
/*!40000 ALTER TABLE `mdl_survey` DISABLE KEYS */;
INSERT INTO `mdl_survey` VALUES (1,0,0,0,985017600,985017600,'collesaname','collesaintro',0,'25,26,27,28,29,30,43,44'),(2,0,0,0,985017600,985017600,'collespname','collespintro',0,'31,32,33,34,35,36,43,44'),(3,0,0,0,985017600,985017600,'collesapname','collesapintro',0,'37,38,39,40,41,42,43,44'),(4,0,0,0,985017600,985017600,'attlsname','attlsintro',0,'65,67,68'),(5,0,0,0,985017600,985017600,'ciqname','ciqintro',0,'69,70,71,72,73');
/*!40000 ALTER TABLE `mdl_survey` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_survey_analysis`
--

DROP TABLE IF EXISTS `mdl_survey_analysis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_survey_analysis` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `survey` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `notes` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_survanal_use_ix` (`userid`),
  KEY `mdl_survanal_sur_ix` (`survey`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='text about each survey submission';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_survey_analysis`
--

LOCK TABLES `mdl_survey_analysis` WRITE;
/*!40000 ALTER TABLE `mdl_survey_analysis` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_survey_analysis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_survey_answers`
--

DROP TABLE IF EXISTS `mdl_survey_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_survey_answers` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `survey` bigint(10) NOT NULL DEFAULT '0',
  `question` bigint(10) NOT NULL DEFAULT '0',
  `time` bigint(10) NOT NULL DEFAULT '0',
  `answer1` longtext NOT NULL,
  `answer2` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_survansw_use_ix` (`userid`),
  KEY `mdl_survansw_sur_ix` (`survey`),
  KEY `mdl_survansw_que_ix` (`question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='the answers to each questions filled by the users';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_survey_answers`
--

LOCK TABLES `mdl_survey_answers` WRITE;
/*!40000 ALTER TABLE `mdl_survey_answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_survey_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_survey_questions`
--

DROP TABLE IF EXISTS `mdl_survey_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_survey_questions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL DEFAULT '',
  `shorttext` varchar(30) NOT NULL DEFAULT '',
  `multi` varchar(100) NOT NULL DEFAULT '',
  `intro` varchar(50) NOT NULL DEFAULT '',
  `type` smallint(3) NOT NULL DEFAULT '0',
  `options` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8 COMMENT='the questions conforming one survey';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_survey_questions`
--

LOCK TABLES `mdl_survey_questions` WRITE;
/*!40000 ALTER TABLE `mdl_survey_questions` DISABLE KEYS */;
INSERT INTO `mdl_survey_questions` VALUES (1,'colles1','colles1short','','',1,'scaletimes5'),(2,'colles2','colles2short','','',1,'scaletimes5'),(3,'colles3','colles3short','','',1,'scaletimes5'),(4,'colles4','colles4short','','',1,'scaletimes5'),(5,'colles5','colles5short','','',1,'scaletimes5'),(6,'colles6','colles6short','','',1,'scaletimes5'),(7,'colles7','colles7short','','',1,'scaletimes5'),(8,'colles8','colles8short','','',1,'scaletimes5'),(9,'colles9','colles9short','','',1,'scaletimes5'),(10,'colles10','colles10short','','',1,'scaletimes5'),(11,'colles11','colles11short','','',1,'scaletimes5'),(12,'colles12','colles12short','','',1,'scaletimes5'),(13,'colles13','colles13short','','',1,'scaletimes5'),(14,'colles14','colles14short','','',1,'scaletimes5'),(15,'colles15','colles15short','','',1,'scaletimes5'),(16,'colles16','colles16short','','',1,'scaletimes5'),(17,'colles17','colles17short','','',1,'scaletimes5'),(18,'colles18','colles18short','','',1,'scaletimes5'),(19,'colles19','colles19short','','',1,'scaletimes5'),(20,'colles20','colles20short','','',1,'scaletimes5'),(21,'colles21','colles21short','','',1,'scaletimes5'),(22,'colles22','colles22short','','',1,'scaletimes5'),(23,'colles23','colles23short','','',1,'scaletimes5'),(24,'colles24','colles24short','','',1,'scaletimes5'),(25,'collesm1','collesm1short','1,2,3,4','collesmintro',1,'scaletimes5'),(26,'collesm2','collesm2short','5,6,7,8','collesmintro',1,'scaletimes5'),(27,'collesm3','collesm3short','9,10,11,12','collesmintro',1,'scaletimes5'),(28,'collesm4','collesm4short','13,14,15,16','collesmintro',1,'scaletimes5'),(29,'collesm5','collesm5short','17,18,19,20','collesmintro',1,'scaletimes5'),(30,'collesm6','collesm6short','21,22,23,24','collesmintro',1,'scaletimes5'),(31,'collesm1','collesm1short','1,2,3,4','collesmintro',2,'scaletimes5'),(32,'collesm2','collesm2short','5,6,7,8','collesmintro',2,'scaletimes5'),(33,'collesm3','collesm3short','9,10,11,12','collesmintro',2,'scaletimes5'),(34,'collesm4','collesm4short','13,14,15,16','collesmintro',2,'scaletimes5'),(35,'collesm5','collesm5short','17,18,19,20','collesmintro',2,'scaletimes5'),(36,'collesm6','collesm6short','21,22,23,24','collesmintro',2,'scaletimes5'),(37,'collesm1','collesm1short','1,2,3,4','collesmintro',3,'scaletimes5'),(38,'collesm2','collesm2short','5,6,7,8','collesmintro',3,'scaletimes5'),(39,'collesm3','collesm3short','9,10,11,12','collesmintro',3,'scaletimes5'),(40,'collesm4','collesm4short','13,14,15,16','collesmintro',3,'scaletimes5'),(41,'collesm5','collesm5short','17,18,19,20','collesmintro',3,'scaletimes5'),(42,'collesm6','collesm6short','21,22,23,24','collesmintro',3,'scaletimes5'),(43,'howlong','','','',1,'howlongoptions'),(44,'othercomments','','','',0,NULL),(45,'attls1','attls1short','','',1,'scaleagree5'),(46,'attls2','attls2short','','',1,'scaleagree5'),(47,'attls3','attls3short','','',1,'scaleagree5'),(48,'attls4','attls4short','','',1,'scaleagree5'),(49,'attls5','attls5short','','',1,'scaleagree5'),(50,'attls6','attls6short','','',1,'scaleagree5'),(51,'attls7','attls7short','','',1,'scaleagree5'),(52,'attls8','attls8short','','',1,'scaleagree5'),(53,'attls9','attls9short','','',1,'scaleagree5'),(54,'attls10','attls10short','','',1,'scaleagree5'),(55,'attls11','attls11short','','',1,'scaleagree5'),(56,'attls12','attls12short','','',1,'scaleagree5'),(57,'attls13','attls13short','','',1,'scaleagree5'),(58,'attls14','attls14short','','',1,'scaleagree5'),(59,'attls15','attls15short','','',1,'scaleagree5'),(60,'attls16','attls16short','','',1,'scaleagree5'),(61,'attls17','attls17short','','',1,'scaleagree5'),(62,'attls18','attls18short','','',1,'scaleagree5'),(63,'attls19','attls19short','','',1,'scaleagree5'),(64,'attls20','attls20short','','',1,'scaleagree5'),(65,'attlsm1','attlsm1','45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64','attlsmintro',1,'scaleagree5'),(66,'-','-','-','-',0,'-'),(67,'attlsm2','attlsm2','63,62,59,57,55,49,52,50,48,47','attlsmintro',-1,'scaleagree5'),(68,'attlsm3','attlsm3','46,54,45,51,60,53,56,58,61,64','attlsmintro',-1,'scaleagree5'),(69,'ciq1','ciq1short','','',0,NULL),(70,'ciq2','ciq2short','','',0,NULL),(71,'ciq3','ciq3short','','',0,NULL),(72,'ciq4','ciq4short','','',0,NULL),(73,'ciq5','ciq5short','','',0,NULL);
/*!40000 ALTER TABLE `mdl_survey_questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_tag`
--

DROP TABLE IF EXISTS `mdl_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_tag` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `rawname` varchar(255) NOT NULL DEFAULT '',
  `tagtype` varchar(255) DEFAULT NULL,
  `description` longtext,
  `descriptionformat` tinyint(2) NOT NULL DEFAULT '0',
  `flag` smallint(4) DEFAULT '0',
  `timemodified` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_tag_nam_uix` (`name`),
  UNIQUE KEY `mdl_tag_idnam_uix` (`id`,`name`),
  KEY `mdl_tag_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tag table - this generic table will replace the old "tags" t';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_tag`
--

LOCK TABLES `mdl_tag` WRITE;
/*!40000 ALTER TABLE `mdl_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_tag_correlation`
--

DROP TABLE IF EXISTS `mdl_tag_correlation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_tag_correlation` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `tagid` bigint(10) NOT NULL,
  `correlatedtags` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_tagcorr_tag_ix` (`tagid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='The rationale for the ''tag_correlation'' table is performance';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_tag_correlation`
--

LOCK TABLES `mdl_tag_correlation` WRITE;
/*!40000 ALTER TABLE `mdl_tag_correlation` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_tag_correlation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_tag_instance`
--

DROP TABLE IF EXISTS `mdl_tag_instance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_tag_instance` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `tagid` bigint(10) NOT NULL,
  `component` varchar(100) DEFAULT NULL,
  `itemtype` varchar(255) NOT NULL DEFAULT '',
  `itemid` bigint(10) NOT NULL,
  `contextid` bigint(10) DEFAULT NULL,
  `tiuserid` bigint(10) NOT NULL DEFAULT '0',
  `ordering` bigint(10) DEFAULT NULL,
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_taginst_iteitetagtiu_uix` (`itemtype`,`itemid`,`tagid`,`tiuserid`),
  KEY `mdl_taginst_tag_ix` (`tagid`),
  KEY `mdl_taginst_con_ix` (`contextid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='tag_instance table holds the information of associations bet';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_tag_instance`
--

LOCK TABLES `mdl_tag_instance` WRITE;
/*!40000 ALTER TABLE `mdl_tag_instance` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_tag_instance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_task_adhoc`
--

DROP TABLE IF EXISTS `mdl_task_adhoc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_task_adhoc` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `component` varchar(255) NOT NULL DEFAULT '',
  `classname` varchar(255) NOT NULL DEFAULT '',
  `nextruntime` bigint(10) NOT NULL,
  `faildelay` bigint(10) DEFAULT NULL,
  `customdata` longtext,
  `blocking` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_taskadho_nex_ix` (`nextruntime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='List of adhoc tasks waiting to run.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_task_adhoc`
--

LOCK TABLES `mdl_task_adhoc` WRITE;
/*!40000 ALTER TABLE `mdl_task_adhoc` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_task_adhoc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_task_scheduled`
--

DROP TABLE IF EXISTS `mdl_task_scheduled`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_task_scheduled` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `component` varchar(255) NOT NULL DEFAULT '',
  `classname` varchar(255) NOT NULL DEFAULT '',
  `lastruntime` bigint(10) DEFAULT NULL,
  `nextruntime` bigint(10) DEFAULT NULL,
  `blocking` tinyint(2) NOT NULL DEFAULT '0',
  `minute` varchar(25) NOT NULL DEFAULT '',
  `hour` varchar(25) NOT NULL DEFAULT '',
  `day` varchar(25) NOT NULL DEFAULT '',
  `month` varchar(25) NOT NULL DEFAULT '',
  `dayofweek` varchar(25) NOT NULL DEFAULT '',
  `faildelay` bigint(10) DEFAULT NULL,
  `customised` tinyint(2) NOT NULL DEFAULT '0',
  `disabled` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_tasksche_cla_uix` (`classname`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COMMENT='List of scheduled tasks to be run by cron.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_task_scheduled`
--

LOCK TABLES `mdl_task_scheduled` WRITE;
/*!40000 ALTER TABLE `mdl_task_scheduled` DISABLE KEYS */;
INSERT INTO `mdl_task_scheduled` VALUES (1,'moodle','\\core\\task\\session_cleanup_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(2,'moodle','\\core\\task\\delete_unconfirmed_users_task',0,1435341600,0,'0','*','*','*','*',0,0,0),(3,'moodle','\\core\\task\\delete_incomplete_users_task',0,1435341900,0,'5','*','*','*','*',0,0,0),(4,'moodle','\\core\\task\\backup_cleanup_task',0,1435342200,0,'10','*','*','*','*',0,0,0),(5,'moodle','\\core\\task\\tag_cron_task',0,1435342800,0,'20','*','*','*','*',0,0,0),(6,'moodle','\\core\\task\\context_cleanup_task',0,1435343100,0,'25','*','*','*','*',0,0,0),(7,'moodle','\\core\\task\\cache_cleanup_task',0,1435339800,0,'30','*','*','*','*',0,0,0),(8,'moodle','\\core\\task\\messaging_cleanup_task',0,1435340100,0,'35','*','*','*','*',0,0,0),(9,'moodle','\\core\\task\\send_new_user_passwords_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(10,'moodle','\\core\\task\\send_failed_login_notifications_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(11,'moodle','\\core\\task\\create_contexts_task',0,1435363200,1,'0','0','*','*','*',0,0,0),(12,'moodle','\\core\\task\\legacy_plugin_cron_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(13,'moodle','\\core\\task\\grade_cron_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(14,'moodle','\\core\\task\\events_cron_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(15,'moodle','\\core\\task\\completion_cron_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(16,'moodle','\\core\\task\\portfolio_cron_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(17,'moodle','\\core\\task\\plagiarism_cron_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(18,'moodle','\\core\\task\\calendar_cron_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(19,'moodle','\\core\\task\\blog_cron_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(20,'moodle','\\core\\task\\question_cron_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(21,'moodle','\\core\\task\\registration_cron_task',0,1435702080,0,'8','22','*','*','2',0,0,0),(22,'moodle','\\core\\task\\check_for_updates_task',0,1435341600,0,'0','*/2','*','*','*',0,0,0),(23,'moodle','\\core\\task\\cache_cron_task',0,1435341000,0,'50','*','*','*','*',0,0,0),(24,'moodle','\\core\\task\\automated_backup_task',0,1435341000,0,'50','*','*','*','*',0,0,0),(25,'moodle','\\core\\task\\badges_cron_task',0,1435339800,0,'*/5','*','*','*','*',0,0,0),(26,'moodle','\\core\\task\\file_temp_cleanup_task',0,1435344900,0,'55','*/6','*','*','*',0,0,0),(27,'moodle','\\core\\task\\file_trash_cleanup_task',0,1435344900,0,'55','*/6','*','*','*',0,0,0),(28,'moodle','\\core\\task\\stats_cron_task',0,1435341600,0,'0','*','*','*','*',0,0,0),(29,'moodle','\\core\\task\\password_reset_cleanup_task',0,1435341600,0,'0','*/6','*','*','*',0,0,0),(30,'mod_forum','\\mod_forum\\task\\cron_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(31,'enrol_imsenterprise','\\enrol_imsenterprise\\task\\cron_task',0,1435342200,0,'10','*','*','*','*',0,0,0),(32,'tool_langimport','\\tool_langimport\\task\\update_langpacks_task',0,1435378380,0,'13','4','*','*','*',0,0,0),(33,'tool_messageinbound','\\tool_messageinbound\\task\\pickup_task',0,1435339800,0,'*','*','*','*','*',0,0,0),(34,'tool_messageinbound','\\tool_messageinbound\\task\\cleanup_task',0,1435370100,0,'55','1','*','*','*',0,0,0),(35,'tool_monitor','\\tool_monitor\\task\\clean_events',0,1435339800,0,'*','*','*','*','*',0,0,0),(36,'logstore_legacy','\\logstore_legacy\\task\\cleanup_task',0,1435383000,0,'*','5','*','*','*',0,0,0),(37,'logstore_standard','\\logstore_standard\\task\\cleanup_task',0,1435379400,0,'*','4','*','*','*',0,0,0);
/*!40000 ALTER TABLE `mdl_task_scheduled` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_timezone`
--

DROP TABLE IF EXISTS `mdl_timezone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_timezone` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '',
  `year` bigint(11) NOT NULL DEFAULT '0',
  `tzrule` varchar(20) NOT NULL DEFAULT '',
  `gmtoff` bigint(11) NOT NULL DEFAULT '0',
  `dstoff` bigint(11) NOT NULL DEFAULT '0',
  `dst_month` tinyint(2) NOT NULL DEFAULT '0',
  `dst_startday` smallint(3) NOT NULL DEFAULT '0',
  `dst_weekday` smallint(3) NOT NULL DEFAULT '0',
  `dst_skipweeks` smallint(3) NOT NULL DEFAULT '0',
  `dst_time` varchar(6) NOT NULL DEFAULT '00:00',
  `std_month` tinyint(2) NOT NULL DEFAULT '0',
  `std_startday` smallint(3) NOT NULL DEFAULT '0',
  `std_weekday` smallint(3) NOT NULL DEFAULT '0',
  `std_skipweeks` smallint(3) NOT NULL DEFAULT '0',
  `std_time` varchar(6) NOT NULL DEFAULT '00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Rules for calculating local wall clock time for users';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_timezone`
--

LOCK TABLES `mdl_timezone` WRITE;
/*!40000 ALTER TABLE `mdl_timezone` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_timezone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_tool_customlang`
--

DROP TABLE IF EXISTS `mdl_tool_customlang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_tool_customlang` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `lang` varchar(20) NOT NULL DEFAULT '',
  `componentid` bigint(10) NOT NULL,
  `stringid` varchar(255) NOT NULL DEFAULT '',
  `original` longtext NOT NULL,
  `master` longtext,
  `local` longtext,
  `timemodified` bigint(10) NOT NULL,
  `timecustomized` bigint(10) DEFAULT NULL,
  `outdated` smallint(3) DEFAULT '0',
  `modified` smallint(3) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_toolcust_lancomstr_uix` (`lang`,`componentid`,`stringid`),
  KEY `mdl_toolcust_com_ix` (`componentid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains the working checkout of all strings and their custo';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_tool_customlang`
--

LOCK TABLES `mdl_tool_customlang` WRITE;
/*!40000 ALTER TABLE `mdl_tool_customlang` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_tool_customlang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_tool_customlang_components`
--

DROP TABLE IF EXISTS `mdl_tool_customlang_components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_tool_customlang_components` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `version` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Contains the list of all installed plugins that provide thei';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_tool_customlang_components`
--

LOCK TABLES `mdl_tool_customlang_components` WRITE;
/*!40000 ALTER TABLE `mdl_tool_customlang_components` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_tool_customlang_components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_tool_monitor_events`
--

DROP TABLE IF EXISTS `mdl_tool_monitor_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_tool_monitor_events` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `eventname` varchar(254) NOT NULL DEFAULT '',
  `contextid` bigint(10) NOT NULL,
  `contextlevel` bigint(10) NOT NULL,
  `contextinstanceid` bigint(10) NOT NULL,
  `link` varchar(254) NOT NULL DEFAULT '',
  `courseid` bigint(10) NOT NULL,
  `timecreated` bigint(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='A table that keeps a log of events related to subscriptions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_tool_monitor_events`
--

LOCK TABLES `mdl_tool_monitor_events` WRITE;
/*!40000 ALTER TABLE `mdl_tool_monitor_events` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_tool_monitor_events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_tool_monitor_history`
--

DROP TABLE IF EXISTS `mdl_tool_monitor_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_tool_monitor_history` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `sid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `timesent` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_toolmonihist_sidusetim_uix` (`sid`,`userid`,`timesent`),
  KEY `mdl_toolmonihist_sid_ix` (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Table to store history of message notifications sent';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_tool_monitor_history`
--

LOCK TABLES `mdl_tool_monitor_history` WRITE;
/*!40000 ALTER TABLE `mdl_tool_monitor_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_tool_monitor_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_tool_monitor_rules`
--

DROP TABLE IF EXISTS `mdl_tool_monitor_rules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_tool_monitor_rules` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `description` longtext,
  `descriptionformat` tinyint(1) NOT NULL,
  `name` varchar(254) NOT NULL DEFAULT '',
  `userid` bigint(10) NOT NULL,
  `courseid` bigint(10) NOT NULL,
  `plugin` varchar(254) NOT NULL DEFAULT '',
  `eventname` varchar(254) NOT NULL DEFAULT '',
  `template` longtext NOT NULL,
  `templateformat` tinyint(1) NOT NULL,
  `frequency` smallint(4) NOT NULL,
  `timewindow` mediumint(5) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  `timecreated` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_toolmonirule_couuse_ix` (`courseid`,`userid`),
  KEY `mdl_toolmonirule_eve_ix` (`eventname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Table to store rules';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_tool_monitor_rules`
--

LOCK TABLES `mdl_tool_monitor_rules` WRITE;
/*!40000 ALTER TABLE `mdl_tool_monitor_rules` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_tool_monitor_rules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_tool_monitor_subscriptions`
--

DROP TABLE IF EXISTS `mdl_tool_monitor_subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_tool_monitor_subscriptions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `courseid` bigint(10) NOT NULL,
  `ruleid` bigint(10) NOT NULL,
  `cmid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `timecreated` bigint(10) NOT NULL,
  `lastnotificationsent` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_toolmonisubs_couuse_ix` (`courseid`,`userid`),
  KEY `mdl_toolmonisubs_rul_ix` (`ruleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Table to store user subscriptions to various rules';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_tool_monitor_subscriptions`
--

LOCK TABLES `mdl_tool_monitor_subscriptions` WRITE;
/*!40000 ALTER TABLE `mdl_tool_monitor_subscriptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_tool_monitor_subscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_upgrade_log`
--

DROP TABLE IF EXISTS `mdl_upgrade_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_upgrade_log` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `type` bigint(10) NOT NULL,
  `plugin` varchar(100) DEFAULT NULL,
  `version` varchar(100) DEFAULT NULL,
  `targetversion` varchar(100) DEFAULT NULL,
  `info` varchar(255) NOT NULL DEFAULT '',
  `details` longtext,
  `backtrace` longtext,
  `userid` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_upgrlog_tim_ix` (`timemodified`),
  KEY `mdl_upgrlog_typtim_ix` (`type`,`timemodified`),
  KEY `mdl_upgrlog_use_ix` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=1070 DEFAULT CHARSET=utf8 COMMENT='Upgrade logging';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_upgrade_log`
--

LOCK TABLES `mdl_upgrade_log` WRITE;
/*!40000 ALTER TABLE `mdl_upgrade_log` DISABLE KEYS */;
INSERT INTO `mdl_upgrade_log` VALUES (1,0,'core','2014111006.09','2014111006.09','Upgrade savepoint reached',NULL,'',0,1435339753),(2,0,'core','2014111006.09','2014111006.09','Core installed',NULL,'',0,1435339758),(3,0,'availability_completion',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(4,0,'availability_completion','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(5,0,'availability_completion','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(6,0,'availability_date',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(7,0,'availability_date','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(8,0,'availability_date','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(9,0,'availability_grade',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(10,0,'availability_grade','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(11,0,'availability_grade','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(12,0,'availability_group',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(13,0,'availability_group','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(14,0,'availability_group','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(15,0,'availability_grouping',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(16,0,'availability_grouping','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(17,0,'availability_grouping','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(18,0,'availability_profile',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(19,0,'availability_profile','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(20,0,'availability_profile','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(21,0,'qtype_calculated',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(22,0,'qtype_calculated','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(23,0,'qtype_calculated','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(24,0,'qtype_calculatedmulti',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(25,0,'qtype_calculatedmulti','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(26,0,'qtype_calculatedmulti','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(27,0,'qtype_calculatedsimple',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(28,0,'qtype_calculatedsimple','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(29,0,'qtype_calculatedsimple','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(30,0,'qtype_description',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(31,0,'qtype_description','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(32,0,'qtype_description','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(33,0,'qtype_essay',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(34,0,'qtype_essay','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(35,0,'qtype_essay','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(36,0,'qtype_match',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(37,0,'qtype_match','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(38,0,'qtype_match','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(39,0,'qtype_missingtype',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(40,0,'qtype_missingtype','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(41,0,'qtype_missingtype','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(42,0,'qtype_multianswer',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(43,0,'qtype_multianswer','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(44,0,'qtype_multianswer','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(45,0,'qtype_multichoice',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(46,0,'qtype_multichoice','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(47,0,'qtype_multichoice','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(48,0,'qtype_numerical',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(49,0,'qtype_numerical','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(50,0,'qtype_numerical','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(51,0,'qtype_random',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(52,0,'qtype_random','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(53,0,'qtype_random','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(54,0,'qtype_randomsamatch',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(55,0,'qtype_randomsamatch','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339758),(56,0,'qtype_randomsamatch','2014111000','2014111000','Plugin installed',NULL,'',0,1435339758),(57,0,'qtype_shortanswer',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339758),(58,0,'qtype_shortanswer','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339759),(59,0,'qtype_shortanswer','2014111000','2014111000','Plugin installed',NULL,'',0,1435339759),(60,0,'qtype_truefalse',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339759),(61,0,'qtype_truefalse','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339759),(62,0,'qtype_truefalse','2014111000','2014111000','Plugin installed',NULL,'',0,1435339759),(63,0,'mod_assign',NULL,'2014111001','Starting plugin installation',NULL,'',0,1435339759),(64,0,'mod_assign','2014111001','2014111001','Upgrade savepoint reached',NULL,'',0,1435339759),(65,0,'mod_assign','2014111001','2014111001','Plugin installed',NULL,'',0,1435339759),(66,0,'mod_assignment',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339759),(67,0,'mod_assignment','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339759),(68,0,'mod_assignment','2014111000','2014111000','Plugin installed',NULL,'',0,1435339759),(69,0,'mod_book',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339759),(70,0,'mod_book','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339759),(71,0,'mod_book','2014111000','2014111000','Plugin installed',NULL,'',0,1435339759),(72,0,'mod_chat',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339759),(73,0,'mod_chat','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339759),(74,0,'mod_chat','2014111000','2014111000','Plugin installed',NULL,'',0,1435339759),(75,0,'mod_choice',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339759),(76,0,'mod_choice','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339760),(77,0,'mod_choice','2014111000','2014111000','Plugin installed',NULL,'',0,1435339760),(78,0,'mod_data',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339760),(79,0,'mod_data','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339760),(80,0,'mod_data','2014111000','2014111000','Plugin installed',NULL,'',0,1435339760),(81,0,'mod_feedback',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339760),(82,0,'mod_feedback','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339760),(83,0,'mod_feedback','2014111000','2014111000','Plugin installed',NULL,'',0,1435339760),(84,0,'mod_folder',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339760),(85,0,'mod_folder','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339760),(86,0,'mod_folder','2014111000','2014111000','Plugin installed',NULL,'',0,1435339760),(87,0,'mod_forum',NULL,'2014111001','Starting plugin installation',NULL,'',0,1435339760),(88,0,'mod_forum','2014111001','2014111001','Upgrade savepoint reached',NULL,'',0,1435339760),(89,0,'mod_forum','2014111001','2014111001','Plugin installed',NULL,'',0,1435339761),(90,0,'mod_glossary',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339761),(91,0,'mod_glossary','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339761),(92,0,'mod_glossary','2014111000','2014111000','Plugin installed',NULL,'',0,1435339761),(93,0,'mod_imscp',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339761),(94,0,'mod_imscp','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339761),(95,0,'mod_imscp','2014111000','2014111000','Plugin installed',NULL,'',0,1435339761),(96,0,'mod_label',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339761),(97,0,'mod_label','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339761),(98,0,'mod_label','2014111000','2014111000','Plugin installed',NULL,'',0,1435339761),(99,0,'mod_lesson',NULL,'2014111003','Starting plugin installation',NULL,'',0,1435339761),(100,0,'mod_lesson','2014111003','2014111003','Upgrade savepoint reached',NULL,'',0,1435339762),(101,0,'mod_lesson','2014111003','2014111003','Plugin installed',NULL,'',0,1435339762),(102,0,'mod_lti',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339762),(103,0,'mod_lti','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339762),(104,0,'mod_lti','2014111000','2014111000','Plugin installed',NULL,'',0,1435339762),(105,0,'mod_page',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339762),(106,0,'mod_page','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339762),(107,0,'mod_page','2014111000','2014111000','Plugin installed',NULL,'',0,1435339762),(108,0,'mod_quiz',NULL,'2014111001','Starting plugin installation',NULL,'',0,1435339762),(109,0,'mod_quiz','2014111001','2014111001','Upgrade savepoint reached',NULL,'',0,1435339762),(110,0,'mod_quiz','2014111001','2014111001','Plugin installed',NULL,'',0,1435339762),(111,0,'mod_resource',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339762),(112,0,'mod_resource','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339762),(113,0,'mod_resource','2014111000','2014111000','Plugin installed',NULL,'',0,1435339762),(114,0,'mod_scorm',NULL,'2014111002','Starting plugin installation',NULL,'',0,1435339762),(115,0,'mod_scorm','2014111002','2014111002','Upgrade savepoint reached',NULL,'',0,1435339762),(116,0,'mod_scorm','2014111002','2014111002','Plugin installed',NULL,'',0,1435339763),(117,0,'mod_survey',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339763),(118,0,'mod_survey','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339763),(119,0,'mod_survey','2014111000','2014111000','Plugin installed',NULL,'',0,1435339763),(120,0,'mod_url',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339763),(121,0,'mod_url','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339763),(122,0,'mod_url','2014111000','2014111000','Plugin installed',NULL,'',0,1435339763),(123,0,'mod_wiki',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339763),(124,0,'mod_wiki','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339763),(125,0,'mod_wiki','2014111000','2014111000','Plugin installed',NULL,'',0,1435339763),(126,0,'mod_workshop',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339763),(127,0,'mod_workshop','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339763),(128,0,'mod_workshop','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(129,0,'auth_cas',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(130,0,'auth_cas','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(131,0,'auth_cas','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(132,0,'auth_db',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(133,0,'auth_db','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(134,0,'auth_db','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(135,0,'auth_email',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(136,0,'auth_email','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(137,0,'auth_email','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(138,0,'auth_fc',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(139,0,'auth_fc','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(140,0,'auth_fc','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(141,0,'auth_imap',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(142,0,'auth_imap','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(143,0,'auth_imap','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(144,0,'auth_ldap',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(145,0,'auth_ldap','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(146,0,'auth_ldap','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(147,0,'auth_manual',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(148,0,'auth_manual','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(149,0,'auth_manual','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(150,0,'auth_mnet',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(151,0,'auth_mnet','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(152,0,'auth_mnet','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(153,0,'auth_nntp',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(154,0,'auth_nntp','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(155,0,'auth_nntp','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(156,0,'auth_nologin',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(157,0,'auth_nologin','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(158,0,'auth_nologin','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(159,0,'auth_none',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(160,0,'auth_none','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(161,0,'auth_none','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(162,0,'auth_pam',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(163,0,'auth_pam','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(164,0,'auth_pam','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(165,0,'auth_pop3',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339764),(166,0,'auth_pop3','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339764),(167,0,'auth_pop3','2014111000','2014111000','Plugin installed',NULL,'',0,1435339764),(168,0,'auth_radius',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(169,0,'auth_radius','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(170,0,'auth_radius','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(171,0,'auth_shibboleth',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(172,0,'auth_shibboleth','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(173,0,'auth_shibboleth','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(174,0,'auth_webservice',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(175,0,'auth_webservice','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(176,0,'auth_webservice','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(177,0,'calendartype_gregorian',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(178,0,'calendartype_gregorian','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(179,0,'calendartype_gregorian','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(180,0,'enrol_category',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(181,0,'enrol_category','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(182,0,'enrol_category','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(183,0,'enrol_cohort',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(184,0,'enrol_cohort','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(185,0,'enrol_cohort','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(186,0,'enrol_database',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(187,0,'enrol_database','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(188,0,'enrol_database','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(189,0,'enrol_flatfile',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(190,0,'enrol_flatfile','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(191,0,'enrol_flatfile','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(192,0,'enrol_guest',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(193,0,'enrol_guest','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(194,0,'enrol_guest','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(195,0,'enrol_imsenterprise',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(196,0,'enrol_imsenterprise','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(197,0,'enrol_imsenterprise','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(198,0,'enrol_ldap',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(199,0,'enrol_ldap','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(200,0,'enrol_ldap','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(201,0,'enrol_manual',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(202,0,'enrol_manual','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(203,0,'enrol_manual','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(204,0,'enrol_meta',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(205,0,'enrol_meta','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(206,0,'enrol_meta','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(207,0,'enrol_mnet',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(208,0,'enrol_mnet','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(209,0,'enrol_mnet','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(210,0,'enrol_paypal',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(211,0,'enrol_paypal','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339765),(212,0,'enrol_paypal','2014111000','2014111000','Plugin installed',NULL,'',0,1435339765),(213,0,'enrol_self',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339765),(214,0,'enrol_self','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339766),(215,0,'enrol_self','2014111000','2014111000','Plugin installed',NULL,'',0,1435339766),(216,0,'message_airnotifier',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339766),(217,0,'message_airnotifier','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339766),(218,0,'message_airnotifier','2014111000','2014111000','Plugin installed',NULL,'',0,1435339766),(219,0,'message_email',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339766),(220,0,'message_email','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339766),(221,0,'message_email','2014111000','2014111000','Plugin installed',NULL,'',0,1435339766),(222,0,'message_jabber',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339766),(223,0,'message_jabber','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339766),(224,0,'message_jabber','2014111000','2014111000','Plugin installed',NULL,'',0,1435339766),(225,0,'message_popup',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339766),(226,0,'message_popup','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339766),(227,0,'message_popup','2014111000','2014111000','Plugin installed',NULL,'',0,1435339766),(228,0,'block_activity_modules',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339766),(229,0,'block_activity_modules','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339766),(230,0,'block_activity_modules','2014111000','2014111000','Plugin installed',NULL,'',0,1435339766),(231,0,'block_admin_bookmarks',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339766),(232,0,'block_admin_bookmarks','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339766),(233,0,'block_admin_bookmarks','2014111000','2014111000','Plugin installed',NULL,'',0,1435339766),(234,0,'block_badges',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339766),(235,0,'block_badges','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339766),(236,0,'block_badges','2014111000','2014111000','Plugin installed',NULL,'',0,1435339766),(237,0,'block_blog_menu',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339766),(238,0,'block_blog_menu','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339766),(239,0,'block_blog_menu','2014111000','2014111000','Plugin installed',NULL,'',0,1435339766),(240,0,'block_blog_recent',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339766),(241,0,'block_blog_recent','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339766),(242,0,'block_blog_recent','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(243,0,'block_blog_tags',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(244,0,'block_blog_tags','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(245,0,'block_blog_tags','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(246,0,'block_calendar_month',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(247,0,'block_calendar_month','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(248,0,'block_calendar_month','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(249,0,'block_calendar_upcoming',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(250,0,'block_calendar_upcoming','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(251,0,'block_calendar_upcoming','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(252,0,'block_comments',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(253,0,'block_comments','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(254,0,'block_comments','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(255,0,'block_community',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(256,0,'block_community','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(257,0,'block_community','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(258,0,'block_completionstatus',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(259,0,'block_completionstatus','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(260,0,'block_completionstatus','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(261,0,'block_course_list',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(262,0,'block_course_list','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(263,0,'block_course_list','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(264,0,'block_course_overview',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(265,0,'block_course_overview','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(266,0,'block_course_overview','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(267,0,'block_course_summary',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(268,0,'block_course_summary','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(269,0,'block_course_summary','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(270,0,'block_feedback',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(271,0,'block_feedback','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(272,0,'block_feedback','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(273,0,'block_glossary_random',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(274,0,'block_glossary_random','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(275,0,'block_glossary_random','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(276,0,'block_html',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(277,0,'block_html','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(278,0,'block_html','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(279,0,'block_login',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(280,0,'block_login','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(281,0,'block_login','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(282,0,'block_mentees',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(283,0,'block_mentees','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(284,0,'block_mentees','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(285,0,'block_messages',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(286,0,'block_messages','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(287,0,'block_messages','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(288,0,'block_mnet_hosts',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(289,0,'block_mnet_hosts','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339767),(290,0,'block_mnet_hosts','2014111000','2014111000','Plugin installed',NULL,'',0,1435339767),(291,0,'block_myprofile',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339767),(292,0,'block_myprofile','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(293,0,'block_myprofile','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(294,0,'block_navigation',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(295,0,'block_navigation','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(296,0,'block_navigation','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(297,0,'block_news_items',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(298,0,'block_news_items','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(299,0,'block_news_items','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(300,0,'block_online_users',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(301,0,'block_online_users','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(302,0,'block_online_users','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(303,0,'block_participants',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(304,0,'block_participants','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(305,0,'block_participants','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(306,0,'block_private_files',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(307,0,'block_private_files','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(308,0,'block_private_files','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(309,0,'block_quiz_results',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(310,0,'block_quiz_results','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(311,0,'block_quiz_results','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(312,0,'block_recent_activity',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(313,0,'block_recent_activity','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(314,0,'block_recent_activity','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(315,0,'block_rss_client',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(316,0,'block_rss_client','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(317,0,'block_rss_client','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(318,0,'block_search_forums',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(319,0,'block_search_forums','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(320,0,'block_search_forums','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(321,0,'block_section_links',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(322,0,'block_section_links','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(323,0,'block_section_links','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(324,0,'block_selfcompletion',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(325,0,'block_selfcompletion','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(326,0,'block_selfcompletion','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(327,0,'block_settings',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(328,0,'block_settings','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(329,0,'block_settings','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(330,0,'block_site_main_menu',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(331,0,'block_site_main_menu','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(332,0,'block_site_main_menu','2014111000','2014111000','Plugin installed',NULL,'',0,1435339768),(333,0,'block_social_activities',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339768),(334,0,'block_social_activities','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339768),(335,0,'block_social_activities','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(336,0,'block_tag_flickr',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(337,0,'block_tag_flickr','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(338,0,'block_tag_flickr','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(339,0,'block_tag_youtube',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(340,0,'block_tag_youtube','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(341,0,'block_tag_youtube','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(342,0,'block_tags',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(343,0,'block_tags','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(344,0,'block_tags','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(345,0,'filter_activitynames',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(346,0,'filter_activitynames','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(347,0,'filter_activitynames','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(348,0,'filter_algebra',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(349,0,'filter_algebra','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(350,0,'filter_algebra','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(351,0,'filter_censor',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(352,0,'filter_censor','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(353,0,'filter_censor','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(354,0,'filter_data',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(355,0,'filter_data','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(356,0,'filter_data','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(357,0,'filter_emailprotect',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(358,0,'filter_emailprotect','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(359,0,'filter_emailprotect','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(360,0,'filter_emoticon',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(361,0,'filter_emoticon','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(362,0,'filter_emoticon','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(363,0,'filter_glossary',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(364,0,'filter_glossary','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(365,0,'filter_glossary','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(366,0,'filter_mathjaxloader',NULL,'2014111001','Starting plugin installation',NULL,'',0,1435339769),(367,0,'filter_mathjaxloader','2014111001','2014111001','Upgrade savepoint reached',NULL,'',0,1435339769),(368,0,'filter_mathjaxloader','2014111001','2014111001','Plugin installed',NULL,'',0,1435339769),(369,0,'filter_mediaplugin',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(370,0,'filter_mediaplugin','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(371,0,'filter_mediaplugin','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(372,0,'filter_multilang',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(373,0,'filter_multilang','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(374,0,'filter_multilang','2014111000','2014111000','Plugin installed',NULL,'',0,1435339769),(375,0,'filter_tex',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339769),(376,0,'filter_tex','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339769),(377,0,'filter_tex','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(378,0,'filter_tidy',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(379,0,'filter_tidy','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(380,0,'filter_tidy','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(381,0,'filter_urltolink',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(382,0,'filter_urltolink','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(383,0,'filter_urltolink','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(384,0,'editor_atto',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(385,0,'editor_atto','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(386,0,'editor_atto','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(387,0,'editor_textarea',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(388,0,'editor_textarea','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(389,0,'editor_textarea','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(390,0,'editor_tinymce',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(391,0,'editor_tinymce','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(392,0,'editor_tinymce','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(393,0,'format_singleactivity',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(394,0,'format_singleactivity','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(395,0,'format_singleactivity','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(396,0,'format_social',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(397,0,'format_social','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(398,0,'format_social','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(399,0,'format_topics',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(400,0,'format_topics','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(401,0,'format_topics','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(402,0,'format_weeks',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(403,0,'format_weeks','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(404,0,'format_weeks','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(405,0,'profilefield_checkbox',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(406,0,'profilefield_checkbox','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(407,0,'profilefield_checkbox','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(408,0,'profilefield_datetime',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(409,0,'profilefield_datetime','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(410,0,'profilefield_datetime','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(411,0,'profilefield_menu',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(412,0,'profilefield_menu','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(413,0,'profilefield_menu','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(414,0,'profilefield_text',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(415,0,'profilefield_text','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(416,0,'profilefield_text','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(417,0,'profilefield_textarea',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(418,0,'profilefield_textarea','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(419,0,'profilefield_textarea','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(420,0,'report_backups',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(421,0,'report_backups','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(422,0,'report_backups','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(423,0,'report_completion',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(424,0,'report_completion','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(425,0,'report_completion','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(426,0,'report_configlog',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(427,0,'report_configlog','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(428,0,'report_configlog','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(429,0,'report_courseoverview',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(430,0,'report_courseoverview','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(431,0,'report_courseoverview','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(432,0,'report_eventlist',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(433,0,'report_eventlist','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(434,0,'report_eventlist','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(435,0,'report_log',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(436,0,'report_log','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(437,0,'report_log','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(438,0,'report_loglive',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(439,0,'report_loglive','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(440,0,'report_loglive','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(441,0,'report_outline',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(442,0,'report_outline','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339770),(443,0,'report_outline','2014111000','2014111000','Plugin installed',NULL,'',0,1435339770),(444,0,'report_participation',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339770),(445,0,'report_participation','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(446,0,'report_participation','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(447,0,'report_performance',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(448,0,'report_performance','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(449,0,'report_performance','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(450,0,'report_progress',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(451,0,'report_progress','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(452,0,'report_progress','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(453,0,'report_questioninstances',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(454,0,'report_questioninstances','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(455,0,'report_questioninstances','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(456,0,'report_security',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(457,0,'report_security','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(458,0,'report_security','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(459,0,'report_stats',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(460,0,'report_stats','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(461,0,'report_stats','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(462,0,'gradeexport_ods',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(463,0,'gradeexport_ods','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(464,0,'gradeexport_ods','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(465,0,'gradeexport_txt',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(466,0,'gradeexport_txt','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(467,0,'gradeexport_txt','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(468,0,'gradeexport_xls',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(469,0,'gradeexport_xls','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(470,0,'gradeexport_xls','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(471,0,'gradeexport_xml',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(472,0,'gradeexport_xml','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(473,0,'gradeexport_xml','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(474,0,'gradeimport_csv',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(475,0,'gradeimport_csv','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(476,0,'gradeimport_csv','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(477,0,'gradeimport_direct',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(478,0,'gradeimport_direct','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(479,0,'gradeimport_direct','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(480,0,'gradeimport_xml',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(481,0,'gradeimport_xml','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(482,0,'gradeimport_xml','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(483,0,'gradereport_grader',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(484,0,'gradereport_grader','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(485,0,'gradereport_grader','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(486,0,'gradereport_history',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(487,0,'gradereport_history','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(488,0,'gradereport_history','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(489,0,'gradereport_outcomes',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(490,0,'gradereport_outcomes','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(491,0,'gradereport_outcomes','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(492,0,'gradereport_overview',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(493,0,'gradereport_overview','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(494,0,'gradereport_overview','2014111000','2014111000','Plugin installed',NULL,'',0,1435339771),(495,0,'gradereport_singleview',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339771),(496,0,'gradereport_singleview','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339771),(497,0,'gradereport_singleview','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(498,0,'gradereport_user',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(499,0,'gradereport_user','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(500,0,'gradereport_user','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(501,0,'gradingform_guide',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(502,0,'gradingform_guide','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(503,0,'gradingform_guide','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(504,0,'gradingform_rubric',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(505,0,'gradingform_rubric','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(506,0,'gradingform_rubric','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(507,0,'mnetservice_enrol',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(508,0,'mnetservice_enrol','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(509,0,'mnetservice_enrol','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(510,0,'webservice_amf',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(511,0,'webservice_amf','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(512,0,'webservice_amf','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(513,0,'webservice_rest',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(514,0,'webservice_rest','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(515,0,'webservice_rest','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(516,0,'webservice_soap',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(517,0,'webservice_soap','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(518,0,'webservice_soap','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(519,0,'webservice_xmlrpc',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(520,0,'webservice_xmlrpc','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(521,0,'webservice_xmlrpc','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(522,0,'repository_alfresco',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(523,0,'repository_alfresco','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(524,0,'repository_alfresco','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(525,0,'repository_areafiles',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(526,0,'repository_areafiles','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(527,0,'repository_areafiles','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(528,0,'repository_boxnet',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(529,0,'repository_boxnet','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(530,0,'repository_boxnet','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(531,0,'repository_coursefiles',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(532,0,'repository_coursefiles','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(533,0,'repository_coursefiles','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(534,0,'repository_dropbox',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(535,0,'repository_dropbox','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(536,0,'repository_dropbox','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(537,0,'repository_equella',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(538,0,'repository_equella','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(539,0,'repository_equella','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(540,0,'repository_filesystem',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(541,0,'repository_filesystem','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(542,0,'repository_filesystem','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(543,0,'repository_flickr',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(544,0,'repository_flickr','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(545,0,'repository_flickr','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(546,0,'repository_flickr_public',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(547,0,'repository_flickr_public','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(548,0,'repository_flickr_public','2014111000','2014111000','Plugin installed',NULL,'',0,1435339772),(549,0,'repository_googledocs',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339772),(550,0,'repository_googledocs','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339772),(551,0,'repository_googledocs','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(552,0,'repository_local',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(553,0,'repository_local','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(554,0,'repository_local','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(555,0,'repository_merlot',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(556,0,'repository_merlot','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(557,0,'repository_merlot','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(558,0,'repository_picasa',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(559,0,'repository_picasa','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(560,0,'repository_picasa','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(561,0,'repository_recent',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(562,0,'repository_recent','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(563,0,'repository_recent','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(564,0,'repository_s3',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(565,0,'repository_s3','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(566,0,'repository_s3','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(567,0,'repository_skydrive',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(568,0,'repository_skydrive','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(569,0,'repository_skydrive','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(570,0,'repository_upload',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(571,0,'repository_upload','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(572,0,'repository_upload','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(573,0,'repository_url',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(574,0,'repository_url','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(575,0,'repository_url','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(576,0,'repository_user',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(577,0,'repository_user','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(578,0,'repository_user','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(579,0,'repository_webdav',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(580,0,'repository_webdav','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(581,0,'repository_webdav','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(582,0,'repository_wikimedia',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(583,0,'repository_wikimedia','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(584,0,'repository_wikimedia','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(585,0,'repository_youtube',NULL,'2014111001','Starting plugin installation',NULL,'',0,1435339773),(586,0,'repository_youtube','2014111001','2014111001','Upgrade savepoint reached',NULL,'',0,1435339773),(587,0,'repository_youtube','2014111001','2014111001','Plugin installed',NULL,'',0,1435339773),(588,0,'portfolio_boxnet',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(589,0,'portfolio_boxnet','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(590,0,'portfolio_boxnet','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(591,0,'portfolio_download',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(592,0,'portfolio_download','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(593,0,'portfolio_download','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(594,0,'portfolio_flickr',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(595,0,'portfolio_flickr','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(596,0,'portfolio_flickr','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(597,0,'portfolio_googledocs',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(598,0,'portfolio_googledocs','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(599,0,'portfolio_googledocs','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(600,0,'portfolio_mahara',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(601,0,'portfolio_mahara','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(602,0,'portfolio_mahara','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(603,0,'portfolio_picasa',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(604,0,'portfolio_picasa','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(605,0,'portfolio_picasa','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(606,0,'qbehaviour_adaptive',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339773),(607,0,'qbehaviour_adaptive','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339773),(608,0,'qbehaviour_adaptive','2014111000','2014111000','Plugin installed',NULL,'',0,1435339773),(609,0,'qbehaviour_adaptivenopenalty',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(610,0,'qbehaviour_adaptivenopenalty','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(611,0,'qbehaviour_adaptivenopenalty','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(612,0,'qbehaviour_deferredcbm',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(613,0,'qbehaviour_deferredcbm','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(614,0,'qbehaviour_deferredcbm','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(615,0,'qbehaviour_deferredfeedback',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(616,0,'qbehaviour_deferredfeedback','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(617,0,'qbehaviour_deferredfeedback','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(618,0,'qbehaviour_immediatecbm',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(619,0,'qbehaviour_immediatecbm','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(620,0,'qbehaviour_immediatecbm','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(621,0,'qbehaviour_immediatefeedback',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(622,0,'qbehaviour_immediatefeedback','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(623,0,'qbehaviour_immediatefeedback','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(624,0,'qbehaviour_informationitem',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(625,0,'qbehaviour_informationitem','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(626,0,'qbehaviour_informationitem','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(627,0,'qbehaviour_interactive',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(628,0,'qbehaviour_interactive','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(629,0,'qbehaviour_interactive','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(630,0,'qbehaviour_interactivecountback',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(631,0,'qbehaviour_interactivecountback','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(632,0,'qbehaviour_interactivecountback','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(633,0,'qbehaviour_manualgraded',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(634,0,'qbehaviour_manualgraded','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(635,0,'qbehaviour_manualgraded','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(636,0,'qbehaviour_missing',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(637,0,'qbehaviour_missing','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(638,0,'qbehaviour_missing','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(639,0,'qformat_aiken',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(640,0,'qformat_aiken','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(641,0,'qformat_aiken','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(642,0,'qformat_blackboard_six',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(643,0,'qformat_blackboard_six','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(644,0,'qformat_blackboard_six','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(645,0,'qformat_examview',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(646,0,'qformat_examview','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(647,0,'qformat_examview','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(648,0,'qformat_gift',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(649,0,'qformat_gift','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(650,0,'qformat_gift','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(651,0,'qformat_missingword',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(652,0,'qformat_missingword','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(653,0,'qformat_missingword','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(654,0,'qformat_multianswer',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(655,0,'qformat_multianswer','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(656,0,'qformat_multianswer','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(657,0,'qformat_webct',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(658,0,'qformat_webct','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(659,0,'qformat_webct','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(660,0,'qformat_xhtml',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(661,0,'qformat_xhtml','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(662,0,'qformat_xhtml','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(663,0,'qformat_xml',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(664,0,'qformat_xml','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(665,0,'qformat_xml','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(666,0,'tool_assignmentupgrade',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(667,0,'tool_assignmentupgrade','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(668,0,'tool_assignmentupgrade','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(669,0,'tool_availabilityconditions',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(670,0,'tool_availabilityconditions','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(671,0,'tool_availabilityconditions','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(672,0,'tool_behat',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(673,0,'tool_behat','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(674,0,'tool_behat','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(675,0,'tool_capability',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(676,0,'tool_capability','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(677,0,'tool_capability','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(678,0,'tool_customlang',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(679,0,'tool_customlang','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339774),(680,0,'tool_customlang','2014111000','2014111000','Plugin installed',NULL,'',0,1435339774),(681,0,'tool_dbtransfer',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339774),(682,0,'tool_dbtransfer','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(683,0,'tool_dbtransfer','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(684,0,'tool_generator',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(685,0,'tool_generator','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(686,0,'tool_generator','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(687,0,'tool_health',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(688,0,'tool_health','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(689,0,'tool_health','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(690,0,'tool_innodb',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(691,0,'tool_innodb','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(692,0,'tool_innodb','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(693,0,'tool_installaddon',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(694,0,'tool_installaddon','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(695,0,'tool_installaddon','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(696,0,'tool_langimport',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(697,0,'tool_langimport','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(698,0,'tool_langimport','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(699,0,'tool_log',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(700,0,'tool_log','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(701,0,'tool_log','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(702,0,'tool_messageinbound',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(703,0,'tool_messageinbound','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(704,0,'tool_messageinbound','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(705,0,'tool_monitor',NULL,'2014111001','Starting plugin installation',NULL,'',0,1435339775),(706,0,'tool_monitor','2014111001','2014111001','Upgrade savepoint reached',NULL,'',0,1435339775),(707,0,'tool_monitor','2014111001','2014111001','Plugin installed',NULL,'',0,1435339775),(708,0,'tool_multilangupgrade',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(709,0,'tool_multilangupgrade','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(710,0,'tool_multilangupgrade','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(711,0,'tool_phpunit',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(712,0,'tool_phpunit','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(713,0,'tool_phpunit','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(714,0,'tool_profiling',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(715,0,'tool_profiling','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(716,0,'tool_profiling','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(717,0,'tool_replace',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(718,0,'tool_replace','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(719,0,'tool_replace','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(720,0,'tool_spamcleaner',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(721,0,'tool_spamcleaner','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(722,0,'tool_spamcleaner','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(723,0,'tool_task',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(724,0,'tool_task','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(725,0,'tool_task','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(726,0,'tool_timezoneimport',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(727,0,'tool_timezoneimport','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(728,0,'tool_timezoneimport','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(729,0,'tool_unsuproles',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(730,0,'tool_unsuproles','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(731,0,'tool_unsuproles','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(732,0,'tool_uploadcourse',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339775),(733,0,'tool_uploadcourse','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339775),(734,0,'tool_uploadcourse','2014111000','2014111000','Plugin installed',NULL,'',0,1435339775),(735,0,'tool_uploaduser',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(736,0,'tool_uploaduser','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(737,0,'tool_uploaduser','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(738,0,'tool_xmldb',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(739,0,'tool_xmldb','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(740,0,'tool_xmldb','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(741,0,'cachestore_file',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(742,0,'cachestore_file','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(743,0,'cachestore_file','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(744,0,'cachestore_memcache',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(745,0,'cachestore_memcache','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(746,0,'cachestore_memcache','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(747,0,'cachestore_memcached',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(748,0,'cachestore_memcached','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(749,0,'cachestore_memcached','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(750,0,'cachestore_mongodb',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(751,0,'cachestore_mongodb','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(752,0,'cachestore_mongodb','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(753,0,'cachestore_session',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(754,0,'cachestore_session','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(755,0,'cachestore_session','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(756,0,'cachestore_static',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(757,0,'cachestore_static','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(758,0,'cachestore_static','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(759,0,'cachelock_file',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(760,0,'cachelock_file','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(761,0,'cachelock_file','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(762,0,'theme_base',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(763,0,'theme_base','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(764,0,'theme_base','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(765,0,'theme_bootstrapbase',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(766,0,'theme_bootstrapbase','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(767,0,'theme_bootstrapbase','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(768,0,'theme_canvas',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(769,0,'theme_canvas','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(770,0,'theme_canvas','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(771,0,'theme_clean',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(772,0,'theme_clean','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(773,0,'theme_clean','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(774,0,'theme_more',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(775,0,'theme_more','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(776,0,'theme_more','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(777,0,'assignsubmission_comments',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(778,0,'assignsubmission_comments','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(779,0,'assignsubmission_comments','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(780,0,'assignsubmission_file',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(781,0,'assignsubmission_file','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(782,0,'assignsubmission_file','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(783,0,'assignsubmission_onlinetext',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(784,0,'assignsubmission_onlinetext','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(785,0,'assignsubmission_onlinetext','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(786,0,'assignfeedback_comments',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(787,0,'assignfeedback_comments','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(788,0,'assignfeedback_comments','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(789,0,'assignfeedback_editpdf',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(790,0,'assignfeedback_editpdf','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(791,0,'assignfeedback_editpdf','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(792,0,'assignfeedback_file',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(793,0,'assignfeedback_file','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(794,0,'assignfeedback_file','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(795,0,'assignfeedback_offline',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(796,0,'assignfeedback_offline','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(797,0,'assignfeedback_offline','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(798,0,'assignment_offline',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(799,0,'assignment_offline','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339776),(800,0,'assignment_offline','2014111000','2014111000','Plugin installed',NULL,'',0,1435339776),(801,0,'assignment_online',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339776),(802,0,'assignment_online','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(803,0,'assignment_online','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(804,0,'assignment_upload',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(805,0,'assignment_upload','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(806,0,'assignment_upload','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(807,0,'assignment_uploadsingle',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(808,0,'assignment_uploadsingle','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(809,0,'assignment_uploadsingle','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(810,0,'booktool_exportimscp',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(811,0,'booktool_exportimscp','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(812,0,'booktool_exportimscp','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(813,0,'booktool_importhtml',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(814,0,'booktool_importhtml','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(815,0,'booktool_importhtml','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(816,0,'booktool_print',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(817,0,'booktool_print','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(818,0,'booktool_print','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(819,0,'datafield_checkbox',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(820,0,'datafield_checkbox','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(821,0,'datafield_checkbox','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(822,0,'datafield_date',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(823,0,'datafield_date','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(824,0,'datafield_date','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(825,0,'datafield_file',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(826,0,'datafield_file','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(827,0,'datafield_file','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(828,0,'datafield_latlong',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(829,0,'datafield_latlong','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(830,0,'datafield_latlong','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(831,0,'datafield_menu',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(832,0,'datafield_menu','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(833,0,'datafield_menu','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(834,0,'datafield_multimenu',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(835,0,'datafield_multimenu','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(836,0,'datafield_multimenu','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(837,0,'datafield_number',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(838,0,'datafield_number','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(839,0,'datafield_number','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(840,0,'datafield_picture',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(841,0,'datafield_picture','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(842,0,'datafield_picture','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(843,0,'datafield_radiobutton',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(844,0,'datafield_radiobutton','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(845,0,'datafield_radiobutton','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(846,0,'datafield_text',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(847,0,'datafield_text','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(848,0,'datafield_text','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(849,0,'datafield_textarea',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(850,0,'datafield_textarea','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(851,0,'datafield_textarea','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(852,0,'datafield_url',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(853,0,'datafield_url','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(854,0,'datafield_url','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(855,0,'datapreset_imagegallery',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(856,0,'datapreset_imagegallery','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(857,0,'datapreset_imagegallery','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(858,0,'ltiservice_profile',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(859,0,'ltiservice_profile','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(860,0,'ltiservice_profile','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(861,0,'ltiservice_toolproxy',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(862,0,'ltiservice_toolproxy','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(863,0,'ltiservice_toolproxy','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(864,0,'ltiservice_toolsettings',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(865,0,'ltiservice_toolsettings','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(866,0,'ltiservice_toolsettings','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(867,0,'quiz_grading',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(868,0,'quiz_grading','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(869,0,'quiz_grading','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(870,0,'quiz_overview',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(871,0,'quiz_overview','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(872,0,'quiz_overview','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(873,0,'quiz_responses',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(874,0,'quiz_responses','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(875,0,'quiz_responses','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(876,0,'quiz_statistics',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339777),(877,0,'quiz_statistics','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339777),(878,0,'quiz_statistics','2014111000','2014111000','Plugin installed',NULL,'',0,1435339777),(879,0,'quizaccess_delaybetweenattempts',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(880,0,'quizaccess_delaybetweenattempts','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(881,0,'quizaccess_delaybetweenattempts','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(882,0,'quizaccess_ipaddress',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(883,0,'quizaccess_ipaddress','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(884,0,'quizaccess_ipaddress','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(885,0,'quizaccess_numattempts',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(886,0,'quizaccess_numattempts','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(887,0,'quizaccess_numattempts','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(888,0,'quizaccess_openclosedate',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(889,0,'quizaccess_openclosedate','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(890,0,'quizaccess_openclosedate','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(891,0,'quizaccess_password',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(892,0,'quizaccess_password','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(893,0,'quizaccess_password','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(894,0,'quizaccess_safebrowser',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(895,0,'quizaccess_safebrowser','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(896,0,'quizaccess_safebrowser','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(897,0,'quizaccess_securewindow',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(898,0,'quizaccess_securewindow','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(899,0,'quizaccess_securewindow','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(900,0,'quizaccess_timelimit',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(901,0,'quizaccess_timelimit','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(902,0,'quizaccess_timelimit','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(903,0,'scormreport_basic',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(904,0,'scormreport_basic','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(905,0,'scormreport_basic','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(906,0,'scormreport_graphs',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(907,0,'scormreport_graphs','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(908,0,'scormreport_graphs','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(909,0,'scormreport_interactions',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(910,0,'scormreport_interactions','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(911,0,'scormreport_interactions','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(912,0,'scormreport_objectives',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(913,0,'scormreport_objectives','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(914,0,'scormreport_objectives','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(915,0,'workshopform_accumulative',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(916,0,'workshopform_accumulative','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(917,0,'workshopform_accumulative','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(918,0,'workshopform_comments',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(919,0,'workshopform_comments','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(920,0,'workshopform_comments','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(921,0,'workshopform_numerrors',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(922,0,'workshopform_numerrors','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(923,0,'workshopform_numerrors','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(924,0,'workshopform_rubric',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(925,0,'workshopform_rubric','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(926,0,'workshopform_rubric','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(927,0,'workshopallocation_manual',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(928,0,'workshopallocation_manual','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(929,0,'workshopallocation_manual','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(930,0,'workshopallocation_random',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(931,0,'workshopallocation_random','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(932,0,'workshopallocation_random','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(933,0,'workshopallocation_scheduled',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(934,0,'workshopallocation_scheduled','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(935,0,'workshopallocation_scheduled','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(936,0,'workshopeval_best',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(937,0,'workshopeval_best','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(938,0,'workshopeval_best','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(939,0,'atto_accessibilitychecker',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(940,0,'atto_accessibilitychecker','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(941,0,'atto_accessibilitychecker','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(942,0,'atto_accessibilityhelper',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(943,0,'atto_accessibilityhelper','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(944,0,'atto_accessibilityhelper','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(945,0,'atto_align',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(946,0,'atto_align','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(947,0,'atto_align','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(948,0,'atto_backcolor',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(949,0,'atto_backcolor','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(950,0,'atto_backcolor','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(951,0,'atto_bold',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(952,0,'atto_bold','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339778),(953,0,'atto_bold','2014111000','2014111000','Plugin installed',NULL,'',0,1435339778),(954,0,'atto_charmap',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339778),(955,0,'atto_charmap','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(956,0,'atto_charmap','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(957,0,'atto_clear',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(958,0,'atto_clear','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(959,0,'atto_clear','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(960,0,'atto_collapse',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(961,0,'atto_collapse','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(962,0,'atto_collapse','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(963,0,'atto_emoticon',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(964,0,'atto_emoticon','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(965,0,'atto_emoticon','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(966,0,'atto_equation',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(967,0,'atto_equation','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(968,0,'atto_equation','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(969,0,'atto_fontcolor',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(970,0,'atto_fontcolor','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(971,0,'atto_fontcolor','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(972,0,'atto_html',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(973,0,'atto_html','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(974,0,'atto_html','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(975,0,'atto_image',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(976,0,'atto_image','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(977,0,'atto_image','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(978,0,'atto_indent',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(979,0,'atto_indent','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(980,0,'atto_indent','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(981,0,'atto_italic',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(982,0,'atto_italic','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(983,0,'atto_italic','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(984,0,'atto_link',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(985,0,'atto_link','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(986,0,'atto_link','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(987,0,'atto_managefiles',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(988,0,'atto_managefiles','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(989,0,'atto_managefiles','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(990,0,'atto_media',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(991,0,'atto_media','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(992,0,'atto_media','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(993,0,'atto_noautolink',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(994,0,'atto_noautolink','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(995,0,'atto_noautolink','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(996,0,'atto_orderedlist',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(997,0,'atto_orderedlist','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(998,0,'atto_orderedlist','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(999,0,'atto_rtl',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1000,0,'atto_rtl','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1001,0,'atto_rtl','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1002,0,'atto_strike',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1003,0,'atto_strike','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1004,0,'atto_strike','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1005,0,'atto_subscript',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1006,0,'atto_subscript','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1007,0,'atto_subscript','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1008,0,'atto_superscript',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1009,0,'atto_superscript','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1010,0,'atto_superscript','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1011,0,'atto_table',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1012,0,'atto_table','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1013,0,'atto_table','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1014,0,'atto_title',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1015,0,'atto_title','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1016,0,'atto_title','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1017,0,'atto_underline',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1018,0,'atto_underline','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1019,0,'atto_underline','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1020,0,'atto_undo',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1021,0,'atto_undo','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1022,0,'atto_undo','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1023,0,'atto_unorderedlist',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1024,0,'atto_unorderedlist','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1025,0,'atto_unorderedlist','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1026,0,'tinymce_ctrlhelp',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1027,0,'tinymce_ctrlhelp','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1028,0,'tinymce_ctrlhelp','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1029,0,'tinymce_managefiles',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1030,0,'tinymce_managefiles','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1031,0,'tinymce_managefiles','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1032,0,'tinymce_moodleemoticon',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1033,0,'tinymce_moodleemoticon','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1034,0,'tinymce_moodleemoticon','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1035,0,'tinymce_moodleimage',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1036,0,'tinymce_moodleimage','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1037,0,'tinymce_moodleimage','2014111000','2014111000','Plugin installed',NULL,'',0,1435339779),(1038,0,'tinymce_moodlemedia',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339779),(1039,0,'tinymce_moodlemedia','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339779),(1040,0,'tinymce_moodlemedia','2014111000','2014111000','Plugin installed',NULL,'',0,1435339780),(1041,0,'tinymce_moodlenolink',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339780),(1042,0,'tinymce_moodlenolink','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339780),(1043,0,'tinymce_moodlenolink','2014111000','2014111000','Plugin installed',NULL,'',0,1435339780),(1044,0,'tinymce_pdw',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339780),(1045,0,'tinymce_pdw','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339780),(1046,0,'tinymce_pdw','2014111000','2014111000','Plugin installed',NULL,'',0,1435339780),(1047,0,'tinymce_spellchecker',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339780),(1048,0,'tinymce_spellchecker','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339780),(1049,0,'tinymce_spellchecker','2014111000','2014111000','Plugin installed',NULL,'',0,1435339780),(1050,0,'tinymce_wrap',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339780),(1051,0,'tinymce_wrap','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339780),(1052,0,'tinymce_wrap','2014111000','2014111000','Plugin installed',NULL,'',0,1435339780),(1053,0,'logstore_database',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339780),(1054,0,'logstore_database','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339780),(1055,0,'logstore_database','2014111000','2014111000','Plugin installed',NULL,'',0,1435339780),(1056,0,'logstore_legacy',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339780),(1057,0,'logstore_legacy','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339780),(1058,0,'logstore_legacy','2014111000','2014111000','Plugin installed',NULL,'',0,1435339780),(1059,0,'logstore_standard',NULL,'2014111000','Starting plugin installation',NULL,'',0,1435339780),(1060,0,'logstore_standard','2014111000','2014111000','Upgrade savepoint reached',NULL,'',0,1435339780),(1061,0,'logstore_standard','2014111000','2014111000','Plugin installed',NULL,'',0,1435339780),(1062,0,'local_stemlms',NULL,'2010022400','Starting plugin installation',NULL,'',2,1435340553),(1063,0,'local_stemlms','2010022400','2010022400','Upgrade savepoint reached',NULL,'',2,1435340553),(1064,0,'block_mnv_courseenrollment',NULL,'2011062800','Starting plugin installation',NULL,'',2,1439408664),(1065,0,'block_mnv_courseenrollment','2011062800','2011062800','Upgrade savepoint reached',NULL,'',2,1439408664),(1066,0,'block_mnv_courseenrollment','2011062800','2011062800','Plugin installed',NULL,'',2,1439408664),(1067,0,'block_mnv_gradereturn',NULL,'2011062800','Starting plugin installation',NULL,'',2,1443029459),(1068,0,'block_mnv_gradereturn','2011062800','2011062800','Upgrade savepoint reached',NULL,'',2,1443029459),(1069,0,'block_mnv_gradereturn','2011062800','2011062800','Plugin installed',NULL,'',2,1443029459);
/*!40000 ALTER TABLE `mdl_upgrade_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_url`
--

DROP TABLE IF EXISTS `mdl_url`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_url` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `externalurl` longtext NOT NULL,
  `display` smallint(4) NOT NULL DEFAULT '0',
  `displayoptions` longtext,
  `parameters` longtext,
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_url_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='each record is one url resource';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_url`
--

LOCK TABLES `mdl_url` WRITE;
/*!40000 ALTER TABLE `mdl_url` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_url` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_user`
--

DROP TABLE IF EXISTS `mdl_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_user` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `auth` varchar(20) NOT NULL DEFAULT 'manual',
  `confirmed` tinyint(1) NOT NULL DEFAULT '0',
  `policyagreed` tinyint(1) NOT NULL DEFAULT '0',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `suspended` tinyint(1) NOT NULL DEFAULT '0',
  `mnethostid` bigint(10) NOT NULL DEFAULT '0',
  `username` varchar(100) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `idnumber` varchar(255) NOT NULL DEFAULT '',
  `firstname` varchar(100) NOT NULL DEFAULT '',
  `lastname` varchar(100) NOT NULL DEFAULT '',
  `email` varchar(100) NOT NULL DEFAULT '',
  `emailstop` tinyint(1) NOT NULL DEFAULT '0',
  `icq` varchar(15) NOT NULL DEFAULT '',
  `skype` varchar(50) NOT NULL DEFAULT '',
  `yahoo` varchar(50) NOT NULL DEFAULT '',
  `aim` varchar(50) NOT NULL DEFAULT '',
  `msn` varchar(50) NOT NULL DEFAULT '',
  `phone1` varchar(20) NOT NULL DEFAULT '',
  `phone2` varchar(20) NOT NULL DEFAULT '',
  `institution` varchar(255) NOT NULL DEFAULT '',
  `department` varchar(255) NOT NULL DEFAULT '',
  `address` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(120) NOT NULL DEFAULT '',
  `country` varchar(2) NOT NULL DEFAULT '',
  `lang` varchar(30) NOT NULL DEFAULT 'en',
  `calendartype` varchar(30) NOT NULL DEFAULT 'gregorian',
  `theme` varchar(50) NOT NULL DEFAULT '',
  `timezone` varchar(100) NOT NULL DEFAULT '99',
  `firstaccess` bigint(10) NOT NULL DEFAULT '0',
  `lastaccess` bigint(10) NOT NULL DEFAULT '0',
  `lastlogin` bigint(10) NOT NULL DEFAULT '0',
  `currentlogin` bigint(10) NOT NULL DEFAULT '0',
  `lastip` varchar(45) NOT NULL DEFAULT '',
  `secret` varchar(15) NOT NULL DEFAULT '',
  `picture` bigint(10) NOT NULL DEFAULT '0',
  `url` varchar(255) NOT NULL DEFAULT '',
  `description` longtext,
  `descriptionformat` tinyint(2) NOT NULL DEFAULT '1',
  `mailformat` tinyint(1) NOT NULL DEFAULT '1',
  `maildigest` tinyint(1) NOT NULL DEFAULT '0',
  `maildisplay` tinyint(2) NOT NULL DEFAULT '2',
  `autosubscribe` tinyint(1) NOT NULL DEFAULT '1',
  `trackforums` tinyint(1) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `trustbitmask` bigint(10) NOT NULL DEFAULT '0',
  `imagealt` varchar(255) DEFAULT NULL,
  `lastnamephonetic` varchar(255) DEFAULT NULL,
  `firstnamephonetic` varchar(255) DEFAULT NULL,
  `middlename` varchar(255) DEFAULT NULL,
  `alternatename` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_user_mneuse_uix` (`mnethostid`,`username`),
  KEY `mdl_user_del_ix` (`deleted`),
  KEY `mdl_user_con_ix` (`confirmed`),
  KEY `mdl_user_fir_ix` (`firstname`),
  KEY `mdl_user_las_ix` (`lastname`),
  KEY `mdl_user_cit_ix` (`city`),
  KEY `mdl_user_cou_ix` (`country`),
  KEY `mdl_user_las2_ix` (`lastaccess`),
  KEY `mdl_user_ema_ix` (`email`),
  KEY `mdl_user_aut_ix` (`auth`),
  KEY `mdl_user_idn_ix` (`idnumber`),
  KEY `mdl_user_fir2_ix` (`firstnamephonetic`),
  KEY `mdl_user_las3_ix` (`lastnamephonetic`),
  KEY `mdl_user_mid_ix` (`middlename`),
  KEY `mdl_user_alt_ix` (`alternatename`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='One record for each person';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_user`
--

LOCK TABLES `mdl_user` WRITE;
/*!40000 ALTER TABLE `mdl_user` DISABLE KEYS */;
INSERT INTO `mdl_user` VALUES (1,'manual',1,0,0,0,1,'guest','$2y$10$AQkUk.9m9AR.NKzt93hLz.Az3fHEEbJ0W7RCwo.5eZ8kzYAx2Ks7C','','Guest user',' ','root@localhost',0,'','','','','','','','','','','','','en','gregorian','','99',0,0,0,0,'','',0,'','This user is a special user that allows read-only access to some courses.',1,1,0,2,1,0,0,1435339751,0,NULL,NULL,NULL,NULL,NULL),(2,'manual',1,0,0,0,1,'admin','$2y$10$GHp8ECETJ7CrOxkeiXijA.A0uCdcgl.NsfgJx1L99v0WsKJ8xw4h.','','Admin','User','dude@example.com',0,'','','','','','','','','','','','','en','gregorian','','99',1435340364,1443029450,1439408653,1443029450,'172.20.0.1','',0,'','',1,1,0,1,1,0,0,1435340429,0,NULL,'','','','');
/*!40000 ALTER TABLE `mdl_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_user_devices`
--

DROP TABLE IF EXISTS `mdl_user_devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_user_devices` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `appid` varchar(128) NOT NULL DEFAULT '',
  `name` varchar(32) NOT NULL DEFAULT '',
  `model` varchar(32) NOT NULL DEFAULT '',
  `platform` varchar(32) NOT NULL DEFAULT '',
  `version` varchar(32) NOT NULL DEFAULT '',
  `pushid` varchar(255) NOT NULL DEFAULT '',
  `uuid` varchar(255) NOT NULL DEFAULT '',
  `timecreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_userdevi_pususe_uix` (`pushid`,`userid`),
  KEY `mdl_userdevi_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table stores user''s mobile devices information in order';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_user_devices`
--

LOCK TABLES `mdl_user_devices` WRITE;
/*!40000 ALTER TABLE `mdl_user_devices` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_user_devices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_user_enrolments`
--

DROP TABLE IF EXISTS `mdl_user_enrolments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_user_enrolments` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `status` bigint(10) NOT NULL DEFAULT '0',
  `enrolid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `timestart` bigint(10) NOT NULL DEFAULT '0',
  `timeend` bigint(10) NOT NULL DEFAULT '2147483647',
  `modifierid` bigint(10) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_userenro_enruse_uix` (`enrolid`,`userid`),
  KEY `mdl_userenro_enr_ix` (`enrolid`),
  KEY `mdl_userenro_use_ix` (`userid`),
  KEY `mdl_userenro_mod_ix` (`modifierid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Users participating in courses (aka enrolled users) - everyb';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_user_enrolments`
--

LOCK TABLES `mdl_user_enrolments` WRITE;
/*!40000 ALTER TABLE `mdl_user_enrolments` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_user_enrolments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_user_info_category`
--

DROP TABLE IF EXISTS `mdl_user_info_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_user_info_category` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Customisable fields categories';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_user_info_category`
--

LOCK TABLES `mdl_user_info_category` WRITE;
/*!40000 ALTER TABLE `mdl_user_info_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_user_info_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_user_info_data`
--

DROP TABLE IF EXISTS `mdl_user_info_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_user_info_data` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `fieldid` bigint(10) NOT NULL DEFAULT '0',
  `data` longtext NOT NULL,
  `dataformat` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_userinfodata_usefie_uix` (`userid`,`fieldid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Data for the customisable user fields';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_user_info_data`
--

LOCK TABLES `mdl_user_info_data` WRITE;
/*!40000 ALTER TABLE `mdl_user_info_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_user_info_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_user_info_field`
--

DROP TABLE IF EXISTS `mdl_user_info_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_user_info_field` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `shortname` varchar(255) NOT NULL DEFAULT 'shortname',
  `name` longtext NOT NULL,
  `datatype` varchar(255) NOT NULL DEFAULT '',
  `description` longtext,
  `descriptionformat` tinyint(2) NOT NULL DEFAULT '0',
  `categoryid` bigint(10) NOT NULL DEFAULT '0',
  `sortorder` bigint(10) NOT NULL DEFAULT '0',
  `required` tinyint(2) NOT NULL DEFAULT '0',
  `locked` tinyint(2) NOT NULL DEFAULT '0',
  `visible` smallint(4) NOT NULL DEFAULT '0',
  `forceunique` tinyint(2) NOT NULL DEFAULT '0',
  `signup` tinyint(2) NOT NULL DEFAULT '0',
  `defaultdata` longtext,
  `defaultdataformat` tinyint(2) NOT NULL DEFAULT '0',
  `param1` longtext,
  `param2` longtext,
  `param3` longtext,
  `param4` longtext,
  `param5` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Customisable user profile fields';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_user_info_field`
--

LOCK TABLES `mdl_user_info_field` WRITE;
/*!40000 ALTER TABLE `mdl_user_info_field` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_user_info_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_user_lastaccess`
--

DROP TABLE IF EXISTS `mdl_user_lastaccess`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_user_lastaccess` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `courseid` bigint(10) NOT NULL DEFAULT '0',
  `timeaccess` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_userlast_usecou_uix` (`userid`,`courseid`),
  KEY `mdl_userlast_use_ix` (`userid`),
  KEY `mdl_userlast_cou_ix` (`courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='To keep track of course page access times, used in online pa';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_user_lastaccess`
--

LOCK TABLES `mdl_user_lastaccess` WRITE;
/*!40000 ALTER TABLE `mdl_user_lastaccess` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_user_lastaccess` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_user_password_resets`
--

DROP TABLE IF EXISTS `mdl_user_password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_user_password_resets` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL,
  `timerequested` bigint(10) NOT NULL,
  `timererequested` bigint(10) NOT NULL DEFAULT '0',
  `token` varchar(32) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `mdl_userpassrese_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='table tracking password reset confirmation tokens';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_user_password_resets`
--

LOCK TABLES `mdl_user_password_resets` WRITE;
/*!40000 ALTER TABLE `mdl_user_password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_user_password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_user_preferences`
--

DROP TABLE IF EXISTS `mdl_user_preferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_user_preferences` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `value` varchar(1333) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_userpref_usenam_uix` (`userid`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='Allows modules to store arbitrary user preferences';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_user_preferences`
--

LOCK TABLES `mdl_user_preferences` WRITE;
/*!40000 ALTER TABLE `mdl_user_preferences` DISABLE KEYS */;
INSERT INTO `mdl_user_preferences` VALUES (1,2,'auth_manual_passwordupdatetime','1435340429'),(2,2,'htmleditor',''),(3,2,'email_bounce_count','1'),(4,2,'email_send_count','1'),(5,2,'filepicker_recentrepository','4'),(6,2,'filepicker_recentlicense','allrightsreserved');
/*!40000 ALTER TABLE `mdl_user_preferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_user_private_key`
--

DROP TABLE IF EXISTS `mdl_user_private_key`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_user_private_key` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `script` varchar(128) NOT NULL DEFAULT '',
  `value` varchar(128) NOT NULL DEFAULT '',
  `userid` bigint(10) NOT NULL,
  `instance` bigint(10) DEFAULT NULL,
  `iprestriction` varchar(255) DEFAULT NULL,
  `validuntil` bigint(10) DEFAULT NULL,
  `timecreated` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_userprivkey_scrval_ix` (`script`,`value`),
  KEY `mdl_userprivkey_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='access keys used in cookieless scripts - rss, etc.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_user_private_key`
--

LOCK TABLES `mdl_user_private_key` WRITE;
/*!40000 ALTER TABLE `mdl_user_private_key` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_user_private_key` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_webdav_locks`
--

DROP TABLE IF EXISTS `mdl_webdav_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_webdav_locks` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL DEFAULT '',
  `path` varchar(255) NOT NULL DEFAULT '',
  `expiry` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `recursive` tinyint(1) NOT NULL DEFAULT '0',
  `exclusivelock` tinyint(1) NOT NULL DEFAULT '0',
  `created` bigint(10) NOT NULL DEFAULT '0',
  `modified` bigint(10) NOT NULL DEFAULT '0',
  `owner` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_webdlock_tok_uix` (`token`),
  KEY `mdl_webdlock_pat_ix` (`path`),
  KEY `mdl_webdlock_exp_ix` (`expiry`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Resource locks for WebDAV users';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_webdav_locks`
--

LOCK TABLES `mdl_webdav_locks` WRITE;
/*!40000 ALTER TABLE `mdl_webdav_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_webdav_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_wiki`
--

DROP TABLE IF EXISTS `mdl_wiki`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_wiki` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT 'Wiki',
  `intro` longtext,
  `introformat` smallint(4) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `firstpagetitle` varchar(255) NOT NULL DEFAULT 'First Page',
  `wikimode` varchar(20) NOT NULL DEFAULT 'collaborative',
  `defaultformat` varchar(20) NOT NULL DEFAULT 'creole',
  `forceformat` tinyint(1) NOT NULL DEFAULT '1',
  `editbegin` bigint(10) NOT NULL DEFAULT '0',
  `editend` bigint(10) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_wiki_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores Wiki activity configuration';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_wiki`
--

LOCK TABLES `mdl_wiki` WRITE;
/*!40000 ALTER TABLE `mdl_wiki` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_wiki` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_wiki_links`
--

DROP TABLE IF EXISTS `mdl_wiki_links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_wiki_links` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `subwikiid` bigint(10) NOT NULL DEFAULT '0',
  `frompageid` bigint(10) NOT NULL DEFAULT '0',
  `topageid` bigint(10) NOT NULL DEFAULT '0',
  `tomissingpage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_wikilink_fro_ix` (`frompageid`),
  KEY `mdl_wikilink_sub_ix` (`subwikiid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Page wiki links';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_wiki_links`
--

LOCK TABLES `mdl_wiki_links` WRITE;
/*!40000 ALTER TABLE `mdl_wiki_links` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_wiki_links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_wiki_locks`
--

DROP TABLE IF EXISTS `mdl_wiki_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_wiki_locks` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `pageid` bigint(10) NOT NULL DEFAULT '0',
  `sectionname` varchar(255) DEFAULT NULL,
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `lockedat` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Manages page locks';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_wiki_locks`
--

LOCK TABLES `mdl_wiki_locks` WRITE;
/*!40000 ALTER TABLE `mdl_wiki_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_wiki_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_wiki_pages`
--

DROP TABLE IF EXISTS `mdl_wiki_pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_wiki_pages` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `subwikiid` bigint(10) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT 'title',
  `cachedcontent` longtext NOT NULL,
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `timerendered` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `pageviews` bigint(10) NOT NULL DEFAULT '0',
  `readonly` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_wikipage_subtituse_uix` (`subwikiid`,`title`,`userid`),
  KEY `mdl_wikipage_sub_ix` (`subwikiid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores wiki pages';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_wiki_pages`
--

LOCK TABLES `mdl_wiki_pages` WRITE;
/*!40000 ALTER TABLE `mdl_wiki_pages` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_wiki_pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_wiki_subwikis`
--

DROP TABLE IF EXISTS `mdl_wiki_subwikis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_wiki_subwikis` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `wikiid` bigint(10) NOT NULL DEFAULT '0',
  `groupid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_wikisubw_wikgrouse_uix` (`wikiid`,`groupid`,`userid`),
  KEY `mdl_wikisubw_wik_ix` (`wikiid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores subwiki instances';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_wiki_subwikis`
--

LOCK TABLES `mdl_wiki_subwikis` WRITE;
/*!40000 ALTER TABLE `mdl_wiki_subwikis` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_wiki_subwikis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_wiki_synonyms`
--

DROP TABLE IF EXISTS `mdl_wiki_synonyms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_wiki_synonyms` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `subwikiid` bigint(10) NOT NULL DEFAULT '0',
  `pageid` bigint(10) NOT NULL DEFAULT '0',
  `pagesynonym` varchar(255) NOT NULL DEFAULT 'Pagesynonym',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_wikisyno_pagpag_uix` (`pageid`,`pagesynonym`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores wiki pages synonyms';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_wiki_synonyms`
--

LOCK TABLES `mdl_wiki_synonyms` WRITE;
/*!40000 ALTER TABLE `mdl_wiki_synonyms` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_wiki_synonyms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_wiki_versions`
--

DROP TABLE IF EXISTS `mdl_wiki_versions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_wiki_versions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `pageid` bigint(10) NOT NULL DEFAULT '0',
  `content` longtext NOT NULL,
  `contentformat` varchar(20) NOT NULL DEFAULT 'creole',
  `version` mediumint(5) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_wikivers_pag_ix` (`pageid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores wiki page history';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_wiki_versions`
--

LOCK TABLES `mdl_wiki_versions` WRITE;
/*!40000 ALTER TABLE `mdl_wiki_versions` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_wiki_versions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop`
--

DROP TABLE IF EXISTS `mdl_workshop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `intro` longtext,
  `introformat` smallint(3) NOT NULL DEFAULT '0',
  `instructauthors` longtext,
  `instructauthorsformat` smallint(3) NOT NULL DEFAULT '0',
  `instructreviewers` longtext,
  `instructreviewersformat` smallint(3) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL,
  `phase` smallint(3) DEFAULT '0',
  `useexamples` tinyint(2) DEFAULT '0',
  `usepeerassessment` tinyint(2) DEFAULT '0',
  `useselfassessment` tinyint(2) DEFAULT '0',
  `grade` decimal(10,5) DEFAULT '80.00000',
  `gradinggrade` decimal(10,5) DEFAULT '20.00000',
  `strategy` varchar(30) NOT NULL DEFAULT '',
  `evaluation` varchar(30) NOT NULL DEFAULT '',
  `gradedecimals` smallint(3) DEFAULT '0',
  `nattachments` smallint(3) DEFAULT '0',
  `latesubmissions` tinyint(2) DEFAULT '0',
  `maxbytes` bigint(10) DEFAULT '100000',
  `examplesmode` smallint(3) DEFAULT '0',
  `submissionstart` bigint(10) DEFAULT '0',
  `submissionend` bigint(10) DEFAULT '0',
  `assessmentstart` bigint(10) DEFAULT '0',
  `assessmentend` bigint(10) DEFAULT '0',
  `phaseswitchassessment` tinyint(2) NOT NULL DEFAULT '0',
  `conclusion` longtext,
  `conclusionformat` smallint(3) NOT NULL DEFAULT '1',
  `overallfeedbackmode` smallint(3) DEFAULT '1',
  `overallfeedbackfiles` smallint(3) DEFAULT '0',
  `overallfeedbackmaxbytes` bigint(10) DEFAULT '100000',
  PRIMARY KEY (`id`),
  KEY `mdl_work_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table keeps information about the module instances and ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop`
--

LOCK TABLES `mdl_workshop` WRITE;
/*!40000 ALTER TABLE `mdl_workshop` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop_aggregations`
--

DROP TABLE IF EXISTS `mdl_workshop_aggregations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop_aggregations` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL,
  `userid` bigint(10) NOT NULL,
  `gradinggrade` decimal(10,5) DEFAULT NULL,
  `timegraded` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_workaggr_woruse_uix` (`workshopid`,`userid`),
  KEY `mdl_workaggr_wor_ix` (`workshopid`),
  KEY `mdl_workaggr_use_ix` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Aggregated grades for assessment are stored here. The aggreg';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop_aggregations`
--

LOCK TABLES `mdl_workshop_aggregations` WRITE;
/*!40000 ALTER TABLE `mdl_workshop_aggregations` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop_aggregations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop_assessments`
--

DROP TABLE IF EXISTS `mdl_workshop_assessments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop_assessments` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `submissionid` bigint(10) NOT NULL,
  `reviewerid` bigint(10) NOT NULL,
  `weight` bigint(10) NOT NULL DEFAULT '1',
  `timecreated` bigint(10) DEFAULT '0',
  `timemodified` bigint(10) DEFAULT '0',
  `grade` decimal(10,5) DEFAULT NULL,
  `gradinggrade` decimal(10,5) DEFAULT NULL,
  `gradinggradeover` decimal(10,5) DEFAULT NULL,
  `gradinggradeoverby` bigint(10) DEFAULT NULL,
  `feedbackauthor` longtext,
  `feedbackauthorformat` smallint(3) DEFAULT '0',
  `feedbackauthorattachment` smallint(3) DEFAULT '0',
  `feedbackreviewer` longtext,
  `feedbackreviewerformat` smallint(3) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_workasse_sub_ix` (`submissionid`),
  KEY `mdl_workasse_gra_ix` (`gradinggradeoverby`),
  KEY `mdl_workasse_rev_ix` (`reviewerid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Info about the made assessment and automatically calculated ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop_assessments`
--

LOCK TABLES `mdl_workshop_assessments` WRITE;
/*!40000 ALTER TABLE `mdl_workshop_assessments` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop_assessments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop_assessments_old`
--

DROP TABLE IF EXISTS `mdl_workshop_assessments_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop_assessments_old` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL DEFAULT '0',
  `submissionid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `timegraded` bigint(10) NOT NULL DEFAULT '0',
  `timeagreed` bigint(10) NOT NULL DEFAULT '0',
  `grade` double NOT NULL DEFAULT '0',
  `gradinggrade` smallint(3) NOT NULL DEFAULT '0',
  `teachergraded` smallint(3) NOT NULL DEFAULT '0',
  `mailed` smallint(3) NOT NULL DEFAULT '0',
  `resubmission` smallint(3) NOT NULL DEFAULT '0',
  `donotuse` smallint(3) NOT NULL DEFAULT '0',
  `generalcomment` longtext,
  `teachercomment` longtext,
  `newplugin` varchar(28) DEFAULT NULL,
  `newid` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_workasseold_use_ix` (`userid`),
  KEY `mdl_workasseold_mai_ix` (`mailed`),
  KEY `mdl_workasseold_wor_ix` (`workshopid`),
  KEY `mdl_workasseold_sub_ix` (`submissionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Legacy workshop_assessments table to be dropped later in Moo';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop_assessments_old`
--

LOCK TABLES `mdl_workshop_assessments_old` WRITE;
/*!40000 ALTER TABLE `mdl_workshop_assessments_old` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop_assessments_old` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop_comments_old`
--

DROP TABLE IF EXISTS `mdl_workshop_comments_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop_comments_old` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL DEFAULT '0',
  `assessmentid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `mailed` tinyint(2) NOT NULL DEFAULT '0',
  `comments` longtext NOT NULL,
  `newplugin` varchar(28) DEFAULT NULL,
  `newid` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_workcommold_use_ix` (`userid`),
  KEY `mdl_workcommold_mai_ix` (`mailed`),
  KEY `mdl_workcommold_wor_ix` (`workshopid`),
  KEY `mdl_workcommold_ass_ix` (`assessmentid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Legacy workshop_comments table to be dropped later in Moodle';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop_comments_old`
--

LOCK TABLES `mdl_workshop_comments_old` WRITE;
/*!40000 ALTER TABLE `mdl_workshop_comments_old` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop_comments_old` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop_elements_old`
--

DROP TABLE IF EXISTS `mdl_workshop_elements_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop_elements_old` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL DEFAULT '0',
  `elementno` smallint(3) NOT NULL DEFAULT '0',
  `description` longtext NOT NULL,
  `scale` smallint(3) NOT NULL DEFAULT '0',
  `maxscore` smallint(3) NOT NULL DEFAULT '1',
  `weight` smallint(3) NOT NULL DEFAULT '11',
  `stddev` double NOT NULL DEFAULT '0',
  `totalassessments` bigint(10) NOT NULL DEFAULT '0',
  `newplugin` varchar(28) DEFAULT NULL,
  `newid` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_workelemold_wor_ix` (`workshopid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Legacy workshop_elements table to be dropped later in Moodle';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop_elements_old`
--

LOCK TABLES `mdl_workshop_elements_old` WRITE;
/*!40000 ALTER TABLE `mdl_workshop_elements_old` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop_elements_old` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop_grades`
--

DROP TABLE IF EXISTS `mdl_workshop_grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop_grades` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `assessmentid` bigint(10) NOT NULL,
  `strategy` varchar(30) NOT NULL DEFAULT '',
  `dimensionid` bigint(10) NOT NULL,
  `grade` decimal(10,5) NOT NULL,
  `peercomment` longtext,
  `peercommentformat` smallint(3) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_workgrad_assstrdim_uix` (`assessmentid`,`strategy`,`dimensionid`),
  KEY `mdl_workgrad_ass_ix` (`assessmentid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='How the reviewers filled-up the grading forms, given grades ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop_grades`
--

LOCK TABLES `mdl_workshop_grades` WRITE;
/*!40000 ALTER TABLE `mdl_workshop_grades` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop_grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop_grades_old`
--

DROP TABLE IF EXISTS `mdl_workshop_grades_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop_grades_old` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL DEFAULT '0',
  `assessmentid` bigint(10) NOT NULL DEFAULT '0',
  `elementno` bigint(10) NOT NULL DEFAULT '0',
  `feedback` longtext NOT NULL,
  `grade` smallint(3) NOT NULL DEFAULT '0',
  `newplugin` varchar(28) DEFAULT NULL,
  `newid` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_workgradold_wor_ix` (`workshopid`),
  KEY `mdl_workgradold_ass_ix` (`assessmentid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Legacy workshop_grades table to be dropped later in Moodle 2';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop_grades_old`
--

LOCK TABLES `mdl_workshop_grades_old` WRITE;
/*!40000 ALTER TABLE `mdl_workshop_grades_old` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop_grades_old` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop_old`
--

DROP TABLE IF EXISTS `mdl_workshop_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop_old` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `course` bigint(10) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `description` longtext NOT NULL,
  `wtype` smallint(3) NOT NULL DEFAULT '0',
  `nelements` smallint(3) NOT NULL DEFAULT '1',
  `nattachments` smallint(3) NOT NULL DEFAULT '0',
  `phase` tinyint(2) NOT NULL DEFAULT '0',
  `format` tinyint(2) NOT NULL DEFAULT '0',
  `gradingstrategy` tinyint(2) NOT NULL DEFAULT '1',
  `resubmit` tinyint(2) NOT NULL DEFAULT '0',
  `agreeassessments` tinyint(2) NOT NULL DEFAULT '0',
  `hidegrades` tinyint(2) NOT NULL DEFAULT '0',
  `anonymous` tinyint(2) NOT NULL DEFAULT '0',
  `includeself` tinyint(2) NOT NULL DEFAULT '0',
  `maxbytes` bigint(10) NOT NULL DEFAULT '100000',
  `submissionstart` bigint(10) NOT NULL DEFAULT '0',
  `assessmentstart` bigint(10) NOT NULL DEFAULT '0',
  `submissionend` bigint(10) NOT NULL DEFAULT '0',
  `assessmentend` bigint(10) NOT NULL DEFAULT '0',
  `releasegrades` bigint(10) NOT NULL DEFAULT '0',
  `grade` smallint(3) NOT NULL DEFAULT '0',
  `gradinggrade` smallint(3) NOT NULL DEFAULT '0',
  `ntassessments` smallint(3) NOT NULL DEFAULT '0',
  `assessmentcomps` smallint(3) NOT NULL DEFAULT '2',
  `nsassessments` smallint(3) NOT NULL DEFAULT '0',
  `overallocation` smallint(3) NOT NULL DEFAULT '0',
  `timemodified` bigint(10) NOT NULL DEFAULT '0',
  `teacherweight` smallint(3) NOT NULL DEFAULT '1',
  `showleaguetable` smallint(3) NOT NULL DEFAULT '0',
  `usepassword` smallint(3) NOT NULL DEFAULT '0',
  `password` varchar(32) NOT NULL DEFAULT '',
  `newplugin` varchar(28) DEFAULT NULL,
  `newid` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_workold_cou_ix` (`course`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Legacy workshop table to be dropped later in Moodle 2.x';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop_old`
--

LOCK TABLES `mdl_workshop_old` WRITE;
/*!40000 ALTER TABLE `mdl_workshop_old` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop_old` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop_rubrics_old`
--

DROP TABLE IF EXISTS `mdl_workshop_rubrics_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop_rubrics_old` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL DEFAULT '0',
  `elementno` bigint(10) NOT NULL DEFAULT '0',
  `rubricno` smallint(3) NOT NULL DEFAULT '0',
  `description` longtext NOT NULL,
  `newplugin` varchar(28) DEFAULT NULL,
  `newid` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_workrubrold_wor_ix` (`workshopid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Legacy workshop_rubrics table to be dropped later in Moodle ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop_rubrics_old`
--

LOCK TABLES `mdl_workshop_rubrics_old` WRITE;
/*!40000 ALTER TABLE `mdl_workshop_rubrics_old` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop_rubrics_old` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop_stockcomments_old`
--

DROP TABLE IF EXISTS `mdl_workshop_stockcomments_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop_stockcomments_old` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL DEFAULT '0',
  `elementno` bigint(10) NOT NULL DEFAULT '0',
  `comments` longtext NOT NULL,
  `newplugin` varchar(28) DEFAULT NULL,
  `newid` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_workstocold_wor_ix` (`workshopid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Legacy workshop_stockcomments table to be dropped later in M';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop_stockcomments_old`
--

LOCK TABLES `mdl_workshop_stockcomments_old` WRITE;
/*!40000 ALTER TABLE `mdl_workshop_stockcomments_old` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop_stockcomments_old` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop_submissions`
--

DROP TABLE IF EXISTS `mdl_workshop_submissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop_submissions` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL,
  `example` tinyint(2) DEFAULT '0',
  `authorid` bigint(10) NOT NULL,
  `timecreated` bigint(10) NOT NULL,
  `timemodified` bigint(10) NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `content` longtext,
  `contentformat` smallint(3) NOT NULL DEFAULT '0',
  `contenttrust` smallint(3) NOT NULL DEFAULT '0',
  `attachment` tinyint(2) DEFAULT '0',
  `grade` decimal(10,5) DEFAULT NULL,
  `gradeover` decimal(10,5) DEFAULT NULL,
  `gradeoverby` bigint(10) DEFAULT NULL,
  `feedbackauthor` longtext,
  `feedbackauthorformat` smallint(3) DEFAULT '0',
  `timegraded` bigint(10) DEFAULT NULL,
  `published` tinyint(2) DEFAULT '0',
  `late` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_worksubm_wor_ix` (`workshopid`),
  KEY `mdl_worksubm_gra_ix` (`gradeoverby`),
  KEY `mdl_worksubm_aut_ix` (`authorid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Info about the submission and the aggregation of the grade f';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop_submissions`
--

LOCK TABLES `mdl_workshop_submissions` WRITE;
/*!40000 ALTER TABLE `mdl_workshop_submissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop_submissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshop_submissions_old`
--

DROP TABLE IF EXISTS `mdl_workshop_submissions_old`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshop_submissions_old` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL DEFAULT '0',
  `userid` bigint(10) NOT NULL DEFAULT '0',
  `title` varchar(100) NOT NULL DEFAULT '',
  `timecreated` bigint(10) NOT NULL DEFAULT '0',
  `mailed` tinyint(2) NOT NULL DEFAULT '0',
  `description` longtext NOT NULL,
  `gradinggrade` smallint(3) NOT NULL DEFAULT '0',
  `finalgrade` smallint(3) NOT NULL DEFAULT '0',
  `late` smallint(3) NOT NULL DEFAULT '0',
  `nassessments` bigint(10) NOT NULL DEFAULT '0',
  `newplugin` varchar(28) DEFAULT NULL,
  `newid` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdl_worksubmold_use_ix` (`userid`),
  KEY `mdl_worksubmold_mai_ix` (`mailed`),
  KEY `mdl_worksubmold_wor_ix` (`workshopid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Legacy workshop_submissions table to be dropped later in Moo';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshop_submissions_old`
--

LOCK TABLES `mdl_workshop_submissions_old` WRITE;
/*!40000 ALTER TABLE `mdl_workshop_submissions_old` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshop_submissions_old` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshopallocation_scheduled`
--

DROP TABLE IF EXISTS `mdl_workshopallocation_scheduled`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshopallocation_scheduled` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL,
  `enabled` tinyint(2) NOT NULL DEFAULT '0',
  `submissionend` bigint(10) NOT NULL,
  `timeallocated` bigint(10) DEFAULT NULL,
  `settings` longtext,
  `resultstatus` bigint(10) DEFAULT NULL,
  `resultmessage` varchar(1333) DEFAULT NULL,
  `resultlog` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_worksche_wor_uix` (`workshopid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Stores the allocation settings for the scheduled allocator';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshopallocation_scheduled`
--

LOCK TABLES `mdl_workshopallocation_scheduled` WRITE;
/*!40000 ALTER TABLE `mdl_workshopallocation_scheduled` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshopallocation_scheduled` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshopeval_best_settings`
--

DROP TABLE IF EXISTS `mdl_workshopeval_best_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshopeval_best_settings` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL,
  `comparison` smallint(3) DEFAULT '5',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_workbestsett_wor_uix` (`workshopid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Settings for the grading evaluation subplugin Comparison wit';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshopeval_best_settings`
--

LOCK TABLES `mdl_workshopeval_best_settings` WRITE;
/*!40000 ALTER TABLE `mdl_workshopeval_best_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshopeval_best_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshopform_accumulative`
--

DROP TABLE IF EXISTS `mdl_workshopform_accumulative`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshopform_accumulative` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL,
  `sort` bigint(10) DEFAULT '0',
  `description` longtext,
  `descriptionformat` smallint(3) DEFAULT '0',
  `grade` bigint(10) NOT NULL,
  `weight` mediumint(5) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `mdl_workaccu_wor_ix` (`workshopid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='The assessment dimensions definitions of Accumulative gradin';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshopform_accumulative`
--

LOCK TABLES `mdl_workshopform_accumulative` WRITE;
/*!40000 ALTER TABLE `mdl_workshopform_accumulative` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshopform_accumulative` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshopform_comments`
--

DROP TABLE IF EXISTS `mdl_workshopform_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshopform_comments` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL,
  `sort` bigint(10) DEFAULT '0',
  `description` longtext,
  `descriptionformat` smallint(3) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_workcomm_wor_ix` (`workshopid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='The assessment dimensions definitions of Comments strategy f';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshopform_comments`
--

LOCK TABLES `mdl_workshopform_comments` WRITE;
/*!40000 ALTER TABLE `mdl_workshopform_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshopform_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshopform_numerrors`
--

DROP TABLE IF EXISTS `mdl_workshopform_numerrors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshopform_numerrors` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL,
  `sort` bigint(10) DEFAULT '0',
  `description` longtext,
  `descriptionformat` smallint(3) DEFAULT '0',
  `descriptiontrust` bigint(10) DEFAULT NULL,
  `grade0` varchar(50) DEFAULT NULL,
  `grade1` varchar(50) DEFAULT NULL,
  `weight` mediumint(5) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `mdl_worknume_wor_ix` (`workshopid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='The assessment dimensions definitions of Number of errors gr';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshopform_numerrors`
--

LOCK TABLES `mdl_workshopform_numerrors` WRITE;
/*!40000 ALTER TABLE `mdl_workshopform_numerrors` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshopform_numerrors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshopform_numerrors_map`
--

DROP TABLE IF EXISTS `mdl_workshopform_numerrors_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshopform_numerrors_map` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL,
  `nonegative` bigint(10) NOT NULL,
  `grade` decimal(10,5) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_worknumemap_wornon_uix` (`workshopid`,`nonegative`),
  KEY `mdl_worknumemap_wor_ix` (`workshopid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This maps the number of errors to a percentual grade for sub';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshopform_numerrors_map`
--

LOCK TABLES `mdl_workshopform_numerrors_map` WRITE;
/*!40000 ALTER TABLE `mdl_workshopform_numerrors_map` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshopform_numerrors_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshopform_rubric`
--

DROP TABLE IF EXISTS `mdl_workshopform_rubric`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshopform_rubric` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL,
  `sort` bigint(10) DEFAULT '0',
  `description` longtext,
  `descriptionformat` smallint(3) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_workrubr_wor_ix` (`workshopid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='The assessment dimensions definitions of Rubric grading stra';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshopform_rubric`
--

LOCK TABLES `mdl_workshopform_rubric` WRITE;
/*!40000 ALTER TABLE `mdl_workshopform_rubric` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshopform_rubric` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshopform_rubric_config`
--

DROP TABLE IF EXISTS `mdl_workshopform_rubric_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshopform_rubric_config` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `workshopid` bigint(10) NOT NULL,
  `layout` varchar(30) DEFAULT 'list',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mdl_workrubrconf_wor_uix` (`workshopid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Configuration table for the Rubric grading strategy';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshopform_rubric_config`
--

LOCK TABLES `mdl_workshopform_rubric_config` WRITE;
/*!40000 ALTER TABLE `mdl_workshopform_rubric_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshopform_rubric_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mdl_workshopform_rubric_levels`
--

DROP TABLE IF EXISTS `mdl_workshopform_rubric_levels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mdl_workshopform_rubric_levels` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `dimensionid` bigint(10) NOT NULL,
  `grade` decimal(10,5) NOT NULL,
  `definition` longtext,
  `definitionformat` smallint(3) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mdl_workrubrleve_dim_ix` (`dimensionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='The definition of rubric rating scales';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mdl_workshopform_rubric_levels`
--

LOCK TABLES `mdl_workshopform_rubric_levels` WRITE;
/*!40000 ALTER TABLE `mdl_workshopform_rubric_levels` DISABLE KEYS */;
/*!40000 ALTER TABLE `mdl_workshopform_rubric_levels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'moodle'
--

--
-- Dumping routines for database 'moodle'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-23 12:43:16
