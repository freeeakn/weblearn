function serialize (form) {
    let result;
    if (!form || form.nodeName !== "FORM") {
        result = false;
    } else {
        let q = [];
        for (let count = form.elements.length - 1; count >= 0; count--) {
            if (form.elements[count].name === "") {
                continue;
            }
            switch (form.elements[count].nodeName) {
                case 'INPUT':
                    switch (form.elements[count].type) {
                        case 'text':
                        case 'tel':
                        case 'email':
                        case 'hidden':
                        case 'password':
                        case 'button':
                        case 'reset':
                        case 'submit':
                            q.push(form.elements[count].name + "=" + encodeURIComponent(form.elements[count].value));
                            break;
                        case 'checkbox':
                        case 'radio':
                            if (form.elements[count].checked) {
                                    q.push(form.elements[count].name + "=" + encodeURIComponent(form.elements[count].value));
                            }                                               
                            break;
                    }
                    break;
                    case 'file':
                    break; 
                case 'TEXTAREA':
                        q.push(form.elements[count].name + "=" + encodeURIComponent(form.elements[count].value));
                        break;
                case 'SELECT':
                    switch (form.elements[count].type) {
                        case 'select-one':
                            q.push(form.elements[count].name + "=" + encodeURIComponent(form.elements[count].value));
                            break;
                        case 'select-multiple':
                            for (let secondCount = form.elements[count].options.length - 1; secondCount >= 0; secondCount--) {
                                if (form.elements[count].options[secondCount].selected) {
                                        q.push(form.elements[count].name + "=" + encodeURIComponent(form.elements[count].options[secondCount].value));
                                }
                            }
                            break;
                    }
                    break;
                case 'BUTTON':
                    switch (form.elements[count].type) {
                        case 'reset':
                        case 'submit':
                        case 'button':
                            q.push(form.elements[count].name + "=" + encodeURIComponent(form.elements[count].value));
                            break;
                    }
                    break;
            }
        }
        result = q.join("&");
    }
    return result;
}