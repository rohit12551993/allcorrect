import Google from "../../Pages/google";
import Wikipedia from "../../Pages/wikipedia";
describe("POM",()=>{
    it("POM",()=>{
        const a = new Google();
        a.typegoogle();

        const b = new Wikipedia();
        b.typewikipedia();
        
    })
})

