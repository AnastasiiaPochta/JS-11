function jsonPost(url, data) {
  return new Promise((resolve, reject) => {
    var x = new XMLHttpRequest();
    x.onerror = () => reject(new Error("jsonPost failed"));
    //x.setRequestHeader('Content-Type', 'application/json');
    x.open("POST", url, true);
    x.send(JSON.stringify(data));

    x.onreadystatechange = () => {
      if (x.readyState == XMLHttpRequest.DONE && x.status == 200) {
        resolve(JSON.parse(x.responseText));
      } else if (x.status != 200) {
        reject(new Error("status is not 200"));
      }
    };
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
submitButton.onclick = async () => {
  event.preventDefault();
  const response = await jsonPost("http://students.a-level.com.ua:10012", {
    func: "addMessage",
    nick: nickInput.value,
    message: messageInput.value,
  });
  nickInput.value = "";
  messageInput.value = "";
};

form.append(nickInput, messageInput, submitButton);

const container = document.getElementById("chat-messages");

container.appendChild(form);

const chatMessages = document.createElement("div");

const messages = async () => {
  let updateMessageId = 0;
  const allMessages = await jsonPost("http://students.a-level.com.ua:10012", {
    func: "getMessages",
    messageId: updateMessageId,
  });
  updateMessageId = allMessages.nextMessageId;
  for (const message of allMessages.data.reverse()) {
    let messageDiv = document.createElement("div");
    let nick = document.createElement("span");
    nick.innerText = `${message.nick}: `;
    nick.style.fontWeight = "bold";
    messageDiv.append(nick);
    let messageText = document.createElement("span");
    messageText.innerText = message.message;
    messageDiv.append(messageText);
    // let time = document.createElement('span');
    // time.innerText = message.timestamp;
    // messageDiv.append(time);
    chatMessages.append(messageDiv);
  }
};

messages();

container.appendChild(chatMessages);
