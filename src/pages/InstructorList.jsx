import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import InstructorService from "../services/InstructorService";
function InstructorList() {
  const [instructors, setInstructors] = useState([]); // hook

  useEffect(() => {
    let instructorService = new InstructorService();
    instructorService
      .getInstructor()
      .then((result) => setInstructors(result.data));
  }, []);

  return (
    <div>
      <h1>Eğitmenler</h1>
      <div className="card">
        <DataTable value={instructors.items} tableStyle={{ minWidth: "50rem" }}>
          <Column field="id" header="Id"></Column>
          <Column field="pbik" header="Pbik"></Column>
          <Column field="nationalityId" header="NationalityId"></Column>
          <Column field="firstname" header="FirstName"></Column>
          <Column field="lastname" header="LastName"></Column>
          <Column field="birthDate" header="BirthDate"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default InstructorList;
