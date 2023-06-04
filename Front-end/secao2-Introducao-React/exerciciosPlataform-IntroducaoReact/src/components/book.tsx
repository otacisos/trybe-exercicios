// type BookProps = {
//   book: {
//     title: string
//     pages: number
//     isRead: boolean,
//     isFavorite: boolean
//   }

// };

// function Book({ book }: BookProps) {
//   return (
//     <li>
//       {book.title}
//       {' '}
//       {book.pages}
//     </li>
//   );
// }

// export default Book;
type BookProps = {
  book:{
    title: string,
    pages: number,
    isRead: boolean,
    isFavorite: boolean
  }

};
function Book({ book } : BookProps) {
  return (
    <li>
      <span>
        {`${book.title} ${book.pages} páginas`}
      </span>
    </li>
  );
}

export default Book;
