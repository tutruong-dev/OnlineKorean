import React from "react";
import Header from "./components/Header";
import CourseList from "./components/CourseList";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

function App() {
  const courses = [
    // Array of course objects
    {
      id: 1,
      image: "img1.png",
      title: "Course 1",
      instructor: "Trần Ly Ly",
      price: "199,000 đ",
      oldPrice: "499,000 đ",
      lessons: 20,
    },
    {
      id: 2,
      image: "img2.png",
      title: "Course 2",
      instructor: "Trần Ly Ly",
      price: "199,000 đ",
      oldPrice: "499,000 đ",
      lessons: 20,
    },
    // more courses...
  ];

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="courses">
          <CourseList courses={courses} />
          <Pagination />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
