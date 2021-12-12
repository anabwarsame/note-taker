const fs = require("fs");

const readFromFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    // handle error
    console.log(error.message);
  }
};

module.exports = {
  readFromFile,
};
