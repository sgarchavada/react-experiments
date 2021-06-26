import React, {useState} from "react";
import {ApolloClient, InMemoryCache, gql, useQuery} from "@apollo/client";
import "./app.css";

// initialize a GraphQL client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com"
});

const LIST_OF_COUNTRIES = gql`
    {
        countries {
            name
            code
            emoji
            currency
            languages {
                name
            }
            continent {
                name
            }
        }
    }
`;

interface Country {
    name: string;
    code: string;
    emoji: string;
    currency: string;
    languages: [];
}

interface Continent {
    name: string;
    emoji: string;
}

const App: React.FC = () => {
    const [country, setCountry] = useState<Country>({
        name: "",
        code: "",
        emoji: "",
        currency: "",
        languages: []
    });
    const [continent, setContinent] = useState<Continent[]>([]);
    const {data} = useQuery(LIST_OF_COUNTRIES, {client});

    const getCountryChange = (e) => {
        if (e.target.value) {
            const city = data?.countries?.filter((a) => a.code === e.target.value.toUpperCase())[0];
            if (city) {
                setCountry(city);
            }
        }
    };

    const getContinentChange = (e) => {
        if (e.target.value) {
            const city = data?.countries?.filter(
                (a) => a.continent.name.toUpperCase() === e.target.value.toUpperCase()
            );
            if (city) {
                console.log(city);
                setContinent(city);
            }
        }
    };

    const renderLanguage = (language: []) => {
        const languages = language.map((a) => a["name"]);
        return languages.join();
    };

    return (
        <div className="center">
            <div>
                <input onChange={getCountryChange} placeholder="Enter country code" />
                <h5>Name: {country.name}</h5>
                <h5>Code: {country.code}</h5>
                <h5>Currency: {country.currency}</h5>
                <h5>Flag: {country.emoji}</h5>
                <h5>Language: {country.languages ? renderLanguage(country.languages) : ""}</h5>
            </div>
            <div>
                <input onChange={getContinentChange} placeholder="Enter continent code" />
                {continent.slice(0, 5).map((data) => (
                    <h5 key={data.name}>
                        {data.emoji} {data.name}
                    </h5>
                ))}
            </div>
        </div>
    );
};

export default App;
