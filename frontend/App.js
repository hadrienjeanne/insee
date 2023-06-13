import React, { useEffect, useState } from 'react';
import { getNames, getNameStats } from './services';

function NameApp() {
    const [alert, setAlert] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [list, setList] = useState([]);

    // useEffect(() => {
    //     let mounted = true;
    //     getName()
    //         .then(names => {
    //         if(mounted) {
    //             setList(names)
    //         }
    //         })
    //     return () => mounted = false;
    // }, [])

    // suppression de l'alerte au bout de 1 seconde
    useEffect(() => { 
        if(alert) {
          setTimeout(() => {
            setAlert(false);
          }, 1000)
        }
      }, [alert])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        getNameStats(nameInput)
        .then((names) => {
            setNameInput('');
            setList(names);
            setAlert(true);
        })
        .catch((e) => {
            console.log("Error, no name entered");
        })
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
            {alert && <h2>Fetching name stats...</h2>}
            <h1>Name list</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(name =>
                        <tr key={name.id}>
                            <td>{name.firstname}</td>
                            <td>{name.birthyear}</td>
                            <td>{name.quantity}</td>
                        </tr>
                    )}
                </tbody>
            </table>            
        </div>
    )
}
  
export default NameApp;