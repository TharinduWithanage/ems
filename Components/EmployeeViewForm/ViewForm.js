import React from 'react'

function EmployeeForm(
{ 
  firstName,
  lastName,
  email,
  nic,
  tpNo,
  department,
  appointmentDate,
  resetViewForm
}

) {

    return (
        <div>
        <div >
        <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-4 col-form-label">First Name</label>
    <div class="col-sm-8">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={firstName}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-4 col-form-label">Last Name</label>
    <div class="col-sm-8">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={lastName}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-4 col-form-label">Email</label>
    <div class="col-sm-8">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={email}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-4 col-form-label">NIC</label>
    <div class="col-sm-8">
        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={nic}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-4 col-form-label">Tel Number</label>
    <div class="col-sm-8">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={tpNo}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-4 col-form-label">Department</label>
    <div class="col-sm-8">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={department}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-4 col-form-label">Appointment Date</label>
    <div class="col-sm-8">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={appointmentDate}/>
    </div>
  </div>
</form>
      </div>
        </div>
    )
}

export default EmployeeForm
