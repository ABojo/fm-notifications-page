import fakeAPI from "./utils/fakeAPI/index.js";
import notificationStorage from "./utils/notificationStorage/index.js";
import displayController from "./utils/displayController/index.js";

function init() {
  //pull notis from api
  const notifications = fakeAPI.getNotifications();

  //load into storage
  notificationStorage.addNotifications(notifications);

  displayController.setUnreadCount(3);

  //hook up mark all button
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

  //will be fired when an invidivual noti is marked as read
  displayController.addNotiClickHandler((notiId) => {
    const notification = notificationStorage.findById(notiId);

    /* if server existed make an api call 
        here to mark the noti as read in the backend */
    notification.markAsRead();
    displayController.markNotificationAsRead(notification.getId());
    const numberOfUnread = notificationStorage.getNumberOfUnread();
    displayController.setUnreadCount(numberOfUnread);
  });

  //build all notifications and display them
  displayController.addNotifications(notifications);
}

init();
