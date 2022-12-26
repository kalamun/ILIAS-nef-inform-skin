import Dashboard from "./dashboard.js"

export default class DashboardMail extends Dashboard{

    constructor(baseClassIdentifier, cmdClassIdentifier, menuName){
        super(baseClassIdentifier, cmdClassIdentifier, menuName);
        super.addTitleIcon("h2", "Message", "./Customizing/global/skin/nef-inform/images/icon_mail.svg", "aperçus du mail")
    }

    refactorHTML(){
        // --------------------- REFACTOR MAIL MESSAGE -------------------
        let message = $('#il_center_col');
        message.addClass("nef-dashboardMail");
        let titleBox = message.find("#block_dashcontent_0_blhead");
        let titleText = titleBox.text();
        titleBox = titleBox.parent().parent();
        let newTitleBox = titleBox.parent();
        titleBox.remove();
        newTitleBox.prepend('<h2 class="ilHeader">' + titleText + '</h2>');

       // message.find('.ilFormRow').wrapAll( "<div class='nef-mailHeader' />");

        // --------------------- Call super after to set logo -------------------
        super.refactorHTML();
    }
}