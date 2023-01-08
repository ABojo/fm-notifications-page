import FollowNoti from "./classes/FollowNoti.js";
import GroupNoti from "./classes/GroupNoti.js";
import ReactNoti from "./classes/ReactNoti.js";
import CommentNoti from "./classes/CommentNoti.js";
import MessageNoti from "./classes/MessageNoti.js";

const notiBuilder = (() => {
  const typeMap = {
    follow: FollowNoti,
    message: MessageNoti,
    comment: CommentNoti,
    react: ReactNoti,
    group: GroupNoti,
  };

  return function (config) {
    const notiConstructor = typeMap[config.type];
    const newNoti = new notiConstructor(config);
    const notiElement = newNoti.getElement();

    return notiElement;
  };
})();

export default notiBuilder;
