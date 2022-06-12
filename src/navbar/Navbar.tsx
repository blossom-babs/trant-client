const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
      <h1 className="navbar-container title">Tech Trant</h1>
      <ul className="navbar-navigation">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {/* replace socal media with names */}
      <ul>
        <li>LinkedIn</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Mail</li>
        <li>Podcast</li>
      </ul>
        </div>
    </div>
  )
}

export default Navbar