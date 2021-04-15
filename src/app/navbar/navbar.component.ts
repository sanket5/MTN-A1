import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activateLink(e){
    document.querySelector('.active').classList.remove('active')
    let el = e.target as HTMLElement
    el.parentElement.className = 'active'
  }

}
