import React from "react";
import '../categories.css';
import Food from "../../../../foodimage";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTocart } from "../../../cart/cartslice";
import '../../../header/header.css'
function SnacksFood(){
    const dispatch=useDispatch()
    let Food1=Food.filter((ele)=>ele.titlename==='Snacks');
    let history=useHistory();
    
    function AddtoCart(ele){
        dispatch(addTocart(ele))
    }
    function prevImage(){
        let box=document.querySelector('.snacks-card-image')
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }
    function nextImage(){
        let box=document.querySelector('.snacks-card-image')
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft+width;
    }
    function detail(id){
        history.push(`/singledish?id=${id}`)
    }
    function Alldish(titleId){
        history.push(`/alldish?id=${titleId}`)
    }
    function order(){
        history.push('/cart')
    }
    return(
        <div className="indi-css">
             {/* <h2>Categories</h2> */}
             <h3 >Snacks</h3>
            
        <div className="main-image">
        <button className="leftImageArrowStyles" onClick={()=>prevImage()}> ❰❰</button>
            <button className="rightImageArrowStyles" onClick={()=>nextImage()}> ❱❱</button>
        <div className="card-image snacks-card-image" >
            {  
                Food1.map((ele)=>{
                    return <>
                     <div key={ele.id} className='Perslide' >
                    <img src={ele.url} alt={ele.title} onClick={()=>detail(ele.id)}></img>
                    <p>{ele.title}{' '}[{ele.quantity}] </p>
                    <span style={{display:'block'}}>₹{ele.rate}</span>
                    <button className="slide-cart-button" onClick={order}>Order</button>{'  '}<button className="slide-cart-button" onClick={()=>AddtoCart(ele)}>+Add toCart</button>
                </div>
                 </>
                })
            }
            <button onClick={()=>Alldish(Food1[0].titleId) } className='imsa' >See more</button>
        </div>
        
        </div>
        
        </div>
    )
}

export default SnacksFood