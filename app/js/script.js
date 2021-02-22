const toggle = document.getElementById('toggle-input');
const subtitle = document.querySelector('h2');

/*The function adds the appropriate class to the document 
root based on the theme argument. 
If persist is set, it'll store the setting in localStorage.*/
function setTheme(theme) {
  const on = theme;
  const off = theme === 'light' ? 'dark' : 'light'

  const htmlEl = document.documentElement;
  htmlEl.classList.add(on);
  htmlEl.classList.remove(off);

}

function updateUI(theme) {
  toggle.checked = theme === 'dark';

  if (theme === 'light') {
    subtitle.classList.remove('dark-theme');
    subtitle.classList.add('light-theme');
  } else {
    subtitle.classList.add('dark-theme');
    subtitle.classList.remove('light-theme');
  }
}

toggle.addEventListener('click', () => {
  const theme = toggle.checked ? 'dark' : 'light';
  setTheme(theme);
  updateUI(theme);
});

/* Set theme on load */
const osPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const preferredTheme = localStorage.getItem('preferred-theme') || osPreference;
setTheme(preferredTheme);
updateUI(preferredTheme);

/*Source: https://codepen.io/radekpazdera/pen/zYBNLPo by Radek Pazdera*/
