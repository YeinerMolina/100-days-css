import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { DayOneComponent } from '../challenge/day-one/day-one.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [DayOneComponent, NgFor],
})
export class HomeComponent {
  images = Array.from(
    { length: 100 },
    (_, i) =>
      'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg'
  );
  currentImages: string[] = [];
  currentIndex: number = 0;
  totalVisible: number = 5;
  transitionDuration: number = 1; // Duration in seconds

  ngOnInit() {
    this.updateCurrentImages();
    this.startAutoSlide();
  }

  updateCurrentImages() {
    this.currentImages = this.images.slice(
      this.currentIndex,
      this.currentIndex + this.totalVisible
    );
  }

  startAutoSlide() {
    setInterval(() => {
      this.slideImages();
    }, this.transitionDuration * 1000);
  }

  slideImages() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateCurrentImages();
  }
}
