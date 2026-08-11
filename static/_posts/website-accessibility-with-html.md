---
title: 'Website Accessibility with HTML'
pubDate: '03-26-2022'
tags: ['html', 'beginner']
---

**What is website accessibility?**
Some users on your sites will use screen readers, only use a keyboard to navigate, use screen magnification or use speech input software. In HTML there are a number of ways you can make your sites accessible to these users.

- Website language
- Semantic HTML
- Proper HMTL headings
- Image alt attribute
- Aria labels

**Website Language**
In your HTML document you can declare the language used on the web page. This will be used by browsers and search engines. You can specify the language of the HTML document, and the language of individual elements.

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <p lang="fr">Ce paragraphe est défini en français.</p>
  </body>
</html>
```

**Semantic HTML**
Semantic HTML is the use of HTML tags to convey the meaning of the information on the page rather than simply presenting it. A few tags that demonstrate this are `<h1>`, `<button>`, `<article>`, `<footer>` and `<header>` to name a few. This is important for screen readers, or users who only use a keyboard to navigate the site.

```html
<!-- Bad example -->
<div>
  <div>Header</div>
  <div>Click Here</div>
  <span>Article information</span>
</div>

<!-- Good example -->
<section>
  <h1>Header</h1>
  <button>Click Here</button>
  <article>Article information</article>
</section>
```

**Proper HTML headers**
Screen readers use header tags to navigate the site. These header tags are `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>` and `<h6>`. These header tags are used to show the relationships between different sections.

**Image alt attribute**
The `alt` text is displayed if the image cannot be displayed. The text should describe the image if the image contacts information. You can leave the `alt` text blank if the image is for decoration and does not contain information. If the image is used for a link, then the alt text should explain where the link goes.

```html
<img src="profilePic.png" alt="User profile image" />
<a href="https://twitter.com">
  <img src="twitterIcon.png" alt="Link to Twitter" />
</a>
<img src="background.png" alt="" />
```

**Aria labels**
The `aria-label` attribute is used to provide meaning to HTML elements where that meaning is missing. For example, usually a button will have meaning based on the text in-between the button tags, but in some cases this is not done. The `aria-label` is intended for interactive elements only.

```html
<button aria-label="Close">
  <svg></svg>
</button>
```

Here is some more info about accessibility in HTML: [https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
