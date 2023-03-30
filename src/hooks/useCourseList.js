import { useState, useEffect, useContext } from "react";
import { LoadingContext } from "../contexts/loading/LoadingContext";
import { fetchCourseApi } from "../services/course";

export const useCourseList = () => {
  const [courseList, setCourseList] = useState([]);
  const [_, setLoadingState] = useContext(LoadingContext);

  useEffect(() => {
    getCourseList();
  }, []);

  const getCourseList = async () => {
    setLoadingState({ isLoading: true });
    const result = await fetchCourseApi();
    setCourseList(result.data);
    setLoadingState({ isLoading: false });
  };

  return courseList;
};
