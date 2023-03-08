import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums/albums.service';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  album: Album;
  photos: Photo[];

  constructor(private route: ActivatedRoute, private service: AlbumsService) {
    this.album = {} as Album;
    this.photos = [{}] as Photo[];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.service.getPhotos(id).subscribe((photos) => {
          this.photos = photos.slice(0, 3);
        });
        this.service.getAlbum(id).subscribe((album) => {
          this.album = album;
        });
      }
    })
  }

  back() {
    window.location.href = `http://localhost:4200/albums/${this.album.id}`;
  }
}
