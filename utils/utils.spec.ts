import { range } from "./utils"

describe('utils',()=>{
    describe('range',()=>{
        it('returns correct range from 1 to 5',
            () =>{
                expect(range(1,5)).toEqual([1,2,3,4])
            }
        )
        it('returns correct range from 1 to 1',
            () =>{
                expect(range(1,1)).toEqual([0])
            }
        )
    })
})