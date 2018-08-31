import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

require('./component.css');

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '', latlng: {
                lat: 52.232879,
                lng: 21.004829
            }}
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                this.setState({
                    latlng: latLng
                })
            })
            .catch(error => console.error('Error', error));
    };


    render() {

        return (
            <div className="Autocomplete_div">
                <div className="Search_Map">
                   <div className="Searching_Map">
                    <PlacesAutocomplete
                        value={this.state.address}
                        onChange={this.handleChange}
                        onSelect={this.handleSelect}
                        shouldFetchSuggestions={this.state.address.length > 3}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                                <input className="map_input" value="text"
                                    {...getInputProps({
                                        placeholder: 'Search FastFood Restaurant Chains ...',
                                        className: 'location-search-input',
                                    })}
                                />
                                <div className="autocomplete-dropdown-container">
                                    {loading && <div>Loading...</div>}
                                    {suggestions.map(suggestion => {
                                        const className = suggestion.active
                                            ? 'suggestion-item--active'
                                            : 'suggestion-item';
                                        // inline style for demonstration purpose
                                        const style = suggestion.active
                                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                        return (
                                            <div
                                                {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    style,
                                                })}
                                            >
                                                <span>{suggestion.description}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </PlacesAutocomplete>
               </div>
                    <div>
                        <h3>{this.props.value}</h3>
                    </div>
                    <div className="Main_Map">
                        <Maps latlng={this.state.latlng} />
                    </div>
                </div>
            </div>


        );
    }
}


class Maps extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            latlng: this.props.latlng
        }
    }


    static getDerivedStateFromProps(props, state){
        if(props.latng != state.latlng) {
            return {
                latlng: props.latlng
            }
        }
        return state;
    }



    renderMap = () => {
        // The location of Warsaw
        var uluru = this.state.latlng;
        // The map, centered at Warsaw
        this.map = new google.maps.Map(this.mapContainer, {
            zoom: 12,
            center: uluru
        });


        var marker = new google.maps.Marker({
            position: uluru,
            map: this.map,
            title: 'Hello World!'
        });
    }

    componentDidUpdate() {
        this.renderMap();
    }

    componentDidMount(){
        this.renderMap();
    }
    render() {
        const style = {
            height : 600,
            width: 600,
            display: this.state.visibility
        };
        return (
            <div className="maps_window">

                <div  style={style} ref={map => this.mapContainer = map}></div>

            </div>
        );
    }
}

class MapsAll extends React.Component{
    render(){
        return(<div>
                  <LocationSearchInput/>

            </div>
        )
    }
}

export {MapsAll}




