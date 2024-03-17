
import Navbar from '@/Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer>
            <Toaster></Toaster> */}
        </div>
    );
};

export default MainLayout;