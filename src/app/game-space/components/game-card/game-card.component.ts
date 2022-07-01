import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGame, IJackpot } from '../../models/game.model';
import { GameSpaceService } from '../../services/game-space.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game?: IGame;
  @Input() jackpot?: number;

  get isNew() {
    return this.game?.categories.includes('new')
  }

  get isTop() {
    return this.game?.categories.includes('top')
  }

  ngOnInit(): void { }

}
