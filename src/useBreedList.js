//give animal an return a list of breed
import {useQuery} from "@tanstack/react-query";
import fetchBreedList from './fetchBreedList';


//take the animal like dog->cat, change the breed
export default function useBreedList(animal) {
    const results = useQuery(["breeds", animal], fetchBreedList);

     /*if result is available give me that, if not-> dont give me a error
     ?? -> 'results?.data?.breeds' any of this fail, give [}
      result || []  */
    return [results?.data?.breeds ?? [], results.satus];

}
