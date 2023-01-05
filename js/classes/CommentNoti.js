import Notification from "./Notification.js";
import buildElement from "../utils/buildElement.js";
import css from "../utils/css.js";

class CommentNoti extends Notification {
  constructor(config) {
    super(config);
    this.postImageUrl = config.postImageUrl;

    this.addExtraElements();
  }

  getBodyText() {
    return "commented on your picture ";
  }

  addExtraElements() {
    const postImage = buildElement("img", {
      className: css.postImage,
      src: this.postImageUrl,
    });

    this.htmlElement.appendChild(postImage);
  }
}

export default CommentNoti;
