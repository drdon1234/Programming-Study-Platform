@echo off
chcp 65001 >nul
title 编程学习平台

echo ========================================
echo        编程学习平台 - 启动服务
echo ========================================
echo.

cd /d "%~dp0app"

if not exist "node_modules" (
    echo [*] 首次启动，正在安装依赖...
    echo.
    npm install
    if errorlevel 1 (
        echo.
        echo [!] 依赖安装失败，请检查 Node.js 是否已安装。
        echo     下载地址: https://nodejs.org/
        pause
        exit /b 1
    )
    echo.
    echo [√] 依赖安装完成
    echo.
)

echo [*] 正在启动前端 + 后端服务...
echo.
echo     前端地址: http://localhost:5173
echo     后端API:  http://localhost:3001
echo.
echo     按 Ctrl+C 可停止服务
echo ========================================
echo.

npm run dev
