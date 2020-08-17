import {createMenuTemplate} from "./view/menu.js";
import {createFiltersTemplate} from "./view/filters.js";
import {createBoardTemplate} from "./view/board.js";
import {createSortingTemplate} from "./view/sorting.js";
import {createTasksWrapperTemplate} from "./view/tasks-wrapper.js";
import {createCardTemplate} from "./view/card.js";
import {createCardEditTemplate} from "./view/card-edit.js";
import {createMoreButtonTemplate} from "./view/more-button.js";

import {render} from "./utils.js";

import {generateTask} from "./mock/task.js";

import {generateFilter} from "./mock/filter.js";

const CARDS_COUNT = 20;
const CARDS_COUNT_PER_STEP = 8;

const tasks = new Array(CARDS_COUNT).fill().map(generateTask);
const filters = generateFilter(tasks);

const siteHeader = document.querySelector(`.main__control`);
const siteMainSection = document.querySelector(`.main`);

render(siteHeader, createMenuTemplate(), `beforeend`);
render(siteMainSection, createFiltersTemplate(filters), `beforeend`);
render(siteMainSection, createBoardTemplate(), `beforeend`);

const board = document.querySelector(`.board`);

render(board, createSortingTemplate(), `beforeend`);
render(board, createTasksWrapperTemplate(), `beforeend`);

const cardsWrapper = document.querySelector(`.board__tasks`);

render(cardsWrapper, createCardEditTemplate(tasks[0]), `beforeend`);

for (let i = 1; i < Math.min(tasks.length, CARDS_COUNT_PER_STEP); i++) {
  render(cardsWrapper, createCardTemplate(tasks[i]), `beforeend`);
}

if (tasks.length > CARDS_COUNT_PER_STEP) {
  let renderedTaskCount = CARDS_COUNT_PER_STEP;

  render(board, createMoreButtonTemplate(), `beforeend`);

  const moreButton = board.querySelector(`.load-more`);

  moreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    tasks
      .slice(renderedTaskCount, renderedTaskCount + CARDS_COUNT_PER_STEP)
      .forEach((task) => render(cardsWrapper, createCardTemplate(task), `beforeend`));

    renderedTaskCount += CARDS_COUNT_PER_STEP;

    if (renderedTaskCount >= tasks.length) {
      moreButton.remove();
    }
  });
}
