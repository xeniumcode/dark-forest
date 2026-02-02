# Dark Forest

A minimal, clean Hugo theme with monospace typography and dark/light mode support.

## Features

- **Minimal Design**
- **Monospace Typography**
- **Dark/Light Mode**
- **RSS Feed**
- **Customizable Favicon** with dark forest default 

## Installation

### Method 1: Git Submodule (Recommended)

```bash
cd your-hugo-site
git init  # if not already a git repo
git submodule add https://github.com/xeniumcode/dark-forest.git themes/dark-forest
```

### Method 2: Manual Download

Download the theme and extract it to `themes/dark-forest`.

## Configuration

Copy the `example.toml` from the theme directory to your site's root as `hugo.toml`:

```bash
cp themes/dark-forest/example.toml hugo.toml
```

Then customize it:

## Creating Content

### Homepage

Create `content/_index.md`:

```markdown
---
title: Home
---

Hey, I am [Your Name]. Welcome to my blog!

I write about technology, programming, and other interesting things.
```

### Posts

Create a new post:

```bash
hugo new content posts/my-first-post.md
```

## Customization

### Favicon

The theme includes a default dark forest themed favicon. You can customize it in your Hugo config:

```toml
[params]
favicon = "/images/my-favicon.svg"
```

If you don't specify a custom favicon, the theme will use the default dark forest SVG favicon located at `/favicon.svg`.

### Colors

Edit `themes/nkmason-like/assets/css/main.css` to customize colors:

```css
:root {
  --bg-color: #fafafa;
  --text-color: #171717;
  --accent-color: #525252;
  --muted-color: #737373;
}

[data-theme="dark"] {
  --bg-color: #0a0a0a;
  --text-color: #e5e5e5;
  --accent-color: #a3a3a3;
  --muted-color: #737373;
}
```

## License

MIT License
