const marked = require('marked');

module.exports = source => {
  // markdown转html字符串
  const _html = marked(source);

  return `module.exports = ${JSON.stringify(_html)}`
}