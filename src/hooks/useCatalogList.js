import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/loading/LoadingContext";
import { fetchCourseCatalogApi } from "../services/course";

export const useCatalogList = () => {
  const [catalogList, setCatalogList] = useState([]);
  const [_, setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    getCatalogList();
  }, []);

  const getCatalogList = async () => {
    setLoadingState({ isLoading: true });
    const result = await fetchCourseCatalogApi();
    setCatalogList(result.data);
    setLoadingState({ isLoading: false });
  };

  return catalogList;
};
