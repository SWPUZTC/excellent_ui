import { useContext, createContext } from 'react'

interface GridContextProps {
    rowGap: number; // 行间距
    colGap: number; // 列间距
    cols: number; // 列数
}

const GridContext = createContext<GridContextProps>({
    rowGap: 0,
    colGap: 0,
    cols: 24,
})

export { GridContext }

export default () => useContext(GridContext)