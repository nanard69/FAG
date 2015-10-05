package fag

class ComptesController {
    static scaffold = true

    def list() {
        params.max = Math.min(params.max ? params.int('max') : 10, 100)

        def comptesList = Comptes.createCriteria().list (params) {
            if ( params.query ) {
                ilike("libelle", "%${params.query}%")
            }
        }

        render(view: 'index', model:[comptesInstanceList: comptesList, comptesInstanceTotal: comptesList.totalCount])
    }
}
