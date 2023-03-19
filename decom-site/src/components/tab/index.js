import React, {useState} from 'react';
import Card from "../card";
import { Grid } from '@mui/material';
import './style.css';

export default function Tab({title, tabs = {}}){
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    //Função para alterar a Tab em que esta
    const activateTab = (index) => {
        setActiveTabIndex(index);
    };

    return(
        <div className="tab-view">
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
                        <Grid className='grid' container >
                            {tabs[activeTabIndex].content.map((tabItem) =>(                                    
                                <Grid item sx={{maxWidth: 345}} xs={4}>
                                    <Card classname="card" title={tabItem.title} image={tabItem.image} body={tabItem.body}/>
                                </Grid>
                            ))}                               
                        </Grid>  
                    </div>
                </div>
            </div>

        </div>
    )
}