import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Subject, Subscription, takeUntil, timer } from 'rxjs';
import { EGameCategories, IGame, IGJackpot, IJackpot } from '../../models/game.model';
import { GameSpaceService } from '../../services/game-space.service';

@Component({
  templateUrl: './game-space.component.html',
  styleUrls: ['./game-space.component.scss']
})
export class GameSpaceComponent implements OnInit, OnDestroy {
  public loading$: Observable<boolean>;

  public selectedCategory?: string;
  public games$: Observable<IGame[]>;
  public jackpots$: Observable<IGJackpot>;

  private jackpotsTimerSubscription$?: Subscription = new Subscription();
  private unsubscribe$: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute, private gameSpaceService: GameSpaceService) {
    this.loading$ = this.gameSpaceService.loading$;
    this.games$ = this.gameSpaceService.games$;
    this.jackpots$ = this.gameSpaceService.jackpots$;

    this.route.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe(c => {
      this.selectedCategory = c.get('category')!;
      this.gameSpaceService.fetchJackpots()
      this.gameSpaceService.fetchGames(this.selectedCategory);

      if (!this.jackpotsTimerSubscription$?.closed) {
        this.jackpotsTimerSubscription$?.unsubscribe();
      }

      if (this.selectedCategory === EGameCategories.jackpots) {
        this.jackpotsTimerSubscription$ = interval(5000).subscribe(e => {
          this.gameSpaceService.fetchJackpots();
        })
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
