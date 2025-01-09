import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare } from "lucide-react";

const Chatbot = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages([...messages, { sender: "user", text: newMessage }]);
    setNewMessage("");
    setIsTyping(true);

    // Simulate API call to ChatGPT (replace with your actual API call)
    try {
      const response = await simulateChatGPTResponse(newMessage);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: response,
        },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "Sorry, I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  // Placeholder for ChatGPT API call
  const simulateChatGPTResponse = async (message: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          `This is a simulated response from ChatGPT for your message: "${message}".`
        );
      }, 1000);
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full p-2"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-[300px] md:w-[350px]">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-medium">Live Chat</h3>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-6 w-6"
            >
              <span className="sr-only">Close Chat</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </Button>
          </div>
          <div className="p-4 max-h-[300px] overflow-y-auto space-y-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  message.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`rounded-lg p-2 max-w-[70%] ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start">
                <div className="rounded-lg p-2 max-w-[70%] bg-gray-100 text-gray-700">
                  Typing...
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 flex gap-2">
            <Textarea
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 resize-none"
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
