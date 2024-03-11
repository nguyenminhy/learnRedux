import { useState } from "react";
import { addHuman } from "../../redux/slines/humanSline";
import { useDispatch } from "react-redux";

function InPut() {
    const dispatch = useDispatch()
    const [id,setId] = useState()
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [sex,setSex] = useState('')

    function addHumans() {
        dispatch(
            addHuman(({
                id: id,
                name:name,
                age:age,
                sex: sex,
            }))
        )
        setId('')
        setName('')
        setAge('')
        setSex('')
    console.log(id)

    }
    console.log(id)

    return ( 
        <dev>Id:
            <input 
                value={id}
                onChange={(e)=> setId(e.target.value)}
            /> <br/>Tên: 
            <input 
                value={name}
                onChange={(e)=> setName(e.target.value)}
            /><br/>Tuổi: 
            <input 
                value={age}
                onChange={(e)=> setAge(e.target.value)}
            /><br/>Giới tính: 
            <input 
                value={sex}
                onChange={(e)=> setSex(e.target.value)}
            /><br/>
            <button onClick={addHumans} >Add</button> 
        </dev>
    );
}

export default InPut;