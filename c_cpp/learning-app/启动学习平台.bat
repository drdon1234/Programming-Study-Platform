@echo off
chcp 65001 >nul 2>&1
title C/C++ 零基础学习平台

echo.
echo   ╔══════════════════════════════════════╗
echo   ║   C/C++ 零基础学习平台               ║
echo   ║   正在启动本地服务器...               ║
echo   ╚══════════════════════════════════════╝
echo.

set "PORT=8765"
set "DIR=%~dp0"

rem 检查端口是否已被占用，若占用则尝试下一个端口
:findport
netstat -ano | findstr ":%PORT% " | findstr "LISTENING" >nul 2>&1
if %errorlevel%==0 (
    set /a PORT+=1
    goto :findport
)

rem 优先使用 npx http-server（需要 Node.js）
where node >nul 2>&1
if %errorlevel%==0 (
    echo   使用 Node.js 启动服务器 (端口 %PORT%)...
    echo   按 Ctrl+C 可停止服务器
    echo.

    rem 延迟 2 秒后打开浏览器
    start "" /B cmd /c "timeout /t 2 /nobreak >nul && start http://127.0.0.1:%PORT%/index.html"

    npx -y http-server "%DIR%." -p %PORT% -c-1 --cors -s
    goto :eof
)

rem 若没有 Node.js，使用 Python
where python >nul 2>&1
if %errorlevel%==0 (
    echo   使用 Python 启动服务器 (端口 %PORT%)...
    echo   按 Ctrl+C 可停止服务器
    echo.

    start "" /B cmd /c "timeout /t 2 /nobreak >nul && start http://127.0.0.1:%PORT%/index.html"

    cd /d "%DIR%"
    python -m http.server %PORT%
    goto :eof
)

rem 都没有，直接用浏览器打开文件
echo   未检测到 Node.js 或 Python，尝试直接打开文件...
echo.

set "FILEPATH=%DIR%index.html"

rem 从注册表读取默认浏览器
for /f "tokens=2*" %%a in ('reg query "HKEY_CURRENT_USER\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\https\UserChoice" /v ProgId 2^>nul') do set "BID=%%b"

if /i "%BID%"=="ChromeHTML" ( start "" chrome "%FILEPATH%" & goto :eof )
if /i "%BID%"=="MSEdgeHTM" ( start "" msedge "%FILEPATH%" & goto :eof )
if /i "%BID:~0,10%"=="FirefoxURL" ( start "" firefox "%FILEPATH%" & goto :eof )

start "" msedge "%FILEPATH%"
