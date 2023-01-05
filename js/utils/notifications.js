//simulated api data
const notifications = [
  {
    type: "react",
    unread: true,
    name: "Mark Webber",
    profileImageUrl: "/images/avatar-mark-webber.webp",
    timestamp: "1m ago",
    postTitle: "My first tournament today!",
    postUrl: "#",
  },
  {
    type: "follow",
    unread: true,
    name: "Angela Gray",
    profileImageUrl: "/images/avatar-angela-gray.webp",
    timestamp: "1m ago",
  },
  {
    type: "message",
    unread: false,
    name: "Rizky Hasanuddin",
    profileImageUrl: "/images/avatar-rizky-hasanuddin.webp",
    timestamp: "5 days ago",
    messageText: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm alreayd having lots of fun and improving my game.`,
  },
  {
    type: "comment",
    unread: false,
    name: "Kimberly Smith",
    profileImageUrl: "/images/avatar-kimberly-smith.webp",
    timestamp: "5 days ago",
    postImageUrl: "/images/image-chess.webp",
  },
];

export default notifications;
