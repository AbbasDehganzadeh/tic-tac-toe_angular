import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
})
export class BoardComponent implements OnInit {
  winner!: string;
  squeres!: string[];
  xIsNext!: boolean;


  constructor() { }

  ngOnInit(): void {
    const game = this.newGame();
  }

  newGame(): void {
    this.squeres = Array(9).fill("O")
    this.xIsNext = true
    this.winner = ''
  }

  get WhoIsNext(): string {
    return this.xIsNext ? 'X' : 'Y';
  }

  moveElement(id: number): void {
    if (this.squeres[id] === 'O' && !this.winner) {
      this.squeres[id] = this.WhoIsNext
      console.log(id, this.squeres[id],this.winner)
      this.xIsNext = !this.xIsNext;
      this.calcWin();
    }
  }

  calcWin() {
    const prob = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8]
    ]

    for (let i = 0; i < prob.length; i++) {
      const [a, b, c] = prob[i];
      console.log(this.squeres)
      if (this.squeres[a] !== 'O'&& this.squeres[b] !== 'O' && this.squeres[c] !== 'O' &&
        this.squeres[a] === this.squeres[b] &&
        this.squeres[a] === this.squeres[c])
        this.winner = this.squeres[a]
    }

    /*! Always doesn't work
    let id_ = 1;
    prob.forEach (() => {
      const [a, b, c] = prob[id_];
      if (this.squeres[a] === this.squeres[b] &&
       this.squeres[a] === this.squeres[c])
        return this.squeres[a]
      id_+=1;
      });
*/
    return null;

  }

}
