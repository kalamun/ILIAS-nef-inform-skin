import NefPageWithoutTitle from "./nefPageWithoutTitle.js"

export default class Annuaire extends NefPageWithoutTitle{

    constructor(baseClassIdentifier, cmdClassIdentifier, menuName){
        super(baseClassIdentifier, cmdClassIdentifier, menuName);
    }

    refactorHTML(){
        super.refactorHTML();

        //--------------------- SET TITLE -------------------
        let title = this.menuName;
        let tabHeader = $('.ilFormHeader .ilHeader');
        if(tabHeader.length){
            title = tabHeader.text();
            tabHeader.parent().remove();
        }
        $('#ilTab').before('<h1 class="media-heading ilHeader">' + title +'<\h1>');

        //--------------------- ADD CLASS TO CUSTOMIZE CONTENT -------------------
        $('#mainscrolldiv').addClass("nef-mailcontent");

        // --------------------- delete contact username -------------------
        $('.caption dl').each(function(i, element) {
            $(element).parent().remove();
        });
    }
}