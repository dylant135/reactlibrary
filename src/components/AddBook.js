import React from "react";

export default function AddBook(props) {
    const [isActive, setIsActive] = React.useState(false)
    const [formData, setFormData] = React.useState({
        title: '',
        author: '',
        description: ''
    })

    function toggleIsActive() {
        setIsActive(prevState => !prevState)
    }

    function handleChange(event) {
        const t = event.target
        console.log(formData)
        setFormData(prevData => {
            return {
                ...prevData,
                [t.name]: t.value
            }
        })
    }

    function submitF() {
        props.setBooks(prevState => {
            return ([
                ...prevState,
                {
                    title: formData.title,
                    author: formData.author,
                    description: formData.description
                }
            ])
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
                        value={formData.title}
                        onChange={handleChange}
                        className='formInput'
                    />
                    <input 
                        type='text'
                        name='author'
                        placeholder="Author"
                        value={formData.author}
                        onChange={handleChange}
                        className='formInput'
                    />
                    <textarea 
                        name='description'
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className='formInput'
                    />
                    <button className="submit" onClick={submitF}>Add Book</button>
                </form>
            </div>}
        </div>
    )
}