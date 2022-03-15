-- Added a `quantity` coloumn
ALTER TABLE transaction_detail ADD COLUMN `quantity` INT(11) AFTER `product_id` 

-- Altered price column to `price_per_item`
ALTER TABLE transaction_detail CHANGE `price` `price_per_item` DOUBLE DEFAULT 0