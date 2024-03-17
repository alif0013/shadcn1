import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full bg-white shadow-md z-20">
            <div className="flex justify-between items-center max-w-[1200px] mx-auto ">
                <div>
                    <img className="w-24 md:w-28" src="https://i.ibb.co/n7RFQ6F/colorful-logo-1.jpg" alt="" />
                </div>

                <div className="">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Link to='/'>Home</Link>
                                </NavigationMenuTrigger>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Link to='/blog'>Blog</Link>
                                </NavigationMenuTrigger>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Link to='/products'>Products</Link>
                                </NavigationMenuTrigger>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        
                        <Button> <Link to='/login'>Login</Link> </Button>

                    </NavigationMenu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
