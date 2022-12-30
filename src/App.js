import React from 'react';
import './App.css';
import AddBook from './components/AddBook';
import Book from './components/Book';

function App() {
  const [formData, setFormData] = React.useState({
    title: '',
    author: '',
    description: ''
})
  const [books, setBooks] = React.useState(
    JSON.parse(localStorage.getItem("books")) || []
  )
  const [count, setCount] = React.useState(1)

  React.useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
}, [books])

  console.log(count)

  const displayBooks = books.map(book => {
    return (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
        desription={book.desription}
        id={book.id}
        deleteBook={deleteBook}
      />
    )
  })

  function submitF() {
    setBooks(prevState => {
        return ([
            ...prevState,
            {
                title: formData.title,
                author: formData.author,
                description: formData.description,
                id: count
            }
        ])
    })
    setCount(count + 1)
}

function deleteBook(index) {
  const bookList = [...books]
  const reducedList = bookList.splice(index)
  localStorage.setItem('books', JSON.stringify(reducedList))
  setBooks(reducedList)
}

  return (
    <div className="App">
      <h1>Library</h1>
      <AddBook
        setBooks={setBooks}
        submitF={submitF}
        formData={formData}
        setFormData={setFormData}
      />
      <div className='bookShelf'>
        {displayBooks}
      </div>
    </div>
  );
}

export default App;
