INSERT INTO `user` (`name`,`email`,`telephone`,`title`,`password`,`datetime`)
                    VALUES ('asda', 'email',  92333, 'Owner', 'asad', '2022-03-28 04:46:57')
                    ON DUPLICATE KEY UPDATE `name` = VALUES(`name`), 
                        `title` = VALUES(`title`), `password` = VALUES(`password`), `datetime` = VALUES(`datetime`)