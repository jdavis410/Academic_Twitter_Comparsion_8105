const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

var SectionModel = require('../models/section.js');


// Get all sections
router.get('/sections', (req, res) => {
    SectionModel.find({}, function(err, sections) {
      if (err) throw err;

      // object of all the users
      console.log(sections);
      res.json(sections);
    });
});


router.post('/sections', (req, res) => {
    var newSection = SectionModel({
      id: req.body.courseNum,
      courseNum: req.body.courseNum,
      name: req.body.name,
      roster: req.body.roster,
      topics: req.body.topics
    });

    newSection.save(function(err) {
        if (err) throw err;

        console.log('section created!');

    });


});


module.exports = router;