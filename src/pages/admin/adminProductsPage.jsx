import { useEffect, useState } from "react"
import { sampleProducts } from "../../assets/sampleData"
import axios from "axios"

export default function AdminProductsPage(){

    const [products, setProducts] = useState(sampleProducts)

    useEffect(
        () => {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products").then((res) => {
                console.log(res.data)
                setProducts(res.data)
            });
        },[]
    )

    
    return(
        <div className="w-full h-full max-h-full overflow-y-scroll">
        <table className="w-full text-center">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Labelled Price</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <td>COSM24001a</td>
                    <td>Charcoal Face Mask</td>
                    <td><img src="https://example.com/images/charcoal_mask.jpg" className="w-[50px] h-[50px]" /></td>
                    <td>20</td>
                    <td>16.75</td>
                    <td>60</td>
                </tr>
                <tr>
                    <td>COSM24001a</td>
                    <td>Charcoal Face Mask</td>
                    <td><img src="https://example.com/images/charcoal_mask.jpg" className="w-[50px] h-[50px]" /></td>
                    <td>20</td>
                    <td>16.75</td>
                    <td>60</td>
                </tr> */}

                {
                    products.map(
                        (item,index)=>{
                        // console.log("Hi")
                        return(
                            // <span>Hi</span>
                            // <span>{item.productId}</span>
                            // <span key={index}>{index}</span>

                            <tr key={index}>
                                <td>{item.productId}</td>
                                <td>{item.name}</td>
                                <td><img src={item.images[0]} className="w-[50px] h-[50px]" /></td>
                                <td>{item.labelledPrice}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                            </tr>

                        )
                    })
                }

            </tbody>
        </table>
        </div>
    )
}