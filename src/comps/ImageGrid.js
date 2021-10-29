import React from "react";
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
    // 'images' is the name of the firestore collection
    const {docs} = useFirestore('images');
    console.log(docs);

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} alt="img alt"></img>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;