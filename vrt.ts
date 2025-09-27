// フォーム（まだ動作テスト用ではなく表示だけ）
const form = document.getElementById("simple-form") as HTMLFormElement;
const input = document.getElementById("name-input") as HTMLInputElement;
const greeting = document.getElementById("greeting") as HTMLParagraphElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  greeting.textContent = `Hello, ${input.value || "User"}!`;
});

// アコーディオン開閉
const accordionBtn = document.getElementById(
  "accordion-btn"
) as HTMLButtonElement;
const accordionContent = document.getElementById(
  "accordion-content"
) as HTMLDivElement;

accordionBtn.addEventListener("click", () => {
  accordionContent.classList.toggle("hidden");
});
