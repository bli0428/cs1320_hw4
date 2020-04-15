const input = document.getElementById("input");
const name = document.getElementById("name-field");
const chat = document.getElementById("chat");
const chatArea = document.getElementById("chat-area");
const chatEndpoint = window.location.pathname + "/messages"
input.addEventListener("keydown", function(event) {
    if (event.key == "Enter" && !event.shiftKey) {
        event.preventDefault();
        if (name.value === "") {
            name.style = "border-color: red";
            name.placeholder = "Please enter a name"
            name.focus();
        } else {
            name.style = "border-color: ";
            postMessage(name.value, input.value, new Date());
            showMessages();
            input.value = "";
        }
    }
});

function postMessage(nickname, message, datetime) {
    const data = {nickname: nickname, message: message, datetime: datetime};
    fetch(chatEndpoint, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
    })
    .catch(err => {
        console.log(err)
    })
}

function showMessages() {
    fetch(window.location.pathname + "/messages")
    .then((res) => { return res.json(); })
    .then(myJson => {
        const jsonLen = myJson.length;
        const chatLen = chat.getElementsByTagName("li").length;
        for (let i=chatLen; i < jsonLen; i++) {
            const message = myJson[i];
            const li = document.createElement("li");
            const node = document.createElement("div");
            node.setAttribute("class", "message");
            const bold = document.createElement("b");
            const newline = document.createElement("br");
            const nameText = document.createTextNode(message.nickname + ": ");
            const datetimeText = document.createTextNode(moment(message.datetime).format('LLL') + " ")
            const messageText = document.createTextNode(message.message);
            bold.appendChild(nameText);
            node.appendChild(datetimeText);
            node.appendChild(bold);
            node.appendChild(newline);
            node.appendChild(messageText);
            li.appendChild(node)
            chat.appendChild(li);
            chatArea.scrollTop = chatArea.scrollHeight;
        }
            
    })
    .catch(err => {
       console.log(err)
       });

}

$( document ).ready(function() {;
    showMessages();
    setInterval(showMessages, 3000);
});