import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.content !== this.props.content;
    }

    render(){
        const {content, test} = this.props;
        return(
            <div
                onClick={this.handleClick}
            >
                {test} - {content}
            </div>
        )
    }

    handleClick(){
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
};

TodoItem.defaultProps = {
    test: ' '
};

export default TodoItem;