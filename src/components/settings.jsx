function Settings({settings}){

    return(
        <>
       
        <div>
          {settings &&
              <aside className="settingssection d-flex flex-column mt-5">
                  <button>Profile</button>
                  <button>Message</button>
                  <button>Video</button>
                  <button>privacy</button>
                  <button>security</button>
                  <button>LogIn</button>
              </aside>
         } 
         </div>
         
        </>
    )
}
export default Settings;