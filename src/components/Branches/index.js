import React, {Component} from 'react';

class Branches extends Component{
    constructor(props){
        super(props);
        this.state = {
            branch: 'master'
        }
        this.props.changeBranch(this.state.branch);
        this.createObjectBranches = this.createObjectBranches.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    createObjectBranches(branches){
        return  branches.map(i => {
            return <option value={i.name} key={i.sha}>
                    {i.name}
            </option>;
        })
    }
    handleChange(e) {
        this.setState({ branch: e.target.value})
        this.props.changeBranch(e.target.value); // I tried before target.value, or nativeEvent.value
    }
    render(){
        return(
            <div>
                <div className=" col-md-12 mt-2">
                    <div className="text-left col-xl-3  col-lg-3  col-md-4  col-sm-6 col-xs-12">
                        {this.props.branches && <select className="form-control form-control-sm" onChange={ this.handleChange } defaultValue={this.state.branch} ref={ref => {this._select = ref}}>
                            {this.createObjectBranches(this.props.branches)}
                        </select> }
                    </div>
                </div>
            </div>
        )
    }
}

export default Branches;