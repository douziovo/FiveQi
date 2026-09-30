# FiveQi

双人五子棋对弈小游戏，基于 React 19 + Vite 构建。O、X 双方轮流落子，横、竖、斜任一方向连成五子即获胜，胜利后自动开启新局；棋盘行 × 列可在设置页调整，默认 7 × 7。

## 功能特性

- **双人对弈**：O 先手，双方轮流落子，已落子的格子不可重复点击。
- **胜负判定**：每次落子从落点向横、竖、两条斜线四个方向双向延伸计数，连子 ≥ 5 判胜。
- **对局重开**：一方获胜后棋盘自动重置开新局，也可随时点击「重新开始」重置。
- **自定义棋盘**：设置页调整行 × 列，应用后按新尺寸重开一局。

## 快速开始

```bash
npm install
npm run dev      # 启动开发服务器
```

其他命令：

```bash
npm run build    # 生产构建
npm run preview  # 预览构建产物
npm run lint     # oxlint 代码检查
```

## 项目结构

```
src/
├── main.jsx        # 入口，挂载 React Router
├── MainFrame.jsx   # 根布局与路由（/ 对局、/setting 设置）
├── Game.jsx        # 棋盘渲染、落子与胜负判定
├── Setting.jsx     # 行列设置页与设置入口按钮
└── App.css         # 全局样式
```

## 技术栈

React 19 · react-router 8 · Vite 8 · oxlint
