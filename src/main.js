import {createMenuTemplate} from "./view/menu.js";
import {createFiltersTemplate} from "./view/filters.js";
import {createBoardTemplate} from "./view/board.js";
import {createSortingTemplate} from "./view/sorting.js";
import {createTasksWrapperTemplate} from "./view/tasks-wrapper.js";
import {createCardTemplate} from "./view/card.js";
import {createCardEditTemplate} from "./view/card-edit.js";
import {createMoreButtonTemplate} from "./view/more-button.js";
import {render} from "./view/render.js";

const CARDS_COUNT = 3;

const siteHeader = document.querySelector(`.main__control`);
const siteMainSection = document.querySelector(`.main`);

render(siteHeader, createMenuTemplate(), `beforeend`);
render(siteMainSection, createFiltersTemplate(), `beforeend`);
render(siteMainSection, createBoardTemplate(), `beforeend`);

const board = document.querySelector(`.board`);

render(board, createSortingTemplate(), `beforeend`);
render(board, createTasksWrapperTemplate(), `beforeend`);
render(board, createMoreButtonTemplate(), `beforeend`);

const cardsWrapper = document.querySelector(`.board__tasks`);

render(cardsWrapper, createCardEditTemplate(), `beforeend`);

for (let i = 0; i < CARDS_COUNT; i++) {
  render(cardsWrapper, createCardTemplate(), `beforeend`);
}
