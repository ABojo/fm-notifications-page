import FollowNoti from "../classes/FollowNoti.js";
import MessageNoti from "../classes/MessageNoti.js";
import CommentNoti from "../classes/CommentNoti.js";
import ReactNoti from "../classes/ReactNoti.js";
import GroupNoti from "../classes/GroupNoti.js";

/* 
bound each constructor to a key so they can be accessed
without using a long conditional

takes in notification api data and turns them into objects
*/

const buildNotiObjects = (() => {
  const typeMap = {
    follow: FollowNoti,
    message: MessageNoti,
    comment: CommentNoti,
    react: ReactNoti,
    group: GroupNoti,
  };

  return function (notifications) {
    return notifications.map((noti) => {
      const notiConstructor = typeMap[noti.type];
      return new notiConstructor(noti);
    });
  };
})();

export default buildNotiObjects;
