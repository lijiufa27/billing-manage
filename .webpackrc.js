export default  {
    "extraBabelPlugins": [
        [
            "import",
            {
                "libraryName": "antd-mobile",
                "libraryDirectory": "es",
                "style": true
            }
        ]
    ],
     "proxy": {
        "/my": {
            "target": "http://localhost:9000",
            "changeOrigin": true,
            "pathRewrite": { "^/my": " " }
        }
    },
    "define": {
        "process.env": {
          "API_EVN": process.env.API_EVN,
        }
      }
}