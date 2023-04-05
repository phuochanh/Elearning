import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/loading/LoadingContext";
import { fetchUserWaitApi } from "services/user";

export const useUserWait = (data) => {
  const [userList, setUserList] = useState([]);
  const [_, setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    getUserWait(data);
  }, []);

  const getUserWait = async (id) => {
    setLoadingState({ isLoading: true });
    const result = await fetchUserWaitApi(id);
    setUserList(result.data);
    setLoadingState({ isLoading: false });
  };

  return userList;
};
