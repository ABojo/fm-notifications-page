import Notification from "./Notification.js";
import buildElement from "../utils/buildElement.js";
import css from "../utils/notiCss.js";

class ReactNoti extends Notification {
  constructor(config) {
    super(config);

    const post = buildElement("a", {
      className: css.post,
      href: config.postUrl,
      textContent: config.postTitle,
    });

    this.addToMessage("reacted to your post ");
    this.addToMessage(post);
  }
}

export default ReactNoti;
