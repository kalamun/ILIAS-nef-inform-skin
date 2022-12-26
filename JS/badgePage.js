import NefPageWMenu from "./nefPageMenu.js"

export default class BadgePage extends NefPageWMenu{

    constructor(baseClassIdentifier, cmdClassIdentifier, menuName){
        super(baseClassIdentifier, cmdClassIdentifier);
        this.menuName = menuName;
    }

    refactorHTML(){
        super.refactorHTML();

        // --------------------- DELETE  Object Name ---------------------
        $('.caption dl').each(function(i, element) {
            $(element).parent().remove();
        });
    }

}