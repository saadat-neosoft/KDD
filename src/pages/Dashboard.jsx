import React, { useEffect } from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";

import "../styles/components/dashboard/dashboard.scss";
import { RxDashboard } from "react-icons/rx";

const Dashboard = ({ isUserLoggedIn, setIsUserLoggedIn }) => {
  useEffect(() => {
    document.title = "Dashboard | KDD";
  }, []);

  return (
    <div>
      <DashboardHeader
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
      <div className="dashboard border border-1 border-danger ">
        <div className="dashboard__nav-pane">
          <div className="dashboard__nav-pane__title d-flex align-items-center justify-content-center gap-3  ">
            <RxDashboard strokeWidth={0.6} size={25} /> Dashboard
          </div>
        </div>
        <div className="dashboard__content">
          <div className="dashboard__content__top">
            <div className="dashboard__content__top__tenders">
              <div className="dashboard__content__title">Tenders</div>
              <div className="dashboard__content__top__tenders__data"></div>
            </div>
            <div className="dashboard__content__top__stats">
              <div className="dashboard__content__title">Statistics</div>
              <div className="dashboard__content__top__stats__data">
                <div className="dashboard__content__top__stats__data__title">
                  No data found
                </div>
                <div className="dashboard__content__top__stats__data__text">
                  Currently non-verified user.
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard__content__bids">
            <div className="dashboard__content__title">Applied Bids</div>
            <div className="dashboard__content__bids__data">
              <table>
                <thead>
                  <tr className="">
                    <th>Title</th>
                    <th>Applied Date</th>
                    <th>Tender Duration</th>
                    <th>Post Date</th>
                    <th>Count Down</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tender Title</td>
                    <td>1/05/23</td>
                    <td>15 Days</td>
                    <td>2/22</td>
                    <td className="dashboard__content__bids__data__time">
                      <span className="dashboard__content__bids__data__time__num-green">
                        {" "}
                        08{" "}
                      </span>
                      Days{" "}
                      <span className="dashboard__content__bids__data__time__num-green">
                        {" "}
                        58{" "}
                      </span>{" "}
                      Hrs{" "}
                      <span className="dashboard__content__bids__data__time__num-green">
                        {" "}
                        40{" "}
                      </span>{" "}
                      Mins
                    </td>
                    <td>
                      <span
                        style={{ backgroundColor: "#C9C920" }}
                        className="dashboard__content__bids__data__eval"
                      ></span>{" "}
                      Evaluation
                    </td>
                  </tr>
                  <tr>
                    <td>Tender Title</td>
                    <td>1/05/23</td>
                    <td>15 Days</td>
                    <td>2/22</td>
                    <td className="dashboard__content__bids__data__time">
                      <span className="dashboard__content__bids__data__time__num-red">
                        {" "}
                        08{" "}
                      </span>
                      Days{" "}
                      <span className="dashboard__content__bids__data__time__num-red">
                        {" "}
                        58{" "}
                      </span>{" "}
                      Hrs{" "}
                      <span className="dashboard__content__bids__data__time__num-red">
                        {" "}
                        40{" "}
                      </span>{" "}
                      Mins
                    </td>
                    <td>
                      <span
                        style={{ backgroundColor: "#44BA20" }}
                        className="dashboard__content__bids__data__eval"
                      ></span>{" "}
                      Process
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
