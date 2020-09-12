const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db")


//middleware

app.use(cors());
app.use(express.json()); // => allows us to access the req.body

//ROUTES//

//get a book

app.get("/books/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const book = await pool.query("SELECT * FROM book WHERE book_id = $1", [
        id
      ]);
  
      res.json(book.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

//create book

app.post("/books", async (req, res) => {
    try {

        const { title } = req.body;
        const { author } = req.body;
        const { page } = req.body;
        const newBook = await pool.query(
            "INSERT INTO book (title, author, page) VALUES($1, $2, $3) RETURNING *",  
            [title, author, page] 
            );

        res.json(newBook.rows[0])

    }   catch (error) {
        console.error(err.message)
    }
})

//get all books

app.get("/books", async (req, res) => {
    try {
      const allBooks = await pool.query("SELECT * FROM book");
      res.json(allBooks.rows);
    } catch (err) {
      console.error(err.message);
    }
  });


//update a book

app.put("/books/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { title } = req.body;
      const { author } = req.body;
      const { page } = req.body
      const updateBook = await pool.query(
        "UPDATE book SET title = $1, author = $2, page = $3  WHERE book_id = $4",
        [title, author, page, id]
      );
  
      res.json("Book was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });

//delete book

app.delete("/books/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteBook = await pool.query(
            "DELETE FROM book WHERE book_id = $1",
            [id]
        )
        res.json("BOOK was deleted")
    } catch (err) {
        console.error(err.message)
    }
})


app.listen(5000, () => {
    console.log(`Server is startign on port 5000`)
})