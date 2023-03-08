import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  deleteAlbum(id: number): Observable<Album> {
    return this.client.delete<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  addAlbum(body: any): Observable<Album> {
    return this.client.post<Album>("https://jsonplaceholder.typicode.com/albums", body);
  }

  editTitle(id: number, newName: string): Observable<any> {
    return this.client.put(`https://jsonplaceholder.typicode.com/albums/${id}`, { title: newName });
  }

  getPhotos(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
