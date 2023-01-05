import buildElement from "../utils/buildElement.js";
import css from "../utils/css.js";

/* 
The notification class is responsible for generating the base element that all notifications share and
marking the element as read. It is a general class so it should not be instantiated.

Subclasses can be used to create specific notification types that have
custom text and markup.
*/

class Notification {
  constructor(config) {
    const noti = buildElement("li", { className: css.noti });

    if (config.unread) {
      noti.classList.add(css.unread);
    }

    const image = buildElement("img", {
      className: css.profileImg,
      src: config.profileImageUrl,
    });

    const message = buildElement("p", {
      className: css.bodyText,
    });

    const name = buildElement("span", {
      className: css.name,
      textContent: config.name,
    });

    const time = buildElement("span", {
      className: css.time,
      textContent: config.timestamp,
    });

    noti.appendChild(image);
    noti.appendChild(message);
    noti.appendChild(time);
    message.prepend(name);

    this.htmlElement = noti;
    this.messageElement = message;
  }

  getElement() {
    return this.htmlElement;
  }

  addToMessage(element) {
    this.messageElement.append(element);
  }

  addElement(element) {
    const rootElement = this.getElement();
    rootElement.append(element);
  }

  markAsRead() {
    const rootElement = this.getElement();
    rootElement.classList.remove(css.unread);
  }
}

export default Notification;
