import Notification from "./Notification.js";
import buildElement from "../utils/buildElement.js";
import css from "../utils/notiCss.js";

class MessageNoti extends Notification {
  constructor(config) {
    super(config);
    this.messageText = config.messageText;

    const privateMessage = buildElement("p", {
      className: css.privateMessage,
      textContent: config.messageText,
    });

    this.addToMessage("sent you a private message ");
    this.addElement(privateMessage);
  }
}

export default MessageNoti;
