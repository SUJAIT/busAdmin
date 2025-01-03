
import { Link, Outlet } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div>
     <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content mt-6 ml-6">
    {/* Page content here */}
    <div><Outlet></Outlet></div>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
   
  </div>



  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
     <li> <Link to={'/'}>Home</Link></li>
     <li> <Link to={'businfo'}>ALL BUS</Link></li>
      
      <li><Link to={'passangerdata'}>Passenger Data</Link></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default DashBoard
