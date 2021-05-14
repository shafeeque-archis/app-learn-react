import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const [name, setName] = useState("Shafeeque");
    const [surname, setSurname] = useState("Naripatta");
    
    const changeNameHandler = (e) => {
        setName(e.target.value)
    }

    const changeSurnameHandler = (e) => {
        setSurname(e.target.value)
    }

    useEffect(() => {
        document.title = name +' '+ surname;
    })

    return (
        <div>
            <label>{name} {surname}</label><br/>
            <input
                value={name}
                onChange={changeNameHandler}
            />
            <br />
            <input
                value={surname}
                onChange={changeSurnameHandler}
            />
        </div>
    )
}

export default Hooks;