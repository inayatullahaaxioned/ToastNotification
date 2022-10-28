/* Author: 
Inayatullah
*/
//variables
var button = document.querySelector('.btn'),
  message = ['Message One', 'Message Two', 'Message Three', 'Message Four'],
  msgColor = ['purple', 'green', 'red'],
  wrapper = document.querySelector('.wrapper');
//created ul to append msg list

var notificationList = document.createElement("ul");
wrapper.appendChild(notificationList);

button.addEventListener('click', showNotification);

function showNotification() {
  var msgBox = document.createElement('li');
  notificationList.appendChild(msgBox);
  msgBox.classList.add("notify-box");
  msgBox.innerText = randomMsg();
  msgBox.classList.add(randomColor());

  setTimeout(function removeMsg() {
    msgBox.remove();
  }, 2500);
}

function randomMsg() {
  return message[Math.floor(Math.random() * message.length)];
}

function randomColor() {
  return msgColor[Math.floor(Math.random() * msgColor.length)];
}




















