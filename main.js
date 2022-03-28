var student_array = [];

function submit() {
    var display_student_array = [];

    for (var c = 1; c <= 4; c++) {
        var name_of_the_student = document.getElementById("S" + c).value;
        console.log(name_of_the_student);
        student_array.push(name_of_the_student);
    }

    console.log(student_array);

    var length_of_student_array = student_array.length;
    console.log(length_of_student_array);

    for (var i = 0; 1 < length_of_student_array; i++) {
        display_student_array.push("<h4>Name-" + student_array[i] + " </h4>");
        console.log(display_student_array);
    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("sub").style.display = "none";
    document.getElementById("sor").style.display = "inline-block";
}

function sorting() {
    student_array.sort();
    console.log(student_array);

    var display_student_array_sorting = [];

    var length_of_student_array = student_array.length;
    console.log(length_of_student_array);

    for (var i = 0; 1 < length_of_student_array; i++) {
        display_student_array_sorting.push("<h4>Name-" + student_array[i] + " </h4>");
        console.log(display_student_array_sorting);
    }

    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}