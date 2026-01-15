import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    const listTitle = document.createElement("h2");
    listTitle.className = "donates-container__title";
    listTitle.textContent = "Список донатов";
    const donates = document.createElement("div");
    donates.classList = "donates-container__donates";

    this.$rootElement.appendChild(listTitle);
    this.$rootElement.appendChild(donates);
  }

  addItem(item) {
    // ...
  }
}
