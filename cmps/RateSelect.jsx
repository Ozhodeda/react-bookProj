
export function RateSelect({ handleChange, review }) {
    const { comment } = review
    console.log('select');

    return (
        <div>
            <label htmlFor="comment">Comment: </label>
            <select onChange={handleChange} value={comment} name="comment" id="comment">
                <option value='' >Select Comment</option>
                <option>Grate</option>
                <option>Is OK</option>
                <option>Worst</option>
            </select>
        </div>
    )
}