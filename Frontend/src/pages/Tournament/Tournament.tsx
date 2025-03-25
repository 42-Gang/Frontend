import React, { useState, useEffect, useRef } from "react";
import {
  GlobalStyle,
  TournamentContainer,
  TournamentTitle,
  ChatContainer,
  ChatHeader,
  ChatMessage,
  ChatInputContainer,
  ChatInput,
  SendButton,
  ReadyButton,
} from "./Tournament";

interface TournamentProps {
  onReadyClick?: () => void;
  customButton?: React.ReactNode;
}

// 예제 채팅 데이터 (나중에 API로 대체)
const mockMessages = [
  { id: 1, user: "Ping", message: "시작해" },
  { id: 2, user: "Pong", message: "오키" },
];

const Tournament: React.FC<TournamentProps> = ({
  onReadyClick,
  customButton,
}) => {
  const [messages, setMessages] = useState(mockMessages);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, user: "TestUser", message: inputValue },
      ]);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <GlobalStyle />
      <TournamentContainer>
        <TournamentTitle>Tournament</TournamentTitle>
        {/* ✅ 커스텀 버튼이 전달되면 사용, 아니면 기본 ReadyButton */}
        {customButton ?? <ReadyButton onClick={onReadyClick} />}
      </TournamentContainer>
      <ChatContainer>
        <ChatHeader>Chat</ChatHeader>
        <div
          style={{
            flexGrow: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {messages.map((msg) => (
            <ChatMessage key={msg.id}>
              <strong>{msg.user}:</strong> {msg.message}
            </ChatMessage>
          ))}
          <div ref={chatEndRef} />
        </div>
        <ChatInputContainer>
          <ChatInput
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <SendButton onClick={handleSendMessage}>Send</SendButton>
        </ChatInputContainer>
      </ChatContainer>
    </>
  );
};

export default Tournament;
