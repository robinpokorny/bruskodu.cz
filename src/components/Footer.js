import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <footer class='site-footer' role='contentinfo'>
    <div class='site-info container'>
      <a
        rel='license'
        href='https://creativecommons.org/licenses/by/4.0/deed.cs'
      >
        <img
          alt='Licence Creative Commons'
          width='80'
          height='15'
          src='wp-content/themes/bk/images/cc-by.png'
        />
      </a>
      <br />
      Brus kódu je projekt{' '}
      <Link to='http://twitter.com/robinpokorny'>@robinpokorny</Link> a podléhá
      licenci{' '}
      <Link to='https://creativecommons.org/licenses/by/4.0/deed.cs'>
        {' '}
        CC BY 4.0
      </Link>
      .<br />
      Pište na ahoj(zavináč) bruskodu.cz.
    </div>
  </footer>
)
