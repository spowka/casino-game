export interface IGame {
    categories: string[],
    name: string,
    image: string,
    id: string,
    amount?: number
}

export interface IJackpot {
    game: string,
    amount: number
}
export interface IGJackpot {
    [key: string]: number
}

export enum EGameCategories {
    top = 'top',
    new = 'new',
    slots = 'slots',
    jackpots = 'jackpots',
    live = 'live',
    blackjack = 'blackjack',
    roulette = 'roulette',
    table = 'table',
    poker = 'poker'
}