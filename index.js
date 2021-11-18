const HandOptions = {
  Rock: "Images/Rock.png",
  Paper: "Images/Paper.png",
  Scissors: "Images/Scissors.png",
};

let IncreaseScore = 0;

const PickUserHand = (UserHand) => {
  // console.log(UserHand);
  let PickHands = document.querySelector(".Hands");
  PickHands.style.display = "none";

  let ShowContest = document.querySelector(".Contest");
  ShowContest.style.display = "flex";

  document.getElementById("UserPickedImage").src = HandOptions[UserHand];

  let RandomHand = PickCompHand();
  Referee(UserHand, RandomHand);
};

const PickCompHand = () => {
  let PickHands = ["Rock", "Paper", "Scissors"];
  let RandomHand = PickHands[Math.floor(Math.random() * 3)];
  // console.log(RandomHand);

  document.getElementById("CompPickedImage").src = HandOptions[RandomHand];

  return RandomHand;
};

const Referee = (UserHand, RandomHand) => {
  if (UserHand == "Paper" && RandomHand == "Scissors") {
    MakeDecision("YOU LOSE!");
  }
  if (UserHand == "Paper" && RandomHand == "Rock") {
    MakeDecision("YOU WIN!");
    SetScore(IncreaseScore + 1);
  }
  if (UserHand == "Paper" && RandomHand == "Paper") {
    MakeDecision("It's A Tie");
  }
  if (UserHand == "Rock" && RandomHand == "Scissors") {
    MakeDecision("YOU WIN!");
    SetScore(IncreaseScore + 1);
  }
  if (UserHand == "Rock" && RandomHand == "Paper") {
    MakeDecision("YOU LOSE!");
  }
  if (UserHand == "Rock" && RandomHand == "Rock") {
    MakeDecision("It's A Tie");
  }
  if (UserHand == "Scissors" && RandomHand == "Scissors") {
    MakeDecision("It's A Tie");
  }
  if (UserHand == "Scissors" && RandomHand == "Rock") {
    MakeDecision("YOU LOSE!");
  }
  if (UserHand == "Scissors" && RandomHand == "Paper") {
    MakeDecision("YOU WIN!");
    SetScore(IncreaseScore + 1);
  }
};

const MakeDecision = (Decision) => {
  document.querySelector(".DecisionMaker h1").innerText = Decision;
};

const SetScore = (Score) => {
  IncreaseScore = Score;
  document.querySelector(".Score h1").innerText = Score;

  sessionStorage.setItem("High Score", IncreaseScore);
};

const PlayAgain = () => {
  let Contest = document.querySelector(".Contest");
  Contest.style.display = "none";

  let Hands = document.querySelector(".Hands");
  Hands.style.display = "flex";
};
