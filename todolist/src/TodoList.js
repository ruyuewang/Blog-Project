import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import Test from './Test';
import axios from 'axios';
import './style.css';

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
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render(){
        return (
            <Fragment>
                {
                    // JSX注释要放到中括号里
                }
                <div>
                    <label htmlFor={'insertArea'}>
                        input your task
                    </label>
                    <input
                        id = 'insertArea'
                        className={'input'}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
                    />
                    <button
                        onClick={this.handleButtonClick}>
                        add
                    </button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>

                 <Test content = {this.state.inputValue} />

            </Fragment>
        )
    }

    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0f5f3bc7298ae176fd0f642ec0a647b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
            .then((response) => {
                var results = response.data.results;
                results = this.mapMovies(results);
                this.setState(() => ({
                    list: results
                }));
            })
            .catch (() => {alert('error')});
    }

    mapMovies(list){
        return list.map((item) =>{
            return(item.title)
        })
    }

    getTodoItem(){
        return this.state.list.map((item, index) =>{
            return(
                <TodoItem
                    key = {item}
                    content = {item}
                    index = {index}
                    deleteItem = {this.handleItemDelete}
                />
            )
        })
    }

    handleInputChange(){
        const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleButtonClick(){
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue:''
        }))
    }
    handleItemDelete(index){
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
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
