var names_of_people= [];


function submit()
{
    var x = document.getElementById("enter_name").value;
    names_of_people.push(x);
    document.getElementById("display_submited").innerHTML = names_of_people;
}

function show()
{ 
    var i = names_of_people.join("<br>");
    document.getElementById("display_showed").innerHTML = i;
    document.getElementById("sort_button").style.display = "inline-block";
}

function sort()
{
    names_of_people.sort();
    document.getElementById("display_sorted").innerHTML = names_of_people;
}