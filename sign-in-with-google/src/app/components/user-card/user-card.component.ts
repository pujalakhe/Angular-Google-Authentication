import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  constructor() {}
  @Input() userProfile: any;

  ngOnInit() {}
}
