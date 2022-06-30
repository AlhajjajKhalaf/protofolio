import React, { useContext, useEffect, useState } from "react";

import {Button} from 'react-bootstrap';



const Portfolio=()=>{
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    var alertTrigger = document.getElementById('liveAlertBtn')
    
    function alert(message, type) {
      var wrapper = document.createElement('div')
      wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    
      alertPlaceholder.append(wrapper)
    }
    
    if (alertTrigger) {
      alertTrigger.addEventListener('click', function () {
        alert('Nice, you triggered this alert message!', 'success')
      })
    }

return(<div>fgfg


{/* <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>



      <button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button> */}

<div class="alert alert-success" role="alert">
  live not lovely I hate that ......!
</div>

<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">hard work hard easy but dont have montiation for start</button>

</div>)


}

export default Portfolio;