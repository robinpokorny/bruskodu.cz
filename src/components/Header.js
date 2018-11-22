import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <header id='masthead' class='site-header' role='banner'>
    <div class='container'>
      <div id='brand'>
        <h1 class='site-title'>
          <Link to='/' className='navbar-item' rel='home'>
            Brus kódu
          </Link>{' '}
          &mdash;{' '}
          <span>Podcast o front-endových vývojářích a technologiích.</span>
        </h1>
      </div>

      <nav role='navigation' class='site-navigation main-navigation'>
        <ul>
          <li>
            <Link className='navbar-item' to='/'>
              Epizody
            </Link>
          </li>
          <li>
            <Link className='navbar-item' to='/about'>
              O podcastu
            </Link>
          </li>
          <li>
            <Link className='navbar-item' to='/about#jak'>
              Jak odebírat
            </Link>
          </li>
        </ul>
      </nav>

      <div class='clear' />
    </div>
  </header>
)
