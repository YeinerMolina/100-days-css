import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  day: number = 1;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.day = this.route.snapshot.params['day'];
  }
}
