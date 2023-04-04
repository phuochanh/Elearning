import React from "react";
import BoxNumber from "./components/boxNumber/BoxNumber";
import Carousel from "./components/carousel/Carousel";
import CourseFrontend from "./components/course-frontend/CourseFrontend";
import CourseList from "./components/course-list/CourseList";
import CourseReferent from "./components/course-referent/CourseReferent";
import InfoCourse from "./components/infoCourse/InfoCourse";
import Teacher from "./components/teacher/Teacher";

export default function HomePage() {
  return (
        <div className="py-5">
          <Carousel/>
          <InfoCourse/>
          <CourseList/>
          <CourseReferent/>
          <CourseFrontend/>
          <BoxNumber/>
          <Teacher/>
        </div>
  );
}
