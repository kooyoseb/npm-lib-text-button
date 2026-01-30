# @kooyoseb/text-button

Turn plain text into a clickable button on websites.

No `<button>`, no `<a>`.
Just text — but clickable.

---

## ✨ Features

- Make any text clickable
- Execute JavaScript functions on click
- Redirect to another page
- Optional hover effects (color / underline)
- Keyboard accessible (Enter / Space)
- No dependencies
- Framework agnostic (works with React, Vue, plain JS, etc.)

---

## 📦 Installation

```bash
npm install @kooyoseb/text-button
```

---

## 🚀 Basic Usage

```html
<span id="start">▶ Start</span>

<script type="module">
  import { textButton } from "@kooyoseb/text-button";

  textButton("#start", {
    onClick() {
      alert("Clicked!");
    }
  });
</script>
```

---

## 🔧 Options

```js
textButton(target, options);
```

### `target`
- `string` (CSS selector)
- or `HTMLElement`

### `options`

| Option | Type | Default | Description |
|------|------|---------|-------------|
| `onClick` | `function` | `undefined` | Function executed on click |
| `redirect` | `string` | `undefined` | Redirect URL |
| `cursor` | `string` | `"pointer"` | Mouse cursor style |
| `disabled` | `boolean` | `false` | Disable interaction |
| `hover.enabled` | `boolean` | `true` | Enable / disable hover effect |
| `hover.color` | `string` | `undefined` | Text color on hover |
| `hover.underline` | `boolean` | `false` | Underline on hover |

---

## 🎨 Hover Examples

### Disable hover effect
```js
textButton("#text", {
  hover: {
    enabled: false
  }
});
```

### Enable hover with color and underline
```js
textButton("#text", {
  hover: {
    enabled: true,
    color: "blue",
    underline: true
  }
});
```

---

## 🔗 Redirect Example

```js
textButton("#login", {
  redirect: "/login"
});
```

---

## ♿ Accessibility

- Uses `role="button"`
- Focusable with `tabindex="0"`
- Triggerable with:
  - `Enter`
  - `Space`

---

## 🧪 Supported Environments

- Modern browsers
- ES module compatible environments
- React / Vue / Svelte / Vanilla JS

---

## 📄 License

MIT © kooyoseb
