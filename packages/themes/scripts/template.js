/**
 * @description 生成颜色
 * @link https://github.com/arco-design/color
 */

import { getPresetColors, getRgbStr } from '@arco-design/color'
import { writeFileSync } from 'fs'
import { resolve } from 'path'


// 获取相关颜色
const { red, green, arcoblue, gray, orange } = getPresetColors()

/**
 * @description 颜色模板
 * @param {*} color 颜色对象
 * @returns 颜色模板数组
 */
const templates = [
    { color: red, tags: ['danger'] },
    { color: green, tags: ['success'] },
    { color: arcoblue, tags: ['primary', 'link'] },
    { color: gray, tags: ['fill', 'text'] },
    { color: orange, tags: ['warning'] }
]

// 最后写入scss模板文件的内容
let str = ''

// 获取scss变量
const getScssVariable = (color, tags) => {
    let str = ''
    for(const tag of tags) {
        Object.keys(color).forEach(key => {
            if(Array.isArray(color[key])) {
                color[key].forEach((item, index) => {
                    str += `$color-${tag}-${key}-${index + 1}: ${getRgbStr(item)};\n`
                })
            } else {
                str += `$color-${tag}-${key}: ${getRgbStr(color[key])};\n`
            }
        })
    }
    return str
}

// 遍历模板
templates.forEach(item => {
    str += getScssVariable(item.color, item.tags)
})
// 写入scss文件
const colorsScssPath = resolve('../src/colors.scss')
writeFileSync(colorsScssPath, str)



