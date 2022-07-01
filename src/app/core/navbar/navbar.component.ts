import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navbarItems: { path: string, label: string }[]

  constructor() {
    this.navbarItems = [
      { path: 'top', label: 'Top Games' },
      { path: 'new', label: 'New Games' },
      { path: 'slots', label: 'Slots' },
      { path: 'jackpots', label: 'Jackpots' },
      { path: 'live', label: 'Live' },
      { path: 'blackjack', label: 'Blackjack' },
      { path: 'roulette', label: 'Roulette' },
      { path: 'table', label: 'Table' },
      { path: 'poker', label: 'Poker' },
      { path: 'other', label: 'Other' },
    ]
  }

  ngOnInit(): void {
  }

}
