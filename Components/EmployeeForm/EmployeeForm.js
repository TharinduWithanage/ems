import React from 'react'


function EmployeeForm(
{ setFirstName,
  setLastName,
  setEmail,
  setNic,
  setTpNo,
  setDepartment,
  setAppointmentDate,
  firstName,
  lastName,
  email,
  nic,
  tpNo,
  department,
  appointmentDate,
  addEmployee,
  resetForm
}
) {

    return (
        <div style={{ width: "80%", marginLeft:"20%", marginTop:"20px", marginBottom:"20px", borderBlock:"1px" }}>
        <div >
        <form  >
        <div >
          <h2 align="center">
            <b>Add Employee</b>
          </h2>
        </div>

        <div class="row mb-3">
          <label for="firstname" class="col-sm-2 col-form-label" align="left">
            <b>First Name</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="lastname" class="col-sm-2 col-form-label" align="left">
            <b>Last Name</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="email" class="col-sm-2 col-form-label" align="left">
            <b>Email</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="email"
              class="form-control"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label
            for="contactnumber"
            class="col-sm-2 col-form-label"
            align="left"
          >
            <b>Contact Number</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="tel"
              class="form-control"
              id="tpNo"
              value={tpNo}
              onChange={(e) => {
                setTpNo(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="address" class="col-sm-2 col-form-label" align="left">
            <b>Department</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="number"
              class="form-control"
              id="dep_id"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="nicnumber" class="col-sm-2 col-form-label" align="left">
            <b>NIC Number</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="nic"
              value={nic}
              onChange={(e) => {
                setNic(e.target.value);
              }}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="designation" class="col-sm-2 col-form-label" align="left">
            <b>Appoinment Date</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="date"
              class="form-control"
              id="appointmentDate"
              value={appointmentDate}
              onChange={(e) => {
                setAppointmentDate(e.target.value);
              }}
            />
          </div>
        </div>

        <div>
        </div>
        <button
            style={{ width: "15%", margin:"3%"}}
            className="btn btn-warning"
            type="button"
            onClick={(e) => {
                resetForm()
            }}
          >
            Reset
          </button>
          <button
          style={{ width: "15%", margin:"3%"}}
            className="btn btn-primary"
            type="button"
            onClick={(e) => {
                addEmployee()
            }}
          >
            Add
          </button>
      </form>
      </div>
        </div>
    )
}

export default EmployeeForm
