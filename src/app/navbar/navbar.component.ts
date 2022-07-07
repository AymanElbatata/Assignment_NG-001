import { myProducts } from './../getProducts';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  id:number=0;
  Pname:string='';
  imgurl:string='';
  details:string='';
  Products=myProducts;

  constructor() { }

  GetDetails(param:any){
    this.id = param.id;
    this.Pname = param.Pname;
    this.imgurl = param.imgurl;
    this.details = param.details
  }
  ngOnInit(): void {
  }

}
