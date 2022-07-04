import { render,screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem.jsx';

describe('prueba en <GiftItem/>', () => { 
       const title = 'saitama';
       const url = "https://one-punch.com/saitama.jpg";


       test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });
    
    test ('dede de mostrar la imagen url y el Alt indicado',() => {
     render ( < GifItem title={ title } url={ url } /> );
     const { src, alt } = screen.getByRole('img');
     expect( src ).toBe( url );
     expect( alt ).toBe( alt );
    });

    
    test('debe de mostrar el titulo en el componente', () => {
        
      render( <GifItem title={ title } url={ url } /> );
      expect( screen.getByText( title ) ).toBeTruthy();
    });

  });
