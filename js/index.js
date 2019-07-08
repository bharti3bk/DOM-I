const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]) 
git 
// Global variables
const cta = siteContent["cta"];
const main = siteContent["main-content"];
const contact = siteContent["contact"];
const nav = siteContent["nav"];

// Global functions

function fillContent(data, listSelector, ...keys) {
  const list = document.querySelectorAll(listSelector);

  if(keys.length != list.length) {
    console.log("keys length does not match with list length");
    return;
  }

  for(var i = 0 ; i < keys.length; i++) {
    list[i].textContent = data[keys[i]];
  }
}

function createElement(type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  element.style.color = "green";
  return element;
}

/*Task 1 */
document.querySelector("#cta-img").src =  cta["img-src"];
document.querySelector("#middle-img").src = main["middle-img-src"];


/*Task 2 */

// Fill navigation
fillContent(nav, "nav a", "nav-item-1", "nav-item-2", "nav-item-3", "nav-item-4", "nav-item-5", "nav-item-6");

// Fill cta section
document.querySelector(".cta-text h1").textContent = cta["h1"]
document.querySelector(".cta-text button").textContent = cta["button"]

// Fill main section
fillContent(main, ".top-content .text-content h4", "features-h4", "about-h4");
fillContent(main, ".top-content .text-content p", "features-content", "about-content");

fillContent(main, ".bottom-content .text-content h4", "services-h4", "product-h4", "vision-h4");
fillContent(main, ".bottom-content .text-content p", "services-content", "product-content", "vision-content");


