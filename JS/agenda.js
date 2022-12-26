import NefPageWMenu from "./nefPageMenu.js"

export default class Agenda extends NefPageWMenu{

    constructor(baseClassIdentifier, cmdClassIdentifier, menuName){
        super(baseClassIdentifier, cmdClassIdentifier, menuName);
        super.addTitleIcon("h2", "Agenda", "./Customizing/global/skin/nef-inform/images/agenda-icon.svg", "aperçu de mon planning de formation");
    }

    refactorHTML(){
        super.refactorHTML();

        // --------------------- DELETE ICAL -------------------
        $('.ilIcalIcon').parent().parent().parent().remove();
    }
}