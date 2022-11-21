import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native'
import GasType from '../../screens/GasType'

describe('GasType', () => {
  it("should gasPrice input change! ", async () => {
    const input = 5.00;
    render(<GasType />);

    fireEvent.changeText(screen.getByTestId('gasPrice'), input)
    const output = await screen.findByTestId('gasPrice');
    expect(output.props.value).toBe(input);
  });
  it("should alcPrice input change! ", async () => {
    const input = 5.00;
    render(<GasType />);

    fireEvent.changeText(screen.getByTestId('alcPrice'), input)
    const output = await screen.findByTestId('alcPrice');
    expect(output.props.value).toBe(input);
  });

  it("should tell that gasoline is better", () => {
    const alcPrice = 4.50;
    const gasPrice = 5.00;

    const resultConsult = (alcPrice / gasPrice);

    let msg = ''

    if (resultConsult < 0.7) {
      msg = 'É recomendável abastecer com álcool(etanol).';
    } else if (resultConsult > 0.7) {
      msg = 'É recomendável abastecer com gasolina.';
    }
    expect(msg).toBe('É recomendável abastecer com gasolina.');
  });

  it("should tell that alcool is better", () => {
    const alcPrice = 3.49;
    const gasPrice = 5.00;

    const resultConsult = (alcPrice / gasPrice);

    let msg = ''

    if (resultConsult < 0.7) {
      msg = 'É recomendável abastecer com álcool(etanol).';
    } else if (resultConsult >= 0.7) {
      msg = 'É recomendável abastecer com gasolina.';
    }
    console.log(resultConsult)
    expect(msg).toBe('É recomendável abastecer com álcool(etanol).');
  })
});