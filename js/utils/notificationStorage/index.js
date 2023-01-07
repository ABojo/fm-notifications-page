const notificationStorage = (() => {
  class Notification {
    constructor(config) {
      //load all notification properties onto the instance
      const keys = Object.keys(config);
      keys.forEach((key) => {
        this[key] = config[key];
      });
    }

    markAsRead() {
      this.unread = false;
    }
    isUnread() {
      return this.unread;
    }
    getId() {
      return this.id;
    }
  }

  let notifications = [];

  return {
    addNotifications: function (newNotis) {
      newNotis.forEach((noti) => {
        const newNoti = new Notification(noti);
        notifications.push(newNoti);
      });
    },
    getNotifications: function () {
      return notifications;
    },
    getNumberOfUnread: function () {
      const unreadTotal = notifications.reduce((acc, cv) => {
        if (cv.isUnread()) {
          return acc + 1;
        }

        return acc;
      }, 0);

      return unreadTotal;
    },
    findById: function (id) {
      return notifications.find((noti) => {
        if (noti.id === id) return noti;
      });
    },
  };
})();

export default notificationStorage;
