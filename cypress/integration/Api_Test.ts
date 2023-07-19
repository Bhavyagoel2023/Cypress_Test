/// <reference types="cypress"/>

it('Get Api Test', function() {
   
    //Getting response from BrowserStack demo website
    cy.request('GET','https://www.bstackdemo.com/')
    .then((response) =>{
        //Expecting the response status code to be 200
        expect(response.status).to.eq(200)
    })
})


it('Post Api Test', function() {

    cy.request({method: 'POST', url: 'https://reqres.in/api/users', body: {
    "name": "Bingo",
    "job": "Team lead"
    }}).then((response) =>{
    //Asserting the status code to be 201 for successful execution
    expect(response.status).to.eq(201)
    //Asserting the name which we have inserted into
    expect(response.body.name).to.eq("Bingo")
    //Asserting the status text to confirm whether it is created
    expect(response.statusText).to.eq("Created")
    })
})

it("GraphQL request", function() {
    //Making a POST request to the given URL
    cy.request({method: 'POST', url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    body: {
    //Query parameter which needs to be passed for GraphQL
    query: `query Query {
    allFilms {
    films {
    title
    director
    releaseDate
    speciesConnection {
    species {
    name
    classification
    homeworld {
    name
    }
    }
    }
    }
    }
    }`
    }
    }).then((response) =>{
    //Asserting the status code to be 200 for successful response
    expect(response.status).to.eq(200)
    cy.log(response.toString())
    })
})