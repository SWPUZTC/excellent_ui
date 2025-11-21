import { TypographyProps } from './type'
import TypographyText from './Text'
import TypographyTitle from './Title'
import TypographyParagraph from './Paragraph'
import classNames from 'classnames'
import './index.scss'

const Typography = (props: TypographyProps) => {
    const { className, style, children } = props
    return (
        <article style={style} className={classNames('ex-typography', className)}>
            {children}
        </article>
    )
}

Typography.Text = TypographyText
Typography.Title = TypographyTitle
Typography.Paragraph = TypographyParagraph

export default Typography
