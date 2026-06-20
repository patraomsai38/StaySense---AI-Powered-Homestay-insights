import { useState } from "react";

function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleSend = () => {
    const text = message.toLowerCase();

    if (text.includes("homestay")) {
      setReply(
        "🏡 Mountain Retreat and Riverside Cottage are highly rated homestays."
      );
    } else if (text.includes("attraction")) {
      setReply(
        "🌄 Popular attractions include Valley Trek, Riverside Walk and Eco Camping."
      );
    } else if (text.includes("booking")) {
      setReply(
        "📅 You can manage bookings through the StaySense Dashboard."
      );
    } else {
      setReply(
        "🤖 Thank you! StaySense AI will provide advanced AI assistance in future updates."
      );
    }

    setMessage("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-green-700 text-white px-4 py-3 rounded-full shadow-lg z-50"
      >
        💬 AI Assistant
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-4 z-50">
          <h3 className="font-bold text-lg mb-3">
            StaySense AI
          </h3>

          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg min-h-[80px] mb-3">
            {reply || "How can I help you today?"}
          </div>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask something..."
            className="w-full border p-2 rounded-lg mb-2 dark:bg-gray-700"
          />

          <button
            onClick={handleSend}
            className="w-full bg-green-700 text-white py-2 rounded-lg"
          >
            Send
          </button>
        </div>
      )}
    </>
  );
}

export default ChatAssistant;