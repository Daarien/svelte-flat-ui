import React from 'react'
import { Link } from 'react-router'

import './style.css'

class HeaderComponent extends React.Component {
  render () {
    return (
      <header className="examples-header">
        <Link to="/">
          <h1>
            <span>Svelte</span>
            <span>Flat</span>
            UI Components
          </h1>
        </Link>

        <div className="examples-header-right">
          <a href="https://github.com/tranpiling/svelte-flat-ui-components" target="_blank">
            <i className="fui-github"></i>
          </a>
        </div>
      </header>
    )
  }
}

export default HeaderComponent
