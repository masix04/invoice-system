/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.19-MariaDB : Database - invoice
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
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

/*Table structure for table `invoice_detail` */

DROP TABLE IF EXISTS `invoice_detail`;

CREATE TABLE `invoice_detail` (
  `id` varchar(50) NOT NULL COMMENT 'string Id',
  `duration` varchar(50) DEFAULT NULL COMMENT 'Days count',
  `person_name` varchar(255) DEFAULT NULL COMMENT 'Who genrated that invoice',
  `datetime` datetime DEFAULT NULL COMMENT 'At what time invoice generated',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `invoice_detail` */

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `product` */

insert  into `product`(`id`,`name`) values (1,'Tread meter'),(2,'Tread meter'),(3,'Tread meter'),(4,'Tread meter'),(5,'Tread meter'),(6,'Tread meter'),(7,'Tread meter'),(8,'Template Plate Maker'),(9,'Tread meter');

/*Table structure for table `transaction_detail` */

DROP TABLE IF EXISTS `transaction_detail`;

CREATE TABLE `transaction_detail` (
  `product_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price_per_item` double DEFAULT 0,
  `type` enum('Purchase','Sale') DEFAULT NULL,
  `datetime` datetime NOT NULL,
  PRIMARY KEY (`product_id`,`datetime`),
  CONSTRAINT `fk_product_id_from_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `transaction_detail` */

insert  into `transaction_detail`(`product_id`,`quantity`,`price_per_item`,`type`,`datetime`) values (1,2,2000,'Purchase','2022-03-16 07:52:47'),(2,2,2000,'Purchase','2022-03-16 07:51:11'),(3,2,2000,'Purchase','2022-03-16 08:06:18'),(4,1,2000,'Sale','2022-03-17 10:48:06'),(5,3,2200,'Sale','2022-03-17 10:46:20'),(6,2,2100,'Sale','2022-03-18 06:00:35'),(7,1,2500,'Sale','2022-03-18 07:06:57'),(8,2,4000,'Purchase','2022-03-18 07:53:36'),(9,1,2000,'Sale','2022-03-24 02:40:33');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `telephone` mediumint(9) NOT NULL,
  `title` enum('Owner','Employee') DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`email`,`telephone`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `user` */

insert  into `user`(`id`,`name`,`email`,`telephone`,`title`,`password`,`datetime`) values (1,'asda','email',92333,'Owner','asad','2022-03-28 04:46:57');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
