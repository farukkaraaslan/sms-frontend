import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import StudentService from "../services/StudenService";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";


function StudentList() {
  const [students, setStudents] = useState([]); // hook

  useEffect(() => {
    let studentService = new StudentService();
    studentService.getStudents().then((result) => setStudents(result.data));
  }, []);

  const formatBirthDate = (birthDate) => {
    const dateObject = new Date(birthDate);
    return dateObject.toLocaleDateString('tr-TR'); // Türkçe format kullanıldı, dil kodunu ihtiyaca göre değiştirebilirsiniz
  };

  return (
    <div>
      <h1>Öğrenciler</h1>
      <div className="card">
        <DataTable value={students.items} tableStyle={{ minWidth: "50rem" }}>
          <Column field="id" header="Id"></Column>
          <Column field="nationalityId" header="NationalityId"></Column>
          <Column field="firstname" header="FirstName"></Column>
          <Column field="lastname" header="LastName"></Column>
          <Column field="birthDate" header="BirthDate" body={(rowData) => formatBirthDate(rowData.birthDate)}></Column>
        </DataTable>
        <Link to="/student-add">
          <Button>Yeni Öğrenci Ekle</Button>
        </Link>
      </div>
    </div>
  );
}

export default StudentList;
