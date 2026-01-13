import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: "",
    };

    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));

    const formLabel = document.createElement("label");
    formLabel.classList.add("donate-form__input-label");
    formLabel.textContent = "Введите сумму в $";
    formLabel.htmlFor = "amount";

    const formInput = document.createElement("input");
    formInput.classList.add("donate-form__donate-input");
    formInput.type = "number";
    formInput.id = "amount";
    this.$input = formInput;
    this.$input.addEventListener("input", this.handleInput.bind(this));

    const formButton = document.createElement("button");
    formButton.classList.add("donate-form__submit-button");
    formButton.textContent = "Задонатить";
    this.$button = formButton;

    formLabel.appendChild(formInput);
    this.$rootElement.appendChild(formLabel);
    this.$rootElement.appendChild(formButton);
  }

  get isValid() {
    if (this.state.amount > 0 && this.state.amount < 101) {
      return true;
    } else {
      return false;
    }
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    console.log(this.isValid);
    if (this.isValid === true) {
      this.$button.disabled = false;
    } else if (this.isValid === false) {
      this.$button.disabled = true;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.state.amount;
    }
    this.state.amount = "";
    this.$input.value = "";
  }
}
