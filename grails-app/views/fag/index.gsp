<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" %>

<html>
    <head>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <link rel="stylesheet" href="${resource(dir:'css',file:'rendu.css')}" />
        <asset:javascript src="uploadr.manifest.js"/>
        <asset:stylesheet href="uploadr.manifest.css"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>FAG</title>
    </head>
    <body>
        <img src="http://www.melunvaldeseine.fr/extension/camvs_v2/design/camvs_v2/images/logo.png"/>
        <H2 style="vertical-align:middle;text-align:center;font: 32px/40px arial, sans-serif normal;position float;margin-top:-5%;">FACTURE CHECKER</H2>
        <div style="vertical-align:middle;text-align:center;margin-top:5%;">
        <uploadr:add name="myUploadrName" allowedExtensions="csv" path="/tmp" direction="up" maxVisible="8" downloadable="false" viewable="false" deletable="false">
            <uploadr:onSuccess>
                jQuery.post("/FAG/fag/chargeFichier", { fichier: file.fileName }, function( data ) {
                    jQuery( "#tableau" ).html( data );
                });
                callback();
            </uploadr:onSuccess>
        </uploadr:add>
        </div>
        <div id="tableau" style="vertical-align:middle;text-align:center;margin-left: auto;margin-right: auto;margin-top:5%;">
        </div>
    </body>
</html>
