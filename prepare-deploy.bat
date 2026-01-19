@echo off
echo ========================================
echo Moving all images to content/attachments
echo ========================================

:: Create attachments folder if it doesn't exist
if not exist "content\attachments" mkdir "content\attachments"

:: Move all image files from subfolders to content/attachments
for /R "content" %%f in (*.png *.jpg *.jpeg *.gif *.webp *.svg) do (
    if not "%%~dpf"=="%cd%\content\attachments\" (
        echo Moving: %%~nxf
        move /Y "%%f" "content\attachments\" >nul 2>&1
    )
)

echo.
echo ========================================
echo Done! All images moved to content/attachments
echo ========================================

:: Also update callouts from closed to open (optional)
echo Updating callouts to be open by default...
powershell -Command "Get-ChildItem -Path 'content' -Filter '*.md' -Recurse | ForEach-Object { (Get-Content $_.FullName -Raw) -replace '\[!(info|quote|abstract|tip|example)\]-', '[!$1]+' | Set-Content $_.FullName -NoNewline }"

echo.
echo Ready to push to GitHub!
pause
