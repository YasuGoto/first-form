import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./test", // テストファイルの場所
  timeout: 30000, // テストタイムアウト
  reporter: [["html", { open: "never" }]], // HTMLレポート出力
  use: {
    headless: true, // ヘッドレスモードで実行
    viewport: { width: 1280, height: 720 },
  },
});
