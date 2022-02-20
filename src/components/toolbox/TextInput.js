import React from "react";
import bootstrap from "bootstrap";

//hook yazacağız

//textbox'ın neleri olur? onları parametre olarak gönderiyorsun
const TextInput = (name, label, onChange, placeHolder, value, error) => {
  let wrapperClass = "form-group"; //burada reactstrap yerine bootstrap kullanıyoruz
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  //aşağıda aslında bootstrap form'u yazıyoruz ama kendi variablelarımızla
  return <div className={wrapperClass}> 
      <label htmlFor = {name}> </label> 
      <div className="field">
          <input type="text" name={name} className = "form-control" label = {label} onChange = {onChange} value={value} placeholder={placeHolder}> 
          </input> {error && <div className="alert alert-danger">{error}</div>}
          </div>
      </div>;
};

export default TextInput;
