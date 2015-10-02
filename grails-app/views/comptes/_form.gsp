<%@ page import="fag.Comptes" %>



<div class="fieldcontain ${hasErrors(bean: comptesInstance, field: 'compte', 'error')} required">
    <label for="compte">
        <g:message code="comptes.compte.label" default="Compte"/>
        <span class="required-indicator">*</span>
    </label>
    <g:textField name="compte" required="" value="${comptesInstance?.compte}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: comptesInstance, field: 'forfait', 'error')} required">
    <label for="forfait">
        <g:message code="comptes.forfait.label" default="Forfait"/>
        <span class="required-indicator">*</span>
    </label>
    <g:field name="forfait" value="${fieldValue(bean: comptesInstance, field: 'forfait')}" required=""/>

</div>

<div class="fieldcontain ${hasErrors(bean: comptesInstance, field: 'libelle', 'error')} required">
    <label for="libelle">
        <g:message code="comptes.libelle.label" default="Libelle"/>
        <span class="required-indicator">*</span>
    </label>
    <g:textField name="libelle" required="" value="${comptesInstance?.libelle}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: comptesInstance, field: 'service', 'error')} required">
    <label for="service">
        <g:message code="comptes.service.label" default="Service"/>
        <span class="required-indicator">*</span>
    </label>
    <g:textField name="service" required="" value="${comptesInstance?.service}"/>

</div>

