# Velocity – AI Web Rebrand 🏃‍♂️⚡

Velocity is a modern **AI-inspired sports brand rebranding website** built using **Next.js (App Router)** and **Tailwind CSS**.  
The project demonstrates a complete **e-commerce flow** including product listing, cart management, checkout, and a demo payment success page.

---

## 🚀 Live Demo

👉 **Deployed on Vercel**  
🔗 https://future-fs-03-cyan.vercel.app/

---

## ✨ Features

- 🛍️ Product listing with modern UI
- 📦 Dynamic product detail pages
- 🛒 Fully functional cart system
- ➕➖ Increase / decrease product quantity
- 💾 Cart persistence using `localStorage`
- 💳 Checkout flow with demo payment success
- 🧾 Order summary invoice (demo)
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js App Router

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Deployment:** Vercel
- **Language:** TypeScript

---

## 📂 Project Structure

```bash
app/
 ├── page.tsx               # Home page
 ├── products/[id]/page.tsx # Dynamic product pages
 ├── cart/page.tsx          # Cart page
 ├── checkout/page.tsx      # Checkout page
 ├── payment-success/page.tsx
components/
 ├── Navbar.tsx
 ├── Footer.tsx
 ├── Toast.tsx
context/
 └── CartContext.tsx
data/
 └── products.ts
🧠 How the Cart Works

Cart state is managed using React Context API

Cart data is stored in localStorage

Quantity changes update both UI and stored data

Total price is dynamically calculated

⚠️ Note

This project uses a demo payment flow.
No real payments or authentication are implemented.

📦 Getting Started (Local Setup)
git clone https://github.com/aKshaykumarsingh1501/FUTURE_FS_03.git
cd velocity
npm install
npm run dev


Open:
👉 http://localhost:3000

📈 Future Improvements

🔐 Authentication (Login / Signup)

💳 Real payment gateway (Stripe)

📦 Backend database integration

🧾 Downloadable invoice

❤️ Wishlist feature

👨‍💻 Author

Akshay Kumar Singh
Built as part of an internship / learning project to demonstrate frontend development skills using Next.js.

⭐ Acknowledgements

Next.js Documentation

Tailwind CSS

Vercel Platform