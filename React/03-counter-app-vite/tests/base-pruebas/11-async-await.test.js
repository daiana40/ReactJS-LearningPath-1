import{ getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await.js', () => { 
  test('getImagen debe de retornar un error si no tenemos API KEY', async() => {
    
    const resp = await getImagen();

    expect( resp ).toBe('No se encontro la imagen');

  });

});