use Angusales;

insert into Companies
( company_id, name, address, country)
values
(1, 'Similar Web', 'Ahad Haam St 1, Tel Aviv', 'Israel');

insert into Companies
( company_id, name, address, country)
values
(2, 'Check Point', 'Rothschild 5, Tel Aviv', 'Israel');

insert into Companies
( company_id, name, address, country)
values
(3, 'Wix', 'Amezach 15, Tel Aviv', 'Israel');




insert into Customers
(customer_id, firstName, lastName, company_id, email, phone)
values
(1, 'Oren' , 'Yehezkel', 1, 'oreny@similar-web.com', '972542408215');

insert into Customers
(customer_id, firstName, lastName, company_id, email, phone)
values
(2, 'David' , 'Chuwer', 2, 'davidc@check-point.com', '972542408215');

insert into Customers
(customer_id, firstName, lastName, company_id, email, phone)
values
(3, 'Hadar' , 'Guttman', 3, 'hadarg@wix.com', '972542408215');




insert into Comments
(comment_id, creationDate , customer_id, text)
values
(1, '2017-12-27', 1, 'Wants more diagram explanations');

insert into Comments
(comment_id, creationDate , customer_id, text)  
values
(2, '2018-05-07', 1, 'Great customer');

insert into Comments
(comment_id, creationDate , customer_id, text)
values
(3, '2018-05-07', 2, 'Also surfs in Gordon, in Friday mornings');

insert into Comments
(comment_id, creationDate , customer_id, text)
values
(4, '2018-04-25', 3, 'Needs a lot of buttering');

insert into Comments
(comment_id, creationDate , customer_id, text)
values
(5, '2018-05-25', 3, 'Going for the premium');

insert into Comments
(comment_id, creationDate , customer_id, text)
values
(6, '2018-06-25', 3, 'Hungry to conquer the world');