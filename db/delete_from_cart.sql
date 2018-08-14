DELETE FROM cart
WHERE product_id = $1;

SELECT * FROM cart
JOIN products on cart.product_id = products.id
ORDER by product_id;