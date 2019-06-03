/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import $ from "jquery";

export class BaseElement {
  constructor() {
    this.element = null;
  }

  appendToElement(el) {
    this.createElement();
    el.append(this.element);
    this.enableJS();
  }

  createElement() {
    const s = this.getElementString();
    this.element = $(s);
  }

  getElementString() {
    throw "Please ovverride getELementString() in BaseElement";
  }

  enableJS() {
    // componentHandler.upgradeElement(this.element[0]);
  }
}
