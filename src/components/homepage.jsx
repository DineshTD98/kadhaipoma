import { useState } from "react";
import './homepage.css'

function Homepage({user,stories,activestory,handlestory,handleclose,darkmode}){
   
   
    return(
       <> 
         <div style={{backgroundColor: darkmode ? 'grey':'white'}} className="Home">
        
           {!stories && ( 
            <div>
                <div className="logosection">
                    <h2 className="logo">Kadhaipoma</h2>
                    <h2 className="tamillogo">கதைப்போமா </h2>
                </div>
                <div className="row flex-nowrap photosection">
                   {user.map((users,index)=>(
                     <div className="col-1" key={index}>
                        <button onClick={()=>handlestory(users)}>
                            <img 
                                src={users.dp} 
                                alt="storydp" 
                                style={{border:users.story ? '2px solid red' : 'none'}}
                                className="storysection"
                            />
                        </button> 
                    </div>
                  ))}
                </div>
          </div> )}
          {stories && activestory && (
          <div>
            <div>
                 <div className="activestory">
                        <img src={activestory.dp} alt="storydp" 
                            style={{border: '2px solid red'}}
                            width={50} height={50}
                        />
                 </div>
                 <div className="storypage">
                    <p className="ms-3 text-primary d-inline">{activestory.message}</p> 
                    <button  className="close-btn ms-3 bg-danger text-light mb-3 float-end" onClick={handleclose}>close</button>
                    <img src={activestory.story} alt="story1" className="storyphotos d-block"/>
                </div>
            </div>  
           </div>) }
        </div>
        
        </>
    )
}

export default Homepage;