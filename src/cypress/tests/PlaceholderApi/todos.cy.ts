import { ToDoItem } from 'models/ToDoItems'

describe('TODOs', () => {
  const url = `${Cypress.env('apiUrl')}/todos`

  context('GET /todos', () => {
    it('returns a list of TODO items', () => {
      cy.request(url).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.length).to.eq(200)
      })
    })

    it('returns a specific TODO item by ID', () => {
      cy.fixture('todos').then((todos: ToDoItem[]) => {
        const todo = todos[0]
        cy.request(`${url}/${todo.id}`).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('userId', todo.userId)
          expect(response.body).to.have.property('id', todo.id)
          expect(response.body).to.have.property('title', todo.title)
          expect(response.body).to.have.property('completed', todo.completed)
        })
      })
    })

    it('returns a list of TODO items based on a search criteria', () => {
      cy.fixture('todos').then((todos: ToDoItem[]) => {
        const userId = todos[1].userId
        const completed = todos[1].completed

        cy.request(`${url}?userId=${userId}&completed=${completed}`).then(
          (response) => {
            todos.forEach((todo) => {
              expect(response.body).to.deep.include(todo)
            })
          }
        )
      })
    })
  })

  context('POST /todos', () => {
    it('creates a new TODO record', () => {
      cy.fixture('todos').then((todos: ToDoItem[]) => {
        const { id, ...todo } = todos[2]

        cy.request('POST', url, { todo }).then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body).to.have.property('id', 201)
          expect(response.body.todo).to.deep.include(todo)
        })
      })
    })
  })

  context('PUT /todos', () => {
    it('updates an existing TODO record', () => {
      cy.fixture('todos').then((todos: ToDoItem[]) => {
        const title = 'update test'
        const todo = { ...todos[3], title: title }

        cy.request('PUT', `${url}/${todo.id}`, { todo }).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('id', todo.id)
          expect(response.body.todo).to.deep.include(todo)
        })
      })
    })
  })

  context('DELETE /todos', () => {
    it('deletes an existing TODO record', () => {
      cy.fixture('todos').then((todos: ToDoItem[]) => {
        const title = 'update test'
        const todo = { ...todos[4], title: title }

        cy.request('DELETE', `${url}/${todo.id}`).then((response) => {
          expect(response.status).to.eq(200)
        })
      })
    })
  })
})
