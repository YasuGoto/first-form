import { test, expect } from "@playwright/test";

test("画面全体のVRTテスト", async ({ page }) => {
  // ローカル Vite サーバーにアクセス
  await page.goto("http://localhost:5173");

  // 画面全体のスクショ
  const screenshot = await page.screenshot({ fullPage: true });

  // スナップショットと比較
  expect(screenshot).toMatchSnapshot("full-page.png");
});
