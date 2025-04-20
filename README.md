# 🚀 Project Setup & Development Guide

## 📌 Getting Started

### 1⃣ Install Dependencies  
Before running the project, install all required dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2⃣ Start the Development Server  
Run the following command to start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 3⃣ Open in Browser  
Once the server is running, open:  
👉 [http://localhost:3000](http://localhost:3000)  

---

**Run Drizzle-ORM**
```bash
npx drizzle-kit studio
```

**Run Inggest**
```bash
npx inggest@cli dev
```

## 🛠 Additional Commands

### 🔄 Restart the Server
If you make changes and need to restart:

```bash
npm run dev
```


### 🚀 Start the Production Server  
Once built, run the production server:

```bash
npm start
```

---

## 🛠 Troubleshooting  

- If you face dependency issues, try:
  ```bash
  rm -rf node_modules package-lock.json && npm install
  ```
- Ensure you have the correct Node.js version installed. **Recommended: `>=16.x`**  
- Check the logs for any errors and verify environment variables if needed.

---

Happy coding! 🎉🚀

