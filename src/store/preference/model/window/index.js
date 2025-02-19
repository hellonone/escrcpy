export default {
  label: 'preferences.window.name',
  field: 'scrcpy',

  children: {
    windowBorderless: {
      label: 'preferences.window.borderless.name',
      field: '--window-borderless',
      type: 'Switch',
      value: undefined,
      placeholder: 'preferences.window.borderless.placeholder',
    },
    fullscreen: {
      label: 'preferences.window.full-screen.name',
      field: '--fullscreen',
      type: 'Switch',
      value: undefined,
      placeholder: 'preferences.window.full-screen.placeholder',
    },
    alwaysOnTop: {
      label: 'preferences.window.always-top.name',
      field: '--always-on-top',
      type: 'Switch',
      value: undefined,
      placeholder: 'preferences.window.always-top.placeholder',
    },
    disableScreensaver: {
      label: 'preferences.window.disable-screen-saver.name',
      field: '--disable-screensaver',
      type: 'Switch',
      value: undefined,
      placeholder: 'preferences.window.disable-screen-saver.placeholder',
    },
    windowWidth: {
      label: 'preferences.window.size.width',
      field: '--window-width',
      type: 'Input.number',
      value: undefined,
      placeholder: 'preferences.window.size.width.placeholder',
    },
    windowHeight: {
      label: 'preferences.window.size.height',
      field: '--window-height',
      type: 'Input.number',
      value: undefined,
      placeholder: 'preferences.window.size.height.placeholder',
    },
  },
}
