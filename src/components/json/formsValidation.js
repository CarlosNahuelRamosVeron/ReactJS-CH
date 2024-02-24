const fullNameError = "Wrong FullName, use just letters";
const emailError = "Wrong Email, use email format. For example: alv@gmail.com";
const phoneNumberError = "Wrong Phone Number, use just numbers without blank spaces";

const expressions = {
    fullName: /^[a-zA-Z\u00f1\u00d1\s]/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/,
    phoneNumber: /^\d{10}$/
}

export function fullNameValidation(value) {
    return value === "" ? "Empty field": expressions.fullName.test(value) ? null: fullNameError;
}

export function emailValidation(value) {
    return value === "" ? "Empty field": expressions.email.test(value) ? null: emailError;
}

export function phoneNumberValidation(value) {
    return value === "" ? "Empty field": expressions.phoneNumber.test(value) ? null: phoneNumberError;
}