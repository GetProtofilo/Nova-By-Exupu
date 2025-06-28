
document.getElementById("chat-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userMsg = document.createElement("div");
    userMsg.className = "user-msg";
    userMsg.innerText = input.value;
    chatBox.appendChild(userMsg);

    const botMsg = document.createElement("div");
    botMsg.className = "bot-msg";
    botMsg.innerText = getBotReply(input.value);
    chatBox.appendChild(botMsg);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
});

function getBotReply(input) {
    const replies = {
        "hi": "Hello there! How can I help you today?",
        "what is nova": "Nova is your personal AI copilot. Built to assist, crafted by Exupu.",
        "bye": "Goodbye! Ask me anything anytime."
    };
    return replies[input.toLowerCase()] || "I'm thinking... but in this demo I just fake answers 😎";
}
