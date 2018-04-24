const data = [
  {
    id: 1,
    user: {
      name: "UEFA Champions League",
      avatar: require("./image/data/user/uefa.jpg")
    },
    title: `No game for Real Madrid this weekend ...
     How much of an advantage will that be when they visit Bayern in the #UCL semi-finals on Wednesday`,
    image: {
      image: [
        {
          id: 99,
          image: require("./image/data/image1.jpg")
        },
        { 
          id: 98,
          image: require("./image/data/image2.jpg") }
      ],
      title: 'UEFA Champions Image'
    },
    confirm: true,
    time: 300,
    comment: [
      {
        id: 1,
        name: "Amos Messi",
        time: 33,
        reply: ["Champions League", "Real Madrid"],
        message: "did you guys make sure they have no game this weekend?"
      },
      {
        id: 2,
        name: "AK of Bayern",
        time: 19,
        reply: ["Champions League", "Real Madrid"],
        message: `You've been giving them the advantage for at least 4 years now,
        very generous in giving penalties, sending off opponent players and not booking 
        their player. This is your fair play`
      },
      {
        id: 3,
        name: "Ryan Gillispie",
        time: 19,
        reply: ["Champions League", "Real Madrid"],
        message: `Everyone always say it's uefa-whoever is winning. A few years ago it was uefalona now it's uefamadrid. Man up your team lost 
       because they lost that's the sport. Madrid literally care about this cup more than 
       anything else that's why they win. Simple and I'm a Barca fan`
      }
    ]
  },
  {
    id: 2,
    user: {
      name: "UEFA Champions League",
      avatar: require("./image/data/user/uefa.jpg")
    },
    title: `No game for Real Madrid this weekend ...
     How much of an advantage will that be when they visit Bayern in the #UCL semi-finals on Wednesday`,
     image: {
      image: [
        {
          id: 919,
          image: require("./image/data/image1.jpg")
        },
        { id: 991,
          image: require("./image/data/image2.jpg") }
      ],
      title: ''
    },
    confirm: true,
    time: 30,
    comment: [
      {
        id: 1,
        name: "Amos Messi",
        time: 33,
        reply: ["Champions League", "Real Madrid"],
        message: "did you guys make sure they have no game this weekend?"
      },
      {
        id: 2,
        name: "AK of Bayern",
        time: 19,
        reply: ["Champions League", "Real Madrid"],
        message: `You've been giving them the advantage for at least 4 years now,
        very generous in giving penalties, sending off opponent players and not booking 
        their player. This is your fair play`
      },
      {
        id: 3,
        name: "Ryan Gillispie",
        time: 19,
        reply: ["Champions League", "Real Madrid"],
        message: `Everyone always say it's uefa-whoever is winning. A few years ago it was uefalona now it's uefamadrid. Man up your team lost 
       because they lost that's the sport. Madrid literally care about this cup more than 
       anything else that's why they win. Simple and I'm a Barca fan`
      }
    ]
  },
  {
    id: 3,
    user: {
      name: "UEFA Champions League",
      avatar: require("./image/data/user/uefa.jpg")
    },
    title: `No game for Real Madrid this weekend ...
     How much of an advantage will that be when they visit Bayern in the #UCL semi-finals on Wednesday`,
     image: {
      image: [
        {
          id: 199,
          image: require("./image/data/image1.jpg")
        },
        { 
          id: 999,
          image: require("./image/data/image2.jpg") }
      ],
      title: 'UEFA Champions Image'
    },
    confirm: true,
    time: 70,
    comment: [
      {
        id: 1,
        name: "Amos Messi",
        time: 33,
        reply: ["Champions League", "Real Madrid"],
        message: "did you guys make sure they have no game this weekend?"
      },
      {
        id: 2,
        name: "AK of Bayern",
        time: 19,
        reply: ["Champions League", "Real Madrid"],
        message: `You've been giving them the advantage for at least 4 years now,
        very generous in giving penalties, sending off opponent players and not booking 
        their player. This is your fair play`
      },
      {
        id: 3,
        name: "Ryan Gillispie",
        time: 19,
        reply: ["Champions League", "Real Madrid"],
        message: `Everyone always say it's uefa-whoever is winning. A few years ago it was uefalona now it's uefamadrid. Man up your team lost 
       because they lost that's the sport. Madrid literally care about this cup more than 
       anything else that's why they win. Simple and I'm a Barca fan`
      }
    ]
  }
];
const user = {
  name: "chienvu1308",
  follow: 115,
  followed: 0,
  avatar: require("./image/avatar.jpg")
};

export { data, user };
