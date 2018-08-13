UPDATE cart
SET quantity = $1
WHERE product_id = $2;

SELECT * FROM cart
JOIN products on cart.product_id = products.product_id
ORDER BY product_id;