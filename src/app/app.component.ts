import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { BarCharttComponent } from './charts/bar-chart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageComponent, BarCharttComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'test-web-components';
}
