-- ShopSphere Seed Data
-- Run AFTER schema.sql: psql -d shopsphere -f server/db/seed.sql

-- Categories
INSERT INTO categories (name) VALUES
  ('Electronics'),
  ('Books'),
  ('Clothing'),
  ('Home & Kitchen'),
  ('Sports & Outdoors');

-- Products
-- Electronics (category_id = 1)
INSERT INTO products (name, description, price, stock, category_id, main_image_url) VALUES
  ('Wireless Noise-Cancelling Headphones',
   'Premium over-ear headphones with active noise cancellation, 30-hour battery life, and foldable design for travel.',
   79.99, 45,
   1, 'https://picsum.photos/seed/headphones/600/600'),

  ('Mechanical Gaming Keyboard',
   'Compact tenkeyless mechanical keyboard with RGB backlighting, tactile switches, and detachable USB-C cable.',
   54.99, 60,
   1, 'https://picsum.photos/seed/keyboard/600/600'),

  ('4K USB-C Monitor 27"',
   '27-inch IPS display with 4K UHD resolution, 99% sRGB coverage, USB-C 65W power delivery, and built-in speakers.',
   349.99, 20,
   1, 'https://picsum.photos/seed/monitor/600/600'),

  ('True Wireless Earbuds',
   'Compact earbuds with 6-hour playtime, 24-hour charging case, IPX4 sweat resistance, and touch controls.',
   39.99, 100,
   1, 'https://picsum.photos/seed/earbuds/600/600'),

  ('Smart LED Desk Lamp',
   'Touch-controlled desk lamp with 5 colour temperatures, USB-A charging port, auto-dimming, and eye-care mode.',
   29.99, 80,
   1, 'https://picsum.photos/seed/desklamp/600/600'),

  ('Portable Power Bank 20000mAh',
   'High-capacity power bank with 65W USB-C PD output, dual USB-A ports, and LCD battery indicator.',
   44.99, 75,
   1, 'https://picsum.photos/seed/powerbank/600/600'),   

-- Books (category_id = 2)
  ('Clean Code: A Handbook of Agile Software Craftsmanship',
   'Robert C. Martin''s guide to writing readable, maintainable, and testable code. Essential for every developer.',
   34.99, 120,
   2, 'https://picsum.photos/seed/cleancode/600/600'),

  ('The Pragmatic Programmer',
   'From journeyman to master — timeless advice on software development practices, tools, and career growth.',
   39.99, 90,
   2, 'https://picsum.photos/seed/pragprog/600/600'),

  ('Designing Data-Intensive Applications',
   'Deep dive into distributed systems, databases, and data engineering by Martin Kleppmann.',
   49.99, 60,
   2, 'https://picsum.photos/seed/ddia/600/600'),

  ('Atomic Habits',
   'James Clear''s bestselling guide on building good habits and breaking bad ones through small, consistent changes.',
   16.99, 200,
   2, 'https://picsum.photos/seed/atomichabits/600/600'),

  ('The Art of Problem Solving Vol. 1',
   'Classic mathematics competition preparation book covering algebra, geometry, counting, and number theory.',
   24.99, 55,
   2, 'https://picsum.photos/seed/aops/600/600'),

-- Clothing (category_id = 3)
  ('Men''s Classic Fit Oxford Shirt',
   'Breathable 100% cotton Oxford weave shirt. Available in multiple colours. Machine washable.',
   29.99, 150,
   3, 'https://picsum.photos/seed/oxfordshirt/600/600'),

  ('Women''s High-Waist Yoga Pants',
   'Four-way stretch fabric with moisture-wicking finish, hidden waistband pocket, and squat-proof design.',
   34.99, 130,
   3, 'https://picsum.photos/seed/yogapants/600/600'),

  ('Unisex Zip-Up Hoodie',
   'Midweight fleece hoodie with kangaroo pocket, ribbed cuffs, and a relaxed fit. Ideal for layering.',
   44.99, 95,
   3, 'https://picsum.photos/seed/hoodie/600/600'),

  ('Men''s Running Shorts',
   'Lightweight 5-inch inseam running shorts with built-in liner, back zip pocket, and reflective trim.',
   22.99, 110,
   3, 'https://picsum.photos/seed/runningshorts/600/600'),

  ('Women''s Trench Coat',
   'Classic double-breasted trench coat with belt, storm flap, and water-resistant finish. Knee length.',
   89.99, 40,
   3, 'https://picsum.photos/seed/trenchcoat/600/600'),

-- Home & Kitchen (category_id = 4)
  ('Stainless Steel Cookware Set 10-Piece',
   'Tri-ply stainless steel pots and pans set compatible with all cooktops including induction. Oven safe to 260°C.',
   129.99, 30,
   4, 'https://picsum.photos/seed/cookware/600/600'),

  ('Cold Brew Coffee Maker 1L',
   'Simple immersion cold brew maker with a fine mesh filter and airtight glass carafe. No electricity needed.',
   27.99, 70,
   4, 'https://picsum.photos/seed/coldbrew/600/600'),

  ('Bamboo Cutting Board Set',
   'Set of 3 bamboo cutting boards in small, medium, and large with juice groove and non-slip rubber feet.',
   24.99, 85,
   4, 'https://picsum.photos/seed/cuttingboard/600/600'),

  ('Stand Mixer 4.5 Qt',
   'Tilt-head stand mixer with 10 speeds, stainless steel bowl, flat beater, dough hook, and wire whip.',
   199.99, 25,
   4, 'https://picsum.photos/seed/standmixer/600/600'),

  ('Air Purifier with HEPA Filter',
   'Covers up to 40 m². True HEPA + activated carbon filter captures 99.97% of particles. Whisper-quiet sleep mode.',
   89.99, 35,
   4, 'https://picsum.photos/seed/airpurifier/600/600'),

-- Sports & Outdoors (category_id = 5)
  ('Adjustable Dumbbell Set 5-25 kg',
   'Space-saving dial-select dumbbell pair. Replaces 15 sets of weights. Anti-roll cradles included.',
   179.99, 20,
   5, 'https://picsum.photos/seed/dumbbells/600/600'),

  ('Resistance Bands Set (5 Levels)',
   'Set of 5 latex resistance bands from light to extra-heavy. Includes carry bag and exercise guide.',
   17.99, 150,
   5, 'https://picsum.photos/seed/resistancebands/600/600'),

  ('Yoga Mat Non-Slip 6mm',
   'Extra-wide 72"×26" yoga mat with alignment lines, carry strap, and moisture-wicking textured surface.',
   26.99, 120,
   5, 'https://picsum.photos/seed/yogamat/600/600'),

  ('Hydration Running Vest 10L',
   'Lightweight trail running vest with 2L water bladder compatible reservoir sleeve and 8L gear storage.',
   69.99, 40,
   5, 'https://picsum.photos/seed/runningvest/600/600'),

  ('Camping Lantern Rechargeable',
   '1000-lumen LED lantern with 4 brightness modes, 360° lighting, IPX6 waterproof, and built-in USB-A output.',
   34.99, 65,
   5, 'https://picsum.photos/seed/lantern/600/600'),

  ('Foam Roller 60cm',
   'High-density EVA foam roller for myofascial release and muscle recovery. Grid texture for targeted massage.',
   18.99, 130,
   5, 'https://picsum.photos/seed/foamroller/600/600');

-- Additional products per category
INSERT INTO products (name, description, price, stock, category_id, main_image_url) VALUES
  -- Electronics (category_id = 1)
  ('1080p HD Webcam',
   'Full HD webcam with built-in noise-reducing stereo microphone, auto light correction, and universal clip mount.',
   49.99, 85,
   1, 'https://picsum.photos/seed/webcam/600/600'),

  ('Smart Watch Series 5',
   'Fitness & health tracking smartwatch with always-on AMOLED display, GPS, SpO2 sensor, and 7-day battery life.',
   99.99, 55,
   1, 'https://picsum.photos/seed/smartwatch/600/600'),

  ('Portable Bluetooth Speaker 360°',
   'Waterproof IPX7 cylindrical speaker with 360° surround sound, 20-hour playtime, and built-in speakerphone.',
   59.99, 70,
   1, 'https://picsum.photos/seed/btspeaker/600/600'),

  ('7-in-1 USB-C Hub',
   'Compact hub adding 4K HDMI, 100W PD pass-through, 2×USB-A 3.0, SD/microSD card readers via a single USB-C port.',
   34.99, 90,
   1, 'https://picsum.photos/seed/usbhub/600/600'),

  ('1 TB Portable NVMe SSD',
   'USB 3.2 Gen 2 external SSD with read speeds up to 1,050 MB/s, rugged anodised aluminium body, and 5-year warranty.',
   84.99, 40,
   1, 'https://picsum.photos/seed/ssd/600/600'),

  -- Books (category_id = 2)
  ('Deep Work: Rules for Focused Success',
   'Cal Newport''s guide to cultivating the ability to focus without distraction on cognitively demanding tasks.',
   18.99, 180,
   2, 'https://picsum.photos/seed/deepwork/600/600'),

  ('Zero to One',
   'Peter Thiel''s contrarian take on building the future, with insights on startups, monopolies, and innovation.',
   22.99, 140,
   2, 'https://picsum.photos/seed/zerotoone/600/600'),

  ('The Hobbit',
   'J.R.R. Tolkien''s beloved prequel to The Lord of the Rings — a classic adventure of dwarves, dragons, and magic.',
   14.99, 250,
   2, 'https://picsum.photos/seed/hobbit/600/600'),

  ('Sapiens: A Brief History of Humankind',
   'Yuval Noah Harari''s sweeping account of how Homo sapiens came to dominate the planet over 70,000 years.',
   19.99, 160,
   2, 'https://picsum.photos/seed/sapiens/600/600'),

  ('Cracking the Coding Interview',
   '189 programming questions and solutions covering data structures, algorithms, and system design for top tech interviews.',
   44.99, 75,
   2, 'https://picsum.photos/seed/ctci/600/600'),

  -- Clothing (category_id = 3)
  ('Men''s Slim Fit Chino Trousers',
   'Stretch-cotton chinos with a modern slim fit, hidden stretch waistband, and wrinkle-resistant fabric.',
   39.99, 120,
   3, 'https://picsum.photos/seed/chinos/600/600'),

  ('Women''s Puffer Jacket',
   'Lightweight 650-fill-power down jacket with a packable design, water-repellent shell, and internal stow pocket.',
   79.99, 65,
   3, 'https://picsum.photos/seed/pufferjacket/600/600'),

  ('Unisex Premium Graphic Tee',
   '100% ring-spun cotton heavyweight tee with a bold vintage-print graphic. Pre-shrunk and crew neck fit.',
   19.99, 200,
   3, 'https://picsum.photos/seed/graphictee/600/600'),

  ('Merino Wool Beanie',
   'Itch-free 100% merino wool beanie with a double-layered cuff for extra warmth. One size fits most.',
   16.99, 175,
   3, 'https://picsum.photos/seed/beanie/600/600'),

  ('Full-Grain Leather Belt',
   '35 mm full-grain leather belt with a solid brass pin buckle. Available in black and tan. Sizes 30–44".',
   27.99, 90,
   3, 'https://picsum.photos/seed/leatherbelt/600/600'),

  -- Home & Kitchen (category_id = 4)
  ('Variable Temperature Electric Kettle',
   '1.7 L electric kettle with 6 temperature presets, keep-warm function, and 360° rotational base.',
   34.99, 60,
   4, 'https://picsum.photos/seed/kettle/600/600'),

  ('Ceramic Non-Stick Frying Pan 28 cm',
   'PTFE-free ceramic coated pan with ergonomic stay-cool handle. Oven safe to 220°C. Dishwasher safe.',
   39.99, 75,
   4, 'https://picsum.photos/seed/fryingpan/600/600'),

  ('Semi-Automatic Espresso Machine',
   '15-bar pressure espresso maker with a steam wand, 1.5 L removable water tank, and pre-infusion function.',
   149.99, 20,
   4, 'https://picsum.photos/seed/espresso/600/600'),

  ('Digital Kitchen Scale 5 kg',
   'Precision scale with 1 g accuracy, tare function, backlit LCD, and stainless steel platform. Auto-off.',
   12.99, 110,
   4, 'https://picsum.photos/seed/foodscale/600/600'),

  ('Vacuum Storage Bag Set (8-Pack)',
   'Space-saving vacuum seal bags in 4 sizes. Includes hand pump. Protects clothes, duvets, and pillows.',
   19.99, 95,
   4, 'https://picsum.photos/seed/vacuumbags/600/600'),

  -- Sports & Outdoors (category_id = 5)
  ('Speed Jump Rope with Counter',
   'Aluminium handles with dual ball-bearings, adjustable 3 m steel cable, and built-in jump counter.',
   14.99, 160,
   5, 'https://picsum.photos/seed/jumprope/600/600'),

  ('Doorframe Pull-Up Bar',
   'No-screw pull-up bar fits standard doorframes 60–100 cm wide. Holds up to 150 kg. Multiple grip positions.',
   28.99, 80,
   5, 'https://picsum.photos/seed/pullupbar/600/600'),

  ('Lightweight Carbon Trekking Poles (Pair)',
   'Adjustable 100% carbon fibre poles with cork grips, anti-shock system, and collapsible to 36 cm.',
   74.99, 35,
   5, 'https://picsum.photos/seed/trekkingpoles/600/600'),

  ('3-Season Sleeping Bag -5°C',
   'Mummy-style bag rated to -5°C with 800-fill recycled down, YKK zips, and a compression stuff sack.',
   89.99, 30,
   5, 'https://picsum.photos/seed/sleepingbag/600/600'),

  ('MIPS Road Bicycle Helmet',
   'Aerodynamic cycling helmet with MIPS liner, 18 vents, magnetic buckle, and 290 g weight. Sizes S/M/L.',
   64.99, 45,
   5, 'https://picsum.photos/seed/helmet/600/600');

-- Product gallery images (2-3 additional per product)
INSERT INTO product_images (product_id, image_url) VALUES
  -- Headphones (1)
  (1, 'https://picsum.photos/seed/headphones-2/600/600'),
  (1, 'https://picsum.photos/seed/headphones-3/600/600'),
  -- Keyboard (2)
  (2, 'https://picsum.photos/seed/keyboard-2/600/600'),
  (2, 'https://picsum.photos/seed/keyboard-3/600/600'),
  -- Monitor (3)
  (3, 'https://picsum.photos/seed/monitor-2/600/600'),
  (3, 'https://picsum.photos/seed/monitor-3/600/600'),
  -- Earbuds (4)
  (4, 'https://picsum.photos/seed/earbuds-2/600/600'),
  (4, 'https://picsum.photos/seed/earbuds-3/600/600'),
  -- Desk lamp (5)
  (5, 'https://picsum.photos/seed/desklamp-2/600/600'),
  (5, 'https://picsum.photos/seed/desklamp-3/600/600'),
  -- Power bank (6)
  (6, 'https://picsum.photos/seed/powerbank-2/600/600'),
  (6, 'https://picsum.photos/seed/powerbank-3/600/600'),
  -- Clean Code (7)
  (7, 'https://picsum.photos/seed/cleancode-2/600/600'),
  (7, 'https://picsum.photos/seed/cleancode-3/600/600'),
  -- Pragmatic Programmer (8)
  (8, 'https://picsum.photos/seed/pragprog-2/600/600'),
  (8, 'https://picsum.photos/seed/pragprog-3/600/600'),
  -- DDIA (9)
  (9, 'https://picsum.photos/seed/ddia-2/600/600'),
  (9, 'https://picsum.photos/seed/ddia-3/600/600'),
  -- Atomic Habits (10)
  (10, 'https://picsum.photos/seed/atomichabits-2/600/600'),
  (10, 'https://picsum.photos/seed/atomichabits-3/600/600'),
  -- AoPS (11)
  (11, 'https://picsum.photos/seed/aops-2/600/600'),
  (11, 'https://picsum.photos/seed/aops-3/600/600'),
  -- Oxford Shirt (12)
  (12, 'https://picsum.photos/seed/oxfordshirt-2/600/600'),
  (12, 'https://picsum.photos/seed/oxfordshirt-3/600/600'),
  -- Yoga Pants (13)
  (13, 'https://picsum.photos/seed/yogapants-2/600/600'),
  (13, 'https://picsum.photos/seed/yogapants-3/600/600'),
  -- Hoodie (14)
  (14, 'https://picsum.photos/seed/hoodie-2/600/600'),
  (14, 'https://picsum.photos/seed/hoodie-3/600/600'),
  -- Running Shorts (15)
  (15, 'https://picsum.photos/seed/runningshorts-2/600/600'),
  (15, 'https://picsum.photos/seed/runningshorts-3/600/600'),
  -- Trench Coat (16)
  (16, 'https://picsum.photos/seed/trenchcoat-2/600/600'),
  (16, 'https://picsum.photos/seed/trenchcoat-3/600/600'),
  -- Cookware (17)
  (17, 'https://picsum.photos/seed/cookware-2/600/600'),
  (17, 'https://picsum.photos/seed/cookware-3/600/600'),
  -- Cold Brew (18)
  (18, 'https://picsum.photos/seed/coldbrew-2/600/600'),
  (18, 'https://picsum.photos/seed/coldbrew-3/600/600'),
  -- Cutting Board (19)
  (19, 'https://picsum.photos/seed/cuttingboard-2/600/600'),
  (19, 'https://picsum.photos/seed/cuttingboard-3/600/600'),
  -- Stand Mixer (20)
  (20, 'https://picsum.photos/seed/standmixer-2/600/600'),
  (20, 'https://picsum.photos/seed/standmixer-3/600/600'),
  -- Air Purifier (21)
  (21, 'https://picsum.photos/seed/airpurifier-2/600/600'),
  (21, 'https://picsum.photos/seed/airpurifier-3/600/600'),
  -- Dumbbells (22)
  (22, 'https://picsum.photos/seed/dumbbells-2/600/600'),
  (22, 'https://picsum.photos/seed/dumbbells-3/600/600'),
  -- Resistance Bands (23)
  (23, 'https://picsum.photos/seed/resistancebands-2/600/600'),
  (23, 'https://picsum.photos/seed/resistancebands-3/600/600'),
  -- Yoga Mat (24)
  (24, 'https://picsum.photos/seed/yogamat-2/600/600'),
  (24, 'https://picsum.photos/seed/yogamat-3/600/600'),
  -- Running Vest (25)
  (25, 'https://picsum.photos/seed/runningvest-2/600/600'),
  (25, 'https://picsum.photos/seed/runningvest-3/600/600'),
  -- Camping Lantern (26)
  (26, 'https://picsum.photos/seed/lantern-2/600/600'),
  (26, 'https://picsum.photos/seed/lantern-3/600/600'),
  -- Foam Roller (27)
  (27, 'https://picsum.photos/seed/foamroller-2/600/600'),
  (27, 'https://picsum.photos/seed/foamroller-3/600/600'),
  -- Webcam (28)
  (28, 'https://picsum.photos/seed/webcam-2/600/600'),
  (28, 'https://picsum.photos/seed/webcam-3/600/600'),
  -- Smart Watch (29)
  (29, 'https://picsum.photos/seed/smartwatch-2/600/600'),
  (29, 'https://picsum.photos/seed/smartwatch-3/600/600'),
  -- Bluetooth Speaker (30)
  (30, 'https://picsum.photos/seed/btspeaker-2/600/600'),
  (30, 'https://picsum.photos/seed/btspeaker-3/600/600'),
  -- USB Hub (31)
  (31, 'https://picsum.photos/seed/usbhub-2/600/600'),
  (31, 'https://picsum.photos/seed/usbhub-3/600/600'),
  -- SSD (32)
  (32, 'https://picsum.photos/seed/ssd-2/600/600'),
  (32, 'https://picsum.photos/seed/ssd-3/600/600'),
  -- Deep Work (33)
  (33, 'https://picsum.photos/seed/deepwork-2/600/600'),
  (33, 'https://picsum.photos/seed/deepwork-3/600/600'),
  -- Zero to One (34)
  (34, 'https://picsum.photos/seed/zerotoone-2/600/600'),
  (34, 'https://picsum.photos/seed/zerotoone-3/600/600'),
  -- The Hobbit (35)
  (35, 'https://picsum.photos/seed/hobbit-2/600/600'),
  (35, 'https://picsum.photos/seed/hobbit-3/600/600'),
  -- Sapiens (36)
  (36, 'https://picsum.photos/seed/sapiens-2/600/600'),
  (36, 'https://picsum.photos/seed/sapiens-3/600/600'),
  -- Cracking the Coding Interview (37)
  (37, 'https://picsum.photos/seed/ctci-2/600/600'),
  (37, 'https://picsum.photos/seed/ctci-3/600/600'),
  -- Slim Fit Chino Trousers (38)
  (38, 'https://picsum.photos/seed/chinos-2/600/600'),
  (38, 'https://picsum.photos/seed/chinos-3/600/600'),
  -- Women''s Puffer Jacket (39)
  (39, 'https://picsum.photos/seed/pufferjacket-2/600/600'),
  (39, 'https://picsum.photos/seed/pufferjacket-3/600/600'),
  -- Graphic Tee (40)
  (40, 'https://picsum.photos/seed/graphictee-2/600/600'),
  (40, 'https://picsum.photos/seed/graphictee-3/600/600'),
  -- Wool Beanie (41)
  (41, 'https://picsum.photos/seed/beanie-2/600/600'),
  (41, 'https://picsum.photos/seed/beanie-3/600/600'),
  -- Leather Belt (42)
  (42, 'https://picsum.photos/seed/leatherbelt-2/600/600'),
  (42, 'https://picsum.photos/seed/leatherbelt-3/600/600'),
  -- Electric Kettle (43)
  (43, 'https://picsum.photos/seed/kettle-2/600/600'),
  (43, 'https://picsum.photos/seed/kettle-3/600/600'),
  -- Non-stick Frying Pan (44)
  (44, 'https://picsum.photos/seed/fryingpan-2/600/600'),
  (44, 'https://picsum.photos/seed/fryingpan-3/600/600'),
  -- Espresso Machine (45)
  (45, 'https://picsum.photos/seed/espresso-2/600/600'),
  (45, 'https://picsum.photos/seed/espresso-3/600/600'),
  -- Digital Food Scale (46)
  (46, 'https://picsum.photos/seed/foodscale-2/600/600'),
  (46, 'https://picsum.photos/seed/foodscale-3/600/600'),
  -- Vacuum Storage Bags (47)
  (47, 'https://picsum.photos/seed/vacuumbags-2/600/600'),
  (47, 'https://picsum.photos/seed/vacuumbags-3/600/600'),
  -- Jump Rope (48)
  (48, 'https://picsum.photos/seed/jumprope-2/600/600'),
  (48, 'https://picsum.photos/seed/jumprope-3/600/600'),
  -- Pull-Up Bar (49)
  (49, 'https://picsum.photos/seed/pullupbar-2/600/600'),
  (49, 'https://picsum.photos/seed/pullupbar-3/600/600'),
  -- Trekking Poles (50)
  (50, 'https://picsum.photos/seed/trekkingpoles-2/600/600'),
  (50, 'https://picsum.photos/seed/trekkingpoles-3/600/600'),
  -- Sleeping Bag (51)
  (51, 'https://picsum.photos/seed/sleepingbag-2/600/600'),
  (51, 'https://picsum.photos/seed/sleepingbag-3/600/600'),
  -- Bicycle Helmet (52)
  (52, 'https://picsum.photos/seed/helmet-2/600/600'),
  (52, 'https://picsum.photos/seed/helmet-3/600/600');

