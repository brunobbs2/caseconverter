var alert, btnConvert, formInput, resultInput;

alert = document.querySelector('.error__alert');
btnConvert = document.querySelector('#convert-button')
formInput = document.querySelector('#form-input');
resultInput = document.querySelector('#result-input')

/* Limpar formulário */
document.querySelector('#reset-button').addEventListener('click', function() {
    resultInput.value = ""
    formInput.value = "";
    ToggleInput(formInput,'#787878')
    ToggleButton(btnConvert, 0.5, true)
    ToggleSpan(alert, 0)
});

/* Valida formulário */
formInput.addEventListener('input', function() {
    if(this.value.length > 0) {
        if(!/^[01]+$/.test(this.value)) {
            ToggleInput(this,'red')
            ToggleSpan(alert, 1)
            ToggleButton(btnConvert, 0.5, true)
         } else {
            ToggleInput(this,'#787878')
            ToggleSpan(alert, 0)
            ToggleButton(btnConvert, 1, false)
         }
    } else {
        ToggleInput(this,'#787878')
        ToggleSpan(alert, 0)
        ToggleButton(btnConvert, 0.5, true)
    }
});

function ToggleButton(button, value, bool) {
    button.style.opacity = value;
    button.disabled = bool;
}

function ToggleSpan(span, value) {
    span.style.opacity = value;
}

function ToggleInput(input, value) {
    input.style.borderBottomColor = value;
}

/* Converte */
btnConvert.addEventListener('click', function() {
    var x = parseInt(formInput.value, 2);
    resultInput.value = x.toString();
});

