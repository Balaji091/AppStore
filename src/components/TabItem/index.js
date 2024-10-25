import { Component } from "react";
import './index.css'
class TabItem extends Component{
    render()
    {
        const{tabDetails,setCategory,trackTab}=this.props
        const {displayText,tabId}=tabDetails
        return(
            <li className={trackTab===tabId?"hover":"no-hover"}onClick={()=>setCategory(tabId)}>{displayText}</li>
        )
    }
}

export default TabItem