import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadeerComponent } from "./components/headeer/headeer.component";
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadeerComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListaTarefasAngular';
}
