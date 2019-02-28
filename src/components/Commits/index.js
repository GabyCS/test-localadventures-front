import React, {Component} from 'react';
import TimeAgo from 'react-timeago';
import spanishStrings from 'react-timeago/lib/language-strings/es';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

class Commits extends Component{
    constructor(props){
        super(props);
        this.createObjectTable = this.createObjectTable.bind(this);
    }
    createObjectTable(commits){
        return  commits.map(i => {
            let message = '';
            if(i.commit.message.length > 60){
                message = i.commit.message.substring(0,57)+'...'
            }else{
                message = i.commit.message.length > 30
            }
            let sha = i.sha.substring(0,7);
            const formatter = buildFormatter(spanishStrings)
            return <tr>
                    <th scope="row">{i.commit.author.name}</th>
                    <td>{sha}</td>
                    <td>{message}</td>
                    <td><TimeAgo date={i.commit.author.date} formatter={formatter}/></td>
                </tr>;
        })
    }
    render(){
        return(
            <div className=" mt-3">
                <table className="table text-left">
                    <thead>
                        <tr>
                        <th scope="col">Autor</th>
                        <th scope="col">Commit</th>
                        <th scope="col">Mensaje</th>
                        <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createObjectTable(this.props.commits)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Commits;