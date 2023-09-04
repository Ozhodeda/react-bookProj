import { bookService } from "../services/book.service.js";
import { LongTxt } from "../cmps/LongTxt.jsx"
import { AddReview } from "../cmps/AddReview.jsx";

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails({ bookId, onBack }) {
    const [review, setReview] = useState({})
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

 

    useEffect(() => {
        loadRobot()
    }, [params.bookId])

    function loadRobot() {
        bookService.get(params.bookId)
            .then(setBook)
            .catch(err => {
                console.log('err:', err)
                navigate('/book')
            })
    }

    function onSetReview(review) {
        setReview(prevReview => ({ ...prevReview, ...review }))
    }

    function onBack() {
        navigate('/book')
        // navigate(-1)
    }

    
    function pageCount(book) {
        if (book.pageCount > 500) return 'Serious Reading'
        if (book.pageCount > 200) return 'Descent Reading'
        if (book.pageCount < 200) return 'Light Reading'
    }
    function bookAge(book) {
        if (book.publishedDate < 10) return 'New'
        if (book.publishedDate > 10) return 'Vintage'
    }

    function getPriceColor(book) {
        if (book.listPrice.amount > 100) return 'red'
        if (book.listPrice.amount < 20) return 'green'
        else return ''
    }

    function onSale(book){
        if(book.listPrice.isOnSale) return 'On Sale'
    }
  
        if (!book) return <div>Loading...</div>
        return (
            <section className="book-details">
                <h2>Book Title: {book.title}</h2>
                <h3>Book SubTitle: {book.subtitle}</h3>
                <h4>Book Authors: {book.authors.join(', ')}</h4>
                <h4>Published Date: {book.publishedDate}</h4>
                <h4>Book Age: {bookAge(book)}</h4>
                <h4>Page Count: {book.pageCount}</h4>
                <h4>Read Level: {pageCount(book)}</h4>
                <h4>Book Category: {book.categories.join(', ')}</h4>
                <h4 className={getPriceColor(book)}>Book Price: {book.listPrice.amount}</h4>
                <h4>Discount: {onSale(book)}</h4>
                <h4>Book language: {book.language}</h4>
                <div>Book Description :<LongTxt txt={book.description}/></div>
                <div>Review<AddReview book={book} review={review} onSetReview={onSetReview} /></div>
                <button onClick={onBack}>Back</button>
            </section>
        )
    }