import data from "./data.js";

let lang = "en";
let shift = false;
let alt = false;
let isUpperCase = false;
const container = document.createElement("div");
container.classList.add("container");

const textarea = document.createElement("textarea");
textarea.classList.add("text");
textarea.rows = "15";

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");

const sticker = document.createElement("div");
sticker.classList.add("sticker");
sticker.textContent = "Нажми левые Shift + Alt для переключения языка";

document.body.append(container);
container.append(textarea, keyboard, sticker);


function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang')
  }
}
getLocalStorage()


const keys = data.map((el) => {
  const key = document.createElement("button");
  const className = el.code.toLocaleLowerCase();
  key.classList.add("key", className);
  key.setAttribute("data-code", el.code);
  key.setAttribute("data-key", el.key);
  
  if (el.ru) {
    key.setAttribute("data-ru", el.ru);
  }

  if (el.shift) {
    key.setAttribute("data-shift", el.shift);
  }

  if (el.ru) {
    key.textContent = lang === "en" ? el.key : el.ru;
  } else {
    key.textContent = el.key;
  }
  return key;
});
keyboard.append(...keys);


const backspace = document.querySelector(".backspace");
const capslock = document.querySelector(".capslock");
const del = document.querySelector(".delete");
const tab = document.querySelector('.tab');
const enter = document.querySelector('.enter');
const arrowUp = document.querySelector('.arrowup');
const arrowDown = document.querySelector('.arrowdown');
const arrowLeft = document.querySelector('.arrowleft');
const arrowRight = document.querySelector('.arrowright')


backspace.addEventListener("click", onBackspace);
capslock.addEventListener("click", onCapslock);
del.addEventListener("click", onDel);
tab.addEventListener('click', onTab)
enter.addEventListener('click',onEnter)
arrowUp.addEventListener('click',onArrowUp)
arrowDown.addEventListener('click',onArrowDown)
arrowLeft.addEventListener('click',onArrowLeft)
arrowRight.addEventListener('click',onArrowRight)


keyboard.addEventListener("mousedown", mouseDown);
keyboard.addEventListener("mouseup", mouseUp);
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);



function mouseDown(event) {
  event.preventDefault();
  if (event.target.closest(".key")) {
    event.target.classList.add("pressed");

    if (
      !event.target.classList.contains("shiftright") &&
      !event.target.classList.contains("shiftleft") &&
      !event.target.classList.contains("capslock") &&
      !event.target.classList.contains("enter") &&
      !event.target.classList.contains("delete") &&
      !event.target.classList.contains("arrowleft") &&
      !event.target.classList.contains("arrowright") &&
      !event.target.classList.contains("arrowup") &&
      !event.target.classList.contains("arrowdown") &&
      !event.target.classList.contains("altleft") &&
      !event.target.classList.contains("altright") &&
      !event.target.classList.contains("tab") &&
      !event.target.classList.contains("metaleft") &&
      !event.target.classList.contains("controlleft") &&
      !event.target.classList.contains("controlright") &&
      !event.target.classList.contains("backspace")
    ) {
      textarea.setRangeText(
        isUpperCase
          ? event.target.innerHTML.toUpperCase()
          : event.target.innerHTML.toLowerCase(),
        textarea.selectionStart,
        textarea.selectionEnd,
        "end"
      );
    }
  }
}

function mouseUp(event) {
  event.preventDefault();
  if (event.target.closest(".key")) {
    event.target.classList.remove("pressed");
  }
}

function keyDown(event) {
  keyboard.childNodes.forEach((key) => {
    if (key.dataset.code === event.code) {
      event.preventDefault();
      key.classList.add("pressed");

      if (
        event.code !== "ShiftRight" &&
        event.code !== "ShiftLeft" &&
        event.code !== "CapsLock" &&
        event.code !== "Enter" &&
        event.code !== "Delete" &&
        event.code !== "ArrowLeft" &&
        event.code !== "ArrowRight" &&
        event.code !== "ArrowUp" &&
        event.code !== "ArrowDown" &&
        event.code !== "AltLeft" &&
        event.code !== "AltRight" &&
        event.code !== "Tab" &&
        event.code !== "MetaLeft" &&
        event.code !== "ControlLeft" &&
        event.code !== "ControlRight" &&
        event.code !== "Backspace"
      ) {
        textarea.setRangeText(
          isUpperCase?key.innerHTML.toUpperCase():key.innerHTML.toLowerCase(),textarea.selectionStart,textarea.selectionEnd,"end");
      }

      if (event.code === "Backspace") {
        onBackspace();
      }

      if (event.code === "Delete") {
        onDel(event);
      }

      if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        shift = true;
        onShift();
      }

      if (event.code === "AltLeft") {
        alt = true;
      }

      if (shift && alt) {
        translate();
      }

      if (event.code === "Tab") {
        onTab()
      }

      if (event.code === "Enter") {
        onEnter()
      }

      if (event.code === "ArrowUp") {
        onArrowUp()
      }

      if (event.code === "ArrowDown") {
        onArrowDown()
      }

      if (event.code === "ArrowLeft") {
        onArrowLeft()
      }

      if (event.code === "ArrowRight") {
        onArrowRight()
      }
    }
  });
}

