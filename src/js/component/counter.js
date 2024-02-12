import React from "react";

function Counter ({digito1, digito2, digito3, digito4, digito5, digito6}){


  const digitos=[digito1, digito2, digito3, digito4, digito5, digito6]
    return(
<div class="row bg bg-black p-4" style={{justifyContent:"space-between"}}>

        <div class="col-sm-1 mb-3 mb-sm-0 card card-body bg-info border rounded" style={{marginRight:50, marginLeft:50}}>
        <p class="card-text text-dark display-2"><i class="fa fa-clock"></i></p>
        </div>
{digitos.reverse().map((digito)=> (<div class="col-sm-1 mb-3 mb-sm-0 card card-body bg-info border rounded" style={{marginRight:50}}>
        <p class="card-text text-white display-2"><strong>{digito}</strong></p>
        </div>))}
 </div>
 );
}

export default Counter;