import React from 'react';

const condisionalRendaring = () => {
    const result =10;
    const marks =true;

    return (
        <div>

            <h1>3==Conditional Rendaring  in Jsx</h1>
            {result > 10?<h3>Hello This This Briant Student </h3> : <h3> This is a Average Student  </h3>}

             {(()=>{
            
               if(result >10){
                return <h3>This is briant student</h3>
               }else{
                return  <h3>This is Average student</h3>
               }


            

             })()}
              {(()=>{
            
                 switch (marks) {
                    case false:
                        
                        return <h3>This is Average student</h3>;
                 
                    case true:
                        return <h3>This is Briant student</h3>;
                 }
         

          })()} 

            {marks==true && <h3>This is Briant student</h3>}



        </div>
    );
};

export default condisionalRendaring;