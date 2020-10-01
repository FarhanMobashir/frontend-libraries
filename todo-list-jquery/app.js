// eventListeners




// jQuery functions

let count = 0;
let checked = 0;

// ready function

$(document).ready(function () {

    // add to-do function

    $('.add-todo-form').submit(function (e) {
        console.log("valid");
        e.preventDefault()
        let item = $("input").first().val();

        if (item === '') {
            $(".add-todo-form").submit(function (e) {
                let alert = `<div class="not-alert alert alert-danger" role="alert">
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
              </div>`
                setTimeout(function () {
                    $(".alert").last().remove();
                }, 2000);
            })
        } else {
            let newItem = ` <tr class="clear-all">
                <th scope="row" class=" font-weight-bold"><i class="fa fa-circle"></i></th>
                <td class="task font-weight-bold">${item}</td>
                    <td>
                        <button class=" delete-btn btn btn-danger btn-sm">Delete <i class="fa fa-trash"></i></button>
                    </td>
                    <td class="d-flex justify-content-center"><input type="checkbox" class="form-check-input "></td>
                    <td>
                        <button class="edit-btn btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal">Edit <i class="fa fa-edit"></i></button>
                    </td>
                 </tr>`

            $(".alert").css("display", "none");
            $('.table').append(newItem);
            this.reset();
            count++
            $(".total-todo").children().children().text(count);
        }
    });


    // delete function


    $("table").delegate(".delete-btn", "click", function (e) {
        $(this).parent().parent().remove();
        console.log(count)

    })

    // edit-function

    $("table").delegate(".edit-btn", "click", function (e) {
        let todoRow = $(this).parent().parent();
        console.log(todoRow)
        let todoContent = $(this).parent().parent().children().eq(1).html();
        $('.edit').val(todoContent)
        $(".save").click(function (e) {
            let edited = $(".edit").val();
            let newItem = ` <tr class="clear-all">
                <th scope="row" class=" font-weight-bold"><i class="fa fa-circle"></i></th>
                <td class="task font-weight-bold">${edited}</td>
                    <td>
                        <button class=" delete-btn btn btn-danger btn-sm">Delete <i class="fa fa-trash"></i></button>
                    </td>
                    <td class="d-flex justify-content-center"><input type="checkbox" class="form-check-input "></td>
                    <td>
                        <button class="edit-btn btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal">Edit <i class="fa fa-edit"></i></button>
                    </td>
                 </tr>`
            todoRow.replaceWith(newItem)
            $('#exampleModal').modal('hide')

        });
    });

    // save after edit function

    $(".save").click(function (e) {
        let edited = $(".edit").val();


    })


    // clear todo

    $(".clear").click(function (e) {
        $(".clear-all").remove();
        console.log("cleared")
        count = 0;
    })

    // status
    $("table").delegate("input[type=checkbox]", "click", function (e) {
        $(this).parent().parent().toggleClass("toggle");
        checked++;
        $(".checked").children().children().text(checked);

    })










});