const btn = document.querySelector('.sbmit');
btn.addEventListener('click', () => {
  console.log('here');
  const token = document.querySelector('.input-field').value;
  fetch('https://www.eventbriteapi.com/v3/users/me/organizations/', {
    headers: { token: `Bearer ${token}` }
  }).then((resp) => resp.json()).then((json) => console.log(json));
});
