@ECHO OFF
IF NOT "%~f0" == "~f0" GOTO :WinNT
@"jruby-complete-1.7.11.jar" "C:/Users/slefebvre/Documents/IDEAProjects/FAG/.jruby-container/sass/gems/bin/compass" %1 %2 %3 %4 %5 %6 %7 %8 %9
GOTO :EOF
:WinNT
@"jruby-complete-1.7.11.jar" "%~dpn0" %*