-- Product specifications (technical details) for product 1 - Wireless Noise-Cancelling Headphones
INSERT INTO product_specifications (product_id, spec_key, spec_value) VALUES
  (1, 'Brand', 'AudioPro'),
  (1, 'Model', 'NC-500X'),
  (1, 'Battery Life', '30 Hours'),
  (1, 'Noise Cancellation', 'Active Noise Cancellation (ANC)'),
  (1, 'Connectivity', 'Bluetooth 5.2, 3.5mm Audio Jack'),
  (1, 'Driver Size', '40mm Dynamic Drivers'),
  (1, 'Frequency Response', '20Hz - 20kHz'),
  (1, 'Impedance', '32 Ohms'),
  (1, 'Weight', '250 grams'),
  (1, 'Charging Port', 'USB-C'),
  (1, 'Charging Time', '2.5 Hours'),
  (1, 'Colour', 'Matte Black'),
  (1, 'Microphone', 'Built-in MEMS Microphone'),
  (1, 'Controls', 'Touch Controls + Physical Buttons'),
  (1, 'Foldable', 'Yes'),

-- Product 2 - Mechanical Gaming Keyboard
  (2, 'Brand', 'TechGear'),
  (2, 'Model', 'MK-TKL Pro'),
  (2, 'Switch Type', 'Tactile Mechanical (Brown)'),
  (2, 'Layout', 'Tenkeyless (87 Keys)'),
  (2, 'Backlighting', 'RGB Per-Key'),
  (2, 'Connection', 'USB-C Detachable Cable'),
  (2, 'Polling Rate', '1000 Hz'),
  (2, 'Key Rollover', 'N-Key Rollover (NKRO)'),
  (2, 'Frame Material', 'Aluminum Top Plate'),
  (2, 'Keycaps', 'Double-shot PBT'),
  (2, 'Hot-swappable', 'Yes'),
  (2, 'Software', 'RGB Customization Software'),
  (2, 'Cable Length', '1.8 meters'),
  (2, 'Weight', '850 grams'),
  (2, 'Colour', 'Black'),

-- Product 3 - 4K USB-C Monitor
  (3, 'Brand', 'ViewMaster'),
  (3, 'Model', 'VM-27-4K'),
  (3, 'Screen Size', '27 inches'),
  (3, 'Resolution', '3840 x 2160 (4K UHD)'),
  (3, 'Panel Type', 'IPS'),
  (3, 'Refresh Rate', '60 Hz'),
  (3, 'Response Time', '5 ms'),
  (3, 'Brightness', '350 cd/m²'),
  (3, 'Contrast Ratio', '1000:1'),
  (3, 'Color Gamut', '99% sRGB'),
  (3, 'Connectivity', 'USB-C (DP Alt Mode), HDMI 2.0, DisplayPort'),
  (3, 'USB-C Power Delivery', '65W'),
  (3, 'Built-in Speakers', 'Yes (2x 3W)'),
  (3, 'VESA Mount', '100x100mm'),
  (3, 'Weight', '5.2 kg'),

-- Product 4 - True Wireless Earbuds
  (4, 'Brand', 'SoundFlow'),
  (4, 'Model', 'SF-TWS100'),
  (4, 'Driver Size', '6mm Dynamic Drivers'),
  (4, 'Bluetooth Version', '5.0'),
  (4, 'Bluetooth Range', 'Up to 10 meters'),
  (4, 'Battery Life (Earbuds)', '6 Hours'),
  (4, 'Battery Life (With Case)', '24 Hours'),
  (4, 'Charging Port', 'USB-C'),
  (4, 'Charging Time', '1.5 Hours'),
  (4, 'Water Resistance', 'IPX4'),
  (4, 'Controls', 'Touch Controls'),
  (4, 'Microphone', 'Built-in MEMS Mic'),
  (4, 'Codec Support', 'AAC, SBC'),
  (4, 'Weight (Single Earbud)', '4.5 grams'),
  (4, 'Colour', 'Black'),

-- Product 5 - Smart LED Desk Lamp
  (5, 'Brand', 'LuminaTech'),
  (5, 'Model', 'LT-DL500'),
  (5, 'LED Type', 'SMD LED'),
  (5, 'Color Temperature Range', '3000K - 6500K (5 Levels)'),
  (5, 'Brightness Levels', 'Stepless Dimming'),
  (5, 'Power Consumption', '12W'),
  (5, 'Lumens', '600 lm'),
  (5, 'CRI (Color Rendering Index)', '>90'),
  (5, 'Control Type', 'Touch Controls'),
  (5, 'Special Features', 'Auto-dimming, Eye-care Mode, Memory Function'),
  (5, 'USB Charging Port', 'USB-A 5V/1A'),
  (5, 'Adjustability', 'Multi-angle Arm'),
  (5, 'Power Input', '12V DC Adapter'),
  (5, 'LED Lifespan', '50,000 Hours'),
  (5, 'Colour', 'Silver/White'),

-- Product 6 - Portable Power Bank
  (6, 'Brand', 'PowerMax'),
  (6, 'Model', 'PM-20K-PD'),
  (6, 'Capacity', '20000mAh (74Wh)'),
  (6, 'Battery Type', 'Lithium Polymer'),
  (6, 'USB-C Output', '65W PD (5V/3A, 9V/3A, 12V/3A, 15V/3A, 20V/3.25A)'),
  (6, 'USB-A Output 1', '18W QC 3.0'),
  (6, 'USB-A Output 2', '18W QC 3.0'),
  (6, 'USB-C Input', '45W (5V/3A, 9V/3A, 12V/3A, 15V/3A)'),
  (6, 'Display', 'LCD Battery Indicator'),
  (6, 'Multi-device Charging', 'Up to 3 devices simultaneously'),
  (6, 'Recharge Time', '3-4 Hours (with 45W charger)'),
  (6, 'Safety Features', 'Overcharge, Overcurrent, Short Circuit Protection'),
  (6, 'Weight', '425 grams'),
  (6, 'Dimensions', '15.5 x 7.5 x 2.5 cm'),
  (6, 'Colour', 'Black'),

-- Product 28 - 1080p HD Webcam
  (28, 'Brand', 'ClearView'),
  (28, 'Model', 'CV-W1080'),
  (28, 'Resolution', '1920 x 1080 (1080p Full HD)'),
  (28, 'Frame Rate', '30 fps'),
  (28, 'Lens', 'Fixed Focus'),
  (28, 'Field of View', '78 degrees'),
  (28, 'Microphone', 'Built-in Stereo Microphone'),
  (28, 'Noise Reduction', 'Yes (Microphone)'),
  (28, 'Auto Light Correction', 'Yes'),
  (28, 'Connection', 'USB 2.0'),
  (28, 'Cable Length', '1.5 meters'),
  (28, 'Mounting', 'Universal Clip Mount'),
  (28, 'Compatibility', 'Windows, Mac, Chrome OS, Linux'),
  (28, 'Weight', '75 grams'),
  (28, 'Colour', 'Black'),

-- Product 29 - Smart Watch Series 5
  (29, 'Brand', 'FitTime'),
  (29, 'Model', 'FT-SW5'),
  (29, 'Display', '1.4" AMOLED Always-On'),
  (29, 'Resolution', '454 x 454 pixels'),
  (29, 'Sensors', 'Heart Rate, SpO2, Accelerometer, Gyroscope, GPS'),
  (29, 'GPS', 'Built-in GPS + GLONASS'),
  (29, 'Water Resistance', '5 ATM (50 meters)'),
  (29, 'Battery Life', '7 Days (Typical Use)'),
  (29, 'Charging', 'Magnetic Charging Dock'),
  (29, 'Charging Time', '2 Hours'),
  (29, 'Connectivity', 'Bluetooth 5.0'),
  (29, 'Compatibility', 'iOS 10+, Android 5.0+'),
  (29, 'Strap Material', 'Silicone (Interchangeable)'),
  (29, 'Case Material', 'Aluminum Alloy'),
  (29, 'Weight', '45 grams (without strap)'),
  (29, 'Colour', 'Space Gray'),

-- Product 30 - Portable Bluetooth Speaker
  (30, 'Brand', 'AudioWave'),
  (30, 'Model', 'AW-360BT'),
  (30, 'Speaker Configuration', 'Dual Drivers + Passive Radiator'),
  (30, 'Output Power', '20W'),
  (30, 'Frequency Response', '60Hz - 20kHz'),
  (30, 'Bluetooth Version', '5.0'),
  (30, 'Bluetooth Range', 'Up to 30 meters'),
  (30, 'Battery Capacity', '5200mAh'),
  (30, 'Playtime', '20 Hours (Medium Volume)'),
  (30, 'Charging Port', 'Micro-USB'),
  (30, 'Charging Time', '4 Hours'),
  (30, 'Water Resistance', 'IPX7'),
  (30, 'Speakerphone', 'Yes'),
  (30, 'Weight', '650 grams'),
  (30, 'Dimensions', '18 x 7 cm (Cylindrical)'),
  (30, 'Colour', 'Matte Black'),

-- Product 31 - 7-in-1 USB-C Hub
  (31, 'Brand', 'ConnectPro'),
  (31, 'Model', 'CP-HUB7'),
  (31, 'HDMI Output', '4K@30Hz (3840 x 2160)'),
  (31, 'USB-A Ports', '2x USB 3.0 (5 Gbps)'),
  (31, 'SD Card Reader', 'UHS-I (up to 104 MB/s)'),
  (31, 'MicroSD Card Reader', 'UHS-I (up to 104 MB/s)'),
  (31, 'USB-C PD Pass-through', '100W Power Delivery'),
  (31, 'USB-C Data Port', 'USB 3.0 (5 Gbps)'),
  (31, 'Material', 'Aluminum Alloy'),
  (31, 'Cable Length', '15 cm (Built-in)'),
  (31, 'Compatibility', 'USB-C Laptops (MacBook, Dell, HP, Lenovo, etc.)'),
  (31, 'Operating Temperature', '0°C to 45°C'),
  (31, 'Dimensions', '11 x 4.5 x 1.2 cm'),
  (31, 'Weight', '65 grams'),
  (31, 'Colour', 'Space Gray'),

-- Product 32 - 1 TB Portable NVMe SSD
  (32, 'Brand', 'SpeedDrive'),
  (32, 'Model', 'SD-NVME-1TB'),
  (32, 'Capacity', '1 TB (1000 GB)'),
  (32, 'Interface', 'USB 3.2 Gen 2 (10 Gbps)'),
  (32, 'Read Speed', 'Up to 1050 MB/s'),
  (32, 'Write Speed', 'Up to 1000 MB/s'),
  (32, 'Controller', 'NVMe PCIe Gen 3'),
  (32, 'NAND Type', '3D TLC NAND'),
  (32, 'Encryption', 'AES 256-bit Hardware Encryption'),
  (32, 'Cable Included', 'USB-C to USB-C, USB-C to USB-A'),
  (32, 'Material', 'Anodized Aluminum'),
  (32, 'Shock Resistance', '1500G / 0.5ms'),
  (32, 'Compatibility', 'Windows, Mac, Linux, PS4/PS5, Xbox'),
  (32, 'Warranty', '5 Years'),
  (32, 'Dimensions', '10 x 3 x 1 cm'),
  (32, 'Weight', '50 grams'),
  (32, 'Colour', 'Gunmetal Gray'),

-- Product 7 - Clean Code
  (7, 'Author', 'Robert C. Martin'),
  (7, 'Publisher', 'Prentice Hall'),
  (7, 'Language', 'English'),
  (7, 'Format', 'Paperback'),
  (7, 'Pages', '464'),
  (7, 'ISBN-10', '0132350882'),
  (7, 'ISBN-13', '978-0132350884'),
  (7, 'Dimensions', '17.8 x 3 x 23.4 cm'),
  (7, 'Publication Date', 'August 1, 2008'),
  (7, 'Genre', 'Software Engineering'),

-- Product 8 - The Pragmatic Programmer
  (8, 'Author', 'David Thomas, Andrew Hunt'),
  (8, 'Publisher', 'Addison-Wesley Professional'),
  (8, 'Language', 'English'),
  (8, 'Format', 'Paperback'),
  (8, 'Pages', '352'),
  (8, 'ISBN-10', '0135957052'),
  (8, 'ISBN-13', '978-0135957059'),
  (8, 'Dimensions', '18 x 2.1 x 23.2 cm'),
  (8, 'Publication Date', 'September 13, 2019'),
  (8, 'Genre', 'Programming Practices'),

-- Product 9 - Designing Data-Intensive Applications
  (9, 'Author', 'Martin Kleppmann'),
  (9, 'Publisher', 'O''Reilly Media'),
  (9, 'Language', 'English'),
  (9, 'Format', 'Paperback'),
  (9, 'Pages', '616'),
  (9, 'ISBN-10', '1449373321'),
  (9, 'ISBN-13', '978-1449373320'),
  (9, 'Dimensions', '17.9 x 3.4 x 23.4 cm'),
  (9, 'Publication Date', 'March 16, 2017'),
  (9, 'Genre', 'Distributed Systems'),

-- Product 10 - Atomic Habits
  (10, 'Author', 'James Clear'),
  (10, 'Publisher', 'Avery'),
  (10, 'Language', 'English'),
  (10, 'Format', 'Paperback'),
  (10, 'Pages', '320'),
  (10, 'ISBN-10', '1847941834'),
  (10, 'ISBN-13', '978-1847941831'),
  (10, 'Dimensions', '15.3 x 2.3 x 23.4 cm'),
  (10, 'Publication Date', 'October 16, 2018'),
  (10, 'Genre', 'Self-Improvement'),

-- Product 11 - The Art of Problem Solving Vol. 1
  (11, 'Author', 'Richard Rusczyk, Sandor Lehoczky'),
  (11, 'Publisher', 'AoPS Incorporated'),
  (11, 'Language', 'English'),
  (11, 'Format', 'Paperback'),
  (11, 'Pages', '496'),
  (11, 'ISBN-10', '1934124214'),
  (11, 'ISBN-13', '978-1934124215'),
  (11, 'Dimensions', '21.6 x 2.6 x 27.9 cm'),
  (11, 'Publication Date', 'January 1, 2006'),
  (11, 'Genre', 'Mathematics'),

-- Product 33 - Deep Work
  (33, 'Author', 'Cal Newport'),
  (33, 'Publisher', 'Grand Central Publishing'),
  (33, 'Language', 'English'),
  (33, 'Format', 'Paperback'),
  (33, 'Pages', '304'),
  (33, 'ISBN-10', '1455586692'),
  (33, 'ISBN-13', '978-1455586691'),
  (33, 'Dimensions', '13.4 x 2.2 x 20.3 cm'),
  (33, 'Publication Date', 'January 5, 2016'),
  (33, 'Genre', 'Productivity'),

