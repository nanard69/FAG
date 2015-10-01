(function(g){var e={playNotification:function(a){a.workvars.notificationSoundEffect&&a.workvars.notificationSoundEffect.play()},playError:function(a){a.workvars.errorSoundEffect&&a.workvars.errorSoundEffect.play()},playDelete:function(a){a.workvars.deleteSoundEffect&&a.workvars.deleteSoundEffect.play()},cancel:function(a){a.preventDefault&&(a.preventDefault(),a.stopPropagation());return!1},dragOver:function(a){e.cancel(a)},dragEnter:function(a,b,c,d,h){b.addClass(d);e.cancel(a,b,c,d,h);h.workvars.gotFiles||
g(".placeholder",b).hide()},dragLeave:function(a,b,c,d,h){a.target&&a.target==b[0]&&b.removeClass(d);e.cancel(a);g(".placeholder",b).html(h.placeholderText);h.workvars.gotFiles||g(".placeholder",b).show()},addFile:function(a,b,c){var d=e.addFileElements(a,b,c,!1),d=g(d);b.fileColor&&g(".upload-progress",d).css("background-color",b.fileColor);e.onProgressHandler(d,b,100,c.labelDone,"",c);g(".placeholder",a).hide();c.workvars.gotFiles=!0;e.addButtons(b,d,c)},addFileElements:function(a,b,c,d){var h=
c.id+"File"+c.workvars.files.length,f=document.createElement("div");f.setAttribute("class","file");var l=document.createElement("div");l.setAttribute("class","background");var m=document.createElement("div");m.setAttribute("class","upload-progress");var n=document.createElement("div");n.setAttribute("class","info");var k=document.createElement("div");k.setAttribute("class","details");var p=document.createElement("div");p.setAttribute("class","buttons");var q=document.createElement("div");q.setAttribute("class",
"voting");var r=document.createElement("div");r.setAttribute("class","controls");r.appendChild(p);r.appendChild(q);p=document.createElement("div");p.setAttribute("class","spinner");p.style.display="none";q=document.createElement("div");q.setAttribute("class","name");q.setAttribute("id",h);var s=document.createElement("span");s.setAttribute("class","fileName");s.innerHTML=e.shortenFileName(c.maxFileNameLength,b.fileName);var t=document.createElement("div");t.setAttribute("class","size");t.innerHTML=
e.bytesToSize(b.fileSize);var u=document.createElement("div");u.setAttribute("class","percentage");u.innerHTML=d?"0%":c.labelDone;d=document.createElement("div");d.setAttribute("class","rating");var v=document.createElement("div");v.setAttribute("class","speed");n.appendChild(k);n.appendChild(r);n.appendChild(p);q.appendChild(s);k.appendChild(q);k.appendChild(t);k.appendChild(u);k.appendChild(v);k.appendChild(d);f.appendChild(l);f.appendChild(m);f.appendChild(n);l=g(".files",a)[0];"down"==c.insertDirection?
l.appendChild(f):l.insertBefore(f,l.childNodes[0]);e.addFileTooltip(g(".fileName",g("#"+h)),b);"up"==c.insertDirection?(c.workvars.files.unshift(f),0<c.workvars.viewing&&c.workvars.viewing++):(0<c.workvars.files.length&&c.workvars.viewing<c.workvars.files.length-1||(c.workvars.viewing=c.workvars.files.length),c.workvars.files.push(f));e.handlePagination(a,c);return b.obj=f},removeFileElement:function(a,b,c,d){var h=a.parent();c||e.playDelete(b);a.animate({height:"0px"},200,"swing",function(){if(!d){for(var c=
0;c<b.workvars.files.length;c++)if(b.workvars.files[c]==a.get(0)){b.workvars.files.splice(c,1);break}b.workvars.viewing="up"==b.insertDirection?0<c?c-1:0:c>b.workvars.files.length-1?b.workvars.files.length-1:c}a.remove();1>g(".info",h).size()&&g(".placeholder",h).show();e.handlePagination(b.workvars.uploadrDiv,b)})},handleBadge:function(a,b){b.workvars.uploading+=a;0>b.workvars.uploading&&(b.workvars.uploading=0);var c=b.workvars.badgeDiv,d=b.workvars.uploading;c.html(d);c.tipTip({content:(1==d?b.badgeTooltipSingular:
b.badgeTooltipPlural).replace("%d",d)});1>d&&0>a?c.animate({opacity:0},{duration:1E3}):1==d&&0<a&&(c.animate({opacity:1},{duration:700}),c.unbind("hover"));if(0>a&&0<b.workvars.paused.length){var h=[];g.each(b.workvars.paused,function(a,c){e.canUpload(b)?e.startUpload(c.file,c.fileAttrs,g(c.fileDiv),b):h.push(c)});b.workvars.paused=h}},handlePagination:function(a,b){var c,d,h,f,e,m,n=g(".pagination",a),k="",p=b.workvars.files;if(0==b.maxVisible)n.is(":visible")&&n.hide();else{if(p.length>b.maxVisible||
n.is(":visible"))for(d=Math.ceil(p.length/b.maxVisible),h=Math.ceil((b.workvars.viewing+1)/b.maxVisible),m=b.maxVisible*h-1,e=m-b.maxVisible+1,f=0;f<p.length;f++)c=g(p[f]),f<e||f>m?c.is(":visible")&&c.hide():c.is(":hidden")&&c.show();if(h&&d&&1!=d){c=b.workvars.prevButton;e=b.workvars.nextButton;m=b.workvars.pagesDiv;n.is(":hidden")&&n.show();for(f=1;f<=d;f++)k+="<li"+(f==h?' class="current"':"")+">"+f+"</li>";m.html(k);1==h?(c.hide(),e.show()):h==d?(c.show(),e.hide()):(c.show(),e.show())}else n.is(":visible")&&
n.hide()}},addFileTooltip:function(a,b){var c=new Date;c.setTime(b.fileDate);a.tipTip({content:"name: "+b.fileName+"<br/>size: "+e.bytesToSize(b.fileSize)+(b.fileDate?"<br/>date: "+c.toString():""),maxWidth:600})},drop:function(a,b,c,d,h){var f=a.dataTransfer.files;b.removeClass(d);a.preventDefault&&(a.preventDefault(),a.stopPropagation());"undefined"!==typeof f&&(g(".placeholder",b).hide(),h.workvars.gotFiles=!0,g.each(f,function(a,b){var d={fileName:b.name?b.name:b.fileName,fileSize:b.size?b.size:
b.fileSize,startTime:(new Date).getTime(),fileRating:0,deletable:!0},f=e.addFileElements(c,d,h),p=g(f);e.canUpload(h)?e.startUpload(b,d,p,h):"pause"==h.maxConcurrentUploadsMethod?(h.workvars.paused.push({file:b,fileAttrs:d,fileDiv:f}),e.onProgressHandler(p,b,0,h.labelPaused,"",h)):"cancel"==h.maxConcurrentUploadsMethod&&(e.onProgressHandler(p,b,0,h.labelAborted,"",h),f=1==h.maxConcurrentUploads?h.maxConcurrentUploadsExceededSingular:h.maxConcurrentUploadsExceededPlural,f=f.replace("%d",h.maxConcurrentUploads),
g("div.percentage",p).tipTip({content:f,maxWidth:600}),e.addButton(p,"delete",h.removeFromViewText,"",h,function(){e.removeFileElement(p,h)}),d.failed=!0,g(".upload-progress",p).addClass("failed"))}));return!1},canUpload:function(a){return 0==a.maxConcurrentUploads||a.workvars.uploading<=a.maxConcurrentUploads},startUpload:function(a,b,c,d){var h="";e.handleBadge(1,d);d.onStart(b);var f=new XMLHttpRequest,l=f.upload,m=g(".upload-progress",c);if(0<d.allowedExtensions.length){var n=d.allowedExtensions.split(","),
k=a.name.split("."),k=k[k.length-1];if(0>g.inArray(k,n))return e.playError(d),d.onProgress(b,c,100)&&(e.onProgressHandler(c,b,100,d.labelInvalidFileExtension,"",d,!0),a=d.fileExtensionNotAllowedText.replace("%s",k),a=a.replace("%s",d.allowedExtensions),g("div.percentage",c).tipTip({content:a,maxWidth:600}),e.handleBadge(-1,d),e.addButton(c,"delete",d.removeFromViewText,"",d,function(){e.removeFileElement(c,d)}),b.failed=!0),m.addClass("failed"),!1}if(d.maxSize&&(a.fileSize?a.fileSize:a.size)>d.maxSize)return e.playError(d),
d.onProgress(b,c,100)&&(e.onProgressHandler(c,b,100,d.labelFileTooLarge,"",d,!0),a=d.fileTooLargeText.replace("%s",e.bytesToSize(a.fileSize?a.fileSize:a.size)),a=a.replace("%s",e.bytesToSize(d.maxSize)),g("div.percentage",c).tipTip({content:a,maxWidth:600}),e.handleBadge(-1,d),e.addButton(c,"delete",d.removeFromViewText,"",d,function(){e.removeFileElement(c,d)}),b.failed=!0),m.addClass("failed"),!1;e.addButton(c,"cancel",d.fileAbortText,d.fileAbortConfirm,d,function(a){h="abort";f.abort()});l.addEventListener("progress",
function(a){if(d.onProgress(b,c,Math.ceil(a.loaded/a.total*100)))e.onProgressHandler(c,b,Math.ceil(a.loaded/a.total*100),"","",d)},!1);l.addEventListener("error",function(a){e.playError(d);d.onProgress(b,c,100)&&(e.onProgressHandler(c,b,100,d.labelFailed,"",d,!0),e.handleBadge(-1,d));m.addClass("failed");e.addButton(c,"delete",d.removeFromViewText,"",d,function(){e.removeFileElement(c,d)})},!1);l.addEventListener("abort",function(a){e.playError(d);if(d.onProgress(b,c,100))e.onProgressHandler(c,b,
100,d.labelAborted,"",d,!0);m.addClass("failed");d.onAbort(b,c);e.addButton(c,"delete",d.removeFromViewText,"",d,function(){e.removeFileElement(c,d)})},!1);f.onreadystatechange=function(){if(4==f.readyState){var a=f.responseText?JSON.parse(f.responseText):{};a.fileName&&b.fileName!=a.fileName&&(b.fileName=a.fileName,e.addFileTooltip(g(".fileName",c).html(e.shortenFileName(d.maxFileNameLength,a.fileName)),b));if(200==f.status){if(d.onProgress(b,c,100))e.onProgressHandler(c,b,100,"","",d);var l=g(".spinner",
c);l.show("slow");d.onSuccess(b,c,function(){l.hide();e.onProgressHandler(c,b,100,d.labelDone,"",d);e.playNotification(d);e.handleBadge(-1,d);e.addButtons(b,c,d);d.workvars.fileIterator++;d.files[d.workvars.fileIterator]=b},a)}else if(e.playError(d),d.onProgress(b,c,100)&&(e.onProgressHandler(c,b,100,d.labelFailed,a.statusText,d),e.handleBadge(-1,d)),m.addClass("failed"),d.onFailure(b,c),"abort"!=h)d.onDelete(b,c)}};f.open("POST",d.uri);f.setRequestHeader("Cache-Control","no-cache");f.setRequestHeader("X-Requested-With",
"Grails Uploadr");f.setRequestHeader("X-File-Name",encodeURIComponent(a.name?a.name:a.fileName));f.setRequestHeader("X-File-Size",a.size?a.size:a.fileSize);f.setRequestHeader("X-Uploadr-Name",encodeURIComponent(d.id));f.setRequestHeader("Content-Type",(a.type?a.type:a.contentType)+"; charset=utf-8");f.send(a)},onProgressHandler:function(a,b,c,d,h,f,l){var m=a.parent().width(),n=g(".upload-progress",a),k=g(".percentage",a),p=g(".speed",a),q,r;b.startTime&&100>c?(q=(new Date).getTime(),q=Math.ceil((q-
b.startTime)/1E3),r=b.fileSize/100*c/q,b.avg&&(r=Math.round((b.avg+r)/2)),b.avg=r,q=Math.ceil(b.fileSize/r-q),q=e.bytesToSize(r)+"/s (about "+e.secondsToTime(q)+" to go)"):q="";p.html(q);n.width(m/100*c);k.html(d?d:c+"%");d&&h&&k.tipTip({content:h,maxWidth:600});100<=c&&(c=g(".rating",a),d=g(".cancel",a),n.addClass("complete"),d.hide(),f.rating&&!l&&(p.hide(),k.hide(1E3,function(){g(this).hide()}),e.setRating(b.fileRating,a),c.show(500),b.fileRatingText&&c.tipTip({content:b.fileRatingText,maxWidth:600})),
b.speed=null)},addVotingButtons:function(a,b,c){if(!c.voting)return!0;var d=g(".voting",b),h=document.createElement("div");h.setAttribute("class","like");var f=document.createElement("div");f.setAttribute("class","unlike");d[0].appendChild(h);d[0].appendChild(f);g(h).bind("click.uploadr",function(){c.onLike(a,b,function(c){a.fileRating=c;if(!a.fileRating||0>a.fileRating)a.fileRating=0;1<a.fileRating&&(a.fileRating=1);e.setRating(a.fileRating,b)})}).tipTip({content:c.likeText,maxWidth:600});g(f).bind("click.uploadr",
function(){c.onUnlike(a,b,function(c){a.fileRating=c;if(!a.fileRating||0>a.fileRating)a.fileRating=0;1<a.fileRating&&(a.fileRating=1);e.setRating(a.fileRating,b)})}).tipTip({content:c.unlikeText,maxWidth:600})},addButtons:function(a,b,c){a.deletable&&c.deletable&&e.addButton(b,"delete",c.fileDeleteText,c.fileDeleteConfirm,c,function(){c.onDelete(a,b)&&e.removeFileElement(b,c)});c.colorPicker&&e.addButton(b,"color",c.colorPickerText,"",c,function(){var d=g(".upload-progress",b),h=d.css("background-color");
e.launchColorPicker(b,h,c,function(f){d.css("background-color",f);c.onChangeColor(a,b,f)})});c.downloadable&&e.addButton(b,"download",c.fileDownloadText,"",c,function(){c.onDownload(a,b)});c.viewable&&e.addButton(b,"view",c.fileViewText,"",c,function(){c.onView(a,b)});e.addVotingButtons(a,b,c)},addButton:function(a,b,c,d,h,f){h=document.createElement("div");h.setAttribute("class","button "+b);h.setAttribute("style","display: none");g(".buttons",a)[0].appendChild(h);a=g("."+b,a);c&&a.tipTip({content:c,
maxWidth:600});a.bind("click.uploadr",function(a){(!d||confirm&&confirm(d))&&f()});a.show("slow");return a},launchColorPicker:function(a,b,c,d){var h=a.parent().parent(),f=g(".pickr",h);if(!f.length){var e=document.createElement("div");e.setAttribute("class","arrow");var m=document.createElement("div");m.setAttribute("class","content");var n=document.createElement("ul"),k;for(k in c.colorPickerColors){var p=document.createElement("li");n.appendChild(p);g(p).css("background-color",c.colorPickerColors[k])}k=
document.createElement("div");k.setAttribute("class","pickr");m.appendChild(n);k.appendChild(m);k.appendChild(e);h[0].appendChild(k);f=g(".pickr",h);f.hide()}h=g("li",f);for(k=0;k<h.size();k++)e=g(h[k]),e.css("background-color")==b?e.addClass("current"):e.removeClass("current"),e.unbind("click.uploadr"),e.bind("click.uploadr",function(){d(g(this).css("background-color"));g(document).unbind("click.uploadr");f.hide(200)});b=a.position();f.css({top:b.top,left:b.left+a.width()+2});f.show(200,function(){g(document).bind("click.uploadr",
function(a){if(a.pageX<f.position().left||a.pageX>f.position().left+f.width()||a.pageY<f.position().top||a.pageY>f.position().top+f.height())g(document).unbind("click.uploadr"),f.hide(200)})})},setRating:function(a,b){var c=g(".rating",b),d=c.children();if(0>a||!a)a=0;1<a&&(a=1);for(var e=Math.round(10*a),f=Math.round(e/2),l=1;5>=l;l++){var m=f>=l?f==l&&e%2?"half":"full":"empty";if(d.size())g(d[l-1])[0].setAttribute("class",m);else{var n=document.createElement("div");n.setAttribute("class",m);c[0].appendChild(n)}}},
bytesToSize:function(a){if(!a)return"0 B";var b=parseInt(Math.floor(Math.log(a)/Math.log(1024)));return Math.round(a/Math.pow(1024,b),2)+" "+["B","KB","MB","GB","TB"][b]},secondsToTime:function(a){if(0==a)return"n/a";var b=parseInt(Math.floor(Math.log(a)/Math.log(60)));return Math.round(a/Math.pow(60,b),2)+" "+[" seconds","minutes","hours"][b]},shortenFileName:function(a,b){var c="",d="",e="",f=0,g=b.lastIndexOf(".");if(b.length<=a)return b;g?(c=b.substring(0,g),d=b.substring(g+1,b.length),f=a-4-
d.length,c.match(/\-\d+$/)&&(g=c.lastIndexOf("-"),e=c.substring(g+1,c.length),c=c.substring(0,g),f-=e.length)):c=b;return c.substring(0,f)+(e?"..."+e+".":"....")+d},addFileUploadField:function(a,b,c){var d=document.createElement("input");d.setAttribute("type","file");d.multiple=!0;var h=document.createElement("div");h.setAttribute("class","message");h.innerHTML=c.fileSelectText;var f=document.createElement("div");f.setAttribute("class","fileinput");f.appendChild(h);f.appendChild(d);b.appendChild(f);
var l=g("input[type=file]",a);g(".message",a).bind("click.uploadr",function(){l[0].click()});l.bind("change.uploadr",function(){"undefined"!==typeof this.files&&(g(".placeholder",b).hide(),c.workvars.gotFiles=!0,g.each(this.files,function(a,d){var f={fileName:d.name?d.name:d.fileName,fileSize:d.size?d.size:d.fileSize,startTime:(new Date).getTime(),fileRating:0,deletable:!0},h=e.addFileElements(b,f,c);e.startUpload(d,f,g(h),c)}))})}},w=function(a,b,c){this.clear=function(a){a=g.extend({sound:!0,erase:!0},
a);var e=a.sound;g.each(b.files,function(f,l){var m=g(l.obj);l.erased||(a.erase?b.onDelete(l,m)&&c.removeFileElement(m,b,!e):c.removeFileElement(m,b,!e),e=!1,l.erased=!0)});g(".file",b.workvars.uploadrDiv).each(function(){c.removeFileElement(g(this),b,!e,!0);e=!1})};this.set=function(a,c){"undefined"!==typeof b[a]&&(b[a]=c)}};g.fn.uploadr=function(a){var b={placeholderText:"drag and drop your files here to upload...",fileSelectText:"Select files to upload",fileAbortText:"Click to abort file transfer",
fileAbortConfirm:"Are you sure you would like to abort this transfer?",fileDeleteText:"Click to delete this file",fileDeleteConfirm:"Are you sure you want to delete this file?",fileDownloadText:"Click to download this file",fileViewText:"Click to view this file",fileTooLargeText:"The upload size of %s is larger than allowed maximum of %s",fileExtensionNotAllowedText:'You tried to upload a file with extension "%s" while only files with extensions "%s" are allowed to be uploaded',maxConcurrentUploadsExceededSingular:"Only 1 upload at a time allowed, please retry when the other upload is finished",
maxConcurrentUploadsExceededPlural:"Only %d concurrent uploads allowed, please retry when the other uploads are finished",likeText:"Click to like",unlikeText:"Click to unlike",colorPickerText:"Click to change background color",badgeTooltipSingular:"%d file is still being uploaded...",badgeTooltipPlural:"%d files are still being uploaded...",removeFromViewText:"Click to remove this aborted transfer from your view",labelDone:"done",labelPaused:"paused",labelFailed:"failed",labelAborted:"aborted",labelFileTooLarge:"too large",
labelInvalidFileExtension:"invalid",dropableClass:"uploadr-dropable",hoverClass:"uploadr-hover",uri:"/upload/uri",id:"uploadr",maxFileNameLength:34,maxSize:0,maxVisible:5,files:[],uploadField:!0,insertDirection:"down",maxConcurrentUploads:0,maxConcurrentUploadsMethod:"cancel",rating:!0,voting:!0,colorPicker:!0,deletable:!0,downloadable:!0,viewable:!0,allowedExtensions:"",notificationSound:"",errorSound:"",deleteSound:"",colorPickerColors:"#bce08a #00a8e1 #ff6418 #c78cda #ffcb00 #e70033".split(" "),
workvars:{gotFiles:!1,files:[],notificationSoundEffect:null,errorSoundEffect:null,deleteSoundEffect:null,viewing:0,uploading:0,badgeDiv:null,uploadrDiv:null,paginationDiv:null,pagesDiv:null,nextButton:null,prevButton:null,fileIterator:-1,paused:[]},onStart:function(a){},onProgress:function(a,b,e){return!0},onSuccess:function(a,b,e,f){e()},onFailure:function(a,b){return!0},onAbort:function(a,b){return!0},onView:function(a,b){return!0},onDownload:function(a,b){return!0},onDelete:function(a,b){return!0},
onLike:function(a,b,e){e(a.fileRating+.1)},onUnlike:function(a,b,e){e(a.fileRating-.1)},onChangeColor:function(a,b,e){return!0}};a=g.extend(b,a);return this.each(function(){var c=g(this),d=c.get(0);if(!c.data("uploadr")){a.uploadField&&e.addFileUploadField(c,d,a);var h=document.createElement("div");h.setAttribute("class","info-badge");var f=document.createElement("div");f.setAttribute("class","placeholder");f.innerHTML=b.placeholderText;var l=document.createElement("div");l.setAttribute("class","files "+
b.dropableClass);l.appendChild(f);f=document.createElement("div");f.setAttribute("class","pagination");var m=document.createElement("div");m.setAttribute("class","previous");var n=document.createElement("div");n.setAttribute("class","pages");var k=document.createElement("div");k.setAttribute("class","next");f.appendChild(m);f.appendChild(n);f.appendChild(k);d.appendChild(h);d.appendChild(l);d.appendChild(f);a.workvars.uploadrDiv=d;a.workvars.badgeDiv=g(h);a.workvars.paginationDiv=g(f);a.workvars.pagesDiv=
g(n);a.workvars.nextButton=g(k);a.workvars.prevButton=g(m);a.workvars.badgeDiv.css({opacity:0});a.workvars.paginationDiv.hide();l.addEventListener("dragover",e.dragOver,!1);l.addEventListener("dragenter",function(c){e.dragEnter(c,g(this),d,b.hoverClass,a)},!1);l.addEventListener("dragleave",function(c){e.dragLeave(c,g(this),d,b.hoverClass,a)},!1);l.addEventListener("drop",function(c){e.drop(c,g(this),d,b.hoverClass,a)},!1);g(m).bind("click.uploadr",function(){a.workvars.viewing-=a.maxVisible;e.handlePagination(d,
a)});g(k).bind("click.uploadr",function(){a.workvars.viewing+=a.maxVisible;e.handlePagination(d,a)});e.handlePagination(d,a);if(a.files)for(var p in a.files)e.addFile(d,a.files[p],a),a.workvars.fileIterator=p;a.notificationSound&&(a.workvars.notificationSoundEffect=new Audio(a.notificationSound));a.errorSound&&(a.workvars.errorSoundEffect=new Audio(a.errorSound));a.deleteSound&&(a.workvars.deleteSoundEffect=new Audio(a.deleteSound));c.data("uploadr",new w(this,a,e))}})}})(jQuery);