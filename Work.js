import { elementFromHtml } from "./utils.js";

export class Work {
  constructor(title, description, demo, code, stack) {
    this._title = title;
    this._description = description;
    this._demo = demo;
    this._code = code;
    this._stack = stack;
  }

  displayWorkCard() {
    const workHtmlElement = elementFromHtml(`
        <div class="works__card">
          <h3>${this._title}</h3>
          <p>${this._description}</p>
  
          ${
            this._demo
              ? `<div class="works__links">
            <a href=${this._demo} target="_blank">Démo</a>
            <span>-</span>
            <a href=${this._code} target="_blank">Code source</a>
          </div>`
              : `<a href=${this._code} target="_blank">Code source</a>`
          }
          
          <div>${this._stack
            .map((stack) => `<img src=${stack}>`)
            .join("")}</div>
        </div>
    `);
    return workHtmlElement;
  }
}
