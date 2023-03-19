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
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {tabs[activeTabIndex].content.map((tabItem) =>(                                    
                                <Grid item xs={4}>
                                    <Card title={tabItem.title} image={tabItem.image} body={tabItem.body}/>
                                </Grid>
                            ))}                               
                        </Grid>    
                       
                          
                        </div>
                    </div>
                
            </div>

        </div>
    )
}