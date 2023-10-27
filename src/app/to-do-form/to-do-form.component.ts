import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent {

  @Output() addTask = new EventEmitter();


  newTask:string = '';

  createTask():void {
    if (this.newTask.trim() !== '') {
      this.addTask.emit(this.newTask);
      this.newTask = '';
    }
  }
}
