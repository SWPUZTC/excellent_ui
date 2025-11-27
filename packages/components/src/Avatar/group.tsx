import { AvatarGroupProps } from './type'
import classNames from 'classnames'
import React from 'react'
import Avatar from '.'

const Group = (props: AvatarGroupProps) => {
    const { className, style, size, shape, maxCount, zindexAscend = false, autoFix, maxStyle, children } = props
    type Props = React.PropsWithChildren<AvatarGroupProps>

    const getlastChild = (rest: number, length: number) => {
        return (
            <>
                <Avatar
                    size={size}
                    autoFix={autoFix}
                    shape={shape}
                    style={{ ...maxStyle, zIndex: zindexAscend ? rest : length - rest }}
                >{`+${rest}`}</Avatar>
            </>
        )
    }

    const renderChildren = () => {
        const childArray = React.Children.toArray(children) as React.ReactElement[]
        const length = maxCount && maxCount > 0 ? Math.min(childArray.length, Math.floor(maxCount)) : childArray.length
        const res = childArray.slice(0, length).map((child, index) => {
            return React.cloneElement(child, {
                ...(child.props as Props),
                style: {
                    ...((child.props as Props).style || {}),
                    zIndex: !zindexAscend ? length - index : index + 1,
                    marginLeft: index === 0 ? 0 : size ? -size / 4 : '-8px'
                },
                size: (child.props as Props).size || size,
                shape: (child.props as Props).shape || shape,
                autoFix: (child.props as Props).autoFix || autoFix
            } as Props)
        })
        if (length < childArray.length) {
            res.push(getlastChild(childArray.length - length, length))
        }
        return res
    }
    return (
        <div className={classNames('ex-avatar-group', className)} style={style}>
            {renderChildren()}
        </div>
    )
}

export default Group
