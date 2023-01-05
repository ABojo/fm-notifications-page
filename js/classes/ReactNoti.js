import Notification from "./Notification.js";
import buildElement from "../utils/buildElement.js";
import css from "../utils/css.js";

class ReactNoti extends Notification {
  constructor(config) {
    super(config);
    this.postTitle = config.postTitle;
    this.postUrl = config.postUrl;

    this.addExtraElements();
  }

  getBodyText() {
    return "reacted to your post ";
  }

  addExtraElements() {
    const post = buildElement("a", {
      className: css.post,
      href: this.postUrl,
      textContent: this.postTitle,
    });

    const messageElement = this.htmlElement.querySelector(`.${css.bodyText}`);
    messageElement.appendChild(post);
  }
}

export default ReactNoti;
