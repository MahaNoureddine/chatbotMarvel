document.addEventListener("DOMContentLoaded", function () {
  const photoCatalog = document.getElementById("photoCatalog");

  // Sample photo data
  const photos = [
    { src: "thor.jpg", title: "Thor" },
    { src: "spi.jpg", title: "Spider man" },
    { src: "av.jpg", title: "The Avengers" },
    { src: "thor.jpg", title: "Thor" },s
    // Add more photos as needed
  ];

  // Populate the photo catalog
  photos.forEach(photo => {
    const photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");

    const img = document.createElement("img");
    img.src = photo.src;

    const title = document.createElement("div");
    title.classList.add("photo-title");
    title.innerText = photo.title;

    photoContainer.appendChild(img);
    photoContainer.appendChild(title);
    photoCatalog.appendChild(photoContainer);
  });
});