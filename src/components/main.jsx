import React from 'react';
import Header from './header';
import { connect } from 'react-redux';

class Main extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="main">
                <Header />
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    test: store.test
})

export default connect(mapStateToProps)(Main);