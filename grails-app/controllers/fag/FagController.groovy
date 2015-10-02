package fag

import pl.touk.excel.export.WebXlsxExporter

class FagController {

    def index() {     
    }
    
    def chargeFichier() {
        Map affichage = new LinkedHashMap();
        Map services = new HashMap();
        def comptes = Comptes.list();
        def type = 0;      //1 facture orange mobile, 2 facture sfr fixe adsl
        def compte_pers;

        new File("/tmp/"+params.fichier).splitEachLine(";") { row ->
            if(type==0) {
                if ( row[0].indexOf('ro de compte client') > -1) {
                    type=1;
                }else if(row[0].indexOf('FOURNISSEUR') > -1) {
                    type=2;
                }
            }

            if ( type==1 ) {
                //c'est un compte orange mobile
                compte_pers = comptes.findResult { it.compte == row[2] ? it : null }
                if (compte_pers != null) {
                    if (affichage.get(row[2]) != null) {
                        compte_pers.setMontant(Double.valueOf(row[12].replace(',', '.')) + (affichage.get(row[2])).montant);
                    } else {
                        compte_pers.setMontant(Double.valueOf(row[12].replace(',', '.')));
                    }
                    affichage.put(row[2], compte_pers);
                }
            } else if ( type==2 ) {
                //c'est un compte SFR fixe adsl
                compte_pers = comptes.findResult { it.compte == row[34] ? it : null }
                if (compte_pers != null) {
                    if (affichage.get(row[34]) != null) {
                        compte_pers.setMontant(Double.valueOf(row[70].replace(',', '.')) + (affichage.get(row[34])).montant);
                    } else {
                        compte_pers.setMontant(Double.valueOf(row[70].replace(',', '.')));
                    }
                    affichage.put(row[34], compte_pers);
                }
            }

            if (compte_pers != null) {
                if (compte_pers.service != null && services.get(compte_pers.service.toUpperCase()) != null) {
                    services.put(compte_pers.service.toUpperCase(), ((Double) services.get(compte_pers.service.toUpperCase())) + compte_pers.montant);
                } else {
                    if (compte_pers.service != null) {
                        services.put(compte_pers.service.toUpperCase(), compte_pers.montant);
                    } else {
                        services.put(compte_pers.service, compte_pers.montant);
                    }
                }
            }
        }

        session.setAttribute("services",services);
        def bas = 1+Double.valueOf(Parametres.findByParametreLike("tolerance basse").valeur)*0.01;
        def haut = 1+Double.valueOf(Parametres.findByParametreLike("tolerance haute").valeur)*0.01;
        render(template:"list", model: [affichage: affichage, bas: bas, haut: haut ])
    }

    def sendFile() {

        def tva=1+Double.valueOf(Parametres.findByParametreLike("tva").valeur)*0.01;
        def services = (HashMap)session.getAttribute("services");
        def headers = ['Antenne','Service', 'Montant HT', 'Montant TTC']
        def rendu = new WebXlsxExporter();

        rendu.setResponseHeaders(response);
        rendu.fillHeader(headers);
        def i=1
        def totalht=0d;

        services.each {
            key, value ->
                rendu.fillRow(['TELECOM',key,value,(value*tva).trunc(2)],i);
                i++;
                totalht=totalht+((Double)value).toString();
        }

        rendu.putCellValue(i+2, 2, totalht.trunc(2) + " HT")
        rendu.putCellValue(i+2, 3, (totalht*tva).trunc(2) + " TTC")
        rendu.save(response.outputStream)
    }
}
