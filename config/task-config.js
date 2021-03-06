module.exports = {
  html        : true,
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : false,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"]
    },
    hot: {
      react: true
    },
    babel: {
      presets: ["es2015", "react", 'stage-1']
    }
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public'
    }
  },

  production: {
    rev: true
  },

  react: true
}

