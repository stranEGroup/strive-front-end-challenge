import React, { useState } from "react";
import "./App.scss";

import { Person } from "./components/Person/Person";
import { IPerson } from "./interfaces/IPerson";
import { PersonsMock } from "./mocks/mock-data";

import logo from "./assets/img/Wordmark - HeaderBarAir.svg";

function App() {
    const [personsList, setPersonsList] = useState(PersonsMock);
    const [filteredPersons, setFilteredPersons] = useState(personsList);

    // Normally we would get the data from an API, and we would set that data
    // asynchronously using useEffect and setPersonsList(response.data)

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.toLowerCase();
        let result: IPerson[] = [];
        result = personsList.filter((person) =>
            person.name.toLowerCase().includes(value)
        );
        setFilteredPersons(result);
    };

    return (
        <div className="container">
          <div className="section nav-bar">
            <img src={logo} alt="Home"/>
          </div>
            <div className="section header">
                <div className="row">
                    <h1>The Person Finder</h1>
                    <p>
                        If you just can't find someone and need to know what
                        they look like, you've come to the right place! Just
                        type the name of the person you are looking for below
                        into the search box!
                    </p>
                </div>
            </div>
            <div className="section content">
                <div className="row">
                    <div className="search">
                        <input
                            className="search-input"
                            type="search"
                            placeholder="Search in Air HQ"
                            onChange={(event) => handleSearch(event)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="search-results">
                        {filteredPersons.length > 0 &&
                            filteredPersons.map((person) => {
                                return (
                                    <Person
                                        key={person.id}
                                        {...person}
                                    ></Person>
                                );
                            })}
                        {filteredPersons.length === 0 && (
                            <div>No Search Results Found.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
