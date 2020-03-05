import React from 'react';

import './App.less';

import Aside from "./components/Aside";
import Pages from "./components/Pages";

const App = props => {
    return (
        <div className={'App'}>
            <Aside />
            <Pages />
        </div>
    );
};

export default App;
