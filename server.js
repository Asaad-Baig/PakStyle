const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allows your frontend to talk to the backend
app.use(bodyParser.json());

// Mock Database (In a real app, you'd use MongoDB or PostgreSQL)
const products = [
    { id: 1, name: "Men's Embroidered Kurta", category: "clothing", price: 2499, originalPrice: 3499, image: "https://edge.pk/cdn/shop/products/MG_4612.jpg?v=1649156970", badge: "Eid Sale" },
    { id: 2, name: "Designer Shalwar Kameez", category: "clothing", price: 3999, originalPrice: 4999, image: "https://humayunalamgir.com/cdn/shop/files/268A9583.jpg?v=1755261925&width=375", badge: "Popular" },
    { id: 3, name: "Women's Lawn Suit", category: "clothing", price: 2999, originalPrice: 3999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrervKChC0l0SFku2jeKdTNarjpaBPeyKpfA&s", badge: "New" },
    { id: 4, name: "Party Wear Gown", category: "clothing", price: 5999, originalPrice: 7999, image: "https://img.drz.lazcdn.com/static/pk/p/60991d32cc829ac8681d13ea10fc91f3.jpg_720x720q80.jpg", badge: "Luxury" },
    { id: 5, name: "Gold Plated Necklace Set", category: "jewellery", price: 2999, originalPrice: 3999, image: "https://5.imimg.com/data5/PK/ML/DQ/SELLER-3182473/ajf03-500x500.jpg", badge: "Bestseller" },
    { id: 6, name: "Silver Earrings Set", category: "jewellery", price: 1499, originalPrice: null, image: "https://alita.pk/cdn/shop/files/sameera_earrings_silver_pearl_1_1445x.jpg?v=1754979924", badge: null },
    { id: 7, name: "Traditional Bangles Set", category: "jewellery", price: 1999, originalPrice: 2499, image: "https://meerzah.pk/cdn/shop/files/bn-1225_1.jpg?v=1765179747&width=600", badge: "Sale" },
    { id: 8, name: "Men's Leather Watch", category: "watches", price: 3499, originalPrice: 4499, image: "https://i0.wp.com/watchcentre.pk/wp-content/uploads/2022/04/curren-8371-orange-leather-strap-mens-watch.jpg?fit=800%2C800&ssl=1", badge: null },
    { id: 9, name: "Women's Gold Watch", category: "watches", price: 4999, originalPrice: 5999, image: "https://i5.walmartimages.com/seo/Dress-Gold-Watch-Women-Crystal-Diamond-Watches-Stainless-Steel-Silver-2022-Ladies-Wrist-Watches-Clock-Women-Montre-Femme_a7982919-e2bb-46f1-b736-e149b8a5a197.35b794dfbcf6d986ed19b70f52203911.jpeg", badge: "Luxury" },
    { id: 10, name: "Smart Watch", category: "watches", price: 8999, originalPrice: 11999, image: "https://images-cdn.ubuy.co.in/653dca4638b3b6351c03b03e-smart-watch-for-android-and-iphone.jpg", badge: "Hot" },
    { id: 11, name: "Designer Handbag", category: "accessories", price: 2999, originalPrice: 3999, image: "https://dreamspakistan.com/cdn/shop/files/76385_2_4971ad9a-152a-4460-9c6b-989e9695a4d2.png?v=1752749839&width=600", badge: "New" },
    { id: 12, name: "Leather Wallet", category: "accessories", price: 1499, originalPrice: null, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeD5g1Ix8lDdU9eHNiAfmSHKOn3N7d_xVM7g&s", badge: null },
    { id: 13, name: "Premium Sunglasses", category: "accessories", price: 1999, originalPrice: 2999, image: "https://image.the-woggles.com/cache/catalog/products/woggles_new_image_9_12_2022/auralite_black_polarized_square_sunglasses_packaging_view_03_04_25_400x400.jpg", badge: "Sale" },
    { id: 14, name: "Men's Formal Belt", category: "accessories", price: 899, originalPrice: 1299, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaxxBKZGGKgYeMabf9qbf4MalaUD0h8U1kcA&s", badge: null },
    { id: 15, name: "Men's Sherwani", category: "clothing", price: 7999, originalPrice: 9999, image: "https://www.nameerabyfarooq.com/cdn/shop/products/menssherwani_3bde9710-da14-4b85-a993-f2a0d84e24d5_1080x.jpg?v=1634308062", badge: "Wedding" },
    { id: 16, name: "Women's Bridal jewellery Set", category: "jewellery", price: 6999, originalPrice: 8999, image: "https://img.drz.lazcdn.com/static/pk/p/8cd1865e653d1b69412bcd1b0c15974a.jpg_720x720q80.jpg", badge: "Bridal" }

];

// ROUTES

// 1. Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// 2. Get products by category
app.get('/api/products/:category', (req, res) => {
    const category = req.params.category;
    const filtered = products.filter(p => p.category === category);
    res.json(filtered);
});

// 3. Handle Checkout/Orders
app.post('/api/checkout', (req, res) => {
    const orderData = req.body;
    
    console.log("New Order Received:", orderData);
    
    // Here you would normally save to a database
    res.status(201).json({
        success: true,
        message: "Order received successfully!",
        orderId: Math.floor(Math.random() * 100000)
    });
});

app.listen(PORT, () => {
    console.log(`PakStyle Backend running at http://localhost:${PORT}`);
});