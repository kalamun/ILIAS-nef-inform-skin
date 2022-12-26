import NefPage from "./nefPage.js"

export default class forumPage extends NefPage {
    constructor(baseClassIdentifier, cmdClassIdentifier){
        super(baseClassIdentifier, cmdClassIdentifier);
    }

    refactorHTML(){
        super.refactorHTML();
        // --------------------- DELETE SEARCH BAR --------------------
        $("#block_objectsearch_0").parent().remove();

         // --------------------- Unread forum -------------------
        $('.ilAlert').each(function() {
            $(this).parent().parent().addClass("forum-unread");
        });

        // --------------------- delete right block -------------------
        $('#il_center_col').each(function() {
            $(this).parent().parent().addClass("no-right-block");
        });

        // --------------------- add donwload picture on button download -------------------
        $(".btn-default").each(function(i, element) {
            if(element.textContent.trim() === 'Télécharger'){
                let imagesPath = "./Customizing/global/skin/nef-inform/images/download.png";
                $(element).prepend('<img class="nef-download-button" src="' + imagesPath+ '"/>');
            }
        });

        // --------------------- modify "pieces jointes" -------------------
        $(".ilFrmPostAttachmentsContainer").each(function(i, element) {
            let text = element.innerHTML;
            text = text.replace('Pièces Jointes','Pièce(s) Jointe(s) : ');
            element.innerHTML = text;
        });
    }
}