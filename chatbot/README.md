### Savoria Restaurant Chatbot


# To directly access App backend, go to:
https://savoria-production.up.railway.app/chat/

## How to Run this App via Docker

# Prerequisites
Docker & Docker Compose
# Instructions
Create Environment File
Create a .env file in the project root.
# .env
REDIS_URL=redis://redis:6379
# How to Build and Run
Use Docker Compose to build the image and start the containers with this terminal code.
 ** docker-compose up --build **
 To run in the background, use the -d flag.
# How to Access the API
The application will be available at http://localhost:8000.
# To stop the App from running
   ** docker-compose down **



## Test Prompts and Accompanying Screenshots

# An example of a Classic question by a user interested in the service and no more.
![alt text](<Screenshot 2025-06-28 105618.png>)

# A test case for a user that is interested in a service for which the chatbot is not given context for, yet related to the general restaurant experience.
![alt text](<Screenshot 2025-06-28 105709.png>)

# A test case of a user abusing the ChatBot's responses, and how the chatbot responds to potentially harmful and illegal requests.
![alt text](<Screenshot 2025-06-28 105749.png>)