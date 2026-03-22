# ChaiWindCSS

A lightweight, utility-first CSS engine built with pure JavaScript — inspired by Tailwind, but brewed your way ☕

---

## ✨ Features

* 🧠 Custom utility class parser
* ⚡ No build tools required
* 🌐 Works directly in browser
* 🎯 Simple class-based styling
* 🔌 Can be used via CDN

---

## 📦 Installation

### Option 1: CDN (Recommended)

```
### Option 2: Local Setup

```bash
npm install @chirag/chai_wind
```

---

## 🚀 Usage

Simply use utility classes in your HTML:
You just need to modify the last value according to your need.
```html
<h1 class="cfont_size_40 ctext_red">Hello 🚀</h1>

<div class="cdisplay_flex">
  <div class="cbackground_color_blue cheight_100 cwidth_100"></div>
  <div class="cbackground_color_pink cheight_100 cwidth_100"></div>
</div>
```

---

## 🎨 Available Utilities

### 📝 Text

* `ctext_red`
* `cfont_size_40`
* `cfont_style_cursive`

### 📦 Layout

* `cdisplay_flex`
* `cflex_direction_column`
* `cflex_justifycontent_center`
* `cflex_alignitems_center`

### 📐 Spacing

* `cmargin_20`
* `cmargin_top_10`
* `cpadding_15`

### 📏 Size

* `cheight_100`
* `cwidth_200`

### 🎨 Background

* `cbackground_color_blue`

### 🧱 Border
 its adviced to follow this order:

* `cborder_1_solid_black`

### 🔲 Flex Utilities

* `cgap_10`

---

## ⚙️ How It Works

ChaiWindCSS scans all elements and applies styles dynamically based on class , the most important is the last thing that you are writing.

Example:

```js
ctext_red → color: red;
cfont_size_40 → font-size: 40px;
```

---

## 🧪 Development

Clone the repo:

```bash
git clone https://github.com/Chirag878/Chai-tailwind
cd chai-tailwind
```

---


---



## 📄 License

MIT License

---

## 💡 Inspiration

Inspired by Tailwind CSS and a big thanks to Hitesh sir for pushing us to make this.
