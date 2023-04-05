import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/loading/LoadingContext";
import { fetchUserUnregisteredApi } from "services/user";

export const useUserUnregistered = (data) => {
  const [userList, setUserList] = useState([]);
  const [_, setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    getUserUnregistered(data);
  }, []);

  const getUserUnregistered = async (id) => {
    setLoadingState({ isLoading: true });
    const result = await fetchUserUnregisteredApi(id);
    setUserList(result.data);
    setLoadingState({ isLoading: false });
  };

  return userList;
};
