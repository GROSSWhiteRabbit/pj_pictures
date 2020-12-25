import modals from "./modul/modal";
import sliders from "./modul/sliders";
import forms from "./modul/forms";
import mask from "./modul/mask";
import checkTextInputs from "./modul/checkTextInputs";
import showMoreStiles from "./modul/showMoreStiles";
import calc from "./modul/calc";
import filter from "./modul/filter";
import accordion from "./modul/accordion";
import showImg from "./modul/showImg";
import burger from "./modul/burger";
import scrolling from "./modul/scrolling";
import drop from "./modul/drop";

document.addEventListener("DOMContentLoaded", () => {
    modals();
    sliders(".main-slider-item", "vertical");
    sliders(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn");
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStiles(".button-styles", ".styles-2");
    calc(
        "#size",
        "#material",
        "#options",
        ".calc-price",
        ".calc .promocode",
        ".calc form"
    );
    filter(
        ".portfolio-menu > li",
        ".portfolio-block",
        ".portfolio-no",
        "active"
    );
    accordion(".accordion-heading");
    showImg();
    burger();
    // scrolling('[href="#up"]','#up');'
    document
        .querySelectorAll('[href^="#"]')
        .forEach((triger) =>
            scrolling(triger, triger.hash, triger.hash === "#up")
        );
    drop();
});
