SELECT * FROM cart
JOIN products on cart.product_id = products.id
ORDER BY product_id;