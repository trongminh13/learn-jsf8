// //NUMBER0all------------  Đối tượng `Validator`
// function Validator(options) {
//     function getParent(element, selector) {

//     }






//     var selectorRules = {};
//     //NUMBER2------------ Hàm thực hiện validate
//     function validate(inputElement, rule) {




//     }
//     var formElement = document.querySelector(options.form);
//     //NUMBER4------------
//     if (formElement) {
//         // Khi submit form
//         formElement.onsubmit = function (e) {
//             e.preventDefault();

//             var isFormValid = true;
//             // Lặp qua từng rules và validate
//             options.rules.forEach(function (rule) {

//             })
//             if (isFormValid) {
//                 // Trường hợp submit với javascript
//             }



//         }

//         // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
//         options.rules.forEach(function (rule) {
//             // Lưu lại các rules cho mỗi input
//         }
//         )
//     }



// }



// // Định nghĩa rules
// // Nguyên tắc của các rules:
// // 1. Khi có lỗi => Trả ra message lỗi
// // 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)

// //NUMBER5------------
// Validator.isRequired = function (selector, message) // dinh nghia isRe và isemail
// {
//     //return cái gì thì chả về cái đấy
// }
//NUMBER6------------
// Validator.isEmail = function (selector, message) {

// }
//NUMBER7------------
// Validator.minLength = function (selector, min, message) {

// }
//NUMBER8------------
// Validator.isConfirmed = function (selector, getConfirmValue, message) {

// }
/*------------------------------------------------------------------------*/


function Validator(options) {

    //1
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    




///////////////////////////////////////////////////////////



    //2
    var selectorRules = {}; //trả về rỗng
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;
        var rules = selectorRules[rule.selector]; // lay chinh cai rules


        // Lặp qua các rule và kiểm tra
        // Nếu có lỗi thì dừng kiểm tra
        //2.5 -> 
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage)
                break;
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }
        return !errorMessage;


    }


///////////////////////////////////////////////////////////////



    //NUMBER3------------
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;
            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {

                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });
            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onsubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {

                        switch (input.type) {
                            case 'radio':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case ' file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {});
                    options.onsubmit(formValues);
                } else {
                    formElement.submit();
                }
            }



        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        //4
        options.rules.forEach(function (rule) {
            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelectorAll(rule.selector);

            Array.from(inputElement).forEach(function (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            });
        }
        )
    }



}


//NUMBER5------------
// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) // dinh nghia isRe và isemail
{
    //return cái gì thì chả về cái đấy
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
    };
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Gia tri nhap vao khong chinh sac';
        }
    }


}