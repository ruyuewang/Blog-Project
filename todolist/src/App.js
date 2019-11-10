import React from 'react';

// import {Component} from 'react';
// 等价于
// import React from 'react';
// const Component = react.Component

function App() {
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
