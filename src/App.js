import React from 'react';
import './App.css';
import Book from './components/Book';

function App() {
  const [books, setBooks] = React.useState([
    {
      title: 'Meditations',
      author: 'Marcus Aurilus',
      desription: 'Chapter 1: mostly just agknowledgments. Chapter 2: umm trying to remember, low key fuck these dumb bitches. I cant really take it anymore. There are killing me. I get how hard life is and how hard it is to be a human, but for fucks sake you people are dumb. Focus tf up and figure some shit out. This reality is some fucking bs and I can barely believe it. Fr this kinda doesnt seem real'
    },
    {
      title: 'Before The Big Bang',
      author: 'Laura'
    }
  ])

  const displayBooks = books.map(book => {
    return (
      <Book
        title={book.title}
        author={book.author}
        desription={book.desription}
      />
    )
  })

  return (
    <div className="App">
      <h1>Library</h1>
      <div className='bookShelf'>
        {displayBooks}
      </div>
    </div>
  );
}

export default App;
