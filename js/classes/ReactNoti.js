import Notification from "./Notification.js";
import buildElement from "../utils/buildElement.js";

class ReactNoti extends Notification {
  constructor(config) {
    super(config);
    this.postTitle = config.postTitle;
    this.postUrl = config.postUrl;

    this.addExtraElements();
  }

  getBodyText() {
    return "reacted to your post";
  }

  addExtraElements() {}
}

export default ReactNoti;
