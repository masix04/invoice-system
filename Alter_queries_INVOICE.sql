
-- Updated Query for insertion so no duplicate
INSERT INTO transaction_detail(`product_id`,`quantity`,`price_per_item`,`type`,`datetime`) VALUES(23, 2, 2000, 'purchase', '2022-03-16 07:51:11') ON DUPLICATE KEY UPDATE `quantity` = VALUES(`quantity`), 
`price_per_item` = VALUES(`price_per_item`),  `type` = VALUES(`type`),  `datetime` = VALUES(`datetime`)

-- Changed Type to Enum so, Only select from 2 Values
ALTER TABLE transaction_detail CHANGE `type` `type` ENUM('Purchase','Sale')