import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <>
    <div className="navbar bg-base-100 ring-2 ring-slate-700 ring-inset shadow-lg shadow-slate-500/50 rounded-full my-3 px-5 py-2">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link  to="/dashboard" className="btn rounded-full bg-slate-600 text-slate-100">Dashboard</Link>
  </div>
</div>
    </> );
}
 
export default Navbar;