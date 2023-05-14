async function jsonPost(url, data) {
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return res.json();
  })
  .catch((error) => {
   console.log(error);
  });
}

const form = document.createElement("form");

const nickInput = document.createElement("input");
nickInput.type = "text";
nickInput.placeholder = "Ім'я користувача";

const messageInput = document.createElement("input");
messageInput.type = "text";
messageInput.placeholder = "Повідомлення";

const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Надіслати";
submitButton.onclick = sendAndCheck;

form.append(nickInput, messageInput, submitButton);
const container = document.getElementById("chat-messages");
container.appendChild(form);
let chatMessages = document.createElement("div");
container.appendChild(chatMessages);

async function sendAndCheck() {
  event.preventDefault();
  await sendMessage(nickInput.value, messageInput.value);
  nickInput.value = "";
  messageInput.value = "";
  getMessages();
}

async function sendMessage(nick, message) {
  return await jsonPost("http://students.a-level.com.ua:10012", {
    func: "addMessage",
    nick,
    message,
  });
}

let updateMessageId = 0;

async function getMessages() {
  const allMessages = await jsonPost("http://students.a-level.com.ua:10012", {
    func: "getMessages",
    messageId: updateMessageId,
  });
  updateMessageId = allMessages.nextMessageId;
  for (const message of allMessages.data) {
    let messageDiv = document.createElement("div");
    let nick = document.createElement("span");
    nick.innerText = `${message.nick}: `;
    nick.style.fontWeight = "bold";
    messageDiv.append(nick);
    let messageText = document.createElement("span");
    messageText.innerText = message.message;
    messageDiv.append(messageText);
    chatMessages.prepend(messageDiv);
  }
}

const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));

async function checkLoop() {
  while (true) {
    await delay(1000);
    getMessages();
  }
}

checkLoop();
