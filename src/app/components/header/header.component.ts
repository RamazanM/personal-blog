import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showMenu=false;
  public showSearch=false;

  @ViewChild('search') searchElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(){
    this.showMenu=!this.showMenu;
  }
  openSearch(){
    this.showSearch=true;
    if(this.showSearch)setTimeout(()=>this.searchElement.nativeElement.focus(),0);
  }
  closeSearch(){this.showSearch=false;}

}
