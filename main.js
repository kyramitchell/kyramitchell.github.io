function toggleVideo(id) {
  const vid = document.getElementById(id);

  if (vid.classList.contains("hidden")) {
    vid.classList.remove("hidden");
  } else {
    vid.classList.add("hidden");
  }
}

function scrollToWork() {
  document.getElementById("work").scrollIntoView({ behavior: "smooth" });
}
