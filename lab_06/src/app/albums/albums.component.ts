import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  newAlbum: string;

  constructor(private service: AlbumsService) {
    this.albums = [];
    this.newAlbum = "";
  }

  ngOnInit(): void {
    this.service.getAlbums().subscribe((album) => {
      this.albums = album.slice(0, 7);
    });
  }

  deleteAlbum(album: Album) {
    this.service.deleteAlbum(album.id).subscribe((albumI) => {
      const index = this.albums.indexOf(album);
      if (index !== -1) {
        this.albums.splice(index, 1);
      }
    });
  }

  addAlbum() {
    this.service.addAlbum({ userId: this.albums.length + 213, id: this.albums.length + 1, title: this.newAlbum }).subscribe((album) => {
      this.albums.push(album);
      this.newAlbum = "";
    })
  }
}
