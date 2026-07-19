import { useState, useRef, useEffect } from "react";
import axios from "axios";

function ChatAssistant() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm StaySense AI. Ask me anything about homestays, travel planning, eco-tourism, itineraries, or local attractions.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/ai/chat",
        {
          message,
        }
      );

      const aiMessage = {
        sender: "ai",
        text: res.data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ AI service unavailable.",
        },
      ]);
    }

    setLoading(false);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        sender: "ai",
        text: "👋 Hello! I'm StaySense AI. Ask me anything about homestays, travel planning, eco-tourism, itineraries, or local attractions.",
      },
    ]);
  };

  return (
    <div className="flex flex-col h-[80vh] bg-white dark:bg-gray-900 rounded-xl shadow-xl">

      {/* Header */}
      <div className="bg-green-700 text-white px-6 py-4 rounded-t-xl flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">
            🤖 StaySense AI
          </h2>
          <p className="text-sm text-green-100">
            Your Smart Travel Assistant
          </p>
        </div>

        <button
          onClick={clearChat}
          className="bg-white text-green-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
        >
          Clear Chat
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-800 space-y-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-5 py-3 rounded-2xl whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-green-700 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-gray-700 px-5 py-3 rounded-2xl shadow">
              🤖 StaySense AI is typing...
            </div>
          </div>
        )}

        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="border-t p-4 bg-white dark:bg-gray-900 flex gap-3">

        <textarea
          rows="2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask StaySense AI..."
          className="flex-1 border rounded-xl p-3 resize-none dark:bg-gray-800 dark:text-white"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-green-700 hover:bg-green-800 text-white px-8 rounded-xl font-semibold"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default ChatAssistant;