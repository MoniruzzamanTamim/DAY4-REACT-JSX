import React from 'react';

const useJavascriptinjsx = () => {

    const result =10;
    return (
        <div>

            <h1>2==Use Javascript in Jsx</h1>
            {result > 10?<h3>Hello This This Briant Student </h3> : <h3> This is a Average Student  </h3>}

             {(()=>{
            
               if(result >10){
                return <h3>This is briant student</h3>
               }else{
                return  <h3>This is Average student</h3>
               }



             })()}   

            
        </div>
    );
};

export default useJavascriptinjsx;