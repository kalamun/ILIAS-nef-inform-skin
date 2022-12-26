import Dashboard from "./dashboard.js"
import MailPage from "./mailPage.js";
import NefPage from "./nefPage.js";
import Catalogue from "./catalogue.js";
import CoursDetail from "./coursDetails.js";
import forumPage from "./forumPage.js";
import NefPageWithoutTitle from "./nefPageWithoutTitle.js"
import Annuaire from "./annuaire.js"
import BadgePage from "./badgePage.js"
import DashboardMail from "./dashboardMail.js";
import NefPageWMenu from "./nefPageMenu.js";
import Agenda from "./agenda.js";

const MENU_NAME_DASHBOARD = "Tableau de bord";
const MENU_NAME_COURSGROUPES = "Mes cours et groupes";
const MENU_NAME_CATALOGUE = "Catalogue formation";
const MENU_NAME_MESSAGERIE = "Messagerie";
const MENU_NAME_ESPACE_PERSO = "Espace personnel";
const MENU_NAME_ANNUAIRE = "Annuaire";
const MENU_NAME_BADGES = "Badges";

jQuery(function() {
    // set default current page
    let currentPage;

    // get page params
    let baseClass,cmdClass,cmd;
    window.location.search.split('&').forEach(element => {
        if(element.includes('baseClass=')) baseClass = element.split('=')[1].toLowerCase();
        if(element.includes('cmdClass=')) cmdClass = element.split('=')[1].toLowerCase();
        if(element.includes('cmd=')) cmd = element.split('=')[1].toLowerCase();
    });

    // find current page
    switch(baseClass){
        case "ildashboardgui" :
            if(cmdClass === "ildashboardgui" || cmdClass === "ilcolumngui" || cmdClass === undefined)
                currentPage = new Dashboard(baseClass, cmdClass, MENU_NAME_DASHBOARD);
            else if(cmdClass === "ilusersgallerygui" || cmdClass === "ilcontactgui" || cmdClass === "ilmailsearchcoursesgui" || cmdClass === "ilmailsearchgroupsgui")
                currentPage =  new Annuaire(baseClass, cmdClass, MENU_NAME_ANNUAIRE);
            else if(cmdClass === "ilbadgeprofilegui")
                currentPage =  new BadgePage(baseClass, cmdClass, MENU_NAME_BADGES);
            else if(cmdClass === "ilpdmailblockgui")
                currentPage = new DashboardMail(baseClass, cmdClass, MENU_NAME_DASHBOARD);
            else if(cmdClass === "ilcalendarpresentationgui" || cmdClass === "ilcalendarcategorygui" || cmdClass === "ilcalendarusersettingsgui")
                currentPage = new Agenda(baseClass, cmdClass, MENU_NAME_ESPACE_PERSO);
            else if (cmdClass === "ilpersonalworkspacegui" || cmdClass === "ilobjworkspacerootfoldergui" || cmdClass === "ilobjectownershipmanagementgui"){
                // onglet Shared Resosurces
                currentPage = new NefPageWMenu(baseClass, cmdClass, MENU_NAME_ESPACE_PERSO);
            }
            else
                currentPage = new NefPage(baseClass, cmdClass);
            break;
        case "ilderivedtasksgui":
            // onglet Tasks
            currentPage = new NefPageWithoutTitle(baseClass, cmdClass, MENU_NAME_ESPACE_PERSO);
            break;
        case "ilmailgui" :
            currentPage = new MailPage(baseClass, cmdClass, MENU_NAME_MESSAGERIE);
            break;
        case "ilrepositorygui":
            if(cmd === "showthreads" || cmd === "viewthread")
                currentPage = new forumPage(baseClass, cmdClass);
            else
                currentPage = new CoursDetail(baseClass, cmdClass);
            break;
        case "ilmembershipoverviewgui":
            if(cmdClass === "ilmembershipoverviewgui")
                currentPage = new NefPageWithoutTitle(baseClass, cmdClass, MENU_NAME_COURSGROUPES);
            else
                currentPage = new NefPage(baseClass, cmdClass);
            break;
        case undefined :
            currentPage = new Catalogue("catalogue", cmdClass, MENU_NAME_CATALOGUE);
            break;
        default:
            currentPage = new NefPage(baseClass, cmdClass);
            break;
    }

    // create current Page
    currentPage.refactorHTML();
});