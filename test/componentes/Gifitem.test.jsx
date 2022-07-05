import { render } from "@testin-library/react"
import { Gifitem } from "../../src/componentes/Gifitem"

describe('Prueba en el Gifitem', () => { 
     const title = 'Saitana';
     const url = 'https://one-punch.com/saitana.jpg';

    test('debe hacer match con el snapshor', () => { 
        const {container}= render(<Gifitem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
     });

 });