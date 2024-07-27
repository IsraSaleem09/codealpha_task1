const filterButtons = document.querySelectorAll("#filterable-btn button");
const filterablePhotos = document.querySelectorAll("#filterable-photo .photo");


const filterPhoto = (e) => {
    document.querySelector("#filterable-btn .active").classList.remove("active");
    e.target.classList.add("active");

    filterablePhotos.forEach(photo => {
       
        if(photo.dataset.name===e.target.dataset.filter || e.target.dataset.filter === "All"){
           return  photo.classList.replace("hide","show");
        }
            photo.classList.add("hide");
       
    });

}

filterButtons.forEach(button => button.addEventListener("click",filterPhoto));