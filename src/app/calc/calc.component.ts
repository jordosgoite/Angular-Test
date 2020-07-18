import { Component } from '@angular/core';

 
@Component({
selector: 'app-calc',
templateUrl: './calc.component.html',
styleUrls: ['./calc.component.css']
})
export class CalcComponent {
title = 'owl-carousel';

 
mySlideImages = ['../assets/image1.jpg','../assets/image2.jpg','../assets/image3.jpg','../assets/image4.jpg','../assets/image5.jpg','../assets/image6.jpg','../assets/image7.png'];
myCarouselImages =['../assets/iimage1.jpg','../assets/image2.jpg','../assets/image3.jpg','../assets/image4.jpg','../assets/image5.jpg','../assets/image6.jpg','../assets/image7.png'];
 
mySlideOptions={items: 1, dots: false, nav: false, loop: true,
  autoplay: true,autoplayTimeout:1500,
  center: true};
myCarouselOptions={items: 3, dots: true, nav: true, autoplay:true};
;
}