// CHEATER CHEATER PUMPKIN EATER

let main;
let textInput;

let room = 0;
let rooms = [
  "contract",
  "death",
  "revelation",
  "spiral",
  "think",
  "decision",
  "choice",
  "birth",
];
let nextRoom = false;

let responseCount = {
  contract: 0,
  death: 0,
  revelation: 0,
  spiral: 0,
  think: 0,
  decision: 0,
  choice: 0,
  birth: 0,
};
let visits = {
  contract: 0,
  death: 0,
  revelation: 0,
  spiral: 0,
  think: 0,
  decision: 0,
  choice: 0,
  birth: 0,
};

let waiting = 0;
let thoughts = 0;
let insideIdea = false;
let ending = false;

window.onload = () => {
  textInput = document.getElementById("contract-input-0");
  main = document.getElementById("content");
  // reset input value
  let inputs = document.querySelectorAll("input[type='text']");
  for (let i in inputs) {
    inputs[i].value = "";
  }
  // textInput.value = ''
  textInput.addEventListener("keyup", handleEnter);
};

function handleEnter(e) {
  if (e.key == "Enter") {
    let t = e.target.value;
    console.log(`input: ${t}`);
    otherResponseHandler(t);
    if (room == 0) {
      contractResponses();
      // textBoxToParagraph('contract', t)
      if (nextRoom) {
        textBoxToParagraph("contract");
        room++;
        next("death");
      }
    } else if (room == 1) {
      deathResponses();
      // textBoxToParagraph('death', t)
      if (nextRoom) {
        textBoxToParagraph("death");
        room++;
        next("revelation");
      }
    } else if (room == 2) {
      revelationResponses();
      // textBoxToParagraph('revelation', t)
      if (nextRoom) {
        textBoxToParagraph("revelation");
        room++;
        next("spiral");
      }
    } else if (room == 3) {
      spiralResponses();
      // textBoxToParagraph('spiral', t)
      if (nextRoom) {
        textBoxToParagraph("spiral");
        room++;
        next("think");
      }
    } else if (room == 4) {
      thinkResponses();
      // textBoxToParagraph('think', t)
      if (nextRoom) {
        textBoxToParagraph("think");
        room++;
        next("decision");
      }
    } else if (room == 5) {
      decideResponses();
      // textBoxToParagraph('decision', t)
      if (nextRoom) {
        textBoxToParagraph("decision");
        room++;
        next("choice");
      }
    } else if (room == 6) {
      chooseResponses();
      if (nextRoom) {
        textBoxToParagraph("choice");
        room++;
        next("birth");
      }
    } else if (room == 7) {
      birthResponses();
      if(nextRoom){
        room = 2;
        next("revelation")
      }
    }
  }
}

/**
 * response helpers
 */

function otherResponseHandler(inputText) {
  let response = document.createElement("div");
  response.className = "response";
  if (room != 1) {
    if (inputText.includes("steps")) {
      response.innerHTML = "There are no footsteps to follow.";
      document.getElementById(rooms[room]).appendChild(response).async;
    }
  }
  if (room != 2) {
    if (
      inputText == "embrace the eternal slumber" ||
      inputText == "end" ||
      inputText.includes("spiral")
    ) {
      response.innerHTML = "It isn't safe to do that here.";
      document.getElementById(rooms[room]).appendChild(response).async;
    }
  }
  if (room != 3 && room != 4) {
    if (inputText.includes("think")) {
      response.innerHTML =
        "A worthy endeavor. Is thinking embodied ever? How do we map the thought process? How does creativity happen?<br>Time passes";
      document.getElementById(rooms[room]).appendChild(response).async;
    }
  }
  if (room != 4) {
    if (inputText.includes("brainstorm")) {
      response.innerHTML = "You need to be in a place with flow to do this.";
      document.getElementById(rooms[room]).appendChild(response).async;
    }
  }
}

function contractResponses() {
  let container = "contract";
  let inputText = document.getElementById(
    `${container}-input-${responseCount[rooms[room]]}`
  ).value;
  let response = document.createElement("div");
  response.className = "response";
  responseCount[rooms[room]]++;
  if (inputText == "yes" || inputText == "y") {
    response.innerHTML = "It is done.";
    document.getElementById(container).appendChild(response).async;
    nextRoom = true;
    visits.contract++;
  } else if (inputText == "n" || inputText == "no") {
    response.innerHTML = "You already signed a contract.";
    document.getElementById(container).appendChild(response).async;
    nextRoom = true;
    visits.contract++;
  } else {
    response.innerHTML = "You must consent to continue.";
    document.getElementById(container).appendChild(response).async;

    repeatPrompt("type yes or no >");
  }
}

function deathResponses() {
  let container = "death";
  let inputText = document.getElementById(
    `${container}-input-${responseCount[rooms[room]]}`
  ).value;
  let response = document.createElement("div");
  response.className = "response";

  responseCount[rooms[room]]++;

  if (ending) {
    document.getElementById("death-text").innerHTML = "You are reborn.";
    return;
  }
  if (inputText.includes("retrace") || inputText.includes("revelation")) {
    nextRoom = true;
    visits.death++;
  } else if (inputText.includes("look") || inputText.includes("tree")) {
    response.innerHTML =
      "You look at the gnarled old tree. It reminds you to be rooted, to not let your thoughts get away from you";
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("> ");
  } else {
    response.innerHTML = "That doesn't work here.";
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("> ");
  }
}

