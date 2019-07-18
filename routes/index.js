var express = require('express');
var router = express.Router();
const Utility = require('../utils/minifi');
var cleaner = require('clean-html');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('allInOne', { beauty: '', result: '', title: '', error: '' });
});

// Perfios Extraction Utility POST ACTION
router.post('/', function (req, res, next) {
  if (req.body.textminifi) {
    res.render('allInOne', { beauty: '', result: Utility.minify(req.body.userContent), title: '', error: '' });
  }
  else if (req.body.htmlBeautify) {
    res.render('allInOne', { result: '', beauty: Utility.beautify(req.body.userContent), title: '', error: '' });
  }
  else if (req.body.jsonBeautify) {
    res.render('allInOne', { result: '', beauty: Utility.beautifyJSON(req.body.userContent), title: '', error: '' });
  }
  else if (req.body.removeSpl) {
    res.render('allInOne', { result: '', beauty: Utility.beautify(Utility.removeSpl(req.body.userContent)), title: '', error: '' });
  }
  else if (req.body.textminifijs) {
    res.render('allInOne', { result: '', beauty: Utility.minifyJS(req.body.userContent), title: '', error: '' });
  }
  else {
    res.render('allInOne', { result: '', beauty: '', title: '', error: 'All Clear' });
  }
})
module.exports = router;
