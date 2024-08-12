import React from 'react';

function ChatbotPage() {
  return (
    <div>
      {/* Adjust the URL to point to your Streamlit chatbot */}
      <iframe
        title="Streamlit Chatbot"
        src="https://generate.naavinetwork.ai/"
        style={{ width: '100%', height: '800px', border: 'none' }} // Adjust styling as needed
      ></iframe>
    </div>
  );
}

export default ChatbotPage;
