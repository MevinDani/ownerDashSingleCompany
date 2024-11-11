
import './App.css';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import DashBoard from './Components/DashBoard/DashBoard';
import NewDashBoardHome from './Components/DashBoard/NewDashBoard';
import MachineValidation from './Components/Home/MachineValidation';
import DashCreation from './Components/DashCreation/DashCreation';
import SalesHome from './Components/AdminSales/AdminSalesHome/SalesHome';
import GroupSales from './Components/AdminSales/Sales/GroupSales/GroupSales';
import DeliveryOrder from './Components/AdminSales/Delivery/DOReport/DeliveryOrder';
import DeliveryOrderInvoiced from './Components/AdminSales/Delivery/DOInvoiced/DeliveryOrder';
import DeliveryOrderPending from './Components/AdminSales/Delivery/DOPending/DeliveryOrder';
import CustomerOutstanding from './Components/AdminSales/OutStanding/CustomerOutstanding/CustomerOutstanding';
import DOPendingItem from './Components/AdminSales/Delivery/DOPendingItems/DOPendingItems';
import BranchSales from './Components/AdminSales/Sales/BranchWiseSales/BranchSales';
import SalesManSales from './Components/AdminSales/Sales/SalesManWiseSales/SalesManSales';
import Latest500Invoice from './Components/AdminSales/Invoice/Latest500/Latest500Invoice';
import CategorySales from './Components/AdminSales/Sales/CategorySales/CategorySales';
import CashSales from './Components/AdminSales/Invoice/CashSales/CashSales';
import CreditSales from './Components/AdminSales/Invoice/CreditSales/CreditSales';
import ItemWiseSales from './Components/AdminSales/Sales/ItemWiseSales/ItemWiseSales';
import CustomerWiseSales from './Components/AdminSales/Sales/CustomerWiseSales/CustomerWiseSales';
import SalesManSales2 from './Components/AdminSales/Sales/SalesManSales/SalesManSales';
import AccountsReport from './Components/AccountsReport/AccountsReport';
import IssuedPdcTable from './Components/PDCAcc/IssuedPdcTable/IssuedPdcTable';
import RecievedPdcTable from './Components/PDCAcc/IssuedPdcTable/recievedPdcTable';
import OutstandingReport from './Components/stateAndOutReport/OutstandingReport';
import StatementReport2 from './Components/stateAndOutReport/StatementReport2';
import NewMachineValidation from './Components/Home/NewMachineValidation';
import PrivateRoute from './RouteGuard';
import MyPickingList from './Components/newIntegration/pickingList/MyPickingList';
import PickingListDetails from './Components/newIntegration/pickingListDetails/PickingListDetails';
// import SalesList from './crmApp/components/SalesList'
// import AdminHome from './taskManagerModule/components/AdminHome'
// import AdminTaskDetailView from './taskManagerModule/components/AdminTaskDetailView'
// import GeofencingSettings from './taskManagerModule/components/GeofencingSettings'
// import AdminCompletedTasks from './taskManagerModule/components/AdminCompletedTasks'
// import Home from './taskManagerModule/components/Home'
// import TaskDetailViewStaff from './taskManagerModule/components/TaskDetailViewStaff'
// import MyCompletedTask from './taskManagerModule/components/MyCompletedTask'
// import TaskLogin from './taskManagerModule/components/LoginPage'
// import ProtectedRoute from './taskManagerModule/components/ProtectedRoute';
// import HrLogin from './hrModule/Pages/LoginPage'

// import NewDashBoard from './hrModule/Pages/NewDashBoard';
// import HrHomePage from './hrModule/Pages/HomePage'
// import AttendancePage from './hrModule/Pages/AttendancePage'


// import EmployeeListPage from './hrModule/Pages/EmployeeListPage';
// import EmplRegistrationPage from './hrModule/Pages/EmplRegistrationPage';
// import LeaveManagementPage from './hrModule/Pages/LeaveManagementPage';
// import LeaveApprovalPage from './hrModule/Pages/LeaveApprovalPage';
// import LeaveRejoinPage from './hrModule/Pages/LeaveRejoinPage';
// import ViewEmpPage from './hrModule/Pages/ViewEmpPage';
// import EmployeeEditPage from './hrModule/Pages/EmployeeEditPage';
// import CreateAllowance from './hrModule/Components/Employee/CreateAllowance/CreateAllowance';
// import LeaveCatPage from './hrModule/Pages/LeaveCatPage';
// import LeaveAllotmentPage from './hrModule/Pages/LeaveAllotmentPage';
// import LeaveApplicationPage from './hrModule/Pages/LeaveApplicationPage';
// import AttendanceEvaluationPage from './hrModule/Pages/AttendanceEvaluationPage';
// import TimesheetPage from './hrModule/Pages/TimesheetPage';
// import PayrollManagementPage from './hrModule/Pages/PayrollManagementPage';
// import HolidayManagementPage from './hrModule/Pages/HolidayManagementPage';
// import LeavePage from './hrModule/Pages/LeavePage';
// import BigCalendar from './hrModule/Components/Ghant/BigCalendar/BigCalendar';
// import TaskGant from './hrModule/Components/Ghant/TaskGant/TaskGant';
import SalesInvoice from './Components/SalesInvoice/SalesInvoice';


