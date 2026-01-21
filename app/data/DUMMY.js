export const DUMMY_CATEGORIES = [
  {
    id: "work",
    title: "Work",
    items: [
      {
        id: "w1",
        name: "Approve Now",
        description:
          "Notify managers of pending requests and allow managers to approve/reject requests from internal tools",
        route: "/approve",
        image: require("../assets/myfpt/ic_favourite_approve_now.png"),
      },
      {
        id: "w2",
        name: "Reward",
        description:
          "Send colleagues a thank you note or reward Gold for exceptional contribution",
        route: "/reward",
        image: require("../assets/myfpt/ic_favourite_recognition.png"),
      },
      {
        id: "w3",
        name: "Discipline",
        description:
          "Send a discipline warning to subordinates for violation of codes of conduct",
        route: "/discipline",
        image: require("../assets/myfpt/ic_favourite_discipline.png"),
      },
      {
        id: "w4",
        name: "Learning",
        description: "View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course",
        route: "/task",
        image: require("../assets/myfpt/ic_favourite_learning.png"),
      },
      {
        id: "w5",
        name: "My Tasks",
        description: "",
        route: "/task",
        image: require("../assets/myfpt/ic_favorite_pear.png"),
      },
    ],
  },
  {
    id: "utilities",
    title: "Utilities",
    items: [
      {
        id: "u1",
        name: "FPT Care",
        description: "FPT Care",
        route: "/care",
        image: require("../assets/myfpt/ic_favourite_fpt_care.png"),
      },
      {
        id: "u2",
        name: "Events",
        description:
          "Register, check-in, check-out, send feedback to company events and programs",
        route: "/events",
        image: require("../assets/myfpt/ic_favourite_event.png"),
      },
      {
        id: "u3",
        name: "Survey",
        description:
          "Conduct and collect responses for company-wide or department-wide surveys",
        route: "/survey",
        image: require("../assets/myfpt/ic_favourite_survey.png"),
      },
      {
        id: "u4",
        name: "FPT Dating",
        description: "Dating feature.",
        route: "/dating",
        image: require("../assets/myfpt/ic_favourite_dating.png"),
      },
      {
        id: "u5",
        name: "Payslip",
        description: "Payslip",
        route: "/payslip",
        image: require("../assets/myfpt/ic_favourite_payslip.png"),
      },
      {
        id: "u6",
        name: "Birthday",
        description:
          "Your birthday is a special moment. We're very happy to send the best wishes for you. \nColleagues can send you birthday wishes on myFPT",
        route: "/birthday",
        image: require("../assets/myfpt/ic_favourite_birthday.png"),
      },
    ],
  },
  {
    id: "news",
    title: "News",
    items: [
      {
        id: "n1",
        name: "News",
        description:
          "A collection of latest news and notable events around the company",
        route: "/news/news",
        image: require("../assets/myfpt/ic_favourite_news.png"),
      },
      {
        id: "n2",
        name: "Star Ave",
        description:
          "Recognise notable achievements within a business unit or within FPT",
        route: "/news/star-ave",
        image: require("../assets/myfpt/ic_favourite_star_ave.png"),
      },
    ],
  },
  {
    id: "wiki",
    title: "Wiki",
    items: [
      {
        id: "wk1",
        name: "Employee Info",
        description:
          "Basic, non-confidential employee information (name, gender, department, etc.)",
        route: "/wiki/employee-info",
        image: require("../assets/myfpt/ic_favourite_employee_info.png"),
      },
    ],
  },
  {
    id: "game",
    title: "Game",
    items: [
      {
        id: "g1",
        name: "Game",
        description: "Community-engaging games with Gold as rewards",
        route: "/games/game",
        image: require("../assets/myfpt/ic_favourite_game.png"),
      },
    ],
  },
];


export const DUMMY_MENU = [
  {
    id: "m1",
    title: "My Profile",
    icon: require("../assets/myfpt/my_profile.png"),
    showArrow: true,
  },
  {
    id: "m2",
    title: "Settings",
    icon: require("../assets/myfpt/setting.png"),
    showArrow: true,
  },
  {
    id: "m3",
    title: "Support",
    icon: require("../assets/myfpt/support_my_profile.png"),
    showArrow: true,
  },
  {
    id: "m4",
    title: "FAQ",
    icon: require("../assets/myfpt/faq.png"),
    showArrow: true,
  },
  {
    id: "m5",
    title: "Admin",
    icon: require("../assets/myfpt/profile_admin.png"),
    showArrow: true,
  },
  {
    id: "m6",
    title: "Logout",
    icon: require("../assets/myfpt/logout.png"),
    showArrow: false, 
  },
];

export const DUMMY_ICONS = {
  Home: {
    active: require("../assets/myfpt/nav-home-active.png"),
    inactive: require("../assets/myfpt/nav-home.png"),
  },
  AllApp: {
    active: require("../assets/myfpt/nav-allapp-active.png"),
    inactive: require("../assets/myfpt/nav-allapp.png"),
  },
  Gold: {
    active: require("../assets/myfpt/nav-gold-active.png"),
    inactive: require("../assets/myfpt/nav-gold.png"),
  },
  Game: {
    active: require("../assets/myfpt/nav-game-active.png"),
    inactive: require("../assets/myfpt/nav-game.png"),
  },
  Profile: {
    active: require("../assets/myfpt/nav-profile-active.png"),
    inactive: require("../assets/myfpt/nav-profile.png"),
  },

}
