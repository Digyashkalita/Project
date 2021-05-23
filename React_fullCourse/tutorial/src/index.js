import React from 'react'
import ReactDom from 'react-dom'
import {books} from './books';
import Book from './Book'
//css
import "./index.css" ;


//Create booklists
function BookList(){
  return(
    <section className="booklist">
      {books.map((book) =>{
        return <Book key={book.id} /*book ={book}*/ {...book}></Book>
      })}
    </section>
  )
}
// setup vars
// const author ="James Clear";
// const title="Atomic Habits: The life-changing million copy bestseller";
// const img="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg" ;
//create objects
// const firstBook= {
// img:"https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg" ,
// title: "Atomic Habits: The life-changing million copy bestseller",
// author: "James Clear"
// }
// const secondBook= {
// img:"https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg" ,
// title: "Ikigai: The Japanese secret to a long and happy life",
// author: "Héctor García, Francesc Miralles "
// }



//Stateless functional component
//always return JSX

//JSX Rules
//return single element
//div / section / article or Fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting

//Nested Components, React tools

// function BookList(){
//   return (<section className="booklist">
//                 <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
//                   <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores quia assumenda et vitae id asperiores eos qui exercitationem voluptatem.</h1>
//                 </Book>
//                  <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
//                 {/* <Book/>
//                 <Book/>
//                 <Book/>
//                 <Book/>
//                 <Book/>
//                 <Book/>
//                 <Book/>
//                 <Book/> */}
//             </section>
//             );
// }



ReactDom.render(<BookList/>, document.getElementById("root"));  