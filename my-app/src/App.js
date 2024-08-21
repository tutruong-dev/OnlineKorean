import React from 'react';
import AssessmentBanner from './components/Body/Opening_Test';
import Breakcrumb from './components/Body/breakcrumb';
import ContactForm from './components/Body/contact';



function App() {
    return (
        <div className="App">
            <Breakcrumb />
            <ContactForm />
            {/* <AssessmentBanner /> */}
        </div>
    );
}

export default App;
