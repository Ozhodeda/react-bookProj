import { bookService } from '../services/book.service.js'

const { useState} = React

export function AddReview({onAddReview}) {

    const [isHide, setReviewForm] = useState(true)
    const [review, setReview] = useState(bookService.getEmptyReview())


    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;
            case 'checkbox':
                value = target.checked
                break
            default:
                break;
        }
        setReview(prevReview => ({ ...prevReview, [field]: value }))
    }

    function onSubmitReview(ev) {
        ev.preventDefault()
        onAddReview(review)
    }


    const { fullname, rating, readAt } = review

//  console.log('review:', review)

    const dynClass = isHide ? 'hide' : ''

    return (
        <section className="book-review " >
            <button onClick={() => setReviewForm(!isHide)}>Add Review</button>
            <form className={"Review-container " + dynClass} onSubmit={onSubmitReview} >

                <label htmlFor="fullname">Full Name: </label>
                <input onChange={handleChange} value={fullname} type="text" name="fullname" id="fullname" />

                <label htmlFor="rating">Rating: </label>
                <input onChange={handleChange} value={rating} type="range" name="rating" min="0" max="5" id="rating" />

                <label htmlFor="readAt">Date: </label>
                <input onChange={handleChange} value={readAt} type="date" name="readAt" id="readAt" />

                <button>Save</button>
            </form>
        </section >
    )
}