import React, { useEffect, useState } from 'react';
import { getName, setName } from './services';

function NameApp() {
    const [nameInput, setNameInput] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getName()
            .then(names => {
            if(mounted) {
                setList(names)
            }
            })
        return () => mounted = false;
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(nameInput)
    };

    return(
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
            <label>
                <p>Choose a name</p>
                <input type="text" onChange={event => setNameInput(event.target.value)} value={nameInput}/>
            </label>
            <button type="submit">Submit</button>
            </form>
            <h1>Name list</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(name =>
                        <tr key={name.id}>
                            <td>{name.firstname}</td>
                            <td>{name.quantity}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
  
export default NameApp;