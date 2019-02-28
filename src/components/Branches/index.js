import React, {Component} from 'react';

class Branches extends Component{
    constructor(props){
        super(props);
        this.createObjectBranches = this.createObjectBranches.bind(this);
    }
    createObjectBranches(branches){
        return  branches.map(i => {
            return <option value={i.name} key={i.sha}>
                    {i.name}
            </option>;
        })
    }
    render(){
        return(
            <div>
                <div className=" col-md-12 mt-2">
                    <div className="text-left col-xl-12  col-lg-12  col-md-12 ">
                        {this.props.branches && <select className="form-control form-control-sm">
                            {this.createObjectBranches(this.props.branches)}
                        </select> }
                    </div>
                </div>
            </div>
        )
    }
}

export default Branches;