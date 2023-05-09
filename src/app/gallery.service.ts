import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Image {
  id: number;
  url: string;
  local: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private imagesUrl = 'api/images';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.imagesUrl);
  }

  addImage(image: Image): Observable<Image> {
    return this.http.post<Image>(this.imagesUrl, image);
  }

  getImage(id: number): Observable<Image> {
    const url = `${this.imagesUrl}/${id}`;
    return this.http.get<Image>(url);
  }

  updateImage(image: Image): Observable<any> {
    const url = `${this.imagesUrl}/${image.id}`;
    return this.http.put(url, image);
  }

  deleteImage(id: number): Observable<Image> {
    const url = `${this.imagesUrl}/${id}`;
    return this.http.delete<Image>(url);
  }
}
