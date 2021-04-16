/* 
/* SET TEXT FOR HEADER NAVBAR -- DELIVERY DAYS
 */
const deliveryDays = 'Liefertage: Dienstag und Freitag';

/* 
/* SET IMAGE SOURCE FOR ICONS
 */
const aufstrichIcon = 'url(https://my.frachtpilot.de/image/bc27b782/url/475dcb42)'
const fleischIcon ='url(https://my.frachtpilot.de/image/743194ae/url/475dcb42)'
const neuIcon ='url(https://my.frachtpilot.de/image/8a995441/url/475dcb42)'
const gewuerzeIcon = 'url(https://my.frachtpilot.de/image/d7e76082/url/475dcb42)'
const brotIcon = 'url(https://my.frachtpilot.de/image/f9f5144e/url/475dcb42)'
const getraenkeIcon = 'url(https://my.frachtpilot.de/image/7a196cc0/url/475dcb42)'
const nonfoodIcon = 'url(https://my.frachtpilot.de/image/75043000/url/475dcb42)'
const trockenprodukteIcon ='url(https://my.frachtpilot.de/image/973b7d3f/url/475dcb42)'
const fertiggerichteIcon = 'url(https://my.frachtpilot.de/image/5c97e5ef/url/475dcb42)'
const milchprodukteIcon = 'url(https://my.frachtpilot.de/image/e548bfec/url/475dcb42)'
const veganIcon ='url(https://my.frachtpilot.de/image/a5cb912c/url/475dcb42)'
const obstGemueseIcon = 'url(https://my.frachtpilot.de/image/814a783d/url/475dcb42)'


window.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.filter-attribute[data-filter-attribute="category"]').style.display='block';
    //display alert-info ('Hallo..') in s-filter-column, not in s-main
    const q = document.querySelectorAll('.s-filter-column .alert');
    q.forEach(el => {
        el.parentNode.classList.remove('d-sm-none')
    });

    // remove cols from filterColumn
    const filterColumn = document.querySelector('.s-filter-column');
    for (let i = filterColumn.classList.length - 1; i >= 0; i--) {
        const className = filterColumn.classList[i];
        if (className.startsWith('col-')) {
            filterColumn.classList.remove(className);
        }
        filterColumn.classList.add('col-12')
    }
    filterColumn.lastElementChild.classList.remove('mb-sm-0')

    // remove cols from mainColumn
    const mainColumn = document.querySelector('.s-main-column');
    for (let i = mainColumn.classList.length - 1; i >= 0; i--) {
        const className = mainColumn.classList[i];
        if (className.startsWith('col-')) {
            mainColumn.classList.remove(className);
        }
        mainColumn.classList.add('col-12');
    }

    //remove filter attributes, keep categories
    // document.querySelectorAll('.filter-attribute:not([data-filter-attribute="category"])').forEach(el => {el.style.display="none"})

    const panelBody = mainColumn.querySelector('.s-panel-body')
    panelBody.classList.remove('align-items-start')
    panelBody.classList.add('align-items-stretch')
    panelBody.querySelectorAll('.s-item-container').forEach(item => {
        for (let i = item.classList.length - 1; i >= 0; i--) {
            const className = item.classList[i];
            if (className.startsWith('col-')) {
                item.classList.remove(className);
            }


        }
        item.classList.add('col-6', 'col-sm-4', 'col-md-3', 'col-xl-3');
    });

    // add offset to inner container centered
    // const contentRowChild = document.querySelector('.content-container .row').firstElementChild;
    // contentRowChild.classList.remove('col-xl-9');
    // contentRowChild.classList.add('col-xl-7', 'offset-xl-2');

    const header = document.getElementById('navbar-header');
    const navbar = document.querySelector('#navbar-header .navbar-nav');

    //add delivery radius icon to header bar
    const radiusLi = document.createElement('li');
    radiusLi.classList.add('nav-item', 's-header-nav-item');
    const radiusDays = document.createElement('i');
    radiusDays.classList.add('fas', 'fa-map-marker-alt');
    radiusLi.append(radiusDays);
    navbar.prepend(radiusLi);

    //add delivery days to header bar
    const deliveryLi = document.createElement('li');
    deliveryLi.classList.add('nav-item', 's-header-nav-item', 'nav-link');
    const deliveryDaysWrap = document.createElement('span');
    deliveryDaysWrap.append(deliveryDays);
    deliveryLi.append(deliveryDaysWrap);

    navbar.prepend(deliveryLi);


    //add Icons
    const filterCategories = document.querySelector('.filter-attribute[data-filter-attribute="category"]');
    // const filterCategoriesInputs = filterCategories.querySelectorAll('.s-filter-choices .ilx-filter-item input');
    // console.log('filterCategories', filterCategories, 'filterCategoriesInputs', filterCategoriesInputs);
    let filterCategoriesInputs;
    for (let i = 0; i < filterCategories.childNodes.length; i++) {
        if (hasClass(filterCategories.childNodes[i], "s-filter-choices")) {
            filterCategoriesInputs = filterCategories.childNodes[i];
            break;
        }
    }
    filterCategoriesInputs.forEach((input, i) => {
        const span = document.createElement('span');
        span.classList.add('icon');
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
                span.style.ba
                ckgroundImage = getraenkeIcon;
                break;
            case "Neu bei uns":
                span.style.backgroundImage = getraenkeIcon;
                break;
            case "Vegan":
                span.style.backgroundImage = veganIcon;
                break;
            case "Non-Food":
                span.style.backgroundImage = nonfoodIcon;
                break;
        };

        input.parentNode.prepend(span);

    });

});


function hasClass(target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}