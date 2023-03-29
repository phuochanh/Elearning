import React from "react";
import Carousel from "./components/carousel/Carousel";
import CourseList from "./components/course-list/CourseList";
import News from "./components/news/News";

export default function HomePage() {
  return (
        <div className="py-5">
          <Carousel/>
          <CourseList/>
          <News/>
        </div>
  );
}
