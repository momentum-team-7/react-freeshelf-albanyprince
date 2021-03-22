import React, {useState} from 'react'


const Book = (props) => {
  const { title, author, description, cover, publisher, publicationDate, detailedDescription } = props
  const [readMore, setReadMore]=useState(false)
  const linkName=readMore?'Read Less << ':'Read More >>'
  const extraContent = <div><p>{publisher}</p><p>{publicationDate}</p><p>{detailedDescription}</p></div>
  // above variable stores present state conveying infor about expanded or collapsed state
  return (
    <div className="info">
      <img src={cover} alt='cover'></img>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{description}</p>
      <div>
        <button className="read-more-link" onClick={() => {setReadMore(!readMore)}}>{linkName}</button>
        {readMore && extraContent}
        

      </div>

      
   </div>  
  )
}





export default Book