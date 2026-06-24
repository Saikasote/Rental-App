# 🏠 Aparto - Modern Real Estate & Rental Mobile Marketplace

Aparto is a modern full-stack real estate mobile application that enables users to discover, explore, and save rental properties through a clean and intuitive mobile experience. The application provides dynamic property browsing, category-based filtering, personalized favorites, and user profile management powered by a scalable REST API.

Built with **React Native (Expo)** for the mobile frontend and **Node.js, Express, and MongoDB** for the backend, Aparto delivers a seamless cross-platform property rental experience.

---

## ✨ Features

### 🏡 Home

- Dynamic property catalog fetched from a REST API.
- Category-based filtering:
  - Apartments
  - Houses
  - Villas
  - Cabins

- Horizontally scrollable featured property carousel.
- Personalized recommendation feed.
- Responsive and modern UI design.

### 🔍 Search

- Search properties by:
  - Address
  - City
  - Location
  - Zip code

- Clean and intuitive search interface.
- Real-time lookup experience.

### ❤️ Saved & Favorites

- Save favorite properties for quick access.
- Dual segmented interface:
  - Saved Searches
  - Favorite Properties

- Persistent user-specific bookmarked listings.

### 👤 Profile

- User profile overview.
- Verified renter status badge.
- Editable user metadata.
- Secure profile avatar support.
- Biometric preference toggle placeholder.
- Account settings management.

---

# 🛠️ Tech Stack

## Frontend (Mobile Application)

| Technology                     | Purpose                           |
| ------------------------------ | --------------------------------- |
| React Native                   | Cross-platform mobile development |
| Expo                           | Managed React Native workflow     |
| Expo Router                    | File-based navigation system      |
| TypeScript                     | Type safety                       |
| React Hooks                    | State management                  |
| React Native Safe Area Context | Device notch handling             |
| @expo/vector-icons             | Icon system                       |
| Ionicons                       | UI icons                          |
| FontAwesome                    | Rating and utility icons          |

---

## Backend (REST API)

| Technology    | Purpose                         |
| ------------- | ------------------------------- |
| Node.js       | Runtime environment             |
| Express.js    | REST API framework              |
| MongoDB       | NoSQL database                  |
| MongoDB Atlas | Cloud database hosting          |
| Mongoose      | ODM for MongoDB                 |
| dotenv        | Environment variable management |
| CORS          | Cross-origin resource sharing   |

---

# 📱 Application Screens

- Home Screen
- Search Screen
- Saved Screen
- Favorites Screen
- Profile Screen

---

# 🗄️ Database Schemas

## Property Schema

```javascript
{
    _id: ObjectId,

    category: String,

    prop_name: String,

    prop_add: String,

    prop_price: String,

    prop_owner: String,

    prop_type: String,

    prop_bedroom_no: Number,

    prop_bathroom_no: Number,

    prop_tags: [String],

    prop_img: String,

    rating: Number
}
```

### Example

```json
{
  "_id": "6a3ac9c446e647c030656f64",
  "category": "Apartments",
  "prop_name": "Skyline Luxury Penthouse",
  "prop_add": "742 Evergreen Terrace, Los Angeles, CA",
  "prop_price": "$4,200",
  "prop_owner": "Sarah Jenkins",
  "prop_type": "Apartments",
  "prop_bedroom_no": 3,
  "prop_bathroom_no": 2,
  "prop_tags": ["Downtown View", "Pet Friendly", "Balcony"],
  "prop_img": "https://images.unsplash.com/...",
  "rating": 5
}
```

---

## User Schema

```javascript
{
    _id: ObjectId,

    user_name: String,

    user_Email: String,

    user_password: String,

    avatar: String,

    isVerifiedRenter: Boolean,

    prop_own: [ObjectId],

    user_saved: [Property],

    user_fav: [Property]
}
```

### Example

```json
{
  "_id": "6a3b57514897553925ac3efa",
  "user_name": "Sairaj Kasote",
  "user_Email": "sairaj@gmail.com",
  "avatar": "https://images.unsplash.com/...",
  "isVerifiedRenter": true
}
```

---

# 🌐 REST API Reference

## Property Endpoints

| Method | Endpoint                          | Description              |
| ------ | --------------------------------- | ------------------------ |
| GET    | `/api/properties`                 | Fetch all properties     |
| GET    | `/api/properties?type=Apartments` | Fetch apartment listings |
| GET    | `/api/properties?type=Villas`     | Fetch villa listings     |
| GET    | `/api/properties?type=Cabins`     | Fetch cabin listings     |

### Response

```json
{
  "success": true,
  "count": 3,
  "data": []
}
```

---

## User Endpoints

| Method | Endpoint                   | Description          |
| ------ | -------------------------- | -------------------- |
| GET    | `/api/users/:id`           | Fetch user profile   |
| GET    | `/api/users/:id/favorites` | Fetch user favorites |
| GET    | `/api/users/:id/saved`     | Fetch saved searches |

### Response

```json
{
  "success": true,
  "user": {}
}
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the backend root directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Example:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/aparto
```

---

# 🚀 Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/aparto.git

cd aparto
```

---

# Backend Setup

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

or

```bash
node server.js
```

Backend will run on:

```bash
http://localhost:5000
```

---

# Frontend Setup

Navigate to the mobile application directory:

```bash
cd mobile-app
```

Install dependencies:

```bash
npm install
```

Start Expo:

```bash
npx expo start
```

Run on Android:

```bash
npm run android
```

Run on iOS:

```bash
npm run ios
```

---

# 📡 Local Network Configuration

For physical device testing using **Expo Go**, update all API URLs to your machine's local IPv4 address.

Example:

```javascript
const API_URL = "http://10.44.11.181:5000/api/properties";
```

Files requiring updates:

```text
app/index.tsx
app/search.tsx
app/saved.tsx
app/profile.tsx
```

### Android Emulator

```text
http://10.0.2.2:5000
```

### iOS Simulator

```text
http://localhost:5000
```

### Physical Device

```text
http://YOUR_LOCAL_IP:5000
```

---

# 📂 Project Structure

```text
Aparto
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── app
│   │   ├── index.tsx
│   │   ├── search.tsx
│   │   ├── saved.tsx
│   │   └── profile.tsx
│   │
│   ├── components
│   ├── assets
│   └── package.json
│
└── README.md
```

---

# 🔮 Future Enhancements

- User Authentication (JWT)
- Property Details Screen
- Property Booking Workflow
- Real-time Notifications
- Push Notifications
- Image Upload Support
- Property Search Suggestions
- Payment Integration
- Chat Between Renter and Owner
- Maps Integration
- Dark Mode Support

---

# 👨‍💻 Author

**Sairaj Nandkishor Kasote**

Built with ❤️ using React Native, Expo, Node.js, Express, and MongoDB.
