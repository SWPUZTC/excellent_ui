import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Spin from '../index';

describe('Spin Component', () => {

  it('should not render when not loading and no children', () => {
    const { container } = render(<Spin loading={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('should render children when not loading', () => {
    render(<Spin loading={false}><div>Child Content</div></Spin>);
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('should render with a tip', () => {
    render(<Spin loading tip="Loading data..." />);
    expect(screen.getByText('Loading data...')).toBeInTheDocument();
    expect(screen.getByText('Loading data...')).toHaveClass('ex-spin-tip');
  });

  it('should render as a wrapper with overlay when there are children', () => {
    render(<Spin loading><div>Content to be covered</div></Spin>);
    const wrapper = screen.getByText('Content to be covered').parentElement?.parentElement;
    expect(wrapper).toHaveClass('ex-spin-wrapper');
    expect(wrapper?.querySelector('.ex-spin-overlay')).toBeInTheDocument();
    expect(wrapper?.querySelector('.ex-spin-blur')).toBeInTheDocument();
  });
});