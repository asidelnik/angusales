use Angusales;


create table Companies(
    company_id int, 
    name varchar(30),
    address varchar(60),
    country varchar(30),
    PRIMARY KEY( company_id )
);

create table Customers(
    customer_id int, 
    firstName varchar(30),
    lastName varchar(60),
    company_id int,
    email varchar(60),
    phone varchar(30),
    PRIMARY KEY( customer_id ),
    FOREIGN KEY( company_id ) REFERENCES Companies( company_id )
);

create table Comments(
    comment_id int,
    creationDate Date,
    customer_id int,
    text varchar(60),
    PRIMARY KEY( comment_id ),
    FOREIGN KEY( customer_id ) REFERENCES Customers( customer_id )
);