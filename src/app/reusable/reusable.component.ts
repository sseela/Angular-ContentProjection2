import { Component, OnInit, ViewChild, TemplateRef, ElementRef, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit, AfterContentInit {

  @ViewChild('accordion') accordionRef: ElementRef;
  @ContentChild('third') thirdRef: ElementRef;
  @ContentChild('thirdUse') thirdUseRef: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    //console.log(this.thirdRef.nativeElement.innerText);
    console.log(this.thirdUseRef.nativeElement.innerText);
  }
  ngAfterViewInit() {
    console.log(this.accordionRef.nativeElement.innerText);
  }


}
