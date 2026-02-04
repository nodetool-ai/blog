# NodeTool AI Blog

Welcome to the NodeTool AI blog repository. This blog is built with Jekyll and features the same futuristic dark theme as the [NodeTool documentation](https://docs.nodetool.ai).

## Features

- **Jekyll Static Site Generator** - Industry-standard blog platform
- **NodeTool Documentation Theme** - Cyberpunk-inspired dark theme with gradient text
- **GitHub Pages** - Automated deployment on push to main branch
- **Responsive Design** - Mobile-friendly layout
- **SEO Optimized** - Meta tags and sitemap generation
- **RSS Feed** - Automatic feed generation for subscribers

## Local Development

### Prerequisites

- Ruby 3.2 or higher
- Bundler

### Setup

1. Clone the repository:
```bash
git clone https://github.com/nodetool-ai/blog.git
cd blog
```

2. Install dependencies:
```bash
bundle install
```

3. Build and serve the site locally:
```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000/blog/`

### Building the Site

To build the site without serving:
```bash
bundle exec jekyll build
```

The built site will be in the `_site/` directory.

## Creating Blog Posts

Blog posts are written in Markdown and stored in the `_posts/` directory.

### Post Filename Format

Posts must follow the naming convention: `YYYY-MM-DD-title.md`

Example: `2024-02-04-welcome.md`

### Post Front Matter

Each post requires YAML front matter at the top:

```yaml
---
layout: page
title: "Your Post Title"
date: 2024-02-04
categories: [category1, category2]
tags: [tag1, tag2, tag3]
---
```

### Example Post

```markdown
---
layout: page
title: "Getting Started with NodeTool"
date: 2024-02-04
categories: [tutorials]
tags: [nodetool, ai, workflows]
---

# Getting Started with NodeTool

Your content here...
```

## Configuration

Site configuration is in `_config.yml`. Key settings:

- `title`: Blog title
- `description`: Blog description
- `baseurl`: URL subpath (e.g., `/blog`)
- `url`: Base URL (e.g., `https://nodetool-ai.github.io`)
- `plausible_analytics_id`: (Optional) Plausible analytics tracking ID

## Deployment

The blog is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via the GitHub Actions workflow in `.github/workflows/jekyll.yml`.

## Theme Assets

The theme assets are located in:
- `_layouts/` - Page layouts
- `_includes/` - Reusable components (header, footer, sidebar)
- `assets/css/` - SCSS stylesheets
- `assets/js/` - JavaScript files

## Contributing

1. Create a new branch for your changes
2. Write your blog post in `_posts/`
3. Test locally with `bundle exec jekyll serve`
4. Commit and push your changes
5. Create a pull request

## License

This blog and its content are part of the NodeTool project. The theme is based on the NodeTool documentation theme.

## Links

- [NodeTool Main Repository](https://github.com/nodetool-ai/nodetool)
- [NodeTool Documentation](https://docs.nodetool.ai)
- [Blog Website](https://nodetool-ai.github.io/blog/)
