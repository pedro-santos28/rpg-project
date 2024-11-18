export interface IPlayer {
  id: string
  name: string
  img: string
  handsUp: boolean
}

export interface IAnnotation {
  id: string
  player: string
  message: string
}

export interface ICharacter {
  id: string
  name: string
  img: string
  description: string
}
