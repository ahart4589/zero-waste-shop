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


-- //products list//
-- ('Silicone Ice Tray', 12.00, 'Silicone ice tray makes 12 ice cubes.  Includes a lid that blocks out weird flavors from your freezer and internal steel frame makes filling a breeze', 'https://cdn.shopify.com/s/files/1/1797/9639/products/Peak_Ice_Cube_Trays_Everyday_6_1512x.jpg?v=1531845902')

-- CREATE TABLE orders(
-- id SERIAL PRIMARY KEY,
-- stripe_id TEXT
-- );


-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   auth_id TEXT,
--   name VARCHAR,
--   email VARCHAR
-- );


-- ALTER TABLE orders 
--   ADD COLUMN users_id INTEGER references users(id);


-- INSERT INTO products (name, price, description, img)
-- VALUES 
-- ('Net Shopping Bag', 16.00, 'Made from 100% organic cotton, the net bag is light and versatile for carrying market groceries to beach essentials. Each bag features two sets of handles, long straps for the shoulder and shorter straps for the wrist. Machine wash, cold','https://cdn.shopify.com/s/files/1/1721/9289/products/French_Net_Bag_1_1024x.jpg?v=1493751960'),
-- ('Large Net Produce Bag', 7.00, 'Say goodbye to single-use plastic produce bags. This big boy holds an abundance of fruit and veggies. Organic cotton net produce sack with drawstring closure. 12"W x 15"H', 'https://cdn.shopify.com/s/files/1/1797/9639/products/large_net_sack_on_table_with_citrus_fruit_falling_out_top_view_1512x.jpg?v=1533662322'),
-- ('Net Produce Bags, Set of 5', 20.00, 'These organic cotton mesh produce bags are a sustainable and reusable alternative to plastic bags. Each bag comes with a handy drawstring to help you keep your food from falling out—no more tying plastic bags in a knot!', 'https://cdn.shopify.com/s/files/1/1721/9289/products/New_Mesh_Bag_1_49a93f45-1dca-48a7-8bda-4f50db4c802d_1024x.jpg?v=1497278679'),
-- ('Medium Produce Bag', 5.00, 'Perfect for produce, bulk dry ingredients and other groceries these easy to use, lightweight bags eliminate the need for disposable plastic bags all together. Cotton Drawstring Produce Bag size 8.5"W x 11"H', 'https://cdn.shopify.com/s/files/1/1797/9639/products/EcoBags_Cotton_Drawstring_Medium_Bag_3_cad8eea0-d105-4a1c-9e47-3026c00d8172_1512x.jpg?v=1533662331'),
-- ('Medium Produce Bags, Set of 5', 20.00, 'made from organic cotton and are a sustainable and reusable alternative to plastic bags. The fabric is breathable and can be dampened to keep refrigerated greens crisp. They are also great for holding fine grain bulk items like flour, polenta and quinoa. Set of 5 (12" x 15")', 'https://cdn.shopify.com/s/files/1/1721/9289/products/New_Muslin_Bag_1_75625563-6078-4fae-bfa7-d9f1735680ce_1024x.jpg?v=1497119004'),
-- ('Large Produce Bag', 6.00, 'Perfect for produce, bulk dry ingredients and other groceries. These lightweight bags eliminate the need for disposable plastic bags all together. Cotton Drawstring Produce Bag size 12"W x 15"H','https://cdn.shopify.com/s/files/1/1797/9639/products/EcoBags_Cotton_Drawstring_Bag_2_1512x.jpg?v=1533662344'),
-- ('Sandwich Bag', 10.00, 'This juco sandwich bag is completely plastic-free. No velcro, no nylon lining, just juco fabric, a cotton string loop and two wooden buttons to adjust the size of the bag to either a large sandwich or a small snack of nuts or fruits. Eco fabric composed of 75% jute and 25% cotton.', 'https://cdn.shopify.com/s/files/1/1797/9639/products/sandwich3_1512x.jpg?v=1523297661'),
-- ('Beeswax Food Wrap', 20.00, 'Made with beeswax, tree resin, organic jojoba oil infused into a hemp and organic cotton cloth, wrap bunches of carrots, keep mushrooms firm and cover a half eaten plate of food for later, never use plastic wrap again! Includes: 1 Small Wrap 18 cm x 18 cm 1 Medium Wrap 25 cm x 25 cm 1 Large Wrap 33 cm x 33 cm Wrap, wash, reuse', 'https://cdn.shopify.com/s/files/1/1797/9639/products/abeego-beeswax-wrap-cilantro-variety-1_900x.jpg?v=1524756115'),
-- ('Chemex Reusable Coffee Filters, 3 cup', 15.00, 'The Chemex Coffee Filter is made from organic cotton and is a sustainable alternative to disposable filters. Besides being good for the earth, the Chemex filter also brews a rich and robust cup of coffee, absorbing some of the coffee bean oils while allowing the acids to pass through. The filter is easy to clean.', 'https://cdn.shopify.com/s/files/1/1721/9289/products/chemex_3_d167dd76-2212-4f54-9a8c-d174db281c1c_1024x.jpg?v=1524686513'),
-- ('Stainless Steel Funnels', 16.00, 'Stainless steel funnels are useful for transferring liquids (nut milks, oils, vinegars) into bottles and adding spices and herbs into jars. The funnels feature a slender stem, ideal for fitting in narrow openings, and come in a set of three sizes held together with a clip ring. Set of 3', 'https://cdn.shopify.com/s/files/1/1721/9289/products/Funnel_6_39bf116c-cd53-479a-954f-a198e16e390f_1024x.jpg?v=1499543412'),
-- ('Stainless Steel Ice Tray', 30.00, 'A stainless steel ice tray is a beautiful and sustainable alternative to plastic ice trays. This lever-style is durable and dishwasher safe.', 'https://cdn.shopify.com/s/files/1/1721/9289/products/Ice_Tray_6_1024x.jpg?v=1499543454'),
-- ('Loose Leaf Tea Spoon', 9.00,'This stainless steel loose leaf tea spoon is a must for tea lovers. Lightly squeeze the handle to open the spoon and add your favorite loose leaf tea, place in a tea cup with hot water, stir and remove when you have the desired consistency. The spoon is great for travel and on-the-go and cleaning the spoon afterwards is a cinch.', 'https://cdn.shopify.com/s/files/1/1721/9289/products/Loose_Leaf_Tea_Spoon_1_1024x.jpg?v=1499789860'),
-- ('Stainless Steel Straw', 5.00, 'Say no to single use, disposable plastic straws with this stainless steel, reusable, dishwasher safe straw', 'https://cdn.shopify.com/s/files/1/1797/9639/products/stainless_steel_straw_1512x.jpg?v=1533578151'),
-- ('Straw Brush', 3.00, 'Keep your reusable metal, silicon, or bamboo straws squeaky clean with this straw brush. 100% stainless steel handle and nylon bristles', 'https://cdn.shopify.com/s/files/1/1797/9639/products/straw_cleanerr_1512x.jpg?v=1523899920'),
-- ('Bamboo Travel Utensils', 15.00, 'Bamboo travel utensils are a must have for waste-free dining on the go. The utensils are 100% bamboo and include a knife, fork, spoon and chopsticks. The blue case is made from recycled plastic bottles and features a handy carabiner on the back so you can clip onto your bag and go.', 'https://cdn.shopify.com/s/files/1/1721/9289/products/ToGoWare_black_1024x.jpg?v=1503079521'),
-- ('Travel Soap Box', 10.00, 'Small aluminum box for holding bar of soap 9.5 x 6.3 x 2.8 cm', 'https://cdn.shopify.com/s/files/1/1797/9639/products/Redecker_Travel_Soap_Box_4_1512x.jpg?v=1529592989'),
-- ('Refillable Dental Floss', 8.00, 'Made from mulberry silk floss and coated in (vegan) candelilla wax, this floss is sure to make you (and the planet) smile! Glass Dental Lace container with one 33 yard spool of biodegradable mulberry silk floss coated in candlilla wax inside the container and one refill spool.', 'https://cdn.shopify.com/s/files/1/1797/9639/products/dental_lace_and_ukonserve_mini_steel_container_on_bathroom_counter_top_1512x.jpg?v=1524757936'),
-- ('Reusable Unpaper Towels', 16.00, 'Reusable unpaper towels are the perfect replacement for disposable paper towels. Each towel is made from 100% cotton with durable, stitched edges. The towels get more absorbent as you wash them. Comes in a rainbow pack of 12 towels to add a bit of play and color to daily chores.  Comes in pack of 12, 100% cotton, each towel is 12" x 10"', 'https://cdn.shopify.com/s/files/1/1721/9289/products/Reusable_Un-Paper_Towels_1_1024x.jpg?v=1502748158'),
-- ('Wood Cleaning Brush Kit', 50.00, 'This collection of wood cleaning brushes will help streamline your clean routine. Compared to smelly plastic sponges, these brushes are designed to last (without the odor) and can be composted at the end of life. The kit includes a bottle brush for glasses, jars and other narrow openings, a wood dish brush and replacement head, a scrub brush for hard to clean surfaces and 2 wood pot brushes for stuck on food. Each kit comes with: 1 scrub brush, 1 bottle brush, 1 dish brush, 1 dish brush replacement head, 2 pot brushes', 'https://cdn.shopify.com/s/files/1/1721/9289/products/brush_bundle_1024x.jpg?v=1516130649'),
-- ('Toilet Brush', 35.00, 'This plastic free toilet brush is the ideal non-plastic, completely natural - and ultimately compostable - toilet brush.  Brush:  37 x 7.5 x 7.5 cm / 14.5" x 3" x 3"; Stand:  25 x 12.7 cm / 9.8" x 5"', 'https://cdn.shopify.com/s/files/1/1797/9639/products/toilet_brush1_1512x.jpg?v=1534803048'),
-- ('Natural Wool Dryer Balls', 30.00, 'The new heroes of the laundry room reduce drying time, wrinkles, and static, soften clothes naturally- keep harmful chemicals off of your laundry and dryer sheets out of landfills. 100% natural wool, muslin bag.', 'https://cdn.shopify.com/s/files/1/1797/9639/products/dryerballs_1512x.jpg?v=1523302242');





-- UPDATE products
-- SET img = 'https://cdn.shopify.com/s/files/1/1721/9289/products/Bees_Wrap_3_1024x.jpg?v=1516410409'
-- WHERE
--  id = 11;





-- CREATE TABLE order_products(
-- id SERIAL PRIMARY KEY,
-- order_id INTEGER references orders(id),
-- product_id INTEGER references products(id),
-- quantity INTEGER,
-- total INTEGER
-- );