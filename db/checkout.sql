DELETE FROM cart;

SELECT * FROM cart
JOIN products on cart.product_id = products.id
ORDER by product_id;
