//your JS code here. If required.
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];


const list = document.getElementById("list");

function cleanTitle(title) {
  return title.replace(/^(a |an |the )/i, "").trim();
}

bands.sort((a, b) => {
  const titleA = cleanTitle(a).toLowerCase();
  const titleB = cleanTitle(b).toLowerCase();
  return titleA.localeCompare(titleB);
});
bands.forEach((article) => {
  const li = document.createElement("li");
  li.textContent = article;
  list.appendChild(li);
});