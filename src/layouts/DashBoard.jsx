import { Route, Routes } from "react-router-dom";
import StudentList from "../pages/StudentList";
import TopNavigation from "./TopNavigation";
import { useEffect } from "react";
import StudentAdd from "../pages/StudentAdd";

function DashBoard() {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="grid">
        <div className="col-12">
          <TopNavigation />
        </div>
      </div>
      <div className="grid">
        <div className="col-10 m-5">
          <Routes>
            <Route exact path="/" element={<StudentList />} />
            <Route exact path="/students" element={<StudentList />} />
            <Route exact path="/student-add" element={<StudentAdd />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
