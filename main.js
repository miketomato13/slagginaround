let edsays = [
   "Live, Laugh, Love!",
   "Life is Precious!",
   "Love Thy Neighbor!",
   "Infuse your life with action.",
   "Only you can change your life.",
   "Strip Club?",
   "Did somebody say solution?",
   "What?",
   "Hi, I'm Techuardo",
   "I like hugs",
   "I've literally never said that.",
   "Keep moving forward!",
   "A long life is a good life!"
  ];

  function renderKeywords(edsays) {
   let x = document.getElementById("markup")
    x.innerHTML = edsays[Math.floor(Math.random() * edsays.length)]
}

renderKeywords(edsays);
