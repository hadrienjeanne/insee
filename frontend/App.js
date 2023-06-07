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
            <ul>
            {list.map(item => <li key={item.id}>{item.firstname} {item.quantity}</li>)}
            </ul>
        </div>
    )
}
  
export default NameApp;

// const NameApplication = function(props) {
//   // State variable to show whether we're loading data or not.
//   // Defaults to "true" to show a loading screen until we get our data from the API
//   const [isLoading, setIsLoading] = useState(true);
//   // State variable where we'll save our list of employees
//   const [names, setNames] = useState([]);

//   // API client needs to be initialized as per above and passed 
//   // to the component
//   const client = props.client;  

//   // This effect will be called when the component mounts and fetch the data
//   // from our API
//   useEffect(
//     () => {
//       client.namesList().then((result) => {
//         // when we get the data back we set it in our state variable
//         setNames(result.results);
//         // and unset the "loading" flag
//         setIsLoading(false);  
//       });
//     }, 
//     [], // this argument will prevent continually hitting the APIs on state changes.
//   );  

//   // Show a loading state if we haven't gotten data back yet
//   if (isLoading) {
//     return <p>Names data is loading...</p>;
//   }
//   // Show an "empty" state if we have no employees
//   if (names.length === 0) {
//     return <p>No names found!</p>;
//   } else {
//     // Show our employee list component with the data we got back
//     return <NameList names={names} />;
//   }
// }

// const NameList = function(props) {
//   // This component renders a table of employees
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Sex</th>
//           <th>Name</th>
//           <th>Birth Year</th>
//           <th>Quantity</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           props.names.map((name, index) => {
//             return (
//               <tr key={index}>
//                 <td>{name.sex}</td>
//                 <td>{name.firstname}</td>
//                 <td>{name.birthyear}</td>
//                 <td>{name.quantity}</td>
//                </tr>
//             );
//           })
//         }
//         </tbody>
//     </table>
//   );
// };