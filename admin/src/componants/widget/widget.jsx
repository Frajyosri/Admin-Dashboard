import React from 'react';
import "./widget.css"

const Widget = () => {
    return (
        <div>
             <div className="widget">
            <div className="widgetitems">
                <span className='widgettitel'>Total Costomer</span>
                <div className="widgetInfo">
                    <span className='nbrCostomer'>55</span>
                    <span className='Rating'>+2.14</span>
                </div>
                <span className='Subtitel'>Compared to last Month </span>
                
            </div>
            <div className="widgetitems">
                <span className='widgettitel'>Total Commande </span>
                <div className="widgetInfo">
                    <span className='nbrCostomer'>55</span>
                    <span className='Rating'>+2.14</span> 
                </div>
                <span className='Subtitel'>Compared to last Month </span>
            </div>
            <div className="widgetitems">
                <span className='widgettitel'>Sales</span>
                <div className="widgetInfo">
                    <span className='nbrCostomer'>155DT</span>
                    <span className='Rating'>+2.14 DT </span>
                </div>
                <span className='Subtitel'>Compared to last Month </span>
            </div>
        </div>
        </div>
    );
}

export default Widget;
