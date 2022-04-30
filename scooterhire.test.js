const {User, Customer, RepairMan, Scooter, App, ChargingDock} = require('./scooterhire')
const { default: TestRunner } = require('jest-runner')
const { exportAllDeclaration } = require('@babel/types')

describe('Tests for User class', () => {
    test('user successfully logging in', () => {
    const harry = new Customer(19,1000) 
    expect(login(harry)).toBe("You have logged in")   
    })
    
})

