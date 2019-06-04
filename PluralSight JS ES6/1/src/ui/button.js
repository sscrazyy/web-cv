/* eslint-disable import/prefer-default-export */
import { BaseElement } from "./base-element.js";

export class Button extends BaseElement {
  constructor(title) {
    super();
    this.title = title;
  }

  getElementString() {
    return `<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
${this.title}
</button>`;
  }

  componentMount() {
    console.log("Button mounted");
  }

  componentUpdate(text) {
    console.log(`Update with ${text}`);
  }

  componentUnMount() {
    console.log("Button unmounted");
  }
}