-- Product 34 - Zero to One
  (34, 'Author', 'Peter Thiel, Blake Masters'),
  (34, 'Publisher', 'Currency'),
  (34, 'Language', 'English'),
  (34, 'Format', 'Paperback'),
  (34, 'Pages', '224'),
  (34, 'ISBN-10', '0804139296'),
  (34, 'ISBN-13', '978-0804139298'),
  (34, 'Dimensions', '13.2 x 1.7 x 20.2 cm'),
  (34, 'Publication Date', 'September 16, 2014'),
  (34, 'Genre', 'Startups & Entrepreneurship'),

-- Product 35 - The Hobbit
  (35, 'Author', 'J.R.R. Tolkien'),
  (35, 'Publisher', 'Mariner Books'),
  (35, 'Language', 'English'),
  (35, 'Format', 'Paperback'),
  (35, 'Pages', '300'),
  (35, 'ISBN-10', '054792822X'),
  (35, 'ISBN-13', '978-0547928227'),
  (35, 'Dimensions', '13.5 x 2 x 20.3 cm'),
  (35, 'Publication Date', 'September 21, 1937'),
  (35, 'Genre', 'Fantasy'),

-- Product 36 - Sapiens
  (36, 'Author', 'Yuval Noah Harari'),
  (36, 'Publisher', 'Harper'),
  (36, 'Language', 'English'),
  (36, 'Format', 'Paperback'),
  (36, 'Pages', '464'),
  (36, 'ISBN-10', '0062316095'),
  (36, 'ISBN-13', '978-0062316097'),
  (36, 'Dimensions', '13.5 x 2.8 x 20.3 cm'),
  (36, 'Publication Date', 'February 10, 2015'),
  (36, 'Genre', 'History'),

-- Product 37 - Cracking the Coding Interview
  (37, 'Author', 'Gayle Laakmann McDowell'),
  (37, 'Publisher', 'CareerCup'),
  (37, 'Language', 'English'),
  (37, 'Format', 'Paperback'),
  (37, 'Pages', '708'),
  (37, 'ISBN-10', '0984782850'),
  (37, 'ISBN-13', '978-0984782857'),
  (37, 'Dimensions', '20.3 x 3.6 x 25.4 cm'),
  (37, 'Publication Date', 'July 1, 2015'),
  (37, 'Genre', 'Interview Preparation'),

-- Product 12 - Men's Classic Fit Oxford Shirt
  (12, 'Brand', 'NorthField'),
  (12, 'Material', '100% Cotton Oxford'),
  (12, 'Fit', 'Classic Fit'),
  (12, 'Sleeve Type', 'Long Sleeve'),
  (12, 'Collar Style', 'Button-Down Collar'),
  (12, 'Closure', 'Button Front'),
  (12, 'Care Instructions', 'Machine Washable'),
  (12, 'Occasion', 'Casual / Office'),
  (12, 'Available Colours', 'Blue, White, Gray'),
  (12, 'Weight', '320 grams'),

-- Product 13 - Women's High-Waist Yoga Pants
  (13, 'Brand', 'FlexAura'),
  (13, 'Material', 'Polyester-Spandex Blend'),
  (13, 'Rise', 'High-Waist'),
  (13, 'Stretch', 'Four-Way Stretch'),
  (13, 'Moisture Wicking', 'Yes'),
  (13, 'Pocket', 'Hidden Waistband Pocket'),
  (13, 'Opacity', 'Squat-Proof'),
  (13, 'Length', 'Full Length'),
  (13, 'Care Instructions', 'Machine Wash Cold'),
  (13, 'Weight', '260 grams'),

-- Product 14 - Unisex Zip-Up Hoodie
  (14, 'Brand', 'UrbanThread'),
  (14, 'Material', 'Cotton-Poly Fleece'),
  (14, 'Fit', 'Relaxed Fit'),
  (14, 'Closure', 'Full-Length Zipper'),
  (14, 'Pocket', 'Kangaroo Pocket'),
  (14, 'Hood', 'Adjustable Drawstring Hood'),
  (14, 'Cuffs', 'Ribbed Cuffs and Hem'),
  (14, 'Weight Class', 'Midweight'),
  (14, 'Care Instructions', 'Machine Washable'),
  (14, 'Weight', '540 grams'),

-- Product 15 - Men's Running Shorts
  (15, 'Brand', 'SwiftRun'),
  (15, 'Material', 'Lightweight Polyester'),
  (15, 'Inseam', '5 Inches'),
  (15, 'Liner', 'Built-in Liner'),
  (15, 'Pocket', 'Rear Zip Pocket'),
  (15, 'Waistband', 'Elastic with Drawcord'),
  (15, 'Reflective Trim', 'Yes'),
  (15, 'Breathability', 'High'),
  (15, 'Care Instructions', 'Machine Washable'),
  (15, 'Weight', '180 grams'),

-- Product 16 - Women's Trench Coat
  (16, 'Brand', 'BelleStreet'),
  (16, 'Material', 'Water-Resistant Polyester Blend'),
  (16, 'Style', 'Double-Breasted Trench'),
  (16, 'Length', 'Knee Length'),
  (16, 'Closure', 'Button Front with Belt'),
  (16, 'Features', 'Storm Flap, Adjustable Cuffs'),
  (16, 'Lining', 'Lightweight Inner Lining'),
  (16, 'Care Instructions', 'Dry Clean Recommended'),
  (16, 'Season', 'Spring / Fall'),
  (16, 'Weight', '920 grams'),

-- Product 38 - Men's Slim Fit Chino Trousers
  (38, 'Brand', 'MetroTailor'),
  (38, 'Material', 'Stretch Cotton Twill'),
  (38, 'Fit', 'Slim Fit'),
  (38, 'Waistband', 'Hidden Stretch Waistband'),
  (38, 'Closure', 'Zip Fly with Button'),
  (38, 'Fabric Finish', 'Wrinkle-Resistant'),
  (38, 'Pocket Style', 'Side and Back Pockets'),
  (38, 'Occasion', 'Casual / Smart Casual'),
  (38, 'Care Instructions', 'Machine Washable'),
  (38, 'Weight', '410 grams'),

-- Product 39 - Women's Puffer Jacket
  (39, 'Brand', 'NorthPeak'),
  (39, 'Insulation', '650-Fill Down'),
  (39, 'Shell Material', 'Water-Repellent Nylon'),
  (39, 'Design', 'Packable Puffer'),
  (39, 'Closure', 'Full Zip Front'),
  (39, 'Pocket', 'Zip Hand Pockets + Stow Pocket'),
  (39, 'Hood', 'No Hood'),
  (39, 'Season', 'Winter'),
  (39, 'Care Instructions', 'Machine Wash Gentle'),
  (39, 'Weight', '480 grams'),

-- Product 40 - Unisex Premium Graphic Tee
  (40, 'Brand', 'CanvasMode'),
  (40, 'Material', '100% Ring-Spun Cotton'),
  (40, 'Fit', 'Regular Fit'),
  (40, 'Fabric Weight', 'Heavyweight'),
  (40, 'Neck Style', 'Crew Neck'),
  (40, 'Print Style', 'Vintage Graphic Print'),
  (40, 'Pre-Shrunk', 'Yes'),
  (40, 'Sleeve Type', 'Short Sleeve'),
  (40, 'Care Instructions', 'Machine Wash Cold'),
  (40, 'Weight', '230 grams'),

-- Product 41 - Merino Wool Beanie
  (41, 'Brand', 'AlpineKnit'),
  (41, 'Material', '100% Merino Wool'),
  (41, 'Style', 'Cuffed Beanie'),
  (41, 'Layering', 'Double-Layered'),
  (41, 'Fit', 'One Size Fits Most'),
  (41, 'Itch-Free', 'Yes'),
  (41, 'Breathability', 'High'),
  (41, 'Season', 'Winter / Fall'),
  (41, 'Care Instructions', 'Hand Wash Recommended'),
  (41, 'Weight', '95 grams'),

-- Product 42 - Full-Grain Leather Belt
  (42, 'Brand', 'HeritageHide'),
  (42, 'Material', 'Full-Grain Leather'),
  (42, 'Width', '35 mm'),
  (42, 'Buckle Material', 'Solid Brass'),
  (42, 'Closure Type', 'Pin Buckle'),
  (42, 'Available Colours', 'Black, Tan'),
  (42, 'Available Sizes', '30-44 inches'),
  (42, 'Edge Finish', 'Burnished Edges'),
  (42, 'Occasion', 'Formal / Casual'),
  (42, 'Weight', '210 grams'),

-- Product 17 - Stainless Steel Cookware Set 10-Piece
  (17, 'Brand', 'KitchenCraft Pro'),
  (17, 'Material', 'Tri-ply Stainless Steel'),
  (17, 'Piece Count', '10 Pieces'),
  (17, 'Cooktop Compatibility', 'Gas, Electric, Ceramic, Induction'),
  (17, 'Oven Safe', 'Up to 260°C'),
  (17, 'Dishwasher Safe', 'Yes'),
  (17, 'Handle Type', 'Riveted Stay-Cool Handles'),
  (17, 'Finish', 'Brushed Stainless Steel'),
  (17, 'Lid Material', 'Tempered Glass'),
  (17, 'Weight', '8.4 kg'),

-- Product 18 - Cold Brew Coffee Maker 1L
  (18, 'Brand', 'BrewEase'),
  (18, 'Capacity', '1 Liter'),
  (18, 'Material', 'Borosilicate Glass'),
  (18, 'Filter Type', 'Fine Mesh Stainless Steel'),
  (18, 'Lid Type', 'Airtight Silicone Seal'),
  (18, 'Dishwasher Safe', 'Yes'),
  (18, 'BPA Free', 'Yes'),
  (18, 'Brewing Method', 'Immersion Cold Brew'),
  (18, 'Weight', '620 grams'),
  (18, 'Colour', 'Clear / Black'),

-- Product 19 - Bamboo Cutting Board Set
  (19, 'Brand', 'EcoSlice'),
  (19, 'Material', 'Natural Bamboo'),
  (19, 'Piece Count', '3 Boards'),
  (19, 'Board Sizes', 'Small, Medium, Large'),
  (19, 'Juice Groove', 'Yes'),
  (19, 'Non-slip Feet', 'Rubber Feet Included'),
  (19, 'Knife Friendly', 'Yes'),
  (19, 'Reversible', 'Yes'),
  (19, 'Care Instructions', 'Hand Wash Only'),
  (19, 'Weight', '2.1 kg'),

-- Product 20 - Stand Mixer 4.5 Qt
  (20, 'Brand', 'MixMaster'),
  (20, 'Capacity', '4.5 Quarts'),
  (20, 'Motor Power', '300 Watts'),
  (20, 'Speed Settings', '10 Speeds'),
  (20, 'Head Type', 'Tilt-Head'),
  (20, 'Bowl Material', 'Stainless Steel'),
  (20, 'Included Attachments', 'Flat Beater, Dough Hook, Wire Whip'),
  (20, 'Planetary Mixing', 'Yes'),
  (20, 'Weight', '6.8 kg'),
  (20, 'Colour', 'Silver'),

-- Product 21 - Air Purifier with HEPA Filter
  (21, 'Brand', 'PureBreeze'),
  (21, 'Coverage Area', 'Up to 40 m²'),
  (21, 'Filter Type', 'True HEPA + Activated Carbon'),
  (21, 'Particle Capture', '99.97% of particles'),
  (21, 'Noise Level', '24-52 dB'),
  (21, 'Modes', 'Auto, Sleep, Turbo'),
  (21, 'Fan Speeds', '4 Levels'),
  (21, 'CADR', '220 m³/h'),
  (21, 'Power Consumption', '38W'),
  (21, 'Weight', '4.9 kg'),

-- Product 43 - Variable Temperature Electric Kettle
  (43, 'Brand', 'HeatCraft'),
  (43, 'Capacity', '1.7 Liters'),
  (43, 'Power', '1500 Watts'),
  (43, 'Temperature Presets', '6 Presets'),
  (43, 'Keep Warm Function', '30 Minutes'),
  (43, 'Material', 'Stainless Steel Interior'),
  (43, 'Base Type', '360° Rotational Base'),
  (43, 'Auto Shut-Off', 'Yes'),
  (43, 'Boil-Dry Protection', 'Yes'),
  (43, 'Weight', '1.2 kg'),

-- Product 44 - Ceramic Non-Stick Frying Pan 28 cm
  (44, 'Brand', 'GreenSkillet'),
  (44, 'Diameter', '28 cm'),
  (44, 'Coating', 'PTFE-Free Ceramic'),
  (44, 'Core Material', 'Forged Aluminum'),
  (44, 'Handle Type', 'Stay-Cool Ergonomic Handle'),
  (44, 'Oven Safe', 'Up to 220°C'),
  (44, 'Dishwasher Safe', 'Yes'),
  (44, 'Induction Compatible', 'Yes'),
  (44, 'Weight', '1.1 kg'),
  (44, 'Colour', 'Charcoal Gray'),

-- Product 45 - Semi-Automatic Espresso Machine
  (45, 'Brand', 'BaristaHome'),
  (45, 'Pump Pressure', '15 Bar'),
  (45, 'Water Tank Capacity', '1.5 Liters'),
  (45, 'Steam Wand', 'Yes'),
  (45, 'Pre-Infusion', 'Yes'),
  (45, 'Portafilter Size', '51 mm'),
  (45, 'Cup Warming Tray', 'Yes'),
  (45, 'Power', '1350 Watts'),
  (45, 'Material', 'Stainless Steel / ABS'),
  (45, 'Weight', '4.3 kg'),

-- Product 46 - Digital Kitchen Scale 5 kg
  (46, 'Brand', 'MeasureMate'),
  (46, 'Max Capacity', '5 kg'),
  (46, 'Accuracy', '1 gram'),
  (46, 'Display', 'Backlit LCD'),
  (46, 'Tare Function', 'Yes'),
  (46, 'Units', 'g, kg, oz, lb:oz, ml'),
  (46, 'Platform Material', 'Stainless Steel'),
  (46, 'Auto-Off', 'Yes'),
  (46, 'Power Source', '2 x AAA Batteries'),
  (46, 'Weight', '420 grams'),

-- Product 47 - Vacuum Storage Bag Set (8-Pack)
  (47, 'Brand', 'SpaceSaver'),
  (47, 'Pack Size', '8 Bags'),
  (47, 'Bag Sizes', '4 Different Sizes'),
  (47, 'Material', 'PA + PE Multi-Layer Plastic'),
  (47, 'Pump Included', 'Hand Pump Included'),
  (47, 'Reusable', 'Yes'),
  (47, 'Seal Type', 'Double-Zip Seal'),
  (47, 'Protection', 'Dust, Moisture, Odor Protection'),
  (47, 'Suitable For', 'Clothes, Duvets, Pillows'),
  (47, 'Weight', '760 grams'),

-- Product 22 - Adjustable Dumbbell Set 5-25 kg
  (22, 'Brand', 'IronFlex'),
  (22, 'Weight Range', '5-25 kg'),
  (22, 'Adjustment Mechanism', 'Dial Select'),
  (22, 'Material', 'Steel + Hardened Plastic'),
  (22, 'Handle Grip', 'Textured Non-slip Grip'),
  (22, 'Pairs Included', '2 Dumbbells'),
  (22, 'Space Saving', 'Replaces 15 sets of weights'),
  (22, 'Cradle Included', 'Yes'),
  (22, 'Weight Increment', '2.5 kg'),
  (22, 'Total Set Weight', '50 kg'),

-- Product 23 - Resistance Bands Set (5 Levels)
  (23, 'Brand', 'FlexCore'),
  (23, 'Band Count', '5 Bands'),
  (23, 'Resistance Levels', 'Light to Extra Heavy'),
  (23, 'Material', 'Natural Latex'),
  (23, 'Accessories', 'Carry Bag, Exercise Guide'),
  (23, 'Length', '150 cm'),
  (23, 'Suitable For', 'Strength, Mobility, Rehab'),
  (23, 'Non-slip Surface', 'Yes'),
  (23, 'Stackable', 'Yes'),
  (23, 'Weight', '540 grams'),

-- Product 24 - Yoga Mat Non-Slip 6mm
  (24, 'Brand', 'ZenFlex'),
  (24, 'Thickness', '6 mm'),
  (24, 'Dimensions', '72 x 26 inches'),
  (24, 'Material', 'TPE Foam'),
  (24, 'Surface', 'Moisture-Wicking Textured'),
  (24, 'Alignment Lines', 'Yes'),
  (24, 'Carry Strap', 'Included'),
  (24, 'Non-slip', 'Yes'),
  (24, 'Weight', '1.1 kg'),
  (24, 'Colour', 'Deep Blue'),

-- Product 25 - Hydration Running Vest 10L
  (25, 'Brand', 'TrailFlow'),
  (25, 'Capacity', '10 Liters'),
  (25, 'Reservoir Compatibility', '2L Bladder Compatible'),
  (25, 'Storage', '8L Gear Storage'),
  (25, 'Material', 'Lightweight Ripstop Nylon'),
  (25, 'Adjustment', 'Chest and Side Straps'),
  (25, 'Reflective Details', 'Yes'),
  (25, 'Breathable Mesh', 'Yes'),
  (25, 'Weight', '420 grams'),
  (25, 'Colour', 'Black / Lime'),

-- Product 26 - Camping Lantern Rechargeable
  (26, 'Brand', 'CampGlow'),
  (26, 'Brightness', '1000 Lumens'),
  (26, 'Lighting Modes', '4 Modes'),
  (26, 'Battery Type', 'Rechargeable Lithium-Ion'),
  (26, 'Water Resistance', 'IPX6'),
  (26, 'Lighting Coverage', '360 Degrees'),
  (26, 'USB Output', 'Built-in USB-A Output'),
  (26, 'Run Time', '8-40 Hours'),
  (26, 'Charging Port', 'USB-C'),
  (26, 'Weight', '510 grams'),

-- Product 27 - Foam Roller 60cm
  (27, 'Brand', 'RecoverFit'),
  (27, 'Length', '60 cm'),
  (27, 'Material', 'High-Density EVA Foam'),
  (27, 'Surface Texture', 'Grid Massage Pattern'),
  (27, 'Firmness', 'Medium-Firm'),
  (27, 'Use Case', 'Myofascial Release and Recovery'),
  (27, 'Water Resistant', 'Yes'),
  (27, 'Portable', 'Yes'),
  (27, 'Max Load', '150 kg'),
  (27, 'Weight', '780 grams'),

-- Product 48 - Speed Jump Rope with Counter
  (48, 'Brand', 'CardioPro'),
  (48, 'Handle Material', 'Aluminium'),
  (48, 'Cable Type', 'Coated Steel Cable'),
  (48, 'Cable Length', '3 meters Adjustable'),
  (48, 'Bearing System', 'Dual Ball Bearings'),
  (48, 'Counter', 'Built-in Jump Counter'),
  (48, 'Suitable For', 'Cardio, HIIT, Conditioning'),
  (48, 'Grip', 'Non-slip Knurled Handles'),
  (48, 'Weight', '220 grams'),
  (48, 'Colour', 'Red / Black'),

-- Product 49 - Doorframe Pull-Up Bar
  (49, 'Brand', 'PowerLift'),
  (49, 'Fit Range', '60-100 cm Doorframes'),
  (49, 'Installation', 'No-Screw Pressure Mount'),
  (49, 'Max Load', '150 kg'),
  (49, 'Grip Positions', 'Multiple'),
  (49, 'Material', 'Steel'),
  (49, 'Bar Padding', 'High-Density Foam'),
  (49, 'Use Case', 'Pull-Ups, Chin-Ups, Hanging Leg Raises'),
  (49, 'Weight', '2.8 kg'),
  (49, 'Colour', 'Black'),

