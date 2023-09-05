import { bookService } from '../services/book.service.js'
import { RateRange } from "./RateRange.jsx"
import { RateStars } from "./RateStars.jsx"
import { RateSelect } from "./RateSelect.jsx"

const { useState } = React

export function AddReview({ onAddReview }) {

    const [isHide, setReviewForm] = useState(true)
    const [review, setReview] = useState(bookService.getEmptyReview())
    const [cmpType, setCmpType] = useState('Hello')

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
            case 'select':
                value = target.selection
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

    function DynamicCmp(props) {
        console.log(props);

        console.log(cmpType);
        switch (cmpType) {

            case 'By Stars':
                return <RateStars {...props} />
            case 'By Range':
                console.log('hi');
                return <RateRange {...props} />
            case 'By Select Option':
                return <RateSelect {...props} />
        }
    }


    const { fullname, rating,comment, readAt } = review

    //  console.log('review:', review)

    const dynClass = isHide ? 'hide' : ''

    return (
        <section className="book-review " >
            <button onClick={() => setReviewForm(!isHide)}>Add Review</button>
            <form className={"Review-container " + dynClass} onSubmit={onSubmitReview} >

                <label htmlFor="fullname">Full Name: </label>
                <input onChange={handleChange} value={fullname} type="text" name="fullname" id="fullname" />

                <div>
                    <select onChange={ev => setCmpType(ev.target.value)} >
                        <option value="">Select Rating</option>
                        <option>By Stars</option>
                        <option>By Range</option>
                        <option>By Select Option</option>
                    </select>
                    <DynamicCmp handleChange={handleChange} review={review} />
                </div>

                <label htmlFor="readAt">Date: </label>
                <input onChange={handleChange} value={readAt} type="date" name="readAt" id="readAt" />

                <button onClick={() => setReviewForm(isHide)}>Save</button>
            </form>
        </section >
    )
}