import { useState } from "react";
import {ShowShowroom} from "../serves/usapi";
import { useEffect } from "react";
export default function Showroom() {
    const [cycles, setCycles] = useState([]);
    
    function  show() {
        debugger
        ShowShowroom()
            .then(res => setCycles(res.data))
            .catch(() => alert("Unauthorized"));
    }

    useEffect(() => {
        show();
    }, []);


return(
    <>
    
     <div className="container">
            <div className="row">
                {
                    cycles.map((c)=>{
                        return <Acycle key={c.cId} cycle={c}/>
                    })
                }
            </div>
     </div>
    </>
);

}

export function Acycle({cycle})
{
return(
    <>
    <div className="col-lg-3">
     <div className="card card-body">
        <img src={""} style={{width:"200px"}}/>
         <tr>
        <th scope="row">CId</th>
        <td>{cycle.cId}</td>
        </tr>
        <tr>
        <th scope="row">CName</th>
        <td>{cycle.cName}</td>
        </tr>
       
    </div>
    </div>
    </>
);
}