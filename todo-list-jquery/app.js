// eventListeners




// jQuery functions

let count = 0;



$(document).ready(function () {




    $('.add-todo-form').submit(function (e) {
        console.log("valid");
        e.preventDefault()
        let item = $("input").first().val();

        let newItem = ` <tr>
                <th scope="row">${count += 1}</th>
                <td>${item}</td>
                    <td>
                        <button class=" delete-btn btn btn-danger btn-sm">Delete <i class="fa fa-trash"></i></button>
                    </td>
                 </tr>`


        $('.table').append(newItem);
        this.reset();
        $(".alert").hide();
    });




    $(".alert").hide();
    $("table").delegate("button", "click", function (e) {
        $(this).parent().parent().remove();
        console.log(count)
        count--;
        console.log(count);
        for (let i = 0; i < count; i++) {

        }



    })

    $(".clear").click(function (e) {
        $("tr").remove();
        console.log("cleared")
        count = 0;
    })
});