import NefPageEdit from "./nefPageEdit.js"

export default class CoursDetail extends NefPageEdit {
    constructor(baseClassIdentifier, cmdClassIdentifier){
        super(baseClassIdentifier, cmdClassIdentifier);
        super.addTitleIcon("h2", "Agenda", "./Customizing/global/skin/nef-inform/images/agenda-icon.svg", "aperçu de votre planning de formation")
    }

    refactorHTML(){
        super.refactorHTML();

        // --------------------- DELETE ICAL -------------------
        $('.ilIcalIcon').parent().parent().parent().remove();

        // --------------------- Unread forum -------------------
        $('.ilAlert').each(function() {
            $(this).parent().parent().addClass("forum-unread");
        });
    }
}