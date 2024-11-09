import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import "./loginstyle.css";
const Login = () => {
  return (
    <div>
      <div className="login-box-section  hide-sm">
        <div className="container main-box ">
          <div className="login-box rounded border shadow-sm">
            <div className="row">
              <div className="col-md-8 left-part   rounded">
                <p className="text-white p-3 cubix-text ">
                  <h4 className="mt-2">CPayz-HR Management</h4> <br></br>Developed
                  By Cubix It Solutions LLC <br />
                  For More Details +71 44561145211<br></br>
                  info@salescubix@gmail.com<br></br>
                  cubixitsolutions.com
                </p>
              </div>
              <div className="col-md-4">
                <div className="login-content border rounded text-center">
                  <p className="text-gray mt-3">CPayz Dashboard</p>
                  <h6>Login Here</h6>
                  <div className="container p-4">
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Company Name"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Mobile Number"
                      />
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="User Name"
                      />
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Password"
                      />
                    </div>

                    <div class="mb-3">
                      <Link to={"hrModuleHome"}>
                        {" "}
                        <button className="main-btn">
                          <AiOutlineLogin />
                          &nbsp;Login
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-login">
        <div className="container">
         <div className="login-box text-center mt-5">
          <h6>Login Here</h6>
          <div className="container p-4">
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Company Name"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Mobile Number"
                      />
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="User Name"
                      />
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Password"
                      />
                    </div>

                    <div class="mb-3">
                      <Link to={"admin/home"}>
                        {" "}
                        <button className="main-btn">
                          <AiOutlineLogin />
                          &nbsp;Login
                        </button>
                      </Link>
                    </div>
                  </div>


         </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
