import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const MealDetail = (props) => {
    const {strMeal, strMealThumb, strArea, strCategory} = props.meal;
    const [likeIcon, setLikeIcon] = useState('');
    const [disLikeIcon, setDisLikeIcon] = useState('');
    // const handleLikeBtn = () => {
    //     if(likeIcon){
    //         setLikeIcon('');
    //     }
    //     else{
    //         setLikeIcon('primary');
    //         setDisLikeIcon('');
    //     }
    // }
    // const handleDisLikeBtn = () => {
    //     if(disLikeIcon){
    //         setDisLikeIcon('');
    //     }
    //     else{
    //         setDisLikeIcon('primary');
    //         setLikeIcon('');
    //     }
    // }
    return (
        <Col md={3} style={{padding: '15px'}}>
            <div style={{border: '1px solid lightgray', borderRadius: '10px', padding:'10px'}}>
                <img src={strMealThumb} style={{width: "100%", borderRadius:'10px'}} alt=""/>
                <h4>{strMeal}</h4>
                <h6>{strArea}</h6>
                <ThumbUpIcon style={{marginRight:'10px'}} onClick={() => likeIcon ? setLikeIcon('') : setLikeIcon('primary') & setDisLikeIcon('')} color={likeIcon}></ThumbUpIcon>
                <ThumbDownIcon style={{marginLeft:'10px'}} onClick={() => disLikeIcon ? setDisLikeIcon('') : setDisLikeIcon('primary') & setLikeIcon('')} color={disLikeIcon}></ThumbDownIcon>
            </div>
        </Col>
    );
};

export default MealDetail;