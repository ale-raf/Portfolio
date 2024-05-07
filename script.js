import { works } from "./works.js";
import { Work } from "./Work.js";

const worksContent = document.querySelector(".works__wrapper");

for (const work of works) {
  let workObj = new Work(
    work.title,
    work.description,
    work.demo,
    work.code,
    work.stack
  );
  let workCard = workObj.displayWorkCard();
  worksContent.appendChild(workCard);
}
