import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums/albums.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  newName: string;

  constructor(private route: ActivatedRoute, private service: AlbumsService) {
    this.album = {} as Album;
    this.newName = "";
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        const id = +_id;
        this.service.getAlbum(id).subscribe((album) => {
          this.album = album;
        })
      }
    })
  }

  back() {
    window.location.href = "http://localhost:4200/albums";
  }

  editTitle() {
    if (this.newName === "") {
      alert("Error: no new name");
      return;
    }
    this.service.editTitle(this.album.id, this.newName).subscribe((album) => {
      this.album.title = album.title;
      this.newName = "";
    })
  }
}
