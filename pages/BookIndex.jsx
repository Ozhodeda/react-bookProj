import { BookList } from "../cmps/BookList.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { bookService } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        console.log('mount')
        bookService.query(filterBy).then(books => setBooks(books))
            // bookService.query().then(setBooks)
            .catch(err => console.log('err:', err))
    }, [filterBy])

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId))
            showSuccessMsg(`Book Removed! ${bookId}`)
        })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Problem Removing ' + bookId)
            })
    }


    function onSetFilterBy(filterBy) {
        // console.log('filterBy:', filterBy)
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    console.log('render')
    if (!books) return <div className='loader-container'> <div className="loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    
    return (
        <section className="book-index">
            <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
            <Link to="/book/edit" >Add Book</Link>
            <BookList books={books} onRemoveBook={onRemoveBook} />
        </section>
    )

}