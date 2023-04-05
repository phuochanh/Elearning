import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/loading/LoadingContext";
import { fetchUserRegisteredApi } from "services/user";

export const useUserRegistered = (data) => {
  const [userList, setUserList] = useState([]);
  const [_, setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    getUserRegistered(data);
  }, []);

  const getUserRegistered = async (id) => {
    setLoadingState({ isLoading: true });
    const result = await fetchUserRegisteredApi(id);
    setUserList(result.data);
    setLoadingState({ isLoading: false });
  };

  return userList;
};
