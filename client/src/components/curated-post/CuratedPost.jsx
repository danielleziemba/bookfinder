import "./curated-post.css"
import landscapeImg from "../../assets/brewtaps.jpg"

const CuratedPost = () => {
  return (
    <article className="curated-post">
        <div className="thumb-wrap">
            <img src={landscapeImg} alt="" />
        </div>
        <div className="post-details">
            <h2 className="title">Title</h2>
            <span className="author-name">Author Name</span>
        </div>
    </article>
  )
}

export default CuratedPost