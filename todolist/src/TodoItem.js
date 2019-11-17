import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        const {content} = this.props;
        return(
            <div
                onClick={this.handleClick}
            >
                {content}
            </div>
        )
    }

    handleClick(){
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

//check the types
//use isRequired
TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
};

//use to set default values
TodoItem.defaultProps = {

};
