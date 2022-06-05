import React, { useState, useEffect } from 'react'
import Axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import ViewForm from '../EmployeeViewForm/ViewForm'
import Popup from '../Popup/Popup';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';
import UpdateForm from '../EmployeeUpdateForm/UpdateForm'

const columns = [
    { id: "employeeId", label: "ID" },
    { id: "firstName", label: "F Name" },
    { id: "lastName", label: "L Name" },
    { id: "email", label: "Email" },
    { id: "nic", label: "NIC" },
    { id: "tpNo", label: "Tel Number" }
];

export const EmployeeDetails = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNic] = useState("");
    const [tpNo, setTpNo] = useState("");
    const [department, setDepartment] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");

    const [updateEmployeeId, setUpdateEmployeeId] = useState("");
    const [updateFirstName, setUpdateFirstName] = useState("");
    const [updateLastName, setUpdateLastName] = useState("");
    const [updateEmail, setUpdateEmail] = useState("");
    const [updateNic, setUpdateNic] = useState("");
    const [updateTpNo, setUpdateTpNo] = useState("");
    const [updateDepartment, setUpdateDepartment] = useState("");
    const [updateDepId, setUpdateDepId] = useState(0);
    const [updateAppointmentDate, setUpdateAppointmentDate] = useState("");

    const [openPopup, setOpenPopup] = useState(false);
    const [openPopupUpdate, setOpenPopupUpdate] = useState(false);

    const [rows, setRows] = useState([]);

    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: "",
        subTitle: "",
      });

    async function getEmployeeData() {
        const response = await Axios.get(
            `http://localhost:8080/getAllEmployee`,
        );

        if (response) {
            console.log(response.data);
            setRows(response.data);
        }
    }

    async function deleteEmployee(employeeId) {

        setConfirmDialog({
            title: "",
            subTitle: "",
            isOpen: false,
          });

        await Axios.delete(
            `http://localhost:8080/deleteEmployee/${employeeId}`,
        );

        getEmployeeData();
    }

    async function getEmployeeDetailById(employeeId) {

        const response = await Axios.get(
            `http://localhost:8080/getEmployeeByID/${employeeId}`,
        );

        if (response) {
            console.log(response.data);
            setUpdateEmployeeId(response.data.employeeId)
            setUpdateFirstName(response.data.firstName);
            setUpdateLastName(response.data.lastName);
            setUpdateEmail(response.data.email);
            setUpdateNic(response.data.nic);
            setUpdateTpNo(response.data.tpNo);
            setUpdateDepartment(response.data.department.name);
            setUpdateAppointmentDate(response.data.appointmentDate);
            setUpdateDepId(response.data.department.id)
        }
    }

    function resetForm(){

        setFirstName("");
        setLastName("");
        setEmail("");
        setNic("");
        setTpNo("");
        setDepartment("");
        setAppointmentDate("");
    }

    function resetViewForm(){

        setUpdateFirstName("");
        setUpdateLastName("");
        setUpdateEmail("");
        setUpdateNic("");
        setUpdateTpNo("");
        setUpdateDepartment("");
        setUpdateAppointmentDate("");
        setUpdateDepId(0);
    }

    async function addEmployee(){
  
          await Axios.post(`http://localhost:8080/addEmployee`, {
            "firstName":firstName,
            "lastName":lastName,
            "email":email,
            "nic":nic,
            "tpNo":tpNo,
            "department":{"id":department},
            "appointmentDate":appointmentDate,
          })
          resetForm();
          getEmployeeData();
      }

    async function updateEmployee(){
        setOpenPopupUpdate(false);
        await Axios.post(`http://localhost:8080/updateEmployee`, {
            "employeeId":updateEmployeeId,
            "firstName":updateFirstName,
            "lastName":updateLastName,
            "email":updateEmail,
            "nic":updateNic,
            "tpNo":updateTpNo,
            "department":{"id":updateDepId},
            "appointmentDate":updateAppointmentDate,
          })
          resetViewForm();
          getEmployeeData();
      }

      async function openInPopup(id){
        await getEmployeeDetailById(id);
        setOpenPopup(true);

      }

      async function openInPopupUpdate(id){
        await getEmployeeDetailById(id);
        setOpenPopupUpdate(true);
      }

    useEffect(async () => {
        await getEmployeeData();
        console.log("inside of useEffect");
    }, []);

    return (
        <div>

            <EmployeeForm 
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setNic={setNic}
              setTpNo={setTpNo}
              setDepartment={setDepartment}
              setAppointmentDate={setAppointmentDate}
              firstName={firstName}
              lastName={lastName}
              email={email}
              nic={nic}
              tpNo={tpNo}
              department={department}
              appointmentDate={appointmentDate}
              addEmployee={addEmployee}
              resetForm={resetForm}

            />

            <h1>Employee Details</h1>


            <TableContainer style={{ width: "90%", marginLeft:"5%", marginTop:"20px", marginBottom:"20px"}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === "number"
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                    <TableCell>
                                        <button
                                            className="btn editActionButtonIcon"
                                            style={{ color: 'blue' }}
                                            onClick={() => {
                                                openInPopup(row.employeeId)
                                                
                                            }}
                                        >
                                            View
                                        </button>
                                    </TableCell>
                                    <TableCell>
                                        <button
                                            className="btn editActionButtonIcon"
                                            style={{ color: 'Orange' }}
                                            onClick={() => {
                                                openInPopupUpdate(row.employeeId);
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </TableCell>
                                    <TableCell>
                                        <button
                                            className="btn deleteActionButtonIcon"
                                            style={{ color: 'red' }}
                                            onClick={() => {
                                                setConfirmDialog({
                                                  isOpen: true,
                                                  title: "Are You sure delete this record",
                                                  subTitle: "You can't  undo this operation",
                                                  btnStatus: "btn btn-danger",
                                                  onConfirm: () => {
                                                    deleteEmployee(row.employeeId);
                                                  },
                                                });
                                              }}
                                        >
                                            Delete
                                        </button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Popup
            title="Employee Details"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            >
            <ViewForm
            firstName={updateFirstName}
            lastName={updateLastName}
            email={updateEmail}
            nic={updateNic}
            tpNo={updateTpNo}
            department={updateDepartment}
            appointmentDate={updateAppointmentDate}
            />
            </Popup>
            <Popup
            title="Update Employee Details"
            openPopup={openPopupUpdate}
            setOpenPopup={setOpenPopupUpdate}
            >
            <UpdateForm
            setUpdateFirstName={setUpdateFirstName}
            setUpdateLastName={setUpdateLastName}
            setUpdateEmail={setUpdateEmail}
            setUpdateNic={setUpdateNic}
            setUpdateTpNo={setUpdateTpNo}
            setUpdateDepId={setUpdateDepId}
            setUpdateAppointmentDate={setUpdateAppointmentDate}
            updateFirstName={updateFirstName}
            updateLastName={updateLastName}
            updateEmail={updateEmail}
            updateNic={updateNic}
            updateTpNo={updateTpNo}
            updateDepId={updateDepId}
            updateAppointmentDate={updateAppointmentDate}
            updateEmployee={updateEmployee}
            />
            </Popup>
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />

            

        </div>
    )
}

export default EmployeeDetails
