export default function validadeInfo(values) {
    let errors = {};

    //Email
    if (!values.email) {
        errors.email = '* Complete su email';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = '* Email inválido';
    }

    return errors;
}

