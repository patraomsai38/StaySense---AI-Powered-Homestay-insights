import { useState, useRef, useEffect } from "react";
import axios from "axios";
import aiAvatar from "../assets/ai.png";
import userAvatar from "../assets/user.png";
import ReactMarkdown from "react-markdown";

function ChatAssistant() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm StaySense AI. Ask me anything about homestays, travel planning, eco-tourism, itineraries, or local attractions.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
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
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ai/chat`,
        {
          message,
        }
      );

      const aiMessage = {
        sender: "ai",
        text: res.data.reply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text:
            "⚠️ Sorry, I couldn't process your request right now.\nPlease try again in a few moments.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
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
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
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

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-800 space-y-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-3 ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            {/* AI Avatar */}
            {msg.sender === "ai" && (
              <img
                src={aiAvatar}
                alt="AI"
                className="w-10 h-10 rounded-full object-cover shadow"
              />
            )}

            {/* Message Bubble */}
            <div
              className={`max-w-[80%] px-5 py-4 rounded-2xl whitespace-pre-wrap leading-7 shadow-md ${
                msg.sender === "user"
                  ? "bg-green-700 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-green-200"
              }`}
            >
              <ReactMarkdown
  components={{
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold mb-3 text-green-700 dark:text-green-400">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-400">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-3 leading-7">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc ml-6 mb-3">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal ml-6 mb-3">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="mb-1">
        {children}
      </li>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-green-700 dark:text-green-400">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic">
        {children}
      </em>
    ),
  }}
>
  {msg.text}
</ReactMarkdown>

              <p
                className={`text-xs mt-2 ${
                  msg.sender === "user"
                    ? "text-green-100 text-right"
                    : "text-gray-500 dark:text-gray-400 text-right"
                }`}
              >
                {msg.time}
              </p>
            </div>

            {/* User Avatar */}
            {msg.sender === "user" && (
              <img
                src={userAvatar}
                alt="User"
                className="w-10 h-10 rounded-full object-cover shadow"
              />
            )}

          </div>
        ))}

        {/* Loading */}
        {loading && (
          <div className="flex items-end gap-3">

            <img
              src={aiAvatar}
              alt="AI"
              className="w-10 h-10 rounded-full object-cover shadow"
            />

            <div className="bg-white dark:bg-gray-700 px-5 py-3 rounded-2xl shadow">

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce delay-200"></div>

                <span className="ml-2 text-gray-600 dark:text-gray-300">
                  StaySense AI is thinking...
                </span>

              </div>

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
          disabled={loading}
          placeholder="Ask StaySense AI..."
          className="flex-1 border rounded-xl p-3 resize-none dark:bg-gray-800 dark:text-white disabled:opacity-60 disabled:cursor-not-allowed"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white px-8 rounded-xl font-semibold"
        >
          {loading ? "Thinking..." : "Send"}
        </button>

      </div>

    </div>
  );
}

export default ChatAssistant;