export function ReviewPreview({ review, onDeleteReview }) {

  function renderStars(rating) {
    const starIcons = []
    for (let i = 0; i < rating; i++) {
      starIcons.push(
        <i
          className='fa-solid fa-star fa-m'
          style={{ color: '#ffee00' }}
          key={i}
        ></i>
      )
    }
    return starIcons
  }

  const { id, fullname, rating,comment,stars, readAt } = review
  
  return (
    <article className='review-preview'>
      <li>Fullname: {fullname}</li>
      <li>Range: {rating}</li>
      <li>comment: {comment}</li>
      <li>Stars: {renderStars(stars)}</li>
      <li>Read At: {readAt}</li>
      <button onClick={() => onDeleteReview(id)}>Delete</button>
    </article>
  )
}
