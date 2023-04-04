import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getStudent} from "../../service/studentService";

export default function ListStudent() {
    const navigate = useNavigate();
    const students = useSelector(state => {
        return state.students.students
    });
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getStudent())
    },[])

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <button className={"btn btn-success"}>+</button>
                </div>
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                            <th scope="col" colSpan={2}>Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        {students && students.map((value,index)=>(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{value.name}</td>
                                <td>{value.description}</td>
                                <td>{value.action}</td>
                                <td><button className={"btn btn-outline-danger"}>Delete</button></td>
                                <td><button  className={"btn btn-outline-success"}>Update</button></td>
                            </tr>
                        ))}



                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}