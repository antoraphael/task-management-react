// src/hooks/useSocket.ts
import { useEffect, useRef } from "react";
import { io, type Socket } from "socket.io-client";

export const useSocket = () => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io(`${import.meta.env.VITE_API_SOCKET_URL}`, {
      withCredentials: true,
    });

    socketRef.current = socket;

    return () => {
      socket.disconnect();
    };
  }, []);

  // IMPORTANT: return the ref object itself, NOT ref.current.
  // Caller must only use socketRef.current inside effects / handlers.
  return socketRef;
};
