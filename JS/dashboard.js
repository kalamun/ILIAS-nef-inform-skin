import NefPageWithoutTitle from "./nefPageWithoutTitle.js"

export default class Dashboard extends NefPageWithoutTitle{

    constructor(baseClassIdentifier, cmdClassIdentifier, menuName){
        super(baseClassIdentifier, cmdClassIdentifier, menuName);
        super.addTitleIcon("h2", "Mes Cours et Groupes", "./Customizing/global/skin/nef-inform/images/icon_crs.svg", "les cours où je suis inscrit(e)")
        super.addTitleIcon("h2", "Messagerie", "./Customizing/global/skin/nef-inform/images/icon_mail.svg", "aperçus de mes mails")
        super.addTitleIcon("h2", "Favoris","./Customizing/global/skin/nef-inform/images/Favoris.svg", "mes éléments favoris et raccourcis")
        super.addTitleIcon("h2", "Agenda", "./Customizing/global/skin/nef-inform/images/agenda-icon.svg", "aperçu de mon planning de formation")
        super.addTitleIcon("h2", "Tâches","./Customizing/global/skin/nef-inform/images/clipboard-list-outline.svg", "aperçu de mes tâches")
    }

    refactorHTML(){
        super.refactorHTML();

        // --------------------- DELETE ICAL -------------------
        $('.ilIcalIcon').parent().parent().parent().remove();

        // --------------------- INVERT TASKS/CALENDAR -------------------
        $('#block_pdcal_0').after($('#block_pdtasks_0'))
    }
}