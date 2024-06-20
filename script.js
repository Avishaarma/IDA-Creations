function toggleChat() {
    const chatPopup = document.getElementById('chat-popup');
    if (chatPopup.style.display === 'none' || chatPopup.style.display === '') {
        chatPopup.style.display = 'block';
    } else {
        chatPopup.style.display = 'none';
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    const chatBox = document.getElementById('chat-box');
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('chat-message', 'user-message');
    userMessageElement.textContent = userInput;
    chatBox.appendChild(userMessageElement);

    chatBox.scrollTop = chatBox.scrollHeight;

    const botReply = generateBotResponse(userInput);

    const botMessageElement = document.createElement('div');
    botMessageElement.classList.add('chat-message', 'bot-message');
    botMessageElement.textContent = botReply;
    chatBox.appendChild(botMessageElement);

    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById('user-input').value = '';
}

function generateBotResponse(userMessage) {
    const responses = {
        hello: 'Hi there! How can I help you today?',
        help: 'Sure, what do you need help with?',
        default: 'I am not sure how to respond to that. Can you ask something else?',
        name: 'This is IDA Creations,may i know your name?',
        contact: 'You can fill the form in contact page or else you can email us'
    };

    const messageLower = userMessage.toLowerCase();
    if (messageLower.includes('hello')) {
        return responses.hello;
    }  else if (messageLower.includes('help')) {
        return responses.help; 
    } else if (messageLower.includes('your name')) {
        return responses.name;
    } else if (messageLower.includes('how can contact you')) {
        return responses.contact
    } else {
        return responses.default;
    }
}
