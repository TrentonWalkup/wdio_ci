const Body = {
  get cardSections() {
    return $$("span.div-title");
  },
};

const Contact = {
  get contactForm() {
    return $("#body > div.contact-container.bg-grey > div");
  },
};

module.exports = { Body, Contact };