import ItemList from './Components/SalesNewComponents/ItemList/ItemList';
import SalesInvoice2 from './Components/SalesNewComponents/SalesInvoice/SalesInvoice';
import SalesQuotation from './Components/SalesNewComponents/Quotation/SalesQuotation';
import SalesAllView from './Components/SalesNewAllView/SalesAllView';
import Purchase from './Components/SalesNewComponents/Purchase/Purchase';
import PurchaseOrder from './Components/SalesNewComponents/PurchaseOrder/PurchaseOrder';
import PurchaseEnquiry from './Components/SalesNewComponents/PurchaseEnquiry/PurchaseEnquiry';
import TransferOut from './Components/SalesNewComponents/TransferOut/TransferOut';
import TransferIn from './Components/SalesNewComponents/ProductMaster/TransferIn/TransferIn';
import DeliveryOrder2 from './Components/SalesNewComponents/DeliveryOrder/DeliveryOrder';
import SalesOrder from './Components/SalesNewComponents/SalesOrder/SalesOrder';
import ImportPurchase from './Components/SalesNewComponents/ImportPurchase/ImportPurchase';
import PaymentVoucher from './Components/SalesNewComponents/PaymentVoucher/PaymentVoucher';
import ReceiptVoucher from './Components/SalesNewComponents/ReceiptVoucher/ReceiptVoucher';
import PDCIssuedTransfer from './Components/SalesNewComponents/PDCIssuedTransfer/PDCIssuedTransfer';
import PDCReceivedTransfer from './Components/SalesNewComponents/PDCReceivedTranfser/PDCReceivedTransfer';
import StatementOfAccounts from './Components/SalesNewComponents/StatementOfAccounts/StatementOfAccounts';
import InvoiceProfitAnalysis from './Components/SalesNewComponents/InvoiceProfitAnalysis/InvoiceProfitAnalysis';
import LedgerList from './Components/SalesNewComponents/LedgerList/LedgerList';
import SalesReturn from './Components/SalesNewComponents/SalesReturn/SalesReturn';
import PurchaseReturn from './Components/SalesNewComponents/PurchaseReturn/PurchaseReturn';
import GoodsInTransit from './Components/SalesNewComponents/GoodsInTransit/GoodsInTransit';
import SalesReturnList from './Components/SalesNewComponents/SalesReturnList/SalesReturnList';
import GitList from './Components/SalesNewComponents/GitList/GitList';
import BusinessPartners from './Components/SalesNewComponents/BusinessPartners/BusinessPartners';
import PurchaseOrderDetails from './Components/SalesNewComponents/PurchaseOrderDetails/PurchaseOrderDetails';
import BusinessPartAdd from './Components/SalesNewComponents/BusinessPartnersAdd/BusinessPartAdd';
import StockReport from './Components/SalesNewComponents/StockReport/StockReport';

// import TaskManagementGhant from './hrModule/Components/Ghant/BigCalendarTask/TaskManagementGhant';



