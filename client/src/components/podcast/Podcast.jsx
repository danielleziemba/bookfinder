import "./podcast.css"
import squareImg from "../../assets/beer-bottle.jpg"

const Podcast = () => {
  return (
    <div className="podcast-panel">
        <div className="thumb">
            <a href=""><img src={squareImg} alt="" /></a>
        </div>
        <div className="podcast-details relative">
            <h2 className="podcast-name">All The Books</h2>
            <summary>
            "All the Brews is a weekly podcast of 
            recommendations and discussions about the 
            most interesting new beers and breweries.
            </summary>
            <div className="subscribe-widget">
            <span className="subscribe-cta">Subscribe</span>
            </div>
        </div>
    </div>
  )
}

export default Podcast