-- Product 50 - Lightweight Carbon Trekking Poles (Pair)
  (50, 'Brand', 'SummitTrail'),
  (50, 'Material', '100% Carbon Fiber'),
  (50, 'Adjustable Length', '105-135 cm'),
  (50, 'Collapsed Length', '36 cm'),
  (50, 'Grip Material', 'Natural Cork'),
  (50, 'Shock Absorption', 'Anti-Shock System'),
  (50, 'Tip Type', 'Tungsten Carbide'),
  (50, 'Pair Included', 'Yes'),
  (50, 'Weight', '420 grams per pair'),
  (50, 'Colour', 'Black / Orange'),

-- Product 51 - 3-Season Sleeping Bag -5°C
  (51, 'Brand', 'NorthCamp'),
  (51, 'Temperature Rating', '-5°C'),
  (51, 'Shape', 'Mummy Style'),
  (51, 'Insulation', '800-fill Recycled Down'),
  (51, 'Season Rating', '3-Season'),
  (51, 'Shell Material', 'Ripstop Nylon'),
  (51, 'Zipper', 'YKK Two-Way Zip'),
  (51, 'Compression Sack', 'Included'),
  (51, 'Weight', '1.25 kg'),
  (51, 'Length', 'Fits up to 198 cm'),

-- Product 52 - MIPS Road Bicycle Helmet
  (52, 'Brand', 'RideSafe'),
  (52, 'Protection System', 'MIPS Liner'),
  (52, 'Ventilation', '18 Vents'),
  (52, 'Closure', 'Magnetic Buckle'),
  (52, 'Shell Material', 'Polycarbonate'),
  (52, 'Foam Material', 'EPS Foam'),
  (52, 'Weight', '290 grams'),
  (52, 'Sizes', 'S / M / L'),
  (52, 'Fit System', 'Rear Dial Adjuster'),
  (52, 'Colour', 'Matte White');

-- Product additional information for product 1
INSERT INTO product_additional_info (product_id, info_key, info_value) VALUES
  (1, 'ASIN', 'B08XYZ1234'),
  (1, 'Customer Reviews', '4.5 out of 5 stars (2,847 ratings)'),
  (1, 'Best Sellers Rank', '#12 in Electronics > Headphones'),
  (1, 'Date First Available', 'January 15, 2024'),
  (1, 'Manufacturer', 'AudioPro Technologies Inc., Building 5, Tech Park, California 94025'),
  (1, 'Item Weight', '250 grams'),
  (1, 'Product Dimensions', '19 x 16 x 8 cm'),
  (1, 'Batteries', '1 Lithium Polymer battery (included)'),
  (1, 'Item Model Number', 'NC-500X'),
  (1, 'Warranty', '2 years manufacturer warranty'),

-- Product 2 - Mechanical Gaming Keyboard
  (2, 'ASIN', 'B09KBD8732'),
  (2, 'Customer Reviews', '4.6 out of 5 stars (1,923 ratings)'),
  (2, 'Best Sellers Rank', '#8 in Electronics > Keyboards'),
  (2, 'Date First Available', 'March 22, 2024'),
  (2, 'Manufacturer', 'TechGear Gaming Inc., 456 Innovation Drive, Austin, Texas 78701'),
  (2, 'Item Weight', '850 grams'),
  (2, 'Product Dimensions', '36 x 13 x 4 cm'),
  (2, 'Batteries', 'Not required'),
  (2, 'Item Model Number', 'MK-TKL Pro'),
  (2, 'Warranty', '1 year manufacturer warranty'),

-- Product 3 - 4K USB-C Monitor
  (3, 'ASIN', 'B07VMP3619'),
  (3, 'Customer Reviews', '4.7 out of 5 stars (3,456 ratings)'),
  (3, 'Best Sellers Rank', '#15 in Electronics > Monitors'),
  (3, 'Date First Available', 'February 10, 2024'),
  (3, 'Manufacturer', 'ViewMaster Display Technologies, 789 Tech Boulevard, San Jose, California 95131'),
  (3, 'Item Weight', '5.2 kg'),
  (3, 'Product Dimensions', '61 x 45 x 18 cm (with stand)'),
  (3, 'Batteries', 'Not required'),
  (3, 'Item Model Number', 'VM-27-4K'),
  (3, 'Warranty', '3 years manufacturer warranty'),

-- Product 4 - True Wireless Earbuds
  (4, 'ASIN', 'B08TWS4561'),
  (4, 'Customer Reviews', '4.4 out of 5 stars (4,289 ratings)'),
  (4, 'Best Sellers Rank', '#23 in Electronics > Earbuds'),
  (4, 'Date First Available', 'April 5, 2024'),
  (4, 'Manufacturer', 'SoundFlow Audio LLC, 321 Sound Street, Portland, Oregon 97204'),
  (4, 'Item Weight', '45 grams (with case)'),
  (4, 'Product Dimensions', '6 x 4 x 3 cm (case)'),
  (4, 'Batteries', '2 Lithium Polymer batteries (included)'),
  (4, 'Item Model Number', 'SF-TWS100'),
  (4, 'Warranty', '1 year manufacturer warranty'),

-- Product 5 - Smart LED Desk Lamp
  (5, 'ASIN', 'B09DL5678X'),
  (5, 'Customer Reviews', '4.5 out of 5 stars (1,567 ratings)'),
  (5, 'Best Sellers Rank', '#7 in Home & Kitchen > Desk Lamps'),
  (5, 'Date First Available', 'May 18, 2024'),
  (5, 'Manufacturer', 'LuminaTech Solutions, 147 Bright Avenue, Seattle, Washington 98101'),
  (5, 'Item Weight', '680 grams'),
  (5, 'Product Dimensions', '45 x 15 x 40 cm (extended)'),
  (5, 'Batteries', 'Not required (AC adapter included)'),
  (5, 'Item Model Number', 'LT-DL500'),
  (5, 'Warranty', '2 years manufacturer warranty'),

-- Product 6 - Portable Power Bank
  (6, 'ASIN', 'B09PB20K65'),
  (6, 'Customer Reviews', '4.6 out of 5 stars (2,734 ratings)'),
  (6, 'Best Sellers Rank', '#5 in Electronics > Power Banks'),
  (6, 'Date First Available', 'June 8, 2024'),
  (6, 'Manufacturer', 'PowerMax Energy Solutions, 852 Battery Lane, Denver, Colorado 80202'),
  (6, 'Item Weight', '425 grams'),
  (6, 'Product Dimensions', '15.5 x 7.5 x 2.5 cm'),
  (6, 'Batteries', '1 Lithium Polymer battery (20000mAh, built-in)'),
  (6, 'Item Model Number', 'PM-20K-PD'),
  (6, 'Warranty', '18 months manufacturer warranty'),

-- Product 28 - 1080p HD Webcam
  (28, 'ASIN', 'B08WC1080P'),
  (28, 'Customer Reviews', '4.4 out of 5 stars (1,845 ratings)'),
  (28, 'Best Sellers Rank', '#18 in Electronics > Webcams'),
  (28, 'Date First Available', 'July 12, 2024'),
  (28, 'Manufacturer', 'ClearView Technologies, 963 Vision Road, Boston, Massachusetts 02108'),
  (28, 'Item Weight', '75 grams'),
  (28, 'Product Dimensions', '10 x 5 x 5 cm'),
  (28, 'Batteries', 'Not required (USB powered)'),
  (28, 'Item Model Number', 'CV-W1080'),
  (28, 'Warranty', '1 year manufacturer warranty'),

-- Product 29 - Smart Watch Series 5
  (29, 'ASIN', 'B09SW5FITX'),
  (29, 'Customer Reviews', '4.6 out of 5 stars (5,127 ratings)'),
  (29, 'Best Sellers Rank', '#9 in Electronics > Smart Watches'),
  (29, 'Date First Available', 'August 20, 2024'),
  (29, 'Manufacturer', 'FitTime Wearables Inc., 741 Health Plaza, San Francisco, California 94103'),
  (29, 'Item Weight', '65 grams (with strap)'),
  (29, 'Product Dimensions', '4.5 x 3.8 x 1.2 cm (case)'),
  (29, 'Batteries', '1 Lithium Polymer battery (built-in)'),
  (29, 'Item Model Number', 'FT-SW5'),
  (29, 'Warranty', '1 year manufacturer warranty'),

-- Product 30 - Portable Bluetooth Speaker
  (30, 'ASIN', 'B09BT360SP'),
  (30, 'Customer Reviews', '4.5 out of 5 stars (3,012 ratings)'),
  (30, 'Best Sellers Rank', '#14 in Electronics > Bluetooth Speakers'),
  (30, 'Date First Available', 'September 3, 2024'),
  (30, 'Manufacturer', 'AudioWave Sound Systems, 258 Acoustic Drive, Nashville, Tennessee 37201'),
  (30, 'Item Weight', '650 grams'),
  (30, 'Product Dimensions', '18 x 7 x 7 cm (cylindrical)'),
  (30, 'Batteries', '1 Lithium Ion battery (5200mAh, built-in)'),
  (30, 'Item Model Number', 'AW-360BT'),
  (30, 'Warranty', '1 year manufacturer warranty'),

-- Product 31 - 7-in-1 USB-C Hub
  (31, 'ASIN', 'B09HUB7IN1'),
  (31, 'Customer Reviews', '4.5 out of 5 stars (2,389 ratings)'),
  (31, 'Best Sellers Rank', '#6 in Electronics > USB Hubs'),
  (31, 'Date First Available', 'October 15, 2024'),
  (31, 'Manufacturer', 'ConnectPro Accessories Ltd., 369 Port Street, Palo Alto, California 94301'),
  (31, 'Item Weight', '65 grams'),
  (31, 'Product Dimensions', '11 x 4.5 x 1.2 cm'),
  (31, 'Batteries', 'Not required (powered via USB-C)'),
  (31, 'Item Model Number', 'CP-HUB7'),
  (31, 'Warranty', '2 years manufacturer warranty'),

-- Product 32 - 1 TB Portable NVMe SSD
  (32, 'ASIN', 'B09SSD1TBX'),
  (32, 'Customer Reviews', '4.7 out of 5 stars (4,523 ratings)'),
  (32, 'Best Sellers Rank', '#3 in Electronics > External SSDs'),
  (32, 'Date First Available', 'November 28, 2024'),
  (32, 'Manufacturer', 'SpeedDrive Storage Inc., 147 Data Center Road, Santa Clara, California 95050'),
  (32, 'Item Weight', '50 grams'),
  (32, 'Product Dimensions', '10 x 3 x 1 cm'),
  (32, 'Batteries', 'Not required (bus-powered)'),
  (32, 'Item Model Number', 'SD-NVME-1TB'),
  (32, 'Warranty', '5 years manufacturer warranty'),

-- Product 7 - Clean Code
  (7, 'ASIN', 'B00MHTAEG0'),
  (7, 'Customer Reviews', '4.7 out of 5 stars (9,214 ratings)'),
  (7, 'Best Sellers Rank', '#4 in Books > Programming'),
  (7, 'Date First Available', 'August 1, 2008'),
  (7, 'Publisher', 'Prentice Hall'),
  (7, 'Language', 'English'),
  (7, 'Item Weight', '780 grams'),
  (7, 'Product Dimensions', '17.8 x 3 x 23.4 cm'),
  (7, 'Country of Origin', 'United States'),
  (7, 'Edition', '1st Edition'),

-- Product 8 - The Pragmatic Programmer
  (8, 'ASIN', 'B07VRS84D1'),
  (8, 'Customer Reviews', '4.8 out of 5 stars (5,806 ratings)'),
  (8, 'Best Sellers Rank', '#7 in Books > Software Development'),
  (8, 'Date First Available', 'September 13, 2019'),
  (8, 'Publisher', 'Addison-Wesley Professional'),
  (8, 'Language', 'English'),
  (8, 'Item Weight', '620 grams'),
  (8, 'Product Dimensions', '18 x 2.1 x 23.2 cm'),
  (8, 'Country of Origin', 'United States'),
  (8, 'Edition', '20th Anniversary Edition'),

-- Product 9 - Designing Data-Intensive Applications
  (9, 'ASIN', 'B01J89I7PI'),
  (9, 'Customer Reviews', '4.8 out of 5 stars (6,149 ratings)'),
  (9, 'Best Sellers Rank', '#2 in Books > Databases'),
  (9, 'Date First Available', 'March 16, 2017'),
  (9, 'Publisher', 'O''Reilly Media'),
  (9, 'Language', 'English'),
  (9, 'Item Weight', '980 grams'),
  (9, 'Product Dimensions', '17.9 x 3.4 x 23.4 cm'),
  (9, 'Country of Origin', 'United States'),
  (9, 'Edition', '1st Edition'),

-- Product 10 - Atomic Habits
  (10, 'ASIN', 'B07D23CFGR'),
  (10, 'Customer Reviews', '4.8 out of 5 stars (126,432 ratings)'),
  (10, 'Best Sellers Rank', '#1 in Books > Self-Help'),
  (10, 'Date First Available', 'October 16, 2018'),
  (10, 'Publisher', 'Avery'),
  (10, 'Language', 'English'),
  (10, 'Item Weight', '360 grams'),
  (10, 'Product Dimensions', '15.3 x 2.3 x 23.4 cm'),
  (10, 'Country of Origin', 'United States'),
  (10, 'Edition', 'Reprint Edition'),

-- Product 11 - The Art of Problem Solving Vol. 1
  (11, 'ASIN', 'B001Q9FWP6'),
  (11, 'Customer Reviews', '4.7 out of 5 stars (1,984 ratings)'),
  (11, 'Best Sellers Rank', '#11 in Books > Mathematics'),
  (11, 'Date First Available', 'January 1, 2006'),
  (11, 'Publisher', 'AoPS Incorporated'),
  (11, 'Language', 'English'),
  (11, 'Item Weight', '1.1 kg'),
  (11, 'Product Dimensions', '21.6 x 2.6 x 27.9 cm'),
  (11, 'Country of Origin', 'United States'),
  (11, 'Edition', 'Second Edition'),

-- Product 33 - Deep Work
  (33, 'ASIN', 'B013UWFM52'),
  (33, 'Customer Reviews', '4.6 out of 5 stars (14,223 ratings)'),
  (33, 'Best Sellers Rank', '#5 in Books > Productivity'),
  (33, 'Date First Available', 'January 5, 2016'),
  (33, 'Publisher', 'Grand Central Publishing'),
  (33, 'Language', 'English'),
  (33, 'Item Weight', '280 grams'),
  (33, 'Product Dimensions', '13.4 x 2.2 x 20.3 cm'),
  (33, 'Country of Origin', 'United States'),
  (33, 'Edition', 'Reprint Edition'),

-- Product 34 - Zero to One
  (34, 'ASIN', 'B00M284NY2'),
  (34, 'Customer Reviews', '4.5 out of 5 stars (21,096 ratings)'),
  (34, 'Best Sellers Rank', '#8 in Books > Entrepreneurship'),
  (34, 'Date First Available', 'September 16, 2014'),
  (34, 'Publisher', 'Currency'),
  (34, 'Language', 'English'),
  (34, 'Item Weight', '240 grams'),
  (34, 'Product Dimensions', '13.2 x 1.7 x 20.2 cm'),
  (34, 'Country of Origin', 'United States'),
  (34, 'Edition', '1st Edition'),

-- Product 35 - The Hobbit
  (35, 'ASIN', 'B0079KT81G'),
  (35, 'Customer Reviews', '4.8 out of 5 stars (78,441 ratings)'),
  (35, 'Best Sellers Rank', '#3 in Books > Fantasy'),
  (35, 'Date First Available', 'September 21, 1937'),
  (35, 'Publisher', 'Mariner Books'),
  (35, 'Language', 'English'),
  (35, 'Item Weight', '300 grams'),
  (35, 'Product Dimensions', '13.5 x 2 x 20.3 cm'),
  (35, 'Country of Origin', 'United Kingdom'),
  (35, 'Edition', 'Reprint Edition'),

-- Product 36 - Sapiens
  (36, 'ASIN', 'B00ICN066A'),
  (36, 'Customer Reviews', '4.7 out of 5 stars (58,913 ratings)'),
  (36, 'Best Sellers Rank', '#6 in Books > History'),
  (36, 'Date First Available', 'February 10, 2015'),
  (36, 'Publisher', 'Harper'),
  (36, 'Language', 'English'),
  (36, 'Item Weight', '410 grams'),
  (36, 'Product Dimensions', '13.5 x 2.8 x 20.3 cm'),
  (36, 'Country of Origin', 'United States'),
  (36, 'Edition', 'Reprint Edition'),

-- Product 37 - Cracking the Coding Interview
  (37, 'ASIN', 'B01M26ZHJK'),
  (37, 'Customer Reviews', '4.7 out of 5 stars (13,508 ratings)'),
  (37, 'Best Sellers Rank', '#1 in Books > Interview Guides'),
  (37, 'Date First Available', 'July 1, 2015'),
  (37, 'Publisher', 'CareerCup'),
  (37, 'Language', 'English'),
  (37, 'Item Weight', '1.3 kg'),
  (37, 'Product Dimensions', '20.3 x 3.6 x 25.4 cm'),
  (37, 'Country of Origin', 'United States'),
  (37, 'Edition', '6th Edition'),

-- Product 12 - Men's Classic Fit Oxford Shirt
  (12, 'ASIN', 'B09OXFDCL1'),
  (12, 'Customer Reviews', '4.5 out of 5 stars (3,218 ratings)'),
  (12, 'Best Sellers Rank', '#9 in Clothing > Men''s Casual Shirts'),
  (12, 'Date First Available', 'February 14, 2024'),
  (12, 'Manufacturer', 'NorthField Apparel, Raleigh, North Carolina 27601'),
  (12, 'Item Weight', '320 grams'),
  (12, 'Product Dimensions', '32 x 24 x 3 cm'),
  (12, 'Country of Origin', 'India'),
  (12, 'Item Model Number', 'NF-OXF-CL'),
  (12, 'Warranty', '30-day manufacturer warranty'),

-- Product 13 - Women''s High-Waist Yoga Pants
  (13, 'ASIN', 'B09YOGAHWP'),
  (13, 'Customer Reviews', '4.6 out of 5 stars (6,842 ratings)'),
  (13, 'Best Sellers Rank', '#4 in Clothing > Women''s Activewear'),
  (13, 'Date First Available', 'March 8, 2024'),
  (13, 'Manufacturer', 'FlexAura Active, Los Angeles, California 90015'),
  (13, 'Item Weight', '260 grams'),
  (13, 'Product Dimensions', '28 x 22 x 2 cm'),
  (13, 'Country of Origin', 'Vietnam'),
  (13, 'Item Model Number', 'FA-YP-HW'),
  (13, 'Warranty', '60-day manufacturer warranty'),

