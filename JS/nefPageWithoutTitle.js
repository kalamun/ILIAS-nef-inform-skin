import NefPageWMenu from "./nefPageMenu.js"

export default class NefPageWithoutTitle extends NefPageWMenu{

    constructor(baseClassIdentifier, cmdClassIdentifier, menuName){
        super(baseClassIdentifier, cmdClassIdentifier);
        this.menuName = menuName;
    }

    refactorHTML(){
        super.refactorHTML();

        // --------------------- DELETE  TITLE -------------------
        $('.il_HeaderInner').remove();
    }
}