import {testMe} from "./index";

test("Test installation", ()=>{
    expect(testMe()).toBe(42);
})