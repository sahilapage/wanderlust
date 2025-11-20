# wanderlust
WanderLust

A full-stack travel listings platform built with Node.js, Express, MongoDB, and EJS.
Users can browse listings, create their own, add favorites to a wishlist, and manage their profiles.

⭐ Features

🔐 User Authentication (Register/Login using Passport.js)

🏡 CRUD for Listings (Create, Read, Update, Delete)

❤️ Wishlist System (Add/remove listings)

🖼️ Image Uploads (Cloudinary integration)

🔎 Sorting & Filtering (Price, newest, oldest, etc.)

📝 EJS Templates with ejs-mate

🗂️ MongoDB + Mongoose Models

🛠️ Secure Sessions & Flash Messages

📁 Tech Stack

Frontend: EJS, Bootstrap
Backend: Node.js, Express
Database: MongoDB
Auth: Passport.js
Other Tools: Express-session, MongoStore, Method-Override, Multer

🚀 Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/wanderlust.git
cd wanderlust

2. Install dependencies
npm install

3. Add environment variables

Create a .env file:

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAP_TOKEN=your_mapbox_token (if used)
DB_URL=mongodb://127.0.0.1:27017/wanderlust
SESSION_SECRET=yourSecret

4. Start the server
node app.js



MIT License

Copyright (c) 2025 Sahil Apage

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
