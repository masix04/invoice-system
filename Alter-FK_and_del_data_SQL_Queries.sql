SELECT p.name,td.* FROM product p
                LEFT JOIN transaction_detail td ON td.`product_id` = p.`id`
                
/*  ADDED  A  Foreign Key*/                
ALTER TABLE `invoice`.`transaction_detail` ADD CONSTRAINT `fk_product_id_from_product` FOREIGN KEY (`product_id`) REFERENCES `invoice`.`product`(`id`) ON UPDATE CASCADE ON DELETE CASCADE; 

-- Deleted a Data - might be need to delete data 
DELETE FROM `invoice`.`transaction_detail` WHERE `product_id` = '6' AND `datetime` = '2022-03-17 10:45:06'; 

SELECT COUNT(*) AS total_count FROM product p