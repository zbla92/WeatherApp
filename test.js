class App extends React.Component {
 
    // the term is logged out here, this is called from SearchBar.js the line: this.props.onSubmit(this.state.term);
    onSearchSubmit(term) {
        console.log(term);
    }
 
    // the onSubmit is an arbitrary name for one of the props that passes the function reference onSearchSubmit
    render() {
        return (
            <div className="ui container" >
                <SearchBar sda={this.onSearchSubmit} />
            </div>
        );
    }
 
}


...
onFormSubmit = (event) => {
   event.preventDefault();
 
    // onSubmit props is passed from App.js
   this.props.onSubmit(this.state.term);
}
...