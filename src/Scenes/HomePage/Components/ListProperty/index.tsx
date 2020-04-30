import * as React from 'react';
import SingleHouse from 'Components/SingleHouse';
import {fetchResidents, IResident} from '../../../../Services/Api/Residents/residents-service';
import './style.css';

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
                    <h3>Unsere aktuellen Empfehlungen</h3>
                    <h5>Dies sind unsere Immobilien mit den aktuell besten Bewertungen von unsern Kunden und Spezialisten.</h5>
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