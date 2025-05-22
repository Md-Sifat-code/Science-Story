import React, { useEffect, useState, useContext } from "react";
import { FiSend } from "react-icons/fi";
import { useParams } from "react-router-dom";
import WebSocketContext from "../../context/WebSocketContext";
import { useUser } from "../../context/UserContext";

const Messages = () => {
  const { senderId, recipientId } = useParams();
  const { user, loading } = useUser(); // Ensure 'user' is used, not 'userData'
  const { stompClient, sendMessage } = useContext(WebSocketContext);
  const [newMessageInput, setNewMessageInput] = useState("");
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (loading || !user) return; // Wait until user data is available

    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `https://flatelse-1mup.onrender.com/messages/${senderId}/${recipientId}`
        );
        if (!response.ok) throw new Error("Failed to fetch messages");

        const data = await response.json();
        setMessages(data);
        if (data.length > 0) {
          setChatId(data[0].chatId);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [senderId, recipientId, user, loading]);

  useEffect(() => {
    if (!stompClient || !user) return;

    const subscription = stompClient.subscribe(
      `/user/${user.id}/queue/messages`,
      (message) => {
        const receivedMessage = JSON.parse(message.body);
        if (
          (receivedMessage.senderId === senderId &&
            receivedMessage.recipientId === recipientId) ||
          (receivedMessage.senderId === recipientId &&
            receivedMessage.recipientId === senderId)
        ) {
          setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        }
      }
    );

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, [stompClient, senderId, recipientId, user]);

  const handleSendMessage = () => {
    if (!stompClient || newMessageInput.trim() === "" || !user) return;

    const message = {
      senderId: user.id,
      recipientId,
      content: newMessageInput,
      chatId: chatId || null,
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        senderId: user.id,
        recipientId,
        content: newMessageInput,
        chatId: chatId || null,
      },
    ]);

    sendMessage(message);
    setNewMessageInput("");
  };

  if (loading || !user) return <div>Loading...</div>;

  return (
    <div className="flex flex-col h-full bg-gray-100 border rounded-lg shadow-md container mx-auto ">
      <div
        className="flex-1 overflow-y-auto p-4 space-y-2"
        style={{ maxHeight: "calc(100vh - 100px)" }}
      >
        {messages.map((msg, index) => {
          const isSender = String(msg.senderId) === String(user.id);
          return (
            <div
              key={index}
              className={`flex w-full ${isSender ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-sm text-sm ${
                  isSender
                    ? "bg-blue-500 text-white rounded-br-lg rounded-tl-lg"
                    : "bg-gray-300 text-gray-800 rounded-bl-lg rounded-tr-lg"
                }`}
                style={{ wordWrap: "break-word" }}
              >
                {msg.content}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="p-3 bg-white flex items-center border-t"
        style={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "white",
          zIndex: 10,
        }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none"
          value={newMessageInput}
          onChange={(e) => setNewMessageInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
          onClick={handleSendMessage}
        >
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default Messages;
