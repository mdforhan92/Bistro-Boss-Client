import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaHamburger, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart();

    //TODO: load data from the server to have dynamic isAdmin base on data 
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/home'><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/additem'><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageitems'><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaBook></FaBook> Manage Booking</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> All Users</NavLink></li>

                        </> : <>
                            <li><NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/mycart'>
                                    <FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink>

                            </li>
                        </>
                    }




                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'><AiOutlineMenu /> Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><FaHamburger /> Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;