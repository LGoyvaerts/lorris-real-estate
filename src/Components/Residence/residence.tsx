import * as React from "react";
import {fetchResidentById, IResident} from "../../Services/Api/Residents/residents-service";
import {RouteComponentProps} from "react-router-dom";
import SearchMap from "../../Scenes/SearchPage/Components/SearchMap";
import DateTimeForm from "./calendar";

interface IResidenceRouteProps {
    id: string;
}

interface IState {
    residence: IResident | null;
}

class Residence extends React.Component<RouteComponentProps<IResidenceRouteProps>, IState> {
    state = {
        residence: {
            "id": 0,
            "name": "Modern Residence in Zurich",
            "address": " Buckhauserstr 24, Altstetten, 8048 Zürich, CH",
            "beds": 3,
            "toilets": 2,
            "square": 20,
            "img": "http://mariusn.com/themes/reales/images/prop/1-1.png"
        }
    }

    componentDidMount() {
        fetchResidentById(this.props.match.params.id).then((value) => this.setState({
            residence: value
        }))
    }

    render() {
        const {residence} = this.state

        return (
            residence ? (
                <div className="ui container">
                    <img className="ui fluid image" src={residence.img}/>
                    <div className="item">
                        <i className="map marker icon"></i>
                        <div className="content">
                            <a className="header">{residence.name}</a>
                            <div className="description">{residence.address}</div>
                        </div>
                    </div>
                    <div className="ui grid">
                        <div className="ten wide column">
                            <div className="ui bulleted list">
                                <div className="item">Name: {residence.name}</div>
                                <div className="item">Adresse: {residence.address}</div>
                                <div className="item">
                                    <div>Grössenangaben</div>
                                    <div className="list">
                                        <div className="item">Betten: {residence.beds}</div>
                                        <div className="item">Toiletten: {residence.toilets}</div>
                                        <div className="item">Fläche: {residence.square}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="six wide column">
                            <DateTimeForm/>
                        </div>
                    </div>
                    <div className="resultsMap">
                        <SearchMap/>
                    </div>
                </div>
            ) : (
                <div>
                    Loading
                </div>
            )
        )
    }
}

export default Residence;