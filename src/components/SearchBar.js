import React from 'react';


class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.naSubmitanje(this.state.term)
    }

    render() {
        return (

            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <form name="myform" onSubmit={this.onFormSubmit} className="ui  form">
                            <div className="field ">
                                <label>Search cities </label>
                                <input style={{ width: "50%" }}
                                    type="text"
                                    value={this.state.term}
                                    onChange={e => this.setState({ term: e.target.value })}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>

        )
    }
}

export default SearchBar;

