import React, { useEffect, useState } from 'react'

const Hooks = () => {
    // These are custom hook
    const name = useFormInput("Shafeque");
    const surname = useFormInput('Naripatta');
    useDocumentTitle(name.value +' '+ surname.value);
    const width = useWidth()
    

    // const changeNameHandler = (e) => {
    //     setName(e.target.value)
    // }

    // const changeSurnameHandler = (e) => {
    //     setSurname(e.target.value)
    // }

    // useEffect(() => {
    //     document.title = name +' '+ surname;
    // })

    return (
        <div>
            <p>Update document title</p>
            <input { ...name }/>
            <br />
            <input { ...surname } />
            <br />
            <p>window width is, resize widow to change me : {width}</p>
        </div>
    )
}

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    })
}

const useFormInput = (initValue) => {
    const [value, setValue] = useState(initValue);

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    };
}

// implement window width 

const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    return width
}

export default Hooks;