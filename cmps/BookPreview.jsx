export function BookPreview({book}){
    return (
        <article className="book-preview">
          {/* {  console.log('book:',book)} */}
        <h2>Book Title: {book.title}</h2>
        <h4>Book Price: {book.listPrice['amount']}</h4>
        <img src={`../BooksImages/${book.id}.jpg`} alt="BookImg" />
    </article>
    )
}