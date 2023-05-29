import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHamburger, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/mycart'>
                        <FaShoppingCart></FaShoppingCart> My Cart
                        <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink>
                        
                    </li>
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