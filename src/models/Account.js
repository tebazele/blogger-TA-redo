export class Account {
  constructor(data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.picture = data.picture;
    // TODO add additional properties if needed
    this.bio = data.bio;
    this.coverImg = data.coverImg;
    this.linkedin = data.linkedin;
    this.github = data.github;
    this.resume = data.resume;
    this.class = data.class;
    this.graduated = data.graduated;
  }
}

// const obj = "_id": "6478fcdf7e18b5f484405e8b",
// "subs": [
//   "auth0|6478fcdfa6122dfa0e25e22c"
// ],
// "email": "patchy@patchy.pirate",
// "name": "patchy",
// "picture": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/painty-the-pirate-william-gerard.jpg",
// "bio": "Are you ready kids?",
// "coverImg": "https://wallpapercave.com/wp/wp2967401.jpg",
// "github": "https://www.youtube.com/watch?v=r9L4AseD-aA",
// "linkedin": "https://www.youtube.com/watch?v=r9L4AseD-aA",
// "resume": "https://www.youtube.com/watch?v=r9L4AseD-aA",
// "class": "",
// "graduated": false,
// "createdAt": "2023-06-01T20:17:38.616Z",
// "updatedAt": "2023-06-01T20:27:44.587Z",
// "__v": 0,
// "id": "6478fcdf7e18b5f484405e8b"
