import Notification from "./Notification.js";
import buildElement from "../utils/buildElement.js";
import css from "../utils/css.js";

class MessageNoti extends Notification {
  constructor(config) {
    super(config);
    this.messageText = config.messageText;

    this.addExtraElements();
  }

  getBodyText() {
    return "sent you a private message";
  }

  addExtraElements() {
    const privateMessage = buildElement("p", {
      className: css.privateMessage,
      textContent: this.messageText,
    });

    const messageElement = this.htmlElement.querySelector(`.${css.bodyText}`);
    messageElement.appendChild(privateMessage);
  }
}

export default MessageNoti;
