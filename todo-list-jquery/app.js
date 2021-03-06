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
                        <button class="delete-btn  btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal"><i class="fa fa-trash"></i></button>
                    </td>
                    <td class="d-flex justify-content-center"><input type="checkbox" class="check-status form-check-input "></td>
                    <td>
                        <button class="edit-btn btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-edit"></i></button>
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







    // delete function


    $("table").delegate(".delete-btn", "click", function (del) {
        let deleted = $(this);
        let checkTrack = deleted.parent().parent().children().eq(3).children();

        // let x = confirm("do you want to delete")
        $(".confirm-delete").click(function (e) {
            deleted.parent().parent().remove();
        })

        if (checkTrack.prop("checked") && checked > 1) {
            console.log(checked);
            checked--;
            $(".checked").children().children().text(checked);

            // progress area


            let progress = (checked / count * 100) + "%";
            $(".progress-bar").prop("aria-valuemax", "100");
            $(".progress-bar").attr('aria-valuenow', progress).css('width', progress);;

        } else if (checkTrack.prop("checked") && checked == 1) {
            checked--;
            $(".checked").children().children().text(checked);
            let progress = (checked / count * 100) + "%";
            $(".progress-bar").prop("aria-valuemax", "100");
            $(".progress-bar").attr('aria-valuenow', progress).css('width', progress);;
        }


    })

    // confirm-cancel function

    $(".confirm-cancel").click(function (e) {
        if (checked == 0) {
            rerurn
        } else {
            checked++;
            $(".checked").children().children().text(checked);

            // progress area


            let progress = (checked / count * 100) + "%";
            $(".progress-bar").prop("aria-valuemax", "100");
            $(".progress-bar").attr('aria-valuenow', progress).css('width', progress);;
        }


    })


    $(".confirm-delete").click(function (e) {

        count--;
        $(".total-todo").children().children().text(count);
        let progress = (checked / count * 100) + "%";
        $(".progress-bar").prop("aria-valuemax", "100");
        $(".progress-bar").attr('aria-valuenow', progress).css('width', progress);;

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
        let inputStatus = $(this).parent().parent().children().eq(3);
        console.log(inputStatus)
        $('.edit').val(todoContent)
        $(".save").click(function (e) {
            let edited = $(".edit").val();
            if (edited === '') {
                $('#editModal').modal('show');
                $('#exampleModal').modal('hide');
                return;

            }
            else {


                let newItem = ` <tr class="clear-all">
                <th scope="row" class=" font-weight-bold"><i class="fa fa-circle"></i></th>
                <td class="task font-weight-bold">${edited}</td>
                    <td>
                        <button class="delete-btn btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal"><i class="fa fa-trash"></i></button>
                    </td>
                    <td class="d-flex justify-content-center"><input type="checkbox" class=" form-check-input" ></td>
                    <td>
                        <button class="edit-btn btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-edit"></i></button>
                    </td>
                 </tr>`

                todoRow.replaceWith(newItem)
                $('#exampleModal').modal('hide')






            }



        });


    });


    $(".save").click(function (e) {
        if (checked === 0 && $("input[type=checkbox]").checked) {
            return;
        } else {
            checked--;

            $(".total-todo").children().children().text(count);
            $(".checked").children().children().text(checked);
            let progress = (checked / count * 100) + "%";
            $(".progress-bar").prop("aria-valuemax", "100");
            $(".progress-bar").attr('aria-valuenow', progress).css('width', progress);
        }

    })

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

    // $(".save").click(function (e) {
    //     let edited = $(".edit").val();


    // })


    // clear todo




    // empty-clear-todo

    $(".emptyclear").click(function (e) {
        if (count === 0) {
            $('#emptyClearModal').modal('show');
            $('#clearModal').modal('hide');

        } else {
            $('#clearModal').modal('show');
            $(".clear").click(function (e) {
                $(".clear-all").remove();
                console.log("cleared")
                count = 0;
                checked = 0;
                progress = 0;

                // progress area


                $(".progress-bar").prop("aria-valuemax", "100");
                $(".progress-bar").attr('aria-valuenow', progress).css('width', progress);;

                $(".checked").children().children().text(checked);
                $(".total-todo").children().children().text(count);

            })


        }

    })

    // status
    $("table").delegate("input[type=checkbox]", "click", function (e) {
        $(this).parent().parent().toggleClass("toggle");

        // conditions
        if ($(this).prop("checked") === true) {
            checked++


        } else if (checked > 0) {
            checked--;


        }
        let progress = (checked / count * 100) + "%";
        $(".progress-bar").prop("aria-valuemax", "100");
        $(".progress-bar").attr('aria-valuenow', progress).css('width', progress);;
        $(".checked").children().children().text(checked);

    })





});