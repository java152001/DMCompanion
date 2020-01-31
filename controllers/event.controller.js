const db = require("../models");
const router = require("express").Router();

// Read All
router.route("/").get(function(req, res) {
    db.Event
        .find()
        .sort({ date: -1 })
        .then(dbModel => {
            // console.log(dbModel)
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
});

//Find One by Day
router.route("/one/:month&:day").get(function(req, res) {
    console.log(req.params.month, req.params.day)
    db.Event
        .find({ month: req.params.month, day: req.params.day })
        .then(dbModel => {
            // console.log(dbModel)
            res.json(dbModel)
        })
})

// Create One
router.route("/").post((req, res) => {
    db.Event
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Update One
router.route("/:id").put((req, res) => {
    db.Event
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Delete One
router.route("/:id").delete((req, res) => {
    db.Event
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;