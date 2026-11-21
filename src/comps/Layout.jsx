import { Link, Outlet } from "react-router-dom";

export default function Layout()
{

   return(
    <>
    
    <Header/>
     
    <Outlet/>
    </>

   );
}

export function Header()
{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar bg-1 fg-2">
                <div className="container-fluid">
                    <a className="navbar-brand">Cycles Showroom</a>
                    
                    <Link  className="btn btn-danger" type="submit" to="/login">Login</Link>
                   
                </div>
                </nav>
            </div>
        </div>
        </>
    );
}