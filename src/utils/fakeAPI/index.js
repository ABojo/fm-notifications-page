//simulated api wrapper
const fakeAPI = {
  getNotifications: function () {
    return [
      {
        id: "1",
        type: "react",
        unread: true,
        name: "Mark Webber",
        profileImageUrl: "/images/avatar-mark-webber.webp",
        timestamp: "1m ago",
        postTitle: "My first tournament today!",
        postUrl: "#",
      },
      {
        id: "2",
        type: "follow",
        unread: true,
        name: "Angela Gray",
        profileImageUrl: "/images/avatar-angela-gray.webp",
        timestamp: "1m ago",
      },
      {
        id: "3",
        type: "group",
        unread: true,
        name: "Jacob Thompson",
        profileImageUrl: "/images/avatar-jacob-thompson.webp",
        timestamp: "1 day ago",
        groupName: "Chess Club",
        groupUrl: "#",
        joined: true,
      },
      {
        id: "4",
        type: "message",
        unread: false,
        name: "Rizky Hasanuddin",
        profileImageUrl: "/images/avatar-rizky-hasanuddin.webp",
        timestamp: "5 days ago",
        messageText: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm alreayd having lots of fun and improving my game.`,
      },
      {
        id: "5",
        type: "comment",
        unread: false,
        name: "Kimberly Smith",
        profileImageUrl: "/images/avatar-kimberly-smith.webp",
        timestamp: "1 week ago",
        postImageUrl: "/images/image-chess.webp",
      },
      {
        id: "6",
        type: "react",
        unread: false,
        name: "Nathan Peterson",
        profileImageUrl: "/images/avatar-nathan-peterson.webp",
        timestamp: "2 weeks ago",
        postTitle: "5 end-game strategies to increase your win rate",
        postUrl: "#",
      },
      {
        id: "7",
        type: "group",
        unread: false,
        name: "Anna Kim",
        profileImageUrl: "/images/avatar-anna-kim.webp",
        timestamp: "2 weeks ago",
        groupName: "Chess Club",
        groupUrl: "#",
        joined: false,
      },
    ];
  },
};

export default fakeAPI;
