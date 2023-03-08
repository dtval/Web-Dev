import { Component, OnInit } from '@angular/core';
import { Navbar } from '../models/navbar';

const items_: Navbar[] = [
  { name: 'Home', link: '/home' },
  { name: 'Albums', link: '/albums' },
  { name: 'About', link: '/about' },
]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: Navbar[] = [];

  ngOnInit(): void {
    this.items = items_;
  }
}
