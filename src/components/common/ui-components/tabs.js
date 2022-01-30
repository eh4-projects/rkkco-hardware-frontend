import React, { useState } from 'react';

const Tabs=({
    tabs=[]
})=>{
    const [tabIndex, settabIndex] = useState(0);


    return (
        <div>
        <ul className="nav nav-tabs" >
            {
                tabs.map((tab,index)=>{
                    return(
                        <li key={index} className={`nav-item `} onClick={()=>settabIndex(index)}>
                            <a className="nav-link active" className={`nav-link ${index===tabIndex?'active':''}`}>{tab.name}</a>
                        </li>
                    )
                })
            }
            
        </ul>
            <div className="tab-content" >
                {
                    tabs.map((tab,index)=>{
                        return(
                            <div key={index} className={`tab-pane fade show ${index===tabIndex?'active':''}`} >
                                {tab.component}
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
}

export {Tabs};