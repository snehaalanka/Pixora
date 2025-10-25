A **full-stack AI web application** that transforms your **text prompts into stunning images** using cutting-edge AI models.
Built with the **MERN stack** (MongoDB, Express.js, React, Node.js), styled using **TailwindCSS**, and enhanced with **Framer Motion** animations — Pixora delivers a smooth, interactive, and visually appealing experience for users.

---

## 🚀 Features

*  **AI Text-to-Image Generation** — Convert text prompts into images in seconds.
*  **Image Management** — Save, view, or share generated images.
* 🔐 **Authentication** — Secure JWT-based login system.
* 💳 **Razorpay Integration** — For premium or credit-based image generation.
* 🎨 **Smooth UI** — Built with TailwindCSS and Framer Motion.
* ⚡ **Full-Stack Architecture** — MERN stack ensures flexibility and scalability.

---

## 🧰 Tech Stack

**Frontend:** React, Vite, TailwindCSS, Axios, React-Toastify, Framer Motion
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Razorpay
**Database:** MongoDB Atlas
**Deployment:** Vercel (Frontend + Backend)

---

## 🖥️ Project Setup

### 🔹 Clone the Repository

```bash
git clone https://github.com/<your-username>/pixora.git
cd pixora
```

---

## 🧩 Client Setup

Move to the client folder:

```bash
cd Client
```

### Install dependencies

```bash
npm install
npm install axios
npm install react-toastify
npm install motion
npm install -D tailwindcss@3 postcss autoprefixer
```

### Initialize TailwindCSS

```bash
npx tailwindcss init -p
```

> 🧹 **Optional Cleanup**
>
> * Delete `App.css`
> * Clear `App.jsx` (type `rafce` and press Enter for a clean component template)

### Run the client

```bash
npm run dev
```

---

## ⚙️ Server Setup

Move to the server folder:

```bash
cd Server
```

### Initialize and install dependencies

```bash
npm init -y
npm i express cors dotenv nodemon form-data jsonwebtoken mongoose axios bcrypt razorpay
```

### Add module type

In your `package.json`, include:

```json
"type": "module"
```

### Run the server

```bash
npm run server
```

---

## 🗄️ Database Setup (MongoDB Atlas)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database).
2. Choose the **Free Tier**, select **Google Cloud**, and deploy your cluster.
3. Copy the **MongoDB connection URL**.
4. Add it to your `.env` file inside the **Server** folder.
5. In **Network Access**, allow connections from anywhere (`0.0.0.0/0`).
6. In `mongodb.js`, connect using:

   ```js
   await mongoose.connect(`${process.env.MONGODB_URI}/pixora`);
   ```

---

## 🔑 Environment Variables

Create a `.env` file inside the **Server** folder with:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```

---

## 📁 Folder Structure

```
PIXORA/
│
├── Client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── vercel.json
│
├── Server/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── vercel.json
│
└── README.md
```

---

## 🧠 Future Enhancements

* 🖼️ User image gallery with sharing options
* 🎨 Advanced AI models (Stable Diffusion / Flux / DALL·E integration)
* 📂 Download and history feature
* 🚀 Cloud deployment (Render + Vercel combo)

---

## 🧑‍💻 Deployment Notes

* **Frontend:** Deployed on [Vercel](https://vercel.com/) using `Client/vercel.json`.
* **Backend:** Also deployable via Vercel or Render (`Server/vercel.json` config included).
* Update API endpoints in the frontend based on your deployment URLs.

---

## 🤝 Contributing

Contributions are always welcome!
If you’d like to add new features or fix bugs, feel free to fork this repo and create a pull request.

---

## 🪪 License

This project is open-source under the **MIT License**.

---

## 🧾 Markdown Guide (for Reference)

| Markdown syntax | What it becomes on GitHub        |
| --------------- | -------------------------------- |
| `# Pixora`      | Big main heading                 |
| `## Features`   | Smaller section heading          |
| `**text**`      | **bold text**                    |
| `- item`        | bullet point                     |
| ```bash ... ``` | code block with syntax highlight |

---

**Made with ❤️ by [Your Name]**

---

✅ Just copy all this → paste into your `README.md` → save → push.
GitHub will render it perfectly with headings, bold text, and code formatting.
# Pixora
