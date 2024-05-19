---
title: 'Website Accessibility with CSS'
pubDate: '04-16-2022'
tags: ['css', 'beginner']
---

**What is website accessibility?**
Some users on your sites will use screen readers, only use a keyboard to navigate, use screen magnification, use speech input software, or use an older version of their browser. In CSS there are a number of ways you can make your sites accessible to these users.

- Focus styles
- Use `rem` for font sizing
- Browser prefixes

**Focus Styles**
Users who use only a keyboard to navigate will often use the Tab key to traverse websites. When Tab targeting different elements, the `focus` pseudo class is used to show which element is currently selected.

When I first started web development I would disable the focus outline because I thought it looked ugly, not knowing what it was really for. This is definitely a bad practice. A good alternative to disabling it, is the set your own focus behavior. This way elements that are focused will still be accessible to Tab users, and the focus outline or border will fit the color pallet of your site.

```css
*:focus {
  outline: none;
  border: 2px dotted blue;
}
```

**Use rem for Font Sizing**
The `rem` value will always be equal to the root elements `font-size`. If the default font size is 16px, then `1rem = 16px`. If the default font size is not explicitly set, then 1rem will be equal to the browser default font size.

If a user adjusts the font-size of their browser, then font-size set with rem will scale appropriately. Font sizes set with px will not be adjusted, which is bad for accessibility.

```css
.my-class {
  font-size: 1.5rem; 
  /*default font-size = 16px, so 1.5rem = 24px*/
}
```

**Browser Prefixes**
Not all CSS properties are available for all browsers. For example, the property `text-align-last` is not supported in any version of Safari. A good site for checking the availability of CSS properties on browsers is [https://caniuse.com/](https://caniuse.com/). 

You can use browser prefixes in your CSS to make these newer CSS features compatible with older browsers. Here are the four most common ones:

- `-moz-` for Firefox
- `-webkit-` for Android, Safari and Chrome
- `-o-` for Opera
- `-ms-` for Internet Explorer

```css
.my-class {
  -moz-text-align-last: right;
  -webkit-text-align-last: right;
  -o-text-align-last: right;
  -ms-text-align-last: right;
  text-align-last: right;
}
```
You can also use an [autoprefixer](https://www.npmjs.com/package/autoprefixer) package to make this process easier.

This article covered a few of the main ways to make your site more accessible with CSS, but this article only scratches the surface. A resource I recommend is the Web Content Accessibility Guidelines (WCAG) [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)