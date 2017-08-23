var assert = require('assert');
/*
describe('los estudiantes login', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1234');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });
});

*/

describe('los estudiantes login OK', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
  

	cajaLogIn.setValue('input[name="correo"]', 'jd.runza@uniandes.edu.co');
        cajaLogIn.setValue('input[name="password"]','Pruebas2017MisoJR');
	cajaLogIn.click('button=Ingresar');  
      
    });
});



describe('los estudiantes Registro', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaSignUp = browser.element('.cajaSignUp');
  


      cajaSignUp.setValue('input[name="nombre"]','jorge');
      cajaSignUp.setValue('input[name="apellido"]',"runza");
      cajaSignUp.setValue('input[name="correo"]',"jd.runza@uniandes.edu.co");

      var selectBox2 = browser.element('select[name="idDepartamento"]');
      selectBox2.selectByValue('3');

      
     
      cajaSignUp.setValue('input[name="password"]',"Pruebas2017MisoJR");
      cajaSignUp.element('input[name="acepta"]').click();
      cajaSignUp.element('button=Registrarse').click();

      browser.waitForVisible('button=OK', 5000);
      browser.click('button=OK');
    });
});



describe('Los estudiantes busqueda y navegar a pagina de profesor', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        var selecti = browser.element('.Select-input');

        selecti.click();
        selecti.setValue('input[role="combobox"]',"Rubby Casallas");
        browser.waitForVisible('.Select-option', 5000);
        var selecto = browser.element('.Select-option');
        selecto.click();
        browser.waitForVisible('.nombreProfesor', 5000);
        var nombreProfesor = browser.element('.nombreProfesor').getText();
        expect(nombreProfesor).toBe('Rubby Casallas Gutierrez');



    });
});

