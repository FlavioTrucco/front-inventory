import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
 
 mobileQuery: MediaQueryList;

 menuNav = [
  {name: "home", route: "home", icon: "home"},
  {name: "Categorias", route: "home", icon: "category"},
  {name: "Productos", route: "home", icon: "production_quantity_limits"}
 ]

 

  constructor(media: MediaMatcher){ 
    this.mobileQuery = media.matchMedia('(max-witdh : 600 px)');
  }

  ngOnInit(): void{

  }
}
