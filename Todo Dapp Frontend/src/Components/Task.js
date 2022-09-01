import React from "react";

const Task = () => {
  return (
    <>
      <br />
      <div className="row justify-content-center">
        <input
          class="form-control"
          type="text"
          placeholder="Input Task"
          readonly
          style={{ width: "50%" }}
        ></input>
      </div>
      <div className="text-center">
        <br />
        <button type="button" class="btn btn-primary">
          Submit
        </button>
      </div>
    </>
  );
};

export default Task;
