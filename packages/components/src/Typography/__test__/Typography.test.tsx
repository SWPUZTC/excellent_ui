import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Typography from '../index';

describe('Typography Component', () => {
  it('should render children correctly', () => {
    render(
      <Typography>
        <p>Hello World</p>
      </Typography>
    );
    const childElement = screen.getByText('Hello World');
    expect(childElement).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<Typography className="custom-class">Custom</Typography>);
    expect(container.firstChild).toHaveClass('custom-class');
    expect(container.firstChild).toHaveClass('ex-typography');
  });

  it('should render Title, Text and Paragraph components', () => {
    render(
      <Typography>
        <Typography.Title>Title</Typography.Title>
        <Typography.Text>Text</Typography.Text>
        <Typography.Paragraph>Paragraph</Typography.Paragraph>
      </Typography>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
  });
});