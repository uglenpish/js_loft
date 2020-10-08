/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, 
 цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при 
 помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться 
 только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, 
 то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

let counter = 0;
// let currentDrag;

document.addEventListener('mousemove', (e) => {});

export function createDiv() {
  const div = document.createElement('div');

  const maxWidth = 100,
    minWidth = 30,
    maxHeight = 100,
    minHeight = 30,
    maxX = 500,
    minX = 0,
    maxY = 1000,
    minY = 0;

  div.classList.add('draggable-div');

  // Рандомизатор значений
  function randomValue(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  // Рандомизатор цвета
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  const width = randomValue(minWidth, maxWidth);
  const height = randomValue(minHeight, maxHeight);

  div.style.width = width + 'px';
  div.style.height = height + 'px';

  div.style.background = getRandomColor();

  const positionX = randomValue(minX, maxX);
  const positionY = randomValue(minY, maxY);

  // div.style.position = 'relative';

  div.style.top = positionX + 'px';
  div.style.left = positionY + 'px';

  div.draggable = true;

  return div;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', () => {
  // e.preventDefault();
  const div = createDiv();
  homeworkContainer.appendChild(div);
  counter++;
  div.textContent = counter;
});