-- Product 14 - Unisex Zip-Up Hoodie
  (14, 'ASIN', 'B09ZIPHDUD'),
  (14, 'Customer Reviews', '4.5 out of 5 stars (4,411 ratings)'),
  (14, 'Best Sellers Rank', '#7 in Clothing > Hoodies'),
  (14, 'Date First Available', 'January 29, 2024'),
  (14, 'Manufacturer', 'UrbanThread Co., Brooklyn, New York 11201'),
  (14, 'Item Weight', '540 grams'),
  (14, 'Product Dimensions', '35 x 28 x 5 cm'),
  (14, 'Country of Origin', 'Bangladesh'),
  (14, 'Item Model Number', 'UT-HOOD-Z'),
  (14, 'Warranty', '30-day manufacturer warranty'),

-- Product 15 - Men''s Running Shorts
  (15, 'ASIN', 'B09RUNSHRT'),
  (15, 'Customer Reviews', '4.4 out of 5 stars (2,986 ratings)'),
  (15, 'Best Sellers Rank', '#11 in Clothing > Men''s Running Apparel'),
  (15, 'Date First Available', 'April 11, 2024'),
  (15, 'Manufacturer', 'SwiftRun Sportswear, Austin, Texas 78703'),
  (15, 'Item Weight', '180 grams'),
  (15, 'Product Dimensions', '24 x 18 x 2 cm'),
  (15, 'Country of Origin', 'Indonesia'),
  (15, 'Item Model Number', 'SR-SHORT5'),
  (15, 'Warranty', '30-day manufacturer warranty'),

-- Product 16 - Women''s Trench Coat
  (16, 'ASIN', 'B09TRNCHCT'),
  (16, 'Customer Reviews', '4.5 out of 5 stars (1,754 ratings)'),
  (16, 'Best Sellers Rank', '#10 in Clothing > Women''s Coats'),
  (16, 'Date First Available', 'May 6, 2024'),
  (16, 'Manufacturer', 'BelleStreet Fashion, Chicago, Illinois 60611'),
  (16, 'Item Weight', '920 grams'),
  (16, 'Product Dimensions', '38 x 30 x 6 cm'),
  (16, 'Country of Origin', 'China'),
  (16, 'Item Model Number', 'BS-TRENCH-W'),
  (16, 'Warranty', '30-day manufacturer warranty'),

-- Product 38 - Men''s Slim Fit Chino Trousers
  (38, 'ASIN', 'B09CHINOSM'),
  (38, 'Customer Reviews', '4.4 out of 5 stars (2,275 ratings)'),
  (38, 'Best Sellers Rank', '#8 in Clothing > Men''s Pants'),
  (38, 'Date First Available', 'June 3, 2024'),
  (38, 'Manufacturer', 'MetroTailor Apparel, Newark, New Jersey 07105'),
  (38, 'Item Weight', '410 grams'),
  (38, 'Product Dimensions', '30 x 24 x 3 cm'),
  (38, 'Country of Origin', 'India'),
  (38, 'Item Model Number', 'MT-CHINO-SF'),
  (38, 'Warranty', '30-day manufacturer warranty'),

-- Product 39 - Women''s Puffer Jacket
  (39, 'ASIN', 'B09PUFFJKT'),
  (39, 'Customer Reviews', '4.6 out of 5 stars (3,644 ratings)'),
  (39, 'Best Sellers Rank', '#6 in Clothing > Women''s Jackets'),
  (39, 'Date First Available', 'July 8, 2024'),
  (39, 'Manufacturer', 'NorthPeak Outerwear, Denver, Colorado 80202'),
  (39, 'Item Weight', '480 grams'),
  (39, 'Product Dimensions', '34 x 27 x 5 cm'),
  (39, 'Country of Origin', 'Vietnam'),
  (39, 'Item Model Number', 'NP-PUFF-W'),
  (39, 'Warranty', '60-day manufacturer warranty'),

-- Product 40 - Unisex Premium Graphic Tee
  (40, 'ASIN', 'B09GRAPHCT'),
  (40, 'Customer Reviews', '4.5 out of 5 stars (5,102 ratings)'),
  (40, 'Best Sellers Rank', '#5 in Clothing > Graphic Tees'),
  (40, 'Date First Available', 'August 12, 2024'),
  (40, 'Manufacturer', 'CanvasMode Studio, Portland, Oregon 97209'),
  (40, 'Item Weight', '230 grams'),
  (40, 'Product Dimensions', '26 x 21 x 2 cm'),
  (40, 'Country of Origin', 'India'),
  (40, 'Item Model Number', 'CM-GTEE-P'),
  (40, 'Warranty', '30-day manufacturer warranty'),

-- Product 41 - Merino Wool Beanie
  (41, 'ASIN', 'B09MERBNIE'),
  (41, 'Customer Reviews', '4.6 out of 5 stars (1,988 ratings)'),
  (41, 'Best Sellers Rank', '#7 in Clothing > Winter Hats'),
  (41, 'Date First Available', 'September 9, 2024'),
  (41, 'Manufacturer', 'AlpineKnit Goods, Burlington, Vermont 05401'),
  (41, 'Item Weight', '95 grams'),
  (41, 'Product Dimensions', '22 x 20 x 3 cm'),
  (41, 'Country of Origin', 'Nepal'),
  (41, 'Item Model Number', 'AK-BEANIE-M'),
  (41, 'Warranty', '30-day manufacturer warranty'),

-- Product 42 - Full-Grain Leather Belt
  (42, 'ASIN', 'B09LTHRBLT'),
  (42, 'Customer Reviews', '4.5 out of 5 stars (2,411 ratings)'),
  (42, 'Best Sellers Rank', '#9 in Clothing > Belts'),
  (42, 'Date First Available', 'October 4, 2024'),
  (42, 'Manufacturer', 'HeritageHide Leatherworks, Nashville, Tennessee 37203'),
  (42, 'Item Weight', '210 grams'),
  (42, 'Product Dimensions', '18 x 14 x 4 cm'),
  (42, 'Country of Origin', 'Mexico'),
  (42, 'Item Model Number', 'HH-BELT-FG'),
  (42, 'Warranty', '1 year manufacturer warranty'),

-- Product 17 - Stainless Steel Cookware Set 10-Piece
  (17, 'ASIN', 'B09CKWR10P'),
  (17, 'Customer Reviews', '4.6 out of 5 stars (2,184 ratings)'),
  (17, 'Best Sellers Rank', '#12 in Home & Kitchen > Cookware Sets'),
  (17, 'Date First Available', 'March 11, 2024'),
  (17, 'Manufacturer', 'KitchenCraft Pro, Chicago, Illinois 60607'),
  (17, 'Item Weight', '8.4 kg'),
  (17, 'Product Dimensions', '56 x 34 x 24 cm'),
  (17, 'Dishwasher Safe', 'Yes'),
  (17, 'Item Model Number', 'KCP-SS10'),
  (17, 'Warranty', '5 years manufacturer warranty'),

-- Product 18 - Cold Brew Coffee Maker 1L
  (18, 'ASIN', 'B09CBRW1L'),
  (18, 'Customer Reviews', '4.5 out of 5 stars (1,672 ratings)'),
  (18, 'Best Sellers Rank', '#9 in Home & Kitchen > Coffee Makers'),
  (18, 'Date First Available', 'April 2, 2024'),
  (18, 'Manufacturer', 'BrewEase Kitchenware, Portland, Oregon 97205'),
  (18, 'Item Weight', '620 grams'),
  (18, 'Product Dimensions', '12 x 12 x 28 cm'),
  (18, 'Dishwasher Safe', 'Yes'),
  (18, 'Item Model Number', 'BE-CB1000'),
  (18, 'Warranty', '1 year manufacturer warranty'),

-- Product 19 - Bamboo Cutting Board Set
  (19, 'ASIN', 'B09BMB3SET'),
  (19, 'Customer Reviews', '4.4 out of 5 stars (3,025 ratings)'),
  (19, 'Best Sellers Rank', '#6 in Home & Kitchen > Cutting Boards'),
  (19, 'Date First Available', 'January 19, 2024'),
  (19, 'Manufacturer', 'EcoSlice Home Goods, Austin, Texas 78702'),
  (19, 'Item Weight', '2.1 kg'),
  (19, 'Product Dimensions', '40 x 30 x 6 cm'),
  (19, 'Dishwasher Safe', 'No'),
  (19, 'Item Model Number', 'ES-CB3'),
  (19, 'Warranty', '1 year manufacturer warranty'),

-- Product 20 - Stand Mixer 4.5 Qt
  (20, 'ASIN', 'B09MIX45QT'),
  (20, 'Customer Reviews', '4.7 out of 5 stars (4,118 ratings)'),
  (20, 'Best Sellers Rank', '#4 in Home & Kitchen > Stand Mixers'),
  (20, 'Date First Available', 'May 9, 2024'),
  (20, 'Manufacturer', 'MixMaster Appliances, Cleveland, Ohio 44114'),
  (20, 'Item Weight', '6.8 kg'),
  (20, 'Product Dimensions', '35 x 22 x 34 cm'),
  (20, 'Dishwasher Safe', 'Attachments only'),
  (20, 'Item Model Number', 'MM-45T'),
  (20, 'Warranty', '2 years manufacturer warranty'),

-- Product 21 - Air Purifier with HEPA Filter
  (21, 'ASIN', 'B09HEPA40M'),
  (21, 'Customer Reviews', '4.6 out of 5 stars (5,402 ratings)'),
  (21, 'Best Sellers Rank', '#7 in Home & Kitchen > Air Purifiers'),
  (21, 'Date First Available', 'February 28, 2024'),
  (21, 'Manufacturer', 'PureBreeze Air Solutions, Seattle, Washington 98104'),
  (21, 'Item Weight', '4.9 kg'),
  (21, 'Product Dimensions', '24 x 24 x 41 cm'),
  (21, 'Filter Replacement Interval', '6-8 months'),
  (21, 'Item Model Number', 'PB-HEPA40'),
  (21, 'Warranty', '2 years manufacturer warranty'),

-- Product 43 - Variable Temperature Electric Kettle
  (43, 'ASIN', 'B09KTL17VT'),
  (43, 'Customer Reviews', '4.5 out of 5 stars (2,761 ratings)'),
  (43, 'Best Sellers Rank', '#5 in Home & Kitchen > Electric Kettles'),
  (43, 'Date First Available', 'June 14, 2024'),
  (43, 'Manufacturer', 'HeatCraft Appliances, Newark, New Jersey 07102'),
  (43, 'Item Weight', '1.2 kg'),
  (43, 'Product Dimensions', '22 x 16 x 25 cm'),
  (43, 'Cordless Pouring', 'Yes'),
  (43, 'Item Model Number', 'HC-VK17'),
  (43, 'Warranty', '18 months manufacturer warranty'),

-- Product 44 - Ceramic Non-Stick Frying Pan 28 cm
  (44, 'ASIN', 'B09PAN28CM'),
  (44, 'Customer Reviews', '4.4 out of 5 stars (1,943 ratings)'),
  (44, 'Best Sellers Rank', '#10 in Home & Kitchen > Frying Pans'),
  (44, 'Date First Available', 'July 6, 2024'),
  (44, 'Manufacturer', 'GreenSkillet Cookware, Denver, Colorado 80205'),
  (44, 'Item Weight', '1.1 kg'),
  (44, 'Product Dimensions', '48 x 28 x 6 cm'),
  (44, 'Dishwasher Safe', 'Yes'),
  (44, 'Item Model Number', 'GS-CER28'),
  (44, 'Warranty', '2 years manufacturer warranty'),

-- Product 45 - Semi-Automatic Espresso Machine
  (45, 'ASIN', 'B09ESP15BR'),
  (45, 'Customer Reviews', '4.6 out of 5 stars (3,386 ratings)'),
  (45, 'Best Sellers Rank', '#8 in Home & Kitchen > Espresso Machines'),
  (45, 'Date First Available', 'August 18, 2024'),
  (45, 'Manufacturer', 'BaristaHome Appliances, Miami, Florida 33130'),
  (45, 'Item Weight', '4.3 kg'),
  (45, 'Product Dimensions', '30 x 22 x 31 cm'),
  (45, 'Water Tank Removable', 'Yes'),
  (45, 'Item Model Number', 'BH-ESP15'),
  (45, 'Warranty', '2 years manufacturer warranty'),

-- Product 46 - Digital Kitchen Scale 5 kg
  (46, 'ASIN', 'B09SCL5KGM'),
  (46, 'Customer Reviews', '4.5 out of 5 stars (4,907 ratings)'),
  (46, 'Best Sellers Rank', '#3 in Home & Kitchen > Kitchen Scales'),
  (46, 'Date First Available', 'September 1, 2024'),
  (46, 'Manufacturer', 'MeasureMate Kitchen Tools, Phoenix, Arizona 85004'),
  (46, 'Item Weight', '420 grams'),
  (46, 'Product Dimensions', '18 x 14 x 2 cm'),
  (46, 'Batteries', '2 x AAA included'),
  (46, 'Item Model Number', 'MM-SCL5'),
  (46, 'Warranty', '1 year manufacturer warranty'),

-- Product 47 - Vacuum Storage Bag Set (8-Pack)
  (47, 'ASIN', 'B09VAC8PKS'),
  (47, 'Customer Reviews', '4.4 out of 5 stars (2,556 ratings)'),
  (47, 'Best Sellers Rank', '#11 in Home & Kitchen > Storage Bags'),
  (47, 'Date First Available', 'October 9, 2024'),
  (47, 'Manufacturer', 'SpaceSaver Home Solutions, Charlotte, North Carolina 28202'),
  (47, 'Item Weight', '760 grams'),
  (47, 'Product Dimensions', '32 x 26 x 7 cm'),
  (47, 'Pump Included', 'Yes'),
  (47, 'Item Model Number', 'SS-VAC8'),
  (47, 'Warranty', '1 year manufacturer warranty'),

-- Product 22 - Adjustable Dumbbell Set 5-25 kg
  (22, 'ASIN', 'B09DB2550K'),
  (22, 'Customer Reviews', '4.7 out of 5 stars (3,842 ratings)'),
  (22, 'Best Sellers Rank', '#3 in Sports & Outdoors > Dumbbells'),
  (22, 'Date First Available', 'March 4, 2024'),
  (22, 'Manufacturer', 'IronFlex Fitness, Columbus, Ohio 43215'),
  (22, 'Item Weight', '50 kg total set'),
  (22, 'Product Dimensions', '42 x 22 x 24 cm'),
  (22, 'Assembly Required', 'No'),
  (22, 'Item Model Number', 'IF-DB25'),
  (22, 'Warranty', '2 years manufacturer warranty'),

-- Product 23 - Resistance Bands Set (5 Levels)
  (23, 'ASIN', 'B09RB5LVLS'),
  (23, 'Customer Reviews', '4.6 out of 5 stars (5,214 ratings)'),
  (23, 'Best Sellers Rank', '#5 in Sports & Outdoors > Resistance Bands'),
  (23, 'Date First Available', 'January 23, 2024'),
  (23, 'Manufacturer', 'FlexCore Training Gear, San Diego, California 92101'),
  (23, 'Item Weight', '540 grams'),
  (23, 'Product Dimensions', '28 x 14 x 6 cm'),
  (23, 'Carry Case Included', 'Yes'),
  (23, 'Item Model Number', 'FC-RB5'),
  (23, 'Warranty', '1 year manufacturer warranty'),

-- Product 24 - Yoga Mat Non-Slip 6mm
  (24, 'ASIN', 'B09YM6NSLP'),
  (24, 'Customer Reviews', '4.5 out of 5 stars (7,088 ratings)'),
  (24, 'Best Sellers Rank', '#4 in Sports & Outdoors > Yoga Mats'),
  (24, 'Date First Available', 'February 12, 2024'),
  (24, 'Manufacturer', 'ZenFlex Wellness, Boulder, Colorado 80301'),
  (24, 'Item Weight', '1.1 kg'),
  (24, 'Product Dimensions', '183 x 66 x 0.6 cm'),
  (24, 'Carry Strap Included', 'Yes'),
  (24, 'Item Model Number', 'ZF-YM6'),
  (24, 'Warranty', '1 year manufacturer warranty'),

-- Product 25 - Hydration Running Vest 10L
  (25, 'ASIN', 'B09RUN10LV'),
  (25, 'Customer Reviews', '4.4 out of 5 stars (1,963 ratings)'),
  (25, 'Best Sellers Rank', '#9 in Sports & Outdoors > Hydration Packs'),
  (25, 'Date First Available', 'April 16, 2024'),
  (25, 'Manufacturer', 'TrailFlow Outdoor Gear, Salt Lake City, Utah 84101'),
  (25, 'Item Weight', '420 grams'),
  (25, 'Product Dimensions', '44 x 28 x 4 cm'),
  (25, 'Reservoir Included', 'No'),
  (25, 'Item Model Number', 'TF-HV10'),
  (25, 'Warranty', '18 months manufacturer warranty'),

-- Product 26 - Camping Lantern Rechargeable
  (26, 'ASIN', 'B09LANT100'),
  (26, 'Customer Reviews', '4.6 out of 5 stars (2,847 ratings)'),
  (26, 'Best Sellers Rank', '#6 in Sports & Outdoors > Camping Lanterns'),
  (26, 'Date First Available', 'May 27, 2024'),
  (26, 'Manufacturer', 'CampGlow Essentials, Boise, Idaho 83702'),
  (26, 'Item Weight', '510 grams'),
  (26, 'Product Dimensions', '10 x 10 x 18 cm'),
  (26, 'Power Bank Function', 'Yes'),
  (26, 'Item Model Number', 'CG-L1000'),
  (26, 'Warranty', '1 year manufacturer warranty'),

-- Product 27 - Foam Roller 60cm
  (27, 'ASIN', 'B09FR60EVA'),
  (27, 'Customer Reviews', '4.5 out of 5 stars (3,119 ratings)'),
  (27, 'Best Sellers Rank', '#7 in Sports & Outdoors > Foam Rollers'),
  (27, 'Date First Available', 'June 21, 2024'),
  (27, 'Manufacturer', 'RecoverFit Mobility, Minneapolis, Minnesota 55401'),
  (27, 'Item Weight', '780 grams'),
  (27, 'Product Dimensions', '60 x 14 x 14 cm'),
  (27, 'Water Resistant', 'Yes'),
  (27, 'Item Model Number', 'RF-FR60'),
  (27, 'Warranty', '1 year manufacturer warranty'),

-- Product 48 - Speed Jump Rope with Counter
  (48, 'ASIN', 'B09JUMPCTR'),
  (48, 'Customer Reviews', '4.4 out of 5 stars (2,266 ratings)'),
  (48, 'Best Sellers Rank', '#8 in Sports & Outdoors > Jump Ropes'),
  (48, 'Date First Available', 'July 15, 2024'),
  (48, 'Manufacturer', 'CardioPro Conditioning, Tampa, Florida 33602'),
  (48, 'Item Weight', '220 grams'),
  (48, 'Product Dimensions', '18 x 14 x 4 cm'),
  (48, 'Counter Battery', 'Included'),
  (48, 'Item Model Number', 'CP-JR3'),
  (48, 'Warranty', '1 year manufacturer warranty'),

