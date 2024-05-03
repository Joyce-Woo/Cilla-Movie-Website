// header slider start

let header_dur = document.getElementById('header_dur');
let header_gen = document.getElementById('header_gen');
let header_title = document.getElementById('header_title');
let header_pra = document.getElementById('header_pra');
let header = document.getElementsByTagName('header')[0];
let slider_btn = document.getElementsByClassName('slider');

const slider_load = () => {
    setTimeout(() => {
        header.style.background = "url('image/comedy/comedy3aa.webp') no-repeat center right/cover";
 
        header_dur.innerText = "1h 45min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>8.5
        <span>Comedy</span>`;
        header_title.innerText = "6 Children & 1 Grandfather";
        header_pra.innerText = "However, his life is about to be changed forever when he inherits his six grandchildren. His glamorous lifestyle quickly becomes complete chaos. But he will learn a valuable lesson that teaches him about placing family first and discovering a newfound appreciation for life.";
        slider_btn[0].style.background = "#fff";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[3].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[4].style.background = "rgb(184, 184, 184, .1)";
    }, 0o0);
    setTimeout(() => {
        header.style.background = "url('image/romance/r4aa.jpg') no-repeat center right/cover";
        header.style.backgroundSize = "95% 100%";
        header_dur.innerText = "2h 1min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>8.5
        <span>Romance</span>`;
        header_title.innerText = "Close to Love";
        header_pra.innerText = "The relationship between Xu Yi and Gao Xiaonan, close friends growing up together, is undergoing changes. The relationship between Xu Yi and Gao Xiaonan, close friends growing up together, is undergoing changes.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "#fff";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[3].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[4].style.background = "rgb(184, 184, 184, .1)";
    }, 5000);
    setTimeout(() => {
        header.style.background = "url('image/mystery/m5aa.jpg') no-repeat center center/cover";
        header.style.backgroundSize = "100% 100%";
        header_dur.innerText = "1h 41min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>6.2
        <span>Mystery</span>`;
        header_title.innerText = "Magic in the  Water";
        header_pra.innerText = "Two siblings find out about a mythical aquatic monster and try to a save a remote Canadian lake from being used as a dump site for toxic waste.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "#fff";
        slider_btn[3].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[4].style.background = "rgb(184, 184, 184, .1)";
    }, 10000);
    setTimeout(() => {
        header.style.background = "url('image/action/a5a.jpg') no-repeat center center/cover";
        header.style.backgroundSize = "100% 100%";
        header_dur.innerText = "1h 34min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>6.6
        <span>Action</span>`;
        header_title.innerText = "Dragon Hunt";
        header_pra.innerText = "'Dragon Hunting' is a treasure hunting adventure film directed by Lan Zhiwei, with Liu Mohao as the chief producer, starring Li Chenhao, Zhang Zixuan, Cui Yongxuan, etc., and Kaohsiung's special appearance. The film tells the thrilling journey of a group of people going to a tomb to find the ancient secret treasure, the Dragon Box, during the period of warlord warfare, and finally protect the ancient secret treasure.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[3].style.background = "#fff";
        slider_btn[4].style.background = "rgb(184, 184, 184, .1)";
    }, 15000);
    setTimeout(() => {
        header.style.background = "url('image/cartoon/ct6a.jpg') no-repeat center center/cover";
        header.style.backgroundSize = "100% 100%";
        header_dur.innerText = "1h 32min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>7.8
        <span>Cartoon</span>`;
        header_title.innerText = "Minuscule Mandibles From Far Away";
        header_pra.innerText = "When the first snow falls in the valley, it is urgent to prepare its reserves for the winter. Alas, during the operation, a small ladybug is trapped in a box - to the Caribbean. One solution: reform the shock team.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[3].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[4].style.background = "#fff";
    }, 20000);
}

setInterval(slider_load, 50000);
slider_load();

// video controal start 

let plays = document.getElementById('play');
let videos = document.getElementById('video');
let play_btn = document.getElementById('play_btn');


play_btn.addEventListener('click', () => {
    videos.play();
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});

plays.addEventListener('click', () => {
    if (videos.paused || videos.currentTime <= 0) {
        plays.classList.add('bi-pause-fill');
        plays.classList.remove('bi-play-fill');
        videos.play();
    } else {
        plays.classList.remove('bi-pause-fill');
        plays.classList.add('bi-play-fill');
        videos.pause();
    }
});

// video time update 

videos.addEventListener('timeupdate', () => {
    let start_time = document.getElementById('start_time');
    let end_time = document.getElementById('end_time');
    let video_duration = videos.duration;
    let min = Math.floor(video_duration / 60);
    let hour = Math.floor(min / 60);
    let sec = Math.floor(video_duration % 60);
    let video_current_time = videos.currentTime;


    let start_min = Math.floor(video_current_time / 60);
    let start_sec = Math.floor(video_current_time % 60);
    let start_hour = Math.floor(start_min / 60);

    if (start_min < 10) {
        start_min = "0" + start_min;
    }
    if (start_sec < 10) {
        start_sec = "0" + start_sec;
    }
    start_time.innerText = start_min + ":" + start_sec;

    if (start_hour < 10) {
        start_hour = "0" + start_hour;
    }

    if (start_min == 60 || start_min > 60) {
        start_time.innerText = start_hour + ":" + start_min + ":" + start_sec;
    }

    // end 
    let end_min = min - start_min;
    let end_sec = video_duration - start_sec;
    let end_hour = hour - start_hour;

    let end_mins = Math.floor(end_min % 60);
    if (end_mins < 10) {
        end_mins = "0" + end_mins;
    }
    let end_secs = Math.floor(end_sec % 60);
    if (end_secs < 10) {
        end_secs = "0" + end_secs;
    }
    let end_hours = Math.floor(end_min / 60);
    if (end_hours < 10) {
        end_hours = "0" + end_hours;
    }

    end_time.innerText = "-" + end_mins + ":" + end_secs;

    if (end_min == 60 || end_min > 60) {
        end_time.innerText = "-" + end_hours + ":" + end_mins + ":" + end_secs;
    }


    // seek bar start

    let seek = document.getElementById('seek');
    let seek_2 = document.getElementById('seek_2');
    let seek_dot = document.getElementById('seek_dot');


    let progressbar = parseInt((videos.currentTime / videos.duration) * 100);

    seek.value = progressbar;
    let seekbar = seek.value;
    seek_2.style.width = `${seekbar}%`;
    seek_dot.style.left = `${seekbar}%`;

    // seekbar value change 
    let sec_30 = document.getElementById('sec_30');
    seek.addEventListener('change', () => {
            videos.currentTime = seek.value * videos.duration / 100;
            sec_30.addEventListener('click', () => {
                videos.currentTime = seek.value * ((videos.duration - 30) / 100);
            });
        })
        // video end event 
    videos.addEventListener('ended', () => {
        plays.classList.remove('bi-pause-fill');
        plays.classList.add('bi-play-fill');
    })
});

// volume change

let start_seekbar_end = document.querySelector('.start_seekbar_end');
let cc_vol_screen = document.querySelector('.cc_vol_screen');
let vol = document.getElementById('vol');
let vol_icon = document.getElementById('vol_icon');

vol_icon.addEventListener('click', () => {
    cc_vol_screen.classList.toggle('cc_vol');
    start_seekbar_end.classList.toggle('start_seekbar');
    vol.classList.toggle('input_vol');
});

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    videos.volume = vol_a / 100;
});

// full screen start 
let full_screen = document.getElementById('full_screen');
full_screen.addEventListener('click', () => {
    videos.requestFullscreen();
});

// video box start
let title_video = document.getElementsByClassName('title_video');
let video_1 = document.getElementsByClassName('video_1');
video_1[0].addEventListener('click', () => {
    videos.src = "video/Six Children and One Grandfather - OFFICIAL TRAILER.mp4";
    videos.play();
    title_video[0].innerText = "6 Children & 1 Grandfather";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});
video_1[1].addEventListener('click', () => {
    videos.src = "video/Close To Love 2022 trailer engsub  trailer new.mp4";
    videos.play();
    title_video[0].innerText = "Close to Love";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});
video_1[2].addEventListener('click', () => {
    videos.src = "video/Magic In The Water Trailer 1995.mp4";
    videos.play();
    title_video[0].innerText = "Magic in the  Water";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});
video_1[3].addEventListener('click', () => {
  videos.src = "video/Dragon Hunter - trailer.mp4";
  videos.play();
  title_video[0].innerText = "Dragon Hunt";
  plays.classList.add('bi-pause-fill');
  plays.classList.remove('bi-play-fill');
});
video_1[4].addEventListener('click', () => {
  videos.src = "video/Minuscule The Mandibles from far away - Official Trailer.mp4";
  videos.play();
  title_video[0].innerText = "Minuscule Mandibles From Far Away";
  plays.classList.add('bi-pause-fill');
  plays.classList.remove('bi-play-fill');
});

// movie list

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

// Movie category slide 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
