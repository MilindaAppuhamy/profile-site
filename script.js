const navLinks = document.querySelector(".links");
const landingPageDetailsContainer =
  document.querySelector(".details-container");
const details = document.querySelector(".details");
const myName = document.querySelector(".name");
const hello = document.querySelector(".hello");
const myWork = document.querySelectorAll(".work");
const title = document.querySelector(".title");
const codeContainer = document.querySelector(".code-container");

const timeLimit = 50;
const cycles = 3;
const text = "Portfolio.";
const chars = "abcdefghijklmnopqrstuvwxyz";
let scrambling = false;
let interval;

function scramble() {
  console.log(text);
  if (!scrambling) {
    let pos = 0;
    scrambling = true;

    interval = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / cycles > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * chars.length);
          const randomChar = chars[randomCharIndex];

          return randomChar;
        })
        .join("");

      title.textContent = scrambled;
      pos++;

      if (pos >= text.length * cycles) {
        clearInterval(interval);
        scrambling = false;
        title.textContent = text;
      }
    }, timeLimit);
  }
}

title.addEventListener("click", scramble());

window.addEventListener("resize", () => {
  if (window.innerWidth < 740) {
    navLinks.style.display = "none";
    myName.style.fontSize = "50px";
    hello.style.fontSize = "25px";
    myName.style.lineHeight = "50px";
    myWork.forEach((item) => {
      item.style.fontSize = "25px";
      item.style.paddingLeft = "2px";
      item.style.marginTop = "0px";
    });
  } else {
    navLinks.style.display = "flex";
    myName.style.fontSize = "80px";
    myName.style.lineHeight = "80px";
    hello.style.fontSize = "40px";
    myWork.forEach((item) => {
      item.style.fontSize = "30px";
      item.style.paddingLeft = "10px";
      item.style.marginTop = "6px";
    });
  }

  if (window.innerWidth < 1080) {
    landingPageDetailsContainer.style.flexDirection = "column";
    landingPageDetailsContainer.style.textAlign = "left";
    landingPageDetailsContainer.style.paddingLeft = "0px";
    landingPageDetailsContainer.style.paddingTop = "150px";
    codeContainer.style.marginTop = "40px";
    codeContainer.style.width = "85%";
    details.style.width = "85%";
  } else {
    landingPageDetailsContainer.style.flexDirection = "row";
    landingPageDetailsContainer.style.textAlign = "left";
    landingPageDetailsContainer.style.paddingLeft = "30px";
    landingPageDetailsContainer.style.paddingTop = "90px";
    codeContainer.style.marginTop = "0px";
    codeContainer.style.width = "45%";
    details.style.width = "45%";
  }
});
