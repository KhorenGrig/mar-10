// const btn = document.querySelector('#btn');
// const val = document.querySelector('#val');
// btn.addEventListener('click', function(){
//    loadJson(`https://api.github.com/users/${val.value}`)
//         .then(msg => {
//             (msg.message === 'Not Found')
//             ? alert('Not Found a User Of This Name')
//             : Success(msg);
//         })
// })

// const loadJson = url => {
//     return fetch(url)
//         .then(respons => respons.json())
// }

const Success = (obj) => {
    let resault = '';
    for (const key in obj) {
        resault += `${key} : ${obj[key]} <br>`;
    }

    const li = document.createElement("LI");
    li.innerHTML = resault; 
    document.querySelector('#listik').appendChild(li);
}



                // Or

const btn = document.querySelector('#btn');
const getValue = () => {
    const val = document.querySelector('#val').value;
    document.querySelector('#val').value = '';
    return `${getUserData(val)}`;
}

const getUserData = async (name) => {
    try {
        let response = await fetch(`https://api.github.com/users/${name}`);
        let json = await response.json();
        (json.message === 'Not Found') 
            ?alert('You enter a Not Valid name')
            : Success(json);
    } catch (error) {
        console.log(`Something Wrong`);
    }
};

btn.addEventListener('click', getValue);

