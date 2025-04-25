$(function(){
    $("#birthday").datepicker();
});

let programmingLanguages = [
    "ActionScript", "AppleScript", "Asp", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "VBScript",
    "C", "C++", "C#", "Java", "Pascal", "Ada", "Fortran", "COBOL", "Haskell", "Scala",
    "Swift", "Go", "Rust", "Kotlin", "Dart", "Elixir", "Erlang", "F#", "Julia", "R",
    "MATLAB", "Scheme", "Prolog", "Smalltalk", "OCaml", "Visual Basic", "Assembly", "Scratch", "Logo",];

$(function(){
        $("#programming_languages").autocomplete({
            source: programmingLanguages,
        });
 });