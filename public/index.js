"use strict";
// Data - Salve os elementos do DOM em variáveis.
const spanModal = document.getElementById("span-modal");
const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-message");
const form = document.getElementById("form-main");
// Functions - Defina os eventos em funções para serem usadas futuramente.
/**
 Defina a função que será executada quando o formulário for submetido.
 */
function submitForm(e) {
    e.preventDefault();
    // Defina a cor branca para todos os inputs.
    inputName.style.borderLeft = "1px solid white";
    inputEmail.style.borderLeft = "1px solid white";
    inputMessage.style.borderLeft = "1px solid white";
    // Defina a mensagem de sucesso e mostre o modal.
    spanModal.innerHTML = "Mensagem enviado com sucesso!";
    spanModal.classList.add("modal-green");
    spanModal.classList.remove("hidden");
    setTimeout(() => {
        spanModal.innerHTML = "";
        spanModal.classList.remove("modal-green");
        spanModal.classList.add("hidden");
    }, 2000);
}
/**
 * Defina a função que será executada quando o campo name for inválido.
 */
function nameError(e) {
    e.preventDefault();
    inputName.style.borderLeft = "1px solid red";
    inputName.focus();
    spanModal.innerHTML = "Por favor, insira seu nome!";
    spanModal.classList.add("modal-red");
    spanModal.classList.remove("hidden");
    setTimeout(() => {
        spanModal.innerHTML = "";
        spanModal.classList.remove("modal-red");
        spanModal.classList.add("hidden");
    }, 2000);
}
/**
 Defina a função que será executada quando o campo email for inválido.
*/
function emailError(e) {
    e.preventDefault();
    inputEmail.style.borderLeft = "1px solid red";
    inputEmail.focus();
    spanModal.innerHTML = "Por favor, insira um email válido!";
    spanModal.classList.add("modal-red");
    spanModal.classList.remove("hidden");
    setTimeout(() => {
        spanModal.innerHTML = "";
        spanModal.classList.remove("modal-red");
        spanModal.classList.add("hidden");
    }, 2000);
}
/**
 Defina a função que será executada quando o campo message for inválido.
*/
function messageError(e) {
    e.preventDefault();
    inputMessage.style.borderLeft = "1px solid red";
    inputMessage.focus();
    spanModal.innerHTML = "Por favor, insira uma mensagem!";
    spanModal.classList.add("modal-red");
    spanModal.classList.remove("hidden");
    setTimeout(() => {
        spanModal.innerHTML = "";
        spanModal.classList.remove("modal-red");
        spanModal.classList.add("hidden");
    }, 2000);
}
// Events - Defina os eventos e suas respectivas funções.
form.addEventListener("submit", submitForm);
inputMessage.addEventListener("invalid", messageError);
inputEmail.addEventListener("invalid", emailError);
inputName.addEventListener("invalid", nameError);