function revelationResponses() {
  let container = "revelation";
  let inputText = document.getElementById(
    `${container}-input-${responseCount[rooms[room]]}`
  ).value;
  let response = document.createElement("div");
  response.className = "response";

  responseCount[rooms[room]]++;
  if (inputText.includes("spiral")) {
    nextRoom = true;
    visits.revelation++;
  } else if (
    ending &&
    (inputText.includes("back") ||
      inputText.includes("embrace") ||
      inputText.includes("end"))
  ) {
    room = 1;
    visits.revelation++;
    // document.getElementById("revelation").style.display = "none";
    let newText = document.createElement("div");
    newText.className = "update-text";
    newText.innerHTML = "You are reborn";
    document.getElementById("death").appendChild(newText);
    document.getElementById("death").scrollIntoView();
    repeatPrompt("end > ");
  } else {
    response.innerHTML = "That doesn't work here.";
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("> ");
  }
}

function spiralResponses() {
  let container = "spiral";
  let inputText = document.getElementById(
    `${container}-input-${responseCount[rooms[room]]}`
  ).value;
  let response = document.createElement("div");
  response.className = "response";

  responseCount[rooms[room]]++;
  if (
    (inputText.includes("wait") || inputText.includes("zzz")) &&
    waiting <= 3
  ) {
    if (waiting == 0) {
      response.innerHTML = "You ruminated for a moment.";
    } else if (waiting == 1) {
      response.innerHTML = "Time passes.";
    } else if (waiting == 2) {
      response.innerHTML =
        "Standing here is kind of boring, should you meditate?";
    } else if (waiting == 3) {
      response.innerHTML =
        "It seems that you have come to a conclusion here again. You found your big idea!";
      visits.spiral++;
      room--;
      document.getElementById("spiral").style.display = "none";
      repeatPrompt("> ");
    }

    waiting++;
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("> ");
  } else if (inputText.includes("meditate")) {
    response.innerHTML =
      "Each thought passes you by, is there a way to enter them?";
    visits.spiral++;
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("> ");
  } else if (
    inputText.includes("think") ||
    inputText.includes("thought") ||
    inputText.includes("break")
  ) {
    nextRoom = true;
  } else {
    response.innerHTML = "That doesn't work here.";
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("> ");
  }
}

function thinkResponses() {
  let container = "think";
  let inputText = document.getElementById(
    `${container}-input-${responseCount[rooms[room]]}`
  ).value;
  let response = document.createElement("div");
  response.className = "response";

  responseCount[rooms[room]]++;
  if (insideIdea) {
    if (inputText.includes("give up") || inputText.includes("leave")) {
      response.innerHTML = "You gave up on the idea.";
      document.getElementById(container).appendChild(response).async;
      insideIdea = false;
      repeatPrompt("> ");
      return;
    } else if (
      inputText.includes("think") ||
      inputText.includes("brainstorm")
    ) {
      thoughts++;
    }
    if (thoughts == 3) {
      response.innerHTML =
        "Thinking...have i even had an original thought ever in my life";
      thoughts = 0;
    } else if (thoughts == 2) {
      response.innerHTML =
        "Thinking...how do i handle obsession? is there any way to make it easier to bear? how do normal people do this? <br><br>what is normal even?";
    } else if (thoughts == 1) {
      response.innerHTML =
        "Thinking...my heart isn't full its just anxious and worried about the future all the time. is there something beyond this?";
    }
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("inside idea > ");
  } else if (
    (inputText.includes("look") || inputText.includes("describe")) &&
    !inputText.includes("idea")
  ) {
    response.innerHTML = "You see an idea, maybe try to go inside it.";
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("> ");
  } else if (inputText.includes("take")) {
    response.innerHTML = "Maybe you need to be inside the idea to have it.";
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("> ");
  } else if (
    inputText.includes("brainstorm") ||
    (inputText.includes("idea") &&
      (inputText.includes("go") ||
        inputText.includes("inside") ||
        inputText.includes("enter")))
  ) {
    insideIdea = true;
    response.innerHTML =
      "Thinking...about choices. choices i made. choices that were taken from me.<br><br>You get into the idea.";
    thoughts++;
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("inside idea > ");
  } else if (inputText.includes("idea") && !insideIdea) {
    response.innerHTML =
      "Each idea seems to be worth exploring. Brainstorming is always a fruitful adventure that is worth iterating on.";
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("> ");
  } else if (
    inputText.includes("linger") ||
    inputText.includes("decision") ||
    inputText.includes("decide")
  ) {
    nextRoom = true;
  } else {
    response.innerHTML = "That doesn't work here.";
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("> ");
  }
}

