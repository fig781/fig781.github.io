module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/public");
  eleventyConfig.addPassthroughCopy("src/styles.css");

  // Collection for articles
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/articles/posts/*.md");
  });

  // Date filter
  eleventyConfig.addFilter("date", (dateObj) => {
    if (!dateObj) return '';
    const date = new Date(dateObj);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  });

  // Strip HTML filter for descriptions
  eleventyConfig.addFilter("stripHtml", (str) => {
    if (!str) return '';
    return str.replace(/<[^>]*>/g, '');
  });

  // Truncate filter
  eleventyConfig.addFilter("truncate", (str, length) => {
    if (!str) return '';
    str = str.replace(/<[^>]*>/g, ''); // Strip HTML first
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
