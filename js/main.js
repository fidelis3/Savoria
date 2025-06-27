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

  if (isTyping) {
    messageDiv.setAttribute("id", "typing-message");
  }

  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  return messageDiv;
}

if (window.location.pathname.endsWith("starter.html")) {
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "Order Taken";
      button.disabled = true;
      button.classList.add("bg-green-500", "text-white");
    });
  });
}

async function sendMessageFromText(text) {
  if (text.trim() === "") return;

  addMessage(text, true);
  messages.push({ content: text, role: "user" });

  const typingMessage = addMessage("Typing...", false, true);

  try {
    const response = await fetch("https://render-2-production.up.railway.app/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: text })
    });

    if (!response.ok) throw new Error("Chatbot failed to respond. Please contact customer service");

    const data = await response.json();
    typingMessage.textContent = data.response;
    typingMessage.removeAttribute("id");
    messages.push({ content: data.response, role: "assistant" });

  } catch (err) {
    console.error(err);
    typingMessage.textContent = "Sorry, the chatbot couldn't respond. Contact customer service";
    typingMessage.removeAttribute("id");
  }
}

function sendMessage() {
  const input = document.getElementById("input-message");
  const message = input.value.trim();

  if (message) {
    sendMessageFromText(message);
    input.value = "";
  }
}

document.querySelectorAll(".suggestion").forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.textContent.trim();
    sendMessageFromText(text);
  });
});

document.getElementById("input-message").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
});