import React from 'react'
import TodoForm from '../../src/components/TodoForm/TodoForm'

describe('<TodoForm />', () => {
    beforeEach(() => {
        cy.mount(<TodoForm />)
    })
    let input = 'Finalizar parte escrita do trabalho de Ética';

    it('should render component correctly', () => {
        cy.get('[data-cy=todo-form]').should('be.visible')
    })
    it('should select \"Trabalho\" category', () => {
        cy.get('[data-cy=select-category]').select('Trabalho').should('have.value', "Trabalho")
    })
    it('should select \"Pessoal\" category', () => {
        cy.get('[data-cy=select-category]').select('Pessoal').should('have.value', "Pessoal")
    })
    it('should select \"Estudos\" category', () => {
        cy.get('[data-cy=select-category]').select('Estudos').should('have.value', "Estudos")
    })
    it('should check input', () => {
        cy.get('[data-cy=todo-form-input]').type(input).should("have.value", input)
    })
    it('should check shape of color buttons', () => {
        cy.get('[data-cy=color]').should("have.css", "border-radius", "100%")
    })
    it('should check if color buttons are grouped horizontally', () => {
        cy.get('[data-cy=colors]').should("have.css", "flex-direction", "row")
    })
})