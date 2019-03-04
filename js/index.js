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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const aList = document.getElementsByTagName("a");

aList[0].textContent = "Services";
aList[1].textContent = "Product";
aList[2].textContent = "Vision";
aList[3].textContent = "Features";
aList[4].textContent = "About";
aList[5].textContent = "Contact";


const aTag = document.querySelectorAll('a');
aTag.forEach( function( currentValue ){
  currentValue.style.color = 'green';
});

const blog = document.createElement('a');
blog.textContent = "Blog";
blog.style.color = "green";
const newNav = document.querySelector("nav");
newNav.prepend(blog);

const detonate = document.createElement('a');
detonate.textContent = "Detonate";
detonate.style.color = "green";
const det = document.querySelector("nav");
det.appendChild(detonate);


document.querySelector("h1").textContent = "DOM Is Awesome";
document.querySelector("button").textContent = "Get Started";

let headerPic = document.getElementById("cta-img");
headerPic.setAttribute('src', siteContent["cta"]["img-src"]);

const title = document.getElementsByTagName("h4");
const paragraph = document.getElementsByTagName("p");

title[0].textContent = siteContent["main-content"]["features-h4"];
paragraph[0].textContent = siteContent["main-content"]["features-content"];
title[1].textContent = siteContent["main-content"]["about-h4"];
paragraph[1].textContent = siteContent["main-content"]["about-content"];

let middlePic = document.getElementById("middle-img");
middlePic.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

title[2].textContent = siteContent["main-content"]["services-h4"];
paragraph[2].textContent = siteContent["main-content"]["services-content"];
title[3].textContent = siteContent["main-content"]["product-h4"];
paragraph[3].textContent = siteContent["main-content"]["product-content"];
title[4].textContent = siteContent["main-content"]["vision-h4"];
paragraph[4].textContent = siteContent["main-content"]["vision-content"];

title[5].textContent = siteContent["contact"]["contact-h4"];
paragraph[5].textContent = siteContent["contact"]["address"];
paragraph[6].textContent = siteContent["contact"]["phone"];
paragraph[7].textContent = siteContent["contact"]["email"];

paragraph[8].textContent = siteContent["footer"]["copyright"];