export type PlayerBirth = {
  date: Date
  place: string
  country: string
}

export type Goals = {
  total: number
  assists: number
}

export type PlayerStatistics = {
  goals: Goals
}

export type Player = PlayerStatistics & {
  id: number
  name: string
  firstname: string
  lastname: string
  age: string
  birth: PlayerBirth
  nationality: string
  height: string
  weight: string
  injured: boolean
  photo: string
}
