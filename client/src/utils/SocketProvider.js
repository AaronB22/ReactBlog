import React from "react";
import {io} from 'socket.io-client'

console.log(window.location)
export const socket = io(`http://${window.location.hostname}:8900`)
export const SocketContext = React.createContext(socket)