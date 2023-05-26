import { useEffect, useState } from "react";
const Main=()=>{
    const[post,setpost]=useState([])
    console.log(post)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((post) => setpost(post))
    },[])
    return(
        <div>
            <h1>hellooooiiii</h1>
            {post.map((value)=>{
                return(
                    <div key={value.id}>
                        <h1>{value.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}


export default Main