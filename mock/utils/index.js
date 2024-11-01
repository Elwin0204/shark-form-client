const { Random } = require("mockjs");
const { join } = require("path");
const fs = require("fs");

/**
 * @description 随机生成图片url
 * @param width
 * @param height
 * @returns {string}
 */
function createRandomImage(width = 50, height = 50) {
  return `https://picsum.photos/${width}/${height}?random=${Random.guid()}`;
}

/**
 * @description 处理controller目录下模块
 */
function handleMockArr() {
  const mockArr = [];
  const getFiles = (jsonPath) => {
    const jsonFiles = [];
    const findJsonFile = (path) => {
      const files = fs.readdirSync(path);
      files.forEach((item) => {
        const fPath = join(path, item);
        const stat = fs.statSync(fPath);
        if (stat.isDirectory()) findJsonFile(item);
        if (stat.isFile()) jsonFiles.push(item);
      });
    };

    findJsonFile(jsonPath);
    jsonFiles.forEach((item) => mockArr.push(`./controller/${item}`));
  };

  getFiles("mock/controller");
  return mockArr;
}

module.exports = {
  createRandomImage,
  handleMockArr,
};
