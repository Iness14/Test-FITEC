describe('test codepromo', () => {
    beforeEach(() => {
        cy.visit('https://shop-in.ovh/categorie-produit/accessories/')
    })

    // commande promo avec code valide
    it('utilisation d un code promo', () => {
        cy.fixture('data_codepromo').then((donnee) => {
            console.log(donnee)
            cy.get('.post-1556 > .ct-woo-card-actions > .button').click()
            cy.get('.added_to_cart').click()
            cy.get('#coupon_code').type(donnee.code_valide)
            cy.get('.coupon > .button').click()
            cy.get('.woocommerce-message').invoke('text').then((message) => {
                cy.log(message)
                const message_nettoyee = message.replace('/\s+/g', ' ').trim()
                cy.log(message_nettoyee)
                expect(message_nettoyee).to.equal('Coupon code applied successfully.')
            })

        })

    })
    // commande promo avec code en miniscule

    it('utilisation d un code promo', () => {
        cy.fixture('data_codepromo').then((donnee) => {
            console.log(donnee)
            cy.get('.post-1556 > .ct-woo-card-actions > .button').click()
            cy.get('.added_to_cart').click()
            cy.get('#coupon_code').type(donnee.code_en_miniscule)
            cy.get('.coupon > .button').click()
            cy.get('.woocommerce-message').invoke('text').then((message) => {
                cy.log(message)
                const message_nettoyee = message.replace('/\s+/g', ' ').trim()
                console.log(message_nettoyee)
                expect(message_nettoyee).to.equal(`Coupon ${donnee.code_en_miniscule} does not exist!`)
            })

        })

    })
    // test sur mobile

    it('utilisation d un code promo', () => {
        cy.viewport('iphone-6')
        cy.fixture('data_codepromo').then((donnee) => {
            console.log(donnee)
            cy.get('.post-1556 > .ct-woo-card-actions > .button').click()
            cy.get('.added_to_cart').click()
            cy.get('#coupon_code').type(donnee.code_avec_espace)
            cy.get('.coupon > .button').click()
            cy.get('.woocommerce-error').invoke('text').then((message) => {
                cy.log(message)
                const message_nettoyee = message.replace('/\s+/g', ' ').trim()
                cy.log(message_nettoyee)
                expect(message_nettoyee).to.equal(`Coupon "${donnee.code_avec_espace}" does not exist!`)
            })

        })

    })
})


