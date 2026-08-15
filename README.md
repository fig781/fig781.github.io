# Jekyll Site Setup

This website has been converted to use Jekyll, a static site generator. The site continues to be hosted on GitHub Pages.

## Project Structure

```
/workspace/
├── _config.yml          # Jekyll configuration file
├── Gemfile              # Ruby dependencies for GitHub Pages
├── index.md             # Home page content
├── styles.css           # Custom CSS styles
├── public/              # Static assets (images, etc.)
├── _layouts/            # Jekyll layouts
│   ├── home.html        # Home page layout
│   ├── articles.html    # Articles listing page layout
│   └── article.html     # Individual article layout
├── _articles/           # Article markdown files
│   └── *.md             # Each MD file becomes an article page
├── articles/
│   └── index.md         # Articles index page (/articles/ route)
└── _posts/              # Legacy posts directory (kept for reference)
```

## Features

- **Home Page**: Displays development skills, projects, and resume sections
- **Articles Page**: Lists all articles from the `_articles` collection at `/articles/`
- **Individual Articles**: Each markdown file in `_articles/` creates a separate article page at `/articles/:title/`
- **Responsive Design**: Maintains the original responsive design with Bootstrap 5
- **GitHub Pages Compatible**: Ready to deploy to GitHub Pages

## Local Development

To run the site locally:

1. Install Ruby and Bundler (if not already installed)
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Run the Jekyll development server:
   ```bash
   bundle exec jekyll serve
   ```
4. Open your browser to `http://localhost:4000`

## Creating New Articles

To add a new article:

1. Create a new markdown file in the `_articles/` directory
2. Add front matter at the top of the file:
   ```yaml
   ---
   title: 'Your Article Title'
   pubDate: 'MM-DD-YYYY'
   tags: ['tag1', 'tag2']
   ---
   ```
3. Write your article content in Markdown format below the front matter
4. The article will automatically be available at `/articles/your-article-title/`

## Deployment to GitHub Pages

The site is configured for GitHub Pages deployment. Simply push your changes to the main branch:

```bash
git add .
git commit -m "Update site"
git push origin main
```

GitHub Pages will automatically build and deploy your Jekyll site.

## Configuration

Key settings in `_config.yml`:
- `title`: Site title
- `description`: Site description
- `url`: Your GitHub Pages URL
- `collections.articles`: Configures the articles collection
- `plugins`: GitHub Pages compatible plugins

## Notes

- The old `index.html` and `articles.html` have been replaced with Jekyll templates
- All existing articles from `_posts/` have been copied to `_articles/`
- The site uses the same CSS styles with additional styles for articles
- Bootstrap 5 is loaded via CDN for consistency with the original design
