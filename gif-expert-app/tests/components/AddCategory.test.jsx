import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory/>', () => { 
    
test('Debe de cambiar el valor de la caja de texto', () => { 
   
    render(<AddCategory onNewCategory={() => {}} />);
    //screen.debug();-->para ver la info
    const input = screen.getByRole('textbox');
    //para disparar los eventos: (quiero ver que escribe)
    fireEvent.input( input, { target: { value: 'Saitama'}});

    expect (input.value).toBe('Saitama');
    screen.debug();  
  
  });

  test('debe de llamar on New Category si el input tiene un valor', () => {
    
    const inputValue = 'Saitama';
    //un Mok es una simulacion de una funcion,= onNewCategory
    const onNewCategory = jest.fn();
    //reeemplazo la funcion x la ficticia
    render(<AddCategory onNewCategory={ onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    
//1° Evento del formulario para establecer el valor
    fireEvent.input( input, { target: { value: inputValue }});
//2°disparo el submit del formualario
    fireEvent.submit( form );

    expect(input.value).toBe('');

    //screen.debug();
   //evaluo que esta funcion ha sido llamada
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith( inputValue);


   });

   test('no debe de llamar el onNewCategory si el inout esta vacio', () => {
     
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory } />);
    const form = screen.getByRole('form');
    fireEvent.submit( form );
    //expect(onNewCategory).toHaveBeenCalledTimes(0);


  });
 
});