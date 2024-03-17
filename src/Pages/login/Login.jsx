
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";



const Login = () => {
    return (
        <div className='mt-[100px] md:w-[1200px] mx-auto'>
         


            <div>
                <Card className="w-[350px] mx-auto drop-shadow-md hover:drop-shadow-sm">
                    <CardHeader>
                        <CardTitle className='text-2xl font-bold'>Sign In Here</CardTitle>
                        <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                               
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" placeholder="Eamil Address " />
                                </div>

                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" placeholder="password " />
                                    <p className="text-blue-900"><Link to="/login">Forgot password?</Link> </p>
                                </div>
                                
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button className="mx-auto w-full" >Sign In</Button>

                    </CardFooter>

                <div className="text-center pb-6">
                    <p>Logigig</p>
                </div>
                    
                </Card>
            </div>
        </div>
    );
};

export default Login;