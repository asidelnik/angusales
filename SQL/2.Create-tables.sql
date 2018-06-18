use Angusales;


create table Company(
    name varchar(30),
    address varchar(60),
    country varchar(30),
    PRIMARY KEY( name )
);

create table Customer(
    customer_id int, 
    firstName varchar(30),
    lastName varchar(60),
    company varchar(30),
    email varchar(60),
    phone varchar(30),
    PRIMARY KEY( customer_id ),
    FOREIGN KEY( company ) REFERENCES Company( name )
);

create table Comment(
    comment_id int,
    creationDate Date,
    customer_id int,
    text varchar(60),
    PRIMARY KEY( comment_id ),
    FOREIGN KEY( customer_id ) REFERENCES Customer( customer_id )
);