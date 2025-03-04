# Server Sent Events

Please watch [https://www.youtube.com/watch?v=4HlNv1qpZFY](https://www.youtube.com/watch?v=4HlNv1qpZFY)

Server Side Events is a one way street protocol from server to client.

## Server:

Just set `Content-Type` as `text/event-stream` and write to the response `res.write`

Requirements:
- `data: ` prefix
- `\n\n` suffix

```js
app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.write('data: ' + `Hello, world` + '\n\n');
})
```

## Client:
```js
const sse = new EventSource('http://localhost:3000/stream')
sse.onmessage = console.log
```

# Analysis

### Pros:
- Lightweight
- HTTP2 Compatible (always go for HTTP2)
- Firewall friendly

### Cons:
- Proxying is tricky
- Timeouts are tricky
- Different to scale horizontally

### Do you have to use SSE?
- It depends on your use case
- WebSockets
- Long Polling