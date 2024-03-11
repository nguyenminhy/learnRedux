import {   useSelector } from "react-redux";
import ListHuman from "../ListHuman/ListHuman";




function OutPut() {
    const lHuman = useSelector(state=> state.human)
    return ( 
        <div>
            {lHuman.map((list,index)=>(
                <ListHuman key={index} data={list}/>
            ))}
        </div>
     );
}

export default OutPut;