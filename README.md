## How to run the code

To run the code, the following command should be executed:

`docker-compose up`

The web app can then be found at the following url: http://localhost:3100.

## App

For coding the app, I used a fairly common stack: React for the frontend (with styled-components for the styling and Zustand for state management) and Spring Boot for the backend. I also used MySQL as the database for the backend as it is easy to setup and use. And for the build, I used docker to build containers for each part of the app.

The main communication between the frontend and the backend is done through a Websocket (although the initial load uses a REST Api endpoint). This is a pretty typical choice for applications such as chat as it allows easy two way communication between client and server.

## Notes

I tried to implement what was required in the description while also restricting the scope as much as possible. Here are a few things that could be improved:

- There is no login/sign-up mechanism, which can lead to some strange behaviors. For example, it would technically be possible for two people to chat with the same username at the same time. Furthermore, the mechanism to determine whether a message is from the user only compares username, which means messages could not have actually been written by the user.
- Currently, the chat automatically scrolls down when new messages appear. However, this is only the case when the tab is currently active. It might be better to also scroll down once the user returns to the tab when there are new messages.
- I unfortunately did not have time to add unit tests.
- The design could be improved but the chat box respects the requirements from the provided screenshot.
- The transition between the username selection and the chat could be better.
- On desktop, it would've been helpful to add the possibility of sending a message with Enter.
