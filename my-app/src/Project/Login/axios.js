import { useEffect, useState } from "react"
import axios from 'axios'
import './style.css'
const Axis = () => {
    const [axi, setaxi] = useState([])
    useEffect(() =>{
        getData()
    },[])
    const getData=async()=>{

        const URL ='https://dummyjson.com/products'
        try{
            const Response = await axios.get(URL)
            console.log("data",Response.data.products)
            setaxi(Response.data.products)
        }
        catch(error){
            console.log(error)
        }}
        const deleteid=(id)=>{
            setaxi(axi.filter((to)=>to.id !==id))
        }
    return(
        <div className="full">
            <h1>SHOPKART</h1>
            
            {axi.map((i)=>{
                return(
                    <div className="content" key={i.id}>
                    <p><img src={i.thumbnail}className="img"/></p>
                    <p className="title">{i.title}</p>
                    <p className="des">{i.description}</p>
                    <button className="bt1" onClick={()=>deleteid(i.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Axis