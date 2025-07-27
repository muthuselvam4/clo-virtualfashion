import { useEffect, useState } from "react";

function ConnectContentList() {

    const [contentList, setContentList] = useState('');

    useEffect(() => {
        fetch('https://closet-recruiting-api.azurewebsites.net/api/data')
        .then((response) => response.json())
        .then((data) => setContentList(data))
        .catch((error) => console.log('Something went wrong on our side', error))
    },[]);

    console.log('contentList', contentList)

    return (
        <div>Hello
        </div>
    )
}

export default ConnectContentList;