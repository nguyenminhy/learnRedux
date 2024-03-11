import { useDispatch } from "react-redux";
import { deleteHuman } from "../../redux/slines/humanSline";

function ListHuman(list) {
    const dispatch = useDispatch()
    return ( 
        <dev>
            <table>
                <tr>
                    <td>{list.data.name}</td>
                    <td>{list.data.age}</td>
                    <td>{list.data.sex}</td>
                    <td onClick={()=> dispatch(deleteHuman(list.data.id))} >X</td>
                </tr>
                
            </table>
            
        </dev>
     );
}

export default ListHuman;