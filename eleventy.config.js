module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("styles.css");
  
  // Create a collection for articles
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_articles/*.md");
  });
  
  // Watch markdown files
  eleventyConfig.addWatchTarget("_articles/");
  
  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/"
  };
};
