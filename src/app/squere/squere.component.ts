import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-squere',
  templateUrl: './squere.component.html',
  styles: [
    
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquereComponent implements OnInit {

  @Input()
  value_: string = "O";

  constructor() { 

  }

  ngOnInit(): void {
  }

}
