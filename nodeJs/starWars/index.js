import { getPeople } from "./StarWarsServices.js";

async function main() {
    const starWarsPeople = await getPeople(1)
    const starWarsPeopleName = starWarsPeople.map(person => person.name)
    console.log(starWarsPeopleName)
}

main()