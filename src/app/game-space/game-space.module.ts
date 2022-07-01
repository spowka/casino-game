import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { GameSpaceRoutingModule } from './game-space-routing.module';
import { GameSpaceComponent } from './containers/game-space/game-space.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameSpaceService } from './services/game-space.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GameSpaceComponent,
    GameCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GameSpaceRoutingModule,
    SharedModule,
  ],
  providers: [GameSpaceService]
})
export class GameSpaceModule { }
