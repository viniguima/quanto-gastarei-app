import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native'
import CalculateScreen from "../../screens/CalculateScreen";

describe('CalculateScreen', () => {

  it("should distance input change! ", async () => {
    const input = 20;
    render(<CalculateScreen />);

    fireEvent.changeText(screen.getByTestId('distance'), input)
    const output = await screen.findByTestId('distance');
    expect(output.props.value).toBe(input);
  })

  it("should aut input change! ", async () => {
    const input = 10;
    render(<CalculateScreen />);

    fireEvent.changeText(screen.getByTestId('aut'), input)
    const output = await screen.findByTestId('aut');
    expect(output.props.value).toBe(input);
  })

  it("should priceGas input change! ", async () => {
    const input = 4.50;
    render(<CalculateScreen />);

    fireEvent.changeText(screen.getByTestId('priceGas'), input)
    const output = await screen.findByTestId('priceGas');
    expect(output.props.value).toBe(input);
  })

  it("should travel input change! ", async () => {
    const input = 2;
    render(<CalculateScreen />);

    fireEvent.changeText(screen.getByTestId('travel'), input)
    const output = await screen.findByTestId('travel');
    expect(output.props.value).toBe(input);
  })

  it('should calculate! ', async () => {
    render(<CalculateScreen />);

    const dist = 20;
    const aut = 10;
    const gasPrice = 4.50;
    const trv = 2;

    const autonomia = (dist / aut)
    const totalGas = (autonomia * gasPrice)
    const resultTravel = (totalGas * trv)

    expect(autonomia).toBe(2);
    expect(totalGas).toBe(9);
    expect(resultTravel).toBe(18);
  });

  it('should change the result', async () => {
    render(<CalculateScreen />);

    const dist = 20;
    const aut = 10;
    const gasPrice = 4.50;
    const trv = 2;

    const autonomia = (dist / aut)
    const totalGas = (autonomia * gasPrice)
    const resultTravel = (totalGas * trv)

    const result = `Você gastará: R$${resultTravel.toFixed(2)} e prescisará de ${autonomia.toFixed(2)} Litros de gasolina.`

    const expectedResult = 'Você gastará: R$18.00 e prescisará de 2.00 Litros de gasolina.';

    expect(result).toBe(expectedResult);
  });
});
