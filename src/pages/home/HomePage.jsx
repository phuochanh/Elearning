import React from "react";
import CourseList from "./components/course-list/CourseList";
import News from "./components/news/News";

export default function HomePage() {
  return (
        <div className="py-5">
          <CourseList/>
          <News/>
        </div>
  );
}
