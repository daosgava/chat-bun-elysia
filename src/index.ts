/*
	write a description of this project
	This is a simple chat application that uses Elysia's WebSocket support to create a simple chat application.	

*/
import { Elysia, t } from "elysia";
import { staticPlugin } from "@elysiajs/static";

const messages: string[] = ["Hello", "World", "Hono", "Bun"];
const chatName = "group-chat";
const port = 3000;

const app = new Elysia()
	.use(
		staticPlugin({
			prefix: "/",
		})
	)
	.listen(port);

app.get("/messages", (c) => {
	return { ok: true, messages };
});

app.ws("/chat", {
	open(ws) {
		ws.subscribe(chatName);
		console.log(`Subscribed to the ${chatName}`);
	},
	message(ws, message) {
		messages.push(`${message}`);
		ws.publish(chatName, JSON.stringify({
			message,
			time: Date.now(),
		}));
	},
	close(ws) {
		ws.unsubscribe(chatName);
		console.log(`Unsubscribed from the ${chatName}`);
	},
});


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);