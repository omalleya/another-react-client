import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [response, setResponse] = React.useState('');

    React.useEffect(() => {
        fetch('https://api.spider2ybanana.com/')
            .then(res => res.json())
            .then(res => console.log(res) || setResponse(res));
    }, [])

    return (
        <div>
            yo my name is Aidan, I have a cat named oopsie

            {JSON.stringify(response)}
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));