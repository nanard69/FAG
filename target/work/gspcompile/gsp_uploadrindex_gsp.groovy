import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage

@GrailsPlugin(name='uploadr', version='1.1.1')
class gsp_uploadrindex_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/plugins/uploadr-1.1.1/grails-app/views/index.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(1)
invokeTag('javascript','asset',5,['src':("uploadr.manifest.js")],-1)
printHtmlPart(1)
invokeTag('javascript','asset',6,['src':("uploadr.demo.manifest.js")],-1)
printHtmlPart(1)
invokeTag('stylesheet','asset',7,['href':("uploadr.manifest.css")],-1)
printHtmlPart(1)
invokeTag('stylesheet','asset',8,['href':("uploadr.demo.manifest.css")],-1)
printHtmlPart(1)
invokeTag('stylesheet','asset',9,['href':("bootstrap.manifest.css")],-1)
printHtmlPart(2)
})
invokeTag('captureHead','sitemesh',10,[:],1)
printHtmlPart(2)
createTagBody(1, {->
printHtmlPart(1)
invokeTag('demo','uploadr',12,[:],-1)
printHtmlPart(2)
})
invokeTag('captureBody','sitemesh',13,[:],1)
printHtmlPart(3)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1418069942000L
public static final String EXPRESSION_CODEC = 'raw'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
