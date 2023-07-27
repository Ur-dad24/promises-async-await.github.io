
const getGitHubUser = async () => {
    let response = await fetch('https://api.github.com/users');
    console.log(response);
    let data = await response.json();
    console.log(data[0].avatar_url); 
    let display = '';
    data.map((values)  => {
        
        display +=  ` <div class="cards">
        <img src=${values.avatar_url} alt=${values.login}>
        <h1>${values.login}</h1>
    </div>`

    });

    document.getElementById('root').innerHTML = display;

    await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });

    console.log("All data is being displayed");
}

getGitHubUser();






//JUST MY PLAYGROUND

//NORMAL FUNCTIONS

    // function myFunction () {
    //     return console.log("Async/Await");
    // }

    // myFunction();

// ASYNC FUNCTIONS
    // ASYNC Keyword: must be palced before a function.

        //   async function myFunction () {
        //      return console.log("Async/Await");
        //      let sentence = 'Promise is resolved'
        //      return sentence;
            
        // }

        // myFunction()
        // .then(console.log);

        //We can explicitly return a promise as below
        //This quite easy to understand and read 
        // async function myFunction () {
        
        //      return Promise.resolve("Promise is resolved");
            
        // }
        // myFunction().then(console.log);


//AWAIT Keyword
    //works only inside async functions
    //Ensures we wait until a promise is resolved

    //   const myFunction = async () => {
    //     let promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve("I am async and await keyword")

    //         }, 2000);
    //     });

    //     let result = await promise;
    //     console.log(result)
    //   }
    // myFunction();

//READING API DATA

    // const myFunction = async () => {
    //     let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    //     let userData = await response.json();
        
    //     setTimeout(() => {
    //         console.log(userData);
            
        
    //     }, 3000);
    
    
    // }
    // myFunction()

//READING GITHUB DATA

    //  const loadData = (url) => {
    //     return fetch(url).then((response) =>{
    //         if(response.status == 200){
    //             console.log(response)
    //             return response.json();
    //         }else{
    //             throw new Error(response.status)
    //         }
    //     })
    //  }

    //  loadData("https://jsonplaceholder.typicode.com/todos").catch(alert);

 
