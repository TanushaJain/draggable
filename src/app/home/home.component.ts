import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items = [
    {value: 'I cannot be dragged', disabled: true},
    {value: 'I can also be dragged', disabled: false}
  ];
  arr=[];
  constructor(){
    for(let i=0;i<50;i++)
    {
      this.arr[i]=i;
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
