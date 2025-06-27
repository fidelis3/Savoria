document.addEventListener("DOMContentLoaded", () => {
    // Order buttons functionality
    const orderButtons = document.querySelectorAll("button");
    orderButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Order taken");
        });
    });

    // Chatbot suggestion buttons functionality
    const suggestions = document.querySelectorAll(".suggestion");
    suggestions.forEach((suggestion) => {
        suggestion.addEventListener("click", function () {
            const question = this.textContent.trim();
            sendSuggestion(question);
        });
    });
});

// Function to handle sending suggestions
function sendSuggestion(question) {
    const input = document.getElementById("input-message");
    input.value = question;
    sendMessage();
}

const messages = [];
function addMessage(msg, isUser) {
    const messagesDiv = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.className = "w-1/2 mr-80";
    if (isUser) {
        messageDiv.classList.add("user-message");
        messageDiv.className =
            "w-1/2 ml-80 py-2 pr-5 text-right bg-amber-900 rounded-2xl text-white";
    }
    messageDiv.textContent = msg;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// function to send message
function sendMessage() {
    const input = document.getElementById("input-message");
    const message = input.value.trim();
    if (message) {
        addMessage(message, true);
        input.value = "";
        messages.push({ content: message, role: "user" });

        if (typeof puter !== "undefined") {
            puter.ai
                .chat(messages)
                .then((response) => {
                    const reply =
                        response.message?.content || "⚠️ No response from AI.";
                    addMessage(reply, false);
                    messages.push({ content: reply, role: "assistant" });
                })
                .catch((error) => {
                    console.error("AI response error:", error);
                    addMessage("⚠️ Error talking to AI.", false);
                });
        } else {
            addMessage("⚠️ Puter SDK not loaded.", false);
        }
    }
}
