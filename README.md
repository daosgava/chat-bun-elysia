# Simple Chat App with Elysia & Bun

A minimal chat application built with the Elysia framework on the Bun runtime, enabling real-time communication.

## Getting Started

### Prerequisites

- Bun installed on your machine. Visit [Bun.sh](https://bun.sh/) for installation instructions.

### Setup

1. **Clone the repo:**

```sh
bun clone https://github.com/daosgava/chat-bun-elysia
cd chat-bun-elysia
```

2. **Install dependencies:**

```sh
bun install
```

3. **Run the server:**

```sh
bun dev
```

Access the app at `http://localhost:3000`.

## Tech

- **Elysia**: For the server-side logic.
- **Bun**: As the runtime and package manager.
- **WebSockets**: For real-time communication.

## Structure

- `src/`: Server and app logic.
- `public/`: Static files like HTML and CSS.
- `index.ts`: Entry point.
