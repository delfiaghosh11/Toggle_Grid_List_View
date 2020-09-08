// Toggle List & Grid View
$(document).ready(function() {
    $("#list").click(function() {
        $("#grid-view").hide();
        $("#list-view").show();
        $("#list").hide();
        $("#grid").show();
    });
    $("#grid").click(function() {
        $("#list-view").hide();
        $("#grid-view").show();
        $("#grid").hide();
        $("#list").show();
    });
});

let myObj;

// View On Load
function onLoadView() {
    fetch("https://jsonblob.com/api/21579036-f0fd-11ea-a166-f32d3d96e872")
        .then(data => data.json())
        .then(response => {
            myObj = response;

            $("#grid").hide();
            $("#list").show();

            let container = document.getElementById("grid-view");
            container.innerHTML = "";

            for (var i = 0; i < myObj.length; i++) {
                container.innerHTML +=
                    `<div class="col col-lg-4" style="padding: 20px;">
                <div class="card">
                    <div style="text-align: right; padding: 10px;">
                        <button class="icon-button-delete" onclick="deleteObjectFromGrid(` + i + `)">
                            <i class="fas fa-times-circle" style="font-size: 22px; color: red;"></i>
                        </button>
                    </div>
                    <div style="text-align: center;">
                        <img src="` + (myObj[i].gender == "male" ? 'https://www.shareicon.net/data/2016/05/24/770137_man_512x512.png' : 'https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png') + `" alt="Avatar" style="width: 150px; height: 150px; padding: 10px;">
                    </div>
                    <div class="card-container">
                        <p>Name:&nbsp;` + myObj[i].name + `</p>
                        <p>ID:&nbsp;` + myObj[i].id + `</p>
                        <p>Skills:&nbsp;<span id="skills` + i + `">` + myObj[i].skills.map(function(j) { return j; }).join(", ") + `</span></p>
                        <p>Project:&nbsp;` + myObj[i].project + `</p>
                        <p>HCM:&nbsp;` + myObj[i].hcm + `</p>
                    </div>
                    <div style="text-align: right; padding: 20px;">
                        <button class="edit" id="edit-button` + i + `" onclick="editGrid(` + i + `)">Edit</button>
                        <button class="save" id="save-button` + i + `" onclick="saveGrid(` + i + `)">Save</button>
                    </div>
                </div>
            </div> `;

                $("#save-button" + i).hide();
                $("#edit-button" + i).show();
            }

        });
}

// Show Grid View
function gridView() {

    let container = document.getElementById("grid-view");
    container.innerHTML = "";

    for (var i = 0; i < myObj.length; i++) {
        container.innerHTML +=
            `<div class="col col-lg-4" style="padding: 20px;">
                        <div class="card">
                            <div style="text-align: right; padding: 10px;">
                                <button class="icon-button-delete" onclick="deleteObjectFromGrid(` + i + `)">
                                    <i class="fas fa-times-circle" style="font-size: 22px; color: red;"></i>
                                </button>
                            </div>
                            <div style="text-align: center;">
                                <img src="` + (myObj[i].gender == "male" ? 'https://www.shareicon.net/data/2016/05/24/770137_man_512x512.png' : 'https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png') + `" alt="Avatar" style="width: 150px; height: 150px; padding: 10px;">
                            </div>
                            <div class="card-container">
                                <p>Name:&nbsp;` + myObj[i].name + `</p>
                                <p>ID:&nbsp;` + myObj[i].id + `</p>
                                <p>Skills:&nbsp;<span id="skills` + i + `">` + myObj[i].skills.map(function(j) { return j; }).join(", ") + `</span></p>
                                <p>Project:&nbsp;` + myObj[i].project + `</p>
                                <p>HCM:&nbsp;` + myObj[i].hcm + `</p>
                            </div>
                            <div style="text-align: right; padding: 20px;">
                                <button class="edit" id="edit-button` + i + `" onclick="editGrid(` + i + `)">Edit</button>
                                <button class="save" id="save-button` + i + `" onclick="saveGrid(` + i + `)">Save</button>
                            </div>
                        </div>
                    </div> `;

        $("#save-button" + i).hide();
        $("#edit-button" + i).show();
    }

}

// Delete Object from Grid
function deleteObjectFromGrid(index) {

    let container = document.getElementById("grid-view");
    container.innerHTML = "";

    for (var i = 0; i < myObj.length; i++) {
        if (i === index) {
            myObj.splice(i, 1);
        }
        container.innerHTML +=
            `<div class="col col-lg-4" style="padding: 20px;">
                        <div class="card">
                        <div style="text-align: right; padding: 10px;">
                            <button class="icon-button-delete" onclick="deleteObjectFromGrid(` + i + `)">
                                <i class="fas fa-times-circle" style="font-size: 22px; color: red;"></i>
                            </button>
                        </div>
                        <div style="text-align: center;">
                            <img src="` + (myObj[i].gender == "male" ? 'https://www.shareicon.net/data/2016/05/24/770137_man_512x512.png' : 'https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png') + `" alt="Avatar" style="width: 150px; height: 150px; padding: 10px;">
                        </div>
                        <div class="card-container">
                            <p>Name:&nbsp;` + myObj[i].name + `</p>
                            <p>ID:&nbsp;` + myObj[i].id + `</p>
                            <p>Skills:&nbsp;<span id="skills` + i + `">` + myObj[i].skills.map(function(j) { return j; }).join(", ") + `</span></p>
                            <p>Project:&nbsp;` + myObj[i].project + `</p>
                            <p>HCM:&nbsp;` + myObj[i].hcm + `</p>
                        </div>
                        <div style="text-align: right; padding: 20px;">
                            <button class="edit" id="edit-button` + i + `" onclick="editGrid(` + i + `)">Edit</button>
                            <button class="save" id="save-button` + i + `" onclick="saveGrid(` + i + `)">Save</button>
                        </div>
                    </div>
                </div> `;

        $("#save-button" + i).hide();
        $("#edit-button" + i).show();
    }

}

