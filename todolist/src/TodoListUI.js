import React from 'react';
import 'antd/dist/antd.css';
import {Button, Input, List} from "antd";

const TodoListUI = (props) => {
    return(
        <div style={{marginTop: '10px'}}>
            <Input
                value={props.inputValue}
                placeholder = 'todo info'
                style={{width: "300px", marginRight: '10px'}}
                onChange={props.handleInputChange}
            />
            <Button type='primary' onClick={props.handleButtonClick}> Submit </Button>
            <List
                style={{marginTop: '10px', width: '300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => {props.handleItemDelete(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
};

export default TodoListUI;

// export default class TodoListUI extends Component {
//     render() {
//         return(
//             <div style={{marginTop: '10px'}}>
//                 <Input
//                     value={this.props.inputValue}
//                     placeholder = 'todo info'
//                     style={{width: "300px", marginRight: '10px'}}
//                     onChange={this.props.handleInputChange}
//                 />
//                 <Button type='primary' onClick={this.props.handleButtonClick}> Submit </Button>
//                 <List
//                     style={{marginTop: '10px', width: '300px'}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (
//                         <List.Item onClick={() => {this.props.handleItemDelete(index)}}>
//                             {item}
//                         </List.Item>
//                     )}
//                 />
//             </div>
//         )
//     }
// }