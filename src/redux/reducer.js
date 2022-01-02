import {comments} from '../shared/comments.json'
import {dishes} from '../shared/dishes.json';
import {promotions} from '../shared/promotions.json';
import {leaders} from '../shared/leaders.json';

export const initialState = {
    comments, 
    dishes, 
    promotions, 
    leaders
};

export const Reducer = (state = initialState, action)=>{
    return state;
};