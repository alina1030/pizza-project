import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {BrowserRouter, Route, Routes,Navigate,HashRouter,useRoutes} from 'react-router-dom';
import Addpizza from './Addpizza';
import Pizzaslist from './Pizzaslist';
import Editpizza from './Editpizza';


export default function Adminscreen() {
    const userstate = useSelector((state)=>state.loginUserReducer)
    const {currentUser} = userstate;
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!currentUser.isAdmin)
        {
            window.location.href='/'
        }
    },[])

  return (
    <div>
        <div className='row justify-content-center'>
            <div className='col-md-10'>
                <h1><b>ADMINISTRATION CENTER</b></h1>

                    <ul className='adminfunctions'>
                        <li><a href="/admin/pizzaslist">Pizzas List</a></li>
                        <li><a href="/admin/addpizza">Add Pizza</a></li>
                    </ul>

                      
                     <Routes>
                                
                        <Route path="/admin/pizzaslist" element={<Pizzaslist/>}/>
                        <Route path="/admin/addpizza" element={<Addpizza/>}/>
                        <Route path="/admin/editpizza/:pizzaid" element={<Editpizza/>}/>
                       
                     </Routes> 
                      
                    
                
            </div>
        </div>

    </div>
  )
}
