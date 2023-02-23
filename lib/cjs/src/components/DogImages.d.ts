/// <reference types="react" />
interface DogImagesProps {
    breed: string;
    subBreed: string;
    number: number;
}
declare function DogImages({ breed, subBreed, number }: DogImagesProps): JSX.Element;
export default DogImages;
