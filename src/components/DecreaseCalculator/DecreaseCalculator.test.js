import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DecreaseCalculator from './DecreaseCalculator'

describe("DecreaseCalculator", () => {
  test("Shows Calculator", () => {
    render(<DecreaseCalculator />);
    const text = screen.getByText("Stitch Decrease Calculator");
    expect(text).toBeInTheDocument();
  });

  test("Enters 10,8 return Shows [ k3, k2tog ] x 2times ", () => {
    render(<DecreaseCalculator />);
    const startingCount = screen.getByTestId("start-test");
    const endCount = screen.getByTestId("end-test");
    fireEvent.change(startingCount, { target: { value: 10 } })
    fireEvent.change(endCount, { target: { value: 8 } })
    const button = screen.getByRole('button', { name: 'Calculate Decrease' })
    button.click()
    const result = screen.getByText("[ k3, k2tog ] x 2times")
    expect(result).toBeInTheDocument
  });
});


// expect(startingCount).toBeInTheDocument();
