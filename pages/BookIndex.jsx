import { BookList } from "../cmps/BookList.jsx"
import{BookFilter} from "../cmps/BookFilter.jsx"
import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookIndex() {
    const [books, setBooks] = useState(null)
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

    // function onSetFilterBy(filterBy) {
    //     console.log('filterBy:', filterBy)
    //     setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    // }

    console.log('render')
    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            {
                    <BookList books={books} onRemoveBook={onRemoveBook} />
            }
        </section>
    )

}