import { Button } from "@/components/ui/button";

const Banner = () => {
    return (
        <div className="grid grid-cols-1 min-h-screen md:grid-cols-2 gap-5 bg-blue-50 items-center px-20">
            <div> 
                <h1 className="text-5xl font-bold leading-tight">We Trying to Use <br /> <span className="text-blue-900">ShadCn Ui</span></h1>
                <p className="py-6 leading-normal">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                <Button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Explore More</Button>
            </div>
            <div>
                <img className="lg:max-w-lg rounded-lg" src="https://www.coreldraw.com/static/cdgs/images/learn/guide-to-vector-design/how-do-vector-graphics-work/img-01.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;