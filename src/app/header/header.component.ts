import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
