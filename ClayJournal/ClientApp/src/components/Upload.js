import React, { useRef, useState, useEffect, setValue } from 'react';
import { useForm } from "react-hook-form";
import GlazeAndCoatsSelector from './partials/GlazeAndCoatsSelector';

function Upload() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const [glazeAndCoatsSelector, setGlazeAndCoatsSelector] = useState([<GlazeAndCoatsSelector key={0} />]);
  
  console.log('w', watch(...glazeAndCoatsSelector));

  useEffect(() => {
    register("glaze" + glazeAndCoatsSelector.length);
    register("glaze" + glazeAndCoatsSelector.length + "coats");
  });

  let handleAddGlazeAndCoatsSelector = (e) => {
    e.preventDefault()
    setGlazeAndCoatsSelector([...glazeAndCoatsSelector, <GlazeAndCoatsSelector key={glazeAndCoatsSelector.length} name={"glaze" + glazeAndCoatsSelector.length}/>]);
  }

  return (
    <div>
      <div className="pageTitle"><h1>Upload a Pot</h1></div>
      <section className="uploadPotFormContainer">
        
        <form className="uploadPotForm" onSubmit={handleSubmit(onSubmit)}>
          
          <label>Name</label>
          <input className={ errors?.name ? "error" : "no-error" } {...register("name", { required: true, minLength: 1, maxLength: 50 })} />
          {errors.name && <span className="errorMsg">This field is required (must be under 50 characters)</span>}
          
          <label>Description</label>
          <textarea className={ errors?.description ? "error" : "no-error" } {...register("description", { required: true, minLength: 1, maxLength: 200 })} />
          {errors.description && <span className="errorMsg">This field is required (must be under 200 characters)</span>}
          
          <button className="button" onClick={handleAddGlazeAndCoatsSelector}>+ Add Glaze & Coats</button>
          
          {glazeAndCoatsSelector}

          <input className="button" type="submit" value="Save to my pots"/>
        </form>
      </section>
    </div>
  );
  
}

export default Upload;