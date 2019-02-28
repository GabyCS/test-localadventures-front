import React, {Component} from 'react';

class InfoRepo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        
        return(
            <div>
                <div className=" col-md-12 mt-4">
                    <div className="text-left col-xl-12  col-lg-12  col-md-12 ">
                        <h4 >{this.props.info.name}</h4>
                        <i>{this.props.info.owner.login}</i>
                    </div>
                    <div className="text-left col-xl-12  col-lg-12  col-md-12 mt-2">
                        <p >{this.props.info.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoRepo;