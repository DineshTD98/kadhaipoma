import Image1 from '../assets/homepage/img-1.jpg';
import Image2 from '../assets/homepage/img2.jpeg';
import Image3 from '../assets/homepage/img3.jpeg';
import Image4 from '../assets/homepage/img4.jpeg';
import Image5 from '../assets/homepage/img5.avif';
import Image6 from '../assets/homepage/img6.avif';
import Image7 from '../assets/homepage/img7.jpg';
import Story1 from '../assets/homepage/story1.jpg';
import Story2 from '../assets/homepage/story2.jpg';
import Story3 from '../assets/homepage/story3.jpg';
import Homepage from './homepage';
import Feedsection from './feedsection';
import Feed1 from '../assets/feedsection/feed1.jpeg';
import Feed2 from '../assets/feedsection/mahifeed.jpeg';
import Feed3 from '../assets/feedsection/messifeed2.jpg';
import { useState } from 'react';
import Settings from './settings.jsx';
import Darkmode from './darkmode.jsx';
function User({stories,setStories}){
       const [activestory,setActivestory]=useState(null)
       const [feed,setFeed]=useState(true)
       const [settings,setSettings]=useState(false)
       const [darkmode,setDarkmode]=useState(false);
       const [showcomment, setShowcomment] = useState(null);
      const user=[
        {name:'dinesh',dp:Image1,message:'hello everyone',story:Story1,feed:Feed1},
        {name:'lokesh',dp:Image2,message:'hii hello',story:Story2,feed:Feed2},
        {name:'nithish',dp:Image3,message:'feeling tired',story:Story3,feed:Feed3},
        {name:'dinesh',dp:Image3,message:'java',feed:Feed3},
        {name:'nithish',dp:Image3,message:'js javascript',story:Story3,},
        {name:'lokesh',dp:Image3,message:'my life',story:Story3,feed:Feed1},
        {name:'karthi',dp:Image4,message:'python',},
        {name:'naveen',dp:Image5,message:'structured query language',},
        {name:'kavin',dp:Image6,message:'i am wrong and right',},
        {name:'dhanush',dp:Image7,message:'feeling tired',},
      ]
       const handlestory=(usersobj)=>{
        if(usersobj.story){
            setStories(true);
            setActivestory((usersobj));
            setSettings(false)
            setFeed(false)
            setShowcomment(null)
        }
    }

    const handleclose=()=>{
        setStories(false);
        setActivestory(null);
        setFeed(true)
        setSettings(false)
        setShowcomment(null)
    }
      return (
        <>
         <div>
            <Settings settings={settings} setSettings={setSettings}/>
            <Darkmode settings={settings} setSettings={setSettings}
             darkmode={darkmode} setDarkmode={setDarkmode} 
             showcomment={showcomment}
             setShowcomment={setShowcomment}
             />
            <Homepage user={user} 
            stories={stories} setStories={setStories}
            activestory={activestory} 
            setActivestory={setActivestory}
            handlestory={handlestory} 
            handleclose={handleclose} 
            darkmode={darkmode}
            settings={settings} setSettings={setSettings}
            />
            <Feedsection user={user} 
            stories={stories} 
            setStories={setStories} 
            activestory={activestory} 
            setActivestory={setActivestory} 
            handlestory={handlestory}
            darkmode={darkmode}
            feed={feed}
            setFeed={setFeed}
            settings={settings} setSettings={setSettings}
            showcomment={showcomment}
            setShowcomment={setShowcomment}
            />
           
         </div>
        </>
      )
}
export default User;