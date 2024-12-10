function submitForm(form) {
  window.open("mailto:tomas.esquivel@ice.com?subject=Pre-Qualification Request&body=First%20Name:%20" + form.firstname.value + "%20Last%20Name:" + form.lastname.value);
  return false; /* cancel submit or else page reloads */
}
