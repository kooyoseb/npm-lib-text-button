/**
 * @kooyoseb/text-button
 * Turn plain text into a clickable button on websites
 */

export function textButton(target, options = {}) {
  // 대상 요소 찾기
  const el =
    typeof target === "string"
      ? document.querySelector(target)
      : target;

  if (!el) {
    throw new Error("text-button: target not found");
  }

  const {
    onClick,
    redirect,
    cursor = "pointer",
    hover = {},
    disabled = false
  } = options;

  // 비활성화 상태
  if (disabled) {
    el.style.opacity = "0.5";
    el.style.pointerEvents = "none";
    return;
  }

  // 기본 스타일
  el.style.cursor = cursor;
  el.style.userSelect = "none";

  // 접근성 설정
  el.setAttribute("role", "button");
  el.setAttribute("tabindex", "0");

  // ===== hover 옵션 처리 =====
  const {
    enabled = true,     // hover 전체 ON/OFF
    color,              // hover 시 색상
    underline           // hover 시 밑줄
  } = hover;

  let originalStyle = null;

  if (enabled) {
    // 원래 스타일 저장
    originalStyle = {
      color: el.style.color,
      textDecoration: el.style.textDecoration
    };

    el.addEventListener("mouseenter", () => {
      if (color) el.style.color = color;
      if (underline) el.style.textDecoration = "underline";
    });

    el.addEventListener("mouseleave", () => {
      el.style.color = originalStyle.color;
      el.style.textDecoration = originalStyle.textDecoration;
    });
  }

  // ===== 클릭 처리 =====
  el.addEventListener("click", (e) => {
    e.preventDefault();

    if (typeof onClick === "function") {
      onClick(e);
    }

    if (redirect) {
      window.location.href = redirect;
    }
  });

  // ===== 키보드 접근성 (Enter / Space) =====
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      el.click();
    }
  });
}
