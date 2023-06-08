import React, { useEffect, useState } from 'react';
import { getList } from './list';

function NameApp() {
    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getList()
            .then(items => {
            if(mounted) {
                setList(items)
            }
            })
        return () => mounted = false;
    }, [])

    return(
        <div className="wrapper">
            <h1>Name list</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => 
                        <tr key={item.id}>
                            <td>{item.firstname}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
  
export default NameApp;