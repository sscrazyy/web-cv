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

    this.componentMount();
  }

  createElement() {
    const s = this.getElementString();
    this.element = $(s);
  }

  removeElement() {
    this.element.remove();

    this.componentUnMount();
  }

  updateElement(text) {
    this.element.text(text);

    this.componentUpdate(text);
  }

  getElementString() {
    throw "Please ovverride getELementString() in BaseElement";
  }

  enableJS() {
    componentHandler.upgradeElement(this.element[0]);
  }

  componentMount() {
    throw "override";
  }

  componentUnMount() {
    throw "override UnMount";
  }

  componentUpdate(text) {
    throw "override Update";
  }
}
