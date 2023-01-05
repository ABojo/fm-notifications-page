import Notification from "./Notification.js";
import buildElement from "../utils/buildElement.js";

class MessageNoti extends Notification {
  constructor(config) {
    super(config);
    this.postTitle = config.postTitle;
    this.postUrl = config.postUrl;

    this.addExtraElements();
  }

  getBodyText() {
    return "sent you a private message";
  }

  addExtraElements() {}
}

export default MessageNoti;
