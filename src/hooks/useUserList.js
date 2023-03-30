import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/loading/LoadingContext";
import { fetchUserListApi } from "../services/course";

export const useUserList = () => {
  const [userList, setUserList] = useState([]);
  const [_, setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    setLoadingState({ isLoading: true });
    const result = await fetchUserListApi();
    setUserList(result.data);
    setLoadingState({ isLoading: false });
  };

  return userList;
};
