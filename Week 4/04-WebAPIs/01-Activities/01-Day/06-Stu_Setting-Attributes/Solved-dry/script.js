const sites = [
  {
    element: document.querySelector(".site1"),
    title: "Site 1",
    url: "https://google.com",
    imgSrc: "images/image_1.jpg",
    imgAlt: "person working"
  },
  {
    element: document.querySelector(".site2"),
    title: "Site 2",
    url: "https://twitter.com",
    imgSrc: "images/image_2.jpg",
    imgAlt: "group brainstorm"
  },
  {
    element: document.querySelector(".site3"),
    title: "Site 3",
    url: "https://instagram.com",
    imgSrc: "images/image_3.jpg",
    imgAlt: "programmers working"
  }
];

function renderSite(siteData) {
  const titleElement = siteData.element.querySelector("h4");
  const linkElement = siteData.element.querySelector("a");
  const imgElement = linkElement.querySelector("img");

  titleElement.textContent = siteData.title;
  titleElement.setAttribute(
    "style",
    "text-decoration: underline; padding-left:10px; margin: 0"
  );
  linkElement.setAttribute("href", siteData.url);
  imgElement.setAttribute("src", siteData.imgSrc);
  imgElement.setAttribute("alt", siteData.imgAlt);
  imgElement.setAttribute("style", "padding:10px;");
}

for (let i = 0; i < sites.length; i++) {
  renderSite(sites[i]);
}
