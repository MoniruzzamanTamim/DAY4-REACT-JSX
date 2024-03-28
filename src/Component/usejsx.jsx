import React from 'react';

const usejsx = () => {
    return (
        <div>
                     <h1>1== Use JXS Rule in React</h1>
                
            <frameElement>
           <h3>This IS JSX Use Role 1 USe Parent DIV</h3>
            </frameElement>

            <frameElement>
                <h3>This is {1+1} Rules IN jsx USe Second Braket</h3>
            </frameElement>

            <>
            <h3> This IS JSX Use Role 3 Close all tag </h3>
            </>
            
              <>
              <h3 className='Test'>This IS JSX Use Role 4 Assign Claass</h3>
              </>

              <>
              <h3 className='attibute' firstName="CamelCase use for Attibute"> This IS JSX Use Role 5 Assign Attibute</h3>
              </>

        </div>
    );
};

export default usejsx;