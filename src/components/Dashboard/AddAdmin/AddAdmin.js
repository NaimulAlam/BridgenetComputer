import React from "react";
import AdminSidebar from "../Sidebar/AdminSidebar";

const AddAdmin = () => {
  return (
    <section className="container-fluid row">
      <div className="col-md-2 col-sm-12">
        <AdminSidebar></AdminSidebar>
      </div>
      <div className="col-md-10 col-sm-12 mt-3 pt-3 d-flex justify-content-center">
        <div className="container-fluid">
          <h4>Add Admin Here</h4>
        </div>
      </div>
    </section>
  );
};

export default AddAdmin;