import { defineConfig, loadEnv, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: [
        { find: "@components", replacement: "/src/components" },
        { find: "@", replacement: "/src" },
      ],
    },
    build: {
      outDir: "build",
    },
    define: {
      "process.env": process.env,
    },
  });
};