// Show List View
function listView() {

    let container = document.getElementById("list-view");
    container.innerHTML = "";

    container.innerHTML +=
        `<tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Skills</th>
                    <th>Project</th>
                    <th>HCM</th>
                    <th>&nbsp;</th>
                </tr>`;

    for (var i = 0; i < myObj.length; i++) {
        container.innerHTML +=
            `<tr>
                        <td>` + myObj[i].name + `</td>
                        <td>` + myObj[i].id + `</td>
                        <td><span id="skills" data-editable>` + myObj[i].skills.map(function(j) { return j; }).join(", ") + `</span></td>
                        <td>` + myObj[i].project + `</td>
                        <td>` + myObj[i].hcm + `</td>
                        <td>
                            <button class="icon-button-edit" id="edit` + i + `" onclick="editList(` + i + `)">
                                <i class="far fa-edit" style="font-size: 22px; color: #000;"></i>
                            </button>
                            <button class="icon-button-save" id="save` + i + `" onclick="getValue(` + i + `)">
                                <i class="fas fa-save" style="font-size: 22px; color: #000;"></i>
                            </button>
                            <button class="icon-button-delete" onclick="deleteObjectFromList(` + i + `)">
                                <i class="fas fa-times-circle" style="font-size: 22px; color: red;"></i>
                            </button>
                        </td>
                    </tr>`;

        $("#save" + i).hide();
        $("#edit" + i).show();
    }

}

//Deletefrom List
function deleteObjectFromList(l_index) {

    let container = document.getElementById("list-view");
    container.innerHTML = "";

    container.innerHTML +=
        `<tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Skills</th>
                    <th>Project</th>
                    <th>HCM</th>
                    <th>&nbsp;</th>
                </tr>`;

    for (var i = 0; i < myObj.length; i++) {
        if (i === l_index) {
            myObj.splice(i, 1);
        }
        container.innerHTML +=
            `<tr>
                        <td>` + myObj[i].name + `</td>
                        <td>` + myObj[i].id + `</td>
                        <td><span id="skills" data-editable>` + myObj[i].skills.map(function(j) { return j; }).join(", ") + `</span></td>
                        <td>` + myObj[i].project + `</td>
                        <td>` + myObj[i].hcm + `</td>
                        <td>
                            <button class="icon-button-edit" id="edit` + i + `" onclick="editList(` + i + `)">
                                <i class="far fa-edit" style="font-size: 22px; color: #000;"></i>
                            </button>
                            <button class="icon-button-save" id="save` + i + `" onclick="getValue(` + i + `)">
                                <i class="fas fa-save" style="font-size: 22px; color: #000;"></i>
                            </button>
                            <button class="icon-button-delete" onclick="deleteObjectFromList(` + i + `)">
                                <i class="fas fa-times-circle" style="font-size: 22px; color: red;"></i>
                            </button>
                        </td>
                    </tr>`;

        $("#save" + i).hide();
        $("#edit" + i).show();
    }

}

// Edit on click for List
function editList(index) {
    $("#edit" + index).hide();
    $("#save" + index).show();
    document.getElementById("list-view").rows[index + 1].cells.item(2).innerHTML = '<input id="myInput' + index + '" type="text" />';
}

// Save on click for List
function getValue(index) {
    $("#edit" + index).show();
    $("#save" + index).hide();
    var inputVal = document.getElementById("myInput" + index).value;
    document.getElementById("list-view").rows[index + 1].cells.item(2).innerHTML = inputVal;
}

// Edit on click for Grid
function editGrid(index) {
    $("#edit-button" + index).hide();
    $("#save-button" + index).show();
    document.getElementById("skills" + index).innerHTML = '<input id="myVal' + index + '" type="text" />';
}

// Save on click for Grid
function saveGrid(index) {
    $("#edit-button" + index).show();
    $("#save-button" + index).hide();
    var inputVal = document.getElementById("myVal" + index).value;
    document.getElementById("skills" + index).innerHTML = inputVal;
}

//Edit & Save on click
// $('body').on('click', '[data-editable]', function() {

//     var $el = $(this);

//     var $input = $('<input/>').val($el.text());
//     $el.replaceWith($input);

//     var save = function() {
//         var $p = $('<span id="skills" data-editable />').text($input.val());
//         $input.replaceWith($p);
//     };

//     /**
//       We're defining the callback with `one`, because we know that
//       the element will be gone just after that, and we don't want 
//       any callbacks leftovers take memory. 
//       Next time `p` turns into `input` this single callback 
//       will be applied again.
//     */
//     $input.one('blur', save).focus();

// });