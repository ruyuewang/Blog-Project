import React from 'react';

// import {Component} from 'react';
// 等价于
// import React from 'react';
// const Component = react.Component

function App() {
    // JSX 语法：在js中使用<标签>不需要引号
    // 如果要使用自己创造的组件 可以写成标签<APP />
    // react组件标签 大写字母开头
    // h5标签 小写字母开头
  return (
    <div>
        TodoList
    </div>
  );
}

/* ES6写法 这个class和上面的function是等效的
// 当一个class extends React.Component，这个class就会变成react组件
// render方法返回的内容就是这个组件显示的内容
class App extends React.Component{
    render(){
        return(
        <div>
            TodoList
        </div>);
    }
}
*/
export default App;
