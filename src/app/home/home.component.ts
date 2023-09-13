import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  topVideos = [
    { embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_1', title: 'Video 1' },
    { embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_2', title: 'Video 2' },
    // Add more video objects as needed
  ];

  banners = [
    { imageUrl: 'assets/banner1.jpg', description: 'Banner 1' },
    { imageUrl: 'assets/banner2.jpg', description: 'Banner 2' },
    // Add more banner objects as needed
  ];

  trendingItems = [
    { imageUrl: 'assets/item1.jpg', name: 'Item 1', price: '$19.99',description: 'Banner 1' },
    { imageUrl: 'assets/item2.jpg', name: 'Item 2', price: '$29.99',description: 'Banner 1' },
    // Add more trending item objects as needed
  ];

  sliderValue = 0;
}
