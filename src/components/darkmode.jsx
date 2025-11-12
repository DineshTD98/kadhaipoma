function Darkmode({setDarkmode,darkmode,settings,setSettings,setShowcomment}){

  const handlesettings=()=>{
       setSettings(!settings)
       setShowcomment(null)
  
  }
  return(
        <>
          <div className="Darkmode" style={{backgroundColor: darkmode ? 'grey':'white'}} >
              <button onClick={()=>{setDarkmode(!darkmode)}}  
                style={{color: darkmode ? 'red':'green'}}
                >⏾</button>
                <button onClick={handlesettings}>⚙️</button>
          </div>
        </>
    )
}
export default Darkmode;