-- Product 49 - Doorframe Pull-Up Bar
  (49, 'ASIN', 'B09PULLBAR'),
  (49, 'Customer Reviews', '4.3 out of 5 stars (4,004 ratings)'),
  (49, 'Best Sellers Rank', '#10 in Sports & Outdoors > Pull-Up Bars'),
  (49, 'Date First Available', 'August 3, 2024'),
  (49, 'Manufacturer', 'PowerLift Strength Co., Dallas, Texas 75201'),
  (49, 'Item Weight', '2.8 kg'),
  (49, 'Product Dimensions', '98 x 12 x 7 cm'),
  (49, 'Mount Type', 'Doorframe'),
  (49, 'Item Model Number', 'PL-DPB100'),
  (49, 'Warranty', '2 years manufacturer warranty'),

-- Product 50 - Lightweight Carbon Trekking Poles (Pair)
  (50, 'ASIN', 'B09TRKPOLS'),
  (50, 'Customer Reviews', '4.6 out of 5 stars (1,784 ratings)'),
  (50, 'Best Sellers Rank', '#7 in Sports & Outdoors > Trekking Poles'),
  (50, 'Date First Available', 'September 12, 2024'),
  (50, 'Manufacturer', 'SummitTrail Equipment, Bend, Oregon 97701'),
  (50, 'Item Weight', '420 grams per pair'),
  (50, 'Product Dimensions', '36 x 8 x 8 cm (collapsed)'),
  (50, 'Accessories Included', 'Snow Baskets, Rubber Tips'),
  (50, 'Item Model Number', 'ST-CP135'),
  (50, 'Warranty', '2 years manufacturer warranty'),

-- Product 51 - 3-Season Sleeping Bag -5°C
  (51, 'ASIN', 'B09SLPBG5C'),
  (51, 'Customer Reviews', '4.7 out of 5 stars (2,933 ratings)'),
  (51, 'Best Sellers Rank', '#5 in Sports & Outdoors > Sleeping Bags'),
  (51, 'Date First Available', 'October 6, 2024'),
  (51, 'Manufacturer', 'NorthCamp Gear, Missoula, Montana 59802'),
  (51, 'Item Weight', '1.25 kg'),
  (51, 'Product Dimensions', '220 x 80 x 7 cm'),
  (51, 'Compression Sack Included', 'Yes'),
  (51, 'Item Model Number', 'NC-SB5'),
  (51, 'Warranty', '2 years manufacturer warranty'),

-- Product 52 - MIPS Road Bicycle Helmet
  (52, 'ASIN', 'B09MIPSRDL'),
  (52, 'Customer Reviews', '4.6 out of 5 stars (2,408 ratings)'),
  (52, 'Best Sellers Rank', '#9 in Sports & Outdoors > Cycling Helmets'),
  (52, 'Date First Available', 'November 10, 2024'),
  (52, 'Manufacturer', 'RideSafe Cycling, San Jose, California 95112'),
  (52, 'Item Weight', '290 grams'),
  (52, 'Product Dimensions', '31 x 22 x 16 cm'),
  (52, 'Certification', 'CPSC / CE Certified'),
  (52, 'Item Model Number', 'RS-MIPS18'),
  (52, 'Warranty', '2 years manufacturer warranty');

-- Product reviews for product 1
INSERT INTO product_reviews (product_id, reviewer_name, rating, title, review_text, verified_purchase, review_date, helpful_count) VALUES
  (1, 'Sarah M.', 5, 'Best headphones I''ve ever owned!', 
   'These headphones are absolutely incredible! The noise cancellation works perfectly - I can barely hear anything when it''s on. The sound quality is crisp and clear, with deep bass that doesn''t overpower the mids and highs. Battery life easily lasts me through the week with daily use. Highly recommend!', 
   true, '2024-11-15', 847),
   
  (1, 'Mike Johnson', 5, 'Perfect for travel and commuting', 
   'Bought these for my daily commute and long flights. The ANC is top-notch - completely blocks out airplane engine noise. They''re comfortable even after wearing for 8+ hours. The foldable design is great for packing. Worth every penny!', 
   true, '2024-10-22', 523),
   
  (1, 'Emily Chen', 4, 'Great sound, minor connectivity issues', 
   'Overall very happy with these headphones. Sound quality is excellent and the noise cancellation is impressive. I''ve had occasional Bluetooth connectivity issues where they disconnect randomly, but it doesn''t happen often. Touch controls take some getting used to. Still recommend for the price.', 
   true, '2024-09-30', 342),
   
  (1, 'David Rodriguez', 5, 'Exceptional value for money', 
   'I was skeptical at first given the competitive price point, but these headphones punch way above their weight class. Build quality feels premium, the sound is balanced and detailed, and the battery life claim of 30 hours is accurate. The included carrying case is a nice touch.', 
   true, '2024-12-05', 289),
   
  (1, 'Jennifer Wu', 4, 'Good but not perfect', 
   'These are good headphones but not without flaws. The noise cancellation works well but causes a slight pressure sensation that some people might find uncomfortable. Sound quality is very good for the price. The padding on the ear cups could be softer for long sessions. Still, a solid choice overall.', 
   true, '2024-08-18', 195),

-- Product 2 - Mechanical Gaming Keyboard
  (2, 'Alex Turner', 5, 'Perfect keyboard for gaming and typing', 
   'This keyboard is fantastic! The tactile switches feel amazing - great for both gaming and typing. The RGB lighting is bright and customizable. Build quality is solid with zero flex. The compact tenkeyless design saves desk space. After a month of heavy use, I couldn''t be happier.', 
   true, '2024-12-01', 634),
   
  (2, 'Rachel Kim', 5, 'Best value mechanical keyboard', 
   'Coming from a membrane keyboard, this is a game changer. The tactile feedback is satisfying and helps reduce typing errors. Hot-swappable switches are a huge plus. RGB is vibrant. Only minor complaint is the stabilizers could use some lube, but that''s an easy fix.', 
   true, '2024-10-18', 421),
   
  (2, 'Tom Foster', 4, 'Great keyboard with minor issues', 
   'Really enjoying this keyboard. The switches feel great and the sound is pleasant. RGB customization through software is extensive. However, the keycaps feel a bit thin and show fingerprints easily. Also wish it came with a wrist rest. Still recommend for the price point.', 
   true, '2024-11-09', 287),
   
  (2, 'Lisa Martinez', 5, 'Exceeded expectations', 
   'Was worried about buying online without trying the switches first, but I''m so glad I did. The tactile switches are perfect - not too loud, great feedback. Compact size is ideal for my small desk. Cable is high quality and detachable. This is a premium keyboard at a mid-range price.', 
   true, '2024-09-25', 256),
   
  (2, 'James Park', 4, 'Solid mechanical keyboard', 
   'Good keyboard overall. Switches are responsive and feel consistent across all keys. RGB is nice but I usually keep it on single color mode. Build is sturdy. My only gripe is the font on the keycaps looks a bit gamer-y for my taste. Performance-wise, it''s excellent.', 
   true, '2024-11-20', 178),

-- Product 3 - 4K USB-C Monitor
  (3, 'Marcus Anderson', 5, 'Stunning display quality', 
   'This monitor is absolutely gorgeous. The 4K resolution is incredibly sharp and the IPS panel has excellent color accuracy right out of the box. The 65W power delivery means I can charge my laptop with just one cable. Perfect for photography and video editing work.', 
   true, '2024-10-30', 892),
   
  (3, 'Sophie Chen', 5, 'Perfect for Mac users', 
   'Bought this for my MacBook Pro and it''s perfect. USB-C connectivity with power delivery is so convenient - just one cable for everything. Colors are vibrant and match my MacBook display well. 99% sRGB coverage is great for design work. Built-in speakers are surprisingly decent too.', 
   true, '2024-09-15', 567),
   
  (3, 'Daniel Wright', 4, 'Excellent monitor, minor drawbacks', 
   'The display quality is fantastic - crisp, vibrant, and color accurate. USB-C with PD is super convenient. However, the stand could be sturdier and doesn''t have height adjustment. Also, there''s no USB hub which would have been nice. Still a great monitor for the price.', 
   true, '2024-11-12', 423),
   
  (3, 'Amanda Lopez', 5, 'Best monitor purchase I''ve made', 
   'Upgraded from a 1080p monitor and wow, what a difference! Everything is so much sharper and I have so much more screen real estate for multitasking. The USB-C connection is a game changer - no more cable mess. Highly recommend for anyone working from home.', 
   true, '2024-08-22', 389),
   
  (3, 'Chris Thompson', 5, 'Worth every penny', 
   'This monitor checks all the boxes. 4K resolution, great color accuracy, USB-C with power delivery, and a sleek design. Perfect for productivity and content consumption. The thin bezels look modern and professional. Setup was easy and it works flawlessly with my Dell laptop.', 
   true, '2024-12-08', 312),

-- Product 4 - True Wireless Earbuds
  (4, 'Emma Roberts', 5, 'Best budget earbuds', 
   'For the price, these earbuds are unbeatable! Sound quality is impressive with good bass and clear vocals. They fit comfortably and stay in during workouts. Battery life is as advertised - 6 hours on the buds plus extra charges from the case. IPX4 rating is perfect for gym use.', 
   true, '2024-11-18', 743),
   
  (4, 'Ryan Mitchell', 4, 'Great value with minor limitations', 
   'These earbuds punch above their weight class. Sound is solid for the price, touch controls work well, and they''re comfortable for extended wear. ANC would have been nice but at this price point I can''t complain. Connection is stable and battery life is good. Recommended!', 
   true, '2024-10-05', 521),
   
  (4, 'Olivia Brown', 5, 'Perfect for daily commute', 
   'Use these every day for my commute and they''re fantastic. Good passive noise isolation, comfortable fit, and the case is compact enough to fit in my pocket. Sound quality is better than I expected. The 24-hour total battery life means I only need to charge weekly.', 
   true, '2024-09-12', 456),
   
  (4, 'Kevin Lee', 4, 'Solid earbuds for the price', 
   'Happy with this purchase. Sound is balanced, not too bass-heavy. Touch controls take some getting used to but work reliably once you learn them. Case charges quickly via USB-C. Only negative is they don''t have multipoint Bluetooth connection. Otherwise great value.', 
   true, '2024-11-25', 334),
   
  (4, 'Sarah Williams', 5, 'Exceeded my expectations', 
   'Bought these as a backup pair and they''ve become my main earbuds. Comfortable fit, good sound quality, and excellent battery life. The IPX4 rating gives me confidence using them in the rain. Touch controls are intuitive. These compete with earbuds twice the price!', 
   true, '2024-08-30', 289),

-- Product 5 - Smart LED Desk Lamp
  (5, 'Nathan Harris', 5, 'Perfect desk lamp', 
   'This lamp is exactly what I needed for my home office. The 5 color temperatures let me adjust based on time of day. Auto-dimming works well and the USB charging port is super convenient. Build quality feels premium and the touch controls are responsive. Highly recommend!', 
   true, '2024-10-20', 456),
   
  (5, 'Jessica Taylor', 5, 'Eye-care mode is a game changer', 
   'Love this lamp! The eye-care mode really reduces strain during long work sessions. Being able to adjust color temperature and brightness with touch controls is so convenient. The USB port is perfect for charging my phone. Sleek design looks great on my desk too.', 
   true, '2024-09-08', 387),
   
  (5, 'Brian Clark', 4, 'Great lamp with useful features', 
   'Very happy with this lamp. Adjustable color temperature is useful for different tasks. The dimming feature works smoothly. USB port is a nice addition. Only wish the arm had more flexibility for positioning. But overall, excellent value for a smart desk lamp.', 
   true, '2024-11-15', 298),
   
  (5, 'Michelle Davis', 5, 'Excellent for reading and work', 
   'This lamp has transformed my workspace. The different lighting modes are perfect - cool white for work, warm for evening reading. Touch controls are intuitive and the auto-dimming actually works well. Sturdy base and good build quality. Worth the investment!', 
   true, '2024-08-17', 267),
   
  (5, 'Andrew Moore', 5, 'Best desk lamp I''ve owned', 
   'Simple, functional, and well-designed. The 5 color temperature settings cover all my needs. Eye-care mode genuinely helps reduce fatigue. USB charging port is convenient for keeping my devices topped up. The lamp is stable and the touch controls are reliable. Great product!', 
   true, '2024-12-02', 234),

-- Product 6 - Portable Power Bank
  (6, 'Victoria Johnson', 5, 'Essential travel companion', 
   'This power bank is fantastic! 20000mAh capacity easily charges my phone 4-5 times. The 65W USB-C PD output charges my laptop which is amazing. LCD display showing exact battery percentage is super helpful. Build quality feels solid. Perfect for travel and emergencies.', 
   true, '2024-11-10', 678),
   
  (6, 'Robert Martinez', 5, 'Charges everything quickly', 
   'Impressed by the charging speed - 65W PD charges my laptop as fast as the original charger. The dual USB-A ports let me charge multiple devices simultaneously. 20000mAh lasts for days on a trip. LCD display is clear and useful. Highly recommend for anyone who travels.', 
   true, '2024-10-02', 543),
   
  (6, 'Lauren White', 4, 'Great capacity, a bit heavy', 
   'Love the capacity and charging speeds. Can charge my phone, tablet, and even laptop. The LCD screen is a nice touch. However, it''s quite heavy to carry around daily. But for travel or emergencies, it''s perfect. The pass-through charging feature is convenient too.', 
   true, '2024-09-19', 421),
   
  (6, 'Steven Garcia', 5, 'Best power bank for the price', 
   'This power bank is incredible value. 65W output means I can charge my work laptop, which most power banks can''t do. Battery indicator is accurate. Build feels durable. All three ports work great simultaneously. Charges itself quickly too. Can''t ask for more at this price.', 
   true, '2024-11-28', 389),
   
  (6, 'Jennifer Adams', 5, 'Perfect for long trips', 
   'Bought this for a camping trip and it was a lifesaver. Charged my phone, camera, and even my friend''s laptop. 20000mAh lasted the entire weekend. The dual USB-A plus USB-C PD setup is perfect. Display showing remaining power is very helpful. Excellent investment!', 
   true, '2024-08-25', 312),

-- Product 28 - 1080p HD Webcam
  (28, 'Michael Wilson', 5, 'Crystal clear video quality', 
   'This webcam is excellent for the price. 1080p video is sharp and clear, even in moderate lighting. Auto light correction works surprisingly well. The built-in microphone picks up my voice clearly without background noise. Easy to set up - plug and play with my laptop.', 
   true, '2024-10-15', 567),
   
  (28, 'Ashley Thomas', 5, 'Perfect for video calls', 
   'Upgraded from my laptop''s built-in camera and the difference is night and day! Image quality is crisp and professional-looking. The microphone is clear enough that I don''t need a separate one for meetings. Universal clip fits my monitor perfectly. Great purchase for remote work.', 
   true, '2024-09-22', 445),
   
  (28, 'David Kim', 4, 'Good webcam with minor limitations', 
   'Video quality is very good in decent lighting. Auto light correction helps but doesn''t work miracles in dim rooms. Microphone is clear for video calls. The universal clip is versatile. Only complaint is no privacy shutter, but I just put tape over it. Solid webcam overall.', 
   true, '2024-11-05', 367),
   
  (28, 'Emily Rodriguez', 5, 'Great for streaming and meetings', 
   'Use this for both work meetings and streaming. The 1080p quality looks professional and the auto light correction really helps. Sound quality from the built-in mic is surprisingly good. Easy to mount and adjust. For the price, you can''t beat this webcam!', 
   true, '2024-08-12', 298),
   
  (28, 'Jason Lee', 5, 'Best budget webcam', 
   'Needed a webcam for remote work and this one is perfect. Image is clear and smooth - no lag or stuttering. Microphone picks up my voice well without echo. The clip mount is sturdy and fits various monitor thicknesses. Excellent value for money!', 
   true, '2024-12-01', 267),

-- Product 29 - Smart Watch Series 5
  (29, 'Hannah Scott', 5, 'Best smartwatch I''ve owned', 
   'This smartwatch is incredible! AMOLED display is bright and always-on feature is so convenient. Fitness tracking is accurate - heart rate, steps, sleep all work great. SpO2 sensor is a nice addition. 7-day battery life is impressive. Comfortable to wear all day and night.', 
   true, '2024-11-22', 823),
   
  (29, 'Tyler Martinez', 5, 'Perfect fitness companion', 
   'Love this watch! GPS tracking is accurate for runs. Heart rate monitoring seems precise compared to a chest strap. The always-on display is fantastic - no more wrist raises. Battery easily lasts a week even with GPS workouts. Notifications work smoothly. Highly recommend!', 
   true, '2024-10-10', 645),
   
  (29, 'Sophia Anderson', 4, 'Great watch with room for improvement', 
   'Really happy with this smartwatch. Display is gorgeous, fitness tracking is comprehensive, and battery life is excellent. The SpO2 sensor is interesting though I don''t use it much. App ecosystem could be better but covers the basics. For the price, it''s a solid choice.', 
   true, '2024-09-28', 512),
   
  (29, 'Matthew Brown', 5, 'Exceeded my expectations', 
   'Switched from a more expensive brand and don''t miss it at all. This watch does everything I need - tracks workouts, monitors health metrics, shows notifications, and lasts a full week on one charge. AMOLED screen is beautiful. Comfortable band. Great value!', 
   true, '2024-11-17', 478),
   
  (29, 'Chloe Davis', 5, 'Perfect for health tracking', 
   'This watch has helped me stay motivated with my fitness goals. Sleep tracking is detailed and helpful. Heart rate monitoring runs 24/7 without draining battery. GPS is fast to lock on. The always-on display is perfect for checking time during meetings. Absolutely love it!', 
   true, '2024-08-20', 401),

-- Product 30 - Portable Bluetooth Speaker
  (30, 'Ethan Turner', 5, 'Amazing sound for the size', 
   'This speaker sounds incredible! 360° sound fills the room evenly. Bass is punchy without being overwhelming. The IPX7 waterproof rating means I can use it anywhere. 20-hour battery life is fantastic for weekend trips. Bluetooth connection is stable. Best portable speaker I''ve owned!', 
   true, '2024-10-25', 734),
   
  (30, 'Isabella Harris', 5, 'Perfect for outdoor activities', 
   'Love this speaker for camping and beach trips. The waterproof rating is legit - survived being dropped in the pool. Sound quality is impressive with good volume. Battery lasts through entire weekend camping trips. Built-in speakerphone works great. Very happy with this purchase!', 
   true, '2024-09-14', 598),
   
  (30, 'Noah Wilson', 4, 'Great speaker with minor quirks', 
   'Sound quality is excellent - clear and balanced. 360° design really works well. IPX7 waterproofing gives peace of mind. Battery life is as advertised. Only complaint is the buttons are a bit small and hard to press. Also wish it had USB-C instead of micro-USB. Still recommend it though.', 
   true, '2024-11-08', 467),
   
  (30, 'Mia Thompson', 5, 'Best portable speaker value', 
   'This speaker punches way above its price point. Sound is rich and full with surprising bass. True 360° sound is great for outdoor gatherings. Waterproof feature is perfect for pool parties. Battery lasts forever. Pairs easily with my phone. Couldn''t be happier!', 
   true, '2024-08-16', 423),
   
  (30, 'Lucas Garcia', 5, 'Outstanding quality and durability', 
   'Had this speaker for 6 months now and it''s been fantastic. Sound quality hasn''t degraded, battery still lasts 20+ hours, and it''s survived several drops and water exposures. Bluetooth range is impressive. Perfect size for portability. This speaker is built to last!', 
   true, '2024-12-05', 389),

