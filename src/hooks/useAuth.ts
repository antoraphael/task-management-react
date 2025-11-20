// src/hooks/useAuth.ts
import { useEffect } from "react";
import { useGetSessionQuery } from "../api/authApi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setUser, setAuthLoading } from "../store/authSlice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((s) => s.auth);

  const {
    data,
    isLoading: isSessionLoading,
    isError,
  } = useGetSessionQuery(undefined, {
    skip: !!user, // don't refetch if already set in store
  });

  // keep slice's loading flag in sync with query
  useEffect(() => {
    dispatch(setAuthLoading(isSessionLoading));
  }, [isSessionLoading, dispatch]);

  // update user in slice when session resolves
  useEffect(() => {
    if (data) {
      // 200 + user -> logged in
      dispatch(setUser(data));
    } else if (isError) {
      // 401 / 403 / 500 -> treat as no session
      dispatch(setUser(null));
    }
  }, [data, isError, dispatch]);

  return { user, isLoading };
};
