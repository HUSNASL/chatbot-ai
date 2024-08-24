import React from "react";
import './chatPage.css'
import NewPrompt from "../../components/newPrompt/NewPrompt";
function ChatPage() {
  
  
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, labore omnis? Mollitia sit sunt quae minus quaerat fugit. Ea sit architecto distinctio fugiat expedita quae provident neque odit numquam dolore.</div>
          <div className="message user">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum culpa minus nisi eum mollitia obcaecati. Cumque error obcaecati nesciunt, temporibus veritatis dolorum voluptatum fuga eaque perferendis omnis voluptatibus praesentium.</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div><div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div><div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div><div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div><div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div><div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <NewPrompt/>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
