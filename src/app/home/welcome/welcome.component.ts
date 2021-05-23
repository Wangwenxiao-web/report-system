import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
} from "swiper/core";

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;

  show: boolean;
  thumbs: any;
  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit() {}

  thumbsSwiper: any;
  setThumbsSwiper(swiper) {
    this.thumbsSwiper = swiper;
  }
  controlledSwiper: any;
  setControlledSwiper(swiper) {
    this.controlledSwiper = swiper;
  }

  indexNumber = 1;
  exampleConfig = { slidesPerView: 3 };
  slidesPerView: number = 4;
  pagination: any = false;

  slides2 = ["slide 1", "slide 2", "slide 3"];
  replaceSlides() {
    this.slides2 = ["foo", "bar"];
  }

  togglePagination() {
    if (!this.pagination) {
      this.pagination = { type: "fraction" };
    } else {
      this.pagination = false;
    }
  }

  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }

  scrollbar: any = false;
  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true };
    } else {
      this.scrollbar = false;
    }
  }
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 }
  };

  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
  virtualSlides = Array.from({ length: 600 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  log(string) {
    // console.log(string);
  }

  breakPointsToggle: boolean;
  breakpointChange() {
    this.breakPointsToggle = !this.breakPointsToggle;
    this.breakpoints = {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 }
    };
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
