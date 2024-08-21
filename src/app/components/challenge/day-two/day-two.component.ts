import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrl: './day-two.component.css',
  imports: [CommonModule],
  standalone: true,
})
export class DayTwoComponent {
  active = false;

  toggleMenu() {
    this.active = !this.active;
  }
}
