const data = [
  {
    key: '`',
    ru: 'ё',
    code: 'Backquote',
    shift: '~',
  },
  {
    key: '1',
    code: 'Digit1',
    shift: '!',
  },
  {
    key: '2',
    code: 'Digit2',
    shift: '@',
  },
  {
    key: '3',
    code: 'Digit3',
    shift: '#',
  },
  {
    key: '4',
    code: 'Digit4',
    shift: '$',
  },
  {
    key: '5',
    code: 'Digit5',
    shift: '%',
  },
  {
    key: '6',
    code: 'Digit6',
    shift: '^',
  },
  {
    key: '7',
    code: 'Digit7',
    shift: '&',
  },
  {
    key: '8',
    code: 'Digit8',
    shift: '*',
  },
  {
    key: '9',
    code: 'Digit9',
    shift: '(',
  },
  {
    key: '0',
    code: 'Digit0',
    shift: ')',
  },
  {
    key: '-',
    code: 'Minus',
    shift: '_',
  },
  {
    key: '=',
    code: 'Equal',
    shift: '+',
  },
  {
    key: 'Backspace',
    code: 'Backspace',
  },
  {
    key: 'Tab',
    code: 'Tab',
  },
  {
    key: 'q',
    ru: 'й',
    code: 'KeyQ',
  },
  {
    key: 'w',
    ru: 'ц',
    code: 'KeyW',
  },
  {
    key: 'e',
    ru: 'у',
    code: 'KeyE',
  },
  {
    key: 'r',
    ru: 'к',
    code: 'KeyR',
  },
  {
    key: 't',
    ru: 'е',
    code: 'KeyT',
  },
  {
    key: 'y',
    ru: 'н',
    code: 'KeyY',
  },
  {
    key: 'u',
    ru: 'г',
    code: 'KeyU',
  },
  {
    key: 'i',
    ru: 'ш',
    code: 'KeyI',
  },
  {
    key: 'o',
    ru: 'щ',
    code: 'KeyO',

  },
  {
    key: 'p',
    ru: 'з',
    code: 'KeyP',
  },
  {
    key: '[',
    ru: 'х',
    code: 'BracketLeft',
    shift: '{',
  },
  {
    key: ']',
    ru: 'ъ',
    code: 'BracketRight',
    shift: '}',
  },
  {
    key: '\\',
    code: 'Backslash',
    shift: '|',
  },
  {
    key: 'del',
    code: 'Delete',
  },
  {
    key: 'CapsLock',
    code: 'CapsLock',
  },
  {
    key: 'a',
    ru: 'ф',
    code: 'KeyA',
  },
  {
    key: 's',
    ru: 'ы',
    code: 'KeyS',
  },
  {
    key: 'd',
    ru: 'в',
    code: 'KeyD',
  },
  {
    key: 'f',
    ru: 'а',
    code: 'KeyF',
  },
  {
    key: 'g',
    ru: 'п',
    code: 'KeyG',
  },
  {
    key: 'h',
    ru: 'р',
    code: 'KeyH',
  },
  {
    key: 'j',
    ru: 'о',
    code: 'KeyJ',
  },
  {
    key: 'k',
    ru: 'л',
    code: 'KeyK',
  },
  {
    key: 'l',
    ru: 'д',
    code: 'KeyL',
  },
  {
    key: ';',
    ru: 'ж',
    code: 'Semicolon',
    shift: ':',
  },
  {
    key: "'",
    ru: 'э',
    code: 'Quote',
    shift: '"',
  },
  {
    key: 'Enter',
    code: 'Enter',
  },
  {
    key: 'Shift',
    code: 'ShiftLeft',
  },
  {
    key: 'z',
    ru: 'я',
    code: 'KeyZ',
  },
  {
    key: 'x',
    ru: 'ч',
    code: 'KeyX',
  },
  {
    key: 'c',
    ru: 'с',
    code: 'KeyC',
  },
  {
    key: 'v',
    ru: 'м',
    code: 'KeyV',
  },
  {
    key: 'b',
    ru: 'и',
    code: 'KeyB',
  },
  {
    key: 'n',
    ru: 'т',
    code: 'KeyN',
  },
  {
    key: 'm',
    ru: 'ь',
    code: 'KeyM',
  },
  {
    key: ',',
    ru: 'б',
    code: 'Comma',
    shift: '<',
  },
  {
    key: '.',
    ru: 'ю',
    code: 'Period',
    shift: '>',
  },
  {
    key: '/',
    ru: '.',
    code: 'Slash',
    shift: '?',
  },
  {
    key: '▲',
    code: 'ArrowUp',
  },
  {
    key: 'Shift',
    code: 'ShiftRight',
  },
  {
    key: 'Ctrl',
    code: 'ControlLeft',
  },
  {
    key: 'Win',
    code: 'MetaLeft',
  },
  {
    key: 'Alt',
    code: 'AltLeft',
  },
  {
    key: ' ',
    code: 'Space',
  },
  {
    key: 'Alt',
    code: 'AltRight',
  },
  {
    key: '◄',
    code: 'ArrowLeft',
  },
  {
    key: '▼',
    code: 'ArrowDown',
  },
  {
    key: '►',
    code: 'ArrowRight',
  },
  {
    key: 'Ctrl',
    code: 'ControlRight',
  },
];

