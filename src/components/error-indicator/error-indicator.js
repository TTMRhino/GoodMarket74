import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () =>{
    return (
        <div className="container">
            <div className="row">
        <div className="loading container">
            <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Semi+Condensed:100,200,300,400" rel="stylesheet"/>
            <div className="row px-5">
                <h1>500</h1>
                <h2>Unexpected Error <b>:(</b></h2>
                <div className="gears">
                    <div className="gear one">
                        <div className="bar">                            
                        </div>
                        <div className="bar">                                
                        </div>
                        <div className="bar">                                    
                        </div>
                    </div>
                    <div className="gear two">
                        <div className="bar">
                        </div>
                        <div className="bar">                                            
                        </div>
                        <div className="bar">                        
                        </div>
                    </div>
                    <div className="gear three">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
  
                
            </div>
        </div>
        </div>
        </div>
    )
};

export default ErrorIndicator;