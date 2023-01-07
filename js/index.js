import fakeAPI from "./utils/fakeAPI/index.js";
import notificationStorage from "./utils/notificationStorage/index.js";
import displayController from "./utils/displayController/index.js";

const init = (() => {
  function fetchNotifications() {
    const notifications = fakeAPI.getNotifications();
    return notifications;
  }

  function storeNotifications(notifications) {
    notificationStorage.addNotifications(notifications);
  }

  function updateUnreadCounter() {
    const numberUnread = notificationStorage.getNumberOfUnread();
    displayController.setUnreadCount(numberUnread);
  }

  function setupMarkAllHandler() {
    displayController.addMarkAllClickHandler(() => {
      const notifications = notificationStorage.getNotifications();

      notifications.forEach((noti) => {
        if (!noti.unread) return;

        /* if server existed make an api call 
          here to mark the noti as read in the backend */
        noti.markAsRead();
        displayController.markNotificationAsRead(noti.id);
      });

      displayController.setUnreadCount(0);
    });
  }

  function setupNotiClickHandler() {
    displayController.addNotiClickHandler((notiId) => {
      const notification = notificationStorage.findById(notiId);

      /* if server existed make an api call 
          here to mark the noti as read in the backend */
      notification.markAsRead();
      displayController.markNotificationAsRead(notification.getId());
      const numberOfUnread = notificationStorage.getNumberOfUnread();
      displayController.setUnreadCount(numberOfUnread);
    });
  }

  function setupEventHandlers() {
    setupMarkAllHandler();
    setupNotiClickHandler();
  }

  function addNotifcationsToScreen(notifications) {
    displayController.addNotifications(notifications);
  }

  return function () {
    const notifications = fetchNotifications();

    storeNotifications(notifications);

    updateUnreadCounter();

    setupEventHandlers();

    addNotifcationsToScreen(notifications);
  };
})();

init();
