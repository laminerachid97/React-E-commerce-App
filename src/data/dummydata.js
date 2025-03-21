const dummyData = {
  products: [
    {
      id: 1,
      category: "Fashion Men",
      name: "Classic Linen Shirt",
      price: 49.99,
      image: "https://cdn.linenclub.com/media/catalog/product/cache/d8d099ed0f54be45d4eb2c71c1a3b40d/c/o/comsf614ck08313-p6_0.jpg",
      details: "A timeless linen shirt perfect for casual or semi-formal occasions.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Navy", "LightBlue"],
      rating: 4.5,
      off: 39,
      reviews: 23,
      description: "Experience the epitome of comfort and style with our Classic Linen Shirt. Crafted from premium, breathable linen, this shirt offers a relaxed yet refined look, ideal for warm weather or sophisticated casual wear. Its lightweight fabric ensures all-day comfort, while the tailored fit provides a sharp silhouette. Available in a range of classic colors, this shirt is a versatile addition to any wardrobe. Perfect for beach outings, summer parties, or simply a relaxed day out. Easy to care for and designed to last, this linen shirt will become your go-to choice for effortless style.",
    },
    {
      id: 2,
      category: "Fashion Men",
      name: "Slim Fit Chinos",
      price: 69.99,
      image: "https://n.nordstrommedia.com/it/7863e55f-2257-4c9c-9f22-a90f8e965b0e.jpeg?h=365&w=240&dpr=2",
      details: "Comfortable and stylish slim fit chinos for everyday wear.",
      sizes: ["30", "32", "34", "36"],
      colors: ["Beige", "Gray", "Olive"],
      rating: 4.2,
      off: 45,
      reviews: 15,
      description: "Upgrade your everyday style with our Slim Fit Chinos. Designed for both comfort and sophistication, these chinos are crafted from a premium blend of fabrics that offer flexibility and durability. The slim fit silhouette provides a modern, tailored look, while the soft, breathable material ensures all-day comfort. Versatile and easy to style, they can be dressed up with a blazer for a smart-casual look or paired with a simple tee for a relaxed vibe. Ideal for office wear, casual outings, or weekend adventures, these chinos are a must-have addition to any modern man's wardrobe."
    },
    {
      id: 3,
      category: "Fashion Women",
      name: "Floral Maxi Dress",
      price: 79.99,
      image: "https://vaanicreation.in/cdn/shop/files/473Wx593H-467119234-blue-MODEL.jpg?v=1722681873",
      details: "Elegant floral maxi dress perfect for summer events.",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Multicolor"],
      rating: 4.8,
      off: 40,
      reviews: 35,
      description: "Embrace the beauty of summer with our Floral Maxi Dress. This stunning dress features a vibrant floral print that exudes elegance and charm, making it perfect for any special occasion. The flowing maxi silhouette offers a graceful and flattering fit, while the lightweight fabric ensures you stay cool and comfortable all day long. Whether you're attending a garden party, a beach wedding, or a summer soirée, this dress will make you feel effortlessly chic. Pair it with sandals or heels and your favorite accessories to complete the look."
    },
    {
      id: 4,
      category: "Fashion Women",
      name: "Casual Denim Jacket",
      price: 59.99,
      image: "https://image.made-in-china.com/2f0j00irwbClNoELpz/Wholesale-Clothes-Multi-Colours-Denim-Jackets-Women-Clothes-MID-Length-Distressed-Denim-Jacket-Girls-Shirts-Casual-Lapel-Collar-Je-ns-Jacket-Denim-Street-Wear.jpg",
      details: "A versatile denim jacket that complements any outfit.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["LightBlue", "DarkBlue"],
      rating: 4.6,
      off: 50,
      reviews: 28,
      description: "Add a touch of timeless style to your wardrobe with our Casual Denim Jacket. This versatile jacket is a must-have for any fashion-forward woman, offering a classic look that pairs effortlessly with any outfit. Crafted from high-quality denim, it provides both durability and comfort. The relaxed fit allows for easy layering, making it perfect for year-round wear. Whether you're dressing up for a night out or keeping it casual for a day of errands, this denim jacket is the perfect finishing touch."
    },
    {
      id: 5,
      category: "Accessories",
      name: "Classic Aviator Sunglasses",
      price: 29.99,
      image: "https://cdn11.bigcommerce.com/s-rrje11zjnk/images/stencil/1280x1280/products/32486/52932/flying-high-classic-aviator-sunglasses-goldbrown__92269.1706627050.jpg?c=1",
      details: "Timeless aviator sunglasses with UV protection.",
      sizes: ["One Size"],
      colors: ["Gold", "Silver", "Black"],
      rating: 4.7,
      off: 30,
      reviews: 42,
      description: "Elevate your style with our Classic Aviator Sunglasses. These timeless sunglasses are a must-have accessory, combining iconic design with practical functionality. Featuring a lightweight metal frame and polarized lenses, they offer superior comfort and UV protection, ensuring your eyes are shielded from harmful rays. Perfect for any occasion, from casual outings to sunny vacations, these aviator sunglasses will add a touch of sophistication to your look."
    },
    {
      id: 6,
      category: "Accessories",
      name: "Luxury Leather Tote Bag",
      price: 199.99,
      image: "https://s.alicdn.com/@sc04/kf/Hdb59a133ffc944e5982f5c9893e00c72t.jpg_720x720q50.jpg",
      details: "A luxurious leather tote bag perfect for everyday use.",
      sizes: ["One Size"],
      colors: ["Black", "Brown", "Red"],
      rating: 4.9,
      off: 60,
      reviews: 50,
      description: "Indulge in luxury with our Leather Tote Bag. Crafted from premium, supple leather, this tote bag exudes sophistication and elegance. Its spacious interior and multiple compartments make it perfect for everyday use, whether you're heading to the office, running errands, or traveling. The timeless design and durable construction ensure that this tote bag will be a cherished accessory for years to come. With its versatile style and practical features, it's the perfect blend of fashion and function."
    },
    {
      id: 7,
      category: "Fashion Women",
      name: "Wool Blend Sweater",
      price: 54.99,
      image: "https://static.reserved.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/7/1/7123B-84M-002-1-876692_6.jpg",
      details: "Warm and stylish wool blend sweater for colder days.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Gray", "Navy", "Charcoal"],
      rating: 4.4,
      off: 20,
      reviews: 18,
      description: "Stay warm and stylish during the colder months with our Wool Blend Sweater. This cozy sweater is crafted from a premium wool blend that offers exceptional warmth and comfort. Its classic design and versatile colors make it a perfect addition to any wardrobe. Whether you're layering it under a jacket for extra warmth or wearing it on its own for a relaxed look, this sweater will keep you comfortable and stylish all season long."
    },
    {
      id: 8,
      category: "Fashion Women",
      name: "Silk Blouse",
      price: 64.99,
      image: "https://gobygosilk.com/cdn/shop/products/T1528_bestinshowblouse_spray_1.jpg?v=1721598107",
      details: "Elegant silk blouse perfect for formal occasions.",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Ivory", "Black", "Rose"],
      rating: 4.8,
      off: 45,
      reviews: 38,
      description: "Add a touch of sophistication to your wardrobe with our Silk Blouse. Crafted from luxurious silk fabric, this blouse offers a smooth and elegant feel, perfect for formal occasions. Its timeless design and flattering fit make it a versatile piece that can be dressed up or down. Whether you're attending a business meeting, a dinner party, or a special event, this silk blouse will make you feel confident and stylish."
    },
    {
      id: 9,
      category: "Accessories",
      name: "Gold Hoop Earrings",
      price: 39.99,
      image: "https://jacqmariajewelry.com/cdn/shop/products/ChunkyGoldHoops-Small.jpg?v=1666728911&width=2000",
      details: "Classic gold hoop earrings, a staple for any jewelry collection.",
      sizes: ["One Size"],
      colors: ["Gold"],
      rating: 4.7,
      off: 40,
      reviews: 45,
      description: "Add a touch of timeless elegance to your jewelry collection with our Gold Hoop Earrings. These classic hoops are crafted from high-quality materials, ensuring a lasting shine and durability. Their versatile design makes them perfect for any occasion, whether you're dressing up for a special event or adding a touch of sophistication to your everyday look. Lightweight and comfortable, these gold hoop earrings are a must-have accessory that will complement any style."
    },
    {
      id: 10,
      category: "Fashion Men",
      name: "Sports Jacket",
      price: 89.99,
      image: "https://www.truerevo.com/cdn/shop/files/1-DSC_9149.jpg?v=1687334143",
      details: "A comfortable and stylish sports jacket.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Navy", "Black", "Dark Gray"],
      rating: 4.3,
      off: 15,
      reviews: 20,
      description: "Stay comfortable and stylish with our Sports Jacket. Designed for both performance and casual wear, this jacket is crafted from a durable and breathable fabric that provides excellent comfort and flexibility. Its modern design features a sleek silhouette and practical details, making it perfect for workouts, outdoor activities, or everyday wear. Whether you're hitting the gym or running errands, this sports jacket will keep you looking sharp and feeling great."
    },
    {
      id: 11,
      category: "Fashion Women",
      name: "Summer Shorts",
      price: 39.99,
      image: "https://ae01.alicdn.com/kf/S14e5dbc87019473786159835738c101eP.jpg",
      details: "Lightweight and comfortable summer shorts.",
      sizes: ["XS", "S", "M", "L"],
      colors: ["White", "Beige", "Light Blue"],
      rating: 4.5,
      off: 75,
      reviews: 25,
      description: "Stay cool and comfortable during the warm summer months with our Summer Shorts. These lightweight shorts are crafted from a breathable fabric that ensures all-day comfort. Their versatile design makes them perfect for any casual occasion, whether you're lounging by the pool, exploring the city, or enjoying a beach day. Pair them with your favorite tops and sandals for a stylish and effortless summer look."
    },
    {
      id: 12,
      category: "Accessories",
      name: "Leather Wallet",
      price: 49.99,
      image: "https://m.media-amazon.com/images/I/71yPjRq-gjL._AC_SL1200_.jpg",
      details: "A sleek and durable leather wallet.",
      sizes: ["One Size"],
      colors: ["Black", "Brown"],
      rating: 4.6,
      off: 5,
      reviews: 30,
      description: "Keep your essentials organized and secure with our Leather Wallet. Crafted from high-quality leather, this wallet offers a sleek and durable design that will stand the test of time. Its compact size fits comfortably in your pocket, while the multiple compartments provide ample space for your cards, cash, and ID. Perfect for everyday use or travel, this leather wallet is a practical and stylish accessory that will complement any lifestyle."
    },
    {
      id: 13,
      category: "Fashion Men",
      name: "Casual Striped Shirt",
      price: 52.99,
      image: "https://spykar.com/cdn/shop/files/jVS8O3lZL-MSHST2BC003CHARCOAL-GREY-_1.webp?v=1740743468",
      details: "A stylish striped cotton shirt, perfect for casual outings.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Blue", "Black"],
      rating: 4.2,
      off: 20,
      reviews: 15,
      description: "Add a touch of casual elegance to your wardrobe with our Casual Striped Shirt. Crafted from soft and breathable cotton fabric, this shirt offers exceptional comfort and style. Its classic striped pattern adds a timeless appeal, making it perfect for any casual occasion. Whether you're heading to a weekend brunch, a casual gathering, or a day out with friends, this striped shirt will keep you looking sharp and feeling comfortable."
    },
    {
      id: 14,
      category: "Fashion Men",
      name: "Relaxed Fit Cargo Pants",
      price: 72.99,
      image: "https://assets.ajio.com/medias/sys_master/root/20230718/QIp4/64b6c2c5a9b42d15c95e432c/-473Wx593H-443018141-olive-MODEL.jpg",
      details: "Comfortable cargo pants with a modern, relaxed fit.",
      sizes: ["30", "32", "34", "36"],
      colors: ["Olive", "Khaki", "Navy"],
      rating: 4.5,
      off: 30,
      reviews: 20,
      description: "Experience ultimate comfort and style with our Relaxed Fit Cargo Pants. Designed for both functionality and fashion, these cargo pants feature a modern, relaxed fit that provides ample room for movement. The durable fabric and multiple pockets make them perfect for outdoor adventures, casual outings, or everyday wear. Whether you're exploring the city or relaxing at home, these cargo pants will keep you comfortable and looking sharp."
    },
    {
      id: 15,
      category: "Fashion Women",
      name: "Boho Floral Dress",
      price: 84.99,
      image: "https://m.media-amazon.com/images/I/81EykEBcY3L._AC_UY1000_.jpg",
      details: "A flowy bohemian dress with vibrant floral patterns.",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Multicolor", "Red", "Yellow"],
      rating: 4.8,
      off: 25,
      reviews: 38,
      description: "Embrace your free-spirited style with our Boho Floral Dress. This stunning dress features a flowy silhouette and vibrant floral patterns that exude bohemian charm. Crafted from lightweight and breathable fabric, it offers exceptional comfort and movement. Perfect for summer festivals, beach vacations, or casual outings, this boho floral dress will make you feel effortlessly chic and stylish."
    },
    {
      id: 16,
      category: "Fashion Women",
      name: "Vintage Denim Jacket",
      price: 65.99,
      image: "https://americantall.com/cdn/shop/products/American-Tall-Women-Denim-Jacket-Vintage-Medium-Blue-front.jpg?v=1669914523",
      details: "A classic vintage denim jacket with a trendy oversized fit.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#ADD8E6", "#2F4F4F"],
      rating: 4.7,
      off: 40,
      reviews: 29,
      description: "Embrace timeless style with our Vintage Denim Jacket. This classic jacket features a trendy oversized fit, offering a relaxed and comfortable feel. Crafted from high-quality denim, it's designed to last and will become a staple in your wardrobe. The versatile design pairs effortlessly with any outfit, making it perfect for casual outings, weekend adventures, or adding a touch of vintage flair to your everyday look."
    },
    {
      id: 17,
      category: "Accessories",
      name: "Polarized Aviator Sunglasses",
      price: 32.99,
      image: "https://safetyglassesusa.com/cdn/shop/files/219993_source_1682521518.jpg?v=1705516100&width=1280",
      details: "High-quality aviator sunglasses with UV protection.",
      sizes: ["One Size"],
      colors: ["Gold", "Black", "Silver"],
      rating: 4.9,
      off: 35,
      reviews: 50,
      description: "Experience superior clarity and protection with our Polarized Aviator Sunglasses. These high-quality sunglasses feature polarized lenses that reduce glare and enhance visual clarity, making them perfect for driving, outdoor activities, or simply enjoying a sunny day. The classic aviator design and durable construction ensure a timeless look and lasting performance. With their combination of style and functionality, these sunglasses are a must-have accessory for anyone who values quality and eye protection."
    },
    {
      id: 18,
      category: "Accessories",
      name: "Elegant Leather Handbag",
      price: 210.99,
      image: "https://images.stockcake.com/public/4/e/2/4e2fc1fb-040e-4e35-abf4-6756aebfd2e7_large/elegant-red-handbag-stockcake.jpg",
      details: "A spacious and stylish leather handbag for daily use.",
      sizes: ["One Size"],
      colors: ["Black", "Tan", "Maroon"],
      rating: 4.8,
      off: 50,
      reviews: 47,
      description: "Elevate your everyday style with our Elegant Leather Handbag. Crafted from premium leather, this handbag exudes sophistication and timeless appeal. Its spacious interior and multiple compartments provide ample space for your essentials, while the secure closure ensures your belongings are safe. Whether you're heading to the office, running errands, or attending a special event, this leather handbag will complement any outfit and keep you organized on the go."
    },
    {
      id: 19,
      category: "Fashion Men",
      name: "Wool Crewneck Sweater",
      price: 59.99,
      image: "https://www.sweatershop.com/media/catalog/product/cache/2a3a8a0f8ca5c43cbada7421bb722618/7/2/721a9831.jpg",
      details: "A warm wool crewneck sweater for a cozy winter feel.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Gray", "Beige", "Navy"],
      rating: 4.4,
      off: 20,
      reviews: 25,
      description: "Stay warm and cozy during the colder months with our Wool Crewneck Sweater. Crafted from soft and luxurious wool, this sweater offers exceptional comfort and warmth. Its classic crewneck design and versatile colors make it a perfect addition to any winter wardrobe. Whether you're relaxing by the fireplace, enjoying a snowy day out, or layering it under a jacket for extra warmth, this wool crewneck sweater will keep you feeling comfortable and looking stylish."
    },
    {
      id: 20,
      category: "Fashion Women",
      name: "Satin Wrap Blouse",
      price: 69.99,
      image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E06045s2.jpg?im=Resize,width=750",
      details: "A luxurious satin blouse with a flattering wrap design.",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Blush", "Emerald", "Champagne"],
      rating: 4.9,
      off: 45,
      reviews: 42,
      description: "Indulge in luxury with our Satin Wrap Blouse. Crafted from smooth and lustrous satin fabric, this blouse drapes beautifully and offers a flattering fit. The wrap design adds a touch of elegance and sophistication, making it perfect for special occasions or adding a touch of glamour to your everyday look. Whether you're dressing up for a night out or adding a touch of luxury to your workwear, this satin wrap blouse will make you feel confident and stylish."
    },
    {
      id: 21,
      category: "Accessories",
      name: "Minimalist Gold Hoops",
      price: 44.99,
      image: "https://i.pinimg.com/736x/b8/b8/16/b8b8166f34f46f1ed8f72071d06988ac.jpg",
      details: "Sleek and minimalist gold hoop earrings for daily wear.",
      sizes: ["One Size"],
      colors: ["Gold"],
      rating: 4.8,
      off: 30,
      reviews: 39,
      description: "Add a touch of understated elegance to your everyday style with our Minimalist Gold Hoops. These sleek and lightweight earrings are designed for comfortable daily wear, making them a versatile addition to any jewelry collection. Crafted from high-quality materials, they offer a subtle shine that complements any outfit. Whether you're dressing up for a special occasion or keeping it casual, these minimalist gold hoops will add a touch of sophistication to your look."
    },
    {
      id: 22,
      category: "Fashion Men",
      name: "Sporty Windbreaker Jacket",
      price: 95.99,
      image: "https://www.lifestylesports.com/on/demandware.static/-/Sites-LSS_eCommerce_Master/default/dw985efc1b/images/55026013xlarge.jpg",
      details: "A lightweight windbreaker designed for outdoor activities.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Olive"],
      rating: 4.6,
      off: 25,
      reviews: 30,
      description: "Stay protected from the elements with our Sporty Windbreaker Jacket. Designed for outdoor enthusiasts, this lightweight jacket offers excellent wind resistance and water repellency. Its sporty design features a comfortable fit and practical details, making it perfect for hiking, running, or casual wear. Whether you're exploring the trails or navigating the city, this windbreaker will keep you comfortable and stylish."
    },
    {
      id: 23,
      category: "Fashion Women",
      name: "Linen Summer Shorts",
      price: 42.99,
      image: "https://www.baukjen.com/cdn/shop/products/TR40122-TEK_1_1a46d4fd-0000-459e-a8da-64dd8f4c63a0.jpg?v=1592906771&width=1946",
      details: "Breathable linen shorts perfect for hot weather.",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Beige", "Pink", "Light Blue"],
      rating: 4.5,
      off: 50,
      reviews: 27,
      description: "Stay cool and comfortable during the summer months with our Linen Summer Shorts. Crafted from breathable linen fabric, these shorts offer a relaxed fit and a lightweight feel, making them perfect for hot weather. Their versatile design pairs effortlessly with any top, making them ideal for beach outings, casual brunches, or everyday wear. Enjoy the comfort and style of linen with these must-have summer shorts."
    },
    {
      id: 24,
      category: "Accessories",
      name: "Classic Leather Wallet",
      price: 54.99,
      image: "https://crazyhorsecraft.com/cdn/shop/products/3-Vegetable-tanned-italian-leather-wallet-cardholder-light-brown.jpg?v=1568725854&width=2048",
      details: "A premium leather wallet with multiple compartments.",
      sizes: ["One Size"],
      colors: ["Black", "Brown"],
      rating: 4.7,
      off: 15,
      reviews: 35,
      description: "Keep your essentials organized and secure with our Classic Leather Wallet. Crafted from premium leather, this wallet offers a timeless design and exceptional durability. Its multiple compartments provide ample space for your cards, cash, and ID, while the slim profile fits comfortably in your pocket. Perfect for everyday use or travel, this leather wallet is a stylish and practical accessory that will stand the test of time."
    },
    {
      id: 25,
      category: "Fashion Men",
      name: "Slim Fit Chinos",
      price: 48.99,
      image: "https://i5.walmartimages.com/asr/5bc4f902-3177-4c2e-925b-a98486693a04.16397eba942859ff3a9f0582afb03577.jpeg",
      details: "Classic slim-fit chinos designed for both casual and business wear.",
      sizes: ["30", "32", "34", "36"],
      colors: ["Beige", "Gray", "Navy"],
      rating: 4.3,
      off: 10,
      reviews: 22,
      description: "Elevate your wardrobe with our Slim Fit Chinos. Designed for versatility, these chinos offer a classic slim fit that's perfect for both casual and business settings. Crafted from a comfortable and durable fabric, they provide a polished look without sacrificing comfort. Pair them with a button-down shirt for a professional look or a t-shirt for a relaxed vibe. These slim-fit chinos are a must-have for any modern man."
    },
    {
      id: 26,
      category: "Fashion Women",
      name: "Knitted Turtleneck Sweater",
      price: 74.99,
      image: "https://cdn11.bigcommerce.com/s-n2w9xp8sqv/images/stencil/1280x1280/products/247/1955/Cable-Knit-Turtleneck-Sweater-ML150__45617.1648821156.jpg?c=1",
      details: "Cozy and stylish knitted turtleneck sweater, perfect for winter.",
      sizes: ["S", "M", "L"],
      colors: ["Cream", "Black", "Burgundy"],
      rating: 4.8,
      off: 30,
      reviews: 33,
      description: "Stay warm and stylish during the winter months with our Knitted Turtleneck Sweater. This cozy sweater features a classic turtleneck design and a soft, knitted texture that provides exceptional comfort and warmth. Its versatile style makes it perfect for layering or wearing on its own. Whether you're relaxing at home or heading out for a winter adventure, this knitted turtleneck sweater will keep you looking chic and feeling comfortable."
    },
    {
      id: 27,
      category: "Accessories",
      name: "Classic Leather Belt",
      price: 35.99,
      image: "https://www.nordicedc.com/wp-content/uploads/2023/10/Mens-leather-belt-classic-brown-brass.jpg",
      details: "A high-quality leather belt for a refined touch to any outfit.",
      sizes: ["S", "M", "L"],
      colors: ["Brown", "Black"],
      rating: 4.7,
      off: 20,
      reviews: 18,
      description: "Elevate your style with our Classic Leather Belt. Crafted from premium leather, this belt offers a timeless design and exceptional durability. Its sleek buckle and refined finish add a touch of sophistication to any outfit, making it perfect for both casual and formal occasions. Whether you're dressing up for a special event or adding a touch of polish to your everyday look, this leather belt is a must-have accessory."
    },
    {
      id: 28,
      category: "Fashion Men",
      name: "Athletic Joggers",
      price: 58.99,
      image: "https://activefaithsports.com/cdn/shop/products/5D3A1611_1024x1024.jpg?v=1668803210",
      details: "Comfortable athletic joggers designed for workouts and casual wear.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Gray", "Black", "Olive"],
      rating: 4.6,
      off: 25,
      reviews: 27,
      description: "Experience ultimate comfort and performance with our Athletic Joggers. Crafted from a breathable and moisture-wicking fabric, these joggers are designed for both workouts and casual wear. Their athletic fit allows for a full range of motion, while the elastic waistband and drawstring ensure a secure and comfortable fit. Whether you're hitting the gym, running errands, or relaxing at home, these joggers will keep you comfortable and stylish."
    },
    {
      id: 29,
      category: "Fashion Women",
      name: "High-Waisted Denim Shorts",
      price: 49.99,
      image: "https://s7d2.scene7.com/is/image/aeo/1333_7749_980_of?$pdp-m-opt$",
      details: "Trendy high-waisted denim shorts for a casual summer look.",
      sizes: ["XS", "S", "M", "L"],
      colors: ["LightWash", "DarkWash"],
      rating: 4.5,
      off: 15,
      reviews: 40,
      description: "Embrace the summer vibes with our High-Waisted Denim Shorts. These trendy shorts feature a flattering high-waisted design and a classic denim look, making them perfect for casual outings, beach days, or weekend adventures. Pair them with your favorite tops and sandals for a stylish and effortless summer look."
    },
    {
      id: 30,
      category: "Accessories",
      name: "Stylish Fedora Hat",
      price: 59.99,
      image: "https://www.cubanfoodmarket.com/mm5/graphics/00000001/6/BrownFedoraHat.jpg",
      details: "A classic fedora hat that adds a stylish touch to any outfit.",
      sizes: ["One Size"],
      colors: ["Black", "Beige", "Navy"],
      rating: 4.9,
      off: 35,
      reviews: 45,
      description: "Elevate your style with our Stylish Fedora Hat. This classic hat is crafted from high-quality materials and features a timeless design that complements any outfit. Whether you're dressing up for a special occasion or adding a touch of sophistication to your everyday look, this fedora hat is the perfect accessory. Its versatile style and comfortable fit make it a must-have for any fashion enthusiast."
    },
    {
      id: 31,
      category: "Fashion Men",
      name: "Longline Hoodie",
      price: 65.99,
      image: "https://productimages.drct2u.com/mobile_huge_x2/products/po/po187/b08po187705w.jpg",
      details: "A trendy longline hoodie designed for extra comfort and style.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Gray", "White"],
      rating: 4.4,
      off: 30,
      reviews: 31,
      description: "Stay comfortable and stylish with our Longline Hoodie. This trendy hoodie features a modern longline design that offers extra coverage and a contemporary look. Crafted from a soft and cozy fabric, it's perfect for layering during colder months or wearing on its own for a relaxed vibe. Whether you're lounging at home, running errands, or meeting up with friends, this longline hoodie will keep you comfortable and looking sharp."
    },
    {
      id: 32,
      category: "Fashion Women",
      name: "Pleated Midi Skirt",
      price: 69.99,
      image: "https://static.lefties.com/9/photos2/2024/I/0/1/p/1964/319/715/1964319715_2_1_1.jpg?t=1715159499855",
      details: "A chic pleated midi skirt with an elegant flow.",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Pink", "Green", "Blue"],
      rating: 4.7,
      off: 40,
      reviews: 26,
      description: "Embrace effortless elegance with our Pleated Midi Skirt. This chic skirt features delicate pleats that create a beautiful flow and movement. The midi length offers a sophisticated and versatile look, making it perfect for both casual and formal occasions. Whether you're dressing it up with heels and a blouse or keeping it casual with sneakers and a t-shirt, this pleated midi skirt will add a touch of refinement to your style."
    },
    {
      id: 33,
      category: "Accessories",
      name: "Vintage-Inspired Watch",
      price: 129.99,
      image: "https://monochrome-watches.com/wp-content/uploads/2023/11/2023-Longines-Legend-Diver-39mm-No-Date-COSC-Hands-on-Review-14.jpg",
      details: "A sleek vintage-inspired watch with a leather strap.",
      sizes: ["One Size"],
      colors: ["Gold", "Silver", "Black"],
      rating: 4.8,
      off: 50,
      reviews: 38,
      description: "Embrace timeless elegance with our Vintage-Inspired Watch. This sleek timepiece features a classic design with a modern twist, making it a perfect accessory for any occasion. The genuine leather strap provides a comfortable and sophisticated feel, while the detailed dial adds a touch of vintage charm. Whether you're dressing up for a special event or adding a touch of class to your everyday look, this watch is a perfect choice."
    },
    {
      id: 34,
      category: "Fashion Men",
      name: "Classic Wool Blazer",
      price: 149.99,
      image: "https://www.pellini-collection.com/wp-content/uploads/2024/08/CLASSIC-WOOL-BLAZER-gry2-scaled-1.jpg",
      details: "A sophisticated wool blazer for formal and semi-formal occasions.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Navy", "Gray", "Black"],
      rating: 4.9,
      off: 20,
      reviews: 41,
      description: "Elevate your formal wardrobe with our Classic Wool Blazer. Crafted from premium wool fabric, this blazer offers a timeless design and exceptional comfort. Its tailored fit and sophisticated details make it perfect for formal events, business meetings, or semi-formal occasions. Whether you're pairing it with dress pants for a polished look or dressing it down with jeans for a smart casual style, this wool blazer is a versatile investment that will last for years to come."
    },
    {
      id: 35,
      category: "Fashion Women",
      name: "Embroidered Kimono Cardigan",
      price: 94.99,
      image: "https://leafmansfield.com/cdn/shop/files/0077598_fkt961_1445x.jpg?v=1702504692",
      details: "A lightweight embroidered kimono-style cardigan with boho vibes.",
      sizes: ["S", "M", "L"],
      colors: ["Beige", "Black", "White"],
      rating: 4.8,
      off: 35,
      reviews: 29,
      description: "Embrace bohemian style with our Embroidered Kimono Cardigan. This lightweight cardigan features intricate embroidery and a flowing kimono-style design, adding a touch of free-spirited elegance to any outfit. Perfect for layering over dresses, tops, or even swimwear, this cardigan is a versatile addition to your wardrobe. Whether you're attending a festival, exploring the city, or relaxing on vacation, this embroidered kimono cardigan will keep you stylish and comfortable."
    },
    {
      id: 36,
      category: "Accessories",
      name: "Luxury Silk Scarf",
      price: 79.99,
      image: "https://ilonatambor.com/wp-content/uploads/2023/03/ILONATAMBORSS2023-LOOK_10-000463.webp",
      details: "A premium silk scarf with hand-painted floral designs.",
      sizes: ["One Size"],
      colors: ["Red", "Blue", "Gold"],
      rating: 4.9,
      off: 25,
      reviews: 35,
      description: "Indulge in luxury with our Silk Scarf. Crafted from the finest silk, this scarf features exquisite hand-painted floral designs that exude elegance and artistry. Its soft texture and vibrant colors make it a beautiful accessory for any season. Whether you're draping it around your neck, tying it on your handbag, or using it as a headwrap, this silk scarf will add a touch of sophistication to your style."
    }
  ],
};

export default dummyData;