let lang = 'en';
let shift = false;
let alt = false;
let isUpperCase = false;
const container = document.createElement('div');
container.classList.add('container');

const textarea = document.createElement('textarea');
textarea.classList.add('text');
textarea.rows = '15';

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const sticker = document.createElement('div');
sticker.classList.add('sticker');
sticker.textContent = 'Нажми левые Shift + Alt для переключения языка';

document.body.append(container);
container.append(textarea, keyboard, sticker);

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  }
}
getLocalStorage();

const keys = data.map((el) => {
  const key = document.createElement('button');
  const className = el.code.toLocaleLowerCase();
  key.classList.add('key', className);
  key.setAttribute('data-code', el.code);
  key.setAttribute('data-key', el.key);

  if (el.ru) {
    key.setAttribute('data-ru', el.ru);
  }

  if (el.shift) {
    key.setAttribute('data-shift', el.shift);
  }

  if (el.ru) {
    key.textContent = lang === 'en' ? el.key : el.ru;
  } else {
    key.textContent = el.key;
  }
  return key;
});
keyboard.append(...keys);

const backspace = document.querySelector('.backspace');
const capslock = document.querySelector('.capslock');
const del = document.querySelector('.delete');
const tab = document.querySelector('.tab');
const enter = document.querySelector('.enter');
const arrowUp = document.querySelector('.arrowup');
const arrowDown = document.querySelector('.arrowdown');
const arrowLeft = document.querySelector('.arrowleft');
const arrowRight = document.querySelector('.arrowright');
const shiftLeft = document.querySelector('.shiftleft');
const shiftRight = document.querySelector('.shiftright');

function toUpperCase() {
  keyboard.childNodes.forEach((key) => {
    const content = key.textContent.toUpperCase();
    if (key.dataset.ru) {
      key.textContent = content;
    }
  });
}

function toLowerCase() {
  keyboard.childNodes.forEach((key) => {
    const content = key.textContent.toLowerCase();
    if (key.dataset.ru) {
      key.textContent = content;
    }
  });
}

function onBackspace() {
  const cursor = textarea.selectionStart;
  const arrOfValues = textarea.value.split('');
  if (textarea.selectionStart !== textarea.selectionEnd) {
    arrOfValues.splice(
      textarea.selectionStart,
      textarea.selectionEnd - textarea.selectionStart,
    );
    textarea.value = arrOfValues.join('');
    textarea.selectionEnd = cursor;
    textarea.selectionStart = textarea.selectionEnd;
  } else if (textarea.selectionStart === textarea.selectionEnd) {
    arrOfValues.splice(textarea.selectionStart - 1, 1);
    textarea.value = arrOfValues.join('');
    textarea.selectionEnd = cursor - 1;
    textarea.selectionStart = textarea.selectionEnd;
  }
}

function onCapslock() {
  if (isUpperCase === false) {
    isUpperCase = true;
    capslock.classList.add('capslock-on');
    toUpperCase();
  } else if (isUpperCase === true) {
    isUpperCase = false;
    capslock.classList.remove('capslock-on');
    toLowerCase();
  }
}

