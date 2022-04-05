import React, { useEffect ,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Filter from '../components/Filter';
import { getAllPizzas } from '../actions/pizzaActions';
import { Link } from 'react-router-dom';



export default function Pizzaslist() {
    const dispatch = useDispatch()

    const pizzasstate = useSelector((state)=>state.getAllPizzasReducer);
    const {pizzas, error , loading} = pizzasstate;
    useEffect(()=>{
        dispatch(getAllPizzas());
    },[]);
  return (
    <div>
        <h2>Pizzas List</h2>
        {loading && (<Loading/>)}
        {error && (<Error error='Something went wrong'/>)}
        
        <table className='table table-bordered '>
            <thead className='thead'>
                <tr>
                    <th>Pizza Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    
                </tr>
            </thead>

        
        <tbody>
        {pizzas && pizzas.map(pizza=>{

                return <tr>
                    <td>{pizza.name} </td>
                    <td>
                        Small : {pizza.prices[0]['small']}<br/>
                        Medium : {pizza.prices[0]['medium']}<br/>
                        Large : {pizza.prices[0]['large']}
                    </td>
                    <td>{pizza.category}</td>
                    
                </tr>
        })}
        </tbody>
        </table>
    </div>
  )
}
