import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-border' >
            <div  ><h2 className='question'>Answering two Question</h2></div>
            <div className='question-flex' >
                <div className='ans-box' >

                <h3>How React Works?</h3>
                <br />
                
                <p>Ans:React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Also we can say react is a javascript based ui developement library .
                React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.

                 </p>
                </div>
                <br />
                <div className='ans-box'>
                    <h3>Props vs State</h3> <br />
                    <p>Ans : Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components
                    Both props and state changes trigger a render update.State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.
                    its brief description about props and state.

                    </p>

                </div>

            </div>
        </div>
    );
};

export default Question;