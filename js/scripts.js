// $('.read-more').click(function(e) {
//     console.log('test')
//     e.stopPropagation();
//     var box = e.target.parentNode;
//     box.style.maxHeight = `${box.scrollHeight}px`;
//     box.setAttribute('expanded','true');
//     e.target.style.display = 'none';
// });
// $(document).click(function() {
//     var elems = $('[expanded="true"]');
//     var buttons = $('.read-more');
//     elems.attr('expanded','false');
//     elems.css('maxHeight','60px');
//     buttons.filter(`[lang=${sessionStorage.getItem("currentLang")}]`).css('display','inline');
// });
window.addEventListener('resize', function() {
        if (window.innerWidth > 700 && $('#navigation').css('display') === 'none') {
            $('#navigation').css('display','flex');
        }
    });

$('.content').click(function() {
    if ($('#navbar-button').attr('menu-expanded') === 'true') {
        $('#navbar-button').click()
    }
})
$('a').click(function() {
    if ($('#navbar-button').attr('menu-expanded') === 'true') {
        $('#navbar-button').click()
    }
})

$('#navbar-button').click(function() {
    var isExpanded = $('#navbar-button').attr('menu-expanded') === 'true';
    $('#navbar-button').attr('menu-expanded', !isExpanded);
    if (isExpanded) {
        $('#navigation').css('display','none');
    } else {
        $('#navigation').css('display','flex');
    }
    
});

if (!sessionStorage.getItem("currentLang")) {
    sessionStorage.setItem("currentLang","en");
}

// Populate theses/projects etc. lists
if (typeof data !== 'undefined') {
    for (let i = 0; i < data.length; i++) {
        const entry = data[i];
        create_Entry(entry.category, entry.title, 
                     entry.description, entry.source, entry.date);
    }
}

if ((sessionStorage.getItem("currentLang") == "de") && ($('[lang="de"]').css("display") == "none")) {
    $('[lang="en"]').toggle();
    $('[lang="de"]').toggle();
}
if ((sessionStorage.getItem("currentLang") == "en") && ($('[lang="en"]').css("display") == "none")) {
    $('[lang="en"]').toggle();
    $('[lang="de"]').toggle();
}

// Called when the language button is clicked
function changeLang () {
    if (sessionStorage.getItem("currentLang") == "en"){
        sessionStorage.setItem("currentLang","de");
        $('#lang-button').prop('title','Change to English');
    } else {
        sessionStorage.setItem("currentLang","en");
        $('#lang-button').prop('title','Zur deutschen Version wechseln');
    }

    $('[lang="en"]').toggle();
    $('[lang="de"]').toggle();
}

// Function that formats entries of theses/projects etc.
function create_Entry (category, title, description, source, date) {
    var entry = document.createElement('div');
    entry.classList.add("entry");

    var sources = '';

    for (let i = 0; i < source.length; i++) {
        const elem = source[i];
        sources += `<a class="link_field" 
                        href="${elem["link"]}" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        lang="en">${elem.tag.en}</a>
                    <a class="link_field" 
                        href="${elem["link"]}" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        lang="de"
                        style="display: none;">${elem.tag.de}</a>
        `;
    }

    entry.innerHTML = `<p class="entry_title" lang="en">${title.en}</p>
                        <p class="entry_title" lang="de" style="display: none;">${title.de}</p>
                        <p lang="en">${description.en}</p>
                        <p lang="de" style="display: none;">${description.de}</p>
                        <div style="display: flex; justify-content: space-between;">
                            <p class="detail_text" lang="en">${date.en}</p>
                            <p class="detail_text" lang="de" style="display: none;">${date.de}</p>
                        <div>${sources}</div>
                        </div>`
    
    document.getElementById(category).appendChild(entry);
}