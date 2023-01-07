const notificationStorage = (() => {
  let notifications = [];

  return {
    addNotifications: function (newNotis) {
      newNotis.forEach((noti) => {
        notifications.push(noti);
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
  };
})();

export default notificationStorage;
