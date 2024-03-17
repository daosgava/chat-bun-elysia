const chat = new WebSocket("ws://localhost:3000/chat");
const form = document.querySelector("form");
const messageContainer = document.querySelector(".message-container");

const getMessages = async () => {
	const res = await fetch("/messages");
	const { messages } = await res.json();
	messages.forEach((message) => addMessage(message));
};

getMessages();

const addMessage = (message) => {
	const newMessage = document.createElement("p");
	newMessage.classList.add("antialiased", "font-light");
	newMessage.innerText = message;
	messageContainer.appendChild(newMessage);
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const messageEl = e.target.elements.message;

	if (!messageEl.value) return;

	chat.send(messageEl.value);
	addMessage(messageEl.value);
	messageEl.value = "";
});

chat.addEventListener("open", () => {
	console.log("Connection opened");
});

chat.addEventListener("message", (event) => {
	const { message } = JSON.parse(event.data);
	addMessage(message);
});

chat.addEventListener("close", () => {
	console.log("Connection closed");
});
