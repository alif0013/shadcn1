import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from your API or any data source
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => {
                // Update the state with the fetched products array
                setProducts(data.products);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []); // Empty dependency array to fetch data only once when component mounts

    return (
        <div className='mt-[80px] md:w-[1200px] mx-auto'>
            <h1>All Exclusive Products Here</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {/* Map through products array and render a card for each product */}
                {products.map(product => (
                    <Card key={product.id} className="hover:drop-shadow-md mx-3">
                        <CardHeader>
                            <CardTitle><img src={product.thumbnail} alt={product.title} /></CardTitle>
                            <CardTitle>{product.title} </CardTitle>

                            <CardDescription>{product.description}</CardDescription>

                        </CardHeader>


                        <CardContent>
                            <div className="flex justify-between">
                                <p>Brand: {product.brand}</p>
                                <p>Category: {product.category}</p>
                            </div>


                            <div className="flex justify-between">
                                <p>Rating: {product.rating}</p>
                                <p>Stock: {product.stock}</p>
                            </div>

                            <div className="bg-green-600 w-[110px] text-white rounded">
                                <p className="px-2 py-1">Price: ${product.price}</p>
                            </div>

                        </CardContent>

                        <CardFooter>
                           <Button className="bg-blue-900">Buy Now</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Products;
