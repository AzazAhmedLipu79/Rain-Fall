import { Link } from "react-router-dom";

const SideBar = () => {
    return (  <>
    <div className="drawer drawer-mobile border-r-4  border-r-slate-600 ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">User Info</Link></li>
      <li><Link to="/dashboard/user-activity">User Activity</Link></li>
      <li><Link to="/">Home</Link></li>

    </ul>
  
  </div> 
</div> 
    </>);
}
 
export default SideBar;