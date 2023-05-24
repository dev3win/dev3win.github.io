<div align="center">
  <img src="https://github.com/dev3win/dev3win.github.io/blob/main/silentsymphony/icons/Icon-512.png" width="100px" alt="Logo" style="margin-bottom: 20px;">
  <h1 style="margin-top: 20px;">SilentSymphony - Focus & Relax</h1>
</div>


SilentSymphony is a mobile application available on [Google Play](https://play.google.com/store/apps/details?id=pl.dev3win.silentsymphony). The app was built from scratch without relying on tutorials, following my own ideas. The design and features of the app were inspired by existing applications in the market. During the development process, I mainly referred to the Flutter documentation, Stack Overflow, and ChatGPT.

## Features
- Simultaneous playback of multiple sounds at different volume levels.
- Ability to save a set of sounds as a template.
- Predefined templates with the option to edit and restore sounds settings to their initial state.
- Animated Timer for counting down the playback time. Ability to deactivate the Timer or select a custom time using the time picker.
- Rate App - redirection of the user to the Google Play Store (if installed) or to a website.
- Share App - option to recommend the app to friends.

## Design
- Material 3
- Themes Playground M3

## Dependencies
- animations
- collection
- cupertino_icons
- equatable
- firebase_core
- firebase_crashlytics
- flex_color_scheme
- flutter_bloc
- flutter_svg
- just_audio
- responsive_framework
- share_plus
- shared_preferences
- url_launcher

## Dev Dependencies
- bloc_test
- flutter_launcher_icons
- flutter_lints
- flutter_native_splash
- flutter_test: sdk, lint, mockito

## Views:
<div style="overflow-x: scroll; white-space: nowrap;">
<img src="https://github.com/dev3win/silentsymphony-privacy/blob/main/Screenshots/fullpage-player.jpg" alt="Full Page Player" style="display: inline-block; width: 300px;">
  <img src="https://github.com/dev3win/silentsymphony-privacy/blob/main/Screenshots/bottom-player.jpg" alt="Bottom Player" style="display: inline-block; width: 300px;">
  <img src="https://github.com/dev3win/silentsymphony-privacy/blob/main/Screenshots/compose.jpg" alt="Compose" style="display: inline-block; width: 300px;">
  <img src="https://github.com/dev3win/silentsymphony-privacy/blob/main/Screenshots/set-time.jpg" alt="Set Time" style="display: inline-block; width: 300px;">
  <img src="https://github.com/dev3win/silentsymphony-privacy/blob/main/Screenshots/custom-time.jpg" alt="Custom Time" style="display: inline-block; width: 300px;">
  <img src="https://github.com/dev3win/silentsymphony-privacy/blob/main/Screenshots/reset-data.jpg" alt="Reset Data" style="display: inline-block; width: 300px;">
</div>

## Experiences
This is my first production application, and many aspects of building this app were new to me. I went through multiple online courses, but I still lacked confidence in implementing things.

I asked myself the question from Gary Keller's book, "The One Thing": "What's the one thing I can do / such that by doing it / everything else will be easier or unnecessary?" The answer was to build this application. And I didn't disappoint myself :) Today, I have a completely different perspective on state management in applications.

Here are the initial misconceptions I had during the project and how I changed them along the way:

- Initially, `Sound` was just a simple class representing a single sound. Only halfway through the project did I create `SoundCubitState` to simplify the implementation of the timer. In retrospect, I would move most of the `SoundCubit` functions to `AudioHandler`.
- State management - I had difficulties using `GlobalKey` and passing context to modals. Eventually, I decided to use `MultiBlocProvider` and pass access through arguments in modals. I want to delve deeper into this.
- When starting the project, while building the template object, I initially used the original `soundVolumes` map. This caused problems with loading the correct volume for a sound assigned to a specific template. It was only by creating a copy of the map that I was able to manage the volume correctly.

If you have any concerns or feedback about the SilentSymphony, please let me know by emailing me at [dev@3win.pl](mailto:dev@3win.pl).
