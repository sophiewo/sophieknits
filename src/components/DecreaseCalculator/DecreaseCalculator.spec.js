import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from './Calculator'

describe("Calculator", () => {
  test("Shows Calculator", () => {
    render(<DeceaseCalculator />);
    const text = screen.getByText("Stitch Decrease Calculator");
    expect(text).toBeInTheDocument();
  });
});