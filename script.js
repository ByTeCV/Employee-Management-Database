document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.querySelector('.addbutton');
    const intable = document.querySelector('.inputtable');
    const outtable = document.querySelector('.outputtable');
    const submitButton = document.querySelector('.Submitbutton');
    
    const namein = document.getElementById('nameinput');
    const dobin = document.getElementById('Dobinput');
    const departmentin = document.getElementById('Departmentinput');
    const skillin = document.getElementById('skillinput');

    addButton.addEventListener('click', function(){
        submitButton.classList.remove('hidden');
        intable.classList.remove('hidden');
    });

    submitButton.addEventListener('click',function(){
        const name = namein.value.trim();
        const dob = dobin.value;
        const department = departmentin.value.trim();
        const skill = skillin.value.trim();
        if(!name||!dob||!department||!skill){
            alert('Enter Your Details!');
            return;
        }
    const newrow = document.createElement('tr');
    newrow.innerHTML = `<td>${name}</td>
                        <td>${dob}</td>
                        <td>${department}</td>
                        <td>${skill}</td>
                        <td><button class="updatebutton">Update</button>
                        <button class="deletebutton">Delete</button></td>`
    outtable.appendChild(newrow);

    namein.value = '';
    dobin.value = '';
    departmentin.value = '';
    skillin.value = '';

    submitButton.classList.add('hidden');
    intable.classList.add('hidden');
        
    const upbutton = newrow.querySelector('.updatebutton');
    const delbutton = newrow.querySelector('.deletebutton');

    delbutton.addEventListener('click',function(){
        outtable.removeChild(newrow);
    });

    upbutton.addEventListener('click',function(){
        namein.value = newrow.children[0].textContent;
        dobin.value = newrow.children[1].textContent;
        departmentin.value = newrow.children[2].textContent;
        skillin.value = newrow.children[3].textContent;

        outtable.removeChild(newrow);

        submitButton.classList.remove('hidden');
        intable.classList.remove('hidden');
    });

    });
});
