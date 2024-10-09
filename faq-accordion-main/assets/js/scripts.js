class Accordion {
  constructor(id) {
    this.id = id;
  }

  openAccordion() {
    const btn = document.querySelector(`#${this.id} .accordion__button`);
    const title = document.querySelector(`#${this.id} .accordion__title`);

    btn.addEventListener("click", () => {
      const content = document.querySelector(`#${this.id} .accordion__body`);
      const button = document.querySelector(`#${this.id} .accordion__button`);

      if (content.style.display == "block") {
        content.style.display = "none";
        button.setAttribute("src", "./assets/images/icon-plus.svg");
      } else {
        content.style.display = "block";
        button.setAttribute("src", "./assets/images/icon-minus.svg");
      }
    });

    title.addEventListener("click", () => {
      const content = document.querySelector(`#${this.id} .accordion__body`);
      const button = document.querySelector(`#${this.id} .accordion__button`);

      if (content.style.display == "block") {
        content.style.display = "none";
        button.setAttribute("src", "./assets/images/icon-plus.svg");
      } else {
        content.style.display = "block";
        button.setAttribute("src", "./assets/images/icon-minus.svg");
      }
    });
  }
}

const accordionElements = document.querySelectorAll(".accordion__container");
const allAccordionElementsArray = [...accordionElements];

const createAccordionInstances = function (accordionElementsArray) {
  const accordionInstances = [];
  accordionElementsArray.forEach((element) => {
    const accordionInstance = new Accordion(element.id);
    accordionInstances.push(accordionInstance);
  });

  return accordionInstances;
};

const allAccordionInstances = createAccordionInstances(
  allAccordionElementsArray,
);

allAccordionInstances[0].openAccordion();
allAccordionInstances[1].openAccordion();
allAccordionInstances[2].openAccordion();
allAccordionInstances[3].openAccordion();
