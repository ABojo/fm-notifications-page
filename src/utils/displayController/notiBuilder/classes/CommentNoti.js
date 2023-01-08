import Notification from "./Notification.js";
import buildElement from "../utils/buildElement.js";
import css from "../utils/notiCss.js";

class CommentNoti extends Notification {
  constructor(config) {
    super(config);

    const postImage = buildElement("img", {
      className: css.postImage,
      src: config.postImageUrl,
      alt: "Thumbnail of your image",
    });

    this.addToMessage("commented on your picture ");
    this.addElement(postImage);
  }
}

export default CommentNoti;
