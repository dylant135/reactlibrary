import React from "react";

export default function AddBook(props) {
    const [isActive, setIsActive] = React.useState(false)

    function toggleIsActive() {
        setIsActive(prevState => !prevState)
    }

    function handleChange(event) {
        const t = event.target
        props.setFormData(prevData => {
            return {
                ...prevData,
                [t.name]: t.value
            }
        })
    }

    return (
        <div>
            {!isActive && <div className="openForm">
                <button className="formbtn" onClick={toggleIsActive}>AddBook</button>
            </div>}
            {isActive && <div className="theForm">
                <form className="form">
                    <input 
                        type='text'
                        name='title'
                        placeholder="Title"
                        value={props.formData.title}
                        onChange={handleChange}
                        className='formInput'
                    />
                    <input 
                        type='text'
                        name='author'
                        placeholder="Author"
                        value={props.formData.author}
                        onChange={handleChange}
                        className='formInput'
                    />
                    <textarea 
                        name='description'
                        placeholder="Description"
                        value={props.formData.description}
                        onChange={handleChange}
                        className='formInput'
                    />
                    <button className="submit" type='button' onClick={() => {
                        props.submitF()
                        toggleIsActive()
                    }}>Add Book</button>
                </form>
            </div>}
        </div>
    )
}