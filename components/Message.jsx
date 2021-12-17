import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Message({ message }) {
    const { user } = useMoralis();

    const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
    return (
        <div
            className={`flex items-end space-x-2 relative ${
                isUserMessage && "justify-end"
            }`}
        >
            <div
                className={`relative h-8 w-8 ${
                    isUserMessage && "order-last ml-2"
                }`}
            >
                <Avatar username={message.get("username")} />
            </div>
            <div
                className={`flex space-x-4 p-3 rounded-lg ${
                    isUserMessage
                        ? "rounded-br-none bg-yellow-200"
                        : "rounded-br-none bg-green-400"
                }`}
            >
                <p className="text-pink-400">{message.get("message")}</p>

                <p
                    className={`absolute -bottom-5 text-xs ${
                        isUserMessage ? "text-pink-300" : "text-blue-300"
                    }`}
                >
                    {message.get("username")}
                </p>
            </div>
        </div>
    );
}

export default Message;
