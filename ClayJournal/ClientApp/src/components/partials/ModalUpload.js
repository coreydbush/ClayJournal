import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import LogoDark from '../../Images/clayjournal-logo-long-xdark.svg';
import { useForm } from 'react-hook-form';

function ModalUpload(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("notes", data.notes);
        formData.append("image", data.potImage[0]);
        console.log(data);
        fetch('/pots', {
            method: 'POST',
            body: formData
        }).then((response) => response.json())
    }


    if (props.isShowingUpload) {
    return (
        <div className="modal-wrapper">
        <div className="modal-overlay" />
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modalComp">
                    <button className="button close" aria-label="Close" onClick={props.toggleUpload}><span aria-hidden="true">X</span></button>
                    <div className="modal-header">
                        Upload a Pot
                    </div>
                    <div>
                    <section className="uploadPotFormContainer">
                        <form className="uploadPotForm" onSubmit={handleSubmit(onSubmit)}>
                            <label>Name</label>
                            <input className={errors?.name ? "error" : "no-error"} {...register("name", { required: true, minLength: 1, maxLength: 50 })} />
                            {errors.name && <span className="errorMsg">This field is required (must be under 50 characters)</span>}

                            <label>Description</label>
                            <textarea className={errors?.description ? "error" : "no-error"} {...register("description", { required: true, minLength: 1, maxLength: 200 })} />
                            {errors.description && <span className="errorMsg">This field is required (must be under 200 characters)</span>}

                            <label>Other Notes</label>
                            <textarea className={ errors?.notes ? "error" : "no-error" } {...register("notes", { required: true, minLength: 1, maxLength: 500 })} />
                            {errors.notes && <span className="errorMsg">This field is required (must be under 500 characters)</span>}

                            {/* <button className="button" onClick={handleAddGlazeAndCoatsSelector}>+ Add Glaze & Coats</button>

                            {glazeAndCoatsSelector} */}

                            <input type="file" {...register("potImage")} />

                            <input className="button" type="submit" value="Save to my pots" />
                        </form>
                    </section>
                    </div>
                    <div className="modal-header">
                        <img src={LogoDark}/>
                    </div>
                </div>
            </div>
        </div>
    );
    } else {
        return ('');
    }
}

export default ModalUpload;