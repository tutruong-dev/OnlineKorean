import React from 'react'; 
import Opening_Test from '../components/Test/Opening_Test';
import Breakcrumb from '../components/Test/breakcrumb'

const TestPages = () => {
    return (
      <div className="TestPages-page">
        <Breakcrumb />
        <Opening_Test />
      </div>
    );
  };
  export default TestPages;