function decideResponses() {
  let container = "decision";
  let inputText = document.getElementById(
    `${container}-input-${responseCount[rooms[room]]}`
  ).value;
  let response = document.createElement("div");
  response.className = "response";
  responseCount[rooms[room]]++;
  if (
    inputText.includes("choose") ||
    inputText.includes("chose") ||
    inputText.includes("choice") ||
    inputText.includes("think about choice")
  ) {
    visits.decision++;
    nextRoom = true;
  } else if (
    inputText.includes("think about it further ahead") ||
    inputText.includes("go further ahead") ||
    inputText.includes("go ahead")
  ) {
    room--;
    visits.decision++;
    document.getElementById(container).style.display = "none";
  } else {
    response.innerHTML = "That doesn't work here.";
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("> ");
  }
}

function chooseResponses() {
  let container = "choice";
  let inputText = document.getElementById(
    `${container}-input-${responseCount[rooms[room]]}`
  ).value;
  let response = document.createElement("div");
  response.className = "response";
  responseCount[rooms[room]]++;
  if (inputText.includes("birth")) {
    nextRoom = true;
  } else {
    response.innerHTML = "That doesn't work here.";
    document.getElementById(container).appendChild(response).async;
    repeatPrompt("> ");
  }
}
async function birthResponses() {
  let container = "birth";
  let inputText = document.getElementById(
    `${container}-input-${responseCount[rooms[room]]}`
  ).value;
  let response = document.createElement("div");
  response.className = "response";
  responseCount[rooms[room]]++;
  if (inputText.includes("revelation")) {
    nextRoom = true;
    await textBoxToParagraph("birth");
    // room++;
    // next("birth");
    ending = true;
    let newText = document.createElement("div");
    newText.className = "update-text";
    newText.innerHTML =
      "Your last conclusion. You found your big idea, finally. You should embrace the eternal slumber. But you can return to spiraling if you think it necessary. Some journeys are meant to be done more than once.";
    document.getElementById("revelation").appendChild(newText);
    repeatPrompt("back again > ");
  }
}

/**
 * other helpers
 */

async function textBoxToParagraph(parentElement) {
  // let promptNum = responseCount[rooms[room]] == 0 ? 0 : responseCount[rooms[room]] - 1
  let promptNum = responseCount[rooms[room]] - 1;
  // console.log(promptId)
  let promptId = `${parentElement}-prompt-${promptNum}`;
  let convertingElement = document.getElementById(promptId);
  let text = document.getElementById(
    `${parentElement}-input-${promptNum}`
  ).value;
  convertingElement.removeChild(convertingElement.lastElementChild);
  let newP = document.createElement("p");
  newP.innerHTML = text;
  newP.style.fontStyle = "italic";
  convertingElement.appendChild(newP).async;
  // responseCount[rooms[room]]++
}

// function textBoxPromise(selector) {
//   return new Promise((resolve) => {
//     let promptNum =
//       responseCount[rooms[room]] == 0 ? 0 : responseCount[rooms[room]] - 1;
//     let promptId = `${selector}-prompt-${promptNum}`;
//     let convertingElement = document.getElementById(promptId);
//     console.log(convertingElement.querySelector("input"));
//     if (convertingElement.querySelector("input")) {
//       console.log("test");
//       let text = document.getElementById(
//         `${selector}-input-${promptNum}`
//       ).value;
//       let newP = document.createElement("p");
//       newP.innerHTML = text;
//       newP.style.fontStyle = "italic";
//       convertingElement.removeChild(convertingElement.lastElementChild);

//       convertingElement.appendChild(newP).async;
//       return resolve(promptId);
//     }

//     const observer = new MutationObserver((mutations) => {
//       if (convertingElement.querySelector("input")) {
//         observer.disconnect();
//         resolve(promptId);
//       }
//     });

//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//     });
//   });
// }

async function repeatPrompt(repeatText) {
  let parentPrompt = rooms[room];
  let promptId = `${parentPrompt}-prompt-${responseCount[rooms[room]]}`;
  let inputId = `${parentPrompt}-input-${responseCount[rooms[room]]}`;
  textBoxToParagraph(parentPrompt);
  // const t = await textBoxPromise(parentPrompt)
  // create new prompt
  let newContainer = document.createElement("div");
  newContainer.className = "prompt";
  newContainer.id = promptId;
  let newLabel = document.createElement("label");
  newLabel.htmlFor = inputId;
  newLabel.innerHTML = `${repeatText}`;
  let newPrompt = document.createElement("input");
  newPrompt.id = inputId;
  newPrompt.type = "text";
  newPrompt.name = inputId;
  newPrompt.addEventListener("keyup", handleEnter);
  newContainer.appendChild(newLabel);
  newContainer.appendChild(newPrompt);
  document.getElementById(`${parentPrompt}`).appendChild(newContainer).async;
  newPrompt.focus();
  return;
}

function next(nextElement) {
  nextRoom = false;
  let ne = document.getElementById(nextElement);
  ne.style.display = "flex";
  ne.scrollIntoView();
  textInput = document.getElementById(
    `${nextElement}-input-${responseCount[rooms[room]]}`
  );
  textInput.value = "";
  textInput.focus();
  textInput.addEventListener("keyup", handleEnter);
}
