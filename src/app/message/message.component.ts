import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
  standalone: true
})
export class MessageComponent {
  @Input() emoji: any;
}
