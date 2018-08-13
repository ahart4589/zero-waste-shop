-- CREATE TABLE products(
-- id SERIAL PRIMARY KEY,
-- name VARCHAR(100),
-- price REAL,
-- description TEXT,
-- img TEXT
-- );

-- CREATE TABLE cart(
--   product_id INTEGER references products(id),
--   quantity INTEGER
-- )

-- INSERT INTO products (name, price, description, img)
-- VALUES ('Large Produce Bag', 6.00, 'Perfect for produce, bulk dry ingredients and other groceries. These lightweight bags eliminate the need for disposable plastic bags all together','https://cdn.shopify.com/s/files/1/1797/9639/products/EcoBags_Cotton_Drawstring_Bag_2_1512x.jpg?v=1533662344'), ('Stainless Steel Straw', 5.00, 'Say no to single use, disposable plastic straws with this stainless steel, reusable, dishwasher safe straw', 'https://cdn.shopify.com/s/files/1/1797/9639/products/stainless_steel_straw_1512x.jpg?v=1533578151'),('Travel Soap Box', 10.00, 'Small aluminum box for holding bar of soap 9.5 x 6.3 x 2.8 cm', 'https://cdn.shopify.com/s/files/1/1797/9639/products/Redecker_Travel_Soap_Box_4_1512x.jpg?v=1529592989')