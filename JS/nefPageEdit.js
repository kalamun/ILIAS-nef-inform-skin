export default class NefPageEdit{

    constructor(baseClassIdentifier, cmdClassIdentifier){
        this.baseClassIdentifier = baseClassIdentifier
        this.cmdClassIdentifier = cmdClassIdentifier
        this.titleIcons = new Map();
    }

    addTitleIcon(divName, title, icon, subtitle){
        let changement = new Array(icon, subtitle);
        let divMap = this.titleIcons.get(divName);
        if(divMap === undefined) divMap = new Map();
        divMap.set(title, changement);
        this.titleIcons.set(divName, divMap);
    }

    applyTitleIcons(value, key, map) {
        $(key).each(function(i, element) {
            let content = value.get(element.textContent)
            if(content != undefined){
                $(element).prepend('<span class="nef-titleicon ' + key + '-title"><img src="' + content[0] + '"/></span>');
                $(element).after('<div class="nef-subtitle ' + key + '-title">'+ content[1] + '</div>');
            }
        });
    }

    refactorHTML(){
        // --------------------- TITLE ICONS/SUBTITLES --------------------
        this.titleIcons.forEach(this.applyTitleIcons);
        
        // --------------------- MAINBAR BUTTONS --------------------
        // get all mainbar slates
        let slates = [];
        $('.nef-mainbar-slate').each(function(i, element) {
            slates.push(element.children);
        });

        // dispacth slates on buttons divs
        let tempoElem;
        $('.nef-mainbar-element').each(function(i, element) {
            tempoElem = $(element).children().first();
            if(tempoElem.is('button')){
                $(tempoElem).after(slates.shift());
            }
        });

        // --------------------- MAINBAR FOOTER --------------------
        //move footer content
        $('.il-maincontrols-mainbar .il-mainbar').append($('.il-footer-content'))
        // delete old footer
        $('footer').remove();
        
        // --------------------- REFACTOR METABAR -------------------
        let metabarEntries = $('.il-metabar-entries');
        let metabarSlates = $('.il-metabar-slates')
        let metabarMoreSlate = metabarSlates.find('.il-metabar-more-slate');

        // // refactore search
        metabarEntries.find('[aria-label="Rechercher"]').parent().remove();
        metabarMoreSlate.find('[aria-label="Rechercher"]').parent().remove();
        let search = metabarSlates.find('#mm_search_form');
        let searchDiv = search.parent().parent();
        $('.il-metabar-entries').prepend(search);
        searchDiv.remove();
        search.find('#main_menu_search').attr('placeholder', 'Rechercher par mots clés');
        
        // notif logo at the end of the list
        $('.il-metabar-more-button').before(metabarEntries.find('[aria-label="Notifications"]').parent());

        // // remove online contact
        metabarEntries.find('[aria-label="Show who is online"]').parent().remove();
        metabarMoreSlate.find('[aria-label="Show who is online"]').parent().remove();
        metabarSlates.find('#awareness-content').parent().parent().remove();
        
        // --------------------- ADD CONTENT IDENTIFIER -------------------
        let mainspacekeeper = $('#mainspacekeeper');
        mainspacekeeper.addClass(this.baseClassIdentifier);
        mainspacekeeper.addClass(this.cmdClassIdentifier);
    }
}