import { render } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('pruebas en <GifExpertApp />', () => {

    test('debe de mostrarse correctamente', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

})