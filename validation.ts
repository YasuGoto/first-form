// 必須チェック
function isRequired(value: string): boolean {
  return value.trim() !== "";
}

// 文字数チェック（min～max）
function isLengthBetween(value: string, min: number, max: number): boolean {
  return value.length >= min && value.length <= max;
}

// メール形式チェック
function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// メッセージを表示するヘルパー
function showMessage(formId: string, message: string, isError: boolean) {
  const textEl = document.querySelector<HTMLParagraphElement>(
    `#${formId} .message`
  );
  if (!textEl) return;
  const errorClassName = "is-error";

  textEl.textContent = message;

  if (isError) {
    textEl.classList.add(errorClassName);
  } else {
    textEl.classList.remove(errorClassName);
  }
}

export function initForm1(formId: string) {
  const errorClassName = "is-error";
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = form.querySelector<HTMLInputElement>("#name");
    const emailInput = form.querySelector<HTMLInputElement>("#email");
    if (!nameInput || !emailInput) return;

    const name = nameInput.value;
    const email = emailInput.value;

    // 必須チェック
    if (!isRequired(name) && !isRequired(email)) {
      emailInput.classList.add(errorClassName);
      nameInput.classList.add(errorClassName);
      showMessage(formId, "名前とメールは必須です。", true);
      return;
    } else if (!isRequired(email)) {
      emailInput.classList.add(errorClassName);
      nameInput.classList.remove(errorClassName);
      showMessage(formId, "メールは必須です。", true);
      return;
    } else if (!isRequired(name)) {
      emailInput.classList.remove(errorClassName);
      nameInput.classList.add(errorClassName);
      showMessage(formId, "名前は必須です。", true);
      return;
    } else {
      nameInput.classList.remove(errorClassName);
      emailInput.classList.remove(errorClassName);
    }

    // 文字数チェック（名前3〜20文字）
    if (!isLengthBetween(name, 3, 20)) {
      nameInput.classList.add(errorClassName);
      showMessage(formId, "名前は3〜20文字で入力してください。", true);
      return;
    } else {
      nameInput.classList.remove(errorClassName);
    }

    // メール形式チェック
    if (!isEmail(email)) {
      emailInput.classList.add(errorClassName);
      showMessage(formId, "メールアドレスの形式が正しくありません。", true);
      return;
    } else {
      emailInput.classList.remove(errorClassName);
    }

    showMessage(formId, "送信成功！", false);
  });
}