function onDel(event) {
  event.preventDefault();
  const arrOfValues = textarea.value.split('');
  const cursor = textarea.selectionStart;
  if (textarea.selectionStart !== textarea.selectionEnd) {
    arrOfValues.splice(
      textarea.selectionStart,
      textarea.selectionEnd - textarea.selectionStart,
    );
  } else if (textarea.selectionStart === textarea.selectionEnd) {
    arrOfValues.splice(textarea.selectionStart, 1);
  }
  textarea.value = arrOfValues.join('');
  textarea.selectionEnd = cursor;
  textarea.selectionStart = textarea.selectionEnd;
}

function translate() {
  if (lang === 'en') {
    lang = 'ru';
  } else if (lang === 'ru') {
    lang = 'en';
  }

  keyboard.childNodes.forEach((key) => {
    const ruContent = key.dataset.ru;
    const keyContent = key.dataset.key;
    if (key.dataset.ru) {
      if (lang === 'ru') {
        key.textContent = ruContent;
      } else {
        key.textContent = keyContent;
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

function ofShift(event) {
  if (event.target.classList.contains('shiftleft') || event.target.classList.contains('shiftright')) {
    toLowerCase();
    isUpperCase = false;
    keyboard.childNodes.forEach((key) => {
      if (key.dataset.shift) {
        if (lang === 'en') {
          key.textContent = key.dataset.key;
        } else if (lang === 'ru') {
          if (key.dataset.ru) {
            key.textContent = key.dataset.ru;
          } else {
            key.textContent = key.dataset.key;
          }
        }
      }
    });
  }
}

function onTab() {
  textarea.setRangeText(
    '    ',
    textarea.selectionStart,
    textarea.selectionEnd,
    'end',
  );
}

function onEnter() {
  textarea.setRangeText(
    '\n',
    textarea.selectionStart,
    textarea.selectionEnd,
    'end',
  );
}

function onArrowLeft() {
  const cursor = textarea.selectionStart;
  if (cursor === 0) return;
  textarea.selectionEnd = cursor - 1;
  textarea.selectionStart = textarea.selectionEnd;
}

function onArrowRight() {
  const cursor = textarea.selectionStart;
  textarea.selectionEnd = cursor + 1;
  textarea.selectionStart = textarea.selectionEnd;
}

function onArrowUp() {
  const cursor = textarea.selectionStart - 1;
  const { value } = textarea;
  const beforeCursor = value.slice(0, textarea.selectionStart).split('\n');

  if (beforeCursor[0].length === cursor + 1) return;

  let position;

  if (
    beforeCursor[beforeCursor.length - 1].length
    > beforeCursor[beforeCursor.length - 2].length
  ) {
    position = cursor - beforeCursor[beforeCursor.length - 1].length;
  } else {
    position = cursor
      - beforeCursor[beforeCursor.length - 1].length
      - (beforeCursor[beforeCursor.length - 2].length
        - beforeCursor[beforeCursor.length - 1].length);
  }
  textarea.selectionEnd = position;
  textarea.selectionStart = textarea.selectionEnd;
}

function onArrowDown() {
  const cursor = textarea.selectionStart;
  const { value } = textarea;

  const rows = value.split('\n');

  const cheсkLastRow = value.length - rows[rows.length - 1].length;

  const beforeCursor = value
    .slice(textarea.value[0], textarea.selectionStart)
    .split('\n');
  const afterCursor = value
    .slice(textarea.selectionStart, value.length)
    .split('\n');

  if (rows.length === 1) return;
  if (cursor >= cheсkLastRow) return;

  let position;

  if (beforeCursor[beforeCursor.length - 1].length > afterCursor[1].length) {
    position = cursor + afterCursor[1].length + afterCursor[0].length + 1;
  } else {
    position = cursor
      + afterCursor[0].length
      + beforeCursor[beforeCursor.length - 1].length
      + 1;
  }

  textarea.selectionEnd = position;
  textarea.selectionStart = textarea.selectionEnd;
}

function mouseDown(event) {
  event.preventDefault();
  if (event.target.closest('.key')) {
    event.target.classList.add('pressed');
    if (
      !event.target.classList.contains('shiftright')
      && !event.target.classList.contains('shiftleft')
      && !event.target.classList.contains('capslock')
      && !event.target.classList.contains('enter')
      && !event.target.classList.contains('delete')
      && !event.target.classList.contains('arrowleft')
      && !event.target.classList.contains('arrowright')
      && !event.target.classList.contains('arrowup')
      && !event.target.classList.contains('arrowdown')
      && !event.target.classList.contains('altleft')
      && !event.target.classList.contains('altright')
      && !event.target.classList.contains('tab')
      && !event.target.classList.contains('metaleft')
      && !event.target.classList.contains('controlleft')
      && !event.target.classList.contains('controlright')
      && !event.target.classList.contains('backspace')
    ) {
      textarea.setRangeText(
        isUpperCase
          ? event.target.innerHTML.toUpperCase()
          : event.target.innerHTML.toLowerCase(),
        textarea.selectionStart,
        textarea.selectionEnd,
        'end',
      );
    }
  }
}

function mouseUp(event) {
  event.preventDefault();
  if (event.target.closest('.key')) {
    event.target.classList.remove('pressed');
  }
}

function keyDown(event) {
  keyboard.childNodes.forEach((key) => {
    if (key.dataset.code === event.code) {
      event.preventDefault();
      key.classList.add('pressed');

      if (
        event.code !== 'ShiftRight'
        && event.code !== 'ShiftLeft'
        && event.code !== 'CapsLock'
        && event.code !== 'Enter'
        && event.code !== 'Delete'
        && event.code !== 'ArrowLeft'
        && event.code !== 'ArrowRight'
        && event.code !== 'ArrowUp'
        && event.code !== 'ArrowDown'
        && event.code !== 'AltLeft'
        && event.code !== 'AltRight'
        && event.code !== 'Tab'
        && event.code !== 'MetaLeft'
        && event.code !== 'ControlLeft'
        && event.code !== 'ControlRight'
        && event.code !== 'Backspace'
      ) {
        textarea.setRangeText(
          textarea.selectionStart % 112 === 0 && textarea.selectionStart !== 0 ? '\n' : '',
          textarea.selectionStart,
          textarea.selectionEnd,
          'end',
        );

        textarea.setRangeText(
          isUpperCase
            ? key.innerHTML.toUpperCase()
            : key.innerHTML.toLowerCase(),
          textarea.selectionStart,
          textarea.selectionEnd,
          'end',
        );
      }

      if (event.code === 'Backspace') {
        onBackspace();
      }

      if (event.code === 'Delete') {
        onDel(event);
      }

      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        shift = true;
        onShift();
      }

      if (event.code === 'AltLeft') {
        alt = true;
      }

      if (shift && alt) {
        translate();
      }

      if (event.code === 'Tab') {
        onTab();
      }

      if (event.code === 'Enter') {
        onEnter();
      }

      if (event.code === 'ArrowUp') {
        onArrowUp();
      }

      if (event.code === 'ArrowDown') {
        onArrowDown();
      }

      if (event.code === 'ArrowLeft') {
        onArrowLeft();
      }

      if (event.code === 'ArrowRight') {
        onArrowRight();
      }
    }
  });
}

function keyUp(event) {
  shift = false;
  alt = false;
  event.preventDefault();
  keyboard.childNodes.forEach((item) => {
    if (item.dataset.code === event.code) {
      event.preventDefault();
      item.classList.remove('pressed');
      if (event.code === 'CapsLock') {
        onCapslock();
      }
    }

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      toLowerCase();
      isUpperCase = false;
      keyboard.childNodes.forEach((key) => {
        if (key.dataset.shift) {
          if (lang === 'en') {
            key.textContent = key.dataset.key;
          } else if (lang === 'ru') {
            if (key.dataset.ru) {
              key.textContent = key.dataset.ru;
            } else {
              key.textContent = key.dataset.key;
            }
          }
        }
      });
    }
  });
}

backspace.addEventListener('click', onBackspace);
capslock.addEventListener('click', onCapslock);
del.addEventListener('click', onDel);
tab.addEventListener('click', onTab);
enter.addEventListener('click', onEnter);
arrowUp.addEventListener('click', onArrowUp);
arrowDown.addEventListener('click', onArrowDown);
arrowLeft.addEventListener('click', onArrowLeft);
arrowRight.addEventListener('click', onArrowRight);
shiftLeft.addEventListener('mousedown', onShift);
shiftLeft.addEventListener('mouseup', ofShift);
shiftRight.addEventListener('mousedown', onShift);
shiftRight.addEventListener('mouseup', ofShift);

keyboard.addEventListener('mousedown', mouseDown);
keyboard.addEventListener('mouseup', mouseUp);
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
