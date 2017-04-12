import React from 'react'
import { Link } from 'react-router-dom'

const Books = () =>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><a href="/about">About</a></li> {/* Note that this is still an anchor */}
      <li><Link to="/books">Books</Link></li>
    </ul>

    <div>Here are books!</div>
  </div>

export default Books
