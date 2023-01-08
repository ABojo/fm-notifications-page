import notiBuilder from "./notiBuilder/index.js";

const displayController = (() => {
  const elements = {
    grid: document.querySelector(".noti-grid"),
    unreadCounter: document.querySelector(".container__number"),
    markAllRead: document.querySelector(".container__mark-read"),
    notis: [],
  };

  let notiClickHandler = null;

  function setUnreadCount(count) {
    elements.unreadCounter.textContent = count;
  }

  function addMarkAllClickHandler(cb) {
    elements.markAllRead.addEventListener("click", cb);
  }

  function addNotiClickHandler(cb) {
    notiClickHandler = cb;
  }

  function addToGrid(element) {
    elements.grid.appendChild(element);
  }

  function addNotification(notification) {
    const notiElement = notiBuilder(notification);

    addToGrid(notiElement);
    elements.notis.push(notiElement);

    if (notification.unread) {
      notiElement.addEventListener("click", function () {
        if (notiClickHandler) {
          const id = this.getAttribute("data-id");
          notiClickHandler(id);
        }
      });
    }
  }

  function addNotifications(notifications) {
    notifications.forEach((noti) => {
      addNotification(noti);
    });
  }

  function markNotificationAsRead(notificationId) {
    const notification = elements.notis.find((noti) => {
      console.log(noti);
      return noti.getAttribute("data-id") === notificationId;
    });

    notification.classList.remove("notification--unread");
  }

  return {
    addNotifications,
    addNotification,
    setUnreadCount,
    markNotificationAsRead,
    addMarkAllClickHandler,
    addNotiClickHandler,
  };
})();

export default displayController;
