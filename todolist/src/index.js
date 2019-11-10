// 使用了 JSX 语法必须引用react
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
// 把App组件挂载到id=root这个DOM上
// JSX 语法
ReactDOM.render(<TodoList />, document.getElementById('root'));
