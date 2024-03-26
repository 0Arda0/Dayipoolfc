document.addEventListener("DOMContentLoaded", function() {
    const videoLinks = document.querySelectorAll(".gallery-item a");

    videoLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const videoSrc = this.getAttribute("href");

            // Videoyu oynatmak için modal oluştur
            const modal = document.createElement("div");
            modal.classList.add("video-modal");

            const video = document.createElement("video");
            video.setAttribute("controls", true);
            video.setAttribute("autoplay", true); // Videoyu otomatik olarak başlat

            const source = document.createElement("source");
            source.setAttribute("src", videoSrc);
            source.setAttribute("type", "video/mp4");

            video.appendChild(source);
            modal.appendChild(video);

            document.body.appendChild(modal);
        });
    });

    // Modalı kapatmak için tümüne tıklandığında
    document.addEventListener("click", function(e) {
        if (e.target.classList.contains("video-modal")) {
            document.body.removeChild(e.target);
        }
    });
});
