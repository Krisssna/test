document.addEventListener("DOMContentLoaded", () => {
  showSection("home");
});

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => section.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}

function loadMoreBlogs() {
  const blogContainer = document.querySelector(".blog-thumbnails");
  for (let i = 5; i <= 8; i++) {
    const blog = document.createElement("div");
    blog.className = "blog-thumbnail";
    blog.innerText = `Blog ${i}`;
    blogContainer.appendChild(blog);
  }
}

let playlistCount = 1;

function loadMorePlaylists() {
  const playlistContainer = document.getElementById("playlists");
  const playlist = document.createElement("div");
  playlist.className = "playlist";
  playlist.innerHTML = `
    <h3>Playlist ${playlistCount}</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/playlist?list=PLELAQjFzxU_4KIqHW9KzB58p-fCeZii8s${playlistCount}" frameborder="0" allowfullscreen></iframe>
  `;
  playlistContainer.appendChild(playlist);
  playlistCount++;
}
