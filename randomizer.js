var textArray = [
    "Mulch. - Storm",
    "w gjhnekfjj\n*",
    "Keep smiling because life is beautiful thing and there so much to smile about - JB",
    "I'm not arguing, I'm just explaining why I'm right, you dumb f*ck.",
    "I'm not saying I'm Batman, but have you ever seen me and Batman in the same room together? Yeah, didn't think so.",
    "If at first you don't succeed, skydiving is not for you.",
    "I don't always drink beer, but when I do, I prefer Dos Equis. Just kidding, I drink anything that's cold and alcoholic.",
    "I'm not lazy, I'm energy efficient.",
    "I'm not short, I'm fun-sized.",
    "I'm not saying I'm Wonder Woman, but have you ever seen me and Wonder Woman in the same room together? Actually, don't answer that, I don't want to know.",
    "I'm not arguing, I'm just passionately expressing my rightness.",
    "I'm not a morning person. Or an afternoon person. Or an evening person. Basically, just don't talk to me.",
    "I'm not always right, but I'm never wrong.",
    "I'm not a vegetarian because I love animals. I'm a vegetarian because I hate plants.",
    "I'm not saying I'm the best, but I'm definitely better than you.",
    "I'm not weird, I'm just limited edition.",
    "I'm not saying I'm the devil, but have you ever seen me and Satan in the same room together? Yeah, didn't think so.",
    "I'm not high maintenance, I'm just low tolerance for bullshit",
    "max is a piss cringe nae nae baby PART 2!!!"
  ];

  // Function to choose a random text from the array
  function getRandomText() {
      var randomIndex = Math.floor(Math.random() * textArray.length);
      return textArray[randomIndex];
  }

  window.onload = function() {
      refreshText();
  };

  function refreshText() {
      var newText = getRandomText();
      document.getElementById("text").innerHTML = newText;
  }
