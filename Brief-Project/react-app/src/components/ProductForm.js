import React from 'react'
import Products from './Products'
import axios  from "axios";

export default function ProductForm(){

    const productApi = (url ='')=> {
        return {
            fetchAll :() => axios.get(url),
            create: newRecord => axios.post(url, newRecord)
        }

    }

    const addOrEdit = (formData, onSuccess) => {
     productApi().create(formData)
     .then(res =>{
         onSuccess();
     })
     .catch(err => console.log(err))
    }

    return (
        <div className="row">
            <div className="col-md-4">
            <Products 
            addOrEdit={addOrEdit} />
            </div>
            <div className="col-md-4">
                <div>List of product</div>
            </div>
            
        </div>
    )
}