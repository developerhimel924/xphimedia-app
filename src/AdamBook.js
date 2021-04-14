import React from "react";
import BookDetails from "./BooksDetails";

const AdamBook = () => {
  return (
    <BookDetails
      title="Who was Ad'am? A Book of Remebrance Mal 3:16"
      booksdetails="This book is one for the ages, it reveals mysteries of Ad’am never known to man until now. Hebrew the servant and message of YHWH our Elohim was taken by the Spirit YHWH in a spiritual vortex for a span of three years 1995-1998 where he was taught during this time of the only begotten and beloved son of Elohim, Ad’am and the secrecies of the Torah. From this experience Hebrew wrote about his journey of enlightenment and formulated his testimony in his unprecedented book, Who was Ad’am? A Book of Remembrance as YHWH the Spirit of Elohim commanded him to do. This book Who was Ad’am? A Book of Remembrance reveals the undeniable truth of the death and resurrection of Ad’am as never before in the history of mankind."
      author="Elimelech Hebrew"
      image="https://firebasestorage.googleapis.com/v0/b/xphimedia.appspot.com/o/3.png?alt=media&token=5098d1c6-d09b-4b37-b1f4-95543adbb264"
      authorimage="https://firebasestorage.googleapis.com/v0/b/xphimedia.appspot.com/o/author-img.jpg?alt=media&token=0bdeaa40-b794-446d-9bf0-efffb496d6e2"
      price1={18.99}
      price2={12.99}
      preordertext=""
      stock="In Stock."
    />
  );
};

export default AdamBook;