-- Product 31 - 7-in-1 USB-C Hub
  (31, 'Alexis Moore', 5, 'Essential MacBook accessory', 
   'This hub is perfect for my MacBook Pro. All 7 ports work flawlessly - HDMI outputs 4K smoothly, USB-A ports are fast, SD card reader is convenient, and 100W PD keeps my laptop charged. Compact design doesn''t overheat. Exactly what I needed!', 
   true, '2024-11-13', 612),
   
  (31, 'Ryan Jackson', 5, 'Compact and powerful', 
   'Love how small this hub is while still offering 7 ports. The 4K HDMI output is crystal clear. USB 3.0 speeds are fast for transferring files. 100W power delivery works perfectly. Build quality feels premium. Great for travel and daily use at the desk.', 
   true, '2024-10-07', 489),
   
  (31, 'Madison Taylor', 4, 'Very useful hub', 
   'This hub has solved my port shortage problem. All ports work as expected - HDMI, USB-A, card readers, and pass-through charging. Only issue is it gets slightly warm during heavy use, but nothing concerning. Compact size is perfect for my laptop bag. Recommended!', 
   true, '2024-09-20', 398),
   
  (31, 'Jacob White', 5, 'Perfect all-in-one solution', 
   'Exactly what I needed for my USB-C laptop. Having HDMI, USB-A ports, and card readers in one small hub is incredibly convenient. 100W PD means I only need one cable from the wall. Build feels solid. No connection issues after months of daily use. Great investment!', 
   true, '2024-11-27', 367),
   
  (31, 'Ava Martinez', 5, 'Best USB-C hub for the price', 
   'This hub works perfectly with my Dell laptop. 4K HDMI output, fast USB ports, and both SD and microSD slots cover all my needs. The 100W power delivery charges my laptop while using all ports. Compact and well-built. Highly recommend for anyone with a USB-C laptop!', 
   true, '2024-08-23', 323),

