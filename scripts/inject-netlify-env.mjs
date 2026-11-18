import fs from "node:fs";
import path from "node:path";

const target = process.argv[2] || "dist";
const file = path.join(target, "runtime-config.js");

const config = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  loginUrl: process.env.VITE_APP_LOGIN_URL,
};

fs.writeFileSync(file, `window.__APP_CONFIG__ = ${JSON.stringify(config)};\n`);
console.log(`Runtime configuration written to ${file}`);
