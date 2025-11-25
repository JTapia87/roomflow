(function () {
  const form = document.getElementById('login-form');
  const usuarioInput = document.getElementById('usuario');
  const contrasenaInput = document.getElementById('contrasena');
  const usuarioError = document.getElementById('usuario-error');
  const contrasenaError = document.getElementById('contrasena-error');
  const feedback = document.getElementById('feedback');
  const btnIngresar = document.getElementById('btn-ingresar');

  function clearErrors() {
    usuarioError.textContent = '';
    contrasenaError.textContent = '';
    feedback.textContent = '';
    feedback.className = 'feedback';
  }

  function validate() {
    let valid = true;
    clearErrors();
    if (!usuarioInput.value.trim()) {
      usuarioError.textContent = 'El usuario es obligatorio.';
      valid = false;
    }
    if (!contrasenaInput.value.trim()) {
      contrasenaError.textContent = 'La contraseña es obligatoria.';
      valid = false;
    }
    return valid;
  }

  function simulateAuth(usuario, contrasena) {
    const DEMO_USER = 'admin';
    const DEMO_PASS = 'admin123';
    return usuario === DEMO_USER && contrasena === DEMO_PASS;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;

    btnIngresar.disabled = true;
    setTimeout(() => {
      const ok = simulateAuth(usuarioInput.value.trim(), contrasenaInput.value);
      if (ok) {
        feedback.textContent = 'Ingreso exitoso. Redirigiendo…';
        feedback.className = 'feedback success';
        window.location.href = 'menu.html';
      } else {
        feedback.textContent = 'Credenciales inválidas. Intente nuevamente.';
        feedback.className = 'feedback error';
        contrasenaInput.value = '';
        contrasenaInput.focus();
      }
      btnIngresar.disabled = false;
    }, 500);
  });
})();

