import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { EGameCategories, IGame, IGJackpot, IJackpot } from '../models/game.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GameSpaceService {
  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loading$ = this._loading$.asObservable();

  private _games$: BehaviorSubject<IGame[]> = new BehaviorSubject<IGame[]>([]);
  public games$ = this._games$.asObservable();

  private _jackpots$: BehaviorSubject<IGJackpot> = new BehaviorSubject<IGJackpot>({});
  public jackpots$ = this._jackpots$.asObservable();

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  public fetchGames(category: string) {
    this._loading$.next(true);
    this.http.get<IGame[]>(`${environment.apiUrl}/games.php`).subscribe({
      next: (result) => {
        const grouppedGames = this.groupGamesByCategory(result, category);
        this._games$.next(grouppedGames);
        this._loading$.next(false);
      },
      error: (err: HttpErrorResponse) => {
        this._loading$.next(false);
        this.toastr.error(err.message);
      },
    })
  }

  fetchJackpots() {
    this.http.get<IJackpot[]>(`${environment.apiUrl}/jackpots.php`).subscribe({
      next: (result) => {
        const jackpots: IGJackpot = {}
        result.map(jp => {
          jackpots[jp.game] = jp.amount;
        })
        this._jackpots$.next(jackpots);
      },
      error: (err: HttpErrorResponse) => {
        this.toastr.error(err.message);
      },
    })
  }

  private groupGamesByCategory(games: IGame[], category: string): IGame[] {
    if (category === 'other') {
      return games.filter(g => !g.categories.some(gc => Object.keys(EGameCategories).includes(gc)));
    } else if (category === EGameCategories.jackpots) {
      return games.filter(g => this._jackpots$.value[g.id]);
    }
    return games.filter(g => g.categories.includes(category));
  }
}
