import React from 'react';
import Header from './header';
import CoverPhoto from './cover-photo';
import ProfileBar from './profile-bar';
import { connect } from 'react-redux';

class Main extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="main">
                <Header />
                <CoverPhoto />
                <ProfileBar />
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    test: store.test
})

export default connect(mapStateToProps)(Main);