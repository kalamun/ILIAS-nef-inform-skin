import NefPageWithoutTitle from "./nefPageWithoutTitle.js"

export default class MailPage extends NefPageWithoutTitle{

    constructor(baseClassIdentifier, cmdClassIdentifier, menuName){
        super(baseClassIdentifier, cmdClassIdentifier, menuName);
    }

    refactorHTML(){
        //--------------------- ADD MAIL MENU -------------------
        // find menu
        let mailMenu = $('.il-maincontrols-slate [aria-label="Dossiers de Messagerie"]').parent();
        // refacto menu
        mailMenu.find('li a').each(function(i, element) {
            let tempoElement = $(element);
            tempoElement.addClass('il-link link-bulky');
            mailMenu.append(tempoElement);
        });
        mailMenu.find('ul').remove();
        // add mail menu to mainbar
        let menuName = this.menuName.toUpperCase();
        $(".nef-mainbar-element .bulky-label").each(function(i, element) {
            if(element.textContent.trim().toUpperCase() === menuName){
                $(element).parent().after("<div class='il-maincontrols-slate'>" + mailMenu.parent().html() + "</div>");
            }
        });
        $('.il-mainbar-tools-button').remove();

        //--------------------- CALL SUPER METHOD -------------------
        super.refactorHTML();

        // --------------------- NEW MAIL -------------------
        $('.mailunread').each(function() {
            $(this).parent().parent().addClass("nef-mailunread");
        });
        $('.mailread').each(function() {
            $(this).parent().parent().addClass("nef-mailread");
        });

        // --------------------- ATTACHMENT -------------------
        $('#filename').each(function() {
            $(this).parent().parent().addClass("attachment");
        });

        // --------------------- DELETE TAB CONTACT -------------------
        $("#tab_mail_addressbook").remove();

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

        //--------------------- ADD DROPDOWN LOGOS -------------------
        //declare function to create span
        let applyDropdownIcon = function(element, key, image) {
            let imagesPath = "./Customizing/global/skin/nef-inform/images/" + image;
            $(element).prepend('<img class="nef-mailIcon ' + key + '-dropdown" src="' + imagesPath+ '"/>');
        }
        // loop on elements
        $('#il_center_col .dropdown-menu a').each(function(i, element) {
            switch(element.textContent.trim()){
                case 'Voir le document' :
                    element.textContent="Voir le message";
                    applyDropdownIcon(element, "see", "Eye.svg");
                    break;
                case 'Répondre' : applyDropdownIcon(element, "answer", "Answer.svg"); break;
                case 'Transférer' : applyDropdownIcon(element, "transfer", "Link.svg"); break;
                case 'Imprimer' : applyDropdownIcon(element, "print", "Print.svg"); break;
            }
        });
    }
}