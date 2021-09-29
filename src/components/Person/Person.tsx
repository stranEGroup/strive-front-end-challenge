import { IPerson } from "../../interfaces/IPerson";

import "./Person.scss";

export function Person(person: IPerson) {
    return (
        <div className="person-card">
            <div className="person-avatar">
                <img src={person.avatar} alt="Avatar"/>
            </div>
            <div className="person-info">
                <h1 className="person-name">{person.name}</h1>
                <p className="person-description">{person.description}</p>
            </div>
        </div>
    );
}
