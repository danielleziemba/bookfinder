import "./main.css"
import FeaturedContent from "../featured-content/FeaturedContent"
import CuratedPost from "../curated-post/CuratedPost"
import Podcast from "../podcast/Podcast"

const Main = () => {
  return (
    <div className="main-container">
      <div className="container recent-content">
        <main>

          <FeaturedContent />
          
          {/** SIDEBAR **/}
          <aside className="column curated-posts">
            {/** sidebar 1 */}
            <CuratedPost />
            {/** sidebar 2 */}
            <CuratedPost />
            {/** sidebar 3 */}
            <CuratedPost />
          </aside>

          {/**READ MORE BUTTON */}
          <div className="column recent-posts">
            <a href="" className="read-more">Read More</a>
          </div>
        </main>
      </div>

      <div className="full-responsive" id="middle"></div>

      <div className="podcasts">
        <div className="section-heading">
          <h2><a href="/">Podcasts</a></h2>
          <div className="header-background"></div>
        </div>
        <div className="podcast-panels container">
          <Podcast />
          {/** PODCAST 2 */}
          <Podcast />
          {/** PODCAST 3 */}
          <Podcast />
        </div>
        <a href="" className="view-all">View All Podcasts</a>
      </div>
    </div>
  )
}

export default Main