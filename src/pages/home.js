import Sidebar from "../components/sidebar";
import ListStudent from "./students/list.student";

export default function Home(){
     return (
         <>
             <div className="row">
                 <div className="col-12">
                     <Sidebar/>

                 </div>
                 {/*<div className="col-12" style={{marginLeft:'70px'}}>*/}
                 {/*    <center >*/}
                 {/*        <ListStudent/>*/}
                 {/*    </center>*/}

                 {/*</div>*/}
             </div>
         </>
     )
}