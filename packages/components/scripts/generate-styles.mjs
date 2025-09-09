// #!/usr/bin/env node

// import fs from 'fs';
// import path from 'path';
// //import glob from 'glob';
// import process from 'process';
// import console from 'console';

// const componentsDir = path.join(process.cwd(), 'src/components');
// const outputFile = path.join(process.cwd(), 'src/styles/_components.scss');

// function generateStyles() {
//   try {
//     // 手动收集已知组件样式（简单方案）
//     const componentStyles = [
//       '../Button/index.module.scss'
//     ];

//     // 生成导入语句
//     const imports = componentStyles.map(style => 
//       `@import '${style}';`
//     ).join('\n');

//     // 添加文件头注释
//     const content = `// 组件样式导入
// // 自动收集所有组件样式

// ${imports}
// `;
//     // 写入索引文件
//     fs.writeFileSync(outputFile, content);
//   } catch (error) {
//     console.error('生成样式索引失败:', error);
//     process.exit(1);
//   }
// }

// generateStyles();