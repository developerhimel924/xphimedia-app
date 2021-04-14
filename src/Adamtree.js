import React from "react";
import BookDetails from "./BooksDetails";

const Adamtree = () => {
  return (
    <BookDetails
      title="Ad'am Tree of Life"
      booksdetails="This book was written as a compliment to the book Who is Jesus? The Son of Perdition 2Thess2:3-10 which is why it is free with purchase for a limited time. It is recommended that you first purchase the Who is Jesus? because it brings a deeper understanding."
      author="Elimelech Hebrew"
      image="https://firebasestorage.googleapis.com/v0/b/xphimedia.appspot.com/o/1.png?alt=media&token=5e8282fa-23e5-48a9-92f9-c696ba830b05"
      authorimage="https://firebasestorage.googleapis.com/v0/b/xphimedia.appspot.com/o/author-img.jpg?alt=media&token=0bdeaa40-b794-446d-9bf0-efffb496d6e2"
      price1={0}
      price2={0}
      preordertext=""
      stock="In Stock"
    />
  );
};

export default Adamtree;
