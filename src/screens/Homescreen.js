import React, { useEffect ,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPizzas} from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Pizza from '../components/Pizza';
import Filter from '../components/Filter';

export default function Homescreen() {

    const dispatch = useDispatch()
    const pizzasstate = useSelector((state)=>state.getAllPizzasReducer);
    const {pizzas, error , loading} = pizzasstate;

    useEffect(()=>{
        dispatch(getAllPizzas());
    },[]);

  return (
    <div>
        <div className='row justify-content-center'>
            <Filter/>
            {loading ? 
                <Loading/>
            : error ? 
                <Error error='Something went wrong'/>
            : pizzas.map(pizza => {
                return <div key={pizza._id} className='col-md-3 m-3' >
                    <div>
                        <Pizza pizza={pizza} key={pizza._id}/>
                    </div>    
                </div>   
                   
            })
            }
        </div>
    </div>
  )
}
