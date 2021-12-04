import React, { useState, useEffect} from "react";

function ApiComponent(){
    const [respositories, setRepositories] = useState([])

    useEffect(async () => {
        const response = await fetch("https://api.github.com/users/devAquino/repos");
        const data = await response.json();
        setRepositories(data);
    })

    return(
        <ul>
            {respositories.map(repo => (
                <li key={repo.id}> {repo.name}</li>
            ))}
        </ul>
    )
}

export default ApiComponent
