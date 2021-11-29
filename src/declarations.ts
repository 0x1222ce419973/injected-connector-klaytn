interface Klaytn {
  send: unknown
  networkVersion: unknown
  enable: () => Promise<string[]>
  on?: (method: string, listener: (...args: any[]) => void) => void
  removeListener?: (method: string, listener: (...args: any[]) => void) => void
}

declare interface Window {
  klaytn?: Klaytn
}

declare const __DEV__: boolean
