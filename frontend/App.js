import React, { useEffect, useState } from 'react';
import { getNames, getNameStats } from './services';
import ReactEcharts from "echarts-for-react"

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

function NameChart({ chartOptions }) {
    var output = 
        <MDBCard>
        <MDBCardBody>
            <MDBCardTitle>Charts</MDBCardTitle>
            <ReactEcharts option={chartOptions} />
        </MDBCardBody>
        </MDBCard>
        // <div className="card">
        //     <div className="card-body">
        //         <h5 className="card-title">Charts</h5>
        //         <div className="card-text"><ReactEcharts option={chartOptions} /></div>
        //     </div>
        // </div>
    return(output);
}

function Alert({ message }) {
    var output = 
    <MDBToast
        color='primary'
        autohide
        position='top-right'
        delay={2000}
        appendToBody
        // triggerRef={triggerItem}
        headerContent={
          <>
            <strong className='me-auto'>Info</strong>
            <small>Now</small>
          </>
        }
        bodyContent={ message }
      />
    return output;
}

function NameApp() {
    const [alert, setAlert] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [list, setList] = useState([]);
    const [graph, setGraph] = useState(false);
    const [yearList, setYearList] = useState([]);
    const [nameQuantity, setNameQuantity] = useState([]);
    const [name, setName] = useState('');

    var chartOptions = {
        title : {
            text: 'Name data',
            subtext: name,
            x:'center'
        },
        tooltip : {
            trigger: 'item'
        },
        xAxis: {
            name: 'Years',
            data: yearList
        },
        yAxis: { 
            name: 'Number of births',
        },
        series: [
            {
                type: 'bar',
                data: nameQuantity
            }
        ]
    }

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
            setList(names);
            populateCharts(names);
            setNameInput('');
            setAlert(true);
            setGraph(true);
        })
        .catch((e) => {
            console.log("Error ", e);
        })
    };

    const populateCharts = (names) => {        
        var yearData = [];
        var nameData = [];                
        names.forEach(n => {
            nameData.push(n.quantity);
            yearData.push(n.birthyear);
        })
        
        setYearList(yearData);
        setNameQuantity(nameData);
        setName(nameInput);
    }    

    return(
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
            <label>
                <p>Choose a name</p>
                <input type="text" onChange={event => setNameInput(event.target.value)} value={nameInput}/>
            </label>
            <MDBBtn type="submit">Submit</MDBBtn>
            </form>
            {/* {alert && <h2 className="alert alert-info">Fetching name stats...</h2>}             */}
            {graph && <NameChart chartOptions={chartOptions}/>}
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