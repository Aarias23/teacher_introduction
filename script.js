document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.querySelector("video");

  if (videoElement) {
    console.log("Video element is ready.");
    // Add any additional functionality here if needed
  } else {
    console.error("Video element not found.");
  }
});
