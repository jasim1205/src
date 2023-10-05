import { React, useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Layout/footer";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/sidebar";
function Routine() {
  const [ routine, setRoutine ] = useState( [] );
  const [ classes, setClasses ] = useState( [] );
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    getDatas();
    getClasses();
  }, []);
  function getDatas() {
    axios
      .get("http://localhost/react_api/Routine/routine_list.php")
      .then(function (response) {
        setRoutine(response.data.data);
      });
  }
function getClasses() {
  axios
    .get("http://localhost/react_api/Classes/classes_list.php")
    .then(function (response) {
      setClasses(response.data.data);
    });
}
  /* for update */

  function getSingleSection(id) {
    document.getElementById("modelbutton").click();
    axios
      .get(`http://localhost/react_api/Routine/routine_edit.php?id=${id}`)
      .then(function (response) {
        setInputs(response.data);
      });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-10">
            <h1 className="text-center">
              <small>Class Routine</small>
            </h1>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Routine for :</label>
                  <select
                    className="form-control"
                    name="class_id"
                    value={inputs.class_id}
                  >
                    <option value="" key="">
                      Select Class
                    </option>
                    {classes.map((d, key) => (
                      <option value={d.id} key={key}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Create Routine:</label>
                  <select
                    className="form-control"
                    name="class_id"
                    value={inputs.class_id}
                  >
                    <option value="" key="">
                      Select Class
                    </option>
                    {classes.map((d, key) => (
                      <option value={d.id} key={key}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              id="modelbutton"
              type="button"
              className="btn btn-primary btn-sm float-end"
              data-toggle="modal"
              data-target="#myModal"
            >
              Add Routine
            </button>

            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>1st Period</th>
                  <th>2nd Period</th>
                  <th>3rd Period</th>
                  <th>4th Period</th>
                  <th>5th Period</th>
                  <th>6th Period</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {routine &&
                  routine.map((d, key) => (
                    <tr key={key}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary me-2"
                          onClick={() => getSingleSection(d.id)}
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Routine;
