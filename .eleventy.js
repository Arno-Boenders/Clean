module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/assets");

  eleventyConfig.addFilter("sortByOrder", (array) => {
    return array.sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addFilter("sortByDate", (array) => {
    return array.sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  eleventyConfig.addFilter("convertDate", (date) => {
    if (typeof date === "string") {
      date = new Date(date);
    }
    if (date instanceof Date && !isNaN(date)) {
      return `${date.getDate().toString().padStart(2, "0")}.${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}.${date.getFullYear()}`;
    }
  });

  eleventyConfig.addFilter("last3", (array) => {
    return array.slice(-3);
  });
  return {
    dir: {
      input: "src",
      output: "build",
    },
  };
};
