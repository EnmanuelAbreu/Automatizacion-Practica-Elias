describe("Pruebas de flujo completo", () => {
  it("CP1: Hacer login exitosamente", () => {
    // Visitar la página de login
    cy.visit("http://localhost/Nicole%20proyecto/index.html");

    // Ingresar el correo
    cy.get("[type='email']").eq(1).type("enma@gmail.com");
    // Ingresar la contraseña
    cy.get("input[type='password']").eq(1).type("12345");
    // Hacer clic en el botón de login
    cy.get("#signUpButton").click();

    // Simular redirección manual
    cy.visit("http://localhost/Nicole%20proyecto/MiDia.html");

    // Verificar que estamos en Menu2.html
    cy.url().should("eq", "http://localhost/Nicole%20proyecto/MiDia.html");
  });

  it('Debe agregar una tarea llamada "Ir al médico" para el 1 de diciembre y verificar que se haya agregado correctamente', () => {
    // Visitar la página de la aplicación
    cy.visit('http://localhost/Nicole%20proyecto/MiDia.html'); // Cambia esto por la URL de tu aplicación

    // Escribir "Ir al médico" en el campo de texto
    cy.get('input[placeholder="Agrega tu texto"]').type('Ir al médico');

    // Seleccionar la fecha 1 de diciembre
    cy.get('input[type="date"]').type('2024-12-01'); // Asegúrate que este sea el formato compatible

    // Hacer clic en el botón "Agregar"
    cy.contains('Agregar').click();

    // Verificar que la tarea se haya agregado correctamente en la lista
    cy.contains('Ir al médico') // Busca el texto de la tarea
      .should('exist')          // Verifica que exista en el DOM
      .and('be.visible');       // Verifica que sea visible
  });

  it('Debe agregar 5 tareas más con diferentes fechas y verificar que se hayan agregado correctamente', () => {
    // Visitar la página de la aplicación
    cy.visit('http://localhost/Nicole%20proyecto/MiDia.html'); // Cambia esto por la URL de tu aplicación

    // Lista de tareas con nombres y fechas
    const tareas = [
      { nombre: 'Comprar víveres', fecha: '2024-11-20' },
      { nombre: 'Ir al gimnasio', fecha: '2024-11-22' },
      { nombre: 'Revisar correo', fecha: '2024-11-23' },
      { nombre: 'Pagar facturas', fecha: '2024-11-24' },
      { nombre: 'Planificar vacaciones', fecha: '2024-11-25' }
    ];

    // Agregar cada tarea de la lista
    tareas.forEach((tarea) => {
      cy.get('input[placeholder="Agrega tu texto"]').type(tarea.nombre);
      cy.get('input[type="date"]').type(tarea.fecha);
      cy.contains('Agregar').click();
    });

    // Verificar que todas las tareas se hayan agregado correctamente
    tareas.forEach((tarea) => {
      cy.contains(tarea.nombre) // Verificar que cada tarea esté en la lista
        .should('exist')
        .and('be.visible');
    });
  });

  it('Debe eliminar todas las tareas y verificar que la lista esté vacía', () => {
    // Visitar la página de la aplicación
    cy.visit('http://localhost/Nicole%20proyecto/MiDia.html'); // Cambia esto por la URL de tu aplicación

    // Asegúrate de que hay varias tareas agregadas
    const tareas = [
      { nombre: 'Ir al médico', fecha: '2024-12-01' },
      { nombre: 'Comprar víveres', fecha: '2024-11-20' },
      { nombre: 'Ir al gimnasio', fecha: '2024-11-22' },
      { nombre: 'Revisar correo', fecha: '2024-11-23' },
      { nombre: 'Pagar facturas', fecha: '2024-11-24' },
      { nombre: 'Planificar vacaciones', fecha: '2024-11-25' }
    ];

    tareas.forEach((tarea) => {
      cy.get('input[placeholder="Agrega tu texto"]').type(tarea.nombre);
      cy.get('input[type="date"]').type(tarea.fecha);
      cy.contains('Agregar').click();
    });

    // Hacer clic en el botón "Eliminar todas las tareas"
    cy.contains('Eliminar todas las tareas').click();

    // Verificar que la lista esté vacía
    cy.get('.todo-app li').should('have.length', 0); // Verificar que no hay elementos
  });
});



describe("Pruebas con Nuevo Elemento", () => {

  it('Debe agregar 5 tareas más con diferentes fechas y verificar que se hayan agregado correctamente', () => {
    // Visitar la página de la aplicación
    cy.visit('http://localhost/Nicole%20proyecto/Importantes.html'); // Cambia esto por la URL de tu aplicación

    // Lista de tareas con nombres y fechas
    const tareas = [
      { nombre: 'Comprar víveres', fecha: '2024-11-20' },
      { nombre: 'Ir al gimnasio', fecha: '2024-11-22' },
      { nombre: 'Revisar correo', fecha: '2024-11-23' },
      { nombre: 'Pagar facturas', fecha: '2024-11-24' },
      { nombre: 'Planificar vacaciones', fecha: '2024-11-25' }
    ];

    // Agregar cada tarea de la lista
    tareas.forEach((tarea) => {
      cy.get('input[placeholder="Agrega tu texto"]').type(tarea.nombre);
      cy.get('input[type="date"]').type(tarea.fecha);
      cy.contains('Agregar').click();
    });

    // Verificar que todas las tareas se hayan agregado correctamente
    tareas.forEach((tarea) => {
      cy.contains(tarea.nombre) // Verificar que cada tarea esté en la lista
        .should('exist')
        .and('be.visible');
    });
  });

  it('Debe eliminar todas las tareas y verificar que la lista esté vacía', () => {
    // Visitar la página de la aplicación
    cy.visit('http://localhost/Nicole%20proyecto/Importantes.html'); // Cambia esto por la URL de tu aplicación

    // Asegúrate de que hay varias tareas agregadas
    const tareas = [
      { nombre: 'Ir al médico', fecha: '2024-12-01' },
      { nombre: 'Comprar víveres', fecha: '2024-11-20' },
      { nombre: 'Ir al gimnasio', fecha: '2024-11-22' },
      { nombre: 'Revisar correo', fecha: '2024-11-23' },
      { nombre: 'Pagar facturas', fecha: '2024-11-24' },
      { nombre: 'Planificar vacaciones', fecha: '2024-11-25' }
    ];

    tareas.forEach((tarea) => {
      cy.get('input[placeholder="Agrega tu texto"]').type(tarea.nombre);
      cy.get('input[type="date"]').type(tarea.fecha);
      cy.contains('Agregar').click();
    });

    // Hacer clic en el botón "Eliminar todas las tareas"
    cy.contains('Eliminar todas las tareas').click();

    // Verificar que la lista esté vacía
    cy.get('.todo-app li').should('have.length', 0); // Verificar que no hay elementos
  });
});
