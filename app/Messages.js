import React from 'react';

const Messages = (props) => {
  let messageList = props.msg.map(msg => {
    return (
      <li> {msg} </li>
    )
  })
  return (
    <ul>
    {messageList}
    </ul>
  )
}

export default Messages;
