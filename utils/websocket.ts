import socketio from 'socket.io-client'

class ExchangeMsg {
  _action: string = ''
  _payload: object = {}
  _target: string = 'all'

  constructor(action: string, payload: object = {}, target: string = 'all') {
    this._action = action
    this._payload = payload
    this._target = target
  }

  public toJsonString() {
    const data = {
      action: this._action,
      target: this._target,
      payload: this._payload
    }

    return JSON.stringify(data)
  }
}

class SocketNotifications {
  private static _sockets: SocketNotifications
 
  private static _ws: any

  private static _isOn: boolean = false

  public get id(): string {
    return SocketNotifications._ws.id
  }

  //单例
  public getInstance() {
    if (!SocketNotifications._sockets) {
      SocketNotifications._sockets = new SocketNotifications()
    }
    return SocketNotifications._sockets
  }

  public async initCommunication(serverAddress: string) {
  
    this.reset()
    
    console.log(`建立socket连接: ${serverAddress}`)
    try {
      SocketNotifications._ws = socketio.connect(serverAddress, {
        transports: ['websocket']
      })
      SocketNotifications._isOn = true
    } catch (error) {
      console.log(`建立socket连接失败，原因：${error}`)
    }
  }


  public reset() {
    if (SocketNotifications._ws != null) {
      SocketNotifications._ws.close()
      SocketNotifications._isOn = false
    }
  }
 
  public emit(event: string, ...args: any[]) {
    if (SocketNotifications._ws != null && SocketNotifications._isOn) {
      SocketNotifications._ws.emit(event, ...args)
    }
  }

  public exchange(exchangeMsg: ExchangeMsg) {
    SocketNotifications._ws.emit('exchange', exchangeMsg.toJsonString())
  }

  public onMessageReceived(e: string, callback: Function) {
    SocketNotifications._ws.on(e, callback)
  }

  public onExchangeMsgReceived() {
    SocketNotifications._ws.on('exchange', (msg: string) => {
      console.log(`exchange message: ${msg}`)
      this._listeners.forEach((callback: Function) => {
        callback(msg)
      })
    })
  }

  private _listeners: Array<Function> = []

  public addListener(callback: Function) {
    const index = this._listeners.indexOf(callback)
    if (index === -1) {
      this._listeners[this._listeners.length] = callback
    }
  }

  public removeListener(callback: Function) {
    this._listeners.forEach((listener, index) => {
      if (listener === callback) {
        this._listeners.splice(index, 1)
      }
    })
  }
}

const socket = new SocketNotifications().getInstance()

export { socket, ExchangeMsg }