import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    const appTitle = document.createElement("h1");
    const spanTotal = document.createElement("span");
    spanTotal.textContent = this.state.total;
    appTitle.textContent = "Итого $";

    this.$total = spanTotal;

    appTitle.appendChild(spanTotal);
    this.$rootElement.appendChild(appTitle);

    const donateForm = new Form();
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }

  onItemCreate(amount) {
    // ...
  }
}
