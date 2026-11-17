import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 사용자 사이트(98woonho.github.io)라 루트 경로에서 서비스된다.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
