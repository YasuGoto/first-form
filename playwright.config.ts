import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./test",
  timeout: 30000,
  reporter: [["html", { open: "never" }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  snapshotSuffix: process.platform as string, // 型キャストで解消
});
