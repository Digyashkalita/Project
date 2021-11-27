import React from "react";

//Create Book component
const Book = ({ img, title, author }) => {
  // const Book = (props) =>{
  // const Book = (/*{img, title, author}*/) =>{

  // const {img, title, author} = props.book;
  // attribute, onMousehandler
  // onClick, onMouseOver

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      {/* {props.children} */}
      <h4>{author}</h4>
      {/* <p>{props.job}</p>
      <p>{props.title}</p> */}
    </article>
  );
};

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
export default Book;
