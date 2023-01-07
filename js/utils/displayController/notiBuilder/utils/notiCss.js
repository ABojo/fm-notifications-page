/* contains class names for notification markup so they 
dont need to be embeded directly into the construction code */
const notiCss = (() => {
  const base = "notification";

  return {
    noti: base,
    unread: `${base}--unread`,
    profileImg: `${base}__profile-img`,
    bodyText: `${base}__message`,
    name: `${base}__name`,
    time: `${base}__time`,
    post: `${base}__post`,
    group: `${base}__group`,
    privateMessage: `${base}__pm`,
    postImage: `${base}__post-img`,
  };
})();

export default notiCss;
