import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener('DOMContentLoaded',  () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <Clock />, root
  );
  ReactDOM.render(
    <Tabs tabs={[
        {title:"one", content:"first"},
        {title:"two", content:"second"}
      ]}/>,
      document.getElementById('tabs')
  );
});
