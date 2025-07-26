import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CalculatorScreen from '../../pages/CalculatorScreen';

describe('CalculatorScreen', () => {
  it('adds two numbers correctly', () => {
    const { getByPlaceholderText, getByText } = render(<CalculatorScreen />);

    const input1 = getByPlaceholderText('Enter first number');
    const input2 = getByPlaceholderText('Enter second number');
    const button = getByText('Add Two Numbers');

    fireEvent.changeText(input1, '5');
    fireEvent.changeText(input2, '7');
    fireEvent.press(button);

    expect(getByText('Total: 12')).toBeTruthy();
  });
});