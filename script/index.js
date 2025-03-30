// Category Section loader Function

function loadCategories() {
    // Fetching
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories#")
        .then(res => res.json())
        .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
    const categoryContainer = document.getElementById("category-container");
    for (let cat of categories) {
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
            <button class="btn btn-sm hover:bg-red-400 hover:text-white">${cat.category}</button>
        `
        categoryContainer.appendChild(categoryDiv);
    }
}

loadCategories();


// Video Section loader Function

function loadVideos() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => displayVideos(data.videos));
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");

    videos.forEach(video => {
        const videoCard = document.createElement("div")
        videoCard.innerHTML = `
 <div class="card bg-base-100">
                <figure class="relative">
                  <img
                    class = "w-full h-[250px] object-cover"
                    src="${video.thumbnail}"
                    alt="Thumbnail" />
                    <span class="absolute right-2 bottom-2 text-[8px] bg-black text-white px-2 rounded-lg">3hrs 56 min ago</span>
                </figure>
                <div class="flex gap-3 px-0 py-5">
                 <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                 </div>
                 <div class="intro">
                    <h2 class="text-base font-semibold">${video.title}</h2>
                    <p class="text-xs text-gray-400 flex gap-1 items-center">${video.authors[0].profile_name} <img class="w-3 h-3" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                    <p class="text-xs text-gray-400">${video.others.views} Views</p>
                 </div>
                </div>
              </div>
        `;
        videoContainer.append(videoCard);
    });
}

loadVideos();