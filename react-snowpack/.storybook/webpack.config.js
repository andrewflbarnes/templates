const path = require("path")

module.exports = ({ config }) => {
  // a bunch of other rules here

  config.resolve.modules = [
    path.resolve(__dirname, "..", "src"),
    "node_modules",
  ]

  // Alternately, for an alias:
  config.resolve.alias = {
    "@components": path.resolve(__dirname, "..", "src", "components"),
    "@containers": path.resolve(__dirname, "..", "src", "containers"),
    "@store": path.resolve(__dirname, "..", "src", "store"),
  }

  return config
}