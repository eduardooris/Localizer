import React, {createContext, useContext, useEffect, useState} from 'react';
import io, {Socket} from 'socket.io-client';

interface SocketContextProps {
  children: React.ReactNode;
  callerId: string;
}

const SocketContext = createContext<Socket | null>(null);

export const useSocket = (): Socket | null => {
  return useContext(SocketContext);
};

export const SocketProvider = ({children, callerId}: SocketContextProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  useEffect((): (() => void) | void => {
    if (!callerId) return;

    const newSocket: Socket = io('http://localhost:3000', {
      transports: ['websocket'],
      query: {
        callerId: callerId,
      },
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, [callerId]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
