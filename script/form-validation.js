document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const nameInput = document.getElementById("name");
    const courseInput = document.getElementById("course");
    const universityInput = document.getElementById("university");
    const ageInput = document.getElementById("age");
    const phoneInput = document.getElementById("phone");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        if (!/^[а-яА-ЯёЁ\s]+$/.test(nameInput.value)) {
            nameInput.classList.add("error");
            document.getElementById("name-error").textContent = "Введите корректное ФИО";
            isValid = false;
        } else {
            nameInput.classList.remove("error");
            document.getElementById("name-error").textContent = "";
        }

        if (!/^\d+$/.test(ageInput.value)) {
            ageInput.classList.add("error");
            document.getElementById("age-error").textContent = "Введите корректный возраст";
            isValid = false;
        } else {
            ageInput.classList.remove("error");
            document.getElementById("age-error").textContent = "";
        }

        if (!/^\d{10}$/.test(phoneInput.value)) {
            phoneInput.classList.add("error");
            document.getElementById("phone-error").textContent = "Введите корректный номер телефона ";
            isValid = false;
        } else {
            phoneInput.classList.remove("error");
            document.getElementById("phone-error").textContent = "";
        }


        if (!/^[а-яА-ЯёЁ\s]+$/.test(courseInput.value)) {
            courseInput.classList.add("error");
            document.getElementById("course-error").textContent = "Введите корректный курс";
            isValid = false;
        } else {
            courseInput.classList.remove("error");
            document.getElementById("course-error").textContent = "";
        }

        if (!/^[а-яА-ЯёЁ\s]+$/.test(universityInput.value)) {
            universityInput.classList.add("error");
            document.getElementById("university-error").textContent = "Введите корректное название университета";
            isValid = false;
        } else {
            universityInput.classList.remove("error");
            document.getElementById("university-error").textContent = "";
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
