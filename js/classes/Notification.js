import buildElement from "../utils/buildElement.js";
import css from "../utils/css.js";

/* 
The notification class is responsible for generating the base element that all notifications share and
marking the element as read. It is a general class so it should not be instantiated.

Subclasses can be used to create specific notification types that have their own body text and elements.

Subclasses must implement getBodyText 
Subclasses may implement addElements
*/

class Notification {
  constructor(config) {
    this.unread = config.unread;
    this.name = config.name;
    this.timestamp = config.timestamp;
    this.profileImageUrl = config.profileImageUrl;

    this.htmlElement = this.createBaseElement();
  }

  createBaseElement() {
    const noti = buildElement("li", { className: css.noti });

    if (this.unread) {
      noti.classList.add(css.unread);
    }

    const image = buildElement("img", {
      className: css.profileImg,
      src: this.profileImageUrl,
    });

    const message = buildElement("p", {
      className: css.bodyText,
      textContent: this.getBodyText(),
    });

    const name = buildElement("span", {
      className: css.name,
      textContent: this.name,
    });

    const time = buildElement("span", {
      className: css.time,
      textContent: this.timestamp,
    });

    noti.appendChild(image);
    noti.appendChild(message);
    noti.appendChild(time);
    message.prepend(name);

    return noti;
  }

  getElement() {
    return this.htmlElement;
  }

  markAsRead() {
    this.unread = false;
    this.htmlElement.classList.toggle(css.unread);
  }
}

export default Notification;
