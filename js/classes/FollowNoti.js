import Notification from "./Notification.js";

class FollowNoti extends Notification {
  constructor(config) {
    super(config);
  }

  getBodyText() {
    return "followed you";
  }
}

export default FollowNoti;
