import { Component } from "react";
import './index.css'
class AppItem extends Component{

    render(){
        const{TabDetails}=this.props
        const{imageUrl,appName}=TabDetails
        return(
            <div className="app-item">
                <img  className="app-logo"src={imageUrl} alt={appName}/>
                <p className="app-title">{appName}</p>
            </div>
        )
    }
}
export default AppItem
