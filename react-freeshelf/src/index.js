import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import data from './data.js'
import Book from './book.js'
import './app.css'
// import Button from 'react-bootstrap/Button';


const App = () => {
  
  const[books] = useState(data)
  return (
    <main>
      <h1>FREE SHELF</h1>
      {books.map((book) => (
        <Book title={book.title} author={book.author} description={book.shortDescription} cover={book.coverImageUrl}/>
      ))}
    </main>
  )
}



ReactDOM.render(
    <App />,
  document.querySelector("#root")
)
