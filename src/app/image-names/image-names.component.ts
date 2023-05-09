import { Component } from '@angular/core';

@Component({
  selector: 'app-image-names',
  templateUrl: './image-names.component.html',
  styleUrls: ['./image-names.component.css']
})
export class ImageNamesComponent {
  images = [
    { name: 'Image 1', url: 'path/to/image1.jpg' },
    { name: 'Image 2', url: 'path/to/image2.jpg' },
    { name: 'Image 3', url: 'path/to/image3.jpg' },
    { name: 'Image 4', url: 'path/to/image4.jpg' },
    { name: 'Image 5', url: 'path/to/image5.jpg' }
  ];

  openImage(image) {
    // Code to open the image goes here
  }
}
