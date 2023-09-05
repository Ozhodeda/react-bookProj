
export function RateRange({handleChange,review}) {
    console.log('range');
    const {rating}=review
    return (
        <div>
            <label  htmlFor="rating">Rating: 
            <input value={rating}  onChange={handleChange} type="range" name="rating" 
            min="1" max="5" id="rating" />
            </label>
        </div>
    )
}