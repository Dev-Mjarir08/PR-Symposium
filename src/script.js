;
  
  
  const menuBtn = document.getElementById("menuBtn");
        const closeBtn = document.getElementById("closeBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        const blogBtn = document.getElementById("blogBtn");
        const blogMenu = document.getElementById("blogMenu");

   
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("translate-x-full");
        });

       
        closeBtn.addEventListener("click", () => {
            mobileMenu.classList.add("translate-x-full");
        });

        
        blogBtn.addEventListener("click", () => {
            blogMenu.classList.toggle("hidden");
        });

        // slider 
            let images = [
      "./src/images/Slider_1.png",
      "./src/images/Slider_2.jpg",
      "./src/images/Slider_3.png",
      "./src/images/Slider_4.jpg"
    ];

    let current = 0;

    let mainImage = document.getElementById("mainImage");
    let thumbs = document.querySelectorAll(".thumb");
    let dots = document.querySelectorAll(".dot");
    let textItems = document.querySelectorAll(".textItem");

    function updateSlider() {
      mainImage.src = images[current];
      
      thumbs.forEach((el, i) => {
        if (i === current) {
          el.classList.add("opacity-100", "border-blue-500");
          el.classList.remove("opacity-50", "border-transparent");
        } else {
          el.classList.remove("opacity-100", "border-blue-500");
          el.classList.add("opacity-50", "border-transparent");
        }
      });
    }
    function nextSlide() {
      current = (current + 1) % images.length;
      updateSlider();
    }

    function prevSlide() {
      current = (current - 1 + images.length) % images.length;
      updateSlider();
    }
     thumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        current = index;
        updateSlider();
      });
    });