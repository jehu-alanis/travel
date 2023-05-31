-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: travel
-- ------------------------------------------------------
-- Server version	5.7.21-log

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
-- Table structure for table `calendario`
--

DROP TABLE IF EXISTS `calendario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `calendario` (
  `idcalendario` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_entrada` date DEFAULT NULL,
  `hotel` int(11) NOT NULL,
  `fecha_salida` date DEFAULT NULL,
  PRIMARY KEY (`idcalendario`),
  KEY `de_idx` (`hotel`),
  CONSTRAINT `de` FOREIGN KEY (`hotel`) REFERENCES `hoteles` (`hotel_ca`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendario`
--

LOCK TABLES `calendario` WRITE;
/*!40000 ALTER TABLE `calendario` DISABLE KEYS */;
INSERT INTO `calendario` VALUES (22,'2021-08-17',1,'2021-08-19'),(23,'2021-08-17',1,'2021-08-19'),(24,'2021-08-17',1,'2021-08-19'),(25,'2021-08-17',1,'2021-08-19'),(26,'2021-08-17',1,'2021-08-19'),(27,'2021-08-20',1,'2021-08-22'),(28,'2021-08-20',1,'2021-08-22'),(29,'2021-08-20',2,'2021-08-22'),(30,'2021-08-23',1,'2021-08-25'),(53,'2021-09-21',2,'2021-09-24'),(54,'2021-08-25',1,'2021-08-27'),(55,'2021-08-24',1,'2021-08-26');
/*!40000 ALTER TABLE `calendario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoteles`
--

DROP TABLE IF EXISTS `hoteles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hoteles` (
  `idhoteles` int(11) NOT NULL AUTO_INCREMENT,
  `nombreH` varchar(45) DEFAULT NULL,
  `rated` varchar(45) DEFAULT NULL,
  `habitaciones` varchar(45) DEFAULT NULL,
  `precioH` varchar(45) DEFAULT NULL,
  `hotel_ca` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idhoteles`),
  UNIQUE KEY `hotel_ca_UNIQUE` (`hotel_ca`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoteles`
--

LOCK TABLES `hoteles` WRITE;
/*!40000 ALTER TABLE `hoteles` DISABLE KEYS */;
INSERT INTO `hoteles` VALUES (4,'Hotel Tonala','3','3','1000',1,'https://i.ibb.co/Qrn4k09/hoteltonala.jpg'),(5,'Hotel Grajanda','4','10','1300',2,'https://i.ibb.co/jgbQWJp/hotelgrajanda.jpg'),(6,'Hotel Garden','5','20','1500',3,'https://i.ibb.co/Fm81rGW/gotelgarden.jpg');
/*!40000 ALTER TABLE `hoteles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itenerario`
--

DROP TABLE IF EXISTS `itenerario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `itenerario` (
  `iditenerario` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `idpaquete` int(11) NOT NULL,
  PRIMARY KEY (`iditenerario`),
  KEY `asd_idx` (`idpaquete`),
  CONSTRAINT `asd` FOREIGN KEY (`idpaquete`) REFERENCES `paquetes` (`paquetesid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itenerario`
--

LOCK TABLES `itenerario` WRITE;
/*!40000 ALTER TABLE `itenerario` DISABLE KEYS */;
INSERT INTO `itenerario` VALUES (1,'Dia 1','Check in en el Hotel Tonala, Salida al Centro,Salida al Parque,Noche Libre',1),
(2,'Dia 2','Check in en el Hotel Tonala,Salida a Puerto Arista,Salida al La cruceita,Regreso a Tonala,Noche Libre',1),
(3,'Dia 3','Check in en el Hotel Tonala,Salida al Centro,Checkout',1),
(4,'Dia 1','Check in en el Hotel Grajanda, Salida al Centro, Salida al Parque,Salida al La cruceita,Noche Libre',2),
(5,'Dia 2','Check in en el Hotel Grajanda,Salida a Puerto Arista ,Regreso a Tonala',2),
(6,'Dia 3','Check in en el Hotel Grajanda,Salida a Boca del Cielo ,Regreso a Tonala',2),
(7,'Dia 4','Check in en el Hotel Grajanda,Salida al Centro ,Checkout',2),
(8,'Dia 1','Check in en el Hotel Garden,  Salida al Centro, Salida al Parque,Salida al La cruceita,Noche Libre',3),
(9,'Dia 2','Check in en el Hotel Garden, Salida a Puerto Arista ,Regreso a Tonala,Noche Libre',3),
(10,'Dia 3','Check in en el Hotel Garden, Salida a Boca del Cielo ,Regreso a Tonala, Noche Libre',3),
(11,'Dia 4','Check in en el Hotel Garden, Salida a Madre Sal ,Regreso a Tonala, Noche Libre',3),
(12,'Dia 5','Check in en el Hotel Garden,Salida al Centro ,Checkout',3);
/*!40000 ALTER TABLE `itenerario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paquetes`
--

DROP TABLE IF EXISTS `paquetes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paquetes` (
  `paquetesid` int(11) NOT NULL AUTO_INCREMENT,
  `precio` varchar(45) DEFAULT NULL,
  `dias` varchar(45) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `hotel` int(11) NOT NULL,
  `images` varchar(255) DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `subtitle` varchar(45) DEFAULT NULL,
  `rating` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`paquetesid`),
  UNIQUE KEY `hotel_UNIQUE` (`hotel`),
  CONSTRAINT `paho` FOREIGN KEY (`hotel`) REFERENCES `hoteles` (`hotel_ca`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paquetes`
--

LOCK TABLES `paquetes` WRITE;
/*!40000 ALTER TABLE `paquetes` DISABLE KEYS */;
INSERT INTO `paquetes` VALUES (1,'5000','3','Conoce a Tonala Chiapas y disfruta de su famosa playa del Oceano Pacifico Puerto Arista, por 2 noches',1,'https://i.ibb.co/k2vv52J/Entrada.jpg','Paquete Sol y Playa','Tonala - Puerto Arista','3'),(2,'6000','4','Conoce Tonala Chiapas y disfruta de dos de sus famosas playas del oceano pacifico Puerto Arista y Boca del Cielo, por 3 noches',2,'https://i.ibb.co/5R5zFHT/boca.jpg','Paquete Sol y Playa Plata','Tonala - Puerto Arista- Boca del cielo','4'),(3,'7000','5','Viaje total a Tonala Chiapas, relajate en sus playas como lo son Puerto Arista, Boca del Cielo y MadreSal, disfruta la comida tipica por 4  noches.',3,'https://i.ibb.co/LtxM2bN/madrezal2.jpg','Paquete Sol y Playa Oro','Todos los Lugares','5');
/*!40000 ALTER TABLE `paquetes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viajes`
--

DROP TABLE IF EXISTS `viajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `viajes` (
  `idviajes` int(11) NOT NULL AUTO_INCREMENT,
  `paquete` varchar(255) DEFAULT NULL,
  `fecha_entrada` varchar(45) DEFAULT NULL,
  `fecha_salida` varchar(45) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `fecha` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
  `importe` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idviajes`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viajes`
--

LOCK TABLES `viajes` WRITE;
/*!40000 ALTER TABLE `viajes` DISABLE KEYS */;
INSERT INTO `viajes` VALUES (2,'Paquete Sol y Playa Plata','2021-8-25','2021-8-28','jehu alanis','jehu@hotmail.com','2021-08-19 00:05:05.460083','6000');
/*!40000 ALTER TABLE `viajes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-18 23:31:13
'Global periodicidad':       cfdi.informacionAdicional.periodicidad || '',
            'Global meses':              cfdi.informacionAdicional.meses || '',
            'Global año':                cfdi.informacionAdicional.año || '',

             { "value": "Global periodicidad",  "selected": true },
        { "value": "Global meses",         "selected": true },
        { "value": "Global año",           "selected": true },