<%@ page import="fag.Comptes" %>
<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main">
    <g:set var="entityName" value="${message(code: 'comptes.label', default: 'Comptes')}"/>
    <title><g:message code="default.show.label" args="[entityName]"/></title>
</head>

<body>
<a href="#show-comptes" class="skip" tabindex="-1"><g:message code="default.link.skip.label"
                                                              default="Skip to content&hellip;"/></a>

<div class="nav" role="navigation">
    <ul>
        <li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
        <li><g:link class="list" action="index"><g:message code="default.list.label" args="[entityName]"/></g:link></li>
        <li><g:link class="create" action="create"><g:message code="default.new.label"
                                                              args="[entityName]"/></g:link></li>
    </ul>
</div>

<div id="show-comptes" class="content scaffold-show" role="main">
    <h1><g:message code="default.show.label" args="[entityName]"/></h1>
    <g:if test="${flash.message}">
        <div class="message" role="status">${flash.message}</div>
    </g:if>
    <ol class="property-list comptes">

        <g:if test="${comptesInstance?.compte}">
            <li class="fieldcontain">
                <span id="compte-label" class="property-label"><g:message code="comptes.compte.label"
                                                                          default="Compte"/></span>

                <span class="property-value" aria-labelledby="compte-label"><g:fieldValue bean="${comptesInstance}"
                                                                                          field="compte"/></span>

            </li>
        </g:if>

        <g:if test="${comptesInstance?.forfait}">
            <li class="fieldcontain">
                <span id="forfait-label" class="property-label"><g:message code="comptes.forfait.label"
                                                                           default="Forfait"/></span>

                <span class="property-value" aria-labelledby="forfait-label"><g:fieldValue bean="${comptesInstance}"
                                                                                           field="forfait"/></span>

            </li>
        </g:if>

        <g:if test="${comptesInstance?.libelle}">
            <li class="fieldcontain">
                <span id="libelle-label" class="property-label"><g:message code="comptes.libelle.label"
                                                                           default="Libelle"/></span>

                <span class="property-value" aria-labelledby="libelle-label"><g:fieldValue bean="${comptesInstance}"
                                                                                           field="libelle"/></span>

            </li>
        </g:if>

        <g:if test="${comptesInstance?.service}">
            <li class="fieldcontain">
                <span id="service-label" class="property-label"><g:message code="comptes.service.label"
                                                                           default="Service"/></span>

                <span class="property-value" aria-labelledby="service-label"><g:fieldValue bean="${comptesInstance}"
                                                                                           field="service"/></span>

            </li>
        </g:if>

    </ol>
    <g:form url="[resource: comptesInstance, action: 'delete']" method="DELETE">
        <fieldset class="buttons">
            <g:link class="edit" action="edit" resource="${comptesInstance}"><g:message code="default.button.edit.label"
                                                                                        default="Edit"/></g:link>
            <g:actionSubmit class="delete" action="delete"
                            value="${message(code: 'default.button.delete.label', default: 'Delete')}"
                            onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');"/>
        </fieldset>
    </g:form>
</div>
</body>
</html>
