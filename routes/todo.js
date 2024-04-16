const router = require("express").Router();
const Todo = require("../models/Todo");


// routes
router.post("/add/todo", (req, res) => {
    console.log(req.body)
    const { todo } = req.body;
    const newTodo = new Todo({ todo });

    // save the todo
    newTodo
      .save()
      .then((data) => {
        console.log("Successfully added todo!", data);
        res.status(200).send({
          message:"I write",
          data: {
            todo: data.todo,
            _id: data._id.toString()
          }
        })
      })
      .catch((err) => console.log(err));
  })

  // .get("/delete/todo/:_id", (req, res) => {
  //   const { _id } = req.params;
  //   Todo.deleteOne({ _id })
  //     .then(() => {
  //       console.log("Deleted Todo Successfully!");
  //       res.redirect("/");
  //     })
  //     .catch((err) => console.log(err));
  // });

  router.delete('/delete/todo/:_id', (req, res) => {
    const { _id } = req.params;
    console.log(_id)
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.json({message:"Deleted Successfully"})
      })
      .catch((err) => console.log(err));
  

});




module.exports = router;