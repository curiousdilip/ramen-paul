"use client";
import { useEffect } from "react";
import Head from "next/head";

const Videos = () => {
  useEffect(() => {
    // Initialize the modal functionality
    const videoBoxes = document.querySelectorAll(".video-box");
    videoBoxes.forEach((videoBox) => {
      videoBox.addEventListener("click", () => {
        const videoId = videoBox.getAttribute("data-video-id");
        const videoEmbed = `<iframe width="100%" height="400" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        const videoContainer = document.getElementById("videoContainer");
        videoContainer.innerHTML = videoEmbed;

        // Open the modal
        const videoModal = new window.bootstrap.Modal(
          document.getElementById("videoModal")
        );
        videoModal.show();
      });
    });

    filterVideos("all");
  }, []);

  const filterVideos = (category) => {
    const videoBoxes = document.querySelectorAll(".video-box");
    videoBoxes.forEach((box) => {
      if (
        category === "all" ||
        box.getAttribute("data-category") === category
      ) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });

    const tabs = document.querySelectorAll(".tabs a");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const activeTab = document.querySelector(
      `.tabs a[onclick="filterVideos('${category}')"]`
    );
    if (activeTab) {
      activeTab.classList.add("active");
    }
  };

  return (
    <>
      <section id="videos">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2>Latest Youtube Videos</h2>
                <div className="tabs">
                  <a
                    href="#"
                    className="active"
                    onClick={() => filterVideos("all")}
                  >
                    All
                  </a>
                  <a href="#" onClick={() => filterVideos("ui")}>
                    Ui Design
                  </a>
                  <a href="#" onClick={() => filterVideos("webflow")}>
                    Webflow
                  </a>
                  <a href="#" onClick={() => filterVideos("marketing")}>
                    Marketing
                  </a>
                  <a href="#" onClick={() => filterVideos("content")}>
                    Content
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Video Thumbnails Section */}
          <div className="videos">
            <div
              className="video-box"
              data-category="ui"
              data-video-id="dQw4w9WgXcQ"
            >
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="Video Thumbnail"
                className="img-fluid"
              />
            </div>
            <div
              className="video-box"
              data-category="webflow"
              data-video-id="M7lc1UVf-VE"
            >
              <img
                src="https://img.youtube.com/vi/M7lc1UVf-VE/0.jpg"
                alt="Video Thumbnail"
                className="img-fluid"
              />
            </div>
            <div
              className="video-box"
              data-category="marketing"
              data-video-id="9bZkp7q19f0"
            >
              <img
                src="https://img.youtube.com/vi/9bZkp7q19f0/0.jpg"
                alt="Video Thumbnail"
                className="img-fluid"
              />
            </div>
            <div
              className="video-box"
              data-category="content"
              data-video-id="dQw4w9WgXcQ"
            >
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="Video Thumbnail"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="more-button">
            <a href="#">View More Videos</a>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="videoModalLabel">
                Video Title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div id="videoContainer"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