function keyUp(event) {
  shift = false;
  alt = false;
  event.preventDefault();
  keyboard.childNodes.forEach((key) => {
    if (key.dataset.code === event.code) {
      event.preventDefault();
      key.classList.remove("pressed");
      if (event.code === "CapsLock") {
        onCapslock();
      }
    }

    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
      toLowerCase();
      isUpperCase = false;
      keyboard.childNodes.forEach((key) => {
        if (key.dataset.shift) {
          if (lang === 'en') {
          key.textContent = key.dataset.key;
          } else if (lang === 'ru') {
            if (key.dataset.ru) {
              key.textContent = key.dataset.ru
            } else {
              key.textContent = key.dataset.key;
            }
          }
        }
      });
    }
  });
}

function onBackspace() {
  let cursor = textarea.selectionStart;
  let arrOfValues = textarea.value.split("");
  if (textarea.selectionStart !== textarea.selectionEnd) {
    arrOfValues.splice(
      textarea.selectionStart,
      textarea.selectionEnd - textarea.selectionStart
    );
    textarea.value = arrOfValues.join("");
    textarea.selectionStart = textarea.selectionEnd = cursor;
  } else if (textarea.selectionStart === textarea.selectionEnd) {
    arrOfValues.splice(textarea.selectionStart - 1, 1);
    textarea.value = arrOfValues.join("");
    textarea.selectionStart = textarea.selectionEnd = cursor - 1;
  }
}

function onCapslock() {
  if (isUpperCase === false) {
    isUpperCase = true;
    capslock.classList.add("capslock-on");
    toUpperCase();
  } else if (isUpperCase === true) {
    isUpperCase = false;
    capslock.classList.remove("capslock-on");
    toLowerCase();
  }
}

function onDel(event) {
  event.preventDefault();
  let arrOfValues = textarea.value.split("");
  let cursor = textarea.selectionStart;
  if (textarea.selectionStart !== textarea.selectionEnd) {
  arrOfValues.splice(textarea.selectionStart,
    textarea.selectionEnd - textarea.selectionStart)
  } else if (textarea.selectionStart === textarea.selectionEnd) {
  arrOfValues.splice(textarea.selectionStart, 1);
  }
  textarea.value = arrOfValues.join("");
  textarea.selectionStart = textarea.selectionEnd = cursor;
}

function translate() {
  if (lang === "en") {
    lang = "ru";
  } else if (lang === "ru") {
    lang = "en";
  }

  keyboard.childNodes.forEach((key) => {
    if (key.dataset.ru) {
      if (lang === "ru") {
        key.textContent = key.dataset.ru;
      } else {
        key.textContent = key.dataset.key;
      }
    }
  });
}

function onShift() {
  toUpperCase();
  isUpperCase = true;
  shift = true;

  keyboard.childNodes.forEach((key) => {
    if (key.dataset.shift) {
      key.textContent = key.dataset.shift;
    }
  });
}

function toUpperCase() {
  keyboard.childNodes.forEach((key) => {
    if (key.dataset.ru) {
      key.textContent = key.textContent.toUpperCase();
    }
  });
}

function toLowerCase() {
  keyboard.childNodes.forEach((key) => {
    if (key.dataset.ru) {
      key.textContent = key.textContent.toLowerCase();
    }
  });
}

function onTab () {
  textarea.setRangeText('    ', textarea.selectionStart, textarea.selectionEnd, "end")
}

function onEnter() {
  textarea.setRangeText("\n", textarea.selectionStart, textarea.selectionEnd, "end")
}

function onArrowLeft() {
  let cursor = textarea.selectionStart
  if (cursor === 0) return
  textarea.selectionStart = textarea.selectionEnd = cursor - 1
}

function onArrowRight() {
  let cursor = textarea.selectionStart
  textarea.selectionStart = textarea.selectionEnd = cursor + 1
}

function onArrowUp() {
  let cursor = textarea.selectionStart - 1
  let value = textarea.value
  let beforeCursor = value.slice(0, textarea.selectionStart).split('\n')

  if (beforeCursor[0].length === cursor + 1) return

  let position

  if (beforeCursor[beforeCursor.length - 1].length > beforeCursor[beforeCursor.length - 2].length) {
      position = cursor - beforeCursor[beforeCursor.length - 1].length
  } else {
      position = cursor - beforeCursor[beforeCursor.length - 1].length - (beforeCursor[beforeCursor.length - 2].length - beforeCursor[beforeCursor.length - 1].length)
  }
  textarea.selectionStart = textarea.selectionEnd = position
}

function onArrowDown() {
  let cursor = textarea.selectionStart
  let value = textarea.value

  let rows = value.split('\n')

  let cheсkLastRow = value.length - rows[rows.length - 1].length

  let beforeCursor = value.slice(textarea.value[0], textarea.selectionStart).split('\n')
  let afterCursor = value.slice(textarea.selectionStart, value.length).split('\n')

  if (rows.length === 1) return
  if (cursor >= cheсkLastRow) return

  let position

  if (beforeCursor[beforeCursor.length - 1].length > afterCursor[1].length) {
      position = cursor + afterCursor[1].length + afterCursor[0].length + 1
  } else {
      position = cursor + afterCursor[0].length + beforeCursor[beforeCursor.length - 1].length + 1
  }

  textarea.selectionStart = textarea.selectionEnd = position
}

