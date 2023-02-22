import React, { useState, useEffect } from 'react';

interface DogImagesProps {
    breed: string;
    subBreed: string;
    number: number;
}

function DogImages({ breed, subBreed, number }: DogImagesProps) {
    const [dogImages, setDogImages] = useState<string[]>([]);

    useEffect(() => {
        let apiUrl = `https://dog.ceo/api/breed/${breed}`;
        if (subBreed) {
            apiUrl += `/${subBreed}`;
        }
        apiUrl += `/images/random/${number}`;

        // Make API call to fetch dog images
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setDogImages(data.message));
    }, [breed, subBreed, number]);

    return (
        <div>
            {dogImages.map(imageUrl => (
                <img key={imageUrl} src={imageUrl} alt={`${breed} ${subBreed || ''}`} />
            ))}
        </div>
    );
}

export default DogImages;