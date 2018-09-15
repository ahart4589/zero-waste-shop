INSERT INTO orders(stripe_id, users_id, total, products)
VALUES ($1, $2, $3, $4)
RETURNING id;