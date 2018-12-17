const { parse } = require('url');

module.exports = (req, res) => {
  const { query } = parse(req.url, true);
  const { text = 'Use query `text`' } = query;
  res.end(text);
};
