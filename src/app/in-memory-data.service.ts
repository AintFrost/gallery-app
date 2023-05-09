import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const images = [
      { id: 1, url: 'https://via.placeholder.com/500x640', local: false },
      { id: 2, url: 'https://via.placeholder.com/450x700', local: false },
      { id: 3, url: 'https://via.placeholder.com/2000x2000', local: false },
      { id: 4, url: 'https://c4.wallpaperflare.com/wallpaper/133/507/785/abstract-digital-blasphemy-wallpaper-preview.jpg', local: false },
      { id: 5, url: 'https://c4.wallpaperflare.com/wallpaper/448/699/737/abstract-digital-art-3d-abstract-lines-wallpaper-preview.jpg', local: false },
      { id: 6, url: 'https://via.placeholder.com/360x640', local: false },
    ];
    return { images };
  }
}
