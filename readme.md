# Node Stream vs Normal Read

This project demonstrates the difference between streaming and the normal read approach when serving a file using an Express.js server.

## Advantages of Streaming
Using streaming in certain scenarios provides the following advantages:

- **Reduced Memory Usage**: Streaming allows data to be processed in chunks, reducing the overall memory footprint of your application.

- **Faster Response Time**: Streaming enables the server to start sending data to the client as soon as the first chunk is available, leading to faster response times.

- **Scalability**: Streaming is particularly beneficial for scenarios with large datasets, as it enables your server to handle more simultaneous connections efficiently.

- **Real-time Processing**: Streaming is well-suited for scenarios where real-time processing or broadcasting of data is required.


## Dependencies

- express-status-monitor: Middleware for monitoring an Express.js app's status
