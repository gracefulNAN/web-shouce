import {override, fixBabelImports } from 'customize-cra';

export default override(
  fixBabelImports("import", {
    librayName: "antd",
    librayDirectory: "es",
    "style": "css"
  }),
)