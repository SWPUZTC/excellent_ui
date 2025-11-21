import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '../index';

describe('Button Component', () => {
  it('should render correctly', () => {
    render(<Button>Hello World</Button>);
    const buttonElement = screen.getByText('Hello World');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render with different types', () => {
    const { rerender } = render(<Button type="primary">Primary</Button>);
    expect(screen.getByText('Primary').parentElement).toHaveClass('ex-button-primary');

    rerender(<Button type="secondary">Secondary</Button>);
    expect(screen.getByText('Secondary').parentElement).toHaveClass('ex-button-secondary');

    rerender(<Button type="text">Text</Button>);
    expect(screen.getByText('Text').parentElement).toHaveClass('ex-button-text');

    rerender(<Button type="outline">Outline</Button>);
    expect(screen.getByText('Outline').parentElement).toHaveClass('ex-button-outline');
  });

  it('should render with different sizes', () => {
    const { rerender } = render(<Button size="mini">Mini</Button>);
    expect(screen.getByText('Mini').parentElement).toHaveClass('ex-button-mini');

    rerender(<Button size="small">Small</Button>);
    expect(screen.getByText('Small').parentElement).toHaveClass('ex-button-small');

    rerender(<Button size="medium">Medium</Button>);
    expect(screen.getByText('Medium').parentElement).toHaveClass('ex-button-medium');

    rerender(<Button size="large">Large</Button>);
    expect(screen.getByText('Large').parentElement).toHaveClass('ex-button-large');
  });

  it('should render with different statuses', () => {
    const { rerender } = render(<Button status="warning">Warning</Button>);
    expect(screen.getByText('Warning').parentElement).toHaveClass('ex-button-warning');

    rerender(<Button status="danger">Danger</Button>);
    expect(screen.getByText('Danger').parentElement).toHaveClass('ex-button-danger');

    rerender(<Button status="success">Success</Button>);
    expect(screen.getByText('Success').parentElement).toHaveClass('ex-button-success');

    rerender(<Button status="default">Default</Button>);
    expect(screen.getByText('Default').parentElement).toHaveClass('ex-button-default');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const buttonElement = screen.getByText('Disabled').parentElement;
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('ex-button-disabled');
  });

  it('should be disabled and show loading class when loading prop is true', () => {
    render(<Button loading>Loading</Button>);
    const buttonElement = screen.getByText('Loading').parentElement;
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('ex-button-loading');
  });

  it('should have correct htmlType attribute', () => {
    const { rerender } = render(<Button htmlType="button">Button</Button>);
    expect(screen.getByText('Button').parentElement).toHaveAttribute('type', 'button');

    rerender(<Button htmlType="submit">Submit</Button>);
    expect(screen.getByText('Submit').parentElement).toHaveAttribute('type', 'submit');

    rerender(<Button htmlType="reset">Reset</Button>);
    expect(screen.getByText('Reset').parentElement).toHaveAttribute('type', 'reset');
  });

  it('should render prefix and suffix icons', () => {
    const PrefixIcon = () => <span>🔍</span>;
    const SuffixIcon = () => <span>▶</span>;

    render(
      <Button prefix={<PrefixIcon />} suffix={<SuffixIcon />}>
        Icon Button
      </Button>
    );

    expect(screen.getByText('🔍')).toBeInTheDocument();
    expect(screen.getByText('▶')).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByText('Click me').parentElement;
    if (buttonElement) {
      fireEvent.click(buttonElement);
    }
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not handle click events when disabled', () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );
    const buttonElement = screen.getByText('Disabled').parentElement;
    if (buttonElement) {
      fireEvent.click(buttonElement);
    }
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('should not handle click events when loading', () => {
    const handleClick = vi.fn();
    render(
      <Button loading onClick={handleClick}>
        Loading
      </Button>
    );
    const buttonElement = screen.getByText('Loading').parentElement;
    if (buttonElement) {
      fireEvent.click(buttonElement);
    }
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('should apply custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByText('Custom').parentElement).toHaveClass('custom-class');
  });

  it('should work correctly with multiple props', () => {
    render(
      <Button
        type="primary"
        size="large"
        status="success"
        disabled
        className="custom-button"
      >
        Combined Props
      </Button>
    );

    const buttonElement = screen.getByText('Combined Props').parentElement;
    expect(buttonElement).toHaveClass('ex-button-primary');
    expect(buttonElement).toHaveClass('ex-button-large');
    expect(buttonElement).toHaveClass('ex-button-success');
    expect(buttonElement).toHaveClass('ex-button-disabled');
    expect(buttonElement).toHaveClass('custom-button');
    expect(buttonElement).toBeDisabled();
  });
});