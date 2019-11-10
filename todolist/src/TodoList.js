import React, {Component, Fragment} from 'react';

// import {Component} from 'react';
// 等价于
// import React from 'react';
// const Component = react.Component


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render(){
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleButtonClick.bind(this)}>add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) =>{
                            return(
                            <li
                                key = {index}
                                onClick={this.handleItemDelete.bind(this, index)}>
                                {item}</li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    handleButtonClick(e){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }
    handleItemDelete(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list: list
        })
    }
}

/*
function TodoList() {
    // JSX 语法：在js中使用<标签>不需要引号
    // 如果要使用自己创造的组件 可以写成标签<APP />
    // react组件标签 大写字母开头
    // h5标签 小写字母开头
  return (
    <Fragment>
        <div><input/><button>add</button></div>
        <ul>
            <li>Movie</li>
            <li>Blog</li>
        </ul>
    </Fragment>
  );
}
**/
/* ES6写法 这个class和上面的function是等效的
// 当一个class extends React.Component，这个class就会变成react组件
// render方法返回的内容就是这个组件显示的内容
class TodoList extends React.Component{
    render(){
        return(
        <div>
            TodoList
        </div>);
    }
}
*/
export default TodoList;
