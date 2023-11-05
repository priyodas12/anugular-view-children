import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '';

  //returns the first dom element
  @ViewChild('name') firstNameInputText!: ElementRef;

  //returns the all dom elements
  @ViewChildren('name') fullNameInputText!: QueryList<ElementRef>;

  onClickDisplayFirstName() {
    this.title = this.firstNameInputText.nativeElement.value;
    console.log(this.firstNameInputText);
  }

  onClickDisplayFullName() {
    console.log(this.fullNameInputText);
    this.title = '';
    this.fullNameInputText.forEach(data => {

      this.title += data.nativeElement.value + " "
    })
    console.log(this.title);
  }
}
