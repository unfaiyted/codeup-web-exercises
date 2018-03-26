'use strict';

function wait(number) {
    return new Promise((resolve, reject) => {
        if (typeof parseFloat(number) === "number") {

        setTimeout(() =>
        {

            resolve();

        }, number);

    } else
        reject();
    })

}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


function getCommits(username) {
  return  fetch(`https://api.github.com/users/${username}/events/public`,
        {header: {'Authorization': 'token bb89b447f89dde7dca9aff5a17adbb7ccbbc3a95'}})
        .then(response => response.json())
      .catch(error => console.error(error));

};


function latestCommit(username) {
    return new Promise((resolve, reject) => {

        const commits = getCommits(username);
        let firstResult;

        commits.then(events => events.map(event => event.created_at))
            .then(function(result) {
                firstResult = result[0];
            });


        setTimeout(() => {
            if(commits !== null) {
                resolve(firstResult);
            } else {
                reject();

            }



        },1500);






    });


}


let test  = latestCommit('unfaiyted');

console.log(test);