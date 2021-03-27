import React from 'react'
import {NavLink} from "react-router-dom";
import Aux from "./hoc/_Aux";
import './assets/scss/style.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function Home() {
    return (
        <>
<Aux>


              
                    <section className="d-flex align-items-center">
                    <div className="auth-wrapper">
<div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>

<div className="container-fluid">
    <div style={{boxShadow:"5px 5px 5px 5px #888888" ,margin:"6%",padding:"20px",paddingBottom:"40px"}} className="row">
<div className="col-10 mx-auto">
<br/>
<br/>
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
    <h1 style={{color:"#0d6efd",textTransform:"capitalize"}}><u><strong>Pro-Blood</strong></u></h1>
    <h3  className="my-3">Share Blood - Share Life.</h3>
    <h5>PRO BLOOD as a Centralized Blood Bank Management System ( CBBMS ) is a plan to serve a purpose of 
    helping individuals and health associations come under one platform, allowing them to save
     a greater number of lives by making blood requesting and donation services faster, efficient,
      easier, simpler and more proficient.</h5>
    <h4  className="my-3">To Join Pro-blood Family Email Us On problood13@gmail.com.</h4>
<div className="mt-3">
    <NavLink style={{borderRadius:"12px"}} className="btn btn-outline-info" to="/signin">Get Started</NavLink>
</div>
</div>
<div className="col-lg-6 order 1 order-lg-2 header_img">
    <img style={{height:"400px"}} src="https://preview.colorlib.com/theme/medisen/img/banner_img.png" alt="header img" className="img-fluid animated"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</Aux>
    </>);
}


export default Home
