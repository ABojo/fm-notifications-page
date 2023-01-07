import Notification from "./Notification.js";

class FollowNoti extends Notification {
  constructor(config) {
    super(config);

    this.addToMessage("followed you ");
  }
}

export default FollowNoti;
