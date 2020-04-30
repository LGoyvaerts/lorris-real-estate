import * as React from 'react';
import SingleHouse from 'Components/SingleHouse';
import './style.css';
import {fetchResidents, IResident} from '../../../../Services/Api/Residents/residents-service';

interface IState {
    residents: IResident[];
}

class ListProperty extends React.Component<{}, IState> {
    state = {
        residents: []
    }

    componentDidMount() {
        fetchResidents().then((value) => this.setState({
            residents: value
        }))
    }

    render() {
        const {residents} = this.state;

        return (
            <div className="listProperty">
                <div className="row listPropertyHeader">
                    <h3>Recently Listed Properties</h3>
                    <h5>Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras
                        adipiscing</h5>
                </div>
                <div className="row listPropertyContent">
                    {residents.map((data, index) => {
                        return (
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index}>
                                <SingleHouse data={data}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ListProperty;