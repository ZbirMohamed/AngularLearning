import { pluck, range } from "./utils"

describe('utils',()=>{
    describe('range',()=>{
        it('returns correct range from 1 to 5',
            () =>{
                expect(range(1,5)).toEqual([1,2,3,4])
            }
        )
        it('returns correct range from 1 to 1',
            () =>{
                expect(range(1,1)).toEqual([])
            }
        )
    })
    describe('pluck',()=>{
        it('returns correct id map range [1,2,3]',()=>{
            const data = [
                {id:1,name:'mohamed'},
                {id:2,name:'youssef'},
                {id:3,name:'rachid'},
            ]
            expect(pluck(data,'id')).toEqual([1,2,3])
        })
    })
})