function App() {

  const userDataArray = JSON.parse(localStorage.getItem('userDataArray')) || [];
  // console.log(userDataArray)
  return (

    <Routes >

      <Route index element={<MachineValidation />} />

      <Route path='login' element={<LoginPage />} />

      {/* <Route path='admin/dashboard' element={userDataArray.length === 0 ? <Navigate to="/login" /> : <DashBoard />} /> */}
      <Route
        path="admin/dashboard"
        element={
          <PrivateRoute >
            <NewDashBoardHome />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/dashboardOld"
        element={
          <PrivateRoute >
            <DashBoard />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/dashboardCreation"
        element={
          <PrivateRoute >
            <DashCreation />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/SalesAnalysis"
        element={
          <PrivateRoute >
            <SalesHome />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/groupSales"
        element={
          <PrivateRoute >
            <GroupSales />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/deliveryOrderReport"
        element={
          <PrivateRoute >
            <DeliveryOrder />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/deliveryOrderInvoiced"
        element={
          <PrivateRoute >
            <DeliveryOrderInvoiced />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/deliveryOrderPending"
        element={
          <PrivateRoute >
            <DeliveryOrderPending />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/customerOutstanding"
        element={
          <PrivateRoute >
            <CustomerOutstanding />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/DOPendingItems"
        element={
          <PrivateRoute >
            <DOPendingItem />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/BranchWiseSales"
        element={
          <PrivateRoute >
            <BranchSales />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/CategorySales"
        element={
          <PrivateRoute >
            <CategorySales />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/SalesManWiseSales"
        element={
          <PrivateRoute >
            <SalesManSales />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/Latest500Invoice"
        element={
          <PrivateRoute >
            <Latest500Invoice />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/CashSales"
        element={
          <PrivateRoute >
            <CashSales />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/CreditSales"
        element={
          <PrivateRoute >
            <CreditSales />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/ItemWiseSales"
        element={
          <PrivateRoute >
            <ItemWiseSales />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/CustomerWiseSales"
        element={
          <PrivateRoute >
            <CustomerWiseSales />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/SalesManSales"
        element={
          <PrivateRoute >
            <SalesManSales2 />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/accReport"
        element={
          <PrivateRoute >
            <AccountsReport />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/issuedPdcTable"
        element={
          <PrivateRoute >
            <IssuedPdcTable />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/recievedPdcTable"
        element={
          <PrivateRoute >
            <RecievedPdcTable />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/StatementReport2"
        element={
          <PrivateRoute >
            <StatementReport2 />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/outstandingAccReport"
        element={
          <PrivateRoute >
            <OutstandingReport />
          </PrivateRoute>
        }
      />

      <Route
        path="newMachineRegistration"
        element={
          <PrivateRoute >
            <NewMachineValidation />
          </PrivateRoute>
        }
      />

      <Route
        path="admin/my_picking_list"
        element={
          <PrivateRoute >
            <MyPickingList />
          </PrivateRoute>
        }
      />

      <Route
        path="picking_list_details"
        element={
          <PrivateRoute >
            <PickingListDetails />
          </PrivateRoute>
        }
      />

      {/* crmAppRoutes */}
      {/* <Route
        path="admin/crmHome"
        element={
          <PrivateRoute >
            <SalesList />
          </PrivateRoute>
        }
      /> */}
      {/* crmAppRoutes */}

      {/* taskManager */}

      {/* <Route
        path="admin/taskManagerLogin"
        element={
          <TaskLogin />
        } /> */}

      {/* admin routes */}

      {/* <Route
        path="admin/taskHome"
        element={
          <PrivateRoute>
            <AdminHome />
          </PrivateRoute>
        } />
      <Route
        path="/admin_task_details/:id"
        element={
          <PrivateRoute>
            <AdminTaskDetailView />
          </PrivateRoute>
        } />
      <Route
        path="/geofencing_settings"
        element={
          <PrivateRoute>
            <GeofencingSettings />
          </PrivateRoute>
        } />

      <Route
        path="/admin_completed_tasks"
        element={
          <PrivateRoute>
            <AdminCompletedTasks />
          </PrivateRoute>
        } /> */}

      {/* staff routes */}

      {/* <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
      <Route
        path="/task_details/:id"
        element={
          <PrivateRoute>
            <TaskDetailViewStaff />
          </PrivateRoute>
        } />

      <Route
        path="/completed_tasks"
        element={
          <PrivateRoute>
            <MyCompletedTask />
          </PrivateRoute>
        } /> */}

      {/* taskManager */}

      {/* hrModule */}

      {/* <Route
        path="admin/hrModuleHome"
        element={
          <PrivateRoute >
            <DashBoard />
          </PrivateRoute>
        } />

      <Route
        path="admin/hrModuleLogin"
        element={
          <HrLogin />
        } /> */}

      <Route
        path="salesInvoice"
        element={
          <SalesInvoice />
        } />

      {/* <Route
        path="admin/SalesInvoice"
        element={
          <PrivateRoute >
            < SalesInvoice2 />
          </PrivateRoute>
        } />
      <Route
        path="admin/SalesQuotation"
        element={
          <PrivateRoute >
            <SalesQuotation />
          </PrivateRoute>
        } />
      <Route
        path="admin/ItemList"
        element={
          <PrivateRoute >
            <ItemList />
          </PrivateRoute>
        } /> */}
      <Route
        path="admin/SalesInvoice"
        element={
          <PrivateRoute >
            < SalesAllView />
          </PrivateRoute>
        } />
      <Route
        path="admin/SalesQuotation"
        element={
          <PrivateRoute >
            <SalesAllView />
          </PrivateRoute>
        } />
      <Route
        path="admin/ItemList"
        element={
          <PrivateRoute >
            <SalesAllView />
          </PrivateRoute>
        } />
      <Route
        path="admin/PURCHASE"
        element={
          <PrivateRoute >
            <SalesAllView />
          </PrivateRoute>
        } />
      <Route
        path="admin/MASTERS"
        element={
          <PrivateRoute >
            <SalesAllView />
          </PrivateRoute>
        } />
      <Route
        path="admin/StockReport"
        element={
          <PrivateRoute >
            <SalesAllView />
          </PrivateRoute>
        } />
      <Route
        path="admin/StockLedger"
        element={
          <PrivateRoute >
            <SalesAllView />
          </PrivateRoute>
        } />

      <Route path="salesModule" element={<SalesAllView />} >
        <Route path="SalesInvoice" element={<SalesInvoice2 />} />
        <Route path="SalesQuotation" element={<SalesQuotation />} />
        <Route path="ItemList" element={<ItemList />} />
        <Route path="PurchaseOrder" element={<PurchaseOrder />} />
        <Route path="PurchaseEnquiry" element={<PurchaseEnquiry />} />
        <Route path="TransferOut" element={<TransferOut />} />
        <Route path="TransferIn" element={<TransferIn />} />
        <Route path="DeliveryOrder" element={<DeliveryOrder2 />} />
        <Route path="SalesOrder" element={<SalesOrder />} />
        <Route path="ImportPurchase" element={<ImportPurchase />} />
        <Route path="PaymentVoucher" element={<PaymentVoucher />} />
        <Route path="ReceiptVoucher" element={<ReceiptVoucher />} />
        <Route path="PDCIssuedTransfer" element={<PDCIssuedTransfer />} />
        <Route path="PDCReceivedTransfer" element={<PDCReceivedTransfer />} />
        <Route path="StatementOfAccounts" element={<StatementOfAccounts />} />
        <Route path="InvoiceProfitAnalysis" element={<InvoiceProfitAnalysis />} />
        <Route path="LedgerList" element={<LedgerList />} />
        <Route path="SalesReturn" element={<SalesReturn />} />
        <Route path="PurchaseReturn" element={<PurchaseReturn />} />
        <Route path="GoodsInTransit" element={<GoodsInTransit />} />
        <Route path="SalesReturnList" element={<SalesReturnList />} />
        <Route path="GitList" element={<GitList />} />
        <Route path="BusinessPartners" element={<BusinessPartners />} />
        <Route path="PurchaseOrderDetails" element={<PurchaseOrderDetails />} />
        <Route path="BusinessPartAdd" element={<BusinessPartAdd />} />
      </Route>

      {/* <Route path="hrModuleHome" element={<NewDashBoard />} >
        <Route path="home" element={<HrHomePage />} />
        <Route path="attendancePage" element={<AttendancePage />} />
        <Route path="leavePage" element={<LeavePage />} />
        <Route path="emp_list" element={<EmployeeListPage />} />
        <Route path="emp_list/emp_reg" element={<EmplRegistrationPage />} />
        <Route path="emp_reg" element={<EmplRegistrationPage />} />
        <Route path="createAllowance" element={<CreateAllowance />} />
        <Route path="admin/emp_list/emp_edit/createAllowance" element={<CreateAllowance />} />
        <Route path="emp_reg/createAllowance" element={<CreateAllowance />} />
        <Route path="emp_list/emp_edit/:id" element={<EmployeeEditPage />} />
        <Route path="emp_list/view_emp/emp_edit/:id" element={<EmployeeEditPage />} />
        <Route path="emp_list/view_emp/:id" element={<ViewEmpPage />} />
        <Route path="leavemanagement" element={<LeaveManagementPage />} />
        <Route path="leaveallotment" element={<LeaveAllotmentPage />} />
        <Route path="leaveapplication" element={<LeaveApplicationPage />} />
        <Route path="leaveapproval" element={<LeaveApprovalPage />} />
        <Route path="leaverejoin" element={<LeaveRejoinPage />} />
        <Route path="leavecat" element={<LeaveCatPage />} />
        <Route path="atdcevaluation" element={<AttendanceEvaluationPage />} />
        <Route path="timesheet" element={<TimesheetPage />} />
        <Route path="payroll" element={<PayrollManagementPage />} />
        <Route path="holiday" element={<HolidayManagementPage />} />
        <Route path="bigCalendar" element={<BigCalendar />} />
        <Route path="taskGant" element={<TaskGant />} />
      </Route> */}

      {/* hrModule */}

    </Routes >
    // <div className='App'>
    // </div>


  );
}

export default App;
