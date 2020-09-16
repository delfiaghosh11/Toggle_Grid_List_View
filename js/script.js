var Employees = (function() {
    var _employees = [];

    // Display Grid View
    const gridView = () => {
        console.log(_employees);

        $("#list-view").hide();
        $("#grid-view").show();
        $("#grid").hide();
        $("#list").show();

        document.querySelector('#controls').innerHTML = `
            <button class="icon-button-list" onclick="Employees.listView()" id="list">
                <i class="fas fa-list-ul" style="color: white; font-size: 36px; padding: 10px;"></i>
            </button>
        `;

        document.querySelector('#grid-view').innerHTML = _employees.map(({ gender, name, id, skills, project, hcm }, index) => `
            <div class="col col-lg-4" style="padding: 20px;">
                <div class="card">
                    <div style="text-align: right; padding: 10px;">
                        <button class="icon-button-delete" onclick="Employees.deleteFromGrid(${index})">
                            <i class="fas fa-times-circle" style="font-size: 22px; color: red;"></i>
                        </button>
                    </div>
                    <div style="text-align: center;">
                        <img src="` + (gender == "male" ? 'https://www.shareicon.net/data/2016/05/24/770137_man_512x512.png' : 'https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png') + `" alt="Avatar" style="width: 150px; height: 150px; padding: 10px;">
                    </div>
                    <div class="card-container">
                        <p>Name:&nbsp;${name}</p>
                        <p>ID:&nbsp;${id}</p>
                        <p>Skills:&nbsp;<span id="skills${index}">${skills}</span></p>
                        <p>Project:&nbsp;${project}</p>
                        <p>HCM:&nbsp;${hcm}</p>
                    </div>
                    <div style="text-align: right; padding: 20px;">
                        <button class="edit" id="edit-button${index}" onclick="Employees.editGrid(${index})" style="display: inline-block;">Edit</button>
                        <button class="save" id="save-button${index}" onclick="Employees.saveGrid(${index},${id})" style="display: none;">Save</button>
                    </div>
                </div>
            </div>
        `).join("");
    };

    // Display List View
    const listView = () => {
        console.log(_employees);

        $("#grid-view").hide();
        $("#list-view").show();
        $("#list").hide();
        $("#grid").show();

        document.querySelector('#controls').innerHTML = `
            <button class="icon-button-grid" onclick="Employees.gridView()" id="grid">
                <i class="fas fa-th-large" style="color: white; font-size: 36px; padding: 10px;"></i>
            </button>
        `;

        document.querySelector('#list-view').innerHTML = `
            <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Skills</th>
                <th>Project</th>
                <th>HCM</th>
                <th>&nbsp;</th>
            </tr>
        `;

        document.querySelector('#list-view').innerHTML += _employees.map(({ name, id, skills, project, hcm }, index) => `
            <tr>
                <td>${name}</td>
                <td>${id}</td>
                <td><span id="skills" data-editable>${skills}</span></td>
                <td>${project}</td>
                <td>${hcm}</td>
                <td>
                    <button class="icon-button-edit" id="edit${index}" style="display: inline-block;" onclick="Employees.editList(${index})">
                        <i class="far fa-edit" style="font-size: 22px; color: #000;"></i>
                    </button>
                    <button class="icon-button-save" id="save${index}" style="display: none;" onclick="Employees.saveList(${index},${id})">
                        <i class="fas fa-save" style="font-size: 22px; color: #000;"></i>
                    </button>
                    <button class="icon-button-delete" onclick="Employees.deleteFromList(${index})">
                        <i class="fas fa-times-circle" style="font-size: 22px; color: red;"></i>
                    </button>
                </td>
            </tr>
        `).join("");
    };

    // Delete Object from Grid
    const deleteFromGrid = (index) => {
        _employees.splice(index, 1);
        gridView();
    };

    // Delete Object from List
    const deleteFromList = (index) => {
        _employees.splice(index, 1);
        listView();
    };

    // Edit Skills of an Object in Grid
    const editGrid = (index) => {
        $("#edit-button" + index).hide();
        $("#save-button" + index).show();
        document.getElementById("skills" + index).innerHTML = '<input id="myVal' + index + '" type="text"/>';
        document.getElementById("myVal" + index).focus();
    };

    // Update Skills of an Object in Grid
    const saveGrid = (index, id) => {
        $("#edit-button" + index).show();
        $("#save-button" + index).hide();
        var inputVal = document.getElementById("myVal" + index).value;
        document.getElementById("skills" + index).innerHTML = inputVal;
        _employees.map(item => (item.id === id) ? item.skills = inputVal : item);
        gridView();
    };

    // Edit Skills of an Object in List
    const editList = (index) => {
        $("#edit" + index).hide();
        $("#save" + index).show();
        document.getElementById("list-view").rows[index + 1].cells.item(2).innerHTML = '<input id="myInput' + index + '" type="text"/>';
        document.getElementById("myInput" + index).focus();
    };

    // Update Skills of an Object in List
    const saveList = (index, id) => {
        $("#edit" + index).show();
        $("#save" + index).hide();
        var inputVal = document.getElementById("myInput" + index).value;
        document.getElementById("list-view").rows[index + 1].cells.item(2).innerHTML = inputVal;
        _employees.map(item => (item.id === id) ? item.skills = inputVal : item);
        listView();
    };

    // Fetch JSON Data
    const fetchEmployees = function() {
        fetch('https://jsonblob.com/api/21579036-f0fd-11ea-a166-f32d3d96e872')
            .then(response => response.json())
            .then(json => {
                _employees = json;
                gridView();
            });
    };

    // Initialize the UI
    const init = () => { fetchEmployees() };

    // Making functions public
    return {
        init,
        gridView,
        listView,
        deleteFromGrid,
        deleteFromList,
        editGrid,
        saveGrid,
        editList,
        saveList
    }
})();

Employees.init();