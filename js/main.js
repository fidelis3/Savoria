const messages = [];

function addMessage(msg, isUser, isTyping = false) {
    const messagesDiv = document.getElementById("messages");
    const messageDiv = document.createElement("div");

    if (isUser) {
        messageDiv.className =
            "w-1/2 ml-80 py-2 pr-5 text-right bg-amber-900 rounded-2xl text-white";
    } else {
        messageDiv.className =
            "w-1/2 mr-80 mt-2 py-2 pl-5 text-left bg-gray-200 rounded-2xl text-black";
    }

    messageDiv.textContent = msg;

    // Add a data attribute to easily find and update typing message later
    if (isTyping) {
        messageDiv.setAttribute("id", "typing-message");
    }

    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    return messageDiv;
}

// Assuming your existing addMessage and messages array are defined above

function sendMessageFromText(text) {
    if (text.trim() === "") return;

    addMessage(text, true); // user message
    messages.push({ content: text, role: "user" });

    // Show "typing..." placeholder
    const typingMessage = addMessage("Typing...", false, true);

    setTimeout(() => {
        const staticReply = "🍳 Hello! I'm your static chef. How can I help?";
        typingMessage.textContent = staticReply;
        typingMessage.removeAttribute("id");
        messages.push({ content: staticReply, role: "assistant" });
    }, 3000);
}

function sendMessage() {
    const input = document.getElementById("input-message");
    const message = input.value.trim();

    if (message) {
        sendMessageFromText(message);
        input.value = "";
    }
}

// Attach event listeners to suggestion buttons
document.querySelectorAll(".suggestion").forEach((button) => {
    button.addEventListener("click", () => {
        const text = button.textContent.trim();
        sendMessageFromText(text);
    });
});
