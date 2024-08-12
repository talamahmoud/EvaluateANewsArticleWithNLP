const {handleFormSubmit} = require('../formHandler');

describe("handleFormSubmit",()=>{
    it("returns something, and shoule be def", ()=>{
        expect(handleFormSubmit).toBeDefined();
    })
})