import React, { useState } from 'react'
import './Addproduct.css' 
import upload_icon from '../../assets/upload_area.svg'
const Addproduct = () => {

    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: '',
        old_price: '',
        new_price: '',
        image: '',
        category: 'women'
    });

    const imageHolder = (e) => {
        setImage(e.target.files[0]);
    };

    const takeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const addProduct = async () => {
        console.log(data);
        let resproduct;
        let product = data;
        const formData = new FormData();
        formData.append('product', image);
    
        try {
            const response = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                },
                body: formData
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const datas = await response.json();
            resproduct = datas;
    
            if (resproduct.success) {
                product.image = resproduct.image_url;
                console.log(product);

       const Adddata= await fetch('http://localhost:4000/addproduct', {
                    method: 'POST',
                    headers: {
                        Accept: "application/json",
                        'Content-Type':"application/json",
                    },
                    body:JSON.stringify(product)
                });

             const datas= await Adddata.json()
             datas.success?alert("Data is saved in DB"):alert("Not saved in DB")   
                
            } else {
                console.error('Upload failed:', resproduct.message);
            }
        } catch (error) {
            console.error('Failed to fetch:', error.message);
        }
    };
           







        // try {
        //     const formData = new FormData();
        //     formData.append('product', image);

        //     const uploadResponse = await fetch('http://localhost:4000/upload', {
        //         method: 'POST',
        //         body: formData
        //     });
        //     const uploadData = await uploadResponse.json();
        //     console.log(uploadData)

        //     if (uploadData.success) {
        //         const product = { ...data, image: uploadData.image_url };
        //         const addProductResponse = await fetch('http://localhost:4000/addproduct', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(product)
        //         });
        //         const addProductData = await addProductResponse.json();

        //         if (addProductData.success) {
        //             alert('Data is Added');
        //         } else {
        //             alert('Not Added');
        //         }
        //     } else {
        //         alert('Upload failed');
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        //     alert('An error occurred, please try again.');
        // }
    

    
  return (
    <div className='add-product'>
        <div className="addproduct-item">
            <p>Product title</p>
            <input value={data.name} type="text" name='name' placeholder='type here' onChange={takeData}/>
        </div>
        <div className="add-price">
            <div className="addproduct-item">
                <p > old Price</p>
                <input value={data.old_price} type="text" name='old_price' placeholder='old price' onChange={takeData} />
            </div>
            <div className="addproduct-item">
                <p> new Price</p>
                <input value={data.new_price} type="text" name='new_price' placeholder='new price'  onChange={takeData} />
            </div>
        </div>
        <div className="addproduct-item">
                <p>Product Category</p>
                <select value={data.category} onChange={takeData} name="category" className='add-product-selector'>
                    <option value="men">men</option>
                    <option value="women">women</option>
                    <option value="kids">kids</option>
                </select>
                
            </div>
            <div className="addproduct-item">
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_icon} alt="" className='addproduct-thumnail-img' />
                </label>
                <input onChange={imageHolder} type="file" name='image' id='file-input'  hidden />
                
            </div>
            <button onClick={()=>addProduct()}  className='add-btn'>Add</button>


      
    </div>
  )
}

export default Addproduct