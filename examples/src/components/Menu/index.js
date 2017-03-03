import React from 'react'
import { Link, IndexLink } from 'react-router'

import './style.css'

class MenuComponent extends React.Component {
  render () {
    return (
      <div className="examples-menu">
        <ul>
          <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
          <li>
            <h4>CSS</h4>
            <ul>
              <li>
                <Link activeClassName="active" to="/color">Color</Link>
                <Link activeClassName="active" to="/typography">Typography</Link>
                <Link activeClassName="active" to="/icon">Icon</Link>
              </li>
            </ul>
          </li>
          <li>
            <h4>Basic Components</h4>
            <ul>
              <li>
                <Link activeClassName="active" to="/button">Button</Link>
                <Link activeClassName="active" to="/input">Input</Link>
                <Link activeClassName="active" to="/checkbox">Checkbox</Link>
                <Link activeClassName="active" to="/radio">Radio</Link>
                <Link activeClassName="active" to="/slider">Slider</Link>
              </li>
            </ul>
          </li>
          <li>
            <h4>Notifications</h4>
            <ul>
              <li>
                <Link activeClassName="active" to="/message">Message</Link>
                <Link activeClassName="active" to="/loading">Loading</Link>
              </li>
            </ul>
          </li>
          <li>
            <h4>Multimedia</h4>
            <ul>
              <li>
                <Link activeClassName="active" to="/audio">Audio</Link>
                <Link activeClassName="active" to="/video">Video</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuComponent
