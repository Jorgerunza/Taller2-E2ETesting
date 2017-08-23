/*
module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes login falied': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.botonIngresar')
      .setValue('.cajaLogIn input[name="correo"]', 'wrongemail@example.com')
      .setValue('.cajaLogIn input[name="password"]', '1234')
      .click('.cajaLogIn .logInButton')
      .waitForElementVisible('.aviso.alert.alert-danger', 4000)
      .assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
      .end();
  }
};
*/

module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes login OK': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .waitForElementVisible('.botonCerrar', 5000)
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 5000)
      .click('.botonIngresar')
      .setValue('.cajaLogIn input[name="correo"]', 'jd.runza@uniandes.edu.co')
      .setValue('.cajaLogIn input[name="password"]', 'Pruebas2017MisoJR')
      .click('.cajaLogIn .logInButton')
      .end();
  }
};



module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes busqueda y navegar a pagina de profesor': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .waitForElementVisible('.botonIngresar', 5000)
      .click('.Select-input')
      .setValue('.Select-input input[role="combobox"]', 'Rubby Casallas')
      .waitForElementVisible('.Select-option', 5000)
      .click('.Select-option')
      .waitForElementVisible('.nombreProfesor', 5000)
      .assert.containsText('.nombreProfesor', 'Rubby Casallas Gutierrez')
      .end();
  }
};



module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes filtrar por materia': function(browser) {
 browser
      .url('https://losestudiantes.co/')
      .waitForElementVisible('.botonIngresar', 5000)
      .click('.Select-input')
      .setValue('.Select-input input[role="combobox"]', 'Rubby Casallas')
      .waitForElementVisible('.Select-option', 5000)
      .click('.Select-option')
      .waitForElementVisible('.nombreProfesor', 5000)
      .assert.containsText('.nombreProfesor', 'Rubby Casallas Gutierrez')
     
      .waitForElementVisible('.botonAgregar', 4000)
      .click('.botonAgregar')
      .waitForElementVisible('select[name="idMateria"]', 4000)
      .click('select[name="idMateria"] option[value="ISIS2603"]')
      .click('.botonPublicar')



      .end();
  }
};







