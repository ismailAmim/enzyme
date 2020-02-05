import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';
import * as reducers from './reducers';


describe('search robots', ()=>{
const initialStateSearch ={
    searchField: ''
};  
  it('should return the initial state', ()=>{
        expect(reducers.searchRobots(undefined,{})).toEqual({searchField: ''});  
  })

  it('should handle CHANGE_SEARCHFIELD', ()=>{
    expect(reducers.searchRobots(
        initialStateSearch,
        {
         type: CHANGE_SEARCHFIELD,
         payload : 'abc'
        }))
        .toEqual({searchField: 'abc'});  
  })
})

describe('request robots', ()=>{
    const initialStateRobots = {
        robots: [],
        isPending: true
      } 
      it('should return the initial robots state', ()=>{
            expect(reducers.requestRobots(undefined,{})).toEqual(
                initialStateRobots);  
      })
    
      it('should handle REQUEST_ROBOTS_PENDING', ()=>{
        expect(reducers.requestRobots(
            initialStateRobots,
            {
             type: REQUEST_ROBOTS_PENDING,
             }))
            .toEqual({"isPending": true, "robots": []});  
      })

      it('should handle REQUEST_ROBOTS_SUCCESS', ()=>{
        expect(reducers.requestRobots(
            initialStateRobots,
            {
             type: REQUEST_ROBOTS_SUCCESS,
             payload : [{
                        id  : '123',
                        name : 'test',
                        email: 'test@gmail'
                        }]
            }))
            .toEqual({robots: [{
                id  : '123',
                name : 'test',
                email: 'test@gmail'
                }], isPending: false});  
      })

      it('should handle REQUEST_ROBOTS_FAILED', ()=>{
        expect(reducers.requestRobots(
            initialStateRobots,
            {
             type: REQUEST_ROBOTS_FAILED,
             payload : 'errorrrrr'
            }))
            .toEqual({
                      error:'errorrrrr',
                      isPending: true,
                      robots:  []
                    });  
      }) 
    })