var span = document.getElementsByClassName('sort-by-wrapper')[0]
var sort = document.createElement('span');

let query = window.location.search
let params = new URLSearchParams(query);

sort.setAttribute("clk_trigger", '');
sort.setAttribute("st_page_id", document.getElementsByClassName('sort-by-wrapper')[0].firstChild.getAttribute("st_page_id"));
sort.setAttribute("ae_project_id", document.getElementsByClassName('sort-by-wrapper')[0].firstChild.getAttribute("ae_project_id"));
sort.setAttribute("ae_page_type", document.getElementsByClassName('sort-by-wrapper')[0].firstChild.getAttribute("ae_page_type"));
sort.setAttribute("ae_page_area", "hand_filter");
sort.setAttribute("ae_button_type", "sort by");
sort.setAttribute("ae_object_value", "date_added");

if (params.get('SortType') == 'create_desc') {
    sort.setAttribute("class", "sort-item active");
} else {
    sort.setAttribute("class", "sort-item");
}

var style1 = document.createElement('font');
style1.setAttribute("style", "vertical-align: inherit;");

var style2 = document.createElement('font');
style2.setAttribute("style", "vertical-align: inherit;");

var newText = document.createTextNode('New');

document.addEventListener("click", function(event){
    if(event.path[2].getAttribute("ae_object_value") == "date_added"){
        params.set('SortType', 'create_desc')
        return location.replace(`https://www.aliexpress.com/wholesale?${params.toString()}`);
    } else if(!event.path[2].getAttribute("ae_object_value")) {
        sort.setAttribute("class", "sort-item");
    }
})

style2.appendChild(newText);
style1.appendChild(style2);
sort.appendChild(style1);
span.insertBefore(sort, span.children[2]);