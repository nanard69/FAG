import org.codehaus.groovy.grails.web.pages.GroovyPage

class gsp_FAG_fag_list_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/fag/_list.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)

def stat_norm=0;def stat_bas=0;def stat_haut=0;

printHtmlPart(1)
expressionOut.print(affichage.size)
printHtmlPart(2)
loop:{
int i = 0
for( compte in (affichage) ) {
printHtmlPart(3)
expressionOut.print(compte.value.compte)
printHtmlPart(4)
expressionOut.print(compte.value.libelle)
printHtmlPart(4)
expressionOut.print(compte.value.service)
printHtmlPart(4)
expressionOut.print(compte.value.forfait)
printHtmlPart(5)
if(true && (compte.value.montant>(compte.value.forfait*Double.valueOf(haut)))) {
printHtmlPart(6)
expressionOut.print(compte.value.montant)
printHtmlPart(7)

stat_haut++

printHtmlPart(8)
}
else if(true && (compte.value.montant>(compte.value.forfait*Double.valueOf(bas)))) {
printHtmlPart(9)
expressionOut.print(compte.value.montant)
printHtmlPart(7)

stat_bas++

printHtmlPart(8)
}
else {
printHtmlPart(10)
expressionOut.print(compte.value.montant)
printHtmlPart(7)

stat_norm++

printHtmlPart(8)
}
printHtmlPart(11)
i++
}
}
printHtmlPart(12)
out.print(stat_norm)
printHtmlPart(13)
out.print((stat_norm/(stat_norm+stat_bas+stat_haut)*100))
printHtmlPart(14)
out.print(stat_bas)
printHtmlPart(13)
out.print((stat_bas/(stat_norm+stat_bas+stat_haut)*100))
printHtmlPart(15)
out.print(stat_haut)
printHtmlPart(16)
out.print((stat_haut/(stat_norm+stat_bas+stat_haut)*100))
printHtmlPart(17)
createTagBody(1, {->
printHtmlPart(18)
invokeTag('submitButton','g',38,['name':("update"),'class':("create"),'id':("generator"),'value':("Générer fichier finance")],-1)
printHtmlPart(19)
})
invokeTag('form','g',39,['name':("myForm"),'action':("sendFile"),'id':("1")],1)
printHtmlPart(20)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1443183449791L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
