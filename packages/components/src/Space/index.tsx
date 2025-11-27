import SpaceProps from './type'
import './index.scss'
import classNames from 'classnames'
import React from 'react'

const gap = {
    mini: '4px',
    small: '8px',
    medium: '16px',
    large: '24px'
}

const Space = (props: SpaceProps) => {
    const { direction = 'horizontal', size = 'small', align = 'center', className, style, split, wrap } = props
    const gapSize = typeof size === 'number' ? `${size}px` : gap[size]
    return (
        <>
            <div
                className={classNames(
                    className,
                    'ex-space',
                    `ex-space-${direction}-${align}`,
                    direction === 'vertical' && 'ex-space-vertical',
                    wrap && 'ex-space-wrap'
                )}
                style={{ ...style, gap: gapSize }}
            >
                {props.children
                    ? React.Children.map(props.children, child => {
                          if (React.isValidElement(child)) {
                              return (
                                  <React.Fragment key={child.key}>
                                      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                          {child}
                                          {split ? split : null}
                                      </div>
                                  </React.Fragment>
                              )
                          }
                          return null
                      })
                    : null}
            </div>
        </>
    )
}

export default Space
