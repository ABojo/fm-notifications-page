import Notification from "./Notification.js";
import buildElement from "../utils/buildElement.js";
import css from "../utils/notiCss.js";

class GroupNoti extends Notification {
  constructor(config) {
    super(config);

    const group = buildElement("a", {
      className: css.group,
      href: config.groupUrl,
      textContent: config.groupName,
    });

    if (config.joined) {
      this.addToMessage("has joined your group ");
    } else {
      this.addToMessage("has left your group ");
    }

    this.addToMessage(group);
  }
}

export default GroupNoti;
