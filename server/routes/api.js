const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

var SectionModel = require('../models/section.js');
var StudentModel = require("../models/student.js");


// Get all sections
router.get('/sections', (req, res) => {
    SectionModel.find({}, function(err, sections) {
      if (err) throw err;

      // object of all the users
      res.json(sections);
    });
});

router.get('/sections/:id', (req, res) => {
  SectionModel.findOne({courseNum: req.params.id}, function(err, sections) {
    if (err) throw err;

    // object of all the users
    console.log("get section with id");
    console.log(sections);
    console.log("-------------------")

    res.json(sections);
  });
});

//put new section
router.post('/sections', (req, res) => {
  console.log("NEW SECTION")
  console.log(req.body);
  console.log("-------")
  var newSection = SectionModel({
      id: req.body.courseNum,
      courseNum: req.body.courseNum,  
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      name: req.body.name,
      topics:  req.body.topics
    });

    newSection.save(function(err) {
        if (err) throw err;
        res.json(201, newSection);
    });


});

// Get student by id
router.get('/students/:id', (req, res) => {
  console.log("get student by id");
  console.log(req.params);
  StudentModel.findOne({id: req.params.id}, function(err, student) {
    if (err) throw err;

    console.log(student);
    res.json(student);
  });
});

// Get all students for section
router.get('/students/sectionID/:id', (req, res) => {
  console.log("get students");
  console.log(req.params);
  StudentModel.find({courseNum: req.params.id}, function(err, students) {
    if (err) throw err;

    // object of all the users
    console.log(students);
    res.json(students);
  });
});

//put new section
router.post('/students', (req, res) => {
  console.log("NEW STUDENT")
  console.log(req.body);
  console.log("-------")
  var newStudent = StudentModel({
        name :  req.body.name,
        handle:  req.body.handle,
        courseNum: req.body.courseNum,
        totTweets: req.body.totTweets,
        totRetweets: req.body.totRetweets,
        totLikes: req.body.totLikes,
        topicDist: req.body.topicDist,
        topicDistNum: req.body.topicDistNum
  })

    newStudent.save(function(err) {
        if (err) throw err;


    });


});


module.exports = router;