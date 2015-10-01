<%@ page contentType="text/html;charset=UTF-8" %>

<% def stat_norm=0;def stat_bas=0;def stat_haut=0; %>

<br/>
${affichage.size}
<div style="vertical-align:middle;text-align: center;display: inline-block;">
    <table class="hoverTable">
        <thead>
        <tr><th>Compte</th><th>Libellé</th><th>Service</th><th>Forfait</th><th>Facture</th></tr>
        </thead>
        <tbody>
        <g:each in="${affichage}" status="i" var="compte">
            <tr>
                <td>${compte.value.compte}</td>
                <td>${compte.value.libelle}</td>
                <td>${compte.value.service}</td>
                <td>${compte.value.forfait}</td>
                <g:if test="${compte.value.montant>(compte.value.forfait*Double.valueOf(haut))}">
                    <td style="background-color: #D44937;">${compte.value.montant}</td>
                    <% stat_haut++ %>
                </g:if>
                <g:elseif test="${compte.value.montant>(compte.value.forfait*Double.valueOf(bas))}">
                    <td style="background-color: #FE9D0F;">${compte.value.montant}</td>
                    <% stat_bas++ %>
                </g:elseif>
                <g:else>
                    <td>${compte.value.montant}</td>
                    <% stat_norm++ %>
                </g:else>
            </tr>
        </g:each>
        </tbody>
    </table>
    <p>Nombre de forfaits sans dépassement : <%= stat_norm %> (<%= (stat_norm/(stat_norm+stat_bas+stat_haut)*100) %>%)   Nombre de forfaits avec dépassement léger : <%= stat_bas %> (<%= (stat_bas/(stat_norm+stat_bas+stat_haut)*100) %>%)   Nombre de forfaits avec dépassement anormal : <%= stat_haut %> ( <%= (stat_haut/(stat_norm+stat_bas+stat_haut)*100) %>%) </p><br/>

    <g:form name="myForm" action="sendFile" id="1">
        <g:submitButton name="update" class="create" id="generator" value="Générer fichier finance" />
    </g:form>
</div>