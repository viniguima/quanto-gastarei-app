import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native'
import AddCar from "../../screens/AddCar";

describe("AddCar", () => {
    it("should brand input change! ", async () => {
        const input = 'Fiat';
        render(<AddCar />);

        fireEvent.changeText(screen.getByTestId('carBrand'), input)
        const output = await screen.findByTestId('carBrand');
        expect(output.props.value).toBe(input);
    })

    it("should car model input change! ", async () => {
        const input = 'Hatch';
        render(<AddCar />);

        fireEvent.changeText(screen.getByTestId('carModel'), input)
        const output = await screen.findByTestId('carModel');
        expect(output.props.value).toBe(input);
    })

    it("should year input change! ", async () => {
        const input = '2022';
        render(<AddCar />);

        fireEvent.changeText(screen.getByTestId('carYear'), input)
        const output = await screen.findByTestId('carYear');
        expect(output.props.value).toBe(input);
    })

    it("should Avarage input change! ", async () => {
        const input = 18;
        render(<AddCar />);

        fireEvent.changeText(screen.getByTestId('avarageConsumption'), input)
        const output = await screen.findByTestId('avarageConsumption');
        expect(output.props.value).toBe(input);
    })
})