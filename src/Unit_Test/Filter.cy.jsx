import Filter from '../../src/components/Filter/Filter'

describe('Filter Component', () => {
    const obj = {
        setSort() {
            console.log("A função foi chamada!")
        },
        setFilter() {
            return 0;
        }
    }

    it('should render component correctly', () => {
        cy.mount(<Filter />)
        cy.get('[data-cy=filter]').should('be.visible')
    })
    it('when \"Asc\" button is pressed, the setSort function should be called', () => {
        cy.mount(<Filter setSort={obj.setSort} />, {obj})
        cy.spy(obj, 'setSort')
        cy.get('[data-cy=asc-button]').click()
    })
    it('should select filter status \"Todas\"', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=status-select]').select('Todas').should('have.value', 'All')
    })
    it('should select filter status \"Completas\"', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=status-select]').select('Completas').should('have.value', 'Completed')
    })
    it('should select filter status \"Incompletas\"', () => {
        cy.mount(<Filter setFilter={obj.setFilter} />, {obj})
        cy.get('[data-cy=status-select]').select('Incompletas').should('have.value', 'Incomplete')
    })
})