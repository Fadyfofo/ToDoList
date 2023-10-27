import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css']
})
export class ToDoAppComponent {
  tasks: any[] = [];

  onAddTask(newTask: any) : void {
    this.tasks.push(newTask);
  }

 
}
