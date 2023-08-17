import React, {Component} from "react";

class Capstonee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 2. Create a state for the apis array and initialize it to the
            // empty array. Also create states for isLoaded and error.

            error: null,
            isLoaded: false,
            apis:[]
        };
    }
    componentDidMount() {
        // 3. Within the componentDidMount() function, perform a fetch using the URL
        // http://api.publicapis.org/entries

        fetch("https://api.publicapis.org/entries")
            .then(res => res.json())
            .then(
                // 4. When the data arrives, set apis state to data.entries
                (data) => {
                    this.setState({
                        isLoaded: true,
                        apis: data.entries
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, apis } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>

                    {apis.map((s) => ((<li>API: {s.API}, Description: {s.Description}, Link: {s.Link}</li>)))}
                </ul>
            );
        }
    }
}