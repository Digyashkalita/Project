import React from 'react'
import ReactDom from 'react-dom'
//css
import "./index.css" ;

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

//books array
const books=[
          {
        id:1,
        img:"https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg" ,
        title: "Atomic Habits: The life-changing million copy bestseller",
        author: "James Clear"
        },
        {
        id:2,
        img:"https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg" ,
        title: "Ikigai: The Japanese secret to a long and happy life",
        author: "Héctor García, Francesc Miralles "
        },
        {
        id:3,
        img:"https://images-eu.ssl-images-amazon.com/images/I/713jIoMO3UL._AC_UL200_SR200,200_.jpg" ,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari"
        }, 
]


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
//Create Book component
const Book = ({img, title, author}) =>{
// const Book = (props) =>{
// const Book = (/*{img, title, author}*/) =>{

// const {img, title, author} = props.book;
// attribute, onMousehandler
// onClick, onMouseOver

  return (
    <article className="book"   onMouseOver ={ ()=>{
      console.log(title)
    }}>
       <img src={img} alt="" />
       <h1>{title}</h1>
      {/* {props.children} */} 
      <h4>{author}</h4>
      {/* <p>{props.job}</p>
      <p>{props.title}</p> */}
    </article>
  )
}


// const Image = () => {
//   return(
//   <img src="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg" alt=""/>
//   )
// }

// const Title = () =>{
//   return(
//     <h1>Atomic Habits: The life-changing million copy bestseller</h1>
//   )
// }

// const  Author = () =>{
//   return(
//     <h4 style={{color: '#617d98', fontSize:"0.75rem", marginTop:"0.25rem"}}>James Clear</h4>
//   )
// }

ReactDom.render(<BookList/>, document.getElementById("root"));  