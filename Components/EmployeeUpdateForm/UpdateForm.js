import React from 'react'

function EmployeeForm(
{ 
    setUpdateFirstName,
    setUpdateLastName,
    setUpdateEmail,
    setUpdateNic,
    setUpdateTpNo,
    setUpdateDepId,
    setUpdateAppointmentDate,
    updateFirstName,
    updateLastName,
    updateEmail,
    updateNic,
    updateTpNo,
    updateDepId,
    updateAppointmentDate,
    updateEmployee
}

) {

    return (
        <div>
        <div >
        <form  >

        <div class="row mb-3">
          <label for="firstname" class="col-sm-4 col-form-label" align="left">
            <b>First Name</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="firstName"
              value={updateFirstName}
              onChange={(e) => {
                setUpdateFirstName(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="lastname" class="col-sm-4 col-form-label" align="left">
            <b>Last Name</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="lastName"
              value={updateLastName}
              onChange={(e) => {
                setUpdateLastName(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="email" class="col-sm-4 col-form-label" align="left">
            <b>Email</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="email"
              class="form-control"
              id="email"
              value={updateEmail}
              onChange={(e) => {
                setUpdateEmail(e.target.value);
              }}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label
            for="contactnumber"
            class="col-sm-4 col-form-label"
            align="left"
          >
            <b>Contact Number</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="tel"
              class="form-control"
              id="tpNo"
              value={updateTpNo}
              onChange={(e) => {
                setUpdateTpNo(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="address" class="col-sm-4 col-form-label" align="left">
            <b>Department</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="number"
              class="form-control"
              id="dep_id"
              value={updateDepId}
              onChange={(e) => {
                setUpdateDepId(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="nicnumber" class="col-sm-4 col-form-label" align="left">
            <b>NIC Number</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="text"
              class="form-control"
              id="nic"
              value={updateNic}
              onChange={(e) => {
                setUpdateNic(e.target.value);
              }}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="designation" class="col-sm-4 col-form-label" align="left">
            <b>Appoinment Date</b>
          </label>
          <div class="w-50 p-1">
            <input
              type="date"
              class="form-control"
              id="appointmentDate"
              value={updateAppointmentDate}
              onChange={(e) => {
                setUpdateAppointmentDate(e.target.value);
              }}
            />
          </div>
        </div>

        <div>
        </div>
        
          <button
          style={{ width: "25%", margin:"3%", marginLeft:"65%"}}
            className="btn btn-warning"
            type="button"
            onClick={(e) => {
                updateEmployee()
            }}
          >
            Update
          </button>
      </form>
      </div>
        </div>
    )
}

export default EmployeeForm
