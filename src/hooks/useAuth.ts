import { useEffect } from "react";
import { useGetMeQuery } from "../api/authApi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setUser, setAuthLoading } from "../store/authSlice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((s) => s.auth);
  const {
    data,
    isLoading: isMeLoading,
    isError,
  } = useGetMeQuery(undefined, {
    skip: !!user, // don't refetch if already set
  });

  useEffect(() => {
    if (isMeLoading) {
      dispatch(setAuthLoading(true));
    } else {
      dispatch(setAuthLoading(false));
    }
  }, [isMeLoading, dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    } else if (isError) {
      dispatch(setUser(null));
    }
  }, [data, isError, dispatch]);

  return { user, isLoading };
};
