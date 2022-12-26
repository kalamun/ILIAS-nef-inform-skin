import NefPageWithoutTitle from "./nefPageWithoutTitle.js"

export default class Catalogue extends NefPageWithoutTitle {
    constructor(baseClassIdentifier, cmdClassIdentifier, menuName){
        super(baseClassIdentifier, cmdClassIdentifier, menuName);
    }

    refactorHTML(){
        super.refactorHTML();

        // --------------------- DELETE TAB CONTACT -------------------
        $('.ilObjListRow .dropdown-toggle').addClass('nef-dropdown');
        $('.ilObjListRow .btn-group').addClass('nef-btn-group');

        // --------------------- DELETE TAB CONTACT -------------------
        $('.ilContainerBlockHeader .ilContainerBlockHeader').each(function(i, element) {
            if(element.textContent.trim().toUpperCase() === "CATÉGORIES")
                $(element).parent().parent().addClass("nef-categoriesblock")
        });

        // --------------------- UNREAD FORUMS -------------------
        let forumBlock;
        $(".ilHeader").each(function(i, element) {
            if(element.textContent.trim().toUpperCase() === 'FORUMS')
                forumBlock = $(element).parent().parent();
        })
        forumBlock.find('.il_ItemProperties').each(function(i, element) {
            let content = $(element).find('.il_ItemProperty').get(0).textContent.trim();
            let nbrUnread = parseInt(content.match(/\(([0-9]+)\)/)[1]);
            if(nbrUnread !== 0)
                $(element).parent().parent().addClass("nef-unreadforum");
        });
    }
}