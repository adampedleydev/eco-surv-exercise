import React, { useState, useEffect } from "react";

interface Props {
    breed: string;
    subBreed: string;
    imagesCount: number;
}

const ImagesView: React.FC<Props> = ({ breed, subBreed, imagesCount }) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const breedString = subBreed ? `${subBreed} ${breed}` : breed;

    useEffect(() => {
        const apiUrl = `https://dog.ceo/api/breed/${breed}${subBreed ? `/${subBreed}` : ''}/images/random/${imagesCount}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setImageUrls(data.message));
    }, [breed, subBreed, imagesCount]);

    return (
        <div className={""}>
            <h2>{breedString}</h2>
            <div className={"flex flex-wrap"}>
                {imageUrls.map((url, index) => (
                    <img
                        key={`${breed}-${subBreed}-${index}`}
                        src={url}
                        className={"w-96 h-96 object-fill border-4 border-cyan-300"}
                        alt={`${breedString} image ${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImagesView;
