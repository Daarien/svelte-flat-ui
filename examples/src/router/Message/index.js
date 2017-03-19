import React from 'react'
import hljs from 'highlightjs'

import Docs from 'sf/message/README.md'
import Button from 'sf/button/lib'
import Message from 'sf/message/lib'

import Examples from './examples.md'
import './style.css'

class MessageRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      button: [
        {Content: 'open message hints'},
        {Content: 'success', status: 'success'},
        {Content: 'warning', status: 'warning'},
        {Content: 'info', status: 'info'},
        {Content: 'error', status: 'danger'}
      ],
      Message: [
        {Content: 'hello world'},
        {Content: 'Successful', status: 'success'},
        {Content: 'warning', status: 'warning'},
        {Content: 'message hints', status: 'info'},
        {Content: 'error', status: 'danger'}
      ]
    }
  }

  componentDidMount () {
    const { button, message } = this.state
    for (let i = 0; i < message.length; i++) {
      const btn = Button({
        target: document.querySelector(`#message${i + 1}`),
        data: button[i]
      })
      btn.onclick = () => {
        Message(message[i])
      }
    }

    const code = document.querySelectorAll('pre')
    for (let i = 0; i < code.length; i++) {
      hljs.highlightBlock(code[i])
    }
  }

  render () {
    return (
      <div className="examples-router examples-router-message">
        <div className="examples" dangerouslySetInnerHTML={{ __html: Examples }} />

        <section
          className="documents"
          dangerouslySetInnerHTML={{ __html: Docs }}
        />
      </div>
    )
  }
}

export default MessageRouter
