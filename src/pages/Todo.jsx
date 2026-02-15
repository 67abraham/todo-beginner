import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../compoent/Navbar'

export const Todo = () => {
    const [complete, setComplete] = useState([])
    const neg = useNavigate();
    const [todo , setTodo] = useState({title: "", description: "", email: ""});

    async function getAllTodo(userId){
        try{
            const result =  await axios.get(`http://localhost:8080/api/todo/get_all_todo?user_id=${userId}`);
            if(result.data){     
                setComplete(result.data)      
            } 
        }catch{
            alert("Server Error")
        }
    }

    async function createTodo(){
   
        try{
            if(!todo.description | !todo.title | !todo.email){
                alert("All Field is Required")
            }else{
                const result = await axios.post("http://localhost:8080/api/todo/create_todo", todo);
                if(result.data){
                       setTodo({...todo, title:"", description:""})
                         neg("/todo_plan");
                }
            }
             
        }catch{
            alert("Server error")

        }

    }

    async function deleteHander(id){
        console.log(id)

        try{

            const result = await axios.delete(`http://localhost:8080/api/todo/delete_todo?todo_id=${id}`);
            if(result.status == 200){
                  neg("/todo_plan");
            }
          

        }catch{
            alert("server error")

        }
    }

    async function updateStatus(id){

        try{
            const update ={
                status : true,
                todo_id: id
            }

            const result = await axios.put("http://localhost:8080/api/todo/update_status", update);
            if(result.data){
                neg("/todo_plan");
            }


        }catch{
            alert("server error")

        }

    }

    useEffect(()=>{
        let user;
        try{
            user = JSON.parse(sessionStorage.getItem("user"));
        }catch{
            user = null
        }

        if (user && user.user_id) {
            setTodo(prev => ({ ...prev, email: user.email }));
            getAllTodo(user.user_id);
        } else {
            neg("/");
        }
    }, [])


  return (
    <div>
        <Navbar/>
        <div>
            <div className='main' >
                <div className='inputDiv'>
                 <h1 className='tit'>CREATE TODO</h1>
                    <form action="" className='form_inp'>
                        <input type="text" 
                        placeholder='Enter Todo Title ' 
                        value={todo.title}
                        onChange={(e) => setTodo({...todo, title: e.target.value})}
                        />

                        <input type="text" 
                        placeholder='Enter Todo Description ' 
                        value={todo.description}
                        onChange={(e)=> setTodo({...todo, description: e.target.value})}
                        />
                    </form>
                    
                    <button
                    class="inline-block cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl btn"
                    onClick={createTodo}
                    >
                    Add Todo
                    </button>

                </div>

                <div className="outputDiv">
                    {
                       complete.map(data => (
                        <div style={{background: data.status ? "#67B2D8": null}} key={data.id} className='card'>
                            <h1 >{data.title}</h1>
                            <h3>{data.description}</h3>
                            <p className='text-gray-500'>{data.createTime}</p>
                            <div className='btnDiv'>
                                <button onClick={()=> deleteHander(data.id)} className='btnCard'>Delete</button>
                                <button onClick={()=> updateStatus(data.id)} className='btnCard'>Mark Done</button>
                            </div>
                        </div>

                       ))
                    }

                </div>
            </div>

            
        </div>
    </div>
  )

  
}
