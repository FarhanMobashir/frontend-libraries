// eventListeners




// jQuery functions

let count = 0;



$(document).ready(function () {


    $('.add-todo-form').submit(function (e) {
        console.log("valid");
        e.preventDefault()
        let item = $("input").first().val();


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


        $('.table').append(newItem);
        this.reset();




    });




    $(".alert").hide();
    $("table").delegate(".delete-btn", "click", function (e) {
        $(this).parent().parent().remove();
        console.log(count)

    })

    // edit

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

    })






});