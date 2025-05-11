import google1 from "../../Pages/google1";
import google2 from "../../Pages/google2";
describe("type into google",()=>{
    it("typing into google web page",()=>{
        const q = new google1();
        q.g1();
       const w= new google2();
        w.g2();
    })
})