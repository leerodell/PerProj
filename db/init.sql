drop table if exists product;

create table product (
    product_id serial primary key,
    name text,
    price float,
    description text,
    img text
);

insert into product (name, price, description, img)
VALUES
('name', 9.99, 'heavy', 'img');