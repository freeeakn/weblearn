function validation(form) {
    let result = true;
    if (!form || form.nodeName !== "FORM") {
        result = false;
    } else {
        for (let count = form.elements.length - 1; count >= 0; count--) {
            if(!(form.elements[count].value.replace(/^\s+|\s+$/g, '') == form.elements[count].value)) result = 'Form invalid:(';
        }
    }
    return result;
}