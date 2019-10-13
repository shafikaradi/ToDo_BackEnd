const model = require("./model")
//import {} from 'axios'
//import {}  from './model'
const axios = require('../index')



test("expect something", () => {
    expect(model.test()).toBe("something")
})

test("expect hi from server",  () => {
     axios.get('localhost:3000/').then(function(response){
      
        expect(response).toBe('hi')
    })
})