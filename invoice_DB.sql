/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.19-MariaDB : Database - invoice
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`invoice` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `invoice`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `active` enum('1','0') DEFAULT NULL COMMENT 'Either online or offline',
  `datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `admin` */

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `product` */

insert  into `product`(`id`,`name`) values (1,'Tread meter'),(2,'Tread meter'),(3,'Tread meter'),(4,'Tread meter'),(5,'null'),(6,'null');

/*Table structure for table `transaction_detail` */

DROP TABLE IF EXISTS `transaction_detail`;

CREATE TABLE `transaction_detail` (
  `product_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price_per_item` double DEFAULT 0,
  `type` varchar(50) DEFAULT NULL,
  `datetime` datetime NOT NULL,
  PRIMARY KEY (`product_id`,`datetime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `transaction_detail` */

insert  into `transaction_detail`(`product_id`,`quantity`,`price_per_item`,`type`,`datetime`) values (1,NULL,2000,'Purchase: 0','2022-03-15 02:48:36'),(2,NULL,2000,'Purchase','2022-03-15 02:48:51'),(3,NULL,2000,'Purchase','2022-03-15 02:49:08'),(4,NULL,2000,'Purchase','2022-03-15 02:57:26');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
