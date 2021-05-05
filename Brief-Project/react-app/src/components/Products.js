// import React, { useState, useEffect} from 'react'

// const defalutImageSrc='/img/circle-cropped (5).png'

// const initialFieldValues ={
//     Id : 0,
//     Date:'',
//     Name :'',
//     Price :'',
//     ImageName:'', 
//     ImageSrc:defalutImageSrc, 
//     imageFile:null, 
//     CategorieId : 0,

// }

// export default function Products(props) {

//     const {addOrEdit}=props

//     const [values, setValues]=useState(initialFieldValues)
//     const [errors,setErrors]=useState({})
//     const handleInputChange = e => {
//         const {name, value} = e.target;
//         setValues({
//             [name]:value
//         })
//     }

//     const showPreview = e => {
        
//         if(e.target.files && e.target.files[0]){
//             let imageFile = e.target.files[0];
//             const reader = new FileReader();
//             reader.onload = x => {
//                 setValues({
//                     ...values,
//                     imageFile : imageFile,
//                     ImageSrc : x.target.result
//                 })

               
//             }
//             reader.readAsDataURL(imageFile)
         
//         }

//         else {
//             setValues({

//                 ...values,
//                 imageFile : null,
                
//             })
            
//         }
//     }

    
//     const validate =()=>{
//         let temp = {}
//         temp.Name= values.Name==''?false:true;
//         temp.Price = values.Price==''?false:true;
//         temp.Date = values.Date==''?false:true;
//         temp.ImageSrc = values.ImageSrc == defalutImageSrc?false:true;
//         setErrors(temp)
//         return Object.values(temp).every(x => x==true)
//     }

//     const resetForm = ()=> {
//         setValues(initialFieldValues)
//         document.getElementById('image-uploader').value = null;
//         setErrors({})
//     }

//     const handleFormSubmit =  e =>{
//         e.preventDefault()
//         if(validate()){

//     const formData = new FormData()
//     formData.append('Id', values.Id) 
//     formData.append('Name', values.Name)
//     formData.append('Price', values.Price)
//     formData.append('Date', values.Date)
//     formData.append('ImageName', values.ImageName)
//     formData.append('imageFile', values.imageFile)
//     addOrEdit(formData, resetForm)

//         }
//     }

//     const applyErrorClass = field => ((field in errors && errors[field]==false)?' invalid-field':'')

//     return (
//         <>

// <div className="contaianer text-center">
//            <p className="lead"> A Product</p> 
//         </div>
//     <form autoComplete ="off" noValidate onSubmit={handleFormSubmit}>
//           <div className="card">
//               <img src= {values.ImageSrc} className="card-img-top"/>
// <div className="card-body">
//            <div className="form-group">
//               <input type="file"  className ={"form-control"+applyErrorClass('ImageSrc')} onChange={showPreview} id="image-uploader" >
//               </input>
//            </div>
//           <div className="form-group">
//              <input className={"form-control"+applyErrorClass('Name')} placeholder="product name" name="Name" value={values.Name} onChange={handleInputChange}>
//              </input>
//             </div>
//            <div className="form-group">
//         <input className={"form-control"+applyErrorClass('Price')}  placeholder="price" name="Price" value={values.Price} onChange={handleInputChange}></input>
//     </div>
//     <div className="form-group">
//        <input className="form-control" placeholder="date" name="Date" value={values.Date} onChange={handleInputChange}></input>
//     </div>
//     <div className= "form-group text-center">
//       <button type ="submit" className="btn btn-info py-2">Submit</button>
//     </div>

// </div>

// </div>

// </form>
// </>
//     )
// }
