import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Field, Form, Formik } from "formik";
import { Button } from "primereact/button";
import StudentService from "../services/StudenService";
import toastr from "toastr";
import { Calendar } from "primereact/calendar";

function StudentAdd() {
  const [initialForm, setinitialForm] = useState({
    nationalityId: "",
    firstname: "",
    lastname: "",
    birthDate: null,
  });
  return (
    <div>
      <Formik
        initialValues={initialForm}
        onSubmit={(values) => {
          let studentService = new StudentService();
          studentService.addStudent(values).then((response) => {
            toastr.success("Öğrenci başarılı olarak eklendi");
          });
          console.log(values);
        }}
      >
        <Form>
          <div className="col-6">
            <div className="flex flex-column gap-2">
              <label htmlFor="nationalityId">Nationality ID</label>
              <Field
                as={InputText}
                id="nationalityId"
                name="nationalityId"
                aria-describedby="nationalityId-help"
              />
            </div>

            <div className="flex flex-column gap-2">
              <label htmlFor="firstname">First Name</label>
              <Field
                as={InputText}
                id="firstname"
                name="firstname"
                aria-describedby="firstname-help"
              />
            </div>

            <div className="flex flex-column gap-2">
              <label htmlFor="lastname">Last Name</label>
              <Field
                as={InputText}
                id="lastname"
                name="lastname"
                aria-describedby="lastname-help"
              />
            </div>

            <div className="flex flex-column gap-2">
              <label htmlFor="birthDate">Birth Date</label>
              <Field
                as={Calendar}
                id="birthDate"
                name="birthDate"
                aria-describedby="birthDate-help"
                dateFormat="dd/mm/yy"
                showIcon
                monthNavigator
                yearNavigator
                yearRange="1900:2030"
              />
            </div>

            <Button type="submit" label="Submit" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default StudentAdd;
