describe('Tech Trant Home page', () => {
  it('Loads successfully', () => {
    cy.visit('/')
  })

  it('displays the header', () => {
    cy.contains('Tech Trant')
    cy.get('.navbar-navigation').and(($child) => {
      expect($child.first()).to.contain('Home')
      expect($child.last()).to.contain('Contact')
    })
    cy.get('.navbar-navigation').children().should('have.length', 3)

    cy.get('.navbar-sm li').should('have.length', 5)

    cy.get('.navbar-sm li').children().should('have.attr', 'href')
  })

  it('displays the posts', () => {
    const postBody = '[data-cy="post"]'
    cy.get(postBody).should('be.visible')
    // user can see the post picture
    cy.get(`${postBody} img`).should('be.visible')
    // user can see the title of the post
    cy.get(`${postBody} h1`).each($child => {
      expect($child).to.have.text('Post title')
      expect($child).to.have.class('post-title')
    })
    cy.get(postBody).and(($child) => {
      expect($child).to.have.class('post-desc')
    })
    // user can see the body of the post
    // user can see the date the post was created
    // user can clikc on the post
  })
})