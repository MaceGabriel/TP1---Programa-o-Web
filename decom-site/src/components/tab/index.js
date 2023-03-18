import React, {useState} from 'react';
import './style.css';

export default function Tab({title, tabs = {}}){
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    //Função para alterar a Tab em que esta
    const activateTab = (index) => {
        setActiveTabIndex(index);
    };

    return(
        <div className="tab-view">

            {title && <h1 className="title">{title}</h1>}
            <div className="body">

             
                    <div>
                        <div className="tabs">
                            {tabs.map((tab,index) => (
                                <label
                                    key={index}
                                    className={index === activeTabIndex ? "active-tab" : "tab"}
                                    onClick={()=> activateTab(index)}>
                                        {tab.name}
                                </label>
                            
                            ))}
                        </div>
                        <div className="content">
                       
                            {tabs[activeTabIndex].content.map((item) =>(
                                
                                 <p>{item}</p> 
                            ))}
                        
                          
                        </div>
                    </div>
                
            </div>

        </div>
    )
}