export interface State {
  start: [number, number] | null
  progress: number
  done: boolean
  message: string
  details: string[]
  request: null | {
    file: null | string
    loaders: string[]
  }
  hasErrors: boolean
  color: string
  name: string
}
