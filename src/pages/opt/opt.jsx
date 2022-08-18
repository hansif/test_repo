import { useState } from "react";

const Opt = () => {
    const [one, setOne] = useState(false);
    const [two,setTwo] = useState(false);


    return (
        <>

            <form>
                <div className="title">Opt for Breakfast</div>
                <div className="para">My current option is  {one?"YES":"NO"}</div>
             
                <lable> YES :</lable>
                <input type="checkbox" 
                        checked={one}
                        
                        onChange={(e)=>{setOne(e.target.checked)}}
                        />


            
                <div className="title">Opt for Eveving Snacks</div>
                <div className="para">My current option is  {two?"YES":"NO"}</div>
                <lable> YES :</lable>
                <input type="checkbox" 
                        checked={two}
                        
                        onChange={(e)=>{setTwo(e.target.checked)}}
                        />


            </form>





        </>
    );
}


export default Opt;