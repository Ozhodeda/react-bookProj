import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books, onRemoveBook }) {
    return (
        <ul className="book-list">
            {books.map(book => (
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => onRemoveBook(book.id)}>Remove Book</button>
                    </section>
                </li>
            ))}
        </ul>
    )
}