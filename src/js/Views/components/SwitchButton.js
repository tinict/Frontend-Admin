import '../../../assets/css/StyleAdminSite/SwitchButton.css';
import { useState } from "react";

const SwitchButton = ({IDProduct}) => {
    
    const [status, setStatus] = useState(1);
    
    const handleState = () => {
      const elementProductInfo = document.querySelectorAll('tr')[IDProduct + 1];
      const idProduct = parseInt(elementProductInfo.children[1].textContent);
      if (status === 1) setStatus(0);
      else setStatus(1);
      const url = `http://127.0.0.1:8080/products/state/update?id=${idProduct}&&state=${status}`;
      fetch(url, {
        method: "POST"
      })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    };
    
    return (
        <label class="switch">
          <input type="checkbox" onClick={handleState}/>
          <span class="slider round"></span>
        </label>
    )
};

export default SwitchButton;