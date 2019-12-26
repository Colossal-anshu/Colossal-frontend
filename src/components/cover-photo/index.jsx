import React from 'react';
// import CoverImage from '../../../assets/static/images/image-1.jpg'

class CoverPhoto extends React.Component{
    constructor(props){
        super(props)
    }

    setupCoverPhotoHeight(){
        const heightOfScreen = window.innerHeight;
        const ele = document.getElementById('cover-photo-container');

        ele.style.height = (heightOfScreen * 0.03125) + 'rem'; 
    }

    componentDidMount(){
        this.setupCoverPhotoHeight();
    }

    render(){
        return(
            <div className='cover-photo-container z--1' id='cover-photo-container'>
                {/* <img src={CoverImage} alt="cover photo"/> */}
            </div>
        )
    }
}

export default CoverPhoto