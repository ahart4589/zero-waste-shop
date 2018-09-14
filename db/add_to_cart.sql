INSERT INTO cart(product_id, quantity, users_id)
VALUES ($2, $1, $3);

SELECT * FROM cart
JOIN products on cart.product_id = products.id
WHERE users_id = $3
ORDER BY product_id;