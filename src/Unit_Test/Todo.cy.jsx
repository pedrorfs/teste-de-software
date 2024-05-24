import Todo from '../../src/components/Todo/Todo'

describe('<Todo />', () => {
    const todo = {
        text: "Lorem ipsum dolor sit amet. Est quod expedita eum officia nihil rem repudiandae magni ut internos quia ea facere asperiores. Aut quaerat officiis 33 nobis voluptatem eos molestias esse ut ipsam facilis in possimus rerum in culpa aspernatur non suscipit dolorum. Non Quis delectus aut incidunt quam qui natus sapiente At adipisci internos. Cum enim enim qui enim nihil qui expedita quia sed neque nemo?",
        category: "Trabalho"
    }
    it('should render component correctly', () => {
        cy.mount(<Todo todo={todo} />)
        cy.get('[data-cy=todo]').should('be.visible')
    })
    it('should check if content is correct', () => {
        cy.mount(<Todo todo={todo} />)
        cy.get('[data-cy=todo-content]').should('have.text', todo.text)
    })
    it('should check if category is correct', () => {
        cy.mount(<Todo todo={todo} />)
        cy.get('[data-cy=todo-category]').should('have.text', todo.category)
    })
})