const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    // Role para a última mensagem
    chatBox.scrollTop = chatBox.scrollHeight;
}

function askQuestion() {
    const question = userInput.value.trim();

    if (question !== '') {
        appendMessage(`Você: ${question}`, 'user');

        // Substitua 'SUA_CHAVE_DE_API' pela sua chave de API OpenAI
        const apiKey = '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';
        const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: question,
                max_tokens: 150
            })
        })
        .then(response => response.json())
        .then(data => {
            const answer = data.choices[0]?.text.trim();
            if (answer) {
                appendMessage(`Gênio: ${answer}`, 'ai');
            } else {
                appendMessage('Gênio: Desculpe, não consegui entender a pergunta.', 'ai');
            }
        })
        .catch(error => {
            console.error('Erro ao processar a solicitação:', error);
            appendMessage('Gênio: Desculpe, ocorreu um erro ao processar a pergunta.', 'ai');
        });

        // Limpar entrada do usuário
        userInput.value = '';
    }
}
