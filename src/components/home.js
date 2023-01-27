import React from 'react';


function Home(props) {
    const collections = props.collections;
    let trs = Object.keys(collections).map(name => (<tr key={name}>
        <td><a href={"/collection/" + name}>{collections[name].collectionName}</a></td>
        <td>{collections[name].count}</td>
    </tr>));
    return (
        <table>
            <thead>
                <tr>
                    <th>Collection</th>
                    <th>No. of Images</th>
                </tr>
            </thead>
            <tbody>
                {trs}
            </tbody>
        </table>)
}

export default Home;
