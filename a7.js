arrslideshow = [
  "./1.jpg",
  "./2.jpg",
  "./3.jpg",
  "./4.jpg",
  "./5.jpg",
  "./6.jpg",
];

// animated

let i = 0;
let slideshow = () => {
  if (i < arrslideshow.length) {
    document.imgg.src = arrslideshow[i];
    i++;
  } else {
    i = 0;
  }

  setTimeout(slideshow, 3000);
};

slideshow();

let side_slide = (y) => {
  if (i < arrslideshow.length) {
    if (y == 1) {
      --i;
      document.imgg.src = arrslideshow[i];
    }
    if (y == 2) {
      ++i;
      document.imgg.src = arrslideshow[i];
    }
    if (i == 0 && y == 1) {
      i = 5;
      document.imgg.src = arrslideshow[i];
    }

    if (i == 5 && y == 2) {
      i = 0;
      document.imgg.src = arrslideshow[i];
    }
  }
};
