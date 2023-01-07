import Notification from "./Notification.js";
import buildElement from "../utils/buildElement.js";
import css from "../utils/notiCss.js";

class CommentNoti extends Notification {
  constructor(config) {
    super(config);

    const postImage = buildElement("img", {
      className: css.postImage,
      src: config.postImageUrl,
    });

    this.addToMessage("commented on your picture ");
    this.addElement(postImage);
  }
}

export default CommentNoti;
