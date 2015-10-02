<%@ page import="fag.Comptes" %>
<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main">
    <g:set var="entityName" value="${message(code: 'comptes.label', default: 'Comptes')}"/>
    <title><g:message code="default.list.label" args="[entityName]"/></title>
</head>

<body>
<a href="#list-comptes" class="skip" tabindex="-1"><g:message code="default.link.skip.label"
                                                              default="Skip to content&hellip;"/></a>

<div class="nav" role="navigation">
    <ul>
        <li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
        <li><g:link class="create" action="create"><g:message code="default.new.label"
                                                              args="[entityName]"/></g:link></li>
    </ul>
</div>

<div id="list-comptes" class="content" role="main">
    <h1><g:message code="default.list.label" args="[entityName]"/></h1>
    <g:if test="${flash.message}">
        <div class="message" role="status">${flash.message}</div>
    </g:if>
    <table>
        <thead>
        <tr>

            <g:sortableColumn property="compte" title="${message(code: 'comptes.compte.label', default: 'Compte')}"/>

            <g:sortableColumn property="libelle" title="${message(code: 'comptes.libelle.label', default: 'Libelle')}"/>

            <g:sortableColumn property="service" title="${message(code: 'comptes.service.label', default: 'Service')}"/>

            <g:sortableColumn property="forfait" title="${message(code: 'comptes.forfait.label', default: 'Forfait')}"/>

        </tr>
        </thead>
        <tbody>
        <g:each in="${comptesInstanceList}" status="i" var="comptesInstance">
            <tr class="${(i % 2) == 0 ? 'even' : 'odd'}">

                <td><g:link action="show"
                            id="${comptesInstance.id}">${fieldValue(bean: comptesInstance, field: "compte")}</g:link></td>

                <td>${fieldValue(bean: comptesInstance, field: "libelle")}</td>

                <td>${fieldValue(bean: comptesInstance, field: "service")}</td>

                <td>${fieldValue(bean: comptesInstance, field: "forfait")}</td>

            </tr>
        </g:each>
        </tbody>
    </table>

    <div class="pagination">
        <g:paginate total="${comptesInstanceCount ?: 0}"/>
    </div>
</div>
</body>
</html>
