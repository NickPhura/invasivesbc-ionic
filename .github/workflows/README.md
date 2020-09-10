# Prepare for the android build

1. `ionic build`
2. `ionic cap add android` ()
3. `ionic cap copy`
4. Open Android Studio and under the "Refactor" Menu, choose "Migrate to AndroidX", make sure that follow up by agreeing to do the full migration (bottom left of your main IDE)
5. Save and close Android Studio
6. `ionic cap sync`
