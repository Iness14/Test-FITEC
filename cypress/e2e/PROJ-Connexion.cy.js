describe("Tests de connexion avec un compte existant", () => {
    beforeEach(() => {
        cy.visit('https://shop-in.ovh/mon-compte/')
    })
    //01 - Cas de test : connexion avec un compte existant via l'icône. 
    it("connexion avec un compte existant à partir de l'icone compte", () => {
        cy.fixture("Fixtures-PROJ.json").then((authentification) => {

            cy.get(':nth-child(3) > .woocommerce-button').click()
            cy.get('#username').type(authentification.Usernamecorrect)
            cy.get('#password').type(authentification.Passwordcorrect)
            cy.get(':nth-child(3) > .woocommerce-button').click()
        })
        })
    //02 - Cas de test : connexion avec un compte existant avec un mot de passe oublié.
        it("Connexion avec un compte existant pour un mot de passe oublié", () => {
            cy.get('.woocommerce-LostPassword > a').click()
            cy.get('#user_login').type('Trabelsi Ines')
            cy.get('.woocommerce-Button').click()
            cy.log('hello')
        })
    //03 - cas de test : connexion avec un compte existant via le bouton "Mon compte".
    it("Connexion avec un compte existant à partir du bouton Mon compte",() => {
        cy.get('#block-12 > .wp-block-list > :nth-child(1) > a').click()
        cy.get('.page-title').should('have.text','Aïe ! Cette page est introuvable.')
    })


    })

