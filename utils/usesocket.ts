import { socket, ExchangeMsg } from "./websocket"
const ws_server_ip:string = 'ws://localhost:3000'
let _isOn = false
export async function start(){
  await socket.initCommunication(ws_server_ip)
      // 监听连接建立成功的事件
  if(!_isOn){
        return   socket.id&&console.log(`socket连接已建立成功 socketid: ${socket.id}`)
  }
  socket.onMessageReceived('connect', () => {
        _isOn = true
        socket.id&&console.log(`socket连接已建立成功 socketid: ${socket.id}`)
  })
  socket.onMessageReceived('disconnect', () => {
        console.log('断开链接')
  })
} 