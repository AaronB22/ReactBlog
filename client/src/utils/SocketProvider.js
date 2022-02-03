import React from "react";
import {io} from 'socket.io-client'
const PORT = 'http://localhost:3001'

export const socket = io(PORT)
export const SocketContext = React.createContext(socket)