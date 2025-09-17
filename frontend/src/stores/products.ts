import { defineStore } from 'pinia'

export interface Product {
    id: string
    name: string
    shortDescription: string
    description: string
    category: string
    rank: number
    image: string
    price: number
}

export const useProductsStore = defineStore('products', {
    state: () => {
        return {
            categories: [
                "Electronics",
                "Sports",
                "Jewelry",
                "Fashion",
                "Photography",
                "Home",
                "Outdoors",
                "Kitchen",
                "Furniture"
            ],
            products: [

                {
                    "id": "1e8a379f-75e5-4dc1-b5d3-0fa0be491eec",
                    "name": "Quantum Smartphone Edge",
                    "shortDescription": "Experience seamless connectivity and blazing-fast performance in a sleek design built for multitasking, streaming, and gaming without compromise...",
                    "description": "Experience seamless connectivity and blazing-fast performance in a sleek design built for multitasking, streaming, and gaming without compromise. The Quantum Smartphone Edge is engineered with an advanced processor that allows you to run the most demanding apps effortlessly. Its vibrant edge-to-edge display provides an immersive visual experience, whether you're watching videos, playing games, or browsing the web. With its long-lasting battery life, you’ll stay powered throughout the day, and the high-resolution camera ensures every photo is crystal clear. The device also includes advanced security features like facial recognition and fingerprint scanning for enhanced protection. Whether you’re a professional needing a reliable device or a tech enthusiast looking for cutting-edge technology, this smartphone delivers excellence on all fronts. Crafted from premium materials, the body of the Quantum Smartphone Edge combines durability with elegance, making it both a practical and stylish choice. You’ll also appreciate the intuitive user interface and seamless integration with your favorite apps and cloud services. It’s not just a phone—it’s a powerhouse in your pocket, designed for people who demand the best in mobile performance and style.",
                    "category": "Electronics",
                    "rank": 9,
                    "image": "/phone.jpg",
                    "price": 699.99
                },
                {
                    "id": "cd1a8475-6ae8-4664-b489-d1d42513a9d9",
                    "name": "Aero Running Shoes Flex",
                    "shortDescription": "Built for speed and comfort, these shoes offer top-tier cushioning and traction, perfect for runners of all levels seeking performance and durability...",
                    "description": "Built for speed and comfort, Aero Running Shoes Flex combine cutting-edge materials with ergonomic design to enhance every stride. Featuring breathable mesh fabric and responsive foam soles, these shoes adapt to your foot’s movement, providing superior cushioning and support. Whether you're hitting the pavement or the treadmill, the traction pattern ensures stability and grip even on wet surfaces. The lightweight construction reduces fatigue while promoting natural foot alignment. Ideal for daily runs, marathons, or casual training, the Aero Running Shoes Flex are engineered for athletes and fitness lovers who don't compromise on quality. Additional features include reinforced heel padding, reflective safety strips for low-light conditions, and moisture-wicking insoles to keep your feet dry and comfortable. These shoes not only perform well but also feature a sleek, modern design available in various color options to match your personal style. With rave reviews from professional runners and casual joggers alike, the Aero Running Shoes Flex are a must-have addition to any active wardrobe. Step into a new level of fitness with footwear that supports your every move.",
                    "category": "Sports",
                    "rank": 8,
                    "image": "/running-shoes.jpg",
                    "price": 129.95
                },
                {
                    "id": "a73c6b46-3a02-4f1d-9bc1-1727e15b3d88",
                    "name": "Crystal Necklace Glow",
                    "shortDescription": "Delicate yet bold, this handcrafted necklace features a radiant crystal pendant and a polished finish perfect for elegant evenings or everyday flair...",
                    "description": "Delicate yet bold, the Crystal Necklace Glow is a handcrafted piece designed to accentuate elegance and charm. The pendant is made from precision-cut crystal that catches the light beautifully, creating a subtle sparkle with every movement. Suspended on a sterling silver chain, the necklace complements both formal and casual outfits. It's lightweight and comfortable for all-day wear. The clasp is secure and easy to fasten, ensuring the piece stays in place throughout the day. Each necklace is crafted by skilled artisans, making every piece slightly unique. Perfect as a gift or a personal treat, the Crystal Necklace Glow enhances any jewelry collection with its timeless beauty. Whether you're attending a gala, a dinner party, or a day at the office, this necklace adds a touch of sophistication. The materials are hypoallergenic and tarnish-resistant, ensuring it stays beautiful for years to come. This piece also comes in an elegant gift box, ready for any special occasion.",
                    "category": "Jewelry",
                    "rank": 7,
                    "image": "/jewelry.jpg",
                    "price": 89.50
                },
                {
                    "id": "f05c58e1-7f1a-409a-acc1-d57a7eb2c891",
                    "name": "Fusion DSLR Camera Plus",
                    "shortDescription": "Capture vivid images and 4K video with this feature-packed DSLR, offering intuitive controls, fast autofocus, and robust performance for every shot...",
                    "description": "Capture vivid images and 4K video with the Fusion DSLR Camera Plus, a feature-packed camera designed for photographers of all levels. It offers a large CMOS sensor, high-speed autofocus, and an ergonomic grip for comfortable handling. Whether you're capturing landscapes, portraits, or action shots, this camera delivers clarity and detail. The intuitive menu system and touchscreen interface make adjustments quick and easy. With Wi-Fi and Bluetooth connectivity, transferring your photos to devices is seamless. Battery life supports extended shooting sessions, and the weather-sealed body ensures durability in various environments. The camera also includes multiple shooting modes, scene presets, and custom profiles to suit every style. Advanced users will appreciate manual controls, RAW support, and lens compatibility. The built-in image stabilization reduces blur, while the dynamic range allows for deep contrast and vibrant colors. Whether you're just starting or expanding your gear, the Fusion DSLR Camera Plus is a dependable companion for any creative journey.",
                    "category": "Photography",
                    "rank": 10,
                    "image": "/camera.jpg",
                    "price": 849.00
                },
                {
                    "id": "b50c7501-55e9-4bd0-964b-e9ff7a6cb15e",
                    "name": "Luxe Leather Jacket X",
                    "shortDescription": "Timeless and bold, this premium leather jacket blends comfort with fashion-forward design to elevate your style through any season or occasion...",
                    "description": "Timeless and bold, the Luxe Leather Jacket X is crafted from 100% genuine leather, offering a luxurious feel and a tailored fit. The jacket features a modern cut that flatters a variety of body types and adds instant edge to any outfit. With its high-quality zippers, quilted lining, and adjustable cuffs, it's built for both function and fashion. Whether you're headed to a concert, a dinner date, or simply out for the evening, this jacket brings a confident and contemporary look. The inner pockets are perfect for securing essentials while on the move. Designed to age beautifully, the leather develops a unique patina over time, making each piece truly your own. This jacket also includes a detachable hood and weather-resistant finish, allowing for versatile wear. Pair it with jeans, boots, or even a dress for an effortlessly cool ensemble. It’s the kind of jacket you’ll wear for years and still turn heads every time.",
                    "category": "Fashion",
                    "rank": 9,
                    "image": "/jacket.jpg",
                    "price": 349.99
                },
                {
                    "id": "d2f7c3a9-8b3e-4c5e-9f2b-1e7a9c8d4e2f",
                    "name": "Galaxy Smartwatch Pro",
                    "shortDescription": "Stay connected and track your fitness with this sleek smartwatch, featuring advanced health monitoring and customizable watch faces...",
                    "description": "Stay connected and track your fitness with the Galaxy Smartwatch Pro. This sleek and stylish smartwatch offers advanced health monitoring features, including heart rate tracking, sleep analysis, and blood oxygen measurement. With its customizable watch faces and interchangeable bands, you can personalize it to match your style. The watch is water-resistant and built to withstand daily wear and tear. It also includes GPS, Bluetooth, and NFC for seamless connectivity. Whether you're tracking workouts, receiving notifications, or making contactless payments, the Galaxy Smartwatch Pro is your ultimate companion for a connected lifestyle.",
                    "category": "Electronics",
                    "rank": 8,
                    "image": "/smartwatch.jpg",
                    "price": 299.99
                },
                {
                    "id": "e3a9b7c5-4f8e-4d6e-9c3b-2f7a8d9e5c4f",
                    "name": "Eco-Friendly Yoga Mat",
                    "shortDescription": "Enhance your yoga practice with this eco-friendly mat, offering superior grip and cushioning for all skill levels...",
                    "description": "Enhance your yoga practice with the Eco-Friendly Yoga Mat, made from sustainable materials that are free from harmful chemicals. This mat provides superior grip and cushioning, ensuring stability and comfort during your poses. Its lightweight design makes it easy to carry to the studio or use at home. The non-slip surface ensures safety, even during intense sessions. Available in a variety of colors and patterns, this yoga mat is perfect for beginners and experienced yogis alike. It's also easy to clean and designed to last, making it a great investment for your wellness journey.",
                    "category": "Sports",
                    "rank": 7,
                    "image": "/yoga-matt.jpg",
                    "price": 49.99
                },
                {
                    "id": "f4c8d7e9-5b3e-4a6e-8c2b-3f7a9d8e6c5f",
                    "name": "Aurora Pendant Lamp",
                    "shortDescription": "Illuminate your space with this modern pendant lamp, featuring a sleek design and adjustable brightness for any room...",
                    "description": "Illuminate your space with the Aurora Pendant Lamp, a modern lighting solution that combines style and functionality. The lamp features a sleek, minimalist design with a durable metal frame and a frosted glass shade. Its adjustable brightness allows you to create the perfect ambiance for any room, whether it's your living room, dining area, or bedroom. The lamp is easy to install and compatible with energy-efficient LED bulbs. Its timeless design complements a variety of interior styles, making it a versatile addition to your home decor.",
                    "category": "Home",
                    "rank": 8,
                    "image": "/lamp.jpg",
                    "price": 129.99
                },
                {
                    "id": "g5d9e8f1-6c4e-5b7e-9d3c-4f8a9e7f6d7g",
                    "name": "Trailblazer Hiking Backpack",
                    "shortDescription": "Gear up for your next adventure with this durable hiking backpack, featuring ample storage and ergonomic design...",
                    "description": "Gear up for your next adventure with the Trailblazer Hiking Backpack. This durable and lightweight backpack is designed for outdoor enthusiasts, offering ample storage space for all your essentials. It features multiple compartments, including a hydration sleeve, and adjustable straps for a comfortable fit. The backpack is made from water-resistant materials to protect your gear in any weather. Its ergonomic design reduces strain on your back and shoulders, making it ideal for long hikes or camping trips. Whether you're exploring the wilderness or commuting in the city, this backpack is built to keep up with your lifestyle.",
                    "category": "Outdoors",
                    "rank": 2,
                    "image": "/hiking-pack.jpg",
                    "price": 89.99
                },
                {
                    "id": "h6e1f2g3-7d5e-6c8e-9e4d-5f9a8e7f6g8h",
                    "name": "Artisan Coffee Maker",
                    "shortDescription": "Brew barista-quality coffee at home with this stylish and easy-to-use coffee maker, perfect for coffee enthusiasts...",
                    "description": "Brew barista-quality coffee at home with the Artisan Coffee Maker. This stylish and easy-to-use coffee maker features a sleek stainless steel design and advanced brewing technology for a rich and flavorful cup every time. It includes customizable settings for strength and temperature, allowing you to tailor your coffee to your preferences. The coffee maker also has a built-in grinder for freshly ground beans and a programmable timer for convenience. Its compact size fits perfectly on any countertop, making it a great addition to your kitchen. Enjoy the perfect cup of coffee, whether it's a quick morning brew or a leisurely weekend treat.",
                    "category": "Kitchen",
                    "rank": 10,
                    "image": "/coffee-maker.jpg",
                    "price": 199.99
                },
                {
                    "id": "i7f2g3h4-8e6f-7d9e-9f5e-6g8a9f7g8h9i",
                    "name": "Smart Home Security Camera",
                    "shortDescription": "Keep your home safe with this smart security camera, offering HD video, motion detection, and remote access...",
                    "description": "Keep your home safe with the Smart Home Security Camera, a reliable and easy-to-install solution for monitoring your property. This camera offers HD video quality, night vision, and motion detection to capture every detail, day or night. With its companion app, you can access live footage and receive alerts on your smartphone. The camera also features two-way audio, allowing you to communicate with visitors or deter intruders. Its weatherproof design makes it suitable for both indoor and outdoor use. Enhance your home security with this smart and affordable camera.",
                    "category": "Electronics",
                    "rank": 9,
                    "image": "/security-cam.jpg",
                    "price": 149.99
                },
                {
                    "id": "j8g3h4i5-9f7g-8e6f-9g5f-7h9a8g7h9i0j",
                    "name": "Luxury Silk Scarf",
                    "shortDescription": "Add a touch of elegance to your outfit with this luxurious silk scarf, featuring vibrant patterns and a soft texture...",
                    "description": "Add a touch of elegance to your outfit with the Luxury Silk Scarf. Made from 100% pure silk, this scarf features vibrant patterns and a soft texture that feels gentle against your skin. Its versatile design allows you to wear it in multiple ways, whether as a neck scarf, headband, or accessory for your bag. The scarf is lightweight and easy to carry, making it a perfect addition to your wardrobe. Ideal for both casual and formal occasions, this silk scarf is a timeless accessory that enhances any look.",
                    "category": "Fashion",
                    "rank": 8,
                    "image": "/scarf.jpg",
                    "price": 59.99
                },
                {
                    "id": "k9h4i5j6-0g8h-9f7g-0h6g-8i9a7h8i0j1k",
                    "name": "Portable Bluetooth Speaker",
                    "shortDescription": "Enjoy high-quality sound on the go with this portable Bluetooth speaker, featuring long battery life and water resistance...",
                    "description": "Enjoy high-quality sound on the go with the Portable Bluetooth Speaker. This compact and lightweight speaker delivers powerful audio with deep bass and clear highs. It features Bluetooth connectivity for seamless pairing with your devices and a long-lasting battery for up to 12 hours of playtime. The speaker is water-resistant, making it perfect for outdoor adventures, beach trips, or poolside parties. Its durable design ensures it can withstand everyday use. With its built-in microphone, you can also take hands-free calls. Elevate your music experience with this versatile and portable speaker.",
                    "category": "Electronics",
                    "rank": 9,
                    "image": "/speaker.jpg",
                    "price": 79.99
                },
                {
                    "id": "l0i5j6k7-1h9i-0g8h-1i7h-9j0a8i9j1k2l",
                    "name": "Ergonomic Office Chair",
                    "shortDescription": "Work in comfort with this ergonomic office chair, designed to support your posture and reduce fatigue during long hours...",
                    "description": "Work in comfort with the Ergonomic Office Chair, a must-have for your home or office workspace. This chair features adjustable height, lumbar support, and a breathable mesh backrest to keep you cool and comfortable. Its padded seat and armrests provide additional support, while the swivel base and smooth-rolling casters allow for easy mobility. The chair is designed to promote proper posture and reduce fatigue during long hours of work or study. Its sleek and modern design fits seamlessly into any office decor. Upgrade your workspace with this ergonomic and stylish chair.",
                    "category": "Furniture",
                    "rank": 10,
                    "image": "/chair.jpg",
                    "price": 249.99
                },
                {
                    "id": "m1j6k7l8-2i0j-1h9i-2j8i-0k1a9j2k3l4m",
                    "name": "Premium Noise-Canceling Headphones",
                    "shortDescription": "Immerse yourself in your favorite music with these premium noise-canceling headphones, offering superior sound quality and comfort...",
                    "description": "Immerse yourself in your favorite music with the Premium Noise-Canceling Headphones. These headphones feature advanced noise-canceling technology to block out distractions and deliver superior sound quality. The over-ear design and plush ear cushions provide all-day comfort, making them perfect for long listening sessions. With Bluetooth connectivity and a built-in microphone, you can enjoy wireless freedom and take calls on the go. The headphones also include a long-lasting battery for up to 30 hours of playtime. Whether you're commuting, working, or relaxing, these headphones offer an exceptional audio experience.",
                    "category": "Electronics",
                    "rank": 4,
                    "image": "/headphones.jpg",
                    "price": 349.99
                },
                {
                    "id": "n2k7l8m9-3j1k-2i0j-3k9j-1l2a0k3l4m5n",
                    "name": "Smart Thermostat Elite",
                    "shortDescription": "Optimize your home's climate with this smart thermostat, featuring energy-saving modes and remote control via app...",
                    "description": "Optimize your home's climate with the Smart Thermostat Elite. This advanced thermostat learns your preferences and adjusts the temperature automatically to save energy and keep you comfortable. With its intuitive app, you can control the thermostat remotely, set schedules, and monitor energy usage. The sleek touchscreen interface makes it easy to use, and compatibility with voice assistants adds convenience. Whether you're at home or away, the Smart Thermostat Elite ensures your home is always at the perfect temperature.",
                    "category": "Electronics",
                    "rank": 8,
                    "image": "/smart-thermostat.jpg",
                    "price": 199.99
                },
                {
                    "id": "o3l8m9n0-4k2l-3j1k-4l0k-2m3a1l4m5n6o",
                    "name": "Deluxe Camping Tent",
                    "shortDescription": "Experience the outdoors with this spacious and durable camping tent, designed for comfort and protection...",
                    "description": "Experience the outdoors with the Deluxe Camping Tent, a spacious and durable shelter for your adventures. This tent features a waterproof design, reinforced seams, and a sturdy frame to withstand various weather conditions. It includes multiple ventilation windows and a quick-setup mechanism for convenience. With room for up to six people, it's perfect for family trips or group outings. The tent also comes with a carrying bag for easy transport and storage. Enjoy the great outdoors with this reliable and comfortable camping tent.",
                    "category": "Outdoors",
                    "rank": 9,
                    "image": "/tent.jpg",
                    "price": 299.99
                },
                {
                    "id": "p4m9n0o1-5l3m-4k2l-5m1l-3n4a2m5n6o7p",
                    "name": "Gourmet Blender Pro",
                    "shortDescription": "Create smoothies, soups, and more with this powerful blender, featuring multiple speed settings and a sleek design...",
                    "description": "Create smoothies, soups, and more with the Gourmet Blender Pro. This powerful blender features a high-speed motor, durable stainless steel blades, and multiple speed settings for versatile use. Its large, BPA-free pitcher is perfect for family-sized servings, and the sleek design fits seamlessly into any kitchen. The blender also includes a pulse function for precise control and a self-cleaning mode for easy maintenance. Whether you're preparing healthy drinks or gourmet recipes, the Gourmet Blender Pro is your ultimate kitchen companion.",
                    "category": "Kitchen",
                    "rank": 10,
                    "image": "/blender.jpg",
                    "price": 149.99
                },
                {
                    "id": "q5n0o1p2-6m4n-5l3m-6n2m-4o5a3n6o7p8q",
                    "name": "Luxury Memory Foam Mattress",
                    "shortDescription": "Sleep in ultimate comfort with this memory foam mattress, designed to provide support and pressure relief...",
                    "description": "Sleep in ultimate comfort with the Luxury Memory Foam Mattress. This mattress features multiple layers of high-density memory foam that contour to your body, providing exceptional support and pressure relief. Its breathable cover ensures a cool and comfortable sleep environment, while the hypoallergenic materials make it suitable for sensitive sleepers. Available in various sizes, this mattress is perfect for any bedroom. Experience restful nights and wake up refreshed with the Luxury Memory Foam Mattress.",
                    "category": "Furniture",
                    "rank": 9,
                    "image": "/mattress.jpg",
                    "price": 799.99
                },
                {
                    "id": "r6o1p2q3-7n5o-6m4n-7o3n-5p6a4o7p8q9r",
                    "name": "Wireless Charging Pad",
                    "shortDescription": "Charge your devices effortlessly with this sleek wireless charging pad, compatible with most smartphones...",
                    "description": "Charge your devices effortlessly with the Wireless Charging Pad. This sleek and compact pad supports fast charging for compatible smartphones and other devices. Its non-slip surface ensures your device stays in place while charging, and the LED indicator lets you know when it's ready. The pad is lightweight and portable, making it perfect for home, office, or travel use. Say goodbye to tangled cables and enjoy the convenience of wireless charging with this stylish accessory.",
                    "category": "Electronics",
                    "rank": 8,
                    "image": "/charging-pad.jpg",
                    "price": 39.99
                },
                {
                    "id": "s7p2q3r4-8o6p-7n5o-8p4o-6q7a5p8q9r0s",
                    "name": "Professional Chef Knife",
                    "shortDescription": "Slice and dice with precision using this high-quality chef knife, crafted for durability and performance...",
                    "description": "Slice and dice with precision using the Professional Chef Knife. This high-quality knife features a razor-sharp stainless steel blade and an ergonomic handle for comfortable use. Its balanced design ensures precise cuts, making it ideal for both professional chefs and home cooks. The knife is resistant to rust and corrosion, ensuring long-lasting performance. Whether you're chopping vegetables, slicing meat, or preparing intricate dishes, the Professional Chef Knife is a must-have tool in your kitchen.",
                    "category": "Kitchen",
                    "rank": 10,
                    "image": "/knife.jpg",
                    "price": 89.99
                },
                {
                    "id": "t8q3r4s5-9p7q-8o6p-9q5p-7r8a6q9r0s1t",
                    "name": "Compact Treadmill Pro",
                    "shortDescription": "Stay active at home with this compact treadmill, featuring adjustable speeds and a foldable design...",
                    "description": "Stay active at home with the Compact Treadmill Pro. This treadmill offers adjustable speeds and a sturdy running surface, making it suitable for walking, jogging, or running. Its foldable design and built-in wheels allow for easy storage and portability. The digital display tracks your speed, distance, and calories burned, helping you stay motivated. With its quiet motor and durable construction, the Compact Treadmill Pro is perfect for maintaining your fitness routine in the comfort of your home.",
                    "category": "Sports",
                    "rank": 9, 
                    "image": "/treadmill.jpg",
                    "price": 499.99
                },
                {
                    "id": "u9r4s5t6-0q8r-9p7q-0r6q-8s9a7r0s1t2u",
                    "name": "Vintage Record Player",
                    "shortDescription": "Enjoy your favorite vinyl records with this stylish vintage record player, featuring modern audio enhancements...",
                    "description": "Enjoy your favorite vinyl records with the Vintage Record Player, a perfect blend of retro style and modern technology. This record player features a classic wooden design, built-in speakers, and Bluetooth connectivity for streaming music from your devices. Its three-speed turntable accommodates various vinyl sizes, and the adjustable tonearm ensures optimal sound quality. Whether you're a vinyl enthusiast or a casual listener, the Vintage Record Player adds charm and functionality to your music collection.",
                    "category": "Electronics",
                    "rank": 7,
                    "image": "/cassette-player.jpg",
                    "price": 129.99
                },
                {
                    "id": "v0s5t6u7-1r9s-0q8r-1s7r-9t0a8s1t2u3v",
                    "name": "Luxury Bathrobe Set",
                    "shortDescription": "Relax in style with this plush bathrobe set, made from premium materials for ultimate comfort...",
                    "description": "Relax in style with the Luxury Bathrobe Set, crafted from premium materials for a soft and luxurious feel. This set includes a plush bathrobe and matching slippers, perfect for lounging at home or after a bath. The bathrobe features a classic design with a tie belt and deep pockets for convenience. Available in various sizes and colors, this set makes a great gift or a personal indulgence. Experience the ultimate in comfort and relaxation with the Luxury Bathrobe Set.",
                    "category": "Fashion",
                    "rank": 8,
                    "image": "/bathrobe.jpg",
                    "price": 99.99
                },
                {
                    "id": "w1t6u7v8-2s0t-1r9s-2t8s-0u1a9t2u3v4w",
                    "name": "Advanced Gaming Mouse",
                    "shortDescription": "Dominate your games with this advanced gaming mouse, featuring customizable buttons and precision tracking...",
                    "description": "Dominate your games with the Advanced Gaming Mouse, designed for competitive gamers and enthusiasts. This mouse features customizable buttons, adjustable DPI settings, and precision tracking for accurate and responsive gameplay. Its ergonomic design ensures comfort during long gaming sessions, while the RGB lighting adds a stylish touch. Compatible with most gaming systems, the Advanced Gaming Mouse is a must-have accessory for elevating your gaming experience.",
                    "category": "Electronics",
                    "rank": 9,
                    "image": "/gaming-mouse.jpg",
                    "price": 59.99
                }


            ]
        }
    },
});