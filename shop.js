/* 
/* SET TEXT FOR HEADER NAVBAR -- DELIVERY DAYS
 */
const deliveryDays = "Liefertage: Dienstag bis Freitag";

/* 
/* SET IMAGE SOURCE FOR ICONS
 */
const aufstrichIcon =
  "url(https://shop.himmel-un-aad.de/image/e5618854/url/475dcb42)";
const fleischIcon =
  "url(https://shop.himmel-un-aad.de/image/b7f34527/url/475dcb42)";
const neuIcon =
  "url(https://shop.himmel-un-aad.de/image/cf8e2011/url/475dcb42)";
const gewuerzeIcon =
  "url(https://shop.himmel-un-aad.de/image/2b14f2e7/url/475dcb42)";
const brotIcon =
  "url(https://shop.himmel-un-aad.de/image/e1382fbb/url/475dcb42)";
const getraenkeIcon =
  "url(https://shop.himmel-un-aad.de/image/ae517ec1/url/475dcb42)";
const nonfoodIcon =
  "url(https://shop.himmel-un-aad.de/image/31db9468/url/475dcb42)";
const trockenprodukteIcon =
  "url(https://shop.himmel-un-aad.de/image/f9165b8a/url/475dcb42)";
const fertiggerichteIcon =
  "url(https://shop.himmel-un-aad.de/image/f74ff33c/url/475dcb42)";
const milchprodukteIcon =
  "url(https://shop.himmel-un-aad.de/image/4adf44fb/url/475dcb42)";
const veganIcon =
  "url(https://shop.himmel-un-aad.de/image/6e1a2a85/url/475dcb42)";
const obstGemueseIcon =
  "url(https://shop.himmel-un-aad.de/image/6bb9eb4e/url/475dcb42)";
const eigeneProdukteIcon =
  "url(https://shop.himmel-un-aad.de/image/1c25e0dd/url/475dcb42)";
const aktionenIcon =
  "url(https://shop.himmel-un-aad.de/image/8cbd4fe6/url/475dcb42)";
const konsequentRegionalIcon =
  "url(https://shop.himmel-un-aad.de/image/8b042294/url/475dcb42)";
const regionalIcon =
  "url(https://shop.himmel-un-aad.de/image/97a145a0/url/475dcb42)";
const überRegionalIcon =
  "url(https://shop.himmel-un-aad.de/image/ea5e5d49/url/475dcb42)";

window.addEventListener("DOMContentLoaded", function () {
  //display alert-info ('Hallo..') in s-filter-column, not in s-main
  const q = document.querySelectorAll(".s-filter-column .alert");
  if (q) {
    q.forEach((el) => {
      el.parentNode.classList.remove("d-sm-none");
    });
  }

  // remove cols from filterColumn
  const filterColumn = document.querySelector(".s-filter-column");
  if (filterColumn) {
    for (let i = filterColumn.classList.length - 1; i >= 0; i--) {
      const className = filterColumn.classList[i];
      if (className.startsWith("col-")) {
        filterColumn.classList.remove(className);
      }
      filterColumn.classList.add("col-12");
    }
    filterColumn.lastElementChild.classList.remove("mb-sm-0");
  }

  // remove cols from mainColumn
  const mainColumn = document.querySelector(".s-main-column");
  if (mainColumn) {
    for (let i = mainColumn.classList.length - 1; i >= 0; i--) {
      const className = mainColumn.classList[i];
      if (className.startsWith("col-")) {
        mainColumn.classList.remove(className);
      }
      mainColumn.classList.add("col-12");

      //change grid items per row
      const panelBody = mainColumn.querySelector(".s-panel-body");
      if (panelBody) {
        panelBody.classList.remove("align-items-start");
        panelBody.classList.add("align-items-stretch");
        panelBody.querySelectorAll(".s-item-container").forEach((item) => {
          item.classList.remove(
            "col-sm-12",
            "col-md-6",
            "col-lg-4",
            "col-xl-4"
          );
          item.classList.add("col-sm-4", "col-md-3", "col-xl-3");
        });
      }
      let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (!mutation.addedNodes) return;

          for (let i = 0; i < mutation.addedNodes.length; i++) {
            let item = mutation.addedNodes[i];
            item.classList.remove(
              "col-sm-12",
              "col-md-6",
              "col-lg-4",
              "col-xl-4"
            );
            item.classList.add("col-sm-4", "col-md-3", "col-xl-3");
          }
        });
      });

      observer.observe(panelBody, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
      });

      //   observer.disconnect()
    }
  }

  const navbar = document.querySelector("#navbar-header .navbar-nav");

  //add delivery radius icon to header bar
  const radiusLi = document.createElement("li");
  radiusLi.classList.add("nav-item", "s-header-nav-item", "delivery-radius");
  radiusLi.dataset.toggle = "modal";
  radiusLi.dataset.target = "#dialog-ajax-default";
  radiusLi.title = "Lieferradius";
  const radiusIcon = document.createElement("i");
  const radiusLink = document.createElement("a");
  radiusLink.href = "https://www.himmel-un-aad.de/lieferradius/";
  radiusLink.target = "_blank";
  radiusIcon.classList.add("fas", "fa-map-marker-alt");
  radiusIcon.style.color = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--primary-green");
  radiusIcon.style.fontSize = "25px";
  radiusLink.append(radiusIcon);
  radiusLi.append(radiusLink);
  if (navbar) {
    navbar.prepend(radiusLi);
  }

  //add delivery days to header bar
  const deliveryLi = document.createElement("li");
  deliveryLi.classList.add("nav-item", "s-header-nav-item", "nav-link");
  const deliveryDaysWrap = document.createElement("span");
  deliveryDaysWrap.append(deliveryDays);
  deliveryLi.append(deliveryDaysWrap);
  if (navbar) {
    navbar.prepend(deliveryLi);
  }

  //add Icons
  const filterCategories = document.querySelector(
    '.filter-attribute[data-filter-attribute="category"]'
  );
  if (filterCategories) {
    // const filterCategoriesInputs = filterCategories.querySelectorAll('.s-filter-choices .ilx-filter-item input');
    const checkExist = setInterval(function () {
      if (
        filterCategories.querySelectorAll(
          ".s-filter-choices .ilx-filter-item input"
        ).length > 0
      ) {
        clearInterval(checkExist);
        const filterCategoriesInputs = filterCategories.querySelectorAll(
          ".s-filter-choices .ilx-filter-item input"
        );
        filterCategoriesInputs.forEach((input, i) => {
          const span = document.createElement("span");
          span.classList.add("icon");
          switch (input.value) {
            case "Obst & Gemüse":
              span.style.backgroundImage = obstGemueseIcon;
              break;
            case "Backwaren":
              span.style.backgroundImage = brotIcon;
              break;
            case "Milchprodukte & Eier":
              span.style.backgroundImage = milchprodukteIcon;
              break;
            case "Fertiges":
              span.style.backgroundImage = fertiggerichteIcon;
              break;
            case "Fleisch & Wurst":
              span.style.backgroundImage = fleischIcon;
              break;
            case "Trockenprodukte":
              span.style.backgroundImage = trockenprodukteIcon;
              break;
            case "Aufstriche":
              span.style.backgroundImage = aufstrichIcon;
              break;
            case "Gewürze & Öl":
              span.style.backgroundImage = gewuerzeIcon;
              break;
            case "Getränke":
              span.style.backgroundImage = getraenkeIcon;
              break;
            case "Neu bei uns":
              span.style.backgroundImage = neuIcon;
              break;
            case "Vegan":
              span.style.backgroundImage = veganIcon;
              break;
            case "Non-Food":
              span.style.backgroundImage = nonfoodIcon;
              break;
            case "Eigene Produkte":
              span.style.backgroundImage = eigeneProdukteIcon;
              break;
            case "Konsequent Regional":
              span.style.backgroundImage = konsequentRegionalIcon;
              break;
            case "Regional":
              span.style.backgroundImage = regionalIcon;
              break;
            case "Überregional":
              span.style.backgroundImage = überRegionalIcon;
              break;
            case "Aktionen":
              span.style.backgroundImage = aktionenIcon;
              break;
          }

          input.parentNode.prepend(span);
        });
      }
    }, 100);
  }
});
