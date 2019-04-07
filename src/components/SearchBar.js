import React from 'react';


class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.naSubmitanje(this.state.term)
    }

    render() {
        return (
            <div className="ui segment"  style={{backgroundColor: "red"}}>
                <form name="myform" onSubmit={this.onFormSubmit} className="ui  form">
                    <div className="field">
                        <label>Search cities </label>
                            <input 
                                type="text"
                                value={this.state.term}
                                onChange={e => this.setState({ term: e.target.value })}
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;

            
 