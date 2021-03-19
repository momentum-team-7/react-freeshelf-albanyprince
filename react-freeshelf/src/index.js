import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import data from './data.js'

console.log(data)

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

const Book = (props) => {
  const { title, author, description, cover } = props
  return (
    <div className="dev">
      <img src={cover} alt='cover'></img>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{description}</p>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.querySelector("#root")
)
