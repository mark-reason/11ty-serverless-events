const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = (config) => {
  config.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "onrequest", // The serverless function name from your permalink object
    functionsDir: "./netlify/functions/",
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
