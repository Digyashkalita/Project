import React from 'react'
import ReactDom from 'react-dom'
//css
import "./index.css" ;

// setup vars
// const author ="James Clear";
// const title="Atomic Habits: The life-changing million copy bestseller";
// const img="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg" ;
//create objects
const firstBook= {
img:"https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg" ,
title: "Atomic Habits: The life-changing million copy bestseller",
author: "James Clear"
}
const secondBook= {
img:"https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg" ,
title: "Ikigai: The Japanese secret to a long and happy life",
author: "Héctor García, Francesc Miralles "
}

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

function BookList(){
  return (<section className="booklist">
                <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
                 <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
                {/* <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/> */}
            </section>
            );
}

const Book = (props) =>{
  return (
    <article className="book">
       <img src={props.img} alt="" />
       <h1>{props.title}</h1>
       <h4>{props.author}</h4>
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