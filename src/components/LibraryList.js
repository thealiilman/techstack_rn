import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        //We're telling this dataSource object to take the list of libraries.
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    //This renders a library.
    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        return (
            <ListView dataSource={this.dataSource} renderRow={this.renderRow} />
        );
    }
}

const mapStateToProps = state => {
    //Having returned the object, I expect my component to have a props called libraries.
    //With a value of state.libraries, which's an array of libraries.
    return { libraries: state.libraries };
};

//The syntax calls the function 'connect'.
//When 'connect' is called, it returns another function.
//The LibraryList sits in that returned function.
export default connect(mapStateToProps)(LibraryList);