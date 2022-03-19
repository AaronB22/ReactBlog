import React from "react";
import {io} from 'socket.io-client'
export const socket = io(`ws://${window.location.hostname}:8900`)
export const SocketContext = React.createContext(socket)