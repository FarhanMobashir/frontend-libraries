// eventListeners




// jQuery functions

let count = 0;
let checked = 0;
let isSelected = false;

// ready function

$(document).ready(function () {

    // add to-do function

    $('.add-todo-form').submit(function (e) {
        e.preventDefault();
        let item = $("input").first().val();

        if (item === '') {


            $('#emptyModal').modal('show');
        } else {
            let newItem = `<tr class="clear-all bg-light">
                <th scope="row" class=" font-weight-bold"><i class="fa fa-circle"></i></th>
                <td class="task font-weight-bold">${item}</td>
                    <td>
                        <button class="delete-btn  btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal">Delete <i class="fa fa-trash"></i></button>
                    </td>
                    <td class="d-flex justify-content-center"><input type="checkbox" class="check-status form-check-input "></td>
                    <td>
                        <button class="edit-btn btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal">Edit <i class="fa fa-edit"></i></button>
                    </td>
                 </tr>`

            $(".alert").css("display", "none");
            $('.table').append(newItem);
            this.reset();
            count++;
            $(".total-todo").children().children().text(count);
            $(".todo").css("aria-valuenow", count);

        }
    });

    // progress-bar

    let p = $(".progressbar").prop("aria-valuemax", count);
    console.log(p);




    // delete function


    $("table").delegate(".delete-btn", "click", function (del) {
        let deleted = $(this);
        let checkTrack = deleted.parent().parent().children().eq(3).children();

        // let x = confirm("do you want to delete")
        $(".confirm-delete").click(function (e) {
            deleted.parent().parent().remove();
        })

        if (checkTrack.prop("checked") && checked > 0) {
            console.log(checked);
            checked--;
            $(".checked").children().children().text(checked);

        }


    })

    // confirm-cancel function

    $(".confirm-cancel").click(function (e) {
        console.log("confirm-cancel")
        checked++;
        $(".checked").children().children().text(checked);

    })


    $(".confirm-delete").click(function (e) {

        console.log(checked);
        count--;
        $(".total-todo").children().children().text(count);

    });


    // select all

    // $(".select").click(function (e) {

    //     if (!isSelected) {
    //         $("input[type=checkbox]").prop("checked", true);
    //         $(".checked").children().children().text(count);
    //         $(".clear-all").toggleClass("toggle");

    //         isSelected = true
    //     }
    //     else {
    //         $("input[type=checkbox]").prop("checked", false);
    //         $(".checked").children().children().text(0);
    //         $(".clear-all").toggleClass("toggle");


    //         isSelected = false
    //     }


    // })





    // edit-function

    $("table").delegate(".edit-btn", "click", function (e) {
        let todoRow = $(this).parent().parent();
        console.log(todoRow)
        let todoContent = $(this).parent().parent().children().eq(1).html();
        $('.edit').val(todoContent)
        $(".save").click(function (e) {
            let edited = $(".edit").val();
            if (edited === '') {
                $('#editModal').modal('show');
                $('#exampleModal').modal('hide');
            } else {
                let newItem = ` <tr class="clear-all">
                <th scope="row" class=" font-weight-bold"><i class="fa fa-circle"></i></th>
                <td class="task font-weight-bold">${edited}</td>
                    <td>
                        <button class="delete-btn btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal">Delete <i class="fa fa-trash"></i></button>
                    </td>
                    <td class="d-flex justify-content-center"><input type="checkbox" class=" form-check-input "></td>
                    <td>
                        <button class="edit-btn btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal">Edit <i class="fa fa-edit"></i></button>
                    </td>
                 </tr>`

                $(".checked").children().children().text(checked);
                todoRow.replaceWith(newItem)
                $('#exampleModal').modal('hide')
            }

        });
        if (checked === 0) {
            return;
        } else {
            checked--;
        }

    });

    // touch edit function

    $("table").delegate(".task", "click", function (e) {
        let todoRow = $(this).parent().parent();
        let todoContent = $(this).parent().parent().children().eq(1).html();
        HTMLFormControlsCollection.log(todoContent)
        $('.edit').val(todoContent)
        $(".save").click(function (e) {
            let edited = $(".edit").val();
            if (edited === '') {
                $('#emptyModal').modal('show');
                $('#exampleModal').modal('hide');
            } else {
                let newItem = ` <tr class="clear-all">
                    <th scope="row" class=" font-weight-bold"><i class="fa fa-circle"></i></th>
                    <td class="task font-weight-bold">${edited}</td>
                        <td>
                            <button class="delete-btn btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal">Delete <i class="fa fa-trash"></i></button>
                        </td>
                        <td class="d-flex justify-content-center"><input type="checkbox" class="form-check-input "></td>
                        <td>
                            <button class="edit-btn btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal">Edit <i class="fa fa-edit"></i></button>
                        </td>
                     </tr>`
                checked--;
                $(".checked").children().children().text(checked);
                todoRow.replaceWith(newItem)
                $('#exampleModal').modal('hide')
            }

        });

    });

    // save after edit function

    $(".save").click(function (e) {
        let edited = $(".edit").val();


    })


    // clear todo

    $(".clear").click(function (e) {
        $("clear-todo")
        $(".clear-all").remove();
        console.log("cleared")
        count = 0;
        checked = 0;
        $(".checked").children().children().text(checked);
        $(".total-todo").children().children().text(count);
    })

    // status
    $("table").delegate("input[type=checkbox]", "click", function (e) {
        $(this).parent().parent().toggleClass("toggle");

        // conditions
        if ($(this).prop("checked") === true) {
            checked++

        } else {
            checked--;

        }
        $(".checked").children().children().text(checked);
    })





});