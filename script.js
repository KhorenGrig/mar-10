// const btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     const val = document.querySelector('#val').value;
//     return loadJson(`https://api.github.com/users/${val}`)
//         .then(msg => {
//             (msg.message === 'Not Found')
//             ? console.log('Not Found a User Of This Name')
//             :console.log(msg);
//         })
// })

// const loadJson = url => {
//     return fetch(url)
//         .then(respons => respons.json())
// }


                // Or

// const btn = document.querySelector('#btn');

// const getValue = () => {
//     const val = document.querySelector('#val').value;
//     document.querySelector('#val').value = '';
//     return `${getUserData(val)}`;
// }

// const getUserData = async (name) => {
//     try {
//         let response = await fetch(`https://api.github.com/users/${name}`);
//         let json = await response.json();
//         (json.message === 'Not Found') 
//             ?console.log('You enter a Not Valid name')
//             :console.log(json);       
//     } catch (error) {
//         console.log(`Something Wrong`);
//     }
// };

// btn.addEventListener('click', getValue);