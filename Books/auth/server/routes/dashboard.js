const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

//all todos and name

router.get("/", authorize, async (req, res) => {
  try {
    // const user = await pool.query(
    //   "SELECT user_name FROM users WHERE user_id = $1",
    //   [req.user.id] 
    // ); 
    
    const user = await pool.query("SELECT u.user_name, b.book_id, b.title, b.author, b.page FROM users AS u LEFT JOIN book AS b ON u.user_id = b.user_id WHERE u.user_id = $1 ", [req.user.id])

    
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// create a book

router.post("/books", authorize, async (req, res) => {
  try {

      const { title } = req.body;
      const { author } = req.body;
      const { page } = req.body;
      const newBook = await pool.query(
          "INSERT INTO book (user_id, title, author, page) VALUES($1, $2, $3, $4) RETURNING *",  
          [req.user.id, title, author, page] 
          );

      res.json(newBook.rows[0])

  }   catch (error) {
      console.error(err.message)
  }
})

// updatea a book

router.put("/books/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const { author } = req.body;
    const { page } = req.body
    const updateBook = await pool.query(
      "UPDATE book SET title = $1, author = $2, page = $3  WHERE book_id = $4 AND user_id = $5 RETURNING * ",
      [title, author, page, id, req.user.id]
    );

    if(updateBook.rows.length === 0) {
      return res.json("This todo is not yours")
    }

    res.json("Book was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a book

router.delete("/books/:id", authorize, async (req, res) => {
  try {
      const { id } = req.params
      const deleteBook = await pool.query(
          "DELETE FROM book WHERE book_id = $1 AND user_id = $2 RETURNING *",
          [id, req.user.id]
      )

        if(deleteTodo.rows.length === 0) {
          res.json("This Todo is not yours")
        }

      res.json("BOOK was deleted")
  } catch (err) {
      console.error(err.message)
  }
})

module.exports = router;
