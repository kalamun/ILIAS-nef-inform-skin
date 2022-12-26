import NefPage from "./nefPage.js"

export default class NefPageWMenu extends NefPage{

    constructor(baseClassIdentifier, cmdClassIdentifier, menuName){
        super(baseClassIdentifier, cmdClassIdentifier);
        this.menuName = menuName;
    }

    refactorHTML(){
        super.refactorHTML();

        // --------------------- SELECT BUTTON -------------------
        let selectedElement = this.menuName.toUpperCase();
        $(".nef-mainbar-element .bulky-label").each(function(i, element) {
            if(element.textContent.trim().toUpperCase() === selectedElement)
                $(this).parent().addClass("nef-SelectedMenuItem");
        });
    }
}