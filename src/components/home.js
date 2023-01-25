import React from 'react';


function Home(props) {

    let trs = props.collections.map((col, idx) => (<tr key={idx}>
        <td><a href={"/collection/" + col.id}>{col.collectionName}</a></td>
        <td>{col.imageCount}</td>
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
