let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

showReview = () => {
  // Loops through the user-pics and remove all active pic.
  for (pic of userPics) {
    pic.classList.remove("active-pic");
  }
  // Loops through the user-texts and remove all active text.
  for (text of userTexts) {
    text.classList.remove("active-text");
  }
  // i represents the indexof the array clicked on.
  let i = Array.from(userPics).indexOf(event.target);
  // Adds the listed classes below to the element with the index above.
  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
};
