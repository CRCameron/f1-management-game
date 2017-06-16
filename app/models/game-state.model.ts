import { Player } from './player.model'
import { Team } from './team.model'
import { Driver } from './driver.model'

export interface GameState {
    player: Player,
    teams: Team[],
    drivers: Driver[]
}