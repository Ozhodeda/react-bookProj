import { BookList } from "../cmps/BookList.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { bookService } from "../services/book.service.js"
import { BookDetails } from "./BookDetails.jsx"

const { useState, useEffect } = React

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState(null)
    // const [filterBy, setFilterBy] = useState(carService.getDefaultFilter())

    useEffect(() => {
        console.log('mount')
        // bookService.query(filterBy).then(books => setBooks(books))
        bookService.query().then(setBooks)
    }, [])

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId))
        })
    }

    function onSelectBookId(bookId) {
        setSelectedBookId(bookId)
    }

    // function onSetFilterBy(filterBy) {
    //     console.log('filterBy:', filterBy)
    //     setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    // }

    console.log('render')
    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            {!selectedBookId &&
                <BookList books={books} onRemoveBook={onRemoveBook} onSelectBookId={onSelectBookId} />
            }

            {selectedBookId && <BookDetails onBack={() => onSelectBookId(null)} bookId={selectedBookId} />}
        </section>
    )

}