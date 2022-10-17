import React from 'react';

const Question = () => {
    return (
        <div>
            <h2>Q: How does react work..</h2>
            <p>Ans: React is without a doubt one of the most powerful and flexible 
                frontend frameworks.React.js is one of the most talked about 
                JavaScript web frameworks in years. But with its great power comes great 
                responsibility it's easy to misuse it  and create a mess of an app.</p>
            <h2>Q: What is the difference between props and state..</h2>
            <p>Ans: In React, the developers build basic components and then use those basic components 
                to build larger components, leading to a complete web page.Both the props and the
                 state decide what data the component will display. The state is a set of variables that
                  determine the current condition of the component. </p>
                  <h2>Q: What is useful other than loading the useEffect data...</h2>
                  <p>Ans:  Placing useEffect inside the component lets us access the count 
                    state variable (or any props) right from the effect. By default, it runs 
                    both after the first render and after every update. React performs the cleanup when the component unmounts. </p>
        </div>
    );
};

export default Question;