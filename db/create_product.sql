insert into product (name, price, description, img)
VALUES
($1, $2, $3, $4)
returning *;