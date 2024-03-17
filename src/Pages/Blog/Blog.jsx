import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Blog = () => {
    


    return (
        <div className='mt-[100px] md:w-[1200px] mx-auto'>
            <Carousel>

                <CarouselContent>
                
                    <CarouselItem><img className="h-[350px] w-full" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1710633600&semt=sph" alt="" /></CarouselItem>
                    <CarouselItem><img className="h-[350px] w-full" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1710633600&semt=sph" alt="" /></CarouselItem>
                    <CarouselItem><img className="h-[350px] w-full" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1710633600&semt=sph" alt="" /></CarouselItem>
                 
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    );
};

export default Blog;