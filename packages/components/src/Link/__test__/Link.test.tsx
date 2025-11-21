import { render, screen} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Link from '../index';

describe('Link Component', () => {
  it('should render correctly with children', () => {
    render(<Link>Click me</Link>);
    const linkElement = screen.getByText('Click me');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe('A');
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Link href="#">Snapshot</Link>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with different statuses', () => {
    const { rerender } = render(<Link status="default">Default</Link>);
    expect(screen.getByText('Default')).toHaveClass('ex-link-default');

    rerender(<Link status="warning">Warning</Link>);
    expect(screen.getByText('Warning')).toHaveClass('ex-link-warning');

    rerender(<Link status="danger">Danger</Link>);
    expect(screen.getByText('Danger')).toHaveClass('ex-link-danger');

    rerender(<Link status="success">Success</Link>);
    expect(screen.getByText('Success')).toHaveClass('ex-link-success');
  });

  it('should be disabled and not clickable when disabled prop is true', () => {
    render(<Link disabled>Disabled</Link>);
    const linkElement = screen.getByText('Disabled');
    expect(linkElement).toHaveClass('ex-link-disabled');
  });

  it('should apply hoverable class by default and when hoverable is true', () => {
    const { rerender } = render(<Link>Hoverable</Link>);
    expect(screen.getByText('Hoverable')).toHaveClass('ex-link-hoverable');

    rerender(<Link hoverable={true}>Hoverable True</Link>);
    expect(screen.getByText('Hoverable True')).toHaveClass('ex-link-hoverable');
  });

  it('should not apply hoverable class when hoverable is false', () => {
    render(<Link hoverable={false}>Not Hoverable</Link>);
    expect(screen.getByText('Not Hoverable')).not.toHaveClass('ex-link-hoverable');
  });

  it('should render an icon', () => {
    const Icon = () => <span data-testid="icon">🚀</span>;
    render(<Link icon={<Icon />}>With Icon</Link>);
    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement.parentElement).toHaveClass('ex-link-icon');
  });

  it('should apply custom className', () => {
    render(<Link className="my-custom-link">Custom</Link>);
    expect(screen.getByText('Custom')).toHaveClass('my-custom-link');
  });

  it('should pass down other anchor attributes like href and target', () => {
    render(<Link href="/test" target="_blank">External</Link>);
    const linkElement = screen.getByText('External');
    expect(linkElement).toHaveAttribute('href', '/test');
    expect(linkElement).toHaveAttribute('target', '_blank');
  });
});