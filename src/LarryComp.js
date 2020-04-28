import React, {useState} from 'react';

function LarryComp (props) {
    // const [count, setCount] = useState(1000);
    
    console.log(props);
    
    function myOnClick(e) {
        
        console.log('You clicked in Larry Comp');
        props.countFunc();
    }
    
    return (
        <div>
            <h1 onClick={props.countFunc}>Hello world from Larry Comp! {props.count}</h1>
            {/* <h1 onClick={myOnClickCount}>Hello World!: index {count}</h1> */}
        </div>
    )
}

export default LarryComp;
