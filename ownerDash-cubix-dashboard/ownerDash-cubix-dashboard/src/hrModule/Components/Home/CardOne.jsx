import React from "react";

const CardOne = () => {
  return (
    <div>
      <div className="card-one border shadow-sm p-1">
        <table class="table ">
          <p className="table-head mt-2">Responce Table</p>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Contact</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>jacob@gmail.com</td>
              <td>984224554</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardOne;
