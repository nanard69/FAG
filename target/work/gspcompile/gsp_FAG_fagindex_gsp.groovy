import org.codehaus.groovy.grails.web.pages.GroovyPage

class gsp_FAG_fagindex_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/fag/index.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
printHtmlPart(1)
createTagBody(1, {->
printHtmlPart(2)
expressionOut.print(resource(dir:'css',file:'rendu.css'))
printHtmlPart(3)
invokeTag('javascript','asset',8,['src':("uploadr.manifest.js")],-1)
printHtmlPart(4)
invokeTag('stylesheet','asset',9,['href':("uploadr.manifest.css")],-1)
printHtmlPart(4)
invokeTag('captureMeta','sitemesh',10,['gsp_sm_xmlClosingForEmptyTag':(""),'http-equiv':("Content-Type"),'content':("text/html; charset=UTF-8")],-1)
printHtmlPart(4)
createTagBody(2, {->
createClosureForHtmlPart(5, 3)
invokeTag('captureTitle','sitemesh',11,[:],3)
})
invokeTag('wrapTitleTag','sitemesh',11,[:],2)
printHtmlPart(6)
})
invokeTag('captureHead','sitemesh',12,[:],1)
printHtmlPart(6)
createTagBody(1, {->
printHtmlPart(7)
createTagBody(2, {->
printHtmlPart(8)
createClosureForHtmlPart(9, 3)
invokeTag('onSuccess','uploadr',23,[:],3)
printHtmlPart(4)
})
invokeTag('add','uploadr',24,['name':("myUploadrName"),'allowedExtensions':("csv"),'path':("/tmp"),'direction':("up"),'maxVisible':("8"),'downloadable':("false"),'viewable':("false"),'deletable':("false")],2)
printHtmlPart(10)
})
invokeTag('captureBody','sitemesh',28,[:],1)
printHtmlPart(11)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1443191247882L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