-- Product 32 - 1 TB Portable NVMe SSD
  (32, 'Benjamin Lee', 5, 'Incredibly fast storage', 
   'This SSD is blazingly fast! Transfer speeds exceed 1000 MB/s as advertised. Transferred 500GB in less than 10 minutes. The aluminum body stays cool and feels premium. Compact size fits easily in my pocket. 5-year warranty gives peace of mind. Worth every penny!', 
   true, '2024-10-18', 891),
   
  (32, 'Emma Rodriguez', 5, 'Perfect for video editing', 
   'As a video editor, I need fast reliable storage and this SSD delivers. Read/write speeds are consistently over 1000 MB/s. Can edit 4K footage directly from the drive without lag. Rugged aluminum construction feels durable. 1TB is perfect for my project files. Highly recommend!', 
   true, '2024-09-11', 723),
   
  (32, 'William Anderson', 5, 'Best portable SSD available', 
   'This drive is fantastic. Super fast transfer speeds make backing up my computer quick and painless. The build quality is excellent - all aluminum, no plastic. Compact size is perfect for travel. USB 3.2 Gen 2 works great with my laptop. The 5-year warranty sealed the deal.', 
   true, '2024-11-21', 634),
   
  (32, 'Olivia Thomas', 4, 'Fast and reliable storage', 
   'Very happy with this SSD. Transfer speeds are impressive - way faster than my old external drive. Build quality feels solid and premium. Size is very portable. Only minor complaint is it can get warm during long transfers, but nothing alarming. Great value for 1TB NVMe speed.', 
   true, '2024-08-14', 512),
   
  (32, 'James Martinez', 5, 'Worth the investment', 
   'Upgraded from a regular SSD and the speed difference is massive. Large file transfers that took minutes now take seconds. The aluminum body dissipates heat well. Compact form factor is perfect for my laptop bag. 5-year warranty shows the manufacturer''s confidence. Excellent product!', 
    true, '2024-12-03', 467),

  -- Product 7 - Clean Code
    (7, 'Priya N.', 5, 'A must-read for every developer', 
    'This book changed how I write software. The examples are practical, the explanations are clear, and the principles are timeless. I started refactoring old code at work after reading just a few chapters. One of the most valuable programming books I own.', 
    true, '2024-11-04', 812),
    (7, 'Daniel Brooks', 5, 'Timeless engineering advice', 
    'Even though some code samples are in Java, the lessons apply across languages. Naming, functions, testing, and refactoring are explained in a way that makes you immediately rethink your habits. Excellent book for both juniors and seniors.', 
    true, '2024-10-12', 563),
    (7, 'Samantha Lee', 4, 'Dense but worth the effort', 
    'Some chapters feel heavy if you are new to software engineering, but the content is outstanding. I found the sections on code smells and refactoring especially useful. Definitely worth reading slowly and revisiting often.', 
    true, '2024-09-07', 344),

  -- Product 8 - The Pragmatic Programmer
    (8, 'Arjun M.', 5, 'Packed with practical wisdom', 
    'This is one of those books that every developer should revisit every few years. It blends mindset, habits, and hands-on advice really well. The chapters are short, memorable, and full of ideas that are immediately useful on real projects.', 
    true, '2024-11-18', 699),
    (8, 'Rachel Evans', 5, 'Excellent career-long guide', 
    'I love how broad this book is. It covers code quality, debugging, communication, and personal growth without ever feeling vague. The 20th anniversary edition feels modern and relevant. Great for developers at any stage.', 
    true, '2024-10-01', 472),
    (8, 'Noah Patel', 4, 'Inspirational and actionable', 
    'Not every tip will apply to every team, but the book is full of strong principles. It is less about syntax and more about becoming a thoughtful engineer. Very readable and full of quotable takeaways.', 
    true, '2024-08-29', 286),

  -- Product 9 - Designing Data-Intensive Applications
    (9, 'Karan S.', 5, 'Best systems book I have ever read', 
    'If you work with backend systems, databases, or distributed architectures, this book is essential. It explains difficult ideas with clarity and constantly compares trade-offs instead of pushing one solution. Incredibly insightful and well structured.', 
    true, '2024-12-06', 921),
    (9, 'Elena Morris', 5, 'Deep, rigorous, and readable', 
    'This book gave me a much stronger mental model for replication, partitioning, transactions, and stream processing. It is detailed but never feels like a dry textbook. I ended up highlighting almost every chapter.', 
    true, '2024-10-22', 648),
    (9, 'Victor Huang', 4, 'Advanced but extremely valuable', 
    'This is not a beginner book, but if you already know the basics it will level you up quickly. Some sections require slow reading, yet the payoff is huge. One of the best technical references on modern data systems.', 
    true, '2024-09-14', 431),

  -- Product 10 - Atomic Habits
    (10, 'Megan Carter', 5, 'Simple ideas that actually work', 
    'This book is practical from the first chapter. The habit stacking, environment design, and identity-based habit ideas are easy to apply and surprisingly effective. I used the system for exercise and reading, and it genuinely helped.', 
    true, '2024-11-27', 1334),
    (10, 'Rohan Gupta', 5, 'Motivating without being preachy', 
    'What I like most is how actionable the book feels. It does not rely on hype. Instead, it explains how tiny consistent changes compound over time. Very approachable, very useful, and easy to recommend.', 
    true, '2024-10-09', 876),
    (10, 'Alicia Perez', 4, 'Great framework for behavior change', 
    'The writing is clear and the structure is excellent. Some examples repeat the same core message, but the system itself is strong and easy to remember. A very worthwhile read if you want practical self-improvement advice.', 
    true, '2024-08-19', 512),

  -- Product 11 - The Art of Problem Solving Vol. 1
    (11, 'Ishaan Verma', 5, 'Outstanding problem-solving book', 
    'This book is excellent for students who want to go beyond routine school math. The explanations build intuition and the problems are genuinely interesting. It helped me prepare for olympiad-style questions and think more creatively.', 
    true, '2024-11-11', 418),
    (11, 'Laura Jenkins', 5, 'Challenging in the best way', 
    'The book is rigorous but very rewarding. It does a great job of teaching methods instead of memorization. The writing is engaging and the progression is thoughtful. Fantastic resource for motivated learners.', 
    true, '2024-09-25', 291),
    (11, 'Kevin Shah', 4, 'Excellent content, not for casual readers', 
    'This is a serious math book, so it demands time and patience. If you are willing to work through the problems, it is incredibly valuable. The problem sets are where the real learning happens.', 
    true, '2024-08-08', 174),

  -- Product 33 - Deep Work
    (33, 'Natalie Reed', 5, 'Exactly what I needed', 
    'This book helped me rethink how fragmented my workday had become. The concepts are clear, the case for focused work is persuasive, and the strategies are realistic. I made a few changes immediately and noticed the difference within a week.', 
    true, '2024-12-02', 643),
    (33, 'Owen Blake', 5, 'Great productivity book for knowledge workers', 
    'Unlike many productivity books, this one focuses on depth rather than hacks. It argues convincingly that concentrated work is a competitive advantage. The advice on scheduling and distractions was especially useful to me.', 
    true, '2024-10-16', 437),
    (33, 'Sara Thomas', 4, 'Strong message, practical execution', 
    'A few examples feel repetitive, but the core framework is excellent. If you struggle with constant notifications and shallow tasks, this book gives you a real system to reclaim focus. Very helpful overall.', 
    true, '2024-09-03', 251),

  -- Product 34 - Zero to One
    (34, 'Aditya Rao', 5, 'Sharp and thought-provoking', 
    'This book is short but packed with ideas about startups, competition, and building unique value. It made me think more critically about business strategy and the difference between incremental progress and real innovation.', 
    true, '2024-11-09', 558),
    (34, 'Grace Miller', 4, 'Interesting perspective on startups', 
    'Whether or not you agree with every claim, the book is engaging and memorable. It is full of contrarian ideas that spark discussion. I appreciated how clearly the arguments were presented.', 
    true, '2024-09-30', 338),
    (34, 'Leo Fernandez', 5, 'Worth reading for founders and PMs', 
    'The sections on monopoly, differentiation, and long-term thinking were especially strong. It is not a step-by-step handbook, but it is excellent for shaping how you think about businesses and products.', 
    true, '2024-08-27', 223),

  -- Product 35 - The Hobbit
    (35, 'Clara Bennett', 5, 'A timeless adventure', 
    'This book is pure joy. It has warmth, humor, and wonder from start to finish. Bilbo is a fantastic protagonist, and the journey never loses its charm. A classic that absolutely deserves its reputation.', 
    true, '2024-11-21', 987),
    (35, 'Ethan Collins', 5, 'Perfect introduction to fantasy', 
    'I read this for the first time as an adult and loved it. The pacing is excellent, the writing is accessible, and the world feels magical without being overwhelming. A great entry point into Tolkien.', 
    true, '2024-10-05', 642),
    (35, 'Sofia Turner', 4, 'Classic for a reason', 
    'Some parts feel more fairy-tale-like than modern fantasy readers may expect, but that is also part of its charm. The story is imaginative, memorable, and very easy to recommend to both teens and adults.', 
    true, '2024-08-31', 355),

  -- Product 36 - Sapiens
    (36, 'Maya Green', 5, 'Fascinating and ambitious', 
    'This book covers an enormous amount of history in a very readable way. Even when I disagreed with a few conclusions, I found the arguments thought-provoking and the storytelling compelling. Hard to put down.', 
    true, '2024-12-08', 864),
    (36, 'Jonathan Park', 5, 'One of the most engaging nonfiction books I have read', 
    'Harari makes big ideas accessible without oversimplifying them too much. The sections on agriculture, money, and collective myths were especially memorable. I kept stopping to discuss chapters with friends.', 
    true, '2024-10-28', 603),
    (36, 'Nina Kapoor', 4, 'Very readable and thought-provoking', 
    'This is a wide-ranging book that encourages you to question assumptions about history and society. Some arguments are intentionally broad, but the book succeeds in making you think deeply. A rewarding read overall.', 
    true, '2024-09-11', 367),

  -- Product 37 - Cracking the Coding Interview
    (37, 'Harsh Mehta', 5, 'Best interview prep book out there', 
    'This book is comprehensive, structured, and extremely useful. The explanations are clear, the problem selection is strong, and the strategies around interviews and resumes add real value beyond just coding questions. Essential for software interview prep.', 
    true, '2024-11-30', 1098),
    (37, 'Emily Scott', 5, 'Helped me land offers', 
    'I used this alongside daily practice and it was one of the most useful resources in my preparation. The walkthroughs teach patterns instead of just answers, and the behavioral guidance is a nice bonus. Strongly recommended.', 
    true, '2024-10-14', 744),
    (37, 'Marcus Allen', 4, 'Excellent reference with lots of value', 
    'There is a huge amount of material here, so it can feel overwhelming at first. But if you use it systematically, it is fantastic. The solutions are detailed and educational, and the system design and big-O discussions are especially helpful.', 
    true, '2024-08-24', 421),

  -- Product 12 - Men's Classic Fit Oxford Shirt
    (12, 'Rahul Nair', 5, 'Crisp shirt with great fit', 
    'The fabric feels substantial without being too heavy, and the classic fit is comfortable for office wear. It looks polished tucked in or untucked. Very happy with the quality for the price.', 
    true, '2024-11-12', 318),
    (12, 'David Ross', 4, 'Reliable wardrobe staple', 
    'Good construction, nice fabric texture, and it washes well. The fit is a touch roomy, which is expected for a classic fit. Overall a dependable shirt for work and casual outings.', 
    true, '2024-09-27', 211),
    (12, 'Aman Gupta', 5, 'Better than expected', 
    'Color is accurate, stitching looks clean, and the collar sits nicely. This has quickly become one of my most worn shirts. Great value.', 
    true, '2024-08-15', 146),

  -- Product 13 - Women's High-Waist Yoga Pants
    (13, 'Sophie Martin', 5, 'Comfortable and flattering', 
    'These yoga pants are soft, supportive, and truly squat-proof. The high waistband stays in place during workouts and the hidden pocket is useful. I plan to buy another pair.', 
    true, '2024-11-25', 522),
    (13, 'Nisha Kapoor', 5, 'Excellent for gym and errands', 
    'Great stretch, nice compression, and no transparency issues. They feel premium and hold up well after washing. Very versatile leggings.', 
    true, '2024-10-08', 376),
    (13, 'Lauren Price', 4, 'Good value activewear', 
    'Very comfortable and breathable. The waistband is flattering and secure. I only wish the side pockets were larger, but overall these are excellent.', 
    true, '2024-08-29', 244),

  -- Product 14 - Unisex Zip-Up Hoodie
    (14, 'Chris Bennett', 5, 'Soft, warm, and well made', 
    'This hoodie is cozy without feeling too bulky. The zipper works smoothly, the fleece is soft, and the fit is relaxed in a good way. Great for layering in cooler weather.', 
    true, '2024-11-17', 403),
    (14, 'Meera S.', 4, 'Very comfortable everyday hoodie', 
    'Nice midweight fabric and solid construction. It feels durable and the kangaroo pocket is roomy. Slight shrinkage after washing, but still fits well.', 
    true, '2024-09-30', 262),
    (14, 'Jason Miller', 5, 'Great casual staple', 
    'I wear this several times a week. Comfortable, warm, and easy to pair with anything. The ribbed cuffs help it keep shape. Highly recommended.', 
    true, '2024-08-18', 187),

  -- Product 15 - Men's Running Shorts
    (15, 'Tyler Brooks', 5, 'Light and perfect for running', 
    'These shorts are breathable and comfortable even on longer runs. The liner feels supportive without being restrictive, and the zip pocket is handy for a key or card.', 
    true, '2024-11-09', 291),
    (15, 'Karan Malhotra', 4, 'Great shorts for training', 
    'Very lightweight and they dry quickly after sweaty workouts. Fit is athletic and the waistband stays secure. I would buy another pair.', 
    true, '2024-09-19', 198),
    (15, 'Ethan Cole', 5, 'Excellent value running shorts', 
    'Comfortable, simple, and functional. Reflective trim is a nice touch and the fabric moves well. Exactly what I wanted for daily runs.', 
    true, '2024-08-07', 132),

  -- Product 16 - Women's Trench Coat
    (16, 'Olivia Stone', 5, 'Elegant and practical coat', 
    'This trench coat looks much more expensive than it is. The fit is flattering, the belt shapes nicely, and the water-resistant finish is useful in light rain. Very stylish piece.', 
    true, '2024-11-28', 267),
    (16, 'Priya Shah', 5, 'Beautiful coat for transitional weather', 
    'Great structure, nice drape, and the storm flap gives it a classic look. Works well over office clothes or casual outfits. Very pleased with the purchase.', 
    true, '2024-10-10', 201),
    (16, 'Megan Clark', 4, 'Stylish trench with good quality', 
    'The material feels nice and the construction is solid. Sleeves ran slightly long for me, but overall the coat looks polished and fits well.', 
    true, '2024-08-26', 145),

  -- Product 38 - Men's Slim Fit Chino Trousers
    (38, 'Daniel Price', 5, 'Sharp fit and comfortable fabric', 
    'These chinos look clean and modern without feeling tight. The stretch waistband adds comfort and the wrinkle-resistant fabric helps them stay neat all day. Great for office and weekends.', 
    true, '2024-11-14', 286),
    (38, 'Rohit Bansal', 4, 'Great smart-casual pants', 
    'Nice slim fit and the material has just enough stretch. They dress up or down easily. Length was slightly long for me, but that is easy to tailor.', 
    true, '2024-09-23', 193),
    (38, 'Andrew Scott', 5, 'Very versatile trousers', 
    'Good stitching, good fabric, and a flattering fit. I have worn them to work and dinners out. Excellent value for a solid pair of chinos.', 
    true, '2024-08-11', 129),

  -- Product 39 - Women's Puffer Jacket
    (39, 'Emma Howard', 5, 'Warm without being bulky', 
    'This jacket is lightweight but surprisingly warm. It packs down easily and the water-repellent shell is helpful in light snow. Great everyday winter jacket.', 
    true, '2024-11-30', 348),
    (39, 'Ayesha Khan', 5, 'Perfect travel jacket', 
    'I love that it packs into its own pocket and still provides great warmth. The fit is flattering and the zip pockets are secure. Excellent purchase.', 
    true, '2024-10-17', 241),
    (39, 'Brooke Evans', 4, 'Nice jacket with good warmth', 
    'Comfortable, lightweight, and easy to layer. It is not for extreme cold, but it performs very well for daily wear. I am happy with it.', 
    true, '2024-08-30', 166),

  -- Product 40 - Unisex Premium Graphic Tee
    (40, 'Noah Green', 5, 'Great quality tee', 
    'The fabric feels thicker and better than most graphic tees I own. The print looks sharp and the shirt keeps its shape after washing. Very happy with the purchase.', 
    true, '2024-11-18', 327),
    (40, 'Riya Thomas', 4, 'Comfortable and stylish', 
    'Nice heavyweight cotton and a cool vintage-style print. Fit is true to size and the shirt feels durable. Good everyday tee.', 
    true, '2024-09-21', 214),
    (40, 'Luca Reed', 5, 'Exceeded expectations', 
    'Soft after the first wash, great graphic quality, and the cut works well for both relaxed and streetwear looks. Would definitely buy more designs.', 
    true, '2024-08-17', 151),

  -- Product 41 - Merino Wool Beanie
    (41, 'Grace Wilson', 5, 'Warm and not itchy', 
    'This beanie is soft, warm, and breathable. I usually avoid wool hats because of itchiness, but this one is very comfortable. Great winter accessory.', 
    true, '2024-11-22', 201),
    (41, 'Nitin Rao', 5, 'Excellent merino beanie', 
    'Fits well, looks good, and provides solid warmth without overheating. The double layer makes a noticeable difference on cold mornings.', 
    true, '2024-10-01', 143),
    (41, 'Zara Miles', 4, 'Simple and high quality', 
    'Nicely made and comfortable to wear for long periods. Slightly snug at first, but it loosened a bit with wear. Overall very good.', 
    true, '2024-08-24', 96),

  -- Product 42 - Full-Grain Leather Belt
    (42, 'Marcus Reed', 5, 'Quality leather belt', 
    'The leather feels thick and durable, and the brass buckle gives it a premium look. It works equally well with jeans and chinos. Very satisfied.', 
    true, '2024-11-11', 239),
    (42, 'Ankit S.', 4, 'Solid everyday belt', 
    'Good craftsmanship and a clean finish. The leather was a little stiff at first, but it softened nicely after a few wears. Great value.', 
    true, '2024-09-26', 168),
    (42, 'Peter Hall', 5, 'Looks classic and built to last', 
    'Simple, well made, and exactly what I wanted in a leather belt. The sizing was accurate and the belt feels like it will age well over time.', 
    true, '2024-08-14', 117),

  -- Product 17 - Stainless Steel Cookware Set 10-Piece
    (17, 'Neha Kapoor', 5, 'Excellent quality cookware set', 
    'This set looks premium and cooks evenly on my induction stove. The pans heat quickly, the handles stay comfortable, and cleanup is easier than expected. A strong upgrade from my old non-stick set.', 
    true, '2024-11-19', 486),
    (17, 'Brian Foster', 5, 'Worth the investment', 
    'Solid construction, good weight, and excellent performance across all pieces. I especially like the even heating and oven-safe design. Feels like a set that will last for years.', 
    true, '2024-10-02', 329),
    (17, 'Amelia Ross', 4, 'Very good set with minor drawbacks', 
    'Great cookware overall. The stainless finish is beautiful and cooking results are excellent. Food can stick if you are not used to stainless steel, but once you learn the technique it works really well.', 
    true, '2024-08-26', 211),

  -- Product 18 - Cold Brew Coffee Maker 1L
    (18, 'Jared Kim', 5, 'Makes smooth cold brew every time', 
    'Very simple to use and the filter keeps grounds out of the final drink. The glass feels sturdy and the size is perfect for a few days of coffee. Easy to clean and store in the fridge.', 
    true, '2024-11-08', 372),
    (18, 'Maya Lopez', 5, 'Great for daily use', 
    'I use this almost every week. The coffee comes out smooth and less acidic than hot brew. The carafe pours cleanly and the mesh filter is fine enough to do a great job. Highly satisfied.', 
    true, '2024-09-21', 248),
    (18, 'Steven Clark', 4, 'Simple and effective', 
    'Does exactly what it promises. Build quality is good and the capacity is ideal for home use. I just wish the handle were a bit larger, but that is a small complaint.', 
    true, '2024-08-11', 154),

  -- Product 19 - Bamboo Cutting Board Set
    (19, 'Olivia Reed', 5, 'Beautiful and practical set', 
    'These boards look great in the kitchen and are very useful in different sizes. The rubber feet help keep them steady and the bamboo surface has held up well with regular use.', 
    true, '2024-12-04', 401),
    (19, 'Marcus Hill', 4, 'Good value board set', 
    'Nice range of sizes and the boards feel sturdy. They are lightweight but not flimsy. As expected, hand washing is important to keep them in good shape. Good purchase overall.', 
    true, '2024-10-18', 277),
    (19, 'Priya Desai', 5, 'Exactly what I wanted', 
    'The boards are smooth, well finished, and easy on knives. I like the juice groove on the larger one for prep work. Very practical set for everyday cooking.', 
    true, '2024-09-06', 183),

  -- Product 20 - Stand Mixer 4.5 Qt
    (20, 'Heather Moore', 5, 'Fantastic mixer for home baking', 
    'This mixer handles bread dough, cake batter, and cookie dough with no issues. The motor feels strong, the bowl size is perfect for family baking, and the attachments are easy to swap and clean.', 
    true, '2024-11-23', 618),
    (20, 'Daniel Rivera', 5, 'Great performance and value', 
    'I was considering a much more expensive brand, but this one has been excellent. Smooth mixing, stable base, and the tilt-head design makes everything easy. Very happy with the purchase.', 
    true, '2024-10-07', 432),
    (20, 'Laura Chen', 4, 'Strong mixer with slight noise', 
    'Works very well and feels solid. It is a bit noisy at the highest speeds, but performance is excellent and the attachments cover everything I need. Strong recommendation for home bakers.', 
    true, '2024-08-30', 265),

  -- Product 21 - Air Purifier with HEPA Filter
    (21, 'Rohan Singh', 5, 'Noticeable improvement in air quality', 
    'I bought this for allergies and the difference was obvious within a few days. The auto mode is convenient, sleep mode is quiet, and the purifier feels well built. Great for bedrooms and small living rooms.', 
    true, '2024-12-01', 724),
    (21, 'Emily Foster', 5, 'Quiet and effective', 
    'Runs quietly most of the time and does a great job reducing dust and odors. I appreciate the compact footprint and simple controls. Filter access is straightforward too.', 
    true, '2024-10-24', 491),
    (21, 'Kevin Brooks', 4, 'Very good purifier', 
    'Strong performance for the size and price. Auto mode responds well and the HEPA filter gives me confidence during allergy season. Replacement filters are not the cheapest, but the purifier itself is excellent.', 
    true, '2024-09-12', 308),

  -- Product 43 - Variable Temperature Electric Kettle
    (43, 'Sonia Patel', 5, 'Perfect for tea and coffee', 
    'The temperature presets are extremely useful and the kettle heats water quickly. I especially like the keep-warm function for multiple cups. It feels sturdy and pours neatly without dripping.', 
    true, '2024-11-15', 433),
    (43, 'Nathan Cole', 5, 'Fast and convenient', 
    'This kettle looks sleek and works exactly as expected. Boils quickly, the controls are intuitive, and the stainless interior is a big plus. Great for pour-over coffee and green tea.', 
    true, '2024-10-03', 291),
    (43, 'Ava Green', 4, 'Great kettle with helpful presets', 
    'Very happy with the temperature control and build quality. The base is stable and the keep-warm feature is genuinely useful. The exterior gets a little warm, but not enough to be an issue.', 
    true, '2024-08-22', 187),

  -- Product 44 - Ceramic Non-Stick Frying Pan 28 cm
    (44, 'Jason Miller', 5, 'Excellent everyday pan', 
    'The ceramic surface releases food very well and cleanup is quick. It heats evenly and the handle stays comfortable. Great size for eggs, vegetables, and one-pan meals.', 
    true, '2024-11-06', 358),
    (44, 'Megan Shah', 4, 'Good non-stick performance', 
    'So far this pan has performed really well. The coating feels smooth and the pan is not too heavy. I use medium heat and it cooks evenly. Very good for the price.', 
    true, '2024-09-27', 229),
    (44, 'Ethan Brooks', 5, 'Solid ceramic pan', 
    'Nice balance, good heat response, and easy cleanup. I like that it is PTFE-free and still performs well. A dependable pan for daily cooking.', 
    true, '2024-08-13', 146),

  -- Product 45 - Semi-Automatic Espresso Machine
    (45, 'Isabella Wong', 5, 'Great starter espresso machine', 
    'This machine makes surprisingly good espresso once dialed in. The steam wand is effective for milk drinks and the pre-infusion feature helps a lot. Excellent value for learning at home.', 
    true, '2024-12-07', 512),
    (45, 'Carlos Diaz', 5, 'Very satisfying espresso at home', 
    'I have been making cappuccinos daily with this and the results are excellent. The machine heats up quickly, the pressure is solid, and the removable water tank is convenient. A very enjoyable appliance.', 
    true, '2024-10-20', 364),
    (45, 'Rachel Stone', 4, 'Good machine with learning curve', 
    'This is a very capable machine, but there is a bit of practice involved to get the best shots. Once set up properly, it performs very well. Strong choice for home coffee enthusiasts.', 
    true, '2024-09-08', 241),

  -- Product 46 - Digital Kitchen Scale 5 kg
    (46, 'Aaron Lewis', 5, 'Accurate and easy to use', 
    'This scale is simple, precise, and fast to respond. The tare button works perfectly and the display is easy to read. Great for baking, meal prep, and portioning coffee beans.', 
    true, '2024-11-28', 477),
    (46, 'Pooja Mehra', 5, 'Excellent kitchen tool', 
    'Very compact, accurate, and easy to clean. I use it daily for baking and it has been reliable. Switching units is quick and the stainless platform looks good.', 
    true, '2024-10-11', 336),
    (46, 'Liam Price', 4, 'Good scale for everyday use', 
    'Does the job well and feels nicely made. It is lightweight, accurate, and stores easily in a drawer. Auto-off can be a bit quick, but overall it is a very good scale.', 
    true, '2024-08-28', 205),

  -- Product 47 - Vacuum Storage Bag Set (8-Pack)
    (47, 'Chloe Hart', 5, 'Very useful for saving closet space', 
    'These bags made a big difference when storing winter bedding and extra clothes. The seals hold well and the included pump works better than expected. Great set for organizing small spaces.', 
    true, '2024-11-17', 389),
    (47, 'Ryan Cooper', 4, 'Good quality storage bags', 
    'The variety of sizes is helpful and the bags compress items significantly. They seem durable and the valve seals well. Just be careful not to overfill them. Good value overall.', 
    true, '2024-09-29', 254),
    (47, 'Ananya Rao', 5, 'Worked perfectly for travel and storage', 
    'I used these for both closet storage and packing. They are easy to seal and really reduce bulk. The hand pump is a nice addition when a vacuum is not nearby. Very happy with the purchase.', 
    true, '2024-08-16', 171),

  -- Product 22 - Adjustable Dumbbell Set 5-25 kg
    (22, 'Arjun Patel', 5, 'Excellent home gym upgrade', 
    'These dumbbells save a huge amount of space and feel solid during workouts. The dial mechanism is smooth and switching weights is fast. Great option for strength training at home.', 
    true, '2024-11-26', 604),
    (22, 'Michael Torres', 5, 'Convenient and well built', 
    'The build quality is impressive and the adjustment system feels reliable. I replaced several fixed dumbbells with this set and have zero regrets. Very practical for small workout spaces.', 
    true, '2024-10-09', 418),
    (22, 'Sana Khan', 4, 'Great set with slight bulk', 
    'Very useful and sturdy, though the dumbbells feel a bit bulky at lighter weights. That said, the convenience and space savings more than make up for it. Strong recommendation overall.', 
    true, '2024-08-31', 277),

  -- Product 23 - Resistance Bands Set (5 Levels)
    (23, 'Liam Brooks', 5, 'Fantastic for travel workouts', 
    'The bands feel durable and the range of resistance is useful for different exercises. I keep them in my bag for quick workouts and mobility sessions. Great value for the price.', 
    true, '2024-11-13', 381),
    (23, 'Priyanka Rao', 5, 'Versatile and easy to use', 
    'I use these for strength work, stretching, and rehab exercises. The bands are clearly labeled and the carry bag is handy. Nice quality latex and no issues so far.', 
    true, '2024-09-24', 249),
    (23, 'Connor Lee', 4, 'Solid resistance band set', 
    'Good selection of resistance levels and the material feels strong. The exercise guide is a nice bonus. I would have liked handles too, but for basic band work this set is excellent.', 
    true, '2024-08-18', 162),

  -- Product 24 - Yoga Mat Non-Slip 6mm
    (24, 'Mia Sharma', 5, 'Comfortable and grippy mat', 
    'This mat has the right balance of cushioning and stability. It stays in place during yoga sessions and the alignment lines are genuinely helpful. Very happy with the quality.', 
    true, '2024-12-03', 452),
    (24, 'Jordan White', 5, 'Great mat for home practice', 
    'The texture provides good grip even during sweaty workouts. It rolls up easily and the carry strap is convenient. Feels durable and much nicer than cheaper mats I have owned before.', 
    true, '2024-10-26', 311),
    (24, 'Riya Menon', 4, 'Good support and value', 
    'The thickness is ideal for floor work and yoga. There was a slight smell when first unboxed, but it faded quickly. Overall a great mat for the price.', 
    true, '2024-09-05', 204),

  -- Product 25 - Hydration Running Vest 10L
    (25, 'Noah Bennett', 5, 'Excellent for long runs', 
    'This vest fits securely without bouncing much and has plenty of storage for nutrition, keys, and layers. The breathable mesh helps on hot days. Great option for trail runs and race training.', 
    true, '2024-11-09', 337),
    (25, 'Kavya Iyer', 4, 'Lightweight and practical', 
    'Very comfortable once adjusted properly. I like the pocket layout and reflective details. It would be even better if it included a bladder, but the vest itself is excellent.', 
    true, '2024-10-01', 226),
    (25, 'Ethan Ross', 5, 'Good fit and smart storage', 
    'The vest is lightweight, stable, and easy to customize with the straps. Storage is well thought out and accessible while moving. Great for long-distance training.', 
    true, '2024-08-22', 149),

  -- Product 26 - Camping Lantern Rechargeable
    (26, 'Sophia Reed', 5, 'Bright and reliable lantern', 
    'This lantern puts out a lot of light and the different modes are genuinely useful. I used it on a weekend camping trip and the battery lasted longer than expected. Great emergency light too.', 
    true, '2024-11-22', 428),
    (26, 'Tyler Morgan', 5, 'Perfect for camping and power outages', 
    'Solid build, bright output, and convenient USB charging. The power bank function came in handy for topping up my phone. I am very pleased with this lantern.', 
    true, '2024-09-28', 284),
    (26, 'Anika Gupta', 4, 'Very useful outdoor light', 
    'Strong brightness and easy controls. It is a little larger than ultra-compact lanterns, but the performance makes up for it. A dependable camping accessory.', 
    true, '2024-08-14', 176),

  -- Product 27 - Foam Roller 60cm
    (27, 'David Nguyen', 5, 'Great for recovery sessions', 
    'Firm enough to be effective without feeling unbearable. The textured surface works well on calves, quads, and upper back. I use it almost daily after workouts.', 
    true, '2024-11-14', 302),
    (27, 'Pooja Sharma', 4, 'Good quality roller', 
    'Well made and supportive. The 60 cm length is versatile and the roller keeps its shape. A solid choice for stretching and muscle recovery.', 
    true, '2024-09-30', 197),
    (27, 'Jake Collins', 5, 'Excellent value foam roller', 
    'Feels durable and performs just as well as more expensive rollers I have tried. The grid pattern adds a bit more pressure where needed. Highly recommended for home mobility work.', 
    true, '2024-08-20', 141),

  -- Product 48 - Speed Jump Rope with Counter
    (48, 'Nikhil Verma', 5, 'Smooth and fast rope', 
    'The bearings make a noticeable difference and the rope swings very smoothly. The built-in counter is a nice bonus for tracking workouts. Excellent for cardio sessions at home.', 
    true, '2024-11-20', 256),
    (48, 'Grace Turner', 4, 'Good jump rope for conditioning', 
    'Lightweight handles, easy adjustment, and smooth rotation. The counter is simple but useful. Great piece of equipment for quick workouts.', 
    true, '2024-09-17', 173),
    (48, 'Aiden Foster', 5, 'Great value training rope', 
    'Comfortable grip, durable cable, and easy to set to the right length. Works well for speed work and general fitness. Happy with the purchase.', 
    true, '2024-08-09', 121),

  -- Product 49 - Doorframe Pull-Up Bar
    (49, 'Chris Walker', 5, 'Sturdy and easy to install', 
    'This bar feels secure once mounted and gives me confidence during pull-ups. The foam grips are comfortable and the multiple hand positions are useful. Great for home workouts.', 
    true, '2024-11-29', 441),
    (49, 'Meera Joshi', 4, 'Good bar for apartment workouts', 
    'Very convenient if you do not want permanent installation. Setup is straightforward and the bar feels stable. Just make sure your doorframe dimensions match carefully.', 
    true, '2024-10-12', 286),
    (49, 'Owen Carter', 4, 'Solid pull-up bar overall', 
    'Works as advertised and the construction feels durable. The foam padding helps comfort. It takes a little adjustment to get the fit just right, but once set it performs well.', 
    true, '2024-08-27', 194),

  -- Product 50 - Lightweight Carbon Trekking Poles (Pair)
    (50, 'Ella Brooks', 5, 'Lightweight and comfortable', 
    'These poles are very light but still feel strong on the trail. The cork grips are comfortable and the adjustment system is easy to use. Excellent for long hikes.', 
    true, '2024-11-07', 289),
    (50, 'Raghav Mehta', 5, 'Great trekking companion', 
    'The poles pack down small and are easy to carry. I like the anti-shock feature and the included tips. They helped a lot on steep descents. Very satisfied.', 
    true, '2024-09-22', 201),
    (50, 'Mila Evans', 4, 'Strong and portable poles', 
    'Good quality materials and low weight. The locking system has been reliable so far. Slightly premium in price, but the performance justifies it.', 
    true, '2024-08-15', 138),

  -- Product 51 - 3-Season Sleeping Bag -5°C
    (51, 'Logan Price', 5, 'Warm and packs down well', 
    'Used this on a cold camping trip and it performed very well. It is warm without feeling overly bulky and the compression sack helps a lot with packing. Great sleeping bag for shoulder seasons.', 
    true, '2024-12-05', 354),
    (51, 'Anjali Nair', 5, 'Comfortable and high quality', 
    'The fabric feels good, the zipper works smoothly, and the insulation is impressive for the weight. This has become my go-to sleeping bag for weekend trips.', 
    true, '2024-10-18', 242),
    (51, 'Ben Foster', 4, 'Very capable sleeping bag', 
    'Warm, well constructed, and easy to compress. The mummy fit may feel snug for some people, but it does a great job retaining heat. Overall a strong buy.', 
    true, '2024-09-01', 167),

  -- Product 52 - MIPS Road Bicycle Helmet
    (52, 'Hannah Cole', 5, 'Comfortable and confidence inspiring', 
    'This helmet feels light on the head and the fit system makes it easy to dial in. Ventilation is good even on longer rides. The MIPS liner was the main reason I chose it and I am very happy with it.', 
    true, '2024-11-24', 318),
    (52, 'Rohan Das', 5, 'Excellent road helmet', 
    'Good airflow, secure fit, and nice overall finish. The magnetic buckle is a small detail but very convenient. Feels like a premium helmet at a reasonable price.', 
    true, '2024-10-06', 221),
    (52, 'Zoe Mitchell', 4, 'Great safety features and fit', 
    'Lightweight and comfortable for regular rides. The fit adjustment works well and the vents keep things cool. I just wish it came in a few more colors, but performance is excellent.', 
    true, '2024-08-25', 147);

