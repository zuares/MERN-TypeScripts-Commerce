"use strict";
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
    entry: ["webpack/hot/poll?100", "./src/index.ts"],
    watch: true,
    target: "node",
    externals: [
        nodeExternals({
            whitelist: ["webpack/hot/poll?100"]
        })
    ],
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    mode: "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi93ZWJwYWNrLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUV4RCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2IsS0FBSyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUM7SUFDakQsS0FBSyxFQUFFLElBQUk7SUFDWCxNQUFNLEVBQUUsTUFBTTtJQUNkLFNBQVMsRUFBRTtRQUNQLGFBQWEsQ0FBQztZQUNWLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7S0FDTDtJQUNELE1BQU0sRUFBRTtRQUNKLEtBQUssRUFBRTtZQUNIO2dCQUNJLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixPQUFPLEVBQUUsY0FBYzthQUMxQjtTQUNKO0tBQ0o7SUFDRCxJQUFJLEVBQUUsYUFBYTtJQUNuQixPQUFPLEVBQUU7UUFDTCxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztLQUNyQztJQUNELE9BQU8sRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDbkQsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztRQUNsQyxRQUFRLEVBQUUsVUFBVTtLQUN2QjtDQUNKLENBQUMifQ==