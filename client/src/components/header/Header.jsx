import "./header.css"

const Header = () => {
  return (
    <div className="header">
        <div className="hero"></div>
        <div className="header-text">
            <h1 className="header-title">Hometown Brew</h1>
            <span className="header-subtitle">where locals meet their local brews</span>
        </div>
        <div className="headlines">
            <div className="headline-title">
                Homebrew Headlines
            </div>
            <div className="headline-content">
                brewery award or new featured brew or something
            </div>
        </div>
    </div>
  )
}

export default Header