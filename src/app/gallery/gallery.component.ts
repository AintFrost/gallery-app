import { Component, OnInit } from '@angular/core';
import { Image, GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];
  selectedImage?: Image;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.galleryService.getImages()
      .subscribe(images => this.images = images);
  }

  addImage(url: string, local: boolean): void {
    url = url.trim();
    if (!url) { return; }
    this.galleryService.addImage({ url, local } as Image)
      .subscribe(image => {
        this.images.push(image);
      });
  }

  deleteImage(image: Image): void {
    this.images = this.images.filter(i => i !== image);
    this.galleryService.deleteImage(image.id).subscribe();
    if (this.selectedImage === image) {
      this.selectedImage = undefined;
    }
  }

  onSelect(image: Image): void {
    this.selectedImage = image;
  }

  goNext(): void {
    const index = this.images.indexOf(this.selectedImage!);
    if (index < this.images.length - 1) {
      this.selectedImage = this.images[index + 1];
    }
  }

  goPrev(): void {
    const index = this.images.indexOf(this.selectedImage!);
    if (index > 0) {
      this.selectedImage = this.images[index - 1];
    }
  }
}
