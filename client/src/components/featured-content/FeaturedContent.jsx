import "./featured-content.css";
import featuredPostImg from "../../assets/kat-maryschuk-5BFvAPQTi1U-unsplash.jpg";
import CuratedPost from "../curated-post/CuratedPost";

const FeaturedContent = () => {
  return (
    <section className="column featured-content">
        
        {/** featured post */}
        <article className="featured-post">
            <img src={featuredPostImg} alt="" className="featured-post-img"/>
            <div className="post-details">
                <a href="/" className="title">
                    <h1>Featured Brewery - Dry Dock Brewing</h1>
                </a>
            <span className="author-name">
                <a href="/">Brewer Name</a>
            </span>
            </div>
        </article>
        
        {/** culturally relevant */}
        <div className="culturally-relevant">
            {/** culturally relevant 1 */}
            <CuratedPost />
            {/** culturally relevant 2 */}
            <CuratedPost />
        </div>
    </section>
  )
}

export default FeaturedContent