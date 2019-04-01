import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term)
    }


    render(){
        return (
            <div>
                <SearchBar  naSubmitanje={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App;