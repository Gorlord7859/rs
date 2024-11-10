// Get references to the elements
const messageInput = document.getElementById('message-input');
const messagesDiv = document.getElementById('messages');

// Function to send a message
function sendMessage() {
    const messageText = messageInput.value.trim();
    
    if (messageText === "") {
        return; // Don't send empty messages
    }

    // Create a new message element
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'sent');
    messageDiv.textContent = messageText;
    
    // Append the message to the chat
    messagesDiv.appendChild(messageDiv);
    
    // Clear the input
    messageInput.value = '';

    // Scroll to the bottom of the chat box
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Simulate a received message (for demo purposes)
    setTimeout(() => {
        receiveMessage("This is a reply!");
    }, 1000);
}

// Function to simulate receiving a message
function receiveMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'received');
    messageDiv.textContent = text;
    
    // Append the message to the chat
    messagesDiv.appendChild(messageDiv);
    
    // Scroll to the bottom of the chat box
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Listen for 'Enter' key to send